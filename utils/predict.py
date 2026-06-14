import torch
import torch.nn as nn
from torchvision import transforms
from PIL import Image
import cv2
import numpy as np
import sys
import os

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from models.efficientnet_model import DeepfakeDetector

# ── Constants ────────────────────────────────────────────────────────────────
MEAN        = [0.485, 0.456, 0.406]
STD         = [0.229, 0.224, 0.225]
IMG_SIZE    = 300
CLASS_NAMES = ['fake', 'real']

# ── Transform ────────────────────────────────────────────────────────────────
transform = transforms.Compose([
    transforms.Resize((IMG_SIZE, IMG_SIZE)),
    transforms.ToTensor(),
    transforms.Normalize(MEAN, STD)
])

# ── Face Detector (Haar Cascade) ──────────────────────────────────────────────
FACE_CASCADE = cv2.CascadeClassifier(
    cv2.data.haarcascades + 'haarcascade_frontalface_default.xml'
)


def crop_face(image: Image.Image, padding: float = 0.3):
    """
    Detects the largest face in a PIL Image and crops to it with padding.
    Falls back to the original image if no face is detected.

    Args:
        image   : PIL Image (RGB)
        padding : extra margin around the face as a fraction of face size

    Returns:
        tuple: (PIL Image cropped to face region or original, bool face_found)
    """
    img_array = np.array(image)
    gray = cv2.cvtColor(img_array, cv2.COLOR_RGB2GRAY)

    faces = FACE_CASCADE.detectMultiScale(
        gray,
        scaleFactor=1.1,
        minNeighbors=5,
        minSize=(60, 60)
    )

    if len(faces) == 0:
        return image, False

    # Pick the largest face by area (handles group photos)
    x, y, w, h = max(faces, key=lambda f: f[2] * f[3])

    # Add padding around the face
    pad_w = int(w * padding)
    pad_h = int(h * padding)

    img_w, img_h = image.size
    x1 = max(0, x - pad_w)
    y1 = max(0, y - pad_h)
    x2 = min(img_w, x + w + pad_w)
    y2 = min(img_h, y + h + pad_h)

    cropped = image.crop((x1, y1, x2, y2))
    return cropped, True


# ── Load Model ───────────────────────────────────────────────────────────────
def load_model(weights_path: str, device: torch.device) -> DeepfakeDetector:
    """Load trained model from .pth file."""
    model = DeepfakeDetector(num_classes=2)
    model.load_state_dict(torch.load(weights_path, map_location=device))
    model.to(device)
    model.eval()
    return model


# ── Predict Single Image ─────────────────────────────────────────────────────
def predict_image(image_path: str, model: DeepfakeDetector, device: torch.device) -> dict:
    """
    Predict whether a single image is Real or Fake.
    Crops to the detected face before prediction for better accuracy.

    Args:
        image_path : path to image file
        model      : loaded DeepfakeDetector model
        device     : torch device (cuda/cpu)

    Returns:
        dict with keys: label, confidence, fake_prob, real_prob, face_detected
    """
    image = Image.open(image_path).convert('RGB')

    # Crop to face region before prediction
    face_image, face_found = crop_face(image)

    tensor = transform(face_image).unsqueeze(0).to(device)  # [1, 3, 300, 300]

    with torch.no_grad():
        outputs = model(tensor)                         # [1, 2]
        probs   = torch.softmax(outputs, dim=1)[0]      # [2]
        pred    = probs.argmax().item()                 # 0=fake, 1=real

    confidence = probs[pred].item() * 100

    return {
        'label'         : CLASS_NAMES[pred],
        'confidence'    : round(confidence, 2),
        'fake_prob'     : round(probs[0].item() * 100, 2),
        'real_prob'     : round(probs[1].item() * 100, 2),
        'face_detected' : face_found,
    }


# ── Predict Video ────────────────────────────────────────────────────────────
def predict_video(video_path: str, model: DeepfakeDetector, device: torch.device,
                  frame_interval: int = 10) -> dict:
    """
    Predict whether a video is Real or Fake by analysing frames.
    Crops to the detected face in each analysed frame before prediction.

    Args:
        video_path     : path to video file
        model          : loaded DeepfakeDetector model
        device         : torch device (cuda/cpu)
        frame_interval : analyse every Nth frame (default every 10th frame)

    Returns:
        dict with keys: label, confidence, fake_prob, real_prob,
                        frames_analysed, total_frames, frame_results
    """
    cap = cv2.VideoCapture(video_path)

    if not cap.isOpened():
        raise ValueError(f'Cannot open video: {video_path}')

    fake_probs  = []
    real_probs  = []
    frame_data  = []
    frame_count = 0
    analysed    = 0

    while True:
        ret, frame = cap.read()
        if not ret:
            break

        if frame_count % frame_interval == 0:
            frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
            image     = Image.fromarray(frame_rgb)

            # Crop to face region before prediction
            face_image, _ = crop_face(image)

            tensor = transform(face_image).unsqueeze(0).to(device)

            with torch.no_grad():
                outputs = model(tensor)
                probs   = torch.softmax(outputs, dim=1)[0]
                fp      = probs[0].item()
                rp      = probs[1].item()
                fake_probs.append(fp)
                real_probs.append(rp)
                frame_data.append((frame_count, round(fp * 100, 2), round(rp * 100, 2)))
                analysed += 1

        frame_count += 1

    cap.release()

    if analysed == 0:
        raise ValueError('No frames could be analysed from the video.')

    avg_fake   = float(np.mean(fake_probs)) * 100
    avg_real   = float(np.mean(real_probs)) * 100
    label      = 'fake' if avg_fake > avg_real else 'real'
    confidence = avg_fake if label == 'fake' else avg_real

    return {
        'label'          : label,
        'confidence'     : round(confidence, 2),
        'fake_prob'      : round(avg_fake, 2),
        'real_prob'      : round(avg_real, 2),
        'frames_analysed': analysed,
        'total_frames'   : frame_count,
        'frame_results'  : [
            {
                'frame_number': frame_num,
                'fake_prob'   : fake_p,
                'real_prob'   : real_p
            }
            for frame_num, fake_p, real_p in frame_data
        ]
    }


# ── Quick Test ───────────────────────────────────────────────────────────────
if __name__ == '__main__':
    device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
    model  = load_model('saved_models/best_model.pth', device)

    print('predict.py loaded successfully')
    print(f'Device: {device}')
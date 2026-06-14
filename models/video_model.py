import cv2
import torch
import numpy as np
from PIL import Image
from torchvision import transforms
import sys
import os

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from models.efficientnet_model import DeepfakeDetector
from utils.predict import crop_face

# ── Constants ────────────────────────────────────────────────────────────────
MEAN     = [0.485, 0.456, 0.406]
STD      = [0.229, 0.224, 0.225]
IMG_SIZE = 300

# ── Transform ────────────────────────────────────────────────────────────────
transform = transforms.Compose([
    transforms.Resize((IMG_SIZE, IMG_SIZE)),
    transforms.ToTensor(),
    transforms.Normalize(MEAN, STD)
])

# ── Extract Most Fake Frame ───────────────────────────────────────────────────
def get_most_fake_frame(video_path: str, model: DeepfakeDetector,
                        device: torch.device,
                        frame_interval: int = 10) -> tuple:
    """
    Extract the single most fake frame (cropped to face) from a video.
    Used to generate Grad-CAM heatmap for video predictions.

    Args:
        video_path     : path to video file
        model          : loaded DeepfakeDetector model
        device         : torch device (cuda/cpu)
        frame_interval : analyse every Nth frame

    Returns:
        tuple: (PIL Image of most fake frame - cropped to face, fake_probability)
    """
    cap = cv2.VideoCapture(video_path)
    if not cap.isOpened():
        raise ValueError(f'Cannot open video: {video_path}')

    best_frame     = None
    best_fake_prob = 0.0
    frame_count    = 0

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
                outputs   = model(tensor)
                probs     = torch.softmax(outputs, dim=1)[0]
                fake_prob = probs[0].item()

            if fake_prob > best_fake_prob:
                best_fake_prob = fake_prob
                best_frame     = face_image  # cropped face, used for Grad-CAM later

        frame_count += 1

    cap.release()

    if best_frame is None:
        raise ValueError('No frames could be extracted from the video.')

    return best_frame, round(best_fake_prob * 100, 2)


# ── Save Most Fake Frame to Disk ──────────────────────────────────────────────
def save_most_fake_frame(video_path: str, model: DeepfakeDetector,
                         device: torch.device, save_path: str,
                         frame_interval: int = 10) -> str:
    """
    Extract most fake frame (cropped to face) and save it to disk.
    Used as input to Grad-CAM for video analysis.

    Args:
        video_path     : path to video file
        model          : loaded DeepfakeDetector model
        device         : torch device
        save_path      : path to save the frame image
        frame_interval : analyse every Nth frame

    Returns:
        str: path where frame was saved
    """
    frame, fake_prob = get_most_fake_frame(video_path, model, device, frame_interval)
    frame.save(save_path)
    return save_path


# ── Get Video Metadata ────────────────────────────────────────────────────────
def get_video_metadata(video_path: str) -> dict:
    """
    Get basic metadata about a video file.

    Args:
        video_path : path to video file

    Returns:
        dict with fps, total_frames, duration_seconds, resolution
    """
    cap = cv2.VideoCapture(video_path)
    if not cap.isOpened():
        raise ValueError(f'Cannot open video: {video_path}')

    fps          = cap.get(cv2.CAP_PROP_FPS)
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    width        = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height       = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    duration     = round(total_frames / fps, 2) if fps > 0 else 0

    cap.release()

    return {
        'fps'              : round(fps, 2),
        'total_frames'     : total_frames,
        'duration_seconds' : duration,
        'resolution'       : f'{width}x{height}'
    }


# ── Quick Test ────────────────────────────────────────────────────────────────
if __name__ == '__main__':
    sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    from utils.predict import load_model

    device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
    model  = load_model('saved_models/best_model.pth', device)

    print('video_model.py loaded successfully')
    print(f'Device: {device}')
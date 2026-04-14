# ================= IMPORTS =================
from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware

import torch
import torch.nn as nn
import torchvision.models as models
from torchvision.models.efficientnet import EfficientNet_B4_Weights
from torchvision import transforms

from facenet_pytorch import MTCNN
from PIL import Image
import cv2
import os
import shutil
import uuid

# ================= APP INIT =================
app = FastAPI()

# Allow frontend (Streamlit or others) to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ================= DEVICE =================
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

# ================= LOAD MODEL =================
MODEL_PATH = os.path.join(os.path.dirname(__file__), "best_model.pth")

model = models.efficientnet_b4(weights=EfficientNet_B4_Weights.DEFAULT)
num_ftrs = model.classifier[1].in_features
model.classifier[1] = nn.Linear(num_ftrs, 2)

model.load_state_dict(torch.load(MODEL_PATH, map_location=device))
model = model.to(device)
model.eval()

# ================= FACE DETECTOR =================
mtcnn = MTCNN(image_size=224, margin=20, keep_all=False, device=device)

# ================= TRANSFORMS =================
MEAN = [0.485, 0.456, 0.406]
STD  = [0.229, 0.224, 0.225]

normalize = transforms.Normalize(MEAN, STD)

# ================= IMAGE PREDICTION =================
def predict_image(image):
    image = image.convert("RGB")

    # Detect face
    face = mtcnn(image)

    # If no face detected → fallback
    if face is None:
        image = image.resize((224, 224))
        image = transforms.ToTensor()(image)
    else:
        face = face / 255.0
        image = face

    image = normalize(image).unsqueeze(0).to(device)

    with torch.no_grad():
        output = model(image)
        probs = torch.softmax(output, dim=1)
        conf, pred = torch.max(probs, 1)

    return pred.item(), conf.item()

# ================= FRAME EXTRACTION =================
def extract_frames(video_path):
    folder = f"frames_{uuid.uuid4()}"
    os.makedirs(folder, exist_ok=True)

    cap = cv2.VideoCapture(video_path)
    count, saved = 0, 0

    while True:
        ret, frame = cap.read()
        if not ret:
            break

        # Take 1 frame every 10 frames
        if count % 10 == 0:
            frame_path = os.path.join(folder, f"frame_{saved}.jpg")
            cv2.imwrite(frame_path, frame)
            saved += 1

        count += 1

    cap.release()
    return folder

# ================= VIDEO PREDICTION =================
def predict_video(video_path):
    folder = extract_frames(video_path)

    real, fake = 0, 0
    confidences = []

    for img_name in os.listdir(folder):
        img_path = os.path.join(folder, img_name)

        try:
            image = Image.open(img_path)
            pred, conf = predict_image(image)

            confidences.append(conf)

            if pred == 0:
                fake += 1
            else:
                real += 1

        except:
            continue

    # Cleanup frames folder
    shutil.rmtree(folder)

    if len(confidences) == 0:
        return "ERROR", 0.0

    avg_conf = sum(confidences) / len(confidences)
    result = "FAKE" if fake > real else "REAL"

    return result, avg_conf

# ================= API ENDPOINT =================
@app.post("/predict/")
async def predict(file: UploadFile = File(...)):

    try:
        print(f"Processing file: {file.filename}")

        # Save file temporarily
        file_path = f"temp_{uuid.uuid4()}_{file.filename}"

        with open(file_path, "wb") as f:
            f.write(await file.read())

        # ================= IMAGE =================
        if file.filename.lower().endswith((".jpg", ".png", ".jpeg")):
            image = Image.open(file_path)
            pred, conf = predict_image(image)

            result = "FAKE" if pred == 0 else "REAL"

            os.remove(file_path)

            return {
                "type": "image",
                "result": result,
                "confidence": float(conf)
            }

        # ================= VIDEO =================
        elif file.filename.lower().endswith(".mp4"):
            result, conf = predict_video(file_path)

            os.remove(file_path)

            return {
                "type": "video",
                "result": result,
                "confidence": float(conf)
            }

        else:
            os.remove(file_path)
            return {"error": "Unsupported file type"}

    except Exception as e:
        return {"error": str(e)}
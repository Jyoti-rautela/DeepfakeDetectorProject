import sys
import os
import uuid
import shutil

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

import torch
from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from utils.predict import load_model, predict_image, predict_video
from utils.gradcam import generate_gradcam, save_gradcam
from models.video_model import get_most_fake_frame, save_most_fake_frame, get_video_metadata

import numpy as np
import base64
import cv2

# ── App Setup ─────────────────────────────────────────────────────────────────
app = FastAPI(title='DeepfakeDetector API', version='1.0.0')

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_methods=['*'],
    allow_headers=['*'],
)

# ── Device & Model ────────────────────────────────────────────────────────────
DEVICE  = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
WEIGHTS = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                       'saved_models', 'best_model.pth')
model   = load_model(WEIGHTS, DEVICE)

# ── Temp folder for uploads ───────────────────────────────────────────────────
TEMP_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'temp')
os.makedirs(TEMP_DIR, exist_ok=True)

# ── Allowed file types ────────────────────────────────────────────────────────
IMAGE_TYPES = {'image/jpeg', 'image/png', 'image/webp'}
VIDEO_TYPES = {'video/mp4', 'video/quicktime', 'video/x-msvideo', 'video/webm'}

# ── Helper — numpy array to base64 string ─────────────────────────────────────
def array_to_base64(img_array: np.ndarray) -> str:
    """Convert numpy image array to base64 string for JSON response."""
    _, buffer = cv2.imencode('.jpg', cv2.cvtColor(img_array, cv2.COLOR_RGB2BGR))
    return base64.b64encode(buffer).decode('utf-8')


# ── Health Check ──────────────────────────────────────────────────────────────
@app.get('/api/healthz')
def health():
    return {'status': 'ok', 'device': str(DEVICE)}


# ── Image Prediction ──────────────────────────────────────────────────────────
@app.post('/api/predict/image')
async def predict_image_endpoint(file: UploadFile = File(...)):
    if file.content_type not in IMAGE_TYPES:
        raise HTTPException(status_code=400,
                            detail='Invalid file type. Accepted: jpeg, png, webp')

    temp_path = os.path.join(TEMP_DIR, f'{uuid.uuid4()}.jpg')
    try:
        with open(temp_path, 'wb') as f:
            shutil.copyfileobj(file.file, f)

        result = predict_image(temp_path, model, DEVICE)

        cam_array  = generate_gradcam(temp_path, model, DEVICE)
        cam_base64 = array_to_base64(cam_array)

        return JSONResponse({
            'label'         : result['label'],
            'confidence'    : result['confidence'],
            'fake_prob'     : result['fake_prob'],
            'real_prob'     : result['real_prob'],
            'face_detected' : result.get('face_detected', False),
            'gradcam'       : cam_base64,
            'type'          : 'image'
        })

    finally:
        if os.path.exists(temp_path):
            os.remove(temp_path)


# ── Video Prediction ──────────────────────────────────────────────────────────
@app.post('/api/predict/video')
async def predict_video_endpoint(file: UploadFile = File(...)):
    if file.content_type not in VIDEO_TYPES:
        raise HTTPException(status_code=400,
                            detail='Invalid file type. Accepted: mp4, mov, avi, webm')

    temp_video = os.path.join(TEMP_DIR, f'{uuid.uuid4()}.mp4')
    temp_frame = os.path.join(TEMP_DIR, f'{uuid.uuid4()}.jpg')

    try:
        with open(temp_video, 'wb') as f:
            shutil.copyfileobj(file.file, f)

        metadata = get_video_metadata(temp_video)
        result   = predict_video(temp_video, model, DEVICE)

        save_most_fake_frame(temp_video, model, DEVICE, temp_frame)
        cam_array  = generate_gradcam(temp_frame, model, DEVICE)
        cam_base64 = array_to_base64(cam_array)

        return JSONResponse({
            'label'           : result['label'],
            'confidence'      : result['confidence'],
            'fake_prob'       : result['fake_prob'],
            'real_prob'       : result['real_prob'],
            'frames_analysed' : result['frames_analysed'],
            'total_frames'    : result['total_frames'],
            'frame_results'   : result['frame_results'],
            'gradcam'         : cam_base64,
            'metadata'        : metadata,
            'type'            : 'video'
        })

    finally:
        if os.path.exists(temp_video):
            os.remove(temp_video)
        if os.path.exists(temp_frame):
            os.remove(temp_frame)


# ── Run ───────────────────────────────────────────────────────────────────────
if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host='0.0.0.0', port=8000)
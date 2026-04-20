# OrVex — AI-Powered Deepfake Detection

## About
OrVex is a deepfake detection platform built as a Final Year Project at Amrapali University, B.Tech CSE 2026. It uses a fine-tuned EfficientNet-B3 model trained on 140,000 real and fake face images to detect AI-generated media with 91.61% accuracy.

## Project Architecture
React UI (OrVex frontend)
↓
Node.js / Express (server.mjs)
↓
FastAPI Backend (api/main.py)
↓
EfficientNet-B3 Model (91.61% accuracy)
↓
Real / Fake + Confidence + Grad-CAM Heatmap

## Requirements
- Node.js 18 or higher
- Python 3.11
- NVIDIA GPU (recommended)

## Quick Start

### 1. Start the Python backend
# From project root
python api/main.py

### 2. Install frontend dependencies
cd frontend
npm install

### 3. Start the frontend server
npm start

### 4. Open in browser
http://localhost:3000

Both servers must be running at the same time.
---

## What It Does
- Upload an image or video for deepfake detection
- AI pipeline analyzes the media using EfficientNet-B3
- Returns REAL or FAKE verdict with confidence score
- Shows Grad-CAM heatmap highlighting suspicious regions
- For videos — shows frame-by-frame fake probability graph
- Displays AI processing logs during analysis

## Model Performance

| Metric | Score |
|---|---|
| Accuracy | 91.61% |
| Precision | 94.15% |
| Recall | 88.73% |
| F1 Score | 91.36% |

## API Endpoints
- `GET  /api/healthz` — Health check
- `POST /api/analyze` — Upload image/video, get prediction result

## Changing the Port
PORT=8080 npm start

## Project Structure
DeepfakeDetectorProject/
├── models/
│   ├── efficientnet_model.py   ← EfficientNet-B3 model class
│   └── video_model.py          ← Video frame extraction
├── utils/
│   ├── predict.py              ← Image & video prediction functions
│   └── gradcam.py              ← Grad-CAM heatmap generation
├── api/
│   └── main.py                 ← FastAPI backend
├── frontend/
│   ├── server.mjs              ← Node.js server
│   ├── public/                 ← Built React frontend
│   └── package.json
├── notebooks/
│   ├── preprocessing.ipynb
│   ├── train.ipynb
│   └── evaluate.ipynb
├── saved_models/
│   └── best_model.pth          ← Trained model weights
└── requirements.txt
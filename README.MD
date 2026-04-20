# OrVex — AI-Powered Deepfake Detection

![Python](https://img.shields.io/badge/Python-3.11-blue)
![PyTorch](https://img.shields.io/badge/PyTorch-2.5-orange)
![Accuracy](https://img.shields.io/badge/Accuracy-91.61%25-green)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

Final Year Project — B.Tech CSE 2026 | Amrapali University

---

## Overview

OrVex is an AI-powered deepfake detection platform that identifies whether an image or video contains AI-generated synthetic media. It uses a fine-tuned EfficientNet-B3 deep learning model trained on 140,000 real and fake face images.

---

## Model Performance

| Metric | Score |
|---|---|
| Accuracy | 91.61% |
| Precision | 94.15% |
| Recall | 88.73% |
| F1 Score | 91.36% |

Trained on: [140k Real vs Fake Faces Dataset](https://www.kaggle.com/datasets/xhlulu/140k-real-and-fake-faces)

---

## Features

- Detects deepfakes in both images and videos
- Grad-CAM heatmap showing which facial region triggered the prediction
- Frame-by-frame fake probability graph for videos
- Real-time AI processing logs in the UI
- REST API for integration with other systems
- Supports JPEG, PNG, WebP images and MP4, MOV, AVI, WebM videos

---

## Project Architecture
React UI (OrVex)
↓
Node.js / Express server.mjs  (port 3000)
↓
FastAPI Backend api/main.py   (port 8000)
↓
EfficientNet-B3 Model
↓
Real / Fake + Confidence + Grad-CAM + Frame Results

---

## Project Structure
DeepfakeDetectorProject/
├── models/
│   ├── efficientnet_model.py   ← EfficientNet-B3 model class
│   └── video_model.py          ← Video frame extraction & metadata
├── utils/
│   ├── predict.py              ← Image & video prediction functions
│   └── gradcam.py              ← Grad-CAM heatmap generation
├── api/
│   └── main.py                 ← FastAPI backend (port 8000)
├── frontend/
│   ├── server.mjs              ← Node.js/Express server (port 3000)
│   ├── public/                 ← Built React frontend
│   └── package.json
├── notebooks/
│   ├── dataset.ipynb           ← Dataset download
│   ├── dataExploration.ipynb   ← Dataset visualization
│   ├── preprocessing.ipynb     ← Data transforms & DataLoaders
│   ├── train.ipynb             ← Model training loop
│   └── evaluate.ipynb          ← Metrics & confusion matrix
├── saved_models/
│   └── best_model.pth          ← Trained model weights
├── requirements.txt
└── README.md

---

## Setup & Installation

### Requirements
- Python 3.11
- Node.js 18 or higher
- NVIDIA GPU (recommended)

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/DeepfakeDetectorProject.git
cd DeepfakeDetectorProject
```

### 2. Create Python virtual environment
```bash
py -3.11 -m venv .venv
.venv\Scripts\activate        # Windows
source .venv/bin/activate     # Mac/Linux
```

### 3. Install Python dependencies
```bash
pip install -r requirements.txt
```

### 4. Install frontend dependencies
```bash
cd frontend
npm install
cd ..
```

---

## Running the Project

You need two terminals running at the same time.

**Terminal 1 — Python backend:**
```bash
python api/main.py
```

**Terminal 2 — Frontend server:**
```bash
cd frontend
node server.mjs
```
---
Then open your browser at:
http://localhost:3000

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/healthz` | Health check — returns status and device |
| POST | `/api/predict/image` | Upload image → returns label, confidence, gradcam |
| POST | `/api/predict/video` | Upload video → returns label, confidence, frame results, gradcam |

---

## Training

Training was done on Kaggle Notebooks with a free T4 GPU using the 140k Real vs Fake Faces dataset.

| Setting | Value |
|---|---|
| Model | EfficientNet-B3 |
| Input size | 300×300 |
| Batch size | 32 |
| Optimizer | Adam (lr=1e-3) |
| Loss | CrossEntropyLoss |
| Epochs | 6 |
| Best val accuracy | 91.46% |

To retrain the model, open `notebooks/train.ipynb` on Kaggle Notebooks with GPU enabled and run all cells.

---

## Technology Stack

| Layer | Technology |
|---|---|
| Model | EfficientNet-B3, PyTorch |
| Training | Kaggle Notebooks, T4 GPU |
| Backend API | FastAPI, Uvicorn |
| Frontend Server | Node.js, Express |
| UI | React (pre-built) |
| Explainability | Grad-CAM |
| Data | NumPy, Pandas, OpenCV, Pillow |
| Evaluation | scikit-learn |

---

## Limitations

- Optimised for detecting photorealistic AI-generated faces
- Non-photorealistic content (cartoons, illustrations) falls outside training distribution
- Best results on front-facing face images and videos
- Video analysis samples every 10th frame by default

---

## License

MIT License — free to use for educational purposes.
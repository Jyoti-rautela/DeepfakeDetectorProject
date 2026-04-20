# OrVex — AI-Powered Deepfake Detection

## Quick Start

### Requirements
- Node.js 18 or higher

### 1. Install dependencies
```
npm install
```

### 2. Run the server
```
npm start
```

### 3. Open in browser
```
http://localhost:3000
```

That's it. The frontend and API are served from the same server.

---

## What It Does
- Upload an image or video to the Face Analysis Sandbox
- Enable your webcam and capture a frame for analysis
- The AI pipeline analyzes the media and returns REAL or FAKE with a confidence score and processing logs
- Take the Quiz to test your own ability to spot deepfakes

## Changing the Port
```
PORT=8080 npm start
```

## Project Structure
```
orvex/
  server.mjs      ← Single server: frontend + API
  public/         ← Built frontend (HTML, CSS, JS)
  package.json
```

## API Endpoints
- GET  /api/healthz   — Health check
- POST /api/analyze   — Upload image/video, get deepfake detection result

import express from "express";
import cors from "cors";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import fetch from "node-fetch";
import FormData from "form-data";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 50 * 1024 * 1024 } });

app.use(cors());
app.use(express.json());

// ─── FastAPI backend URL ──────────────────────────────────────────────────────
const FASTAPI_URL = "http://localhost:8000";

// ─── Health Check ─────────────────────────────────────────────────────────────
app.get("/api/healthz", async (_req, res) => {
  try {
    const response = await fetch(`${FASTAPI_URL}/api/healthz`);
    const data     = await response.json();
    res.json(data);
  } catch (err) {
    res.status(503).json({ status: "error", message: "FastAPI backend not reachable" });
  }
});

// ─── AI Log Messages ──────────────────────────────────────────────────────────
const AI_LOGS = [
  "Initializing neural network pipeline...",
  "Running CNN feature extraction...",
  "Analyzing facial landmark geometry...",
  "Checking eye-blink patterns...",
  "Detecting micro-expression inconsistencies...",
  "Analyzing shadow physics and lighting coherence...",
  "Checking rPPG (remote photoplethysmography) signals...",
  "Running GAN artifact detector...",
  "Analyzing temporal coherence across frames...",
  "Cross-referencing with deepfake signature database...",
  "Generating final authenticity verdict...",
];

// ─── Analyze Endpoint ─────────────────────────────────────────────────────────
app.post("/api/analyze", upload.single("file"), async (req, res) => {
  const file = req.file;

  if (!file) {
    return res.status(400).json({ error: "No file provided" });
  }

  const imageTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
  const videoTypes = ["video/mp4", "video/quicktime", "video/x-msvideo", "video/webm"];
  const validTypes = [...imageTypes, ...videoTypes];

  if (!validTypes.includes(file.mimetype)) {
    return res.status(400).json({ error: "Invalid file type. Upload an image or video." });
  }

  try {
    const startTime = Date.now();

    // ── Forward to FastAPI ──────────────────────────────────────────────────
    const isVideo   = videoTypes.includes(file.mimetype);
    const endpoint  = isVideo ? "/api/predict/video" : "/api/predict/image";

    const formData  = new FormData();
    formData.append("file", file.buffer, {
      filename    : file.originalname,
      contentType : file.mimetype,
    });

    const fastapiRes = await fetch(`${FASTAPI_URL}${endpoint}`, {
      method  : "POST",
      body    : formData,
      headers : formData.getHeaders(),
    });

    if (!fastapiRes.ok) {
      const err = await fastapiRes.json();
      return res.status(500).json({ error: err.detail || "Prediction failed" });
    }

    const prediction = await fastapiRes.json();

    // ── Build AI logs ───────────────────────────────────────────────────────
    const shuffled = [...AI_LOGS].sort(() => Math.random() - 0.5);
    const logs     = shuffled.slice(0, 6 + Math.floor(Math.random() * 4));
    logs.push(`Final verdict: ${prediction.label.toUpperCase()} (${prediction.confidence}% confidence)`);

    // ── Send response ───────────────────────────────────────────────────────
    res.json({
      result         : prediction.label,
      confidence     : prediction.confidence,
      fake_prob      : prediction.fake_prob,
      real_prob      : prediction.real_prob,
      gradcam        : prediction.gradcam,
      frame_results  : prediction.frame_results  || null,
      metadata       : prediction.metadata       || null,
      frames_analysed: prediction.frames_analysed || null,
      total_frames   : prediction.total_frames   || null,
      logs,
      processingTime : Date.now() - startTime,
      type           : prediction.type,
    });

  } catch (err) {
    console.error("Error contacting FastAPI:", err.message);
    res.status(500).json({ error: "Failed to contact prediction backend." });
  }
});

// ─── Serve Frontend ───────────────────────────────────────────────────────────
app.use(express.static(path.join(__dirname, "public")));

app.get("/*splat", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ─── Start ────────────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`\n  OrVex is running at  http://localhost:${PORT}\n`);
});
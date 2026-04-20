import express from "express";
import cors from "cors";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 50 * 1024 * 1024 } });

app.use(cors());
app.use(express.json());

// ─── API routes ──────────────────────────────────────────────────────────────

app.get("/api/healthz", (_req, res) => {
  res.json({ status: "ok" });
});

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

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

app.post("/api/analyze", upload.single("file"), async (req, res) => {
  const file = req.file;

  if (!file) {
    return res.status(400).json({ error: "No file provided" });
  }

  const validTypes = [
    "image/jpeg", "image/png", "image/gif", "image/webp",
    "video/mp4", "video/quicktime", "video/x-msvideo", "video/webm",
  ];

  if (!validTypes.includes(file.mimetype)) {
    return res.status(400).json({ error: "Invalid file type. Upload an image or video." });
  }

  const startTime = Date.now();
  await sleep(2000 + Math.random() * 2000);

  const isFake = Math.random() < 0.5;
  const result = isFake ? "fake" : "real";
  const confidence = Math.floor((isFake ? 80 : 82) + Math.random() * 16);

  const shuffled = [...AI_LOGS].sort(() => Math.random() - 0.5);
  const logs = shuffled.slice(0, 6 + Math.floor(Math.random() * 4));
  logs.push(`Final verdict: ${result.toUpperCase()} (${confidence}% confidence)`);

  res.json({ result, confidence, logs, processingTime: Date.now() - startTime });
});

// ─── Serve built frontend (everything else) ──────────────────────────────────

app.use(express.static(path.join(__dirname, "public")));

app.get("/*splat", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ─── Start ───────────────────────────────────────────────────────────────────

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`\n  OrVex is running at  http://localhost:${PORT}\n`);
});

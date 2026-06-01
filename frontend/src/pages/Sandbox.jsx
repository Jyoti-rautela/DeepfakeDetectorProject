import { useState } from 'react'
import { RotateCcw, Image, Video } from 'lucide-react'
import { useAnalyze } from '../hooks/useAnalyze'
import StatusBadge from '../components/common/StatusBadge'
import UploadZone from '../components/sandbox/UploadZone'
import FilePreview from '../components/sandbox/FilePreview'
import AnalyzeButton from '../components/sandbox/AnalyzeButton'
import VerdictCard from '../components/sandbox/VerdictCard'
import ConfidenceBar from '../components/sandbox/ConfidenceBar'
import HeatmapView from '../components/sandbox/HeatmapView'
import FrameGraph from '../components/sandbox/FrameGraph'
import VideoMetadata from '../components/sandbox/VideoMetadata'
import ProcessingLogs from '../components/logs/ProcessingLogs'

function AnalysisPanel({ accept, label }) {
  const {
    file, preview, fileType,
    loading, logs, result, error,
    handleFile, analyze, reset,
  } = useAnalyze()

  return (
    <div className="flex flex-col gap-4">
      {!file ? (
        <UploadZone onFile={handleFile} disabled={loading} accept={accept} />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Left — file preview + analyze */}
          <div className="flex flex-col gap-4">
            <FilePreview
              file={file}
              preview={preview}
              fileType={fileType}
              onReset={reset}
            />
            <AnalyzeButton
              onClick={analyze}
              loading={loading}
              disabled={!file || loading}
            />
            <ProcessingLogs logs={logs} loading={loading} />

            {error && (
              <div
                className="rounded-xl p-4 text-sm"
                style={{
                  backgroundColor: 'rgba(239,68,68,0.08)',
                  border: '1px solid rgba(239,68,68,0.3)',
                  color: '#ef4444',
                }}
              >
                {error}
              </div>
            )}
          </div>

          {/* Right — results */}
          <div className="flex flex-col gap-4">
            {result ? (
              <>
                <VerdictCard
                  label={result.label}
                  confidence={result.confidence}
                />
                <ConfidenceBar
                  fakeProb={result.fake_prob}
                  realProb={result.real_prob}
                />
                {result.gradcam && (
                  <HeatmapView
                    original={preview}
                    gradcam={result.gradcam}
                    fileType={result.type}
                  />
                )}
                {result.type === 'video' && (
                  <>
                    <FrameGraph frameResults={result.frame_results} />
                    <VideoMetadata
                      metadata={result.metadata}
                      framesAnalysed={result.frames_analysed}
                      totalFrames={result.total_frames}
                    />
                  </>
                )}
                <button
                  onClick={reset}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-all hover:scale-105"
                  style={{
                    backgroundColor: '#12121a',
                    border: '1px solid #1e1e2e',
                    color: '#94a3b8',
                  }}
                >
                  <RotateCcw size={16} />
                  Analyze Another {label}
                </button>
              </>
            ) : (
              <div
                className="rounded-2xl flex flex-col items-center justify-center text-center p-12"
                style={{
                  backgroundColor: '#12121a',
                  border: '1px dashed #1e1e2e',
                  minHeight: 300,
                }}
              >
                <div className="text-5xl mb-4" style={{ color: '#1e1e2e' }}>⚡</div>
                <p className="text-sm" style={{ color: '#334155' }}>
                  Click Analyse Now to run detection
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default function Sandbox() {
  const [activeTab, setActiveTab] = useState('image')

  const tabs = [
    { id: 'image', label: 'Image Detection', icon: <Image size={16} /> },
    { id: 'video', label: 'Video Detection', icon: <Video size={16} /> },
  ]

  return (
    <div className="pt-16 w-full min-h-screen">

      {/* ── Header ───────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(99,102,241,0.08) 0%, transparent 70%)',
          }}
        />
        <div className="max-w-2xl mx-auto relative z-10">
          <div className="flex justify-center mb-4">
            <StatusBadge />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Face Analysis Sandbox
          </h1>
          <p className="text-sm sm:text-base" style={{ color: '#94a3b8' }}>
            Upload an image or video to detect deepfakes using AI.
            Results include confidence score and Grad-CAM heatmap.
          </p>
        </div>
      </section>

      {/* ── Tabs ─────────────────────────────────────────────── */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div
            className="flex gap-2 p-1 rounded-xl w-fit mb-8"
            style={{ backgroundColor: '#12121a', border: '1px solid #1e1e2e' }}
          >
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
                style={{
                  backgroundColor: activeTab === tab.id ? '#6366f1' : 'transparent',
                  color: activeTab === tab.id ? 'white' : '#64748b',
                }}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Panels ───────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-5xl mx-auto">
          {activeTab === 'image' ? (
            <AnalysisPanel
              key="image"
              accept="image/jpeg,image/png,image/webp"
              label="Image"
            />
          ) : (
            <AnalysisPanel
              key="video"
              accept="video/mp4,video/quicktime,video/x-msvideo,video/webm"
              label="Video"
            />
          )}
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer
        className="py-6 px-4 text-center text-xs sm:text-sm"
        style={{ borderTop: '1px solid #1e1e2e', color: '#334155' }}
      >
        OrVex — Final Year Project | B.Tech CSE 2026 | Amrapali University
      </footer>
    </div>
  )
}
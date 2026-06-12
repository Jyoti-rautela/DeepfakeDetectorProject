import { useState } from 'react'
import { RotateCcw, Image, Video } from 'lucide-react'
import { useAnalyze } from '../hooks/useAnalyze'
import { useTheme } from '../context/ThemeContext'
import StatusBadge from '../components/common/StatusBadge'
import UploadZone from '../components/sandbox/UploadZone'
import AnalyzeButton from '../components/sandbox/AnalyzeButton'
import FrameGraph from '../components/sandbox/FrameGraph'
import VideoMetadata from '../components/sandbox/VideoMetadata'
import ProcessingLogs from '../components/logs/ProcessingLogs'
import ScanOverlay from '../components/sandbox/ScanOverlay'
import ConfidenceGauge from '../components/sandbox/ConfidenceGauge'
import SplitReveal from '../components/sandbox/SplitReveal'

function VerdictBanner({ label }) {
  const isFake = label?.toLowerCase() === 'fake'

  return (
    <div
      className="rounded-2xl flex items-center justify-center gap-4 py-6 px-8"
      style={{
        background: isFake
          ? 'linear-gradient(135deg, rgba(239,68,68,0.15), rgba(239,68,68,0.05))'
          : 'linear-gradient(135deg, rgba(34,197,94,0.15), rgba(34,197,94,0.05))',
        border: `2px solid ${isFake ? 'rgba(239,68,68,0.4)' : 'rgba(34,197,94,0.4)'}`,
        boxShadow: isFake
          ? '0 0 40px rgba(239,68,68,0.2)'
          : '0 0 40px rgba(34,197,94,0.2)',
        animation: 'verdictIn 0.5s cubic-bezier(0.34,1.56,0.64,1) both',
      }}
    >
      <span style={{ fontSize: 40 }}>{isFake ? '🚨' : '✅'}</span>
      <div>
        <div
          className="text-4xl font-black tracking-widest font-mono"
          style={{ color: isFake ? '#ef4444' : '#22c55e' }}
        >
          {isFake ? 'FAKE' : 'REAL'}
        </div>
        <div
          className="text-xs font-mono mt-1"
          style={{ color: isFake ? 'rgba(239,68,68,0.6)' : 'rgba(34,197,94,0.6)' }}
        >
          {isFake ? '⚠️ AI-generated content detected' : '✓ Authentic content verified'}
        </div>
      </div>
    </div>
  )
}

function AnalysisPanel({ accept, label }) {
  const { colors } = useTheme()
  const {
    file, preview, fileType,
    loading, logs, result, error,
    handleFile, analyze, reset,
  } = useAnalyze()

  return (
    <div className="flex flex-col gap-6">
      <style>{`
        @keyframes verdictIn {
          from { opacity: 0; transform: scale(0.85); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>

      {!file ? (
        <UploadZone onFile={handleFile} disabled={loading} accept={accept} />
      ) : (
        <>
          {/* Row 1: Scan preview + Logs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="flex flex-col gap-4">
              <ScanOverlay imageUrl={preview} fileType={fileType} scanning={loading} />
              <AnalyzeButton onClick={analyze} loading={loading} disabled={!file || loading} />
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

            <div
              className="rounded-2xl overflow-hidden flex flex-col"
              style={{
                backgroundColor: colors.surface,
                border: `1px solid ${colors.border}`,
                minHeight: 300,
              }}
            >
              <div
                className="px-4 py-3 text-xs font-mono font-semibold tracking-widest uppercase flex items-center gap-2"
                style={{ borderBottom: `1px solid ${colors.border}`, color: colors.textMuted }}
              >
                <span
                  style={{
                    width: 7, height: 7, borderRadius: '50%',
                    backgroundColor: loading ? '#6366f1' : colors.border,
                    boxShadow: loading ? '0 0 6px #6366f1' : 'none',
                    display: 'inline-block',
                    animation: loading ? 'pulse 1.5s infinite' : 'none',
                  }}
                />
                Processing Logs
              </div>
              <div className="p-4 flex-1 overflow-auto">
                <ProcessingLogs logs={logs} loading={loading} />
              </div>
            </div>
          </div>

          {/* Row 2: Results */}
          {result && (
            <div className="flex flex-col gap-5">
              <VerdictBanner label={result.label} />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ConfidenceGauge
                  label={result.label}
                  confidence={result.confidence}
                  fakeProb={result.fake_prob}
                  realProb={result.real_prob}
                />
                {result.gradcam ? (
                  <SplitReveal original={preview} gradcam={result.gradcam} />
                ) : (
                  <div
                    className="rounded-2xl flex items-center justify-center text-sm"
                    style={{
                      backgroundColor: colors.surface,
                      border: `1px dashed ${colors.border}`,
                      color: colors.textFaint,
                      minHeight: 200,
                    }}
                  >
                    No heatmap available
                  </div>
                )}
              </div>

              {result.type === 'video' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <FrameGraph frameResults={result.frame_results} />
                  <VideoMetadata
                    metadata={result.metadata}
                    framesAnalysed={result.frames_analysed}
                    totalFrames={result.total_frames}
                  />
                </div>
              )}

              <button
                onClick={reset}
                className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-all hover:scale-105"
                style={{
                  backgroundColor: colors.surface,
                  border: `1px solid ${colors.border}`,
                  color: colors.textSub,
                }}
              >
                <RotateCcw size={16} />
                Analyze Another {label}
              </button>
            </div>
          )}

          {!result && !loading && (
            <div
              className="rounded-2xl flex flex-col items-center justify-center text-center p-10"
              style={{
                backgroundColor: colors.surface,
                border: `1px dashed ${colors.border}`,
                minHeight: 140,
              }}
            >
              <div className="text-4xl mb-3" style={{ color: colors.border }}>⚡</div>
              <p className="text-sm" style={{ color: colors.textFaint }}>
                Click Analyse Now to run detection
              </p>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default function Sandbox() {
  const [activeTab, setActiveTab] = useState('image')
  const { colors } = useTheme()

  const tabs = [
    { id: 'image', label: 'Image Detection', icon: <Image size={16} /> },
    { id: 'video', label: 'Video Detection', icon: <Video size={16} /> },
  ]

  return (
    <div className="pt-16 w-full min-h-screen">
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
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3" style={{ color: colors.text }}>
            Face Analysis Sandbox
          </h1>
          <p className="text-sm sm:text-base" style={{ color: colors.textSub }}>
            Upload an image or video to detect deepfakes using AI.
            Results include confidence score and Grad-CAM heatmap.
          </p>
        </div>
      </section>

      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div
            className="flex gap-2 p-1 rounded-xl w-fit mb-8"
            style={{ backgroundColor: colors.surface, border: `1px solid ${colors.border}` }}
          >
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
                style={{
                  backgroundColor: activeTab === tab.id ? '#6366f1' : 'transparent',
                  color: activeTab === tab.id ? 'white' : colors.textMuted,
                }}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-5xl mx-auto">
          {activeTab === 'image' ? (
            <AnalysisPanel key="image" accept="image/jpeg,image/png,image/webp" label="Image" />
          ) : (
            <AnalysisPanel key="video" accept="video/mp4,video/quicktime,video/x-msvideo,video/webm" label="Video" />
          )}
        </div>
      </section>

      <footer
        className="py-6 px-4 text-center text-xs sm:text-sm"
        style={{ borderTop: `1px solid ${colors.border}`, color: colors.textFaint }}
      >
        OrVex — Final Year Project | B.Tech CSE 2026 | Amrapali University
      </footer>
    </div>
  )
}
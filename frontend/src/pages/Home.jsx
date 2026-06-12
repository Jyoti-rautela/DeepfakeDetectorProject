import { Link } from 'react-router-dom'
import { Shield, Zap, Eye, Brain, ChevronRight, Activity } from 'lucide-react'
import StatusBadge from '../components/common/StatusBadge'
import { useTheme } from '../context/ThemeContext'
import Spinner3D from '../components/home/Spinner3D'
import { useReveal } from '../hooks/useReveal'

const stats = [
  { label: 'Test Accuracy', value: '85.61%', sub: 'on 20,000 images'       },
  { label: 'Precision',     value: '94.15%', sub: 'low false alarm rate'    },
  { label: 'Recall',        value: '88.73%', sub: 'deepfakes caught'        },
  { label: 'F1 Score',      value: '91.36%', sub: 'balanced metric'         },
  { label: 'Fine-tuned',    value: '92.98%', sub: 'after FaceForensics++'   },
  { label: 'Training Data', value: '140k',   sub: 'real & fake face images' },
]

const features = [
  {
    icon: <Brain size={22} />,
    title: 'EfficientNet-B3',
    desc: 'State-of-the-art CNN backbone pretrained on ImageNet with custom classification head for binary deepfake detection.',
  },
  {
    icon: <Eye size={22} />,
    title: 'Grad-CAM Explainability',
    desc: 'Visual heatmaps highlight exactly which regions of the face triggered the fake detection — no black box.',
  },
  {
    icon: <Activity size={22} />,
    title: 'Video Frame Analysis',
    desc: 'Analyses every 10th frame of a video independently and aggregates results into a final verdict with per-frame graph.',
  },
  {
    icon: <Zap size={22} />,
    title: 'Real-time Detection',
    desc: 'GPU-accelerated inference delivers results in seconds. Supports JPEG, PNG, WebP images and MP4, MOV, AVI videos.',
  },
  {
    icon: <Shield size={22} />,
    title: 'FaceForensics++ Trained',
    desc: 'Fine-tuned on Face2Face, Deepfakes, NeuralTextures, FaceShifter and FaceSwap manipulation methods.',
  },
  {
    icon: <ChevronRight size={22} />,
    title: 'Open Architecture',
    desc: 'FastAPI backend + React frontend. Clean REST API at localhost:8000 — easy to extend or integrate.',
  },
]

export default function Home() {
  const { colors } = useTheme()
  useReveal()

  return (
    <div className="pt-16 w-full">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99,102,241,0.12) 0%, transparent 70%)',
          }}
        />

        <div className="w-full max-w-7xl mx-auto relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left — text */}
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-6 sm:mb-8">
                <StatusBadge />
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 sm:mb-6 leading-tight">
                <span style={{ color: colors.text }}>Truth matters.</span>
                <br />
                <span
                  style={{
                    background: 'linear-gradient(135deg, #6366f1, #a78bfa)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Verify reality.
                </span>
              </h1>

              <p
                className="text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 sm:mb-10 leading-relaxed"
                style={{ color: colors.textSub }}
              >
                OrVex uses a fine-tuned{' '}
                <span style={{ color: '#a78bfa' }}>EfficientNet-B3</span> deep
                learning model to detect AI-generated deepfake images and videos
                with <span style={{ color: '#a78bfa' }}>92.98% accuracy</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link
                  to="/sandbox"
                  className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold text-white transition-all duration-200 hover:scale-105 text-sm sm:text-base"
                  style={{
                    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                    boxShadow: '0 0 30px rgba(99,102,241,0.3)',
                  }}
                >
                  Start Detection →
                </Link>
                <Link
                  to="/how-it-works"
                  className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold transition-all duration-200 hover:scale-105 text-sm sm:text-base"
                  style={{
                    backgroundColor: colors.surface,
                    border: `1px solid ${colors.border}`,
                    color: colors.textSub,
                  }}
                >
                  How It Works
                </Link>
              </div>

              <p
                className="mt-10 text-xs tracking-widest uppercase"
                style={{ color: colors.textFaint }}
              >
                scroll to explore
              </p>
            </div>

            {/* Right — 3D Spinner */}
            <div className="flex justify-center lg:justify-end">
              <Spinner3D />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────── */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
        style={{ borderTop: `1px solid ${colors.border}` }}
      >
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-10 sm:mb-14 reveal">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-3"
              style={{ color: colors.text }}
            >
              Model Performance
            </h2>
            <p className="text-sm sm:text-base" style={{ color: colors.textMuted }}>
              Evaluated on 20,000 unseen test images after training on 140k faces
            </p>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1} rounded-xl p-4 sm:p-5 text-center transition-all duration-300 hover:-translate-y-1`}
                style={{
                  backgroundColor: colors.surface,
                  border: `1px solid ${colors.border}`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#6366f1'
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(99,102,241,0.1)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = colors.border
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div
                  className="text-2xl sm:text-3xl font-extrabold mb-1"
                  style={{
                    background: 'linear-gradient(135deg, #6366f1, #a78bfa)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs sm:text-sm font-semibold mb-1"
                  style={{ color: colors.text }}
                >
                  {stat.label}
                </div>
                <div
                  className="text-xs hidden sm:block"
                  style={{ color: colors.textFaint }}
                >
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────── */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
        style={{ borderTop: `1px solid ${colors.border}` }}
      >
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-10 sm:mb-14 reveal">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-3"
              style={{ color: colors.text }}
            >
              What Makes OrVex Different
            </h2>
            <p className="text-sm sm:text-base" style={{ color: colors.textMuted }}>
              Built as a Final Year Project at Amrapali University, B.Tech CSE 2026
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1} rounded-xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 cursor-default`}
                style={{
                  backgroundColor: colors.surface,
                  border: `1px solid ${colors.border}`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#6366f1'
                  e.currentTarget.style.boxShadow = '0 0 25px rgba(99,102,241,0.08)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = colors.border
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{
                    backgroundColor: 'rgba(99,102,241,0.15)',
                    color: '#6366f1',
                  }}
                >
                  {f.icon}
                </div>
                <h3
                  className="font-semibold mb-2 text-sm sm:text-base"
                  style={{ color: colors.text }}
                >
                  {f.title}
                </h3>
                <p
                  className="text-xs sm:text-sm leading-relaxed"
                  style={{ color: colors.textMuted }}
                >
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────── */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
        style={{ borderTop: `1px solid ${colors.border}` }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="reveal rounded-2xl p-8 sm:p-12"
            style={{
              background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.1))',
              border: '1px solid rgba(99,102,241,0.3)',
            }}
          >
            <h2
              className="text-2xl sm:text-3xl font-bold mb-4"
              style={{ color: colors.text }}
            >
              Ready to detect deepfakes?
            </h2>
            <p
              className="text-sm sm:text-base mb-6 sm:mb-8 px-4"
              style={{ color: colors.textSub }}
            >
              Upload any image or video and get an AI-powered verdict in seconds
              — with a visual explanation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                to="/sandbox"
                className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold text-white transition-all duration-200 hover:scale-105 text-sm sm:text-base"
                style={{
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                  boxShadow: '0 0 30px rgba(99,102,241,0.3)',
                }}
              >
                Open Sandbox →
              </Link>
              <Link
                to="/trust"
                className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold transition-all duration-200 hover:scale-105 text-sm sm:text-base"
                style={{
                  backgroundColor: colors.surface,
                  border: `1px solid ${colors.border}`,
                  color: colors.textSub,
                }}
              >
                Take the Quiz
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer
        className="py-6 sm:py-8 px-4 text-center text-xs sm:text-sm reveal"
        style={{ borderTop: `1px solid ${colors.border}`, color: colors.textFaint }}
      >
        OrVex — Final Year Project | B.Tech CSE 2026 | Amrapali University
      </footer>

    </div>
  )
}
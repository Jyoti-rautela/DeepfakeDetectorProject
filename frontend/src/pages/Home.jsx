import { Link } from 'react-router-dom'
import { Shield, Zap, Eye, Brain, ChevronRight, Activity } from 'lucide-react'
import StatusBadge from '../components/common/StatusBadge'

const stats = [
  { label: 'Test Accuracy', value: '91.61%', sub: 'on 20,000 images'       },
  { label: 'Precision',     value: '94.15%', sub: 'low false alarm rate'    },
  { label: 'Recall',        value: '88.73%', sub: 'deepfakes caught'        },
  { label: 'F1 Score',      value: '91.36%', sub: 'balanced metric'         },
  { label: 'Fine-tuned',    value: '97.98%', sub: 'after FaceForensics++'   },
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
  return (
    <div className="pt-16 w-full">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">

        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99,102,241,0.12) 0%, transparent 70%)',
          }}
        />

        <div className="w-full max-w-4xl mx-auto text-center relative z-10 py-20">

          {/* Status badge */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <StatusBadge />
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 sm:mb-6 leading-tight">
            <span className="text-white">Truth matters.</span>
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

          {/* Subheading */}
          <p
            className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4"
            style={{ color: '#94a3b8' }}
          >
            OrVex uses a fine-tuned{' '}
            <span style={{ color: '#a78bfa' }}>EfficientNet-B3</span> deep
            learning model to detect AI-generated deepfake images and videos
            with <span style={{ color: '#a78bfa' }}>97.98% accuracy</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
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
                backgroundColor: '#12121a',
                border: '1px solid #1e1e2e',
                color: '#94a3b8',
              }}
            >
              How It Works
            </Link>
          </div>

          {/* Scroll hint */}
          <p className="mt-12 sm:mt-16 text-xs tracking-widest uppercase" style={{ color: '#334155' }}>
            scroll to explore
          </p>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────── */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
        style={{ borderTop: '1px solid #1e1e2e' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Model Performance
            </h2>
            <p className="text-sm sm:text-base" style={{ color: '#64748b' }}>
              Evaluated on 20,000 unseen test images after training on 140k faces
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="rounded-xl p-4 sm:p-5 text-center transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: '#12121a',
                  border: '1px solid #1e1e2e',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#6366f1'
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(99,102,241,0.1)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#1e1e2e'
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
                <div className="text-xs sm:text-sm font-semibold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-xs hidden sm:block" style={{ color: '#475569' }}>
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
        style={{ borderTop: '1px solid #1e1e2e' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              What Makes OrVex Different
            </h2>
            <p className="text-sm sm:text-base" style={{ color: '#64748b' }}>
              Built as a Final Year Project at Amrapali University, B.Tech CSE 2026
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="rounded-xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 cursor-default"
                style={{
                  backgroundColor: '#12121a',
                  border: '1px solid #1e1e2e',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#6366f1'
                  e.currentTarget.style.boxShadow = '0 0 25px rgba(99,102,241,0.08)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#1e1e2e'
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
                <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">
                  {f.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#64748b' }}>
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
        style={{ borderTop: '1px solid #1e1e2e' }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="rounded-2xl p-8 sm:p-12"
            style={{
              background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.1))',
              border: '1px solid rgba(99,102,241,0.3)',
            }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to detect deepfakes?
            </h2>
            <p className="text-sm sm:text-base mb-6 sm:mb-8 px-4" style={{ color: '#94a3b8' }}>
              Upload any image or video and get an AI-powered verdict in seconds — with a visual explanation.
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
                  backgroundColor: '#12121a',
                  border: '1px solid #1e1e2e',
                  color: '#94a3b8',
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
        className="py-6 sm:py-8 px-4 sm:px-6 text-center text-xs sm:text-sm"
        style={{ borderTop: '1px solid #1e1e2e', color: '#334155' }}
      >
        OrVex — Final Year Project | B.Tech CSE 2026 | Amrapali University
      </footer>
    </div>
  )
}
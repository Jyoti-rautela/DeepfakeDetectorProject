import { Link } from 'react-router-dom'
import {
  Upload, Cpu, Brain, Layers, BarChart2,
  CheckCircle, ArrowRight
} from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useReveal } from '../hooks/useReveal'

const steps = [
  {
    number: '01',
    icon: <Upload size={28} />,
    title: 'Upload Media',
    desc: 'Upload any image (JPEG, PNG, WebP) or video (MP4, MOV, AVI, WebM) through the Face Analysis Sandbox. Files are processed locally — nothing is stored permanently.',
    details: [
      'Supports images up to 50MB',
      'Supports videos up to 50MB',
      'File is saved temporarily and deleted after analysis',
    ],
  },
  {
    number: '02',
    icon: <Cpu size={28} />,
    title: 'Preprocessing',
    desc: 'Every image is resized to 300×300 pixels and normalized using ImageNet mean and standard deviation values — the exact same preprocessing used during training.',
    details: [
      'Resize to 300×300 (EfficientNet-B3 native size)',
      'Normalize with mean=[0.485, 0.456, 0.406]',
      'Convert to PyTorch tensor [1, 3, 300, 300]',
    ],
  },
  {
    number: '03',
    icon: <Brain size={28} />,
    title: 'EfficientNet-B3 Inference',
    desc: 'The preprocessed image is passed through EfficientNet-B3 — a deep CNN backbone pretrained on ImageNet, fine-tuned on 140k real and fake faces.',
    details: [
      'Backbone extracts 1536 deep facial features',
      'Custom classifier head: 1536 → 512 → 2',
      'Outputs raw logits for Fake and Real classes',
    ],
  },
  {
    number: '04',
    icon: <Layers size={28} />,
    title: 'Grad-CAM Heatmap',
    desc: 'Gradient-weighted Class Activation Mapping highlights which facial regions influenced the prediction most. Red areas = strongest signal for the verdict.',
    details: [
      'Targets last Conv2dNormActivation layer',
      'Computes gradient of class score w.r.t feature maps',
      'Overlays colored heatmap on original image',
    ],
  },
  {
    number: '05',
    icon: <BarChart2 size={28} />,
    title: 'Video Frame Analysis',
    desc: 'For videos, every 10th frame is extracted and analysed independently. Frame-level predictions are aggregated into a final verdict with a per-frame probability graph.',
    details: [
      'Samples every 10th frame (configurable)',
      'Runs EfficientNet-B3 on each sampled frame',
      'Averages fake probability across all frames',
    ],
  },
  {
    number: '06',
    icon: <CheckCircle size={28} />,
    title: 'Verdict & Confidence',
    desc: 'Softmax converts raw logits to probabilities. The final verdict (REAL or FAKE) is delivered with a confidence score, fake/real probability breakdown, and Grad-CAM heatmap.',
    details: [
      'Softmax → fake_prob + real_prob = 100%',
      'Verdict = class with higher probability',
      'Confidence = probability of predicted class',
    ],
  },
]

const modelInfo = [
  { label: 'Architecture',  value: 'EfficientNet-B3'          },
  { label: 'Input Size',    value: '300 × 300 × 3'            },
  { label: 'Parameters',    value: '~12 Million'               },
  { label: 'Training Data', value: '140k Real & Fake Faces'    },
  { label: 'Val Accuracy',  value: '89.42%'                    },
  { label: 'Test Accuracy', value: '85.61%'                    },
  { label: 'Loss Function', value: 'CrossEntropyLoss'          },
  { label: 'Optimizer',     value: 'Adam (lr=1e-3 → 1e-6)'    },
  { label: 'Epochs',        value: '19 (early stopping)'       },
  { label: 'Batch Size',    value: '32'                        },
  { label: 'Augmentation',  value: 'Flip, Blur, Jitter, Crop' },
  { label: 'GPU',           value: 'Kaggle T4 (training)'      },
]

export default function HowItWorks() {
  const { colors } = useTheme()
  useReveal()

  return (
    <div className="pt-16 w-full">

      {/* ── Header ───────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(99,102,241,0.1) 0%, transparent 70%)',
          }}
        />
        <div className="max-w-3xl mx-auto relative z-10">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono mb-6"
            style={{
              backgroundColor: 'rgba(99,102,241,0.1)',
              border: '1px solid rgba(99,102,241,0.3)',
              color: '#a78bfa',
            }}
          >
            DETECTION PIPELINE
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4"
            style={{ color: colors.text }}
          >
            How OrVex Works
          </h1>
          <p className="text-base sm:text-lg" style={{ color: colors.textSub }}>
            A step-by-step breakdown of the AI pipeline — from file upload to final verdict.
          </p>
        </div>
      </section>

      {/* ── Steps ────────────────────────────────────────────── */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ borderTop: `1px solid ${colors.border}` }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-6">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${(i % 5) + 1} rounded-2xl p-6 sm:p-8 transition-all duration-300`}
                style={{
                  backgroundColor: colors.surface,
                  border: `1px solid ${colors.border}`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#6366f1'
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(99,102,241,0.08)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = colors.border
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">

                  {/* Step number + icon */}
                  <div className="flex sm:flex-col items-center sm:items-center gap-4 sm:gap-2 flex-shrink-0">
                    <div
                      className="text-4xl sm:text-5xl font-black font-mono"
                      style={{ color: 'rgba(99,102,241,0.2)' }}
                    >
                      {step.number}
                    </div>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        backgroundColor: 'rgba(99,102,241,0.12)',
                        color: '#6366f1',
                      }}
                    >
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3
                      className="text-lg sm:text-xl font-bold mb-2"
                      style={{ color: colors.text }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-sm sm:text-base leading-relaxed mb-4"
                      style={{ color: colors.textSub }}
                    >
                      {step.desc}
                    </p>
                    <div className="flex flex-col gap-2">
                      {step.details.map((d, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: '#6366f1' }}
                          />
                          <span
                            className="text-xs sm:text-sm font-mono"
                            style={{ color: colors.textMuted }}
                          >
                            {d}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {i < steps.length - 1 && (
                  <div
                    className="flex justify-center mt-4 sm:hidden"
                    style={{ color: colors.border }}
                  >
                    <ArrowRight size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Model Specs ──────────────────────────────────────── */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
        style={{ borderTop: `1px solid ${colors.border}` }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 reveal">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-3"
              style={{ color: colors.text }}
            >
              Model Specifications
            </h2>
            <p className="text-sm sm:text-base" style={{ color: colors.textMuted }}>
              Technical details of the trained deepfake detection model
            </p>
          </div>

          <div
            className="reveal rounded-2xl overflow-hidden"
            style={{ border: `1px solid ${colors.border}` }}
          >
            {modelInfo.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between px-5 sm:px-8 py-3 sm:py-4 text-sm transition-all duration-200"
                style={{
                  backgroundColor: i % 2 === 0 ? colors.surface : colors.bg,
                  borderBottom: i < modelInfo.length - 1
                    ? `1px solid ${colors.border}`
                    : 'none',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = 'rgba(99,102,241,0.05)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = i % 2 === 0
                    ? colors.surface
                    : colors.bg
                }}
              >
                <span style={{ color: colors.textMuted }}>{item.label}</span>
                <span
                  className="font-mono font-medium text-right"
                  style={{ color: '#a78bfa' }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
        style={{ borderTop: `1px solid ${colors.border}` }}
      >
        <div className="max-w-2xl mx-auto text-center reveal">
          <h2
            className="text-2xl sm:text-3xl font-bold mb-4"
            style={{ color: colors.text }}
          >
            See it in action
          </h2>
          <p
            className="text-sm sm:text-base mb-8"
            style={{ color: colors.textSub }}
          >
            Upload your own image or video and watch the pipeline run in real time.
          </p>
          <Link
            to="/sandbox"
            className="inline-block px-8 py-3.5 rounded-xl font-semibold text-white transition-all duration-200 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              boxShadow: '0 0 30px rgba(99,102,241,0.3)',
            }}
          >
            Open Face Analysis Sandbox →
          </Link>
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
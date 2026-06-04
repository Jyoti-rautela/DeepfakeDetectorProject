import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { CheckCircle, XCircle, RotateCcw, Trophy, Brain } from 'lucide-react'

const quizImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
    label: 'real',
    explanation: 'A real portrait photograph. Natural skin texture, authentic lighting, and genuine eye reflections confirm this is a real photo.',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&q=80',
    label: 'real',
    explanation: 'A real photograph of a cat. Natural fur texture, authentic eye reflections, and genuine depth of field confirm this.',
  },
  {
    id: 3,
    url: 'https://picsum.photos/seed/deepfake3/400/300',
    label: 'fake',
    explanation: 'An AI-generated image. Subtle inconsistencies in texture and lighting gradients reveal it was synthetically created.',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
    label: 'real',
    explanation: 'A real macro photograph. Authentic depth of field blur, natural lighting, and genuine surface detail confirm this.',
  },
  {
    id: 5,
    url: 'https://picsum.photos/seed/deepfake5/400/300',
    label: 'fake',
    explanation: 'An AI-generated image. Unnatural color uniformity and synthetic texture patterns reveal this was not captured by a real camera.',
    },
]

function QuizCard({ question, guess, onGuess, index }) {
  const { colors } = useTheme()
  const answered  = guess !== undefined
  const correct   = answered && guess === question.label
  // eslint-disable-next-line no-unused-vars
  const incorrect = answered && guess !== question.label

  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        border: answered
          ? `2px solid ${correct ? '#22c55e' : '#ef4444'}`
          : `1px solid ${colors.border}`,
        backgroundColor: colors.surface,
        boxShadow: answered
          ? correct
            ? '0 0 30px rgba(34,197,94,0.12)'
            : '0 0 30px rgba(239,68,68,0.12)'
          : 'none',
      }}
    >
      {/* Image with overlay */}
      <div className="relative">
        <img
          src={question.url}
          alt={`quiz ${index + 1}`}
          className="w-full object-cover"
          style={{ height: 220 }}
          onError={e => { e.target.style.display = 'none' }}
        />

        {/* Question number badge */}
        {!answered && (
          <div
            className="absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
            style={{ backgroundColor: 'rgba(0,0,0,0.6)', color: 'white' }}
          >
            {index + 1}
          </div>
        )}

        {/* Result overlay — appears after answering */}
        {answered && (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{
              backgroundColor: correct
                ? 'rgba(34,197,94,0.55)'
                : 'rgba(239,68,68,0.55)',
              backdropFilter: 'blur(2px)',
            }}
          >
            {/* Big icon */}
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-2"
              style={{ backgroundColor: 'rgba(255,255,255,0.25)' }}
            >
              {correct
                ? <CheckCircle size={36} color="white" />
                : <XCircle size={36} color="white" />
              }
            </div>

            {/* Banner text */}
            <div
              className="text-xl font-black tracking-widest uppercase"
              style={{ color: 'white', textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}
            >
              {correct ? 'Correct!' : 'Wrong!'}
            </div>

            {/* What it actually was */}
            <div
              className="mt-1 px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wide"
              style={{ backgroundColor: 'rgba(0,0,0,0.35)', color: 'white' }}
            >
              This was {question.label}
            </div>
          </div>
        )}
      </div>

      {/* Bottom section */}
      <div className="p-4">
        {!answered ? (
          /* Guess buttons */
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => onGuess(question.id, 'real')}
              className="py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105"
              style={{
                backgroundColor: 'rgba(34,197,94,0.1)',
                border: '1.5px solid rgba(34,197,94,0.4)',
                color: '#22c55e',
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(34,197,94,0.2)'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(34,197,94,0.1)'}
            >
              ✅ REAL
            </button>
            <button
              onClick={() => onGuess(question.id, 'fake')}
              className="py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105"
              style={{
                backgroundColor: 'rgba(239,68,68,0.1)',
                border: '1.5px solid rgba(239,68,68,0.4)',
                color: '#ef4444',
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(239,68,68,0.2)'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(239,68,68,0.1)'}
            >
              🚨 FAKE
            </button>
          </div>
        ) : (
          /* Explanation */
          <p className="text-xs sm:text-sm leading-relaxed" style={{ color: colors.textSub }}>
            {question.explanation}
          </p>
        )}
      </div>
    </div>
  )
}

export default function TrustQuiz() {
  const { colors } = useTheme()
  const [guesses, setGuesses]     = useState({})
  const [showResult, setShowResult] = useState(false)

  const total    = quizImages.length
  const answered = Object.keys(guesses).length
  const score    = quizImages.filter(q => guesses[q.id] === q.label).length

  function handleGuess(id, guess) {
    if (showResult) return
    setGuesses(prev => ({ ...prev, [id]: guess }))
  }

  function handleRestart() {
    setGuesses({})
    setShowResult(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function getScoreMessage() {
    const pct = (score / total) * 100
    if (pct === 100) return "Perfect score! You're a deepfake expert."
    if (pct >= 80)   return "Great job! You can spot most deepfakes."
    if (pct >= 60)   return "Not bad! A little more practice needed."
    return "Deepfakes fooled you this time. Keep practicing!"
  }

  return (
    <div className="pt-16 w-full min-h-screen">

      {/* Header */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(99,102,241,0.08) 0%, transparent 70%)',
          }}
        />
        <div className="max-w-2xl mx-auto relative z-10">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono mb-6"
            style={{
              backgroundColor: 'rgba(99,102,241,0.1)',
              border: '1px solid rgba(99,102,241,0.3)',
              color: '#a78bfa',
            }}
          >
            <Brain size={12} /> DEEPFAKE CHALLENGE
          </div>
          <h1
            className="text-3xl sm:text-4xl font-extrabold mb-3"
            style={{ color: colors.text }}
          >
            Would You Trust This?
          </h1>
          <p className="text-sm sm:text-base mb-4" style={{ color: colors.textSub }}>
            Guess whether each image is REAL or AI-generated.
            Results appear instantly on each card.
          </p>

          {/* Progress indicator */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-mono"
            style={{
              backgroundColor: colors.surface,
              border: `1px solid ${colors.border}`,
              color: colors.textMuted,
            }}
          >
            <span style={{ color: '#6366f1' }}>{answered}</span>
            <span>/</span>
            <span>{total}</span>
            <span>answered</span>
          </div>
        </div>
      </section>

      {/* Quiz Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {quizImages.map((q, i) => (
              <QuizCard
                key={q.id}
                question={q}
                guess={guesses[q.id]}
                onGuess={handleGuess}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Score Summary — appears after all answered */}
      {answered === total && (
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-2xl mx-auto">
            <div
              className="rounded-3xl p-8 sm:p-10 text-center"
              style={{
                backgroundColor: colors.surface,
                border: `1px solid ${colors.border}`,
                boxShadow: '0 0 60px rgba(99,102,241,0.08)',
              }}
            >
              {/* Trophy */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: 'rgba(99,102,241,0.1)', color: '#6366f1' }}
              >
                <Trophy size={32} />
              </div>

              {/* Score */}
              <div
                className="text-5xl sm:text-6xl font-black mb-2"
                style={{
                  background: 'linear-gradient(135deg, #6366f1, #a78bfa)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {score} / {total}
              </div>

              <p className="text-base sm:text-lg font-semibold mb-2" style={{ color: colors.text }}>
                {getScoreMessage()}
              </p>

              <p className="text-sm mb-6" style={{ color: colors.textMuted }}>
                You correctly identified {score} out of {total} images
              </p>

              {/* Score bar */}
              <div
                className="h-3 rounded-full overflow-hidden mb-8"
                style={{ backgroundColor: colors.border }}
              >
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{
                    width: `${(score / total) * 100}%`,
                    background: score === total
                      ? 'linear-gradient(90deg, #22c55e, #16a34a)'
                      : 'linear-gradient(90deg, #6366f1, #a78bfa)',
                  }}
                />
              </div>

              {/* Per question results */}
              <div className="flex flex-col gap-2 mb-8 text-left">
                {quizImages.map((q, i) => {
                  const correct = guesses[q.id] === q.label
                  return (
                    <div
                      key={q.id}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm"
                      style={{
                        backgroundColor: correct
                          ? 'rgba(34,197,94,0.08)'
                          : 'rgba(239,68,68,0.08)',
                        border: `1px solid ${correct
                          ? 'rgba(34,197,94,0.2)'
                          : 'rgba(239,68,68,0.2)'}`,
                      }}
                    >
                      {correct
                        ? <CheckCircle size={16} color="#22c55e" />
                        : <XCircle size={16} color="#ef4444" />
                      }
                      <span style={{ color: colors.textSub }}>
                        Image {i + 1} — was{' '}
                        <span
                          className="font-semibold uppercase"
                          style={{ color: q.label === 'real' ? '#22c55e' : '#ef4444' }}
                        >
                          {q.label}
                        </span>
                        {' '}— you said{' '}
                        <span
                          className="font-semibold uppercase"
                          style={{ color: guesses[q.id] === 'real' ? '#22c55e' : '#ef4444' }}
                        >
                          {guesses[q.id]}
                        </span>
                      </span>
                    </div>
                  )
                })}
              </div>

              {/* Restart */}
              <button
                onClick={handleRestart}
                className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white mx-auto transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
              >
                <RotateCcw size={16} />
                Try Again
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer
        className="py-6 px-4 text-center text-xs sm:text-sm"
        style={{ borderTop: `1px solid ${colors.border}`, color: colors.textFaint }}
      >
        OrVex — Final Year Project | B.Tech CSE 2026 | Amrapali University
      </footer>
    </div>
  )
}
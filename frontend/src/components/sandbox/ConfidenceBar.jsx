import { useTheme } from '../../context/ThemeContext'

export default function ConfidenceBar({ fakeProb, realProb }) {
  const { colors } = useTheme()

  return (
    <div
      className="rounded-2xl p-5 sm:p-6"
      style={{ backgroundColor: colors.surface, border: `1px solid ${colors.border}` }}
    >
      <h3 className="font-semibold mb-4 text-sm sm:text-base" style={{ color: colors.text }}>
        Probability Breakdown
      </h3>

      <div className="mb-4">
        <div className="flex justify-between text-xs sm:text-sm mb-1.5">
          <span style={{ color: colors.textSub }}>Fake Probability</span>
          <span className="font-mono font-medium" style={{ color: '#ef4444' }}>
            {fakeProb}%
          </span>
        </div>
        <div className="h-2.5 rounded-full overflow-hidden" style={{ backgroundColor: colors.border }}>
          <div
            className="h-full rounded-full transition-all duration-1000"
            style={{ width: `${fakeProb}%`, background: 'linear-gradient(90deg, #ef4444, #dc2626)' }}
          />
        </div>
      </div>

      <div>
        <div className="flex justify-between text-xs sm:text-sm mb-1.5">
          <span style={{ color: colors.textSub }}>Real Probability</span>
          <span className="font-mono font-medium" style={{ color: '#22c55e' }}>
            {realProb}%
          </span>
        </div>
        <div className="h-2.5 rounded-full overflow-hidden" style={{ backgroundColor: colors.border }}>
          <div
            className="h-full rounded-full transition-all duration-1000"
            style={{ width: `${realProb}%`, background: 'linear-gradient(90deg, #22c55e, #16a34a)' }}
          />
        </div>
      </div>
    </div>
  )
}
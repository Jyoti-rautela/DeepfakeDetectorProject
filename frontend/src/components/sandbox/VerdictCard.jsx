import { ShieldCheck, ShieldX } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

export default function VerdictCard({ label, confidence }) {
  const { colors } = useTheme()
  const isFake = label?.toLowerCase() === 'fake'

  return (
    <div
      className="rounded-2xl p-6 sm:p-8 text-center"
      style={{
        backgroundColor: colors.surface,
        border: `1px solid ${isFake ? '#ef4444' : '#22c55e'}`,
        boxShadow: isFake
          ? '0 0 40px rgba(239,68,68,0.12)'
          : '0 0 40px rgba(34,197,94,0.12)',
      }}
    >
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
        style={{
          backgroundColor: isFake ? 'rgba(239,68,68,0.1)' : 'rgba(34,197,94,0.1)',
          color: isFake ? '#ef4444' : '#22c55e',
        }}
      >
        {isFake ? <ShieldX size={32} /> : <ShieldCheck size={32} />}
      </div>

      <div
        className="text-4xl sm:text-5xl font-black mb-2 tracking-wide"
        style={{ color: isFake ? '#ef4444' : '#22c55e' }}
      >
        {isFake ? 'FAKE' : 'REAL'}
      </div>

      <div className="text-sm mb-4" style={{ color: colors.textMuted }}>
        {isFake
          ? 'AI-generated or manipulated media detected'
          : 'Authentic media — no manipulation detected'}
      </div>

      <div
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-mono font-medium"
        style={{
          backgroundColor: isFake ? 'rgba(239,68,68,0.1)' : 'rgba(34,197,94,0.1)',
          color: isFake ? '#ef4444' : '#22c55e',
          border: `1px solid ${isFake ? 'rgba(239,68,68,0.3)' : 'rgba(34,197,94,0.3)'}`,
        }}
      >
        {confidence}% confidence
      </div>
    </div>
  )
}
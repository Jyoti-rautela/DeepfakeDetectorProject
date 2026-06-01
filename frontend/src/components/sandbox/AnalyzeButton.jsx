import Spinner from '../common/Spinner'
import { Zap } from 'lucide-react'

export default function AnalyzeButton({ onClick, loading, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className="w-full py-4 rounded-xl font-semibold text-white transition-all duration-200 flex items-center justify-center gap-3 text-base"
      style={{
        background: disabled || loading
          ? '#1e1e2e'
          : 'linear-gradient(135deg, #6366f1, #8b5cf6)',
        boxShadow: disabled || loading
          ? 'none'
          : '0 0 30px rgba(99,102,241,0.3)',
        cursor: disabled || loading ? 'not-allowed' : 'pointer',
        color: disabled || loading ? '#475569' : 'white',
      }}
    >
      {loading ? (
        <>
          <Spinner size={20} />
          Analysing...
        </>
      ) : (
        <>
          <Zap size={20} />
          Analyse Now
        </>
      )}
    </button>
  )
}
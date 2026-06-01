export default function ConfidenceBar({ fakeProb, realProb }) {
  return (
    <div
      className="rounded-2xl p-5 sm:p-6"
      style={{ backgroundColor: '#12121a', border: '1px solid #1e1e2e' }}
    >
      <h3 className="text-white font-semibold mb-4 text-sm sm:text-base">
        Probability Breakdown
      </h3>

      {/* Fake */}
      <div className="mb-4">
        <div className="flex justify-between text-xs sm:text-sm mb-1.5">
          <span style={{ color: '#94a3b8' }}>Fake Probability</span>
          <span className="font-mono font-medium" style={{ color: '#ef4444' }}>
            {fakeProb}%
          </span>
        </div>
        <div
          className="h-2.5 rounded-full overflow-hidden"
          style={{ backgroundColor: '#1e1e2e' }}
        >
          <div
            className="h-full rounded-full transition-all duration-1000"
            style={{
              width: `${fakeProb}%`,
              background: 'linear-gradient(90deg, #ef4444, #dc2626)',
            }}
          />
        </div>
      </div>

      {/* Real */}
      <div>
        <div className="flex justify-between text-xs sm:text-sm mb-1.5">
          <span style={{ color: '#94a3b8' }}>Real Probability</span>
          <span className="font-mono font-medium" style={{ color: '#22c55e' }}>
            {realProb}%
          </span>
        </div>
        <div
          className="h-2.5 rounded-full overflow-hidden"
          style={{ backgroundColor: '#1e1e2e' }}
        >
          <div
            className="h-full rounded-full transition-all duration-1000"
            style={{
              width: `${realProb}%`,
              background: 'linear-gradient(90deg, #22c55e, #16a34a)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
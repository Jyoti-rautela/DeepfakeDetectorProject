import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ReferenceLine, ResponsiveContainer, Cell
} from 'recharts'

export default function FrameGraph({ frameResults }) {
  if (!frameResults || frameResults.length === 0) return null

  const data = frameResults.map(f => ({
    frame: f.frame_number,
    fake:  f.fake_prob,
    real:  f.real_prob,
  }))

  return (
    <div
      className="rounded-2xl p-5 sm:p-6"
      style={{ backgroundColor: '#12121a', border: '1px solid #1e1e2e' }}
    >
      <h3 className="text-white font-semibold mb-1 text-sm sm:text-base">
        Frame-by-Frame Analysis
      </h3>
      <p className="text-xs mb-5" style={{ color: '#475569' }}>
        Fake probability per analysed frame. Red = above 50% threshold.
      </p>

      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e1e2e" />
          <XAxis
            dataKey="frame"
            tick={{ fontSize: 10, fill: '#475569' }}
            label={{ value: 'Frame', position: 'insideBottom', offset: -2, fill: '#475569', fontSize: 10 }}
          />
          <YAxis
            domain={[0, 100]}
            tick={{ fontSize: 10, fill: '#475569' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#12121a',
              border: '1px solid #1e1e2e',
              borderRadius: 8,
              fontSize: 12,
              color: '#f1f5f9',
            }}
            formatter={(value, name) => [`${value}%`, name === 'fake' ? 'Fake Prob' : 'Real Prob']}
            labelFormatter={label => `Frame ${label}`}
          />
          <ReferenceLine
            y={50}
            stroke="#f59e0b"
            strokeDasharray="4 4"
            label={{ value: '50%', fill: '#f59e0b', fontSize: 10 }}
          />
          <Bar dataKey="fake" radius={[3, 3, 0, 0]}>
            {data.map((entry, i) => (
              <Cell
                key={i}
                fill={entry.fake > 50 ? '#ef4444' : '#22c55e'}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
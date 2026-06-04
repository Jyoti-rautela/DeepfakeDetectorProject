import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ReferenceLine, ResponsiveContainer, Cell
} from 'recharts'
import { useTheme } from '../../context/ThemeContext'

export default function FrameGraph({ frameResults }) {
  const { colors } = useTheme()
  if (!frameResults || frameResults.length === 0) return null

  const data = frameResults.map(f => ({
    frame: f.frame_number,
    fake:  f.fake_prob,
  }))

  return (
    <div
      className="rounded-2xl p-5 sm:p-6"
      style={{ backgroundColor: colors.surface, border: `1px solid ${colors.border}` }}
    >
      <h3 className="font-semibold mb-1 text-sm sm:text-base" style={{ color: colors.text }}>
        Frame-by-Frame Analysis
      </h3>
      <p className="text-xs mb-5" style={{ color: colors.textFaint }}>
        Fake probability per analysed frame. Red = above 50% threshold.
      </p>

      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={colors.border} />
          <XAxis dataKey="frame" tick={{ fontSize: 10, fill: colors.textFaint }} />
          <YAxis domain={[0, 100]} tick={{ fontSize: 10, fill: colors.textFaint }} />
          <Tooltip
            contentStyle={{
              backgroundColor: colors.surface,
              border: `1px solid ${colors.border}`,
              borderRadius: 8,
              fontSize: 12,
              color: colors.text,
            }}
            formatter={value => [`${value}%`, 'Fake Prob']}
            labelFormatter={label => `Frame ${label}`}
          />
          <ReferenceLine y={50} stroke="#f59e0b" strokeDasharray="4 4" />
          <Bar dataKey="fake" radius={[3, 3, 0, 0]}>
            {data.map((entry, i) => (
              <Cell key={i} fill={entry.fake > 50 ? '#ef4444' : '#22c55e'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
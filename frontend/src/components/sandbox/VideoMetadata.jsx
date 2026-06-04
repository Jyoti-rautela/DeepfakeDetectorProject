import { Film, Clock, Monitor, Layers } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

export default function VideoMetadata({ metadata, framesAnalysed, totalFrames }) {
  const { colors } = useTheme()
  if (!metadata) return null

  const items = [
    { icon: <Film size={15} />,    label: 'FPS',             value: metadata.fps                        },
    { icon: <Clock size={15} />,   label: 'Duration',        value: `${metadata.duration_seconds}s`     },
    { icon: <Monitor size={15} />, label: 'Resolution',      value: metadata.resolution                 },
    { icon: <Layers size={15} />,  label: 'Frames Analysed', value: `${framesAnalysed} / ${totalFrames}` },
  ]

  return (
    <div
      className="rounded-2xl p-5 sm:p-6"
      style={{ backgroundColor: colors.surface, border: `1px solid ${colors.border}` }}
    >
      <h3 className="font-semibold mb-4 text-sm sm:text-base" style={{ color: colors.text }}>
        Video Metadata
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {items.map((item, i) => (
          <div key={i} className="text-center">
            <div className="flex items-center justify-center mb-1" style={{ color: '#6366f1' }}>
              {item.icon}
            </div>
            <div className="font-mono font-semibold text-sm sm:text-base" style={{ color: colors.text }}>
              {item.value}
            </div>
            <div className="text-xs" style={{ color: colors.textFaint }}>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
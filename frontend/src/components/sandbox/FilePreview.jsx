import { X, Image, Video, FileText } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

function formatSize(bytes) {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

export default function FilePreview({ file, preview, fileType, onReset }) {
  const { colors } = useTheme()

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ border: `1px solid ${colors.border}`, backgroundColor: colors.surface }}
    >
      <div className="relative" style={{ backgroundColor: colors.bg }}>
        {fileType === 'image' ? (
          <img
            src={preview}
            alt="preview"
            className="w-full object-contain"
            style={{ maxHeight: 400 }}
          />
        ) : (
          <video
            src={preview}
            controls
            className="w-full"
            style={{ maxHeight: 400 }}
          />
        )}

        <button
          onClick={onReset}
          className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110"
          style={{ backgroundColor: 'rgba(0,0,0,0.6)', color: '#f1f5f9' }}
        >
          <X size={16} />
        </button>

        <div
          className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
          style={{
            backgroundColor: 'rgba(0,0,0,0.6)',
            color: fileType === 'image' ? '#a78bfa' : '#34d399',
          }}
        >
          {fileType === 'image' ? <Image size={12} /> : <Video size={12} />}
          {fileType === 'image' ? 'Image' : 'Video'}
        </div>
      </div>

      <div
        className="px-5 py-4 flex items-center gap-3"
        style={{ borderTop: `1px solid ${colors.border}` }}
      >
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: 'rgba(99,102,241,0.1)', color: '#6366f1' }}
        >
          <FileText size={16} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium truncate" style={{ color: colors.text }}>
            {file.name}
          </p>
          <p className="text-xs" style={{ color: colors.textFaint }}>
            {formatSize(file.size)} · {file.type}
          </p>
        </div>
      </div>
    </div>
  )
}
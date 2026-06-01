import { useRef } from 'react'
import { Upload, Image, Video } from 'lucide-react'

export default function UploadZone({ onFile, disabled, accept }) {
  const inputRef = useRef()

  const isImageOnly = accept && accept.includes('image') && !accept.includes('video')
  const isVideoOnly = accept && accept.includes('video') && !accept.includes('image')

  const formats = isImageOnly
    ? ['JPG', 'PNG', 'WebP']
    : isVideoOnly
    ? ['MP4', 'MOV', 'AVI', 'WebM']
    : ['JPG', 'PNG', 'WebP', 'MP4', 'MOV', 'AVI', 'WebM']

  function handleDrop(e) {
    e.preventDefault()
    if (disabled) return
    const file = e.dataTransfer.files[0]
    if (file) onFile(file)
  }

  function handleChange(e) {
    const file = e.target.files[0]
    if (file) onFile(file)
  }

  return (
    <div
      className="relative rounded-2xl p-8 sm:p-12 text-center cursor-pointer transition-all duration-300"
      style={{
        backgroundColor: '#12121a',
        border: '2px dashed #1e1e2e',
      }}
      onDragOver={e => {
        e.preventDefault()
        e.currentTarget.style.borderColor = '#6366f1'
        e.currentTarget.style.backgroundColor = 'rgba(99,102,241,0.05)'
      }}
      onDragLeave={e => {
        e.currentTarget.style.borderColor = '#1e1e2e'
        e.currentTarget.style.backgroundColor = '#12121a'
      }}
      onDrop={handleDrop}
      onClick={() => !disabled && inputRef.current.click()}
    >
      <input
        ref={inputRef}
        type="file"
        accept={accept || 'image/jpeg,image/png,image/webp,video/mp4,video/quicktime,video/x-msvideo,video/webm'}
        className="hidden"
        onChange={handleChange}
      />

      {/* Icon */}
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
        style={{ backgroundColor: 'rgba(99,102,241,0.1)', color: '#6366f1' }}
      >
        {isImageOnly ? <Image size={32} /> : isVideoOnly ? <Video size={32} /> : <Upload size={32} />}
      </div>

      <p className="text-white font-semibold text-lg mb-2">
        {isImageOnly ? 'Drop your image here' : isVideoOnly ? 'Drop your video here' : 'Drop your file here'}
      </p>
      <p className="text-sm mb-6" style={{ color: '#64748b' }}>
        or click to browse from your device
      </p>

      {/* Supported formats */}
      <div className="flex flex-wrap justify-center gap-2">
        {formats.map(fmt => (
          <span
            key={fmt}
            className="px-3 py-1 rounded-full text-xs font-mono"
            style={{ backgroundColor: '#1e1e2e', color: '#64748b' }}
          >
            {fmt}
          </span>
        ))}
      </div>

      {/* Labels */}
      <div className="flex justify-center gap-6 mt-6">
        {!isVideoOnly && (
          <div className="flex items-center gap-2 text-xs" style={{ color: '#475569' }}>
            <Image size={14} /> Images supported
          </div>
        )}
        {!isImageOnly && (
          <div className="flex items-center gap-2 text-xs" style={{ color: '#475569' }}>
            <Video size={14} /> Videos supported
          </div>
        )}
      </div>
    </div>
  )
}
import { useRef, useState, useEffect } from 'react'

export default function SplitReveal({ original, gradcam }) {
  const containerRef = useRef(null)
  const [pct, setPct]         = useState(50)
  const [dragging, setDragging] = useState(false)

  function getX(e) {
    const rect = containerRef.current.getBoundingClientRect()
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    return Math.max(0, Math.min(1, (clientX - rect.left) / rect.width)) * 100
  }

  function onDown(e) { e.preventDefault(); setDragging(true) }

  useEffect(() => {
    function onMove(e) { if (dragging) setPct(getX(e)) }
    function onUp()   { setDragging(false) }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup',   onUp)
    window.addEventListener('touchmove', onMove, { passive: false })
    window.addEventListener('touchend',  onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup',   onUp)
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('touchend',  onUp)
    }
  }, [dragging])

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ border: '1px solid rgba(99,102,241,0.25)' }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-5 py-3 text-xs font-mono"
        style={{ borderBottom: '1px solid rgba(99,102,241,0.15)', background: 'rgba(99,102,241,0.06)' }}
      >
        <span style={{ color: 'rgba(255,255,255,0.5)' }}>← ORIGINAL</span>
        <span style={{ color: '#a78bfa' }}>drag to reveal</span>
        <span style={{ color: 'rgba(255,255,255,0.5)' }}>GRAD-CAM →</span>
      </div>

      {/* Slider area */}
      <div
        ref={containerRef}
        className="relative select-none"
        style={{ aspectRatio: '16/9', cursor: dragging ? 'grabbing' : 'grab', userSelect: 'none' }}
        onMouseDown={onDown}
        onTouchStart={onDown}
      >
        {/* Original image (full) */}
        <img
          src={original}
          alt="original"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* Heatmap clipped to right side */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 0 0 ${pct}%)` }}
        >
          <img
            src={`data:image/jpeg;base64,${gradcam}`}
            alt="gradcam"
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5"
          style={{
            left: `${pct}%`,
            background: 'linear-gradient(180deg, transparent, #a78bfa, #6366f1, #a78bfa, transparent)',
            boxShadow: '0 0 12px rgba(167,139,250,0.8)',
          }}
        />

        {/* Handle */}
        <div
          className="absolute top-1/2 flex items-center justify-center rounded-full"
          style={{
            left: `${pct}%`,
            transform: 'translate(-50%, -50%)',
            width: 40,
            height: 40,
            background: 'rgba(99,102,241,0.9)',
            border: '2px solid rgba(167,139,250,0.8)',
            boxShadow: '0 0 20px rgba(99,102,241,0.6)',
            backdropFilter: 'blur(4px)',
            cursor: dragging ? 'grabbing' : 'grab',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M6 4L2 9L6 14M12 4L16 9L12 14" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Labels */}
        <div
          className="absolute bottom-3 left-3 px-2 py-1 rounded text-xs font-mono"
          style={{ background: 'rgba(0,0,0,0.55)', color: 'rgba(255,255,255,0.7)' }}
        >
          Original
        </div>
        <div
          className="absolute bottom-3 right-3 px-2 py-1 rounded text-xs font-mono"
          style={{ background: 'rgba(99,102,241,0.7)', color: 'white' }}
        >
          Grad-CAM
        </div>
      </div>
    </div>
  )
}
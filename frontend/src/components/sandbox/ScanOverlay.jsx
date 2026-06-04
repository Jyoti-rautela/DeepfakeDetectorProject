import { useEffect, useRef } from 'react'

export default function ScanOverlay({ imageUrl, fileType, scanning }) {
  const canvasRef = useRef(null)
  const animRef   = useRef(null)
  const posRef    = useRef(0)
  const dirRef    = useRef(1)

  useEffect(() => {
    if (!scanning) {
      cancelAnimationFrame(animRef.current)
      return
    }

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const W = canvas.width
    const H = canvas.height

    function draw() {
      ctx.clearRect(0, 0, W, H)

      // Dark vignette overlay
      const vignette = ctx.createRadialGradient(W/2, H/2, H*0.2, W/2, H/2, H*0.85)
      vignette.addColorStop(0, 'rgba(0,0,0,0)')
      vignette.addColorStop(1, 'rgba(0,0,0,0.55)')
      ctx.fillStyle = vignette
      ctx.fillRect(0, 0, W, H)

      // Grid lines
      ctx.strokeStyle = 'rgba(99,102,241,0.08)'
      ctx.lineWidth = 0.5
      for (let x = 0; x < W; x += 24) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke()
      }
      for (let y = 0; y < H; y += 24) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke()
      }

      // Scan line glow
      const scanY = posRef.current
      const grad = ctx.createLinearGradient(0, scanY - 40, 0, scanY + 40)
      grad.addColorStop(0,   'rgba(99,102,241,0)')
      grad.addColorStop(0.4, 'rgba(99,102,241,0.18)')
      grad.addColorStop(0.5, 'rgba(139,92,246,0.85)')
      grad.addColorStop(0.6, 'rgba(99,102,241,0.18)')
      grad.addColorStop(1,   'rgba(99,102,241,0)')
      ctx.fillStyle = grad
      ctx.fillRect(0, scanY - 40, W, 80)

      // Bright scan line
      ctx.strokeStyle = 'rgba(167,139,250,0.95)'
      ctx.lineWidth = 2
      ctx.shadowColor = '#a78bfa'
      ctx.shadowBlur = 18
      ctx.beginPath(); ctx.moveTo(0, scanY); ctx.lineTo(W, scanY); ctx.stroke()
      ctx.shadowBlur = 0

      // Corner brackets
      const bs = 22, bt = 2.5
      ctx.strokeStyle = '#6366f1'
      ctx.lineWidth = bt
      ;[
        [0, 0, 1, 1], [W, 0, -1, 1], [0, H, 1, -1], [W, H, -1, -1]
      ].forEach(([cx, cy, dx, dy]) => {
        ctx.beginPath()
        ctx.moveTo(cx + dx * bs, cy)
        ctx.lineTo(cx, cy)
        ctx.lineTo(cx, cy + dy * bs)
        ctx.stroke()
      })

      // Analysing label
      ctx.fillStyle = 'rgba(99,102,241,0.9)'
      ctx.font = '600 11px monospace'
      ctx.fillText('ANALYSING...', 12, H - 12)

      // Move scan line
      posRef.current += dirRef.current * 2.5
      if (posRef.current >= H || posRef.current <= 0) dirRef.current *= -1

      animRef.current = requestAnimationFrame(draw)
    }

    animRef.current = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(animRef.current)
  }, [scanning])

  return (
    <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: '4/3' }}>
      {fileType === 'video' ? (
        <video
          src={imageUrl}
          className="w-full h-full object-cover"
          muted
          loop
          autoPlay
          playsInline
        />
      ) : (
        <img src={imageUrl} alt="preview" className="w-full h-full object-cover" />
      )}
      {scanning && (
        <canvas
          ref={canvasRef}
          width={480}
          height={360}
          className="absolute inset-0 w-full h-full"
          style={{ pointerEvents: 'none' }}
        />
      )}
    </div>
  )
}
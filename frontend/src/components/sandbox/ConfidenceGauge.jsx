import { useEffect, useRef, useState } from 'react'

export default function ConfidenceGauge({ label, confidence, fakeProb, realProb }) {
  const canvasRef = useRef(null)
  const animRef   = useRef(null)
  const currentRef = useRef(0)
  const [, setDisplayed] = useState(0)

  const isFake = label?.toLowerCase() === 'fake'
  const target   = confidence  // 0–100
  const arcColor = isFake ? '#ef4444' : '#22c55e'
  const glowColor= isFake ? 'rgba(239,68,68,0.5)' : 'rgba(34,197,94,0.5)'

  useEffect(() => {
    currentRef.current = 0
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const W = canvas.width, H = canvas.height
    const cx = W / 2, cy = H / 2 + 20
    const R = 100

    const START = Math.PI * 0.8
    const END   = Math.PI * 2.2
    const RANGE = END - START

    function draw(val) {
      ctx.clearRect(0, 0, W, H)

      // Track
      ctx.beginPath()
      ctx.arc(cx, cy, R, START, END)
      ctx.strokeStyle = 'rgba(255,255,255,0.06)'
      ctx.lineWidth = 14
      ctx.lineCap = 'round'
      ctx.stroke()

      // Filled arc
      const fillEnd = START + RANGE * (val / 100)
      const grad = ctx.createLinearGradient(cx - R, cy, cx + R, cy)
      grad.addColorStop(0, isFake ? '#f97316' : '#6366f1')
      grad.addColorStop(1, arcColor)
      ctx.beginPath()
      ctx.arc(cx, cy, R, START, fillEnd)
      ctx.strokeStyle = grad
      ctx.lineWidth = 14
      ctx.lineCap = 'round'
      ctx.shadowColor = glowColor
      ctx.shadowBlur = 18
      ctx.stroke()
      ctx.shadowBlur = 0

      // Tip dot
      const tipX = cx + R * Math.cos(fillEnd)
      const tipY = cy + R * Math.sin(fillEnd)
      ctx.beginPath()
      ctx.arc(tipX, tipY, 7, 0, Math.PI * 2)
      ctx.fillStyle = arcColor
      ctx.shadowColor = glowColor
      ctx.shadowBlur = 16
      ctx.fill()
      ctx.shadowBlur = 0

      // Center percentage
      ctx.fillStyle = arcColor
      ctx.font = `800 38px monospace`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(`${Math.round(val)}%`, cx, cy - 8)

      // Label
      ctx.fillStyle = isFake ? '#fca5a5' : '#86efac'
      ctx.font = `700 13px monospace`
      ctx.fillText(label, cx, cy + 28)

      // Sub label
      ctx.fillStyle = 'rgba(255,255,255,0.3)'
      ctx.font = `400 11px monospace`
      ctx.fillText('confidence', cx, cy + 46)
    }

    function animate() {
      currentRef.current += (target - currentRef.current) * 0.045
      setDisplayed(Math.round(currentRef.current))
      draw(currentRef.current)
      if (Math.abs(currentRef.current - target) > 0.3) {
        animRef.current = requestAnimationFrame(animate)
      } else {
        draw(target)
        setDisplayed(Math.round(target))
      }
    }

    animRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animRef.current)
  }, [label, confidence])

  return (
    <div
      className="rounded-2xl flex flex-col items-center p-6"
      style={{
        background: isFake
          ? 'linear-gradient(135deg, rgba(239,68,68,0.08), rgba(239,68,68,0.03))'
          : 'linear-gradient(135deg, rgba(34,197,94,0.08), rgba(34,197,94,0.03))',
        border: `1px solid ${isFake ? 'rgba(239,68,68,0.25)' : 'rgba(34,197,94,0.25)'}`,
      }}
    >
      <canvas ref={canvasRef} width={280} height={220} style={{ width: '100%', maxWidth: 280 }} />

      {/* Fake / Real probability row */}
      <div className="w-full flex gap-3 mt-2">
        <div
          className="flex-1 rounded-xl p-3 text-center"
          style={{ backgroundColor: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}
        >
          <div className="text-xs font-mono mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>FAKE</div>
          <div className="text-lg font-bold font-mono" style={{ color: '#ef4444' }}>
            {fakeProb?.toFixed(1)}%
          </div>
        </div>
        <div
          className="flex-1 rounded-xl p-3 text-center"
          style={{ backgroundColor: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)' }}
        >
          <div className="text-xs font-mono mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>REAL</div>
          <div className="text-lg font-bold font-mono" style={{ color: '#22c55e' }}>
            {realProb?.toFixed(1)}%
          </div>
        </div>
      </div>
    </div>
  )
}
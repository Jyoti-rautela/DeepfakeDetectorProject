import { useEffect, useRef } from 'react'

export default function Spinner3D() {
  const canvasRef = useRef()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx    = canvas.getContext('2d')
    let frame    = 0
    let animId

    const W = canvas.width  = 400
    const H = canvas.height = 400
    const cx = W / 2
    const cy = H / 2

    // Orbital rings config
    const rings = [
      { rx: 160, ry: 40,  tilt: 0,   speed: 0.008, color: '#6366f1', dots: 6  },
      { rx: 130, ry: 50,  tilt: 60,  speed: -0.006, color: '#a78bfa', dots: 5 },
      { rx: 100, ry: 35,  tilt: 120, speed: 0.01,  color: '#818cf8', dots: 4  },
    ]

    function drawEllipse(rx, ry, tilt, alpha) {
      ctx.save()
      ctx.rotate((tilt * Math.PI) / 180)
      ctx.beginPath()
      ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2)
      ctx.strokeStyle = `rgba(99,102,241,${alpha})`
      ctx.lineWidth   = 1
      ctx.stroke()
      ctx.restore()
    }

    function drawDot(rx, ry, tilt, angle, color, size) {
      const rad = (tilt * Math.PI) / 180
      const x   = Math.cos(angle) * rx
      const y   = Math.sin(angle) * ry
      // rotate by tilt
      const rx2 = x * Math.cos(rad) - y * Math.sin(rad)
      const ry2 = x * Math.sin(rad) + y * Math.cos(rad)

      // depth-based glow
      const depth = (Math.sin(angle) + 1) / 2
      const glow  = ctx.createRadialGradient(rx2, ry2, 0, rx2, ry2, size * 3)
      glow.addColorStop(0, color)
      glow.addColorStop(1, 'transparent')

      ctx.beginPath()
      ctx.arc(rx2, ry2, size * 3, 0, Math.PI * 2)
      ctx.fillStyle = glow
      ctx.fill()

      ctx.beginPath()
      ctx.arc(rx2, ry2, size * depth + 1, 0, Math.PI * 2)
      ctx.fillStyle = color
      ctx.fill()
    }

    function drawCore() {
      // Outer glow
      const glow = ctx.createRadialGradient(0, 0, 0, 0, 0, 50)
      glow.addColorStop(0, 'rgba(99,102,241,0.6)')
      glow.addColorStop(0.5, 'rgba(99,102,241,0.15)')
      glow.addColorStop(1, 'transparent')
      ctx.beginPath()
      ctx.arc(0, 0, 50, 0, Math.PI * 2)
      ctx.fillStyle = glow
      ctx.fill()

      // Inner core
      const core = ctx.createRadialGradient(0, 0, 0, 0, 0, 18)
      core.addColorStop(0, '#ffffff')
      core.addColorStop(0.4, '#a78bfa')
      core.addColorStop(1, '#6366f1')
      ctx.beginPath()
      ctx.arc(0, 0, 18, 0, Math.PI * 2)
      ctx.fillStyle = core
      ctx.fill()

      // Brain icon text
      ctx.font = '18px serif'
      ctx.fillStyle = 'white'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText('🧠', 0, 0)
    }

    function drawGrid() {
      ctx.save()
      ctx.strokeStyle = 'rgba(99,102,241,0.04)'
      ctx.lineWidth   = 1
      for (let i = -W; i < W; i += 40) {
        ctx.beginPath()
        ctx.moveTo(i, -H)
        ctx.lineTo(i, H)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(-W, i)
        ctx.lineTo(W, i)
        ctx.stroke()
      }
      ctx.restore()
    }

    function animate() {
      ctx.clearRect(0, 0, W, H)

      // Background grid
      ctx.save()
      ctx.translate(cx, cy)
      drawGrid()

      // Draw rings (back first)
      rings.forEach(ring => {
        drawEllipse(ring.rx, ring.ry, ring.tilt, 0.2)
      })

      // Draw orbiting dots
      rings.forEach((ring, ri) => {
        for (let d = 0; d < ring.dots; d++) {
          const angle = (frame * ring.speed) + (d / ring.dots) * Math.PI * 2
          drawDot(ring.rx, ring.ry, ring.tilt, angle, ring.color, 3 + ri)
        }
      })

      // Core sphere
      drawCore()
      ctx.restore()

      // Floating particles
      for (let i = 0; i < 20; i++) {
        const x = cx + Math.sin(frame * 0.005 + i * 137) * 180
        const y = cy + Math.cos(frame * 0.004 + i * 137) * 180
        const a = (Math.sin(frame * 0.02 + i) + 1) / 2
        ctx.beginPath()
        ctx.arc(x, y, 1.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(167,139,250,${a * 0.5})`
        ctx.fill()
      }

      frame++
      animId = requestAnimationFrame(animate)
    }

    animate()
    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        maxWidth: 400,
        height: 'auto',
        filter: 'drop-shadow(0 0 40px rgba(99,102,241,0.3))',
      }}
    />
  )
}
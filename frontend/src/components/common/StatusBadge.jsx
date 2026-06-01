import { useEffect, useState } from 'react'
import { checkHealth } from '../../services/api'

export default function StatusBadge() {
  const [status, setStatus] = useState('checking')
  const [device, setDevice] = useState('')

  useEffect(() => {
    checkHealth()
      .then(data => {
        setStatus('online')
        setDevice(data.device.toUpperCase())
      })
      .catch(() => setStatus('offline'))
  }, [])

  const config = {
    checking : { color: '#f59e0b', label: 'Checking...'         },
    online   : { color: '#22c55e', label: `Online · ${device}`  },
    offline  : { color: '#ef4444', label: 'API Offline'         },
  }[status]

  return (
    <div
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono"
      style={{ backgroundColor: '#12121a', border: '1px solid #1e1e2e' }}
    >
      <span
        style={{
          width: 7,
          height: 7,
          borderRadius: '50%',
          backgroundColor: config.color,
          boxShadow: `0 0 6px ${config.color}`,
          display: 'inline-block',
          animation: status === 'online' ? 'pulse 2s infinite' : 'none',
        }}
      />
      <span style={{ color: config.color }}>{config.label}</span>
    </div>
  )
}
const API_URL = 'http://localhost:8000'

// Health check
export async function checkHealth() {
  const res = await fetch(`${API_URL}/api/healthz`)
  if (!res.ok) throw new Error('API not reachable')
  return res.json()
}

// Predict image
export async function predictImage(file) {
  const formData = new FormData()
  formData.append('file', file)

  const res = await fetch(`${API_URL}/api/predict/image`, {
    method: 'POST',
    body: formData,
  })

  if (!res.ok) {
    const err = await res.json()
    throw new Error(err.detail || 'Prediction failed')
  }

  return res.json()
}

// Predict video
export async function predictVideo(file) {
  const formData = new FormData()
  formData.append('file', file)

  const res = await fetch(`${API_URL}/api/predict/video`, {
    method: 'POST',
    body: formData,
  })

  if (!res.ok) {
    const err = await res.json()
    throw new Error(err.detail || 'Prediction failed')
  }

  return res.json()
}
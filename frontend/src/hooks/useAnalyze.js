import { useState } from 'react'
import { predictImage, predictVideo } from '../services/api'

const IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp']
const VIDEO_TYPES = ['video/mp4', 'video/quicktime', 'video/x-msvideo', 'video/webm']

const AI_LOGS = [
  'Initializing neural network pipeline...',
  'Running EfficientNet-B3 feature extraction...',
  'Analyzing facial landmark geometry...',
  'Checking micro-expression inconsistencies...',
  'Analyzing shadow physics and lighting coherence...',
  'Running GAN artifact detector...',
  'Generating Grad-CAM heatmap...',
  'Analyzing temporal coherence across frames...',
  'Cross-referencing deepfake signature database...',
  'Computing final authenticity score...',
]

export function useAnalyze() {
  const [file, setFile]       = useState(null)
  const [preview, setPreview] = useState(null)
  const [fileType, setFileType] = useState(null)
  const [loading, setLoading] = useState(false)
  const [logs, setLogs]       = useState([])
  const [result, setResult]   = useState(null)
  const [error, setError]     = useState(null)

  function handleFile(selectedFile) {
    if (!selectedFile) return

    setFile(selectedFile)
    setResult(null)
    setError(null)
    setLogs([])

    if (IMAGE_TYPES.includes(selectedFile.type)) {
      setFileType('image')
    } else if (VIDEO_TYPES.includes(selectedFile.type)) {
      setFileType('video')
    } else {
      setError('Invalid file type. Upload JPG, PNG, WebP, MP4, MOV, AVI or WebM.')
      return
    }

    // Generate preview URL
    const url = URL.createObjectURL(selectedFile)
    setPreview(url)
  }

  async function analyze() {
    if (!file) return

    setLoading(true)
    setResult(null)
    setError(null)
    setLogs([])

    // Simulate AI logs appearing one by one
    const shuffled = [...AI_LOGS].sort(() => Math.random() - 0.5).slice(0, 7)
    shuffled.forEach((log, i) => {
      setTimeout(() => {
        setLogs(prev => [...prev, log])
      }, i * 600)
    })

    try {
      let data
      if (fileType === 'image') {
        data = await predictImage(file)
      } else {
        data = await predictVideo(file)
      }
      setResult(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  function reset() {
    setFile(null)
    setPreview(null)
    setFileType(null)
    setLoading(false)
    setLogs([])
    setResult(null)
    setError(null)
  }

  return {
    file, preview, fileType,
    loading, logs, result, error,
    handleFile, analyze, reset,
  }
}
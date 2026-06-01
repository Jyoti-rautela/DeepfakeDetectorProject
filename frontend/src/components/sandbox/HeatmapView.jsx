export default function HeatmapView({ original, gradcam, fileType }) {
  const originalSrc = typeof original === 'string' ? original : null

  return (
    <div
      className="rounded-2xl p-5 sm:p-6"
      style={{ backgroundColor: '#12121a', border: '1px solid #1e1e2e' }}
    >
      <h3 className="text-white font-semibold mb-1 text-sm sm:text-base">
        Grad-CAM Heatmap
      </h3>
      <p className="text-xs mb-4" style={{ color: '#475569' }}>
        {fileType === 'video'
          ? 'Heatmap generated from the most suspicious frame'
          : 'Red regions triggered the deepfake prediction most strongly'}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Original */}
        <div>
          <p className="text-xs mb-2 font-mono" style={{ color: '#475569' }}>
            ORIGINAL
          </p>
          {originalSrc ? (
            <img
              src={originalSrc}
              alt="original"
              className="w-full rounded-xl object-cover"
              style={{ maxHeight: 260 }}
            />
          ) : (
            <div
              className="w-full rounded-xl flex items-center justify-center"
              style={{
                height: 200,
                backgroundColor: '#0a0a0f',
                color: '#334155',
                fontSize: 12,
              }}
            >
              Video frame
            </div>
          )}
        </div>

        {/* Grad-CAM */}
        <div>
          <p className="text-xs mb-2 font-mono" style={{ color: '#475569' }}>
            GRAD-CAM
          </p>
          <img
            src={`data:image/jpeg;base64,${gradcam}`}
            alt="gradcam heatmap"
            className="w-full rounded-xl object-cover"
            style={{ maxHeight: 260 }}
          />
        </div>
      </div>
    </div>
  )
}
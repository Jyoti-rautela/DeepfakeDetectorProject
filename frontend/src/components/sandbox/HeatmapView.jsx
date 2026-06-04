import { useTheme } from '../../context/ThemeContext'

export default function HeatmapView({ original, gradcam, fileType }) {
  const { colors } = useTheme()

  return (
    <div
      className="rounded-2xl p-5 sm:p-6"
      style={{ backgroundColor: colors.surface, border: `1px solid ${colors.border}` }}
    >
      <h3 className="font-semibold mb-1 text-sm sm:text-base" style={{ color: colors.text }}>
        Grad-CAM Heatmap
      </h3>
      <p className="text-xs mb-4" style={{ color: colors.textFaint }}>
        {fileType === 'video'
          ? 'Heatmap generated from the most suspicious frame'
          : 'Red regions triggered the deepfake prediction most strongly'}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <p className="text-xs mb-2 font-mono" style={{ color: colors.textFaint }}>ORIGINAL</p>
          {original ? (
            <img
              src={original}
              alt="original"
              className="w-full rounded-xl object-cover"
              style={{ maxHeight: 260 }}
            />
          ) : (
            <div
              className="w-full rounded-xl flex items-center justify-center"
              style={{ height: 200, backgroundColor: colors.bg, color: colors.textFaint, fontSize: 12 }}
            >
              Video frame
            </div>
          )}
        </div>
        <div>
          <p className="text-xs mb-2 font-mono" style={{ color: colors.textFaint }}>GRAD-CAM</p>
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
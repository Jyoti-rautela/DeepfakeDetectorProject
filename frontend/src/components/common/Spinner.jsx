export default function Spinner({ size = 24 }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        border: '2px solid #1e1e2e',
        borderTop: '2px solid #6366f1',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
      }}
    />
  )
}
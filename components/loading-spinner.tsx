export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-white/50 backdrop-blur-sm">
      <div className="w-12 h-12 rounded-full border-4 border-brand border-t-transparent animate-spin"></div>
    </div>
  )
}

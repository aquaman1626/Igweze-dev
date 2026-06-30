export default function Loading() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="flex items-center gap-3">
        <div className="w-5 h-5 border-2 border-vscode-accent border-t-transparent rounded-full animate-spin" />
        <span className="text-sm text-vscode-muted font-mono">Loading...</span>
      </div>
    </div>
  )
}

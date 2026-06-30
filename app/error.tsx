'use client'

import { useEffect } from 'react'
import { AlertTriangle, RefreshCw } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="h-full flex flex-col items-center justify-center text-center px-6">
      <AlertTriangle size={48} className="text-yellow-400 mb-4" />
      <h2 className="text-xl font-bold text-white mb-2">Something went wrong</h2>
      <p className="text-sm text-vscode-muted mb-6 font-mono">{error.message || 'An unexpected error occurred.'}</p>
      <button
        onClick={reset}
        className="inline-flex items-center gap-2 px-4 py-2 bg-vscode-accent hover:bg-vscode-accentHover text-white rounded text-sm font-medium transition-colors"
      >
        <RefreshCw size={16} />
        Try Again
      </button>
    </div>
  )
}

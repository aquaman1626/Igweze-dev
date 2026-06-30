import Link from 'next/link'
import { FileX, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center px-6">
      <FileX size={48} className="text-vscode-muted mb-4" />
      <h1 className="text-4xl font-bold text-white mb-2 font-mono">404</h1>
      <p className="text-vscode-muted mb-1">File not found</p>
      <p className="text-sm text-vscode-muted mb-6 font-mono">The resource you are looking for does not exist.</p>
      <Link 
        href="/" 
        className="inline-flex items-center gap-2 px-4 py-2 bg-vscode-accent hover:bg-vscode-accentHover text-white rounded text-sm font-medium transition-colors"
      >
        <ArrowLeft size={16} />
        Go Home
      </Link>
    </div>
  )
}

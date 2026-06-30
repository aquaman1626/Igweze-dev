'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Lock, Upload, Send, X, LogOut, Loader2 } from 'lucide-react'

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [tags, setTags] = useState('')
  const [mediaFile, setMediaFile] = useState<File | null>(null)
  const [mediaPreview, setMediaPreview] = useState('')
  const [uploading, setUploading] = useState(false)
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const supabase = createClient()

  useEffect(() => {
    if (isAuthenticated) fetchPosts()
  }, [isAuthenticated])

  const fetchPosts = async () => {
    setLoading(true)
    const { data } = await supabase.from('posts').select('*').order('created_at', { ascending: false })
    setPosts(data || [])
    setLoading(false)
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      })
      const data = await res.json()
      if (data.success) {
        setIsAuthenticated(true)
        setPassword('')
      } else {
        setError('Invalid password')
      }
    } catch {
      setError('Authentication failed')
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setMediaFile(file)
      setMediaPreview(URL.createObjectURL(file))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setUploading(true)

    let mediaUrl = ''
    let mediaType = ''

    if (mediaFile) {
      const formData = new FormData()
      formData.append('file', mediaFile)

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      })
      const data = await res.json()
      if (data.url) {
        mediaUrl = data.url
        mediaType = data.type
      }
    }

    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        description,
        tags: tags.split(',').map(t => t.trim()).filter(Boolean),
        media_url: mediaUrl,
        media_type: mediaType,
        read_time: `${Math.ceil(description.length / 200)} min`
      })
    })

    if (res.ok) {
      setTitle('')
      setDescription('')
      setTags('')
      setMediaFile(null)
      setMediaPreview('')
      fetchPosts()
    }

    setUploading(false)
  }

  const deletePost = async (id: string) => {
    await fetch(`/api/posts?id=${id}`, { method: 'DELETE' })
    fetchPosts()
  }

  if (!isAuthenticated) {
    return (
      <div className="h-screen flex items-center justify-center bg-vscode-bg">
        <div className="w-full max-w-md bg-vscode-sidebar border border-vscode-border rounded-lg p-8 animate-slide-up">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-vscode-accent/10 flex items-center justify-center">
              <Lock size={32} className="text-vscode-accent" />
            </div>
          </div>
          <h1 className="text-xl font-bold text-white text-center mb-2">Admin Portal</h1>
          <p className="text-sm text-vscode-muted text-center mb-6">Enter your admin password to continue</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password..."
              className="w-full bg-vscode-bg border border-vscode-border rounded-lg px-4 py-3 text-sm text-vscode-text focus:border-vscode-accent focus:outline-none"
            />
            {error && <p className="text-sm text-red-400">{error}</p>}
            <button type="submit" className="w-full bg-vscode-accent hover:bg-vscode-accentHover text-white py-3 rounded-lg text-sm font-medium transition-colors">
              Authenticate
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-vscode-bg text-vscode-text">
      <div className="h-14 bg-vscode-sidebar border-b border-vscode-border flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
          <span className="font-mono text-sm font-bold text-green-400">ADMIN MODE</span>
        </div>
        <button onClick={() => setIsAuthenticated(false)} className="flex items-center gap-2 text-sm text-vscode-muted hover:text-white transition-colors">
          <LogOut size={16} /> Exit Admin
        </button>
      </div>

      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <div className="bg-vscode-sidebar border border-vscode-border rounded-lg p-6 animate-slide-up">
          <h2 className="text-lg font-bold text-white mb-4">Create New Post</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs text-vscode-muted mb-1 font-mono">title</label>
              <input
                type="text" value={title} onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full bg-vscode-bg border border-vscode-border rounded-lg px-4 py-2.5 text-sm focus:border-vscode-accent focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs text-vscode-muted mb-1 font-mono">description</label>
              <textarea
                value={description} onChange={(e) => setDescription(e.target.value)}
                rows={4} required
                className="w-full bg-vscode-bg border border-vscode-border rounded-lg px-4 py-2.5 text-sm focus:border-vscode-accent focus:outline-none resize-none"
              />
            </div>
            <div>
              <label className="block text-xs text-vscode-muted mb-1 font-mono">tags (comma separated)</label>
              <input
                type="text" value={tags} onChange={(e) => setTags(e.target.value)}
                placeholder="react, nextjs, tutorial"
                className="w-full bg-vscode-bg border border-vscode-border rounded-lg px-4 py-2.5 text-sm focus:border-vscode-accent focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs text-vscode-muted mb-2 font-mono">media</label>
              <div className="border-2 border-dashed border-vscode-border rounded-lg p-6 text-center hover:border-vscode-accent transition-colors">
                <input type="file" accept="image/*,video/*" onChange={handleFileChange} className="hidden" id="media-upload" />
                <label htmlFor="media-upload" className="cursor-pointer">
                  {mediaPreview ? (
                    <div className="relative">
                      {mediaFile?.type.startsWith('video') ? (
                        <video src={mediaPreview} className="max-h-48 mx-auto rounded" controls />
                      ) : (
                        <img src={mediaPreview} alt="Preview" className="max-h-48 mx-auto rounded" />
                      )}
                      <button type="button" onClick={() => { setMediaFile(null); setMediaPreview('') }}
                        className="absolute top-2 right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white">
                        <X size={16} />
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Upload size={32} className="mx-auto text-vscode-muted" />
                      <p className="text-sm text-vscode-muted">Click to upload image or video</p>
                      <p className="text-xs text-vscode-muted">Supports: JPG, PNG, GIF, MP4, WebM</p>
                    </div>
                  )}
                </label>
              </div>
            </div>
            <button type="submit" disabled={uploading}
              className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-vscode-muted text-white py-3 rounded-lg text-sm font-medium transition-colors">
              {uploading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
              {uploading ? 'Publishing...' : 'Publish Post'}
            </button>
          </form>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-bold text-white">Published Posts ({posts.length})</h2>
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 size={24} className="animate-spin text-vscode-muted" />
            </div>
          ) : (
            posts.map((post) => (
              <div key={post.id} className="bg-vscode-sidebar border border-vscode-border rounded-lg p-4 flex items-start justify-between animate-slide-up">
                <div className="flex-1">
                  <h3 className="font-medium text-white">{post.title}</h3>
                  <p className="text-sm text-vscode-muted mt-1">{new Date(post.created_at).toLocaleDateString()}</p>
                </div>
                <button onClick={() => deletePost(post.id)}
                  className="p-2 text-red-400 hover:bg-red-500/10 rounded transition-colors">
                  <X size={16} />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

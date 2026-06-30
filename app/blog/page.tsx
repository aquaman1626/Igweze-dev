'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Calendar, Clock, Hash } from 'lucide-react'

export default function BlogPage() {
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    async function fetchPosts() {
      const { data } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false })
      setPosts(data || [])
      setLoading(false)
    }
    fetchPosts()
  }, [])

  if (loading) {
    return (
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">blog/</h1>
          <p className="text-vscode-muted">Loading posts...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="animate-slide-up">
        <h1 className="text-3xl font-bold text-white mb-1">blog/</h1>
        <p className="text-vscode-muted">Thoughts, projects, and technical deep-dives</p>
      </div>

      <div className="space-y-4">
        {posts.map((post: any, idx: number) => (
          <article 
            key={post.id} 
            className="bg-vscode-sidebar border border-vscode-border rounded-lg p-5 hover:border-vscode-accent/50 transition-all animate-slide-up"
            style={{ animationDelay: `${(idx + 1) * 0.1}s` }}
          >
            <div className="flex items-center gap-3 mb-3 text-xs text-vscode-muted">
              <span className="flex items-center gap-1"><Calendar size={12} /> {new Date(post.created_at).toLocaleDateString()}</span>
              <span className="flex items-center gap-1"><Clock size={12} /> {post.read_time || '5 min'}</span>
            </div>
            <h2 className="text-lg font-bold text-white mb-2 hover:text-vscode-accent cursor-pointer transition-colors">{post.title}</h2>
            <p className="text-sm text-vscode-muted mb-3 line-clamp-2">{post.description}</p>
            {post.media_url && (
              <div className="mb-3 rounded-lg overflow-hidden bg-vscode-bg">
                {post.media_type?.startsWith('video') ? (
                  <video src={post.media_url} controls className="w-full max-h-64 object-cover" />
                ) : (
                  <img src={post.media_url} alt={post.title} className="w-full max-h-64 object-cover" />
                )}
              </div>
            )}
            <div className="flex flex-wrap gap-2">
              {(post.tags || []).map((tag: string, tIdx: number) => (
                <span key={tIdx} className="flex items-center gap-1 px-2 py-1 bg-vscode-bg border border-vscode-border rounded text-xs font-mono text-vscode-muted">
                  <Hash size={10} />{tag}
                </span>
              ))}
            </div>
          </article>
        ))}
        {!posts.length && (
          <div className="text-center py-16 text-vscode-muted animate-slide-up">
            <p className="font-mono text-sm">No posts yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  )
}

'use client'

import { Mail, Phone, MapPin, Linkedin, Github, Send, ExternalLink } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <div className="animate-slide-up">
        <h1 className="text-3xl font-bold text-white mb-1">contact.sh</h1>
        <p className="text-vscode-muted">Let's build something together</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-vscode-sidebar border border-vscode-border rounded-lg p-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <p className="text-vscode-comment font-mono text-sm mb-4">Contact Information</p>
            <div className="space-y-4">
              <a href="mailto:aquaman1626@gmail.com" className="flex items-center gap-4 p-4 bg-vscode-bg rounded-lg border border-vscode-border hover:border-vscode-accent transition-all group">
                <div className="w-10 h-10 rounded-lg bg-vscode-accent/10 flex items-center justify-center">
                  <Mail size={20} className="text-vscode-accent" />
                </div>
                <div>
                  <p className="text-xs text-vscode-muted">Email</p>
                  <p className="text-sm text-vscode-text group-hover:text-vscode-accent transition-colors">aquaman1626@gmail.com</p>
                </div>
              </a>

              <a href="tel:+2349043144634" className="flex items-center gap-4 p-4 bg-vscode-bg rounded-lg border border-vscode-border hover:border-vscode-accent transition-all group">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <Phone size={20} className="text-green-400" />
                </div>
                <div>
                  <p className="text-xs text-vscode-muted">Phone</p>
                  <p className="text-sm text-vscode-text group-hover:text-green-400 transition-colors">+234 904 314 4634</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-vscode-bg rounded-lg border border-vscode-border">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                  <MapPin size={20} className="text-red-400" />
                </div>
                <div>
                  <p className="text-xs text-vscode-muted">Location</p>
                  <p className="text-sm text-vscode-text">Lagos State, Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-vscode-sidebar border border-vscode-border rounded-lg p-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-vscode-comment font-mono text-sm mb-4">Social Links</p>
            <div className="space-y-3">
              <a href="https://www.linkedin.com/in/charles-igweze-858814416" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-[#0077b5]/10 border border-[#0077b5]/30 rounded-lg hover:bg-[#0077b5]/20 transition-colors">
                <div className="flex items-center gap-3">
                  <Linkedin size={20} className="text-[#0077b5]" />
                  <div>
                    <p className="text-sm font-medium text-white">LinkedIn</p>
                    <p className="text-xs text-vscode-muted">linkedin.com/in/charles-igweze-858814416</p>
                  </div>
                </div>
                <ExternalLink size={16} className="text-vscode-muted" />
              </a>

              <a href="https://github.com/aquaman1626" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-vscode-bg border border-vscode-border rounded-lg hover:border-white transition-colors">
                <div className="flex items-center gap-3">
                  <Github size={20} className="text-white" />
                  <div>
                    <p className="text-sm font-medium text-white">GitHub</p>
                    <p className="text-xs text-vscode-muted">github.com/aquaman1626</p>
                  </div>
                </div>
                <ExternalLink size={16} className="text-vscode-muted" />
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-green-500/5 border border-green-500/20 rounded-lg animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-green-400">Open to Remote, Hybrid, and On-Site Opportunities</span>
          </div>
        </div>

        <div className="bg-vscode-sidebar border border-vscode-border rounded-lg p-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-vscode-comment font-mono text-sm mb-4">Send a Message</p>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs text-vscode-muted mb-1.5 font-mono">const name =</label>
              <input type="text" placeholder="'Your Name'"
                className="w-full bg-vscode-bg border border-vscode-border rounded-lg px-4 py-3 text-sm text-vscode-text placeholder-vscode-muted focus:border-vscode-accent focus:outline-none font-mono" />
            </div>
            <div>
              <label className="block text-xs text-vscode-muted mb-1.5 font-mono">const email =</label>
              <input type="email" placeholder="'your@email.com'"
                className="w-full bg-vscode-bg border border-vscode-border rounded-lg px-4 py-3 text-sm text-vscode-text placeholder-vscode-muted focus:border-vscode-accent focus:outline-none font-mono" />
            </div>
            <div>
              <label className="block text-xs text-vscode-muted mb-1.5 font-mono">const message =</label>
              <textarea rows={5} placeholder="'Hello Charles, I would like to...'"
                className="w-full bg-vscode-bg border border-vscode-border rounded-lg px-4 py-3 text-sm text-vscode-text placeholder-vscode-muted focus:border-vscode-accent focus:outline-none resize-none font-mono" />
            </div>
            <button type="submit"
              className="w-full flex items-center justify-center gap-2 bg-vscode-accent hover:bg-vscode-accentHover text-white py-3 rounded-lg text-sm font-medium transition-colors">
              <Send size={16} />
              sendMessage()
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

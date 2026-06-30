import { MapPin, Mail, Phone, Github, Linkedin, ExternalLink, Code2, Terminal, Database } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <div className="flex gap-6">
        <div className="hidden md:flex flex-col text-right text-vscode-muted font-mono text-sm select-none shrink-0">
          {Array.from({ length: 40 }, (_, i) => (
            <span key={i} className="leading-7">{i + 1}</span>
          ))}
        </div>
        <div className="flex-1 space-y-6">
          {/* Hero */}
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Charles Chibuzo Igweze
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-lg text-vscode-muted">
              <span className="text-blue-400 font-mono">Full-Stack Developer</span>
              <span className="text-gray-600">|</span>
              <span className="text-green-400 font-mono">Backend Engineer</span>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-8 py-4 border-y border-vscode-border animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div>
              <span className="text-2xl font-bold text-vscode-accent font-mono">3+</span>
              <p className="text-xs text-vscode-muted mt-1">Years Experience</p>
            </div>
            <div>
              <span className="text-2xl font-bold text-vscode-accent font-mono">4</span>
              <p className="text-xs text-vscode-muted mt-1">Production Projects</p>
            </div>
            <div>
              <span className="text-2xl font-bold text-vscode-accent font-mono">5+</span>
              <p className="text-xs text-vscode-muted mt-1">Core Technologies</p>
            </div>
          </div>

          {/* Bio */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-3 text-vscode-text leading-relaxed">
              <p>
                I enjoy building full-stack applications that solve real problems. Most of my work has focused on designing
                scalable backends with <span className="text-yellow-400 font-mono">Python</span> and
                <span className="text-green-400 font-mono"> Node.js</span> while creating fast, responsive user interfaces with
                <span className="text-cyan-400 font-mono"> React</span> and <span className="text-blue-400 font-mono">Next.js</span>.
              </p>
              <p>
                I like taking an idea from planning to a working product and continuously improving it along the way.
                My recent work includes a luxury e-commerce platform handling multi-currency payments and bulk inventory
                management for 1,000+ products.
              </p>
              <p>
                I am comfortable across the entire stack — from database schema design and RESTful API architecture to
                frontend performance optimization and deployment on cloud infrastructure.
              </p>
            </div>
          </div>

          {/* Contact Cards */}
          <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <a href="mailto:aquaman1626@gmail.com" className="flex items-center gap-3 p-3 bg-vscode-sidebar rounded border border-vscode-border hover:border-vscode-accent transition-all group">
                <Mail size={18} className="text-vscode-accent group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-xs text-vscode-muted">Email</p>
                  <p className="text-sm text-vscode-text group-hover:text-vscode-accent transition-colors">aquaman1626@gmail.com</p>
                </div>
              </a>
              <a href="tel:+2349043144634" className="flex items-center gap-3 p-3 bg-vscode-sidebar rounded border border-vscode-border hover:border-vscode-accent transition-all group">
                <Phone size={18} className="text-green-400 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-xs text-vscode-muted">Phone</p>
                  <p className="text-sm text-vscode-text group-hover:text-green-400 transition-colors">+234 904 314 4634</p>
                </div>
              </a>
              <div className="flex items-center gap-3 p-3 bg-vscode-sidebar rounded border border-vscode-border">
                <MapPin size={18} className="text-red-400" />
                <div>
                  <p className="text-xs text-vscode-muted">Location</p>
                  <p className="text-sm text-vscode-text">Lagos State, Nigeria</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-vscode-sidebar rounded border border-vscode-border">
                <Github size={18} className="text-white" />
                <div>
                  <p className="text-xs text-vscode-muted">GitHub</p>
                  <p className="text-sm text-vscode-text">github.com/aquaman1626</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/charles-igweze-858814416"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#0077b5] text-white rounded text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <Linkedin size={16} />
                LinkedIn
                <ExternalLink size={12} />
              </a>
              <a
                href="https://github.com/aquaman1626"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-vscode-sidebar border border-vscode-border text-vscode-text rounded text-sm font-medium hover:border-white transition-colors"
              >
                <Github size={16} />
                GitHub
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Open to Work Badge */}
          <div className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-green-400 font-medium">Open to Remote, Hybrid, and On-Site Opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

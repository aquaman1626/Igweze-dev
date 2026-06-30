import Link from 'next/link'
import { ArrowLeft, Shield, Calendar, User, Tag, CheckCircle, AlertTriangle, Lightbulb } from 'lucide-react'

export default function AuthSystemPage() {
  return (
    <div className="space-y-8">
      <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-vscode-muted hover:text-vscode-accent transition-colors">
        <ArrowLeft size={16} />
        Back to projects
      </Link>

      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Shield size={40} className="text-green-400" />
          <div>
            <h1 className="text-3xl font-bold text-white">Full-Stack Auth System</h1>
            <div className="flex items-center gap-3 mt-1">
              <span className="px-2 py-0.5 bg-green-500/10 border border-green-500/30 rounded text-xs text-green-400">Completed</span>
              <span className="flex items-center gap-1 text-xs text-vscode-muted"><Calendar size={12} /> 2024</span>
              <span className="flex items-center gap-1 text-xs text-vscode-muted"><User size={12} /> Sole Developer</span>
            </div>
          </div>
        </div>

        <div className="bg-vscode-sidebar border border-vscode-border rounded-lg p-6">
          <h2 className="text-lg font-bold text-white mb-3">What I Built</h2>
          <p className="text-sm text-vscode-muted leading-relaxed">
            A secure authentication platform with registration workflows, protected routes, password recovery,
            session management, and backend validation. Built to understand the full authentication lifecycle
            from user input to secure session handling.
          </p>
        </div>

        <div className="bg-vscode-sidebar border border-vscode-border rounded-lg p-6">
          <h2 className="text-lg font-bold text-white mb-3">The Problem</h2>
          <p className="text-sm text-vscode-muted leading-relaxed">
            Authentication is the foundation of most web applications, yet it is easy to get wrong.
            I wanted to build a complete auth system from scratch to deeply understand password hashing,
            JWT tokens, session management, and protected routes — not just use a library and hope it works.
          </p>
        </div>

        <div className="bg-vscode-sidebar border border-vscode-border rounded-lg p-6">
          <h2 className="text-lg font-bold text-white mb-3">Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {['Node.js', 'Express', 'JWT', 'Bcrypt', 'Session Management', 'Validation'].map((tech, idx) => (
              <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-vscode-bg border border-vscode-border rounded text-sm text-vscode-text">
                <Tag size={12} className="text-vscode-accent" />
                {tech}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-vscode-sidebar border border-vscode-border rounded-lg p-6">
          <h2 className="text-lg font-bold text-white mb-4">Key Features</h2>
          <div className="space-y-4">
            <div className="flex gap-3">
              <CheckCircle size={18} className="text-green-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-white">Secure Registration & Login</p>
                <p className="text-sm text-vscode-muted">Password hashing with Bcrypt, input validation, and duplicate user prevention.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle size={18} className="text-green-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-white">Protected Route Middleware</p>
                <p className="text-sm text-vscode-muted">JWT verification middleware that guards sensitive endpoints and redirects unauthenticated users.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle size={18} className="text-green-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-white">Password Recovery</p>
                <p className="text-sm text-vscode-muted">Token-based password reset flow with email simulation and expiration handling.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle size={18} className="text-green-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-white">Session Management</p>
                <p className="text-sm text-vscode-muted">Secure cookie handling with HTTP-only flags and configurable expiration.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-vscode-sidebar border border-vscode-border rounded-lg p-6">
          <h2 className="text-lg font-bold text-white mb-4">Challenges & Solutions</h2>
          <div className="space-y-4">
            <div className="flex gap-3">
              <AlertTriangle size={18} className="text-yellow-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-white">Token storage security</p>
                <p className="text-sm text-vscode-muted">Researched and implemented HTTP-only cookies to prevent XSS attacks on JWT tokens.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <AlertTriangle size={18} className="text-yellow-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-white">Input validation edge cases</p>
                <p className="text-sm text-vscode-muted">Built comprehensive server-side validation to catch malformed emails, weak passwords, and injection attempts.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-vscode-sidebar border border-vscode-border rounded-lg p-6">
          <h2 className="text-lg font-bold text-white mb-4">What I Would Do Differently</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <Lightbulb size={18} className="text-vscode-accent mt-0.5 shrink-0" />
              <p className="text-sm text-vscode-muted">Add OAuth integration (Google, GitHub) for social login support.</p>
            </div>
            <div className="flex gap-3">
              <Lightbulb size={18} className="text-vscode-accent mt-0.5 shrink-0" />
              <p className="text-sm text-vscode-muted">Implement rate limiting to prevent brute-force attacks on login endpoints.</p>
            </div>
          </div>
        </div>

        <div className="bg-vscode-sidebar border border-vscode-border rounded-lg p-6">
          <h2 className="text-lg font-bold text-white mb-3">Links</h2>
          <div className="space-y-3">
            <a href="https://github.com/aquaman1626/fullstack-auth-system" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-between p-3 bg-vscode-bg border border-vscode-border rounded hover:border-vscode-accent transition-colors">
              <div>
                <p className="text-sm font-medium text-white">Source Code</p>
                <p className="text-xs text-vscode-muted">github.com/aquaman1626/fullstack-auth-system</p>
              </div>
              <span className="px-2 py-1 bg-vscode-accent/10 border border-vscode-accent/30 rounded text-xs text-vscode-accent">Public</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

import Link from 'next/link'
import { ArrowLeft, Cloud, Calendar, User, Tag, CheckCircle, AlertTriangle, Lightbulb } from 'lucide-react'

export default function WeatherOraclePage() {
  return (
    <div className="space-y-8">
      <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-vscode-muted hover:text-vscode-accent transition-colors">
        <ArrowLeft size={16} />
        Back to projects
      </Link>

      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Cloud size={40} className="text-blue-400" />
          <div>
            <h1 className="text-3xl font-bold text-white">Weather Oracle</h1>
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
            A responsive weather application that consumes third-party APIs to deliver real-time forecasts.
            The app handles asynchronous data fetching, location-based weather queries, and presents information
            in a clean interface optimized for both mobile and desktop users.
          </p>
        </div>

        <div className="bg-vscode-sidebar border border-vscode-border rounded-lg p-6">
          <h2 className="text-lg font-bold text-white mb-3">The Problem</h2>
          <p className="text-sm text-vscode-muted leading-relaxed">
            Most weather apps are either too cluttered with ads or too minimal to be useful. I wanted to build something
            that strikes a balance — accurate, fast, and visually clean — while practicing API integration and
            asynchronous data handling in a real-world context.
          </p>
        </div>

        <div className="bg-vscode-sidebar border border-vscode-border rounded-lg p-6">
          <h2 className="text-lg font-bold text-white mb-3">Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {['REST API', 'Async/Await', 'Responsive Design', 'Third-party APIs'].map((tech, idx) => (
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
                <p className="text-sm font-medium text-white">Real-Time Weather Data</p>
                <p className="text-sm text-vscode-muted">Consumes third-party weather APIs for current conditions, hourly forecasts, and extended predictions.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle size={18} className="text-green-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-white">Asynchronous Data Fetching</p>
                <p className="text-sm text-vscode-muted">Implements async/await patterns with error handling and loading states for smooth user experience.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle size={18} className="text-green-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-white">Cross-Device Responsive Design</p>
                <p className="text-sm text-vscode-muted">Optimized for desktop, tablet, and mobile devices with adaptive layouts and touch-friendly interactions.</p>
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
                <p className="text-sm font-medium text-white">Handling API rate limits</p>
                <p className="text-sm text-vscode-muted">Implemented request caching and debounced search to minimize unnecessary API calls.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <AlertTriangle size={18} className="text-yellow-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-white">Graceful error handling</p>
                <p className="text-sm text-vscode-muted">Built fallback UI states for network failures, invalid locations, and API downtime.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-vscode-sidebar border border-vscode-border rounded-lg p-6">
          <h2 className="text-lg font-bold text-white mb-4">What I Would Do Differently</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <Lightbulb size={18} className="text-vscode-accent mt-0.5 shrink-0" />
              <p className="text-sm text-vscode-muted">Add geolocation support for automatic local weather detection.</p>
            </div>
            <div className="flex gap-3">
              <Lightbulb size={18} className="text-vscode-accent mt-0.5 shrink-0" />
              <p className="text-sm text-vscode-muted">Implement weather alerts and notifications for severe conditions.</p>
            </div>
          </div>
        </div>

        <div className="bg-vscode-sidebar border border-vscode-border rounded-lg p-6">
          <h2 className="text-lg font-bold text-white mb-3">Links</h2>
          <div className="space-y-3">
            <a href="https://github.com/aquaman1626/weather-oracle" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-between p-3 bg-vscode-bg border border-vscode-border rounded hover:border-vscode-accent transition-colors">
              <div>
                <p className="text-sm font-medium text-white">Source Code</p>
                <p className="text-xs text-vscode-muted">github.com/aquaman1626/weather-oracle</p>
              </div>
              <span className="px-2 py-1 bg-vscode-accent/10 border border-vscode-accent/30 rounded text-xs text-vscode-accent">Public</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

import Link from 'next/link'
import { ShoppingBag, Cloud, Utensils, Shield, ArrowRight } from 'lucide-react'

const projects = [
  {
    slug: 'lumiere',
    name: 'LUMIÈRE Luxury E-Commerce',
    icon: ShoppingBag,
    iconColor: 'text-pink-400',
    role: 'Sole Full-Stack Developer',
    year: '2024',
    description: 'Built a luxury e-commerce platform with multi-currency payments, automated CSV import for 1,000+ products, and a private admin dashboard for inventory and order management.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Supabase', 'Flutterwave'],
    highlights: [
      'Imported 1,000+ products through automated CSV processing with category generation',
      'Integrated Flutterwave for multi-currency checkout and transaction verification',
      'Built a private admin dashboard (Atelier) for inventory, CMS, and order monitoring',
      'Optimized for desktop, tablet, and mobile devices with editorial-style UI'
    ],
    status: 'Pre-launch'
  },
  {
    slug: 'weather-oracle',
    name: 'Weather Oracle',
    icon: Cloud,
    iconColor: 'text-blue-400',
    role: 'Sole Developer',
    year: '2024',
    description: 'Built a responsive weather application that consumes third-party APIs to deliver real-time forecasts with asynchronous data fetching and location-based weather information.',
    tech: ['REST API', 'Async Processing', 'Responsive Design', 'Third-party Integration'],
    highlights: [
      'Consumes third-party weather APIs for real-time forecast data',
      'Implements asynchronous data fetching and caching',
      'Optimized for desktop, tablet, and mobile devices'
    ],
    status: 'Completed'
  },
  {
    slug: 'recipe-api',
    name: 'Recipe Sharing API',
    icon: Utensils,
    iconColor: 'text-orange-400',
    role: 'Sole Backend Developer',
    year: '2024',
    description: 'Designed and built a scalable RESTful API enabling recipe CRUD operations with JWT authentication, relational database models, and modular Django architecture.',
    tech: ['Django', 'Django REST', 'PostgreSQL', 'JWT Authentication'],
    highlights: [
      'Full CRUD operations for recipes with user authentication',
      'Secure JWT-based authentication and authorization',
      'Relational database design with normalized schema',
      'Modular, maintainable architecture for future frontend integration'
    ],
    status: 'Completed'
  },
  {
    slug: 'auth-system',
    name: 'Full-Stack Auth System',
    icon: Shield,
    iconColor: 'text-green-400',
    role: 'Sole Developer',
    year: '2024',
    description: 'Built a secure authentication platform with registration workflows, protected routes, password recovery, session management, and backend validation.',
    tech: ['Node.js', 'Express', 'JWT', 'Bcrypt', 'Session Management'],
    highlights: [
      'Secure registration and login with password hashing',
      'Protected route middleware for authenticated access',
      'Password recovery system with email verification',
      'Session management with secure cookie handling'
    ],
    status: 'Completed'
  }
]

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <div className="animate-slide-up">
        <h1 className="text-3xl font-bold text-white mb-1">projects/</h1>
        <p className="text-vscode-muted">Some things I have built</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <Link 
            key={idx} 
            href={`/projects/${project.slug}`}
            className="bg-vscode-sidebar border border-vscode-border rounded-lg p-6 hover:border-vscode-accent/50 transition-all hover:-translate-y-1 group block animate-slide-up"
            style={{ animationDelay: `${(idx + 1) * 0.1}s` }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <project.icon size={28} className={project.iconColor} />
                <div>
                  <h2 className="text-lg font-bold text-white group-hover:text-vscode-accent transition-colors">{project.name}</h2>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-mono ${project.status === 'Pre-launch' ? 'text-yellow-400' : 'text-green-400'}`}>
                      {project.status}
                    </span>
                    <span className="text-xs text-vscode-muted">{project.year}</span>
                  </div>
                </div>
              </div>
              <ArrowRight size={18} className="text-vscode-muted group-hover:text-vscode-accent group-hover:translate-x-1 transition-all" />
            </div>

            <p className="text-xs text-vscode-accent mb-2 font-mono">{project.role}</p>
            <p className="text-sm text-vscode-muted mb-4 leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t, tIdx) => (
                <span key={tIdx} className="px-2 py-1 bg-vscode-bg border border-vscode-border rounded text-xs font-mono text-vscode-muted">
                  {t}
                </span>
              ))}
            </div>

            <ul className="space-y-2">
              {project.highlights.map((h, hIdx) => (
                <li key={hIdx} className="flex gap-2 text-xs text-vscode-text">
                  <span className="text-vscode-accent mt-0.5">▹</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </div>
  )
}

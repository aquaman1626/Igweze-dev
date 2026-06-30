import { Calendar, Building2, MapPin } from 'lucide-react'

const experiences = [
  {
    role: 'Sole Full-Stack Developer',
    company: 'LUMIÈRE Luxury E-Commerce',
    type: 'Pre-launch Project — 2024',
    location: 'Remote',
    period: '2024 — Present',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Supabase', 'Cloudinary', 'Flutterwave'],
    highlights: [
      'Architected and developed a luxury e-commerce platform supporting beauty, skincare, fragrance, jewelry, fashion, and lifestyle retail',
      'Built scalable RESTful backend APIs using Express.js and Prisma ORM integrated with PostgreSQL',
      'Engineered responsive frontend systems using React, Vite, and Tailwind CSS optimized for all devices',
      'Implemented secure authentication workflows including email verification, password reset, JWT sessions, and role-based access control',
      'Developed a private administrative dashboard (Atelier) for inventory management, CMS operations, and order monitoring',
      'Built bulk CSV import pipelines processing 1,000+ products with automated category generation',
      'Integrated Cloudinary media infrastructure and Flutterwave multi-currency payment systems',
      'Designed editorial-style luxury UI with parallax effects and scroll-triggered animations'
    ]
  }
]

export default function ExperiencePage() {
  return (
    <div className="space-y-8">
      <div className="animate-slide-up">
        <h1 className="text-3xl font-bold text-white mb-1">experience.md</h1>
        <p className="text-vscode-muted">My professional journey and contributions</p>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <div 
            key={idx} 
            className="bg-vscode-sidebar border border-vscode-border rounded-lg p-6 hover:border-vscode-accent/50 transition-all animate-slide-up"
            style={{ animationDelay: `${(idx + 1) * 0.1}s` }}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
              <div>
                <h2 className="text-xl font-bold text-white mb-1">{exp.role}</h2>
                <div className="flex items-center gap-2 text-vscode-accent">
                  <Building2 size={16} />
                  <span className="font-medium">{exp.company}</span>
                </div>
              </div>
              <div className="flex flex-col items-start md:items-end gap-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-vscode-accent/10 border border-vscode-accent/30 rounded-full text-xs text-vscode-accent font-mono">
                  {exp.type}
                </span>
                <div className="flex items-center gap-3 text-sm text-vscode-muted">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {exp.period}</span>
                  <span className="flex items-center gap-1"><MapPin size={14} /> {exp.location}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-5 pb-5 border-b border-vscode-border">
              {exp.tech.map((t, tIdx) => (
                <span key={tIdx} className="px-2.5 py-1 bg-vscode-bg border border-vscode-border rounded text-xs font-mono text-vscode-muted hover:border-vscode-accent hover:text-vscode-accent transition-colors cursor-default">
                  {t}
                </span>
              ))}
            </div>

            <ul className="space-y-3">
              {exp.highlights.map((highlight, hIdx) => (
                <li key={hIdx} className="flex gap-3 text-sm text-vscode-text leading-relaxed">
                  <span className="text-vscode-accent mt-1 shrink-0">▹</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

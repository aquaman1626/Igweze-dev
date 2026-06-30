const skillCategories = [
  {
    name: 'Programming Languages',
    icon: '🔤',
    skills: [
      { name: 'Python', level: 90, color: 'text-yellow-400' },
      { name: 'JavaScript', level: 85, color: 'text-yellow-300' },
      { name: 'HTML5', level: 95, color: 'text-orange-400' },
      { name: 'CSS3', level: 90, color: 'text-blue-400' },
    ]
  },
  {
    name: 'Frameworks & Libraries',
    icon: '📚',
    skills: [
      { name: 'Django', level: 88, color: 'text-green-400' },
      { name: 'Django REST Framework', level: 85, color: 'text-red-400' },
      { name: 'React.js', level: 82, color: 'text-cyan-400' },
      { name: 'Express.js', level: 80, color: 'text-green-300' },
      { name: 'Tailwind CSS', level: 90, color: 'text-cyan-300' },
      { name: 'Vue.js', level: 65, color: 'text-green-500' },
    ]
  },
  {
    name: 'Databases & Backend',
    icon: '🗄️',
    skills: [
      { name: 'PostgreSQL', level: 85, color: 'text-blue-300' },
      { name: 'MySQL', level: 75, color: 'text-blue-400' },
      { name: 'SQLite', level: 80, color: 'text-blue-200' },
      { name: 'Prisma ORM', level: 82, color: 'text-purple-300' },
      { name: 'Supabase', level: 80, color: 'text-green-400' },
      { name: 'JWT Auth', level: 88, color: 'text-pink-400' },
    ]
  },
  {
    name: 'Tools & Platforms',
    icon: '🛠️',
    skills: [
      { name: 'Git / GitHub', level: 88, color: 'text-white' },
      { name: 'Docker', level: 70, color: 'text-blue-500' },
      { name: 'Cloudinary', level: 80, color: 'text-blue-300' },
      { name: 'Flutterwave', level: 75, color: 'text-purple-400' },
      { name: 'Vercel', level: 85, color: 'text-white' },
      { name: 'Render', level: 80, color: 'text-green-300' },
    ]
  }
]

export default function SkillsPage() {
  return (
    <div className="space-y-8">
      <div className="animate-slide-up">
        <h1 className="text-3xl font-bold text-white mb-1">skills.json</h1>
        <p className="text-vscode-muted">My technical arsenal and proficiency levels</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {skillCategories.map((category, idx) => (
          <div 
            key={idx} 
            className="bg-vscode-sidebar border border-vscode-border rounded-lg p-5 hover:border-vscode-accent/50 transition-all animate-slide-up"
            style={{ animationDelay: `${(idx + 1) * 0.1}s` }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl">{category.icon}</span>
              <h2 className="text-lg font-semibold text-white">{category.name}</h2>
            </div>
            <div className="space-y-4">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className={`font-mono text-sm ${skill.color}`}>{skill.name}</span>
                    <span className="text-xs text-vscode-muted font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-vscode-bg rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-vscode-accent to-vscode-accent/70 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-vscode-sidebar border border-vscode-border rounded-lg p-5 animate-slide-up" style={{ animationDelay: '0.5s' }}>
        <p className="text-vscode-comment font-mono text-sm mb-4">Core Competencies</p>
        <div className="flex flex-wrap gap-3">
          {['Full-Stack Development', 'Backend Engineering', 'Database Design', 'API Integration', 'Problem Solving', 'Responsive Design', 'System Architecture', 'Authentication Systems'].map((comp, idx) => (
            <span key={idx} className="px-3 py-1.5 bg-vscode-bg border border-vscode-border rounded text-sm text-vscode-text hover:border-vscode-accent hover:text-vscode-accent transition-colors cursor-default">
              {comp}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

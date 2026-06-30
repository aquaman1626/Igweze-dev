import Link from 'next/link'
import { ArrowLeft, Utensils, Calendar, User, Tag, CheckCircle, AlertTriangle, Lightbulb } from 'lucide-react'

export default function RecipeApiPage() {
  return (
    <div className="space-y-8">
      <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-vscode-muted hover:text-vscode-accent transition-colors">
        <ArrowLeft size={16} />
        Back to projects
      </Link>

      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Utensils size={40} className="text-orange-400" />
          <div>
            <h1 className="text-3xl font-bold text-white">Recipe Sharing API</h1>
            <div className="flex items-center gap-3 mt-1">
              <span className="px-2 py-0.5 bg-green-500/10 border border-green-500/30 rounded text-xs text-green-400">Completed</span>
              <span className="flex items-center gap-1 text-xs text-vscode-muted"><Calendar size={12} /> 2024</span>
              <span className="flex items-center gap-1 text-xs text-vscode-muted"><User size={12} /> Sole Backend Developer</span>
            </div>
          </div>
        </div>

        <div className="bg-vscode-sidebar border border-vscode-border rounded-lg p-6">
          <h2 className="text-lg font-bold text-white mb-3">What I Built</h2>
          <p className="text-sm text-vscode-muted leading-relaxed">
            A scalable RESTful API that enables users to create, update, manage, and share recipes.
            Built with Django and Django REST Framework, it features JWT authentication, relational database models,
            and a modular architecture designed for future frontend integration.
          </p>
        </div>

        <div className="bg-vscode-sidebar border border-vscode-border rounded-lg p-6">
          <h2 className="text-lg font-bold text-white mb-3">The Problem</h2>
          <p className="text-sm text-vscode-muted leading-relaxed">
            Recipe sharing platforms need robust data relationships — users, recipes, ingredients, categories, ratings.
            I wanted to design a backend that handles these relationships cleanly while providing a secure,
            well-documented API that any frontend could consume.
          </p>
        </div>

        <div className="bg-vscode-sidebar border border-vscode-border rounded-lg p-6">
          <h2 className="text-lg font-bold text-white mb-3">Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {['Django', 'Django REST', 'PostgreSQL', 'JWT'].map((tech, idx) => (
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
                <p className="text-sm font-medium text-white">Full CRUD Operations</p>
                <p className="text-sm text-vscode-muted">Complete create, read, update, delete functionality for recipes with ownership validation.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle size={18} className="text-green-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-white">JWT Authentication</p>
                <p className="text-sm text-vscode-muted">Secure token-based authentication with protected endpoints and user-specific data isolation.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle size={18} className="text-green-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-white">Relational Database Design</p>
                <p className="text-sm text-vscode-muted">Normalized PostgreSQL schema with foreign key relationships for users, recipes, ingredients, and categories.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle size={18} className="text-green-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-white">Modular Architecture</p>
                <p className="text-sm text-vscode-muted">Clean separation of concerns with reusable serializers, viewsets, and custom permissions for maintainability.</p>
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
                <p className="text-sm font-medium text-white">Complex nested relationships</p>
                <p className="text-sm text-vscode-muted">Used Django REST Framework's nested serializers to handle recipes with multiple ingredients and steps.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <AlertTriangle size={18} className="text-yellow-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-white">Permission granularity</p>
                <p className="text-sm text-vscode-muted">Implemented custom permission classes so users can only modify their own recipes while viewing is public.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-vscode-sidebar border border-vscode-border rounded-lg p-6">
          <h2 className="text-lg font-bold text-white mb-4">What I Would Do Differently</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <Lightbulb size={18} className="text-vscode-accent mt-0.5 shrink-0" />
              <p className="text-sm text-vscode-muted">Add full-text search with PostgreSQL for ingredient and recipe discovery.</p>
            </div>
            <div className="flex gap-3">
              <Lightbulb size={18} className="text-vscode-accent mt-0.5 shrink-0" />
              <p className="text-sm text-vscode-muted">Implement image upload support for recipe photos.</p>
            </div>
          </div>
        </div>

        <div className="bg-vscode-sidebar border border-vscode-border rounded-lg p-6">
          <h2 className="text-lg font-bold text-white mb-3">Links</h2>
          <div className="space-y-3">
            <a href="https://github.com/aquaman1626/recipe-sharing-api" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-between p-3 bg-vscode-bg border border-vscode-border rounded hover:border-vscode-accent transition-colors">
              <div>
                <p className="text-sm font-medium text-white">Source Code</p>
                <p className="text-xs text-vscode-muted">github.com/aquaman1626/recipe-sharing-api</p>
              </div>
              <span className="px-2 py-1 bg-vscode-accent/10 border border-vscode-accent/30 rounded text-xs text-vscode-accent">Public</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

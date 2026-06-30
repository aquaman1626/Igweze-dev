import Link from 'next/link'
import { ArrowLeft, ShoppingBag, Calendar, User, Tag, CheckCircle, AlertTriangle, Lightbulb } from 'lucide-react'

export default function LumierePage() {
  return (
    <div className="space-y-8">
      <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-vscode-muted hover:text-vscode-accent transition-colors">
        <ArrowLeft size={16} />
        Back to projects
      </Link>

      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <ShoppingBag size={40} className="text-pink-400" />
          <div>
            <h1 className="text-3xl font-bold text-white">LUMIÈRE Luxury E-Commerce</h1>
            <div className="flex items-center gap-3 mt-1">
              <span className="px-2 py-0.5 bg-yellow-500/10 border border-yellow-500/30 rounded text-xs text-yellow-400">Pre-launch</span>
              <span className="flex items-center gap-1 text-xs text-vscode-muted"><Calendar size={12} /> 2024</span>
              <span className="flex items-center gap-1 text-xs text-vscode-muted"><User size={12} /> Sole Full-Stack Developer</span>
            </div>
          </div>
        </div>

        <div className="bg-vscode-sidebar border border-vscode-border rounded-lg p-6">
          <h2 className="text-lg font-bold text-white mb-3">What I Built</h2>
          <p className="text-sm text-vscode-muted leading-relaxed">
            A full-stack luxury e-commerce platform designed for beauty, skincare, fragrance, jewelry, fashion, and lifestyle retail.
            The platform supports multi-currency payments, bulk inventory management, and a private administrative dashboard
            for business owners to manage products, orders, and content without touching code.
          </p>
        </div>

        <div className="bg-vscode-sidebar border border-vscode-border rounded-lg p-6">
          <h2 className="text-lg font-bold text-white mb-3">The Problem</h2>
          <p className="text-sm text-vscode-muted leading-relaxed">
            Luxury e-commerce has unique needs: editorial-style product presentation, multi-currency support for international buyers,
            and efficient inventory management at scale. Most off-the-shelf solutions force luxury brands into generic templates
            that dilute their brand identity. I needed to build something that felt bespoke while handling the operational complexity
            of a real commerce platform.
          </p>
        </div>

        <div className="bg-vscode-sidebar border border-vscode-border rounded-lg p-6">
          <h2 className="text-lg font-bold text-white mb-3">Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {['React 18', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma ORM', 'Supabase', 'Cloudinary', 'Flutterwave'].map((tech, idx) => (
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
                <p className="text-sm font-medium text-white">Automated CSV Import Pipeline</p>
                <p className="text-sm text-vscode-muted">Built a system that processes 1,000+ products from CSV files with automatic category generation and structured inventory mapping. Reduced manual data entry from hours to minutes.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle size={18} className="text-green-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-white">Multi-Currency Checkout</p>
                <p className="text-sm text-vscode-muted">Integrated Flutterwave to support payments in multiple currencies with real-time transaction verification and secure payment flow.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle size={18} className="text-green-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-white">Private Admin Dashboard (Atelier)</p>
                <p className="text-sm text-vscode-muted">Role-based access control with separate views for inventory management, homepage CMS operations, product CRUD, and order monitoring.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle size={18} className="text-green-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-white">Editorial-Style UI</p>
                <p className="text-sm text-vscode-muted">Designed luxury interfaces with parallax effects, floating media sections, and scroll-triggered animations optimized for desktop, tablet, and mobile.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle size={18} className="text-green-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-white">Secure Authentication</p>
                <p className="text-sm text-vscode-muted">Email verification, password reset, JWT session handling, and role-based access control for customers and administrators.</p>
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
                <p className="text-sm font-medium text-white">Handling 1,000+ product imports without timeouts</p>
                <p className="text-sm text-vscode-muted">Implemented chunked processing with progress tracking. Instead of loading everything into memory, the pipeline processes batches and validates each row before insertion.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <AlertTriangle size={18} className="text-yellow-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-white">Managing large media assets efficiently</p>
                <p className="text-sm text-vscode-muted">Used Cloudinary for automatic image optimization, format conversion, and responsive delivery. This reduced page load times significantly compared to serving raw uploads.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <AlertTriangle size={18} className="text-yellow-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-white">Multi-currency payment complexity</p>
                <p className="text-sm text-vscode-muted">Flutterwave handles currency conversion, but I had to design the order schema to track original amounts, conversion rates, and final charges for accurate reporting.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-vscode-sidebar border border-vscode-border rounded-lg p-6">
          <h2 className="text-lg font-bold text-white mb-4">What I Would Do Differently</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <Lightbulb size={18} className="text-vscode-accent mt-0.5 shrink-0" />
              <p className="text-sm text-vscode-muted">Add Redis caching for frequently accessed product catalogs to reduce database load.</p>
            </div>
            <div className="flex gap-3">
              <Lightbulb size={18} className="text-vscode-accent mt-0.5 shrink-0" />
              <p className="text-sm text-vscode-muted">Implement server-side rendering (Next.js) for better SEO on product pages.</p>
            </div>
            <div className="flex gap-3">
              <Lightbulb size={18} className="text-vscode-accent mt-0.5 shrink-0" />
              <p className="text-sm text-vscode-muted">Add comprehensive test coverage with Jest and Cypress for critical user flows.</p>
            </div>
          </div>
        </div>

        <div className="bg-vscode-sidebar border border-vscode-border rounded-lg p-6">
          <h2 className="text-lg font-bold text-white mb-3">Links</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-vscode-bg border border-vscode-border rounded">
              <div>
                <p className="text-sm font-medium text-white">Source Code</p>
                <p className="text-xs text-vscode-muted">Private repository</p>
              </div>
              <span className="px-2 py-1 bg-vscode-accent/10 border border-vscode-accent/30 rounded text-xs text-vscode-accent">Private</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-vscode-bg border border-vscode-border rounded">
              <div>
                <p className="text-sm font-medium text-white">Live Demo</p>
                <p className="text-xs text-vscode-muted">Not deployed yet</p>
              </div>
              <span className="px-2 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded text-xs text-yellow-400">Pre-launch</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

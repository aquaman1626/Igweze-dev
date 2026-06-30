'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {
  FileCode, FolderOpen, User, Briefcase, Layers, Mail, BookOpen,
  Settings, Search, GitBranch, Bug, Layout, ChevronRight, ChevronDown,
  X, Circle, Minus, Square, Menu, Hash, Lock, Command, Bell
} from 'lucide-react'

const sidebarItems = [
  { icon: User, label: 'about.tsx', href: '/', color: 'text-blue-400' },
  { icon: Layers, label: 'skills.json', href: '/skills', color: 'text-yellow-400' },
  { icon: Briefcase, label: 'experience.md', href: '/experience', color: 'text-green-400' },
  { icon: FileCode, label: 'projects/', href: '/projects', color: 'text-purple-400', isFolder: true },
  { icon: BookOpen, label: 'blog/', href: '/blog', color: 'text-orange-400', isFolder: true },
  { icon: Mail, label: 'contact.sh', href: '/contact', color: 'text-red-400' },
]

const activityBarItems = [
  { icon: FileCode, label: 'Explorer', active: true },
  { icon: Search, label: 'Search' },
  { icon: GitBranch, label: 'Git' },
  { icon: Bug, label: 'Debug' },
  { icon: Layout, label: 'Extensions' },
]

export default function VSCodeLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [adminHover, setAdminHover] = useState(false)
  const [currentTime, setCurrentTime] = useState('')
  const [notificationCount] = useState(0)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const getActiveFile = () => {
    if (pathname === '/') return 'about.tsx'
    if (pathname === '/skills') return 'skills.json'
    if (pathname === '/experience') return 'experience.md'
    if (pathname === '/projects') return 'projects/'
    if (pathname.startsWith('/projects/')) return pathname.split('/').pop() + '.tsx'
    if (pathname === '/blog') return 'blog/'
    if (pathname === '/contact') return 'contact.sh'
    if (pathname === '/admin') return 'admin.tsx'
    return 'about.tsx'
  }

  const getBreadcrumb = () => {
    if (pathname === '/') return ['src', 'app', 'about.tsx']
    if (pathname === '/skills') return ['src', 'app', 'skills.json']
    if (pathname === '/experience') return ['src', 'app', 'experience.md']
    if (pathname === '/projects') return ['src', 'app', 'projects']
    if (pathname.startsWith('/projects/')) return ['src', 'app', 'projects', pathname.split('/').pop() + '.tsx']
    if (pathname === '/blog') return ['src', 'app', 'blog']
    if (pathname === '/contact') return ['src', 'app', 'contact.sh']
    if (pathname === '/admin') return ['src', 'app', 'admin.tsx']
    return ['src', 'app', 'about.tsx']
  }

  const breadcrumbs = getBreadcrumb()

  return (
    <div className="h-screen flex flex-col bg-vscode-bg text-vscode-text font-sans overflow-hidden">
      {/* Title Bar */}
      <div className="h-8 bg-[#3c3c3c] flex items-center justify-between px-3 select-none">
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <span className="text-xs text-gray-400 ml-2">Igweze.dev — Full-Stack Engineer</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs text-gray-400 hidden sm:block">{getActiveFile()}</span>
          <span className="text-xs text-gray-400">{currentTime}</span>
        </div>
      </div>

      {/* Menu Bar */}
      <div className="h-7 bg-[#3c3c3c] flex items-center px-2 gap-4 text-xs text-gray-300 border-b border-vscode-border select-none">
        <button className="hover:bg-white/10 px-2 py-0.5 rounded transition-colors">File</button>
        <button className="hover:bg-white/10 px-2 py-0.5 rounded transition-colors">Edit</button>
        <button className="hover:bg-white/10 px-2 py-0.5 rounded transition-colors">Selection</button>
        <button className="hover:bg-white/10 px-2 py-0.5 rounded transition-colors">View</button>
        <button className="hover:bg-white/10 px-2 py-0.5 rounded transition-colors">Go</button>
        <button className="hover:bg-white/10 px-2 py-0.5 rounded transition-colors">Run</button>
        <button className="hover:bg-white/10 px-2 py-0.5 rounded transition-colors">Terminal</button>
        <button className="hover:bg-white/10 px-2 py-0.5 rounded transition-colors">Help</button>

        <div className="ml-auto flex items-center gap-2">
          <div className="relative">
            <Link 
              href="/admin" 
              className="w-2 h-2 rounded-full bg-transparent hover:bg-vscode-accent transition-colors cursor-pointer block"
              title="Admin Portal"
              onMouseEnter={() => setAdminHover(true)}
              onMouseLeave={() => setAdminHover(false)}
            />
            {adminHover && (
              <span className="text-[10px] text-vscode-muted absolute right-0 top-4 z-50 bg-vscode-sidebar px-2 py-1 rounded border border-vscode-border whitespace-nowrap">
                Admin Portal
              </span>
            )}
          </div>
          <div className="relative">
            <Bell size={12} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
            {notificationCount > 0 && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-[8px] flex items-center justify-center text-white">
                {notificationCount}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Activity Bar */}
        <div className="w-12 bg-vscode-activity flex flex-col items-center py-2 gap-1 shrink-0">
          {activityBarItems.map((item, idx) => (
            <button
              key={idx}
              className={`w-12 h-12 flex items-center justify-center relative group transition-colors ${
                item.active ? 'border-l-2 border-white' : ''
              } hover:bg-white/5`}
            >
              <item.icon size={22} className={item.active ? 'text-white' : 'text-gray-400'} />
              <span className="absolute left-14 bg-vscode-sidebar text-xs px-2 py-1 rounded border border-vscode-border opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50 transition-opacity">
                {item.label}
              </span>
            </button>
          ))}
          <div className="flex-1" />
          <Link 
            href="/admin" 
            className="w-12 h-12 flex items-center justify-center hover:bg-white/5 group relative transition-colors"
          >
            <Settings size={22} className="text-gray-400 group-hover:text-white transition-colors" />
            <span className="absolute left-14 bg-vscode-sidebar text-xs px-2 py-1 rounded border border-vscode-border opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50 transition-opacity">
              Settings (Admin)
            </span>
          </Link>
        </div>

        {/* Sidebar */}
        <div className={`w-64 bg-vscode-sidebar border-r border-vscode-border flex flex-col shrink-0 transition-transform ${
          mobileMenuOpen ? 'absolute z-40 h-full translate-x-0' : 'hidden md:flex'
        }`}>
          <div className="h-9 flex items-center px-4 text-xs font-bold text-gray-400 uppercase tracking-wider select-none">
            Explorer
          </div>
          <div className="flex-1 overflow-y-auto">
            <div className="px-2">
              <div className="flex items-center gap-1 px-2 py-1 text-xs text-gray-400 hover:bg-white/5 rounded cursor-pointer select-none">
                <ChevronDown size={14} />
                <span className="font-bold">PORTFOLIO</span>
              </div>
              <div className="pl-4 mt-1 space-y-0.5">
                {sidebarItems.map((item, idx) => {
                  const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
                  return (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-2 px-2 py-1.5 text-sm rounded cursor-pointer transition-colors ${
                        isActive 
                          ? 'bg-white/10 text-white' 
                          : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'
                      }`}
                    >
                      <item.icon size={16} className={item.color} />
                      <span className="font-mono text-xs">{item.label}</span>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Editor Area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Tabs */}
          <div className="h-9 bg-vscode-tabInactive flex items-end overflow-x-auto">
            {sidebarItems.filter(i => pathname === i.href || (i.href !== '/' && pathname.startsWith(i.href))).map((item, idx) => (
              <div
                key={idx}
                className="h-9 px-4 flex items-center gap-2 bg-vscode-tabActive border-t border-vscode-accent text-sm min-w-fit select-none"
              >
                <item.icon size={14} className={item.color} />
                <span className="font-mono text-xs">{item.label}</span>
                <X size={14} className="text-gray-500 hover:text-white cursor-pointer ml-2 transition-colors" />
              </div>
            ))}
            {!sidebarItems.some(i => pathname === i.href || (i.href !== '/' && pathname.startsWith(i.href))) && (
              <div className="h-9 px-4 flex items-center gap-2 bg-vscode-tabActive border-t border-vscode-accent text-sm min-w-fit select-none">
                <FileCode size={14} className="text-vscode-muted" />
                <span className="font-mono text-xs">{getActiveFile()}</span>
                <X size={14} className="text-gray-500 hover:text-white cursor-pointer ml-2 transition-colors" />
              </div>
            )}
          </div>

          {/* Breadcrumbs */}
          <div className="h-6 bg-vscode-bg flex items-center px-4 gap-2 text-xs text-gray-400 border-b border-vscode-border select-none">
            {breadcrumbs.map((crumb, idx) => (
              <span key={idx} className="flex items-center gap-2">
                {idx > 0 && <ChevronRight size={12} />}
                <span className={idx === breadcrumbs.length - 1 ? 'text-white' : 'hover:text-white cursor-pointer transition-colors'}>
                  {crumb}
                </span>
              </span>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto bg-vscode-bg">
            <div className="max-w-4xl mx-auto p-6 md:p-10 animate-fade-in">
              {children}
            </div>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="h-6 bg-vscode-statusBar flex items-center justify-between px-3 text-xs text-white shrink-0 select-none">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <GitBranch size={12} />
            <span>main</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5">
            <X size={12} className="text-red-400" />
            <span>0</span>
            <div className="w-px h-3 bg-white/20" />
            <div className="w-2 h-2 rounded-full bg-yellow-400" />
            <span>0</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">Ln 1, Col 1</span>
          <span className="hidden sm:inline">UTF-8</span>
          <span className="hidden sm:inline">TypeScript JSX</span>
          <span className="hidden sm:inline">Prettier</span>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span>Ready</span>
          </div>
        </div>
      </div>

      {/* Mobile Toggle */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden fixed bottom-20 right-4 w-12 h-12 bg-vscode-accent rounded-full flex items-center justify-center shadow-lg z-50 hover:bg-vscode-accentHover transition-colors"
      >
        <Menu size={24} className="text-white" />
      </button>
    </div>
  )
}

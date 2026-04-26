'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Briefcase, FileText, Settings, LogOut, Bell } from 'lucide-react'

const navItems = [
  { name: 'Vue d’ensemble', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Mes Projets', href: '/dashboard/projects', icon: Briefcase },
  { name: 'Factures', href: '/dashboard/invoices', icon: FileText },
  { name: 'Paramètres', href: '/dashboard/settings', icon: Settings },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="flex min-h-screen bg-[#050505]">
      {/* Sidebar */}
      <aside className="w-72 border-r border-white/5 p-8 flex flex-col fixed h-screen z-20">
        <Link href="/" className="text-xl font-black tracking-tighter flex items-center gap-2 mb-12">
          <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-lg italic">H</span>
          DIGITAL<span className="text-primary">H</span>
        </Link>

        <nav className="space-y-2 flex-grow">
          {navItems.map((item) => {
            const Icon = item.icon
            const active = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  active ? 'bg-primary text-white glow' : 'text-muted hover:bg-white/5'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.name}</span>
              </Link>
            )
          })}
        </nav>

        <button className="flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-500/10 rounded-xl transition-all">
          <LogOut size={20} />
          <span className="font-medium">Déconnexion</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-grow ml-72 p-10 relative">
        {/* Top Header */}
        <header className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold">Bienvenue, <span className="text-primary">Client</span> 👋</h2>
            <p className="text-muted">Suivez l'avancement de vos projets DigitalH.</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-12 h-12 rounded-full glass flex items-center justify-center text-muted relative">
              <Bell size={20} />
              <span className="absolute top-3 right-3 w-2 h-2 bg-primary rounded-full" />
            </button>
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary p-[2px]">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center font-bold">JD</div>
            </div>
          </div>
        </header>

        {children}
      </main>
    </div>
  )
}

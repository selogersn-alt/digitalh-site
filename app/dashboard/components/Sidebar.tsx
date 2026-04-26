'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  Briefcase, 
  FileText, 
  Settings, 
  LogOut,
  ChevronRight
} from 'lucide-react'

const menuItems = [
  { name: 'Vue d\'ensemble', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Mes Projets', href: '/dashboard/projects', icon: Briefcase },
  { name: 'Factures', href: '/dashboard/invoices', icon: FileText },
  { name: 'Paramètres', href: '/dashboard/settings', icon: Settings },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-80 h-screen bg-black border-r border-white/5 flex flex-col p-8 fixed left-0 top-0 z-40 hidden lg:flex">
      <div className="mb-12">
        <Link href="/" className="text-2xl font-black tracking-tighter flex items-center gap-2">
          <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-lg italic">H</span>
          DIGITAL<span className="text-primary">H</span>
        </Link>
      </div>

      <nav className="flex-grow space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          
          return (
            <Link 
              key={item.name} 
              href={item.href}
              className={`flex items-center justify-between p-4 rounded-2xl transition-all group ${
                isActive 
                ? 'bg-primary text-white shadow-[0_0_20px_rgba(37,99,235,0.3)]' 
                : 'text-muted hover:bg-white/5 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon size={20} />
                <span className="font-bold">{item.name}</span>
              </div>
              {isActive && <ChevronRight size={16} />}
            </Link>
          )
        })}
      </nav>

      <div className="pt-8 border-t border-white/5">
        <button className="flex items-center gap-3 p-4 text-red-500 hover:bg-red-500/10 w-full rounded-2xl transition-all font-bold">
          <LogOut size={20} />
          Déconnexion
        </button>
      </div>
    </aside>
  )
}

'use client'

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function Breadcrumbs() {
  const pathname = usePathname()
  const paths = pathname.split('/').filter(Boolean)

  if (paths.length === 0) return null

  return (
    <nav className="flex items-center gap-2 text-xs text-muted mb-8 font-medium uppercase tracking-widest overflow-x-auto whitespace-nowrap scrollbar-hide py-2">
      <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
        <Home size={14} /> Accueil
      </Link>
      
      {paths.map((path, i) => {
        const href = `/${paths.slice(0, i + 1).join('/')}`
        const isLast = i === paths.length - 1
        const label = path.replace(/-/g, ' ')

        return (
          <div key={path} className="flex items-center gap-2">
            <ChevronRight size={14} className="opacity-50" />
            {isLast ? (
              <span className="text-white">{label}</span>
            ) : (
              <Link href={href} className="hover:text-primary transition-colors">
                {label}
              </Link>
            )}
          </div>
        )
      })}
    </nav>
  )
}

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

import Image from 'next/image'

const navLinks = [
  { name: 'Nos Services', href: '/services' },
  { name: 'Références', href: '/references' },
  { name: 'Ressources', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-black tracking-tighter flex items-center gap-3">
          <div className="relative w-10 h-10 overflow-hidden rounded-xl border border-border shadow-sm">
            <Image 
              src="/logo_h.png" 
              alt="DigitalH Logo" 
              fill 
              className="object-cover"
              unoptimized={true}
            />
          </div>
          <span className="hidden sm:inline text-foreground">DIGITAL<span className="text-primary">H</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <div className="flex gap-8 bg-background/60 backdrop-blur-md px-8 py-3 rounded-full border border-border shadow-sm">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm font-medium hover:text-primary transition-colors text-muted">
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden md:flex">
          <Link href="/contact" className="px-6 py-3 bg-primary text-white rounded-full text-sm font-bold glow flex items-center gap-2 hover:scale-105 transition-transform">
            Commencer <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-medium text-foreground hover:text-primary">
                  {link.name}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setIsOpen(false)} className="px-6 py-3 bg-primary text-white rounded-xl text-center font-bold shadow-md">
                Devis gratuit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

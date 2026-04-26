'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Globe, Smartphone, LineChart, Cpu, ShieldCheck } from 'lucide-react'
import Link from 'next/link'
import Portfolio from '@/components/Portfolio'

const services = [
  { icon: Globe, title: 'Création Web', desc: 'Sites vitrines & E-commerce haut de gamme.' },
  { icon: Smartphone, title: 'App Mobile', desc: 'Applications Android & iOS natives.' },
  { icon: LineChart, title: 'SEO & Marketing', desc: 'Dominez les résultats de recherche.' },
  { icon: Cpu, title: 'IT & Infrastructure', desc: 'Starlink, VSAT et Solutions Réseaux.' },
]

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/20 blur-[120px] pointer-events-none" />

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              Propulsez votre Business dans l'ère <span className="text-gradient">Digitale</span>
            </h1>
            <p className="text-xl text-muted mb-10 max-w-2xl mx-auto">
              DigitalH accompagne les entreprises avec des solutions IT de pointe et des stratégies marketing qui convertissent.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-primary hover:bg-primary/80 text-white rounded-full font-bold flex items-center justify-center gap-2 glow transition-all">
                Démarrer un projet <ArrowRight size={20} />
              </Link>
              <Link href="/services" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-full font-bold border border-white/10 transition-all">
                Nos Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Preview */}
      <section className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass p-8 rounded-3xl group hover:glow transition-all cursor-default"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="text-accent" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Portfolio />

      {/* Trust Section */}
      <section className="container mx-auto px-6 py-10 border-t border-white/5">
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
          <span className="text-xl font-bold italic">DigitalH Agency</span>
          <div className="flex items-center gap-2"><ShieldCheck size={20}/> <span className="text-sm font-medium">Partenaire Certifié</span></div>
          <div className="flex items-center gap-2"><Globe size={20}/> <span className="text-sm font-medium">Présence Internationale</span></div>
        </div>
      </section>
    </main>
  )
}

'use client'

import { use } from 'react'
import { services } from '@/data/services'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowLeft, MessageSquare } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  const Icon = service.icon

  return (
    <main className="min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/10 blur-[150px] -z-10" />
      
      <div className="container mx-auto px-6">
        <Link href="/services" className="flex items-center gap-2 text-muted hover:text-white transition-colors mb-12">
          <ArrowLeft size={18} /> Retour aux services
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 glow">
              <Icon className="text-accent" size={32} />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              {service.title} <span className="text-primary">.</span>
            </h1>
            <p className="text-xl text-muted leading-relaxed mb-10">
              {service.fullDesc}
            </p>

            <div className="space-y-4 mb-10">
              {service.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary" size={20} />
                  <span className="font-medium text-lg">{feature}</span>
                </div>
              ))}
            </div>

            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white rounded-full font-bold glow hover:scale-105 transition-all">
              Demander un devis <MessageSquare size={20} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Visual Placeholder for Service Image */}
            <div className="aspect-square rounded-[40px] glass overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon size={120} className="text-white/20 group-hover:scale-110 transition-transform duration-700" />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute bottom-8 left-8 right-8 p-6 glass rounded-2xl border border-white/10">
                <p className="text-sm font-medium italic text-accent">Expertise DigitalH</p>
                <p className="text-lg font-bold">Solution Premium & Durable</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}

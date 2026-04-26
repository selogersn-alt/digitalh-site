'use client'

import React, { use } from 'react'
import { services } from '@/data/services'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowLeft, MessageSquare } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcrumbs'

const imageMapping: Record<string, string> = {
  'installation-starlink': '/starlink_installation_hero_1777163825802.png',
  'creation-site-web': '/web_design_hero_1777163843274.png',
  'abonnement-iptv': '/iptv_premium_hero_1777165991301.png',
  'seo': '/seo_growth_hero_1777166007850.png',
  'intelligence-artificielle': '/ai_intelligence_hero_1777169156308.png',
  'automatisation': '/automation_process_hero_1777169174868.png',
}

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  const Icon = service.icon

  return (
    <main className="min-h-screen pt-32 pb-20 overflow-hidden relative bg-[#050505]">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-600/10 blur-[150px] -z-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <Breadcrumbs />
        <Link href="/services" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Retour aux services
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-blue-600/20 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(37,99,235,0.3)] border border-blue-500/30">
              <Icon className="text-blue-400" size={32} />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              {service.title} <span className="text-blue-500">.</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-10">
              {service.fullDesc}
            </p>

            <div className="space-y-4 mb-10">
              {service.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-blue-500" size={20} />
                  <span className="font-medium text-lg text-gray-200">{feature}</span>
                </div>
              ))}
            </div>

            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white rounded-full font-bold shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:scale-105 transition-all">
              Demander un devis <MessageSquare size={20} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Visual Container */}
            <div className="aspect-square rounded-[40px] bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden relative group">
              {imageMapping[slug] ? (
                <Image 
                  src={imageMapping[slug]} 
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon size={160} className="text-white/10 group-hover:scale-110 transition-transform duration-700" />
                  </div>
                </>
              )}
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10">
                <p className="text-sm font-medium italic text-blue-400">DigitalH Expertise</p>
                <p className="text-lg font-bold text-white">Solution Premium & Durable</p>
              </div>
            </div>

            {/* Decorative Glow */}
            <div className="absolute -inset-4 bg-blue-600/5 blur-2xl -z-10 rounded-full" />
          </motion.div>
        </div>
      </div>
    </main>
  )
}

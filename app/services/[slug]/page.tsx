'use client'

import React, { use } from 'react'
import { services } from '@/data/services'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowLeft, MessageSquare, Rocket, Shield, HeartHandshake, Headphones, ArrowRight, BarChart, Globe } from 'lucide-react'
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
  'applications-mobiles': '/mobile_app_hero_1777175561559.png',
  'saas-immobilier': '/saas_realestate_hero_1777175578194.png',
  'sea': '/sea_ads_hero_1777175592088.png',
  'antennes-vsat': '/vsat_satellite_hero_1777175607207.png',
  'gestion-reseaux-sociaux': '/social_media_hero_1777175623563.png',
  'creation-logo': '/logo_design_hero_1777175637864.png',
  'site-wordpress': '/wordpress_design_hero_1777175653597.png',
  'application-web': '/web_app_hero_full_1777175667208.png',
  'logiciel-portefeuille': '/portfolio_mgmt_hero_1777175683302.png',
  'affiches-publicitaires': '/poster_design_hero_1777175696418.png',
}

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const service = (services as any).find((s: any) => s.slug === slug)

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

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
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
              {service.features.map((feature: string, i: number) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-blue-500" size={20} />
                  <span className="font-medium text-lg text-gray-200">{feature}</span>
                </div>
              ))}
            </div>

            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white rounded-full font-bold shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:scale-105 transition-all">
              Démarrer mon projet <MessageSquare size={20} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
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
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10">
                <p className="text-sm font-medium italic text-blue-400">Expertise Digitale Premium</p>
                <p className="text-lg font-bold text-white">DigitalH Quality Standard</p>
              </div>
            </div>
            <div className="absolute -inset-4 bg-blue-600/5 blur-2xl -z-10 rounded-full" />
          </motion.div>
        </div>

        {/* Quality & Accompagnement Section */}
        <section className="mb-32">
          <div className="glass p-12 rounded-[40px] border border-blue-500/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5">
              <HeartHandshake size={200} className="text-blue-500" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-black mb-8">Qualité de l'Accompagnement <span className="text-blue-500">DigitalH</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <p className="text-xl text-gray-400 leading-relaxed mb-6">
                    {service.qualityDesc || "Chez DigitalH, nous croyons que la technologie ne vaut rien sans un accompagnement humain d’excellence. Notre mission est de vous libérer de la complexité technique pour que vous puissiez vous concentrer sur votre cœur de métier."}
                  </p>
                  <div className="flex items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/5">
                    <Headphones className="text-blue-500" size={32} />
                    <div>
                      <p className="font-bold">Support Dédié</p>
                      <p className="text-sm text-gray-400">Un interlocuteur unique pour tout votre projet.</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                    <Shield className="text-blue-500 mb-4" size={24} />
                    <p className="font-bold mb-2">Sécurité</p>
                    <p className="text-xs text-gray-400">Protection maximale de vos données et actifs numériques.</p>
                  </div>
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                    <Rocket className="text-blue-500 mb-4" size={24} />
                    <p className="font-bold mb-2">Performance</p>
                    <p className="text-xs text-gray-400">Solutions optimisées pour une vitesse et une efficacité records.</p>
                  </div>
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                    <BarChart className="text-blue-500 mb-4" size={24} />
                    <p className="font-bold mb-2">ROI Garanti</p>
                    <p className="text-xs text-gray-400">Des stratégies conçues pour générer de la croissance réelle.</p>
                  </div>
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                    <Globe className="text-blue-500 mb-4" size={24} />
                    <p className="font-bold mb-2">Disponibilité</p>
                    <p className="text-xs text-gray-400">Engagement de service 24/7 pour vos infrastructures critiques.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        {service.process && (
          <section className="mb-32 text-center">
            <h2 className="text-3xl font-black mb-16">Notre <span className="text-blue-500">Méthodologie</span> en 4 Étapes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.process.map((step: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white font-black flex items-center justify-center mx-auto mb-6 shadow-[0_0_15px_rgba(37,99,235,0.5)] relative z-10">
                    {i + 1}
                  </div>
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-6 left-[60%] w-full h-[2px] bg-gradient-to-r from-blue-600 to-transparent z-0" />
                  )}
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-b from-blue-600/10 to-transparent p-20 rounded-[50px] border border-blue-500/10">
          <h2 className="text-4xl font-black mb-6">Prêt à élever vos standards ?</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Ne laissez pas votre technologie vous ralentir. Discutons de la manière dont DigitalH peut transformer vos défis en opportunités.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 px-12 py-6 bg-primary text-white rounded-full font-black text-lg glow hover:scale-105 transition-all">
            Réserver un appel gratuit <ArrowRight size={22} />
          </Link>
        </section>
      </div>
    </main>
  )
}

import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowLeft, MessageSquare, Rocket, Shield, HeartHandshake, Headphones, ArrowRight, LineChart, Globe, Smartphone, Cpu, Zap, Layout, Satellite } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import RichText from '@/components/RichText'
import { ServiceClientWrapper } from '@/components/ServiceClientWrapper'

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const payload = await getPayload({ config: await configPromise })
  
  const { docs } = await payload.find({
    collection: 'services',
    where: { slug: { equals: slug } },
  })

  const service = docs[0]

  if (!service) {
    return { title: 'Service non trouvé' }
  }

  return {
    title: `${service.title} | Services DigitalH`,
    description: service.shortDesc || `Découvrez notre service: ${service.title}`,
  }
}

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

const iconMapping: Record<string, any> = {
  Globe, Smartphone, LineChart, Cpu, Zap: Rocket, Layout: Rocket, Satellite
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const payload = await getPayload({ config: await configPromise })
  
  const { docs } = await payload.find({
    collection: 'services',
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  const service = docs[0]

  if (!service) {
    notFound()
  }

  const Icon = iconMapping[service.icon as string] || Globe

  return (
    <main className="min-h-screen pt-32 pb-20 overflow-hidden relative bg-background">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/10 blur-[150px] -z-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <Breadcrumbs />
        <Link href="/services" className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors mb-12 group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Retour aux services
        </Link>

        <ServiceClientWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(255,92,0,0.3)] border border-primary/30">
                <Icon className="text-primary" size={32} />
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-foreground">
                {service.title} <span className="text-primary">.</span>
              </h1>
              <div className="text-xl text-muted leading-relaxed mb-10">
                <RichText content={service.content} />
              </div>

              <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white rounded-full font-bold shadow-[0_0_25px_rgba(255,92,0,0.4)] hover:scale-105 transition-all">
                Démarrer mon projet <MessageSquare size={20} />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-[40px] bg-background/50 backdrop-blur-sm border border-border overflow-hidden relative group shadow-xl">
                {imageMapping[slug] ? (
                  <Image 
                    src={imageMapping[slug]} 
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon size={160} className="text-foreground/10 group-hover:scale-110 transition-transform duration-700" />
                    </div>
                  </>
                )}
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-background/80 backdrop-blur-md rounded-2xl border border-border shadow-lg">
                  <p className="text-sm font-medium italic text-primary">Expertise Digitale Premium</p>
                  <p className="text-lg font-bold text-foreground">DigitalH Quality Standard</p>
                </div>
              </div>
              <div className="absolute -inset-4 bg-primary/5 blur-2xl -z-10 rounded-full" />
            </div>
          </div>
        </ServiceClientWrapper>

        {/* Quality & Accompagnement Section */}
        <section className="mb-32">
          <div className="glass p-12 rounded-[40px] border border-border relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 p-12 opacity-5">
              <HeartHandshake size={200} className="text-primary" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-black mb-8 text-foreground">Qualité de l'Accompagnement <span className="text-primary">DigitalH</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <p className="text-xl text-muted leading-relaxed mb-6">
                    Chez DigitalH, nous croyons que la technologie ne vaut rien sans un accompagnement humain d’excellence. Notre mission est de vous libérer de la complexité technique pour que vous puissiez vous concentrer sur votre cœur de métier.
                  </p>
                  <div className="flex items-center gap-4 p-6 bg-background/50 rounded-2xl border border-border shadow-sm">
                    <Headphones className="text-primary" size={32} />
                    <div>
                      <p className="font-bold text-foreground">Support Dédié</p>
                      <p className="text-sm text-muted">Un interlocuteur unique pour tout votre projet.</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-6 bg-background/50 rounded-2xl border border-border shadow-sm">
                    <Shield className="text-primary mb-4" size={24} />
                    <p className="font-bold mb-2 text-foreground">Sécurité</p>
                    <p className="text-xs text-muted">Protection maximale de vos données et actifs numériques.</p>
                  </div>
                  <div className="p-6 bg-background/50 rounded-2xl border border-border shadow-sm">
                    <Rocket className="text-primary mb-4" size={24} />
                    <p className="font-bold mb-2 text-foreground">Performance</p>
                    <p className="text-xs text-muted">Solutions optimisées pour une vitesse et une efficacité records.</p>
                  </div>
                  <div className="p-6 bg-background/50 rounded-2xl border border-border shadow-sm">
                    <LineChart className="text-primary mb-4" size={24} />
                    <p className="font-bold mb-2 text-foreground">ROI Garanti</p>
                    <p className="text-xs text-muted">Des stratégies conçues pour générer de la croissance réelle.</p>
                  </div>
                  <div className="p-6 bg-background/50 rounded-2xl border border-border shadow-sm">
                    <Globe className="text-primary mb-4" size={24} />
                    <p className="font-bold mb-2 text-foreground">Disponibilité</p>
                    <p className="text-xs text-muted">Engagement de service 24/7 pour vos infrastructures critiques.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-b from-primary/10 to-transparent p-20 rounded-[50px] border border-border shadow-inner">
          <h2 className="text-4xl font-black mb-6 text-foreground">Prêt à élever vos standards ?</h2>
          <p className="text-xl text-muted mb-10 max-w-2xl mx-auto">
            Ne laissez pas votre technologie vous ralentir. Discutons de la manière dont DigitalH peut transformer vos défis en opportunités.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 px-12 py-6 bg-primary text-white rounded-full font-black text-lg glow hover:scale-105 transition-all">
            Réserver un appel gratuit <ArrowRight size={22} />
          </Link>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": service.title,
              "description": service.shortDesc || service.title,
              "provider": {
                "@type": "Organization",
                "name": "DigitalH"
              }
            })
          }}
        />
      </div>
    </main>
  )
}

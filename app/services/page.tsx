'use client'

import { services } from '@/data/services'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

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

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl font-black mb-6">Nos <span className="text-gradient">Services</span></h1>
          <p className="text-xl text-muted">
            Des solutions innovantes pour accompagner votre transformation digitale et technique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-[32px] group hover:glow transition-all overflow-hidden flex flex-col"
            >
              {/* Image Preview */}
              <div className="h-48 relative overflow-hidden bg-white/5">
                {imageMapping[service.slug] ? (
                  <Image 
                    src={imageMapping[service.slug]} 
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <service.icon className="text-accent/20" size={60} />
                  </div>
                )}
                <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10">
                  <service.icon className="text-accent" size={24} />
                </div>
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted mb-8 line-clamp-3 flex-grow">
                  {service.shortDesc}
                </p>
                <Link 
                  href={`/services/${service.slug}`} 
                  className="flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all mt-auto"
                >
                  En savoir plus <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}

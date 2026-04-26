'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Home } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    name: 'Luxura Immobilier',
    url: 'https://www.luxura-immobilier.com/',
    desc: 'Plateforme immobilière de luxe avec visite virtuelle et gestion avancée.',
    image: '/portfolio_luxura.png'
  },
  {
    name: 'Loger Sénégal',
    url: 'https://www.logersenegal.com',
    desc: 'Portail immobilier leader au Sénégal, optimisé pour la conversion.',
    image: '/portfolio_logersenegal.png'
  },
  {
    name: 'Loger Togo',
    url: 'https://logertogo.com',
    desc: 'Solution complète de gestion et recherche de biens au Togo.',
    image: '/portfolio_logertogo.png'
  }
]

export default function Portfolio() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6">Nos Réalisations <span className="text-primary">Immobilier</span></h2>
          <p className="text-xl text-muted leading-relaxed">
            Découvrez comment DigitalH révolutionne le secteur immobilier avec des plateformes sur mesure, performantes et centrées sur l'expérience utilisateur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-[40px] overflow-hidden group hover:glow transition-all"
            >
              <div className="h-64 relative bg-white/5 overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <Home size={80} className="text-white/10 group-hover:scale-110 transition-transform duration-700" />
                 </div>
              </div>

              <div className="p-10">
                <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
                <p className="text-muted mb-8 leading-relaxed">
                  {project.desc}
                </p>
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
                >
                  Visiter le site <ExternalLink size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

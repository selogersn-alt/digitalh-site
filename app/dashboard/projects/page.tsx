'use client'

import { motion } from 'framer-motion'
import { Briefcase, Clock, CheckCircle, ExternalLink } from 'lucide-react'
import Link from 'next/link'

const projects = [
  { 
    id: 1,
    name: 'Installation Starlink Pro', 
    service: 'Installation Starlink',
    status: 'En cours', 
    progress: 65,
    startDate: '12 Avril 2026',
    estCompletion: '28 Avril 2026',
    description: 'Installation d’un kit Starlink haute performance avec configuration réseau local et optimisation du signal.'
  },
  { 
    id: 2,
    name: 'Refonte SEO DigitalH', 
    service: 'SEO & Marketing',
    status: 'Terminé', 
    progress: 100,
    startDate: '01 Mars 2026',
    estCompletion: '15 Avril 2026',
    description: 'Audit complet, optimisation sémantique et stratégie de netlinking pour le domaine digitalh.net.'
  },
  { 
    id: 3,
    name: 'Application Mobile E-commerce', 
    service: 'Application Mobile',
    status: 'En attente', 
    progress: 0,
    startDate: 'À venir',
    estCompletion: 'TBD',
    description: 'Développement d’une application de vente en ligne sous Android et iOS.'
  }
]

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h3 className="text-3xl font-bold">Mes <span className="text-primary">Projets</span></h3>
        <Link href="/services" className="px-6 py-3 bg-white/5 hover:bg-white/10 rounded-2xl font-bold transition-all border border-white/5">
          Nouveau projet +
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass p-8 rounded-[40px] border border-white/5 hover:border-primary/20 transition-all"
          >
            <div className="flex flex-col lg:flex-row justify-between gap-8">
              <div className="flex-grow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold">{project.name}</h4>
                    <p className="text-sm text-muted">{project.service}</p>
                  </div>
                </div>
                <p className="text-muted mb-6 max-w-2xl">
                  {project.description}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <p className="text-muted mb-1">Date de début</p>
                    <p className="font-bold">{project.startDate}</p>
                  </div>
                  <div>
                    <p className="text-muted mb-1">Fin estimée</p>
                    <p className="font-bold">{project.estCompletion}</p>
                  </div>
                  <div>
                    <p className="text-muted mb-1">Statut</p>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      project.status === 'Terminé' ? 'bg-green-500/20 text-green-500' : 
                      project.status === 'En cours' ? 'bg-blue-500/20 text-blue-500' : 'bg-white/5 text-muted'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:w-72 flex flex-col justify-center">
                <div className="mb-4">
                  <div className="flex justify-between text-sm font-bold mb-2">
                    <span>Progression</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${project.progress}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-primary glow"
                    />
                  </div>
                </div>
                <button className="w-full py-3 bg-white/5 hover:bg-white/10 rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
                  Détails du projet <ExternalLink size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

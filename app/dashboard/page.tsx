'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Clock, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const stats = [
  { label: 'Projets actifs', value: '2', icon: Clock, color: 'text-blue-500' },
  { label: 'Factures payées', value: '12', icon: CheckCircle, color: 'text-green-500' },
  { label: 'Heures de support', value: '45h', icon: TrendingUp, color: 'text-purple-500' },
  { label: 'Notifications', value: '3', icon: AlertCircle, color: 'text-orange-500' },
]

const recentProjects = [
  { name: 'Installation Starlink Pro', status: 'En cours', progress: 65 },
  { name: 'Refonte SEO DigitalH', status: 'Terminé', progress: 100 },
]

export default function DashboardOverview() {
  return (
    <div className="space-y-10">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-6 rounded-3xl"
            >
              <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-4 ${stat.color}`}>
                <Icon size={24} />
              </div>
              <p className="text-muted text-sm mb-1">{stat.label}</p>
              <p className="text-3xl font-black">{stat.value}</p>
            </motion.div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Projects Preview */}
        <div className="lg:col-span-2 glass p-8 rounded-[40px]">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold">Projets Récents</h3>
            <Link href="/dashboard/projects" className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all">
              Voir tout <ArrowRight size={20} />
            </Link>
          </div>

          <div className="space-y-6">
            {recentProjects.map((project) => (
              <div key={project.name} className="p-6 bg-white/5 rounded-3xl border border-white/5 group hover:border-primary/20 transition-all">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-bold">{project.name}</h4>
                  <span className={`px-4 py-1 rounded-full text-xs font-bold ${
                    project.status === 'Terminé' ? 'bg-green-500/20 text-green-500' : 'bg-blue-500/20 text-blue-500'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${project.progress}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-primary glow"
                  />
                </div>
                <div className="flex justify-between mt-2 text-xs text-muted">
                  <span>Progression</span>
                  <span>{project.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support Sidebar */}
        <div className="glass p-8 rounded-[40px] flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6">
            <AlertCircle className="text-primary" size={40} />
          </div>
          <h3 className="text-2xl font-bold mb-4">Besoin d'aide ?</h3>
          <p className="text-muted mb-8">
            Votre chargé de compte est disponible pour toute question technique ou commerciale.
          </p>
          <button className="w-full py-4 bg-primary text-white rounded-2xl font-bold glow mb-4">
            Ouvrir un ticket
          </button>
          <button className="w-full py-4 bg-white/5 text-white rounded-2xl font-bold hover:bg-white/10 transition-all">
            Consulter la FAQ
          </button>
        </div>
      </div>
    </div>
  )
}

'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Target, Zap, Heart } from 'lucide-react'

const values = [
  { icon: ShieldCheck, title: 'Intégrité', desc: 'Une transparence totale sur nos processus et nos tarifs.' },
  { icon: Target, title: 'Précision', desc: 'Des solutions sur mesure adaptées à vos besoins réels.' },
  { icon: Zap, title: 'Vitesse', desc: 'Une réactivité sans faille pour vos urgences techniques.' },
  { icon: Heart, title: 'Engagement', desc: 'Votre succès est notre priorité absolue.' },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              L'excellence <span className="text-gradient">Digitale</span> sans frontières.
            </h1>
            <p className="text-xl text-muted leading-relaxed mb-8">
              DigitalH est née de la volonté d'offrir des solutions technologiques de pointe aux entreprises africaines et internationales. Nous croyons que la technologie est le levier principal de la croissance moderne.
            </p>
            <p className="text-lg text-muted leading-relaxed mb-10">
              De l'installation satellite complexe au développement d'applications mobiles intuitives, notre équipe pluridisciplinaire repousse chaque jour les limites du possible pour nos clients.
            </p>
            <div className="flex gap-12">
              <div>
                <p className="text-4xl font-black text-primary">50+</p>
                <p className="text-sm text-muted font-bold uppercase tracking-widest">Projets livrés</p>
              </div>
              <div>
                <p className="text-4xl font-black text-primary">14</p>
                <p className="text-sm text-muted font-bold uppercase tracking-widest">Expertises</p>
              </div>
              <div>
                <p className="text-4xl font-black text-primary">99%</p>
                <p className="text-sm text-muted font-bold uppercase tracking-widest">Satisfaction</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/5] rounded-[40px] bg-white/5 border border-white/10 relative overflow-hidden"
          >
             {/* Decorative Background */}
             <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
             <div className="absolute inset-0 flex items-center justify-center text-primary/5 font-black text-9xl">H</div>
             
             {/* Content Overlay */}
             <div className="absolute bottom-12 left-12 right-12 glass p-8 rounded-3xl">
                <p className="text-sm font-bold text-primary mb-2 uppercase tracking-widest">Notre Mission</p>
                <p className="text-2xl font-bold italic">"Connecter les idées au futur à travers l'innovation technologique."</p>
             </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">Nos Valeurs</h2>
          <p className="text-muted text-xl max-w-2xl mx-auto">Ce qui définit chaque ligne de code et chaque intervention technique chez DigitalH.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-10 rounded-[32px] text-center group hover:glow transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <value.icon className="text-accent" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
              <p className="text-muted leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}

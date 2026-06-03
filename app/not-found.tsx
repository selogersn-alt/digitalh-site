import Link from 'next/link'
import { Hammer, ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'En cours de création | DigitalH',
  description: 'Cette page est actuellement en cours de développement.',
}

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden pt-20">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-primary/10 blur-[150px] -z-10 rounded-full" />
      
      <div className="text-center px-6 z-10 max-w-2xl">
        <div className="w-24 h-24 bg-white/5 rounded-[32px] flex items-center justify-center mx-auto mb-8 border border-white/10 shadow-[0_0_30px_rgba(255,92,0,0.2)]">
          <Hammer size={48} className="text-primary" />
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-6 text-white leading-tight">En cours de <span className="text-primary">création</span></h1>
        <p className="text-xl text-gray-400 mb-10 leading-relaxed">
          Cette page est actuellement en cours de développement ou de mise à jour par nos équipes techniques. Elle sera très bientôt disponible !
        </p>
        <Link href="/" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,92,0,0.3)]">
          <ArrowLeft size={20} /> Retour à l'accueil
        </Link>
      </div>
    </main>
  )
}

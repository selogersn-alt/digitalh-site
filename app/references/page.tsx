import Portfolio from '@/components/Portfolio'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nos Références | DigitalH',
  description: 'Découvrez les projets et réalisations de l\'agence DigitalH. Sites web, applications, et plateformes développées par nos experts.',
}

export default function ReferencesPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/10 blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-accent/10 blur-[150px] -z-10" />
      
      <div className="container mx-auto px-6 text-center max-w-4xl mb-16 relative z-10">
        <h1 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Portfolio</h1>
        <h2 className="text-5xl md:text-7xl font-black text-foreground mb-6">Nos <span className="text-gradient">Références</span></h2>
        <p className="text-xl text-muted">
          Nous concevons des solutions sur mesure qui propulsent la croissance de nos clients. Découvrez notre sélection de projets phares.
        </p>
      </div>

      <div className="-mt-20">
        <Portfolio />
      </div>
    </main>
  )
}

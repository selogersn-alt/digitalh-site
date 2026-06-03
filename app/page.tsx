import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import { ArrowRight, Globe, Smartphone, LineChart, Cpu, ShieldCheck, Zap, Layout, Satellite, CheckCircle2, Headphones, Shield, Rocket } from 'lucide-react'
import Link from 'next/link'
import Portfolio from '@/components/Portfolio'
import { ServiceClientWrapper } from '@/components/ServiceClientWrapper'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agence Web & Marketing Digital | DigitalH',
  description: 'L\'agence web de marketing et communication numérique pour les entreprises qui cherchent à développer leur présence digitale.',
}

const iconMapping: Record<string, any> = {
  Globe, Smartphone, LineChart, Cpu, Zap, Layout, Satellite
}

export default async function Home() {
  const payload = await getPayload({ config: await configPromise })
  const { docs: services } = await payload.find({
    collection: 'services',
    limit: 8,
  })

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Background Glow */}
      <div className="absolute top-[0%] left-[50%] -translate-x-1/2 w-[80%] h-[50%] rounded-full bg-primary/10 blur-[150px] pointer-events-none" />

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-40 pb-20 relative z-10">
        <ServiceClientWrapper>
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/30 text-primary text-sm font-bold mb-6">
                <Zap size={16} /> Agence Digitale Premium
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight text-foreground drop-shadow-sm">
                Propulsez votre entreprise dans la <span className="text-gradient">Stratosphère</span>
              </h1>
              <p className="text-xl text-muted mb-10 max-w-lg leading-relaxed">
                L'agence web de marketing et communication numérique pour les entreprises qui cherchent à développer leur présence digitale et exploser leur ROI.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="px-8 py-4 bg-primary hover:bg-primary/80 hover:scale-105 text-white rounded-full font-bold flex items-center justify-center gap-2 glow transition-all">
                  Démarrer un projet <ArrowRight size={20} />
                </Link>
                <Link href="/services" className="px-8 py-4 glass hover:bg-foreground/5 text-foreground rounded-full font-bold transition-all text-center">
                  Nos Services
                </Link>
              </div>
              
              <div className="mt-12 flex items-center gap-6 text-sm font-medium text-muted">
                <span className="flex items-center gap-2"><CheckCircle2 className="text-secondary" size={18}/> Sans engagement</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="text-secondary" size={18}/> Audit 100% gratuit</span>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative flex justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 blur-[100px] rounded-full -z-10" />
              <div className="glass p-8 rounded-[40px] border border-border shadow-xl w-full max-w-md aspect-square flex flex-col items-center justify-center relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                    <Rocket size={200} className="text-foreground" />
                 </div>
                 <div className="z-10 text-center">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-md shadow-inner">
                      <Layout size={40} className="text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Conception Web</h3>
                    <p className="text-muted">Design UI/UX & Développement</p>
                 </div>
              </div>
            </div>
          </div>
        </ServiceClientWrapper>
      </section>

      {/* Services Grid Preview */}
      <section className="container mx-auto px-6 py-24 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Nos Expertises</h2>
          <h3 className="text-4xl md:text-5xl font-black text-foreground mb-6">Donnez vie à vos projets grâce à nos différents <span className="text-gradient">services</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = iconMapping[service.icon as string] || Globe
            return (
              <ServiceClientWrapper key={i}>
                <Link href={`/services/${service.slug}`} className="block h-full">
                  <div className="glass p-10 rounded-[30px] group hover:-translate-y-2 transition-all duration-300 h-full border border-border hover:border-primary/50 relative overflow-hidden shadow-sm hover:shadow-xl">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-[100px] -z-10 transition-colors group-hover:bg-primary/20" />
                    <div className="w-14 h-14 rounded-2xl bg-background flex items-center justify-center mb-8 border border-border shadow-sm group-hover:border-primary/50 transition-colors">
                      <Icon className="text-foreground group-hover:text-primary transition-colors" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h3>
                    <p className="text-muted text-sm leading-relaxed mb-8">{service.shortDesc}</p>
                    <div className="flex items-center text-primary font-bold text-sm gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      En savoir plus <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              </ServiceClientWrapper>
            )
          })}
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="py-24 bg-muted/5 border-y border-border relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/20 blur-[150px] -z-10" />
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-8 leading-tight">
                Pourquoi choisir <span className="text-gradient">DigitalH</span> pour votre transformation digitale ?
              </h2>
              <p className="text-xl text-muted mb-8 leading-relaxed">
                Nous ne sommes pas juste des exécutants. Nous sommes vos partenaires stratégiques, dédiés à la réussite et à la croissance de votre entreprise.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary shadow-sm"><Shield size={24} /></div>
                    <h4 className="text-xl font-bold text-foreground">Fiabilité</h4>
                  </div>
                  <p className="text-sm text-muted">Des solutions robustes et sécurisées.</p>
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-secondary/10 border border-secondary/20 text-secondary shadow-sm"><LineChart size={24} /></div>
                    <h4 className="text-xl font-bold text-foreground">Performance</h4>
                  </div>
                  <p className="text-sm text-muted">Axé sur les résultats et le ROI.</p>
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 text-accent shadow-sm"><Headphones size={24} /></div>
                    <h4 className="text-xl font-bold text-foreground">Support 24/7</h4>
                  </div>
                  <p className="text-sm text-muted">Une équipe toujours à votre écoute.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="glass p-12 rounded-[40px] relative shadow-2xl border border-border">
                <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent opacity-50 rounded-[40px]" />
                <h3 className="text-3xl font-bold text-foreground mb-8 relative z-10">Notre Processus</h3>
                <div className="space-y-8 relative z-10">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-primary text-white font-black flex items-center justify-center shrink-0 text-xl glow">1</div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-2">Audit & Stratégie</h4>
                      <p className="text-muted text-sm">Analyse de vos besoins et définition d'un plan d'action précis.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-secondary text-white font-black flex items-center justify-center shrink-0 text-xl shadow-lg">2</div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-2">Conception & Développement</h4>
                      <p className="text-muted text-sm">Création sur mesure avec des technologies de pointe.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-accent text-white font-black flex items-center justify-center shrink-0 text-xl shadow-lg">3</div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-2">Lancement & Croissance</h4>
                      <p className="text-muted text-sm">Déploiement optimisé et suivi des performances.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-24 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent -z-10 rounded-full blur-[100px]" />
        <h2 className="text-5xl font-black text-foreground mb-8 drop-shadow-sm">Prêt à dominer votre marché ?</h2>
        <p className="text-xl text-muted mb-12 max-w-2xl mx-auto">
          Contactez-nous aujourd'hui pour obtenir une consultation gratuite et découvrir comment nous pouvons vous aider.
        </p>
        <Link href="/contact" className="inline-flex items-center gap-3 px-12 py-5 bg-foreground text-background rounded-full font-black text-lg hover:scale-105 transition-transform shadow-2xl">
          Discuter de votre projet <ArrowRight size={20} />
        </Link>
      </section>
    </main>
  )
}

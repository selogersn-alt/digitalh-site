import Link from 'next/link'
import { Globe, Smartphone, Cpu, Mail, Phone, MapPin, Link as LinkIcon } from 'lucide-react'

import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 pointer-events-none -z-10" />
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16 relative z-10">
        <div className="lg:col-span-1">
          <Link href="/" className="text-2xl font-black tracking-tighter flex items-center gap-3 mb-6 text-foreground">
            <div className="relative w-8 h-8 overflow-hidden rounded-lg border border-border shadow-sm">
              <Image 
                src="/logo_h.png" 
                alt="DigitalH Logo" 
                fill 
                className="object-cover"
                unoptimized={true}
              />
            </div>
            DIGITAL<span className="text-primary">H</span>
          </Link>
          <p className="text-muted text-sm leading-relaxed mb-6">
            Expertise IT & Marketing Digital pour propulser votre entreprise.
          </p>
          <div className="flex flex-wrap gap-2">
            <Link href="#" className="w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><Globe size={14}/></Link>
            <Link href="#" className="w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><Smartphone size={14}/></Link>
            <Link href="#" className="w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><Cpu size={14}/></Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold mb-6 text-foreground uppercase tracking-wider">Web & Logiciel</h4>
          <ul className="space-y-3 text-sm text-muted">
            <li><Link href="/services/creation-site-web" className="hover:text-primary transition-colors">Création Site Web</Link></li>
            <li><Link href="/services/site-ecommerce" className="hover:text-primary transition-colors">Site E-Commerce</Link></li>
            <li><Link href="/services/applications-mobiles" className="hover:text-primary transition-colors">Applications Mobiles</Link></li>
            <li><Link href="/services/application-web" className="hover:text-primary transition-colors">Application Web</Link></li>
            <li><Link href="/services/saas-immobilier" className="hover:text-primary transition-colors">SaaS Immobilier</Link></li>
            <li><Link href="/services/site-wordpress" className="hover:text-primary transition-colors">Site WordPress</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold mb-6 text-foreground uppercase tracking-wider">Marketing & IT</h4>
          <ul className="space-y-3 text-sm text-muted">
            <li><Link href="/services/seo" className="hover:text-primary transition-colors">Référencement (SEO)</Link></li>
            <li><Link href="/services/sea" className="hover:text-primary transition-colors">Campagne Ads en Ligne</Link></li>
            <li><Link href="/services/gestion-reseaux-sociaux" className="hover:text-primary transition-colors">Réseaux Sociaux</Link></li>
            <li><Link href="/services/intelligence-artificielle" className="hover:text-primary transition-colors">Intelligence Artificielle</Link></li>
            <li><Link href="/services/installation-starlink" className="hover:text-primary transition-colors">Installation Starlink</Link></li>
            <li><Link href="/services/audits-et-strategies" className="hover:text-primary transition-colors">Audits et Stratégies</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold mb-6 text-foreground uppercase tracking-wider">Liens Rapides</h4>
          <ul className="space-y-3 text-sm text-muted">
            <li><Link href="/services" className="hover:text-primary transition-colors">Tous nos Services</Link></li>
            <li><Link href="/references" className="hover:text-primary transition-colors">Nos Références</Link></li>
            <li><Link href="/blog" className="hover:text-primary transition-colors">Nos Ressources</Link></li>
            <li><Link href="/about" className="hover:text-primary transition-colors">À propos</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Nous contacter</Link></li>
            <li className="mt-4 pt-4 border-t border-border"><Link href="/admin" className="text-primary font-bold hover:underline transition-all">Espace Administration</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold mb-6 text-foreground uppercase tracking-wider">Newsletter</h4>
          <form className="flex flex-col gap-2">
            <input type="email" placeholder="Votre email" className="bg-background border border-border rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-primary text-foreground shadow-sm" />
            <button type="submit" className="bg-primary text-white font-bold rounded-xl px-3 py-2 text-sm hover:scale-105 transition-transform shadow-md">
              S'abonner
            </button>
          </form>
          <div className="mt-6">
            <ul className="space-y-2 text-sm text-muted">
              <li className="flex items-center gap-2"><Mail size={14} className="text-primary"/> contact@digitalh.net</li>
              <li className="flex items-center gap-2"><Phone size={14} className="text-primary"/> +228 90 98 00 53</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-10 border-t border-border text-center text-xs text-muted relative z-10">
        <p>© 2022-2026 DigitalH. Tous droits réservés.</p>
      </div>
    </footer>
  )
}

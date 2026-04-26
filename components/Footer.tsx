import Link from 'next/link'
import { Globe, Smartphone, Cpu, Mail, Phone, MapPin, Link as LinkIcon } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <Link href="/" className="text-2xl font-black tracking-tighter flex items-center gap-2 mb-6">
            <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-lg italic">H</span>
            DIGITAL<span className="text-primary">H</span>
          </Link>
          <p className="text-muted text-sm leading-relaxed mb-6">
            Expertise IT & Marketing Digital pour propulser votre entreprise au niveau supérieur. Solutions Starlink, VSAT, Développement et SEO.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><Globe size={18}/></Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><Smartphone size={18}/></Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><Cpu size={18}/></Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><LinkIcon size={18}/></Link>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Services</h4>
          <ul className="space-y-4 text-sm text-muted">
            <li><Link href="/services/web" className="hover:text-primary transition-colors">Création Site Web</Link></li>
            <li><Link href="/services/mobile" className="hover:text-primary transition-colors">Applications Mobiles</Link></li>
            <li><Link href="/services/seo" className="hover:text-primary transition-colors">SEO & Marketing</Link></li>
            <li><Link href="/services/starlink" className="hover:text-primary transition-colors">Installation Starlink</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Liens rapides</h4>
          <ul className="space-y-4 text-sm text-muted">
            <li><Link href="/about" className="hover:text-primary transition-colors">À propos</Link></li>
            <li><Link href="/blog" className="hover:text-primary transition-colors">Notre Blog</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            <li><Link href="/dashboard" className="hover:text-primary transition-colors">Espace Client</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Contact</h4>
          <ul className="space-y-4 text-sm text-muted">
            <li className="flex items-center gap-3"><Mail size={18} className="text-primary"/> contact@digitalh.net</li>
            <li className="flex items-center gap-3"><Phone size={18} className="text-primary"/> +228 90 98 00 53 / +221 77 857 89 79</li>
            <li className="flex items-center gap-3"><MapPin size={18} className="text-primary"/> Lomé, Togo / International</li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-10 border-t border-white/5 text-center text-xs text-muted">
        <p>© {new Date().getFullYear()} DigitalH. Tous droits réservés.</p>
      </div>
    </footer>
  )
}

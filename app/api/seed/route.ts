import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import { NextResponse } from 'next/server'

const servicesToSeed = [
  { title: 'Installation Starlink', slug: 'installation-starlink', shortDesc: 'Connexion internet très haut débit par satellite pour entreprises et particuliers.', icon: 'Satellite' },
  { title: 'Création Site Web', slug: 'creation-site-web', shortDesc: 'Conception de sites vitrines et corporatifs sur mesure et performants.', icon: 'Layout' },
  { title: 'Abonnement IPTV', slug: 'abonnement-iptv', shortDesc: 'Accès premium à des milliers de chaînes et catalogues VOD.', icon: 'Zap' },
  { title: 'Référencement Naturel (SEO)', slug: 'seo', shortDesc: 'Optimisation de votre visibilité sur les moteurs de recherche.', icon: 'LineChart' },
  { title: 'Intelligence Artificielle', slug: 'intelligence-artificielle', shortDesc: 'Intégration de solutions IA pour propulser et automatiser votre activité.', icon: 'Cpu' },
  { title: 'Automatisation', slug: 'automatisation', shortDesc: 'Gain de temps massif via l\'automatisation de vos tâches répétitives.', icon: 'Cpu' },
  { title: 'Applications Mobiles', slug: 'applications-mobiles', shortDesc: 'Développement natif et hybride d\'applications iOS et Android.', icon: 'Smartphone' },
  { title: 'SaaS Immobilier', slug: 'saas-immobilier', shortDesc: 'Logiciel CRM et ERP complet pour la gestion de votre agence immobilière.', icon: 'Globe' },
  { title: 'Campagne Ads en Ligne', slug: 'sea', shortDesc: 'Acquisition de clients ciblée via Google Ads, Meta Ads et TikTok Ads.', icon: 'LineChart' },
  { title: 'Antennes VSAT', slug: 'antennes-vsat', shortDesc: 'Déploiement de réseaux de télécommunications par satellite.', icon: 'Satellite' },
  { title: 'Gestion Réseaux Sociaux', slug: 'gestion-reseaux-sociaux', shortDesc: 'Community management, modération et création de contenu viral.', icon: 'Globe' },
  { title: 'Création de Logo', slug: 'creation-logo', shortDesc: 'Identité visuelle moderne et branding complet de votre marque.', icon: 'Layout' },
  { title: 'Site WordPress', slug: 'site-wordpress', shortDesc: 'Développement de plateformes sous le CMS le plus populaire.', icon: 'Layout' },
  { title: 'Application Web', slug: 'application-web', shortDesc: 'Conception d\'outils métiers sur-mesure accessibles via navigateur.', icon: 'Globe' },
  { title: 'Logiciel / Portefeuille', slug: 'logiciel-portefeuille', shortDesc: 'Solutions de gestion financière et développement de wallet.', icon: 'Zap' },
  { title: 'Affiches Publicitaires', slug: 'affiches-publicitaires', shortDesc: 'Design graphique et conception visuelle pour vos campagnes.', icon: 'Layout' },
  { title: 'Audits et stratégies', slug: 'audits-et-strategies', shortDesc: 'Analyse approfondie et plan d\'action pour votre croissance numérique.', icon: 'LineChart' },
  { title: 'Site E-Commerce', slug: 'site-ecommerce', shortDesc: 'Création de boutiques en ligne optimisées pour maximiser vos ventes.', icon: 'Smartphone' }
];

export async function GET() {
  const payload = await getPayload({ config: await configPromise })
  
  let added = []
  let skipped = []

  for (const svc of servicesToSeed) {
    try {
      const existing = await payload.find({
        collection: 'services',
        where: { slug: { equals: svc.slug } }
      })
      
      if (existing.docs.length === 0) {
        await payload.create({
          collection: 'services',
          data: {
            title: svc.title,
            slug: svc.slug,
            shortDesc: svc.shortDesc,
            icon: svc.icon,
            content: {
              root: {
                type: 'root',
                format: '',
                indent: 0,
                version: 1,
                children: [
                  {
                    type: 'paragraph',
                    format: '',
                    indent: 0,
                    version: 1,
                    children: [
                      {
                        type: 'text',
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: "Découvrez notre service professionnel et sur mesure. Nous vous accompagnons de A à Z pour garantir votre succès.",
                        version: 1,
                      },
                    ],
                  }
                ],
              },
            } as any,
          }
        })
        added.push(svc.slug)
      } else {
        skipped.push(svc.slug)
      }
    } catch(e) {
      console.error("Error adding", svc.slug, e)
    }
  }
  
  return NextResponse.json({ success: true, message: 'Seed complete', added, skipped })
}

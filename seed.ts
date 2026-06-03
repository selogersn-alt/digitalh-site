import { getPayload } from 'payload'
import configPromise from './payload.config'

async function seed() {
  const payload = await getPayload({ config: await configPromise })
  
  try {
    await payload.create({
      collection: 'services',
      data: {
        title: 'Audits et stratégies',
        slug: 'audits-et-strategies',
        shortDesc: "Analyse approfondie de votre écosystème numérique et mise en place d'une stratégie sur-mesure pour atteindre vos objectifs d'affaires.",
        icon: 'LineChart',
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
                    text: "Notre service d'audit analyse en profondeur vos plateformes actuelles, votre SEO, et vos concurrents pour concevoir une stratégie digitale performante et alignée sur vos ambitions.",
                    version: 1,
                  },
                ],
              }
            ],
          },
        } as any,
      }
    })
    console.log('Added Audits et strategies')
  } catch(e) { console.log('Audits already exists') }

  try {
    await payload.create({
      collection: 'services',
      data: {
        title: 'Site E-Commerce',
        slug: 'site-ecommerce',
        shortDesc: "Création de boutiques en ligne performantes, sécurisées et optimisées pour maximiser vos ventes et fidéliser vos clients.",
        icon: 'Smartphone',
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
                    text: "Nous développons des sites e-commerce sur mesure avec une expérience utilisateur optimale pour augmenter votre taux de conversion et propulser vos ventes.",
                    version: 1,
                  },
                ],
              }
            ],
          },
        } as any,
      }
    })
    console.log('Added Site E-commerce')
  } catch(e) { console.log('E-commerce already exists') }
  
  console.log('Seed done!')
  process.exit(0)
}

seed()

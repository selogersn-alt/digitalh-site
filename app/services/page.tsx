import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import ServicesList from '@/components/ServicesList'

export const dynamic = 'force-dynamic'

export default async function ServicesPage() {
  const payload = await getPayload({ config: await configPromise })
  const { docs: services } = await payload.find({
    collection: 'services',
    sort: 'title',
  })

  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl font-black mb-6">Nos <span className="text-gradient">Services</span></h1>
          <p className="text-xl text-muted">
            Des solutions innovantes pour accompagner votre transformation digitale et technique.
          </p>
        </div>

        <ServicesList services={services} />
      </div>
    </main>
  )
}

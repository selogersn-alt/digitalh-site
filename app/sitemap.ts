import { MetadataRoute } from 'next'

export const dynamic = 'force-dynamic'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://digitalh.net'

  let serviceUrls: MetadataRoute.Sitemap = []
  let blogUrls: MetadataRoute.Sitemap = []

  try {
    const { getPayload } = await import('payload')
    const configPromise = (await import('@/payload.config')).default
    const payload = await getPayload({ config: await configPromise })

    const { docs: services } = await payload.find({ collection: 'services', limit: 100 })
    const { docs: posts } = await payload.find({ collection: 'posts', limit: 100 })

    serviceUrls = services.map((s: any) => ({
      url: `${baseUrl}/services/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

    blogUrls = posts.map((p: any) => ({
      url: `${baseUrl}/blog/${p.slug}`,
      lastModified: new Date(p.date || new Date()),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  } catch {
    // DB not available at build time — return static URLs only
  }

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    ...serviceUrls,
    ...blogUrls,
  ]
}

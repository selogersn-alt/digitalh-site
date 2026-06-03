import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'DigitalH',
    short_name: 'DigitalH',
    description: 'Expertise IT & Marketing Digital de pointe.',
    start_url: '/',
    display: 'standalone',
    background_color: '#09090b',
    theme_color: '#FF5C00',
    icons: [
      {
        src: '/logo_h.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}

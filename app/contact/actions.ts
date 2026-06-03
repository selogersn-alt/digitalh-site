'use server'

import { getPayload } from 'payload'
import configPromise from '@/payload.config'

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const service = formData.get('service') as string
  const message = formData.get('message') as string

  if (!name || !email || !message) {
    return { success: false, error: 'Champs obligatoires manquants.' }
  }

  try {
    const payload = await getPayload({ config: await configPromise })
    
    await payload.create({
      collection: 'leads',
      data: {
        name,
        email,
        service: service || '',
        message,
        status: 'nouveau',
      }
    })

    return { success: true }
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return { success: false, error: 'Une erreur est survenue lors de l\'envoi du message.' }
  }
}

'use server'

import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import { revalidatePath } from 'next/cache'

export async function createPostAction(prevState: any, formData: FormData) {
  try {
    const payload = await getPayload({ config: await configPromise })

    const title = formData.get('title') as string
    const slug = formData.get('slug') as string
    const category = formData.get('category') as string
    const author = formData.get('author') as string
    const excerpt = formData.get('excerpt') as string
    const contentText = formData.get('content') as string
    const image = formData.get('image') as File

    if (!title || !slug || !contentText) {
      return { success: false, message: 'Le titre, le slug et le contenu sont requis.' }
    }

    let imageId = null

    if (image && image.size > 0) {
      const buffer = Buffer.from(await image.arrayBuffer())
      const media = await payload.create({
        collection: 'media',
        data: {
          alt: title,
        },
        file: {
          data: buffer,
          mimetype: image.type,
          name: image.name,
          size: image.size,
        },
      })
      imageId = media.id
    }

    // Convertir texte simple en structure Lexical (paragraphes)
    const lexicalContent = {
      root: {
        type: 'root',
        format: '',
        indent: 0,
        version: 1,
        children: contentText.split('\n').map(paragraph => ({
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
              text: paragraph,
              version: 1,
            },
          ],
        })).filter(p => p.children[0].text.trim() !== ''),
      },
    }

    await payload.create({
      collection: 'posts',
      data: {
        title,
        slug,
        category: (category as any) || 'Technologie',
        date: new Date().toISOString(),
        author: author || 'DigitalH Team',
        excerpt,
        content: lexicalContent as any,
        featuredImage: imageId,
      },
    })

    revalidatePath('/blog')
    
    return { success: true, message: 'Article créé avec succès !' }
  } catch (error: any) {
    console.error('Erreur lors de la création:', error)
    return { success: false, message: error.message || 'Une erreur est survenue.' }
  }
}

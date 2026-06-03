'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createPostAction } from './actions'
import { ArrowLeft, Image as ImageIcon, Loader2 } from 'lucide-react'
import Link from 'next/link'

export default function CreatePostPage() {
  const router = useRouter()
  const [pending, setPending] = useState(false)
  const [message, setMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setPending(true)
    setMessage('')
    
    const formData = new FormData(e.currentTarget)
    
    try {
      const res = await createPostAction(null, formData)
      setMessage(res.message)
      setIsSuccess(res.success)
      if (res.success) {
        setTimeout(() => {
          router.push('/blog')
        }, 2000)
      }
    } catch (err) {
      setMessage("Erreur inattendue.")
      setIsSuccess(false)
    } finally {
      setPending(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <div className="mb-8 flex items-center gap-4">
        <Link href="/dashboard" className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-3xl font-bold">Créer un nouvel article</h1>
      </div>

      {message && (
        <div className={`p-4 mb-6 rounded-lg ${isSuccess ? 'bg-green-500/20 text-green-400 border border-green-500/50' : 'bg-red-500/20 text-red-400 border border-red-500/50'}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium text-gray-300">Titre de l'article</label>
            <input type="text" id="title" name="title" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white" placeholder="Mon super article" />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="slug" className="text-sm font-medium text-gray-300">Slug (URL)</label>
            <input type="text" id="slug" name="slug" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white" placeholder="mon-super-article" />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="category" className="text-sm font-medium text-gray-300">Catégorie</label>
            <select id="category" name="category" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white appearance-none">
              <option value="Technologie">Technologie</option>
              <option value="Marketing">Marketing</option>
              <option value="Design">Design</option>
              <option value="Business">Business</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="author" className="text-sm font-medium text-gray-300">Auteur</label>
            <input type="text" id="author" name="author" defaultValue="DigitalH Team" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white" />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="excerpt" className="text-sm font-medium text-gray-300">Extrait (Résumé)</label>
          <textarea id="excerpt" name="excerpt" rows={2} required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white resize-none" placeholder="Un bref résumé de l'article..."></textarea>
        </div>

        <div className="space-y-2">
          <label htmlFor="content" className="text-sm font-medium text-gray-300">Contenu (Texte brut, les sauts de ligne créent des paragraphes)</label>
          <textarea id="content" name="content" rows={10} required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white resize-none" placeholder="Écrivez votre article ici..."></textarea>
        </div>

        <div className="space-y-2">
          <label htmlFor="image" className="text-sm font-medium text-gray-300">Image de couverture</label>
          <div className="relative">
            <input type="file" id="image" name="image" accept="image/*" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/20 file:text-primary hover:file:bg-primary/30" />
            <ImageIcon className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={20} />
          </div>
        </div>

        <button type="submit" disabled={pending} className="w-full bg-primary hover:bg-primary/80 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
          {pending ? <Loader2 className="animate-spin" size={20} /> : 'Publier l\'article'}
        </button>
      </form>
    </div>
  )
}

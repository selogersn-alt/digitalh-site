'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import { services } from '@/data/services'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen pt-32 pb-20 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-[40%] h-[40%] bg-primary/10 blur-[150px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-secondary/10 blur-[150px] -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Info Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl font-black mb-8 leading-tight">
                Discutons de votre <span className="text-gradient">Projet</span>
              </h1>
              <p className="text-xl text-muted mb-12 leading-relaxed">
                Prêt à transformer votre vision en réalité ? Que ce soit pour une installation Starlink, une application mobile ou une stratégie SEO, notre équipe est là pour vous accompagner.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted mb-1">Email nous</p>
                    <p className="text-lg font-bold">contact@digitalh.net</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted mb-1">Appelez-nous</p>
                    <p className="text-lg font-bold">+228 90 98 00 53 / +221 77 857 89 79</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted mb-1">Localisation</p>
                    <p className="text-lg font-bold">Lomé, Togo / International</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="glass p-10 rounded-[40px] border border-white/10"
            >
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold ml-1">Nom Complet</label>
                        <input
                          type="text"
                          required
                          placeholder="Ex: Jean Dupont"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-primary transition-all outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold ml-1">Email</label>
                        <input
                          type="email"
                          required
                          placeholder="Ex: jean@email.com"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-primary transition-all outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold ml-1">Service Souhaité</label>
                      <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-primary transition-all outline-none appearance-none">
                        <option value="">Sélectionnez un service</option>
                        {services.map(s => (
                          <option key={s.slug} value={s.slug} className="bg-black">{s.title}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold ml-1">Votre Message</label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Dites-nous en plus sur vos besoins..."
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-primary transition-all outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 glow hover:scale-[1.02] transition-all"
                    >
                      Envoyer le message <Send size={20} />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="text-green-500" size={48} />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">Message Envoyé !</h3>
                    <p className="text-muted mb-8">
                      Merci de nous avoir contactés. Notre équipe vous répondra sous 24h ouvrées.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-8 py-3 bg-white/5 rounded-full hover:bg-white/10 transition-all"
                    >
                      Envoyer un autre message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  )
}

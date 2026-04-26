'use client'

import React from 'react'
import Sidebar from './components/Sidebar'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  // Simulation d'authentification pour la démo
  // Dans une vraie app, on vérifierait le cookie Payload ou un token JWT
  useEffect(() => {
    const checkAuth = async () => {
      // Pour l'instant, on laisse passer mais on prépare la logique
      // Si on voulait bloquer : if (!user) router.push('/admin/login')
      setIsLoading(false)
    }
    checkAuth()
  }, [router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black flex">
      <Sidebar />
      <main className="flex-grow p-10 mt-16 md:mt-0">
        {children}
      </main>
    </div>
  )
}

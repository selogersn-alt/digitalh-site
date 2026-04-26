'use client'

import { motion } from 'framer-motion'
import { FileText, Download, CheckCircle, Clock } from 'lucide-react'

const invoices = [
  { id: 'INV-2026-001', item: 'Installation Starlink (Acompte)', date: '12 Avril 2026', amount: '250,000 CFA', status: 'Payé' },
  { id: 'INV-2026-002', item: 'Maintenance SEO Mars', date: '01 Mars 2026', amount: '75,000 CFA', status: 'Payé' },
  { id: 'INV-2026-003', item: 'Pack Branding & Logo', date: '15 Février 2026', amount: '150,000 CFA', status: 'Payé' },
  { id: 'INV-2026-004', item: 'Abonnement IPTV Annuel', date: '10 Janvier 2026', amount: '45,000 CFA', status: 'Payé' },
]

export default function InvoicesPage() {
  return (
    <div className="space-y-8">
      <h3 className="text-3xl font-bold">Mes <span className="text-primary">Factures</span></h3>

      <div className="glass rounded-[40px] overflow-hidden border border-white/5">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-white/5 bg-white/5">
              <th className="p-8 font-bold text-sm uppercase tracking-wider">Référence</th>
              <th className="p-8 font-bold text-sm uppercase tracking-wider">Prestation</th>
              <th className="p-8 font-bold text-sm uppercase tracking-wider">Date</th>
              <th className="p-8 font-bold text-sm uppercase tracking-wider">Montant</th>
              <th className="p-8 font-bold text-sm uppercase tracking-wider">Statut</th>
              <th className="p-8 font-bold text-sm uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv, i) => (
              <motion.tr
                key={inv.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
              >
                <td className="p-8 font-mono text-primary font-bold">{inv.id}</td>
                <td className="p-8 font-medium">{inv.item}</td>
                <td className="p-8 text-muted">{inv.date}</td>
                <td className="p-8 font-bold">{inv.amount}</td>
                <td className="p-8">
                  <span className="flex items-center gap-2 text-green-500 text-sm font-bold">
                    <CheckCircle size={16} /> {inv.status}
                  </span>
                </td>
                <td className="p-8">
                  <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-primary hover:text-white rounded-xl transition-all text-sm font-bold">
                    <Download size={16} /> PDF
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

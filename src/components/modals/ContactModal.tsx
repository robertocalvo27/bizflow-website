"use client"

import React, { useState } from 'react'
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Send, MessageSquare, Sparkles, ArrowRight } from 'lucide-react'

const industries = [
  { id: 'manufactura', name: 'Manufactura', icon: '🏭' },
  { id: 'mineria', name: 'Minería', icon: '⛏️' },
  { id: 'farmaceutica', name: 'Farmacéutica', icon: '💊' },
  { id: 'alimentos', name: 'Alimentos y Bebidas', icon: '🍽️' },
]

const countries = [
  { id: 'pe', name: 'Perú 🇵🇪' },
  { id: 'mx', name: 'México 🇲🇽' },
  { id: 'co', name: 'Colombia 🇨🇴' },
  { id: 'cr', name: 'Costa Rica 🇨🇷' },
  { id: 'other', name: 'Otro país 🌎' },
]

const ContactModal = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [industry, setIndustry] = useState('')
  const [message, setMessage] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [country, setCountry] = useState('')
  const [step, setStep] = useState(1)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el mensaje
    console.log({ name, email, company, industry, message, whatsapp, country })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="bg-white hover:bg-bizflow-gray-100 text-bizflow-blue-700 font-medium">
          <Send className="mr-2 h-4 w-4" />
          Enviar mensaje
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-gradient-to-br from-bizflow-blue-900 to-bizflow-purple-900 text-white p-8">
        <DialogTitle className="text-2xl font-bold flex items-center gap-2 mb-6">
          <MessageSquare className="h-6 w-6" />
          Cuéntanos sobre tu proyecto
        </DialogTitle>

        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 && (
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-bizflow-purple-400" />
                  ¿En qué industria te encuentras?
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {industries.map((ind) => (
                    <button
                      key={ind.id}
                      type="button"
                      onClick={() => setIndustry(ind.id)}
                      className={`flex items-center gap-2 p-4 rounded-lg border transition-all ${
                        industry === ind.id
                          ? 'border-bizflow-purple-500 bg-bizflow-purple-500/20'
                          : 'border-bizflow-purple-500/30 hover:border-bizflow-purple-500/50'
                      }`}
                    >
                      <span className="text-2xl">{ind.icon}</span>
                      <span>{ind.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Tu nombre</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/10 border border-bizflow-purple-500/30 rounded-lg p-3 text-white placeholder-bizflow-blue-300"
                    placeholder="Nombre completo"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email corporativo</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/10 border border-bizflow-purple-500/30 rounded-lg p-3 text-white placeholder-bizflow-blue-300"
                    placeholder="tu@empresa.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">WhatsApp</label>
                  <input
                    type="tel"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full bg-white/10 border border-bizflow-purple-500/30 rounded-lg p-3 text-white placeholder-bizflow-blue-300"
                    placeholder="+51 999 999 999"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">País</label>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full bg-white/10 border border-bizflow-purple-500/30 rounded-lg p-3 text-white"
                    required
                  >
                    <option value="">Selecciona tu país</option>
                    {countries.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Empresa</label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full bg-white/10 border border-bizflow-purple-500/30 rounded-lg p-3 text-white placeholder-bizflow-blue-300"
                    placeholder="Nombre de tu empresa"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <Button
                  type="button"
                  onClick={() => setStep(2)}
                  className="bg-bizflow-purple-600 hover:bg-bizflow-purple-700"
                >
                  Siguiente
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-bizflow-purple-400" />
                  Cuéntanos sobre tu desafío digital
                </h3>
                <p className="text-sm text-bizflow-blue-200 mb-4">
                  Por ejemplo: "Necesitamos digitalizar nuestro proceso de control de calidad. Actualmente usamos Excel y papel, lo que causa demoras y errores..."
                </p>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full h-40 bg-white/10 border border-bizflow-purple-500/30 rounded-lg p-4 text-white placeholder-bizflow-blue-300"
                  placeholder="Describe tu situación actual y los desafíos que enfrentas..."
                  required
                />
              </div>

              <div className="flex justify-between">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(1)}
                  className="border-bizflow-purple-400 text-bizflow-purple-400 hover:bg-bizflow-purple-400/10"
                >
                  Atrás
                </Button>
                <Button type="submit" className="bg-bizflow-purple-600 hover:bg-bizflow-purple-700">
                  <Send className="mr-2 h-4 w-4" />
                  Enviar mensaje
                </Button>
              </div>
            </div>
          )}
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default ContactModal 
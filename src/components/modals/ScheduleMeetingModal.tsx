"use client"

import React, { useState } from 'react'
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { MessageSquare, Calendar, Sparkles, ArrowRight } from 'lucide-react'

const platforms = [
  { id: 'meet', name: 'Google Meet', icon: '🎯' },
  { id: 'teams', name: 'Microsoft Teams', icon: '👥' },
  { id: 'zoom', name: 'Zoom', icon: '🎥' },
  { id: 'other', name: 'Otra plataforma', icon: '🌐' },
]

const timeSlots = [
  '09:00', '10:00', '11:00', '14:00', '15:00', '16:00'
]

const countries = [
  { id: 'pe', name: 'Perú 🇵🇪' },
  { id: 'mx', name: 'México 🇲🇽' },
  { id: 'co', name: 'Colombia 🇨🇴' },
  { id: 'cr', name: 'Costa Rica 🇨🇷' },
  { id: 'other', name: 'Otro país 🌎' },
]

interface ScheduleMeetingModalProps {
  children?: React.ReactNode
}

const ScheduleMeetingModal = ({ children }: ScheduleMeetingModalProps) => {
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [selectedPlatform, setSelectedPlatform] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [country, setCountry] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para procesar la reunión
    console.log({ selectedDate, selectedTime, selectedPlatform, name, email, company, whatsapp, country })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children || (
          <Button size="lg" className="bg-bizflow-purple-600 hover:bg-bizflow-purple-700 text-white font-medium">
            <MessageSquare className="mr-2 h-4 w-4" />
            Agendar llamada
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-gradient-to-br from-bizflow-blue-900 to-bizflow-purple-900 text-white p-8">
        <DialogTitle className="text-2xl font-bold flex items-center gap-2 mb-6">
          <Calendar className="h-6 w-6" />
          Agenda una reunión con nuestro equipo
        </DialogTitle>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 && (
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-bizflow-purple-400" />
                  Cuéntanos sobre ti
                </h3>
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
                  Elige el momento que prefieras
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Fecha preferida</label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full bg-white/10 border border-bizflow-purple-500/30 rounded-lg p-3 text-white placeholder-bizflow-blue-300"
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Hora preferida</label>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full bg-white/10 border border-bizflow-purple-500/30 rounded-lg p-3 text-white"
                      required
                    >
                      <option value="">Selecciona una hora</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Plataforma preferida</label>
                    <div className="grid grid-cols-2 gap-3">
                      {platforms.map((platform) => (
                        <button
                          key={platform.id}
                          type="button"
                          onClick={() => setSelectedPlatform(platform.id)}
                          className={`flex items-center gap-2 p-3 rounded-lg border transition-all ${
                            selectedPlatform === platform.id
                              ? 'border-bizflow-purple-500 bg-bizflow-purple-500/20'
                              : 'border-bizflow-purple-500/30 hover:border-bizflow-purple-500/50'
                          }`}
                        >
                          <span className="text-xl">{platform.icon}</span>
                          <span className="text-sm">{platform.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
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
                  <Calendar className="mr-2 h-4 w-4" />
                  Agendar reunión
                </Button>
              </div>
            </div>
          )}
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default ScheduleMeetingModal 
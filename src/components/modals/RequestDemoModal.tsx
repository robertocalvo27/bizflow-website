"use client"

import React, { useState, useRef, useEffect } from 'react'
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { MessageSquare, Sparkles, ArrowRight, Send, Bot, User, Calendar } from 'lucide-react'

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
  { id: 'us', name: 'Estados Unidos 🇺🇸' },
  { id: 'ca', name: 'Canadá 🇨🇦' },
  { id: 'other', name: 'Otro país 🌎' },
]

interface Message {
  role: 'assistant' | 'user'
  content: string
}

const timeSlots = [
  '09:00', '10:00', '11:00', '14:00', '15:00', '16:00'
]

const platforms = [
  { id: 'meet', name: 'Google Meet', icon: '🎯' },
  { id: 'teams', name: 'Microsoft Teams', icon: '👥' },
  { id: 'zoom', name: 'Zoom', icon: '🎥' },
]

const RequestDemoModal = () => {
  const [step, setStep] = useState(1)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [industry, setIndustry] = useState('')
  const [position, setPosition] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [country, setCountry] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: '¡Hola! Soy el asistente de Bizflow. Me gustaría conocer más sobre tu desafío digital para poder recomendarte la mejor solución. ¿Podrías contarme sobre los retos que enfrentas en tu operación industrial?'
    }
  ])
  const [currentMessage, setCurrentMessage] = useState('')
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [selectedPlatform, setSelectedPlatform] = useState('')
  const [isConfirmed, setIsConfirmed] = useState(false)

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages])

  const simulateAIResponse = async (userMessage: string) => {
    // Aquí se integraría la llamada real a la API de IA
    const responses = {
      initial: "Entiendo tu situación. Basado en lo que me cuentas, creo que podríamos ayudarte a optimizar estos procesos. ¿Te gustaría que te muestre cómo Bizflow podría resolver estos desafíos en una demo personalizada?",
      followUp: "¡Excelente! Para preparar una demo que se ajuste a tus necesidades específicas, necesitaré algunos datos. ¿Te parece si continuamos con el registro?",
    }

    return new Promise<string>((resolve) => {
      setTimeout(() => {
        if (messages.length === 1) {
          resolve(responses.initial)
        } else {
          resolve(responses.followUp)
        }
      }, 1000)
    })
  }

  const handleSendMessage = async () => {
    if (!currentMessage.trim()) return

    const newMessages = [...messages, { role: 'user' as const, content: currentMessage }]
    setMessages(newMessages)
    setCurrentMessage('')

    const aiResponse = await simulateAIResponse(currentMessage)
    setMessages([...newMessages, { role: 'assistant' as const, content: aiResponse }])

    if (messages.length >= 2) {
      setTimeout(() => setStep(2), 1000)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(3)
  }

  const scheduleDemo = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para procesar la reunión
    console.log('Scheduling demo with data:', {
      name,
      email,
      company,
      industry,
      position,
      whatsapp,
      country,
      selectedDate,
      selectedTime,
      selectedPlatform,
      conversation: messages
    })
    setIsConfirmed(true)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="bg-bizflow-blue-700 hover:bg-bizflow-blue-800 text-white font-medium">
          <Sparkles className="mr-2 h-4 w-4" />
          Solicitar Demo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-white text-bizflow-gray-900 p-8">
        <DialogTitle className="text-2xl font-bold flex items-center gap-2 mb-6 text-bizflow-blue-900">
          {step === 1 ? (
            <>
              <Bot className="h-6 w-6 text-bizflow-blue-600" />
              Cuéntanos sobre tu desafío
            </>
          ) : step === 2 ? (
            <>
              <User className="h-6 w-6 text-bizflow-blue-600" />
              Completa tu información
            </>
          ) : (
            <>
              <Calendar className="h-6 w-6 text-bizflow-blue-600" />
              ¡Último paso!
            </>
          )}
        </DialogTitle>

        {step === 1 && (
          <div className="space-y-4">
            <div
              ref={chatContainerRef}
              className="h-[300px] overflow-y-auto space-y-4 bg-gray-50 rounded-lg p-4"
            >
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 ${
                    message.role === 'assistant' ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div
                    className={`p-3 rounded-lg max-w-[80%] ${
                      message.role === 'assistant'
                        ? 'bg-bizflow-blue-50 text-bizflow-gray-900'
                        : 'bg-bizflow-blue-600 text-white'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1 bg-gray-50 border border-gray-200 rounded-lg p-3 text-bizflow-gray-900 placeholder-gray-400"
                placeholder="Describe tu desafío..."
              />
              <Button
                type="button"
                onClick={handleSendMessage}
                className="bg-bizflow-blue-600 hover:bg-bizflow-blue-700"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-bizflow-blue-900">
                <Sparkles className="h-5 w-5 text-bizflow-blue-600" />
                Datos para personalizar tu demo
              </h3>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {industries.map((ind) => (
                  <button
                    key={ind.id}
                    type="button"
                    onClick={() => setIndustry(ind.id)}
                    className={`flex items-center gap-2 p-4 rounded-lg border transition-all ${
                      industry === ind.id
                        ? 'border-bizflow-blue-500 bg-bizflow-blue-500/20'
                        : 'border-bizflow-blue-500/30 hover:border-bizflow-blue-500/50'
                    }`}
                  >
                    <span className="text-2xl">{ind.icon}</span>
                    <span>{ind.name}</span>
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Tu nombre</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-bizflow-gray-900 placeholder-gray-400"
                      placeholder="Nombre completo"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Cargo</label>
                    <input
                      type="text"
                      value={position}
                      onChange={(e) => setPosition(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-bizflow-gray-900 placeholder-gray-400"
                      placeholder="Tu cargo en la empresa"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email corporativo</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-bizflow-gray-900 placeholder-gray-400"
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
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-bizflow-gray-900 placeholder-gray-400"
                    placeholder="+51 999 999 999"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">País</label>
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-bizflow-gray-900"
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
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-bizflow-gray-900 placeholder-gray-400"
                      placeholder="Nombre de tu empresa"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(1)}
                className="border-bizflow-blue-200 text-bizflow-blue-700 hover:bg-bizflow-blue-50"
              >
                Atrás
              </Button>
              <Button type="submit" className="bg-bizflow-blue-600 hover:bg-bizflow-blue-700 text-white">
                Continuar
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        )}

        {step === 3 && (
          <div className="space-y-6">
            {!isConfirmed ? (
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-bizflow-blue-100 rounded-full flex items-center justify-center">
                  <Sparkles className="h-8 w-8 text-bizflow-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center text-bizflow-blue-900">¡Excelente {name}!</h3>
                <p className="text-bizflow-gray-600 mb-6 text-center">
                  Hemos analizado tu caso y estamos listos para mostrarte cómo Bizflow puede ayudarte.
                  Selecciona el momento que mejor te convenga para la demo.
                </p>

                <form onSubmit={scheduleDemo} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-bizflow-gray-700">Fecha preferida</label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full bg-white border border-gray-200 rounded-lg p-3 text-bizflow-gray-900"
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-bizflow-gray-700">Hora preferida</label>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full bg-white border border-gray-200 rounded-lg p-3 text-bizflow-gray-900"
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
                    <label className="block text-sm font-medium mb-2 text-bizflow-gray-700">Plataforma preferida</label>
                    <div className="grid grid-cols-3 gap-3">
                      {platforms.map((platform) => (
                        <button
                          key={platform.id}
                          type="button"
                          onClick={() => setSelectedPlatform(platform.id)}
                          className={`flex items-center gap-2 p-3 rounded-lg border transition-all ${
                            selectedPlatform === platform.id
                              ? 'border-bizflow-blue-600 bg-bizflow-blue-50 text-bizflow-blue-700'
                              : 'border-gray-200 hover:border-bizflow-blue-200 text-bizflow-gray-700'
                          }`}
                        >
                          <span className="text-xl">{platform.icon}</span>
                          <span className="text-sm">{platform.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-bizflow-blue-600 hover:bg-bizflow-blue-700 text-white mt-4"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Confirmar Demo
                  </Button>
                </form>
              </div>
            ) : (
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-bizflow-blue-100 rounded-full flex items-center justify-center">
                  <MessageSquare className="h-8 w-8 text-bizflow-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center text-bizflow-blue-900">¡Demo Agendada!</h3>
                <p className="text-bizflow-gray-600 mb-6 text-center">
                  Hemos enviado la información de la reunión a tu correo electrónico. Por favor, revisa tu bandeja de entrada para encontrar los detalles de la invitación.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border border-bizflow-blue-100">
                    <h4 className="font-medium text-bizflow-blue-900 mb-2">Mientras tanto, te puede interesar:</h4>
                    <div className="space-y-3">
                      <a 
                        href="/casos-exito" 
                        className="flex items-center gap-2 text-bizflow-gray-700 hover:text-bizflow-blue-600 transition-colors"
                      >
                        <ArrowRight className="h-4 w-4" />
                        Descubre cómo otras empresas de {industry} están usando Bizflow
                      </a>
                      <a 
                        href="/blog" 
                        className="flex items-center gap-2 text-bizflow-gray-700 hover:text-bizflow-blue-600 transition-colors"
                      >
                        <ArrowRight className="h-4 w-4" />
                        Lee nuestros artículos sobre transformación digital industrial
                      </a>
                    </div>
                  </div>

                  <p className="text-sm text-bizflow-gray-600 text-center">
                    Nuestro equipo está listo para acompañarte en tu viaje de transformación digital.
                  </p>
                </div>
              </div>
            )}

            {!isConfirmed && (
              <div className="flex justify-start">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(2)}
                  className="border-bizflow-blue-200 text-bizflow-blue-700 hover:bg-bizflow-blue-50"
                >
                  Atrás
                </Button>
              </div>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default RequestDemoModal 
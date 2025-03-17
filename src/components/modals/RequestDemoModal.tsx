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

  const scheduleDemo = () => {
    // Aquí iría la lógica para redirigir al calendario o abrir el modal de agenda
    console.log('Scheduling demo with data:', {
      name,
      email,
      company,
      industry,
      position,
      whatsapp,
      country,
      conversation: messages
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="bg-bizflow-blue-700 hover:bg-bizflow-blue-800 text-white font-medium">
          <Sparkles className="mr-2 h-4 w-4" />
          Solicitar Demo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-gradient-to-br from-bizflow-blue-900 to-bizflow-purple-900 text-white p-8">
        <DialogTitle className="text-2xl font-bold flex items-center gap-2 mb-6">
          {step === 1 ? (
            <>
              <Bot className="h-6 w-6" />
              Cuéntanos sobre tu desafío
            </>
          ) : step === 2 ? (
            <>
              <User className="h-6 w-6" />
              Completa tu información
            </>
          ) : (
            <>
              <Calendar className="h-6 w-6" />
              ¡Último paso!
            </>
          )}
        </DialogTitle>

        {step === 1 && (
          <div className="space-y-4">
            <div
              ref={chatContainerRef}
              className="h-[300px] overflow-y-auto space-y-4 bg-white/5 backdrop-blur-sm rounded-lg p-4"
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
                        ? 'bg-bizflow-purple-500/20 text-white'
                        : 'bg-white/10 text-white'
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
                className="flex-1 bg-white/10 border border-bizflow-purple-500/30 rounded-lg p-3 text-white placeholder-bizflow-blue-300"
                placeholder="Describe tu desafío..."
              />
              <Button
                type="button"
                onClick={handleSendMessage}
                className="bg-bizflow-purple-600 hover:bg-bizflow-purple-700"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-bizflow-purple-400" />
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
                        ? 'border-bizflow-purple-500 bg-bizflow-purple-500/20'
                        : 'border-bizflow-purple-500/30 hover:border-bizflow-purple-500/50'
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
                      className="w-full bg-white/10 border border-bizflow-purple-500/30 rounded-lg p-3 text-white placeholder-bizflow-blue-300"
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
                      className="w-full bg-white/10 border border-bizflow-purple-500/30 rounded-lg p-3 text-white placeholder-bizflow-blue-300"
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

                <div className="grid grid-cols-2 gap-4">
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
                Continuar
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-bizflow-purple-500/20 rounded-full flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-bizflow-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">¡Excelente {name}!</h3>
              <p className="text-bizflow-blue-200 mb-6">
                Hemos analizado tu caso y estamos listos para mostrarte cómo Bizflow puede ayudarte.
                El siguiente paso es agendar una demo personalizada con uno de nuestros expertos.
              </p>
              <Button
                onClick={scheduleDemo}
                className="bg-bizflow-purple-600 hover:bg-bizflow-purple-700 w-full"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Agendar Demo Personalizada
              </Button>
            </div>

            <div className="flex justify-start">
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(2)}
                className="border-bizflow-purple-400 text-bizflow-purple-400 hover:bg-bizflow-purple-400/10"
              >
                Atrás
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default RequestDemoModal 
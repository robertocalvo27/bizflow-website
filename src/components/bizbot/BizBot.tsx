'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send, Minimize2, Maximize2 } from 'lucide-react'
import BizBotMessage from './BizBotMessage'
import BizBotTypingIndicator from './BizBotTypingIndicator'

interface Message {
  id: string
  type: 'bot' | 'user'
  content: string
  timestamp: Date
}

const initialMessage: Message = {
  id: '1',
  type: 'bot',
  content: '¡Hola! Soy BizBot, tu asistente virtual de Bizflow. Estoy aquí para ayudarte a encontrar las mejores soluciones de software industrial para tu empresa. ¿En qué puedo ayudarte hoy?',
  timestamp: new Date()
}

const suggestedQuestions = [
  '¿Qué soluciones ofrecen para manufactura?',
  '¿Cómo puedo mejorar la eficiencia de mis operaciones?',
  '¿Cuánto tiempo toma implementar una solución?',
  '¿Tienen experiencia en mi industria?'
]

const BizBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([initialMessage])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue.trim(),
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simular respuesta del bot (aquí se integraría la IA real)
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: generateBotResponse(userMessage.content),
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const generateBotResponse = (userInput: string): string => {
    // Aquí se implementaría la lógica real de IA
    // Por ahora, usamos respuestas predefinidas basadas en palabras clave
    if (userInput.toLowerCase().includes('manufactura')) {
      return 'Nuestras soluciones de manufactura incluyen sistemas MES, control de calidad, trazabilidad y optimización de producción. ¿Te gustaría conocer más sobre alguna área específica?'
    }
    if (userInput.toLowerCase().includes('eficiencia')) {
      return 'Podemos ayudarte a mejorar la eficiencia operativa mediante automatización, análisis de datos en tiempo real y optimización de procesos. ¿En qué área específica buscas mejorar la eficiencia?'
    }
    if (userInput.toLowerCase().includes('tiempo') || userInput.toLowerCase().includes('implementar')) {
      return 'La implementación típica toma entre 4-12 semanas, dependiendo de la complejidad del proyecto. Nuestro enfoque ágil nos permite entregar valor de forma incremental. ¿Te gustaría conocer más sobre nuestro proceso de implementación?'
    }
    return 'Entiendo tu consulta. Para poder ayudarte mejor, ¿podrías proporcionarme más detalles sobre tu industria y necesidades específicas?'
  }

  return (
    <>
      {/* Botón flotante del chat */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-bizflow-purple-600 text-white shadow-lg flex items-center justify-center"
        >
          <MessageSquare size={24} />
        </motion.button>
      )}

      {/* Ventana del chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className={`fixed right-6 bottom-6 w-96 bg-white rounded-lg shadow-xl overflow-hidden ${
              isMinimized ? 'h-14' : 'h-[600px]'
            }`}
          >
            {/* Header */}
            <div className="bg-bizflow-blue-900 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-bizflow-purple-500 flex items-center justify-center">
                  <MessageSquare size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-medium">BizBot</h3>
                  <p className="text-bizflow-gray-300 text-xs">Asistente Virtual</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="text-white hover:text-bizflow-purple-400 transition-colors"
                >
                  {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-bizflow-purple-400 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Contenido del chat */}
            {!isMinimized && (
              <>
                <div className="flex-1 p-4 h-[460px] overflow-y-auto">
                  {messages.map(message => (
                    <BizBotMessage key={message.id} message={message} />
                  ))}
                  {isTyping && <BizBotTypingIndicator />}
                </div>

                {/* Sugerencias */}
                {messages.length === 1 && (
                  <div className="px-4 py-2 border-t border-gray-100">
                    <p className="text-sm text-gray-500 mb-2">Preguntas sugeridas:</p>
                    <div className="flex flex-wrap gap-2">
                      {suggestedQuestions.map((question, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setInputValue(question)
                            handleSendMessage()
                          }}
                          className="text-sm bg-bizflow-purple-50 text-bizflow-purple-700 px-3 py-1 rounded-full hover:bg-bizflow-purple-100 transition-colors"
                        >
                          {question}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input */}
                <div className="border-t border-gray-200 p-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="Escribe tu mensaje..."
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-bizflow-purple-500"
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim()}
                      className="px-4 py-2 bg-bizflow-purple-600 text-white rounded-lg hover:bg-bizflow-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send size={18} />
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default BizBot 
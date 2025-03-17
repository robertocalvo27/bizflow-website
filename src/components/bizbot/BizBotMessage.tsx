'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface Message {
  id: string
  type: 'bot' | 'user'
  content: string
  timestamp: Date
}

interface BizBotMessageProps {
  message: Message
}

const BizBotMessage: React.FC<BizBotMessageProps> = ({ message }) => {
  const isBot = message.type === 'bot'

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}
    >
      <div
        className={`max-w-[80%] rounded-lg p-3 ${
          isBot
            ? 'bg-bizflow-blue-50 text-bizflow-blue-900'
            : 'bg-bizflow-purple-600 text-white'
        }`}
      >
        <p className="text-sm">{message.content}</p>
        <p className="text-xs mt-1 opacity-70">
          {new Date(message.timestamp).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
          })}
        </p>
      </div>
    </motion.div>
  )
}

export default BizBotMessage 

<<<<<<< HEAD
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MessageSquare } from 'lucide-react'

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
=======
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

interface Message {
  id: string;
  type: 'bot' | 'user';
  content: string;
  timestamp: Date;
}

interface BizBotMessageProps {
  message: Message;
}

const BizBotMessage: React.FC<BizBotMessageProps> = ({ message }) => {
  const isBot = message.type === 'bot';
>>>>>>> df402362e5c128394b3403b9b649bc15aba8e374

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex items-start space-x-2 mb-4 ${isBot ? '' : 'flex-row-reverse space-x-reverse'}`}
    >
      {/* Avatar */}
      {isBot ? (
        <div className="w-8 h-8 rounded-full bg-bizflow-purple-500 flex items-center justify-center flex-shrink-0">
          <MessageSquare size={16} className="text-white" />
        </div>
      ) : (
        <div className="w-8 h-8 rounded-full bg-bizflow-blue-600 flex items-center justify-center flex-shrink-0">
          <span className="text-white text-sm font-medium">TÚ</span>
        </div>
      )}

      {/* Mensaje */}
      <div
        className={`max-w-[75%] rounded-lg px-4 py-2 ${
          isBot
            ? 'bg-bizflow-purple-50 text-bizflow-purple-900'
            : 'bg-bizflow-blue-50 text-bizflow-blue-900'
        }`}
      >
        <p className="text-sm">{message.content}</p>
        <span className="text-xs text-gray-500 mt-1 block">
          {new Date(message.timestamp).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
          })}
        </span>
      </div>
    </motion.div>
<<<<<<< HEAD
  )
}

export default BizBotMessage 
=======
  );
};

export default BizBotMessage; 
>>>>>>> df402362e5c128394b3403b9b649bc15aba8e374

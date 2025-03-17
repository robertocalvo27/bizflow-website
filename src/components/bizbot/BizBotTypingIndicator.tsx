'use client'

import React from 'react'
import { motion } from 'framer-motion'

const BizBotTypingIndicator = () => {
  return (
    <div className="flex items-center space-x-2 mb-4">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-bizflow-blue-50 rounded-lg p-3"
      >
        <div className="flex space-x-1">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 1, 0.4]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: 0
            }}
            className="w-2 h-2 bg-bizflow-blue-600 rounded-full"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 1, 0.4]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: 0.2
            }}
            className="w-2 h-2 bg-bizflow-blue-600 rounded-full"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 1, 0.4]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: 0.4
            }}
            className="w-2 h-2 bg-bizflow-blue-600 rounded-full"
          />
        </div>
      </motion.div>
    </div>
  )
}

export default BizBotTypingIndicator 

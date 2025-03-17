<<<<<<< HEAD
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MessageSquare } from 'lucide-react'
=======
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
>>>>>>> df402362e5c128394b3403b9b649bc15aba8e374

const BizBotTypingIndicator = () => {
  return (
    <div className="flex items-start space-x-2 mb-4">
      <div className="w-8 h-8 rounded-full bg-bizflow-purple-500 flex items-center justify-center flex-shrink-0">
        <MessageSquare size={16} className="text-white" />
      </div>
      <div className="bg-bizflow-purple-50 rounded-lg px-4 py-3">
        <div className="flex space-x-1">
          {[0, 1, 2].map((dot) => (
            <motion.div
              key={dot}
              className="w-2 h-2 bg-bizflow-purple-400 rounded-full"
              animate={{
                y: ['0%', '-50%', '0%']
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: dot * 0.2,
                ease: 'easeInOut'
              }}
            />
          ))}
        </div>
      </div>
    </div>
<<<<<<< HEAD
  )
}

export default BizBotTypingIndicator 
=======
  );
};

export default BizBotTypingIndicator; 
>>>>>>> df402362e5c128394b3403b9b649bc15aba8e374

'use client'

import React from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useCookieConsent } from '@/hooks/useCookieConsent'

export const CookieBanner = () => {
  const { consent, acceptCookies, rejectCookies } = useCookieConsent()

  // No mostrar el banner si ya hay una decisión
  if (consent !== null) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50"
      >
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-gray-600">
              Utilizamos cookies para mejorar tu experiencia. Al continuar navegando, aceptas nuestra{' '}
              <Link href="/politica-cookies" className="text-bizflow-purple-600 hover:text-bizflow-purple-700">
                política de cookies
              </Link>
              .
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={rejectCookies}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
            >
              Rechazar
            </button>
            <button
              onClick={acceptCookies}
              className="px-4 py-2 text-sm bg-bizflow-purple-600 text-white rounded-lg hover:bg-bizflow-purple-700 transition-colors"
            >
              Aceptar
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
} 
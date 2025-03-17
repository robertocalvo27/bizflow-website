'use client'

import React from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useCookieConsent } from '../../hooks/useCookieConsent'

export const CookieBanner = () => {
  const { consent, acceptCookies, rejectCookies } = useCookieConsent()

  // No mostrar el banner si ya hay una decisión
  if (consent !== null) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg border-t border-gray-200"
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1 pr-4">
              <p className="text-bizflow-blue-900 text-base">
                Utilizamos cookies para mejorar su experiencia en nuestro sitio web. Al continuar navegando, acepta nuestra{' '}
                <Link href="/politica-cookies" className="text-bizflow-purple-600 hover:text-bizflow-purple-700 underline">
                  Política de Cookies
                </Link>.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 min-w-[200px]">
              <button
                onClick={rejectCookies}
                className="px-6 py-2 text-sm font-medium text-bizflow-blue-900 hover:text-bizflow-blue-700 transition-colors"
              >
                Rechazar
              </button>
              <button
                onClick={acceptCookies}
                className="px-6 py-2 text-sm font-medium text-white bg-bizflow-purple-600 hover:bg-bizflow-purple-700 rounded-md transition-colors"
              >
                Aceptar cookies
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
} 
'use client'

import { useState, useEffect } from 'react'

type CookieConsent = boolean | null

export const useCookieConsent = () => {
  const [consent, setConsent] = useState<CookieConsent>(null)

  useEffect(() => {
    // Recuperar el consentimiento guardado
    const savedConsent = localStorage.getItem('cookieConsent')
    if (savedConsent !== null) {
      setConsent(savedConsent === 'true')
    }
  }, [])

  const acceptCookies = () => {
    setConsent(true)
    localStorage.setItem('cookieConsent', 'true')
    // Aquí podrías inicializar servicios de analytics, etc.
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      })
    }
  }

  const rejectCookies = () => {
    setConsent(false)
    localStorage.setItem('cookieConsent', 'false')
    // Aquí podrías deshabilitar servicios de analytics, etc.
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied'
      })
    }
  }

  return {
    consent,
    acceptCookies,
    rejectCookies
  }
}

// Tipos para TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
} 
import type { Metadata } from 'next'
import CookiesPolicyContent from './components/CookiesPolicyContent'

export const metadata: Metadata = {
  title: 'Política de Cookies | Bizflow - Transformación Digital Industrial',
  description: 'Conoce cómo utilizamos las cookies para mejorar tu experiencia en Bizflow. Información detallada sobre tipos de cookies, su propósito y cómo controlarlas.',
}

export default function CookiesPolicy() {
  return (
    <main>
      <CookiesPolicyContent />
    </main>
  )
} 
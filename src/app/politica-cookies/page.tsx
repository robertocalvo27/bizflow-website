import type { Metadata } from 'next'
import CookiesPolicyContent from './components/CookiesPolicyContent'

export const metadata: Metadata = {
  title: 'Política de Cookies | Bizflow - Navegación Transparente',
  description: 'Conoce cómo Bizflow utiliza cookies para mejorar tu experiencia. Información detallada sobre tipos de cookies, su propósito y cómo controlarlas en tu navegador.'
}

export default function CookiesPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <CookiesPolicyContent />
    </main>
  )
} 
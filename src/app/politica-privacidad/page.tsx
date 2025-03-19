import type { Metadata } from 'next'
import PrivacyPolicyContent from './components/PrivacyPolicyContent'

export const metadata: Metadata = {
  title: 'Política de Privacidad | Bizflow - Protegemos tus Datos',
  description: 'Conoce cómo Bizflow protege y gestiona tus datos personales. Nuestra política de privacidad detalla nuestro compromiso con la seguridad y transparencia en el manejo de tu información.'
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <PrivacyPolicyContent />
    </main>
  )
} 
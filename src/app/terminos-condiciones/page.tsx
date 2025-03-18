import type { Metadata } from 'next'
import TermsContent from './components/TermsContent'

export const metadata: Metadata = {
  title: 'Términos y Condiciones | Bizflow - Transformación Digital Industrial',
  description: 'Conoce los términos y condiciones que rigen el uso de los servicios de Bizflow. Información detallada sobre derechos, responsabilidades y acuerdos de servicio.',
}

export default function TermsAndConditions() {
  return (
    <main>
      <TermsContent />
    </main>
  )
} 
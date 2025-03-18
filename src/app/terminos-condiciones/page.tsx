import type { Metadata } from 'next'
import TermsContent from './components/TermsContent'

export const metadata: Metadata = {
  title: 'Términos y Condiciones | Bizflow - Marco Legal',
  description: 'Conoce los términos y condiciones que rigen el uso de los servicios de Bizflow. Información detallada sobre derechos, obligaciones y responsabilidades.'
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <TermsContent />
    </main>
  )
} 
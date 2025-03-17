import { Metadata } from 'next'
import ContactContent from './components/ContactContent'

export const metadata: Metadata = {
  title: 'Contacto | Bizflow - Presencia Internacional en Digitalización Industrial',
  description: 'Contáctanos en nuestras oficinas de Norteamérica, Centroamérica y Sudamérica. Expertos en transformación digital industrial con presencia internacional.',
}

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <ContactContent />
    </main>
  )
} 
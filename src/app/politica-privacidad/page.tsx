import { Metadata } from 'next'
import PrivacyPolicyContent from './components/PrivacyPolicyContent'

export const metadata: Metadata = {
  title: 'Política de Privacidad | Bizflow',
  description: 'Conozca nuestra política de privacidad y cómo protegemos sus datos personales en Bizflow.',
}

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PrivacyPolicyContent />
    </main>
  )
} 
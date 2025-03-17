import { Metadata } from 'next'
import CasosExitoContent from './components/CasosExitoContent'

export const metadata: Metadata = {
  title: 'Casos de Éxito | Bizflow - Transformación Digital Industrial',
  description: 'Descubre cómo empresas líderes en manufactura, minería y más han transformado sus operaciones con nuestras soluciones de software industrial.',
}

export default function CasosExitoPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <CasosExitoContent />
    </main>
  )
} 
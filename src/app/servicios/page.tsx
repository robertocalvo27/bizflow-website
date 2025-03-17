import { Metadata } from 'next'
import ServiciosContent from './components/ServiciosContent'

export const metadata: Metadata = {
  title: 'Servicios | BizFlow - Soluciones de Software Industrial',
  description: 'Descubra nuestras soluciones tecnológicas diseñadas para transformar sus operaciones industriales. Software personalizado, analítica avanzada y consultoría especializada.',
}

export default function ServiciosPage() {
  return <ServiciosContent />
} 
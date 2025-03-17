import { Metadata } from 'next'
import ServiciosPage from '@/components/servicios/ServiciosPage'

export const metadata: Metadata = {
  title: 'Servicios | Bizflow - Software Industrial para Operaciones Ágiles',
  description: 'Descubre nuestras soluciones de software industrial: desde aplicaciones operativas hasta analítica avanzada e integración de sistemas.',
}

export default function Page() {
  return <ServiciosPage />
} 
'use client'

import { useEffect } from 'react'
import { initErrorMonitoring } from '@/utils/errorMonitoring'

/**
 * Component that initializes error monitoring
 * Place this at the root of your application
 */
export function ErrorMonitoring() {
  useEffect(() => {
    // Initialize error monitoring on the client side
    initErrorMonitoring()
  }, [])

  // This component doesn't render anything
  return null
}

export default ErrorMonitoring

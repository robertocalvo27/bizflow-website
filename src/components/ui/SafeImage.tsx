'use client'

import React from 'react'
import Image, { ImageProps } from 'next/image'
import { validateImageProps, createValidatedImageProps, ValidatedImageProps } from '@/utils/imageValidator'

interface SafeImageProps extends Omit<ImageProps, 'crossOrigin' | 'alt'> {
  crossOrigin?: "anonymous" | "use-credentials"
  componentName?: string
  alt: string
}

/**
 * A wrapper around Next.js Image component that ensures all properties
 * needed to prevent hydration errors are present.
 *
 * Always sets crossOrigin="anonymous" by default to prevent common hydration errors.
 * Requires an alt prop for accessibility.
 */
const SafeImage: React.FC<SafeImageProps> = (props) => {
  const { componentName = 'Unknown', alt, ...imageProps } = props

  // Set default crossOrigin to anonymous if not provided
  const safeProps: ImageProps = {
    ...imageProps,
    crossOrigin: props.crossOrigin || 'anonymous',
    alt: alt
  }

  // In development, validate image props
  if (process.env.NODE_ENV !== 'production') {
    // This will log errors but not block rendering
    validateImageProps(safeProps, componentName)
  }

  return <Image {...safeProps} />
}

/**
 * Helper function to create safe image props with defaults
 */
export function useSafeImageProps(props: Partial<ValidatedImageProps>): ValidatedImageProps {
  return createValidatedImageProps(props)
}

export default SafeImage

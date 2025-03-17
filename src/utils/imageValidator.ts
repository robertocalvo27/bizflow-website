/**
 * Image Validator Utility
 *
 * Helper functions to ensure proper Image component usage across the app
 * to prevent hydration errors related to Next.js Image component.
 */

import { logError } from './errorMonitoring';
import { ImageProps } from 'next/image';

/**
 * Interface for validated image props to ensure all required props are present
 */
export interface ValidatedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  crossOrigin: "anonymous" | "use-credentials";
  sizes?: string;
  quality?: number;
  style?: React.CSSProperties;
}

/**
 * Check if an image has all required props for hydration safety
 * @param props - Image props to validate
 * @param componentName - Name of the component using the image (for error logs)
 * @returns Boolean indicating if the image props are valid
 */
export const validateImageProps = (props: Partial<ImageProps>, componentName: string): boolean => {
  // Required props for all images
  if (!props.src) {
    logError('image', `Missing 'src' prop in Image in ${componentName}`);
    return false;
  }

  if (!props.alt) {
    logError('image', `Missing 'alt' prop in Image in ${componentName}`);
    return false;
  }

  if (props.crossOrigin !== 'anonymous' && props.crossOrigin !== 'use-credentials') {
    logError('image', `Missing or invalid 'crossOrigin' prop in Image in ${componentName}`);
    return false;
  }

  // If not using fill mode, width and height are required
  if (!props.fill && (!props.width || !props.height)) {
    logError('image', `Image in ${componentName} needs either 'fill' or both 'width' and 'height' props`);
    return false;
  }

  return true;
};

/**
 * Create validated image props by setting defaults and ensuring required props
 * @param props - Partial image props
 * @returns Complete image props with required fields
 */
export const createValidatedImageProps = (props: Partial<ValidatedImageProps>): ValidatedImageProps => {
  // Ensure crossOrigin is set to anonymous by default
  return {
    ...props,
    alt: props.alt || 'Image',
    crossOrigin: props.crossOrigin || 'anonymous',
  } as ValidatedImageProps;
};

/**
 * Helper to check if an image URL is external
 * @param src - Image source URL
 * @returns Boolean indicating if the URL is external
 */
export const isExternalImage = (src: string): boolean => {
  try {
    // For relative paths or data URIs
    if (!src.startsWith('http')) return false;

    // Check if the URL is from the same domain
    const url = new URL(src);
    const hostname = window.location.hostname;

    return url.hostname !== hostname;
  } catch (e) {
    return false;
  }
};

/**
 * Hook usage example in comments:
 *
 * const imageProps = createValidatedImageProps({
 *   src: '/images/hero.jpg',
 *   alt: 'Hero image',
 *   width: 1200,
 *   height: 600,
 * });
 *
 * <Image {...imageProps} />
 */

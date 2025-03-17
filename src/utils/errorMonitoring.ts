/**
 * Utility for monitoring and reporting client-side errors
 * Especially focused on catching React hydration issues
 */

// Types of errors we want to monitor
export type ErrorType = 'hydration' | 'general' | 'api' | 'image';

// Custom error logger function
export const logError = (
  errorType: ErrorType,
  message: string,
  details?: unknown
): void => {
  // Only log in development for now
  if (process.env.NODE_ENV !== 'production') {
    console.group(`[Bizflow Error Monitor] - ${errorType.toUpperCase()}`);
    console.error(message);

    if (details) {
      console.error('Details:', details);
    }

    // Provide helpful suggestions for specific error types
    if (errorType === 'hydration') {
      console.info(
        '🔍 Possible hydration error fixes:\n' +
        '1. Check for missing crossOrigin="anonymous" on Image components\n' +
        '2. Ensure server and client markup match\n' +
        '3. Verify no Date/Math.random calls during render\n' +
        '4. Look for conditional rendering using typeof window !== "undefined"'
      );
    }

    if (errorType === 'image') {
      console.info(
        '🔍 Possible image error fixes:\n' +
        '1. Verify image path is correct\n' +
        '2. Check that image dimensions are properly set\n' +
        '3. Ensure crossOrigin is set to "anonymous" if needed\n' +
        '4. Add the domain to next.config.js if using external images'
      );
    }

    console.groupEnd();
  }

  // In production, you would send this to a monitoring service
  // like Sentry, LogRocket, or your own backend
  // if (process.env.NODE_ENV === 'production') {
  //   // Send to monitoring service
  //   // sentryClient.captureException(...);
  // }
};

// Detect React hydration errors
export const setupHydrationErrorDetection = (): void => {
  if (typeof window !== 'undefined') {
    // Listen for error events that might be hydration-related
    window.addEventListener('error', (event) => {
      const errorMessage = event.message || '';

      if (
        errorMessage.includes('hydration') ||
        errorMessage.includes('did not match') ||
        errorMessage.includes('expected server HTML')
      ) {
        logError('hydration', 'React hydration error detected', {
          message: errorMessage,
          stack: event.error?.stack,
          location: `${event.filename}:${event.lineno}:${event.colno}`
        });
      }
    });

    // Original console.error to preserve it
    const originalConsoleError = console.error;

    // Override console.error to detect hydration warnings
    console.error = (...args) => {
      // Call original first to keep normal behavior
      originalConsoleError(...args);

      // Check if this is a hydration warning
      const errorString = args.join(' ');
      if (
        typeof errorString === 'string' &&
        (
          errorString.includes('Warning: Text content did not match') ||
          errorString.includes('Warning: Expected server HTML') ||
          errorString.includes('Hydration failed because')
        )
      ) {
        logError('hydration', 'React hydration mismatch detected from console output', {
          consoleMessage: args
        });
      }
    };
  }
};

// Initialize error monitoring
export const initErrorMonitoring = (): void => {
  // Setup hydration error detection
  setupHydrationErrorDetection();

  // Log initialization
  if (process.env.NODE_ENV !== 'production') {
    console.info('[Bizflow Error Monitor] Initialized error monitoring');
  }
};

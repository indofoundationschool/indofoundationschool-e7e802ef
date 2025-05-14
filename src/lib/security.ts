
/**
 * Basic input validation utility functions
 */

/**
 * Validates an email address format
 * @param email - The email address to validate
 * @returns Boolean indicating if the email format is valid
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

/**
 * Validates a phone number format (basic validation)
 * @param phone - The phone number to validate
 * @returns Boolean indicating if the phone format is valid
 */
export function isValidPhone(phone: string): boolean {
  // Allow digits, spaces, dashes, plus, and parentheses
  const phoneRegex = /^[0-9+\s()-]{8,20}$/;
  return phoneRegex.test(phone);
}

/**
 * Sanitizes user input to prevent XSS attacks
 * @param input - The user input to sanitize
 * @returns Sanitized string
 */
export function sanitizeInput(input: string): string {
  // Basic sanitization: Replace potentially dangerous characters
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/`/g, '&#96;');
}

/**
 * Creates a basic rate limiter function
 * @param maxAttempts - Maximum number of attempts allowed
 * @param timeWindow - Time window in milliseconds
 * @returns Function that checks if the operation should be rate limited
 */
export function createRateLimiter(maxAttempts: number, timeWindow: number): () => boolean {
  const attempts: number[] = [];
  
  return function checkLimit(): boolean {
    const now = Date.now();
    
    // Remove attempts outside the time window
    const validAttempts = attempts.filter(time => now - time < timeWindow);
    attempts.length = 0;
    attempts.push(...validAttempts);
    
    // Add current attempt
    attempts.push(now);
    
    // Check if under the limit
    return attempts.length <= maxAttempts;
  };
}

/**
 * Generates a cryptographic nonce for CSRF protection
 * @returns Random string to be used as a nonce
 */
export function generateNonce(): string {
  // Create a simple random string using current timestamp and random values
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15) + 
         Date.now().toString(36);
}

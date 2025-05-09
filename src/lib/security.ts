
/**
 * Security utility functions for preventing common web vulnerabilities
 */

/**
 * Sanitizes user input to prevent XSS attacks
 * @param input - The user input string to sanitize
 * @returns A sanitized string
 */
export function sanitizeInput(input: string): string {
  if (!input) return '';
  
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/`/g, '&#96;')
    .replace(/\(/g, '&#40;')
    .replace(/\)/g, '&#41;');
}

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
 * Creates a nonce for CSRF protection
 * @returns A random string to be used as a nonce
 */
export function generateNonce(): string {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
}

/**
 * Rate limiting utility - tracks function calls within a time window
 * @returns A function that checks if the rate limit has been exceeded
 */
export function createRateLimiter(maxCalls: number, timeWindowMs: number) {
  const calls: number[] = [];
  
  return function checkRateLimit(): boolean {
    const now = Date.now();
    
    // Remove calls outside the time window
    while (calls.length > 0 && calls[0] < now - timeWindowMs) {
      calls.shift();
    }
    
    // Check if we've exceeded the rate limit
    if (calls.length >= maxCalls) {
      return false; // Rate limit exceeded
    }
    
    // Add this call to the list
    calls.push(now);
    return true; // Within rate limit
  };
}


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

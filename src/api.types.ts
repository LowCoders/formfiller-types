/**
 * Unified API Response Types
 * 
 * Standard response structure for all API endpoints.
 * Synchronized with backend apiResponse.ts utilities.
 */

/**
 * Standard API response interface
 */
export interface ApiResponse<T = any> {
  /** Always present - indicates success or failure */
  success: boolean;
  /** Response data - present on success */
  data?: T;
  /** Optional success/info message */
  message?: string;
  /** Error message - present on failure */
  error?: string;
  /** Detailed errors array (e.g., validation errors) */
  errors?: ApiValidationError[];
  /** Optional metadata (pagination, etc.) */
  meta?: Record<string, any>;
  /** ISO timestamp of response */
  timestamp: string;
}

/**
 * API validation error
 */
export interface ApiValidationError {
  /** Field name that has the error */
  field: string;
  /** Human-readable error message */
  message: string;
  /** The invalid value (optional) */
  value?: any;
}

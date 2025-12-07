import { FormRolePermissions } from './rbac.types';

/**
 * User role types
 */
export type UserRole = 'user' | 'admin' | 'form-admin';

/**
 * User preferences
 */
export interface UserPreferences {
  theme?: 'light' | 'dark';
  language?: string;
  showExamples?: boolean;  // Admin/form-admin: show Example type forms in lists (default: false)
}

/**
 * User model (domain)
 */
export interface User {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string;
  role?: UserRole;
  isActive?: boolean;
  requestedFormAdmin?: boolean;
  preferences?: UserPreferences;
  wildcardPermissions?: FormRolePermissions;
  hasAnthropicApiKey?: boolean;
  aiMaxTokens?: number;
}

/**
 * Update profile data
 */
export interface UpdateProfileData {
  name?: string;
  avatar?: string;
  preferences?: UserPreferences;
  anthropicApiKey?: string | null;  // null to clear the key
  aiMaxTokens?: number;  // User's preferred max tokens for AI generation (1000-30000)
}

/**
 * Form admin request
 */
export interface FormAdminRequest {
  id: string;
  name: string;
  email: string;
  requestedAt: Date;
  avatar?: string;
}


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
    showExamples?: boolean;
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
    anthropicApiKey?: string | null;
    aiMaxTokens?: number;
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
//# sourceMappingURL=user.types.d.ts.map
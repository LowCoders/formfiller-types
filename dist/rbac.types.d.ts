/**
 * Permission flags for form-level access control
 */
export interface FormRolePermissions {
    viewAllResults: boolean;
    viewOwnResults: boolean;
    createResults: boolean;
    editAllResults: boolean;
    editOwnResults: boolean;
    deleteAllResults: boolean;
    deleteOwnResults: boolean;
    createConfig: boolean;
    editConfig: boolean;
    deleteConfig: boolean;
    managePermissions: boolean;
    manageUsers: boolean;
    viewStats: boolean;
}
/**
 * Form role definition (domain model)
 * Used by both frontend and backend
 */
export interface FormRole {
    _id: string;
    id?: string;
    name: string;
    displayName: string;
    description?: string;
    isSystemRole: boolean;
    configId?: string;
    permissions: FormRolePermissions;
    createdBy?: string;
    isActive: boolean;
    sortOrder?: number;
}
/**
 * Form permission assignment (domain model)
 * Represents user's role on a specific form
 */
export interface FormPermission {
    _id: string;
    userId: string;
    userName: string;
    userEmail: string;
    userAvatar?: string;
    role: {
        id: string;
        name: string;
        displayName: string;
        permissions: FormRolePermissions;
    };
    grantedBy: string;
    grantedAt: Date;
    expiresAt?: Date;
    notes?: string;
    isOwner?: boolean;
}
/**
 * User permissions (aggregated view)
 */
export interface UserPermissions {
    role: string;
    displayName?: string;
    permissions: FormRolePermissions;
    grantedAt?: Date;
    expiresAt?: Date;
    isExpired?: boolean;
    isOwner: boolean;
    isAdmin: boolean;
}
/**
 * Config-level user permissions
 */
export interface ConfigUserPermissions {
    viewAllResults?: boolean;
    viewOwnResults?: boolean;
    createResults?: boolean;
    editAllResults?: boolean;
    editOwnResults?: boolean;
    deleteAllResults?: boolean;
    deleteOwnResults?: boolean;
    editConfig?: boolean;
    deleteConfig?: boolean;
    managePermissions?: boolean;
    manageUsers?: boolean;
    viewStats?: boolean;
    createConfig?: boolean;
}
//# sourceMappingURL=rbac.types.d.ts.map
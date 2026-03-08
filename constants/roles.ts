export enum ROLES {
  MANAGER = "manager",
  STORE_KEEPER = "store_keeper",
}

export enum PERMISSIONS {
  DASHBOARD = "dashboard",
  PRODUCT_VIEW = "product_view",
  PRODUCT_ADD = "product_add",
  PRODUCT_EDIT = "product_edit",
}

export const ROLE_PERMISSIONS = {
  [ROLES.MANAGER]: [
    PERMISSIONS.DASHBOARD,
    PERMISSIONS.PRODUCT_ADD,
    PERMISSIONS.PRODUCT_EDIT,
    PERMISSIONS.PRODUCT_VIEW,
  ],
  [ROLES.STORE_KEEPER]: [
    PERMISSIONS.PRODUCT_ADD,
    PERMISSIONS.PRODUCT_EDIT,
    PERMISSIONS.PRODUCT_VIEW,
  ],
};

export function hasPermission(role: ROLES, permission: PERMISSIONS) {
  return ROLE_PERMISSIONS[role]?.includes(permission);
}

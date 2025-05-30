// src/utils/permissions.js
export const isHost = (user) => user?.roles?.includes("host");
export const isAdmin = (user) => user?.roles?.includes("admin");
export const userHasPermissionToEditStorefront = (user, storefront) => {
  if (!user || !storefront) return false;

  // Example 1: The user is the owner
  if (storefront.ownerId === user.uid) return true;

  // Example 2: The user has a 'host' or 'admin' role
  const roles = user.roles || [];
  if (roles.includes("admin") || roles.includes("host")) return true;

  return false;
};

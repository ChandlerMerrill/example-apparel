import { firestoreAdmin } from "@/lib/firebase/firebase.admin";

/**
 * Fetches accessible supplier portals for a given account based on the
 * `accessibleSupplierPortals` array in their account document.
 *
 * @param {string} accountId - The ID of the requesting account.
 * @returns {Promise<Array<Object>>} Array of portal data objects.
 */
export async function getAccessibleSupplierPortals(accountId) {
  const accountRef = firestoreAdmin.collection("accounts").doc(accountId);
  const accountSnap = await accountRef.get();

  if (!accountSnap.exists) {
    throw new Error(`Account not found for ID: ${accountId}`);
  }

  const { accessibleSupplierPortals = [] } = accountSnap.data();

  if (
    !Array.isArray(accessibleSupplierPortals) ||
    accessibleSupplierPortals.length === 0
  ) {
    return [];
  }

  const portalFetches = accessibleSupplierPortals.map(
    async ({ supplierAccountId, portalId }) => {
      const portalRef = firestoreAdmin
        .collection("accounts")
        .doc(supplierAccountId)
        .collection("portals")
        .doc(portalId);

      const portalSnap = await portalRef.get();

      if (!portalSnap.exists) return null;

      return {
        id: portalSnap.id,
        supplierAccountId,
        ...portalSnap.data(),
      };
    }
  );

  const resolved = await Promise.all(portalFetches);

  return resolved.filter(Boolean); // Remove nulls if any portals weren't found
}

// lib/portals.js
import { firestoreAdmin } from "../firebase/firebase.admin";

const getPortalData = async (accountSlug, portalSlug) => {
  console.log("Fetching portal for slug:", portalSlug);
  if (!portalSlug) return null;

  try {
    const portalRef = firestoreAdmin
      .collection(`accounts/${accountSlug}/portals`)
      .doc(portalSlug); // FIXED
    const portalSnap = await portalRef.get();
    if (!portalSnap.exists) {
      return null;
    }

    return portalSnap.data();
  } catch (error) {
    console.error("Error fetching store data:", error);
    return null; // Better to return null here so UI handles gracefully
  }
};

export { getPortalData };

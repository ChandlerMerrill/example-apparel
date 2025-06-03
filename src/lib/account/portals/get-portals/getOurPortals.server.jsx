import { firestoreAdmin } from "@/lib/firebase/firebase.admin";

/**
 * Fetches all "our" portals from the given account's subcollection
 * @param {string} accountId
 * @returns {Promise<Array<Object>>}
 */
export async function getOurPortals(accountId) {
  const portalsRef = firestoreAdmin
    .collection("accounts")
    .doc(accountId)
    .collection("portals");

  const snapshot = await portalsRef.get();

  if (snapshot.empty) {
    return [];
  }

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

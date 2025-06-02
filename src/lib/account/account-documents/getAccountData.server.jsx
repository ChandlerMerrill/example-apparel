// lib/firebaseAdminHelpers.js (or any helper file you want)

import { firestoreAdmin } from "@/lib/firebase/firebase.admin";

export async function getAccountData(accountSlug) {
  const docRef = firestoreAdmin.collection("accounts").doc(accountSlug);
  const docSnap = await docRef.get();

  if (!docSnap.exists) {
    throw new Error("Account not found");
  }

  return docSnap.data();
}

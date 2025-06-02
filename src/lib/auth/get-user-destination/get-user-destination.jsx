// lib/getDestinationForUser.js
import { db } from "@/lib/firebase/firebase.client";
import { doc, getDoc } from "firebase/firestore";

export async function getDestinationForUser(uid) {
  console.log("getDestinationForUser called with uid:", uid);
  const snap = await getDoc(doc(db, "users", uid));

  if (!snap.exists()) {
    return "/onboarding";
  }

  const profile = snap.data();
  console.log("getDestinationForUser", profile);
  console.log("getDestinationForUser", profile.role);
  if (profile.accountSlug) return `/account/${profile.accountSlug}`;
  if (profile.dashboardPath) return profile.dashboardPath;

  if (profile.role === "dealer") return "/dealer";

  return "/";
}

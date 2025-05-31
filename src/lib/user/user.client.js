import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "@/lib/firebase/firebase.client";

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { email, displayName } = userAuth;
    const { nameFirst, nameLast } = additionalInformation;
    console.log("User Auth:", userAuth);
    console.log("Additional Information:", additionalInformation);
    const createdAt = serverTimestamp();

    let firstName = nameFirst || "";
    let lastName = nameLast || "";

    if (displayName && (!firstName || !lastName)) {
      const nameParts = displayName.split(" ");
      firstName = nameParts[0];
      lastName = nameParts.slice(1).join(" ") || "";
    }

    try {
      await setDoc(userDocRef, {
        nameFirst: firstName,
        nameLast: lastName,
        displayName: `${firstName.toLowerCase()} ${lastName.toLowerCase()}`,
        email,
        roles: ["user"],
        createdAt,
      });
    } catch (error) {
      console.error("Error creating user document:", error.message);
    }
  }

  return userSnapshot;
};

export const getUserInfo = async (userId) => {
  try {
    const userDocRef = doc(db, "users", userId);
    const userSnapshot = await getDoc(userDocRef);

    if (userSnapshot.exists()) {
      const userData = userSnapshot.data();

      return {
        ...userData,
        // createdAt: normalizeTimestamp(userData.createdAt), // Use the utility function
      };
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw new Error("Error fetching user data");
  }
};

export const updateUserInFirestore = async (userId, updateData) => {
  const userRef = doc(db, "users", userId);
  await updateDoc(userRef, updateData);
};

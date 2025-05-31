import { createAsyncThunk } from "@reduxjs/toolkit";
import { setCurrentUser } from "./user.reducer";
import {
  createAuthUserWithEmailAndPassword,
  getCurrentUser,
  onAuthStateChangedListener,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  signOutUser,
} from "@/lib/auth/auth.client";
import {
  createUserDocumentFromAuth,
  getUserInfo,
  updateUserInFirestore,
} from "@/lib/user/user.client";

// Sign-Up Thunk
export const signUp = createAsyncThunk(
  "user/signUp", // action type
  async ({ email, password, nameFirst, nameLast }, { rejectWithValue }) => {
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log("nameFirst:", nameFirst);
      console.log("nameLast:", nameLast);
      await createUserDocumentFromAuth(user, { nameFirst, nameLast });
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Sign-In with Google Thunk
export const signInWithGoogle = createAsyncThunk(
  "user/signInWithEmail",
  async (_, { rejectWithValue }) => {
    try {
      // This helper wraps Firebase's signInWithPopup(auth, googleProvider)
      // and resolves to { user }.
      const { user } = await signInWithGooglePopup();

      // (optional) create / merge Firestore user document
      // await createUserDocumentFromAuth(user);

      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// Sign-In with Email Thunk
export const signInWithEmail = createAsyncThunk(
  "user/signInWithEmail", // action type
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Sign-Out Thunk
export const signOut = createAsyncThunk(
  "user/signOut", // action type
  async (_, { rejectWithValue }) => {
    try {
      await signOutUser();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchUserInfo = createAsyncThunk(
  "user/fetchUserInfo",
  async ({ userId }, { rejectWithValue }) => {
    try {
      const userInfo = await getUserInfo(userId);
      return userInfo; // Return the fetched events
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch events.");
    }
  }
);

// Thunk to update user info
export const updateUserInfo = createAsyncThunk(
  "user/updateUserInfo",
  async ({ userId, updateData }, { rejectWithValue }) => {
    try {
      // Perform the update operation
      await updateUserInFirestore(userId, updateData);
      return { userId, updateData }; // Return the updated info
    } catch (error) {
      // Return the error message with rejectWithValue
      return rejectWithValue(error.message || "Failed to update user info.");
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  "user/fetchCurrentUser",
  async (_, { rejectWithValue }) => {
    try {
      const authUser = await getCurrentUser();
      if (!authUser) return null;

      return {
        uid: authUser.uid,
        email: authUser.email,
        accessToken: authUser.accessToken,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

import { createSlice } from "@reduxjs/toolkit";
import {
  signUp,
  signInWithEmail,
  signOut,
  checkUserSession,
  fetchUserInfo,
  updateUserInfo,
} from "./user.thunk"; // Import the thunks

const INITIAL_STATE = {
  currentUser: null,
  userInfo: [],
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    signOutSuccess: (state) => {
      state.currentUser = null;
    },
    signOutFailed: (state, action) => {
      state.error = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserInfo.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userInfo = action.payload;
      })
      .addCase(fetchUserInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Failed to fetch user Info.";
      })
      // Sign-Up handling
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Sign-In handling
      .addCase(signInWithEmail.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signInWithEmail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;
      })
      .addCase(signInWithEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Sign-Out handling
      .addCase(signOut.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signOut.fulfilled, (state) => {
        state.isLoading = false;
        state.currentUser = null;
      })
      .addCase(signOut.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateUserInfo.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateUserInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        const { updateData } = action.payload; // Extract the updateData from the payload

        // Loop over each field in updateData and update the corresponding field in state.userInfo
        Object.keys(updateData).forEach((key) => {
          if (state.userInfo.hasOwnProperty(key)) {
            state.userInfo[key] = updateData[key]; // Update only the fields that exist in userInfo
          }
        });
      })
      .addCase(updateUserInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload; // This will be the error you passed via rejectWithValue
      });
  },
});

// Export actions and reducer
export const { setCurrentUser, signOutSuccess, signOutFailed, setError } =
  userSlice.actions;
export default userSlice.reducer;

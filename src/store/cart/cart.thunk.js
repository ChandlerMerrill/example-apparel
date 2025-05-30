import { createAsyncThunk } from "@reduxjs/toolkit";
// import { saveCartToBackend } from "../../utils/api"; // your backend logic

export const syncCart = createAsyncThunk(
  "cart/syncCart",
  async (cartItems, thunkAPI) => {
    try {
      //   await saveCartToBackend(cartItems);
      //   return cartItems;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

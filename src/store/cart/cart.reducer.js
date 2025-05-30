import { createSlice } from "@reduxjs/toolkit";
import { syncCart } from "./cart.thunk";

// Utility functions
const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, itemToRemove) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === itemToRemove.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== itemToRemove.id);
  }
  return cartItems.map((item) =>
    item.id === itemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

const clearCartItem = (cartItems, itemToClear) =>
  cartItems.filter((item) => item.id !== itemToClear.id);

// Initial state
const initialState = {
  isCartOpen: false,
  cartItems: [],
};

// Slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setIsCartOpen: (state, action) => {
      state.isCartOpen = action.payload;
    },
    addItemToCart: (state, action) => {
      state.cartItems = addCartItem(state.cartItems, action.payload);
    },
    removeItemFromCart: (state, action) => {
      state.cartItems = removeCartItem(state.cartItems, action.payload);
    },
    clearItemFromCart: (state, action) => {
      state.cartItems = clearCartItem(state.cartItems, action.payload);
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(syncCart.pending, (state) => {
        // Optionally add loading state
      })
      .addCase(syncCart.fulfilled, (state, action) => {
        // Optionally update state
      })
      .addCase(syncCart.rejected, (state, action) => {
        // Handle error
      });
  },
});

// Export actions
export const {
  setIsCartOpen,
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
  clearCart,
} = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;

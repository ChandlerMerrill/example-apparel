import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/user.reducer"; // Import the default exported reducer
import paymentReducer from "./payment/payment.reducer";
import cartReducer from "./cart/cart.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  payment: paymentReducer,
  cart: cartReducer,
});

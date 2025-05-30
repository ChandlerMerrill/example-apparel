import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  paymentIntent: null,
  ephemeralKey: null,
  customerId: null,
  paymentStatus: "idle", // 'idle', 'initializing', 'ready', 'processing', 'success', 'failure'
  error: null,
  orderDetails: null, // Stores order details
  refundStatus: "idle", // 'idle', 'pending', 'processed', 'failed'
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    submitPaymentStart: (state) => {
      state.paymentStatus = "initializing"; // Payment setup in progress
      state.error = null;
    },
    initializePaymentSuccess: (state, action) => {
      state.paymentIntent = action.payload.paymentIntent;
      state.ephemeralKey = action.payload.ephemeralKey;
      state.customerId = action.payload.customerId;
      state.paymentStatus = "ready"; // Payment is ready to be processed
      state.error = null;
    },
    submitPaymentSuccess: (state, action) => {
      state.paymentStatus = "success"; // Actual payment success
      // state.orderDetails = action.payload; // Store any order-related data
      state.error = null;
    },
    submitPaymentFailure: (state, action) => {
      state.paymentStatus = "failure";
      state.error = action.payload;
    },
    fetchPaymentStatusStart: (state) => {
      state.paymentStatus = "processing"; // Fetching payment status
    },
    fetchPaymentStatusSuccess: (state, action) => {
      state.paymentStatus = action.payload.status;
    },
    fetchPaymentStatusFailure: (state, action) => {
      state.error = action.payload;
    },
    refundPaymentStart: (state) => {
      state.refundStatus = "pending";
    },
    refundPaymentSuccess: (state) => {
      state.refundStatus = "processed";
    },
    refundPaymentFailure: (state, action) => {
      state.refundStatus = "failed";
      state.error = action.payload;
    },
    resetPaymentState: () => initialState,
  },
});

export const {
  submitPaymentStart,
  initializePaymentSuccess,
  submitPaymentSuccess,
  submitPaymentFailure,
  fetchPaymentStatusStart,
  fetchPaymentStatusSuccess,
  fetchPaymentStatusFailure,
  refundPaymentStart,
  refundPaymentSuccess,
  refundPaymentFailure,
  resetPaymentState,
} = paymentSlice.actions;

export default paymentSlice.reducer;

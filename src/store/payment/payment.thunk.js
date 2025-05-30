import {
  submitPaymentStart,
  initializePaymentSuccess,
  submitPaymentFailure,
  fetchPaymentStatusStart,
  fetchPaymentStatusSuccess,
  fetchPaymentStatusFailure,
  refundPaymentStart,
  refundPaymentSuccess,
  refundPaymentFailure,
} from "./payment.reducer";
import { Alert } from "react-native";

const API_URL = "https://us-central1-gatherly-96826.cloudfunctions.net";

export const processPayment = (paymentData) => async (dispatch) => {
  try {
    dispatch(submitPaymentStart());

    const { amount, email, eventId } = paymentData;

    const response = await fetch(`${API_URL}/createPaymentSheet`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: amount * 100, // Convert to cents
        customerId: "", // Implement if needed
        eventId: eventId,
        email: email,
      }),
    });

    const data = await response.json();
    // console.log("your data: ", data);
    if (!data || !data.paymentIntent || !data.ephemeralKey || !data.customer) {
      throw new Error("Invalid response from backend");
    }

    dispatch(
      initializePaymentSuccess({
        paymentIntent: data.paymentIntent,
        ephemeralKey: data.ephemeralKey,
        customerId: data.customer,
      })
    );
  } catch (error) {
    console.error("Error fetching payment sheet params:", error);
    dispatch(submitPaymentFailure(error.message));
    Alert.alert("Error", "Failed to fetch payment details.");
  }
};

export const fetchPaymentStatus = (paymentIntentId) => async (dispatch) => {
  try {
    dispatch(fetchPaymentStatusStart());

    const response = await fetch(`${API_URL}/checkPaymentStatus`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ paymentIntentId }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    if (!data || !data.status) {
      throw new Error("Invalid response from backend");
    }

    dispatch(fetchPaymentStatusSuccess({ status: data.status }));
  } catch (error) {
    console.error("Error fetching payment status:", error);
    dispatch(fetchPaymentStatusFailure(error.message));
    Alert.alert("Error", "Failed to fetch payment status.");
  }
};

export const refundPayment = (paymentIntentId) => async (dispatch) => {
  try {
    dispatch(refundPaymentStart());

    const response = await fetch(`${API_URL}/refundPayment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ paymentIntentId }),
    });

    const data = await response.json();

    if (!data || !data.success) {
      throw new Error("Refund failed.");
    }

    dispatch(refundPaymentSuccess());
    Alert.alert("Success", "Refund processed successfully.");
  } catch (error) {
    console.error("Error processing refund:", error);
    dispatch(refundPaymentFailure(error.message));
    Alert.alert("Error", "Failed to process refund.");
  }
};

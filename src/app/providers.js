// src/app/providers.js
"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Elements } from "@stripe/react-stripe-js";
import { persistor, store } from "@/store/store";

// import { stripePromise } from "../utils/stripe/stripe.utils";

export function AppProviders({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <Elements stripe={stripePromise}>{children}</Elements> */}
        <div>{children}</div>
      </PersistGate>
    </Provider>
  );
}

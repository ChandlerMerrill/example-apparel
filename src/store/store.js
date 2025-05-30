import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage
import { rootReducer } from "./root-reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"], // optional: persist only the user slice, for example
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
  ...(process.env.NODE_ENV === "development" ? [logger] : []),
];

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // needed for redux-persist actions
    }).concat(middleWares),
});

export const persistor = persistStore(store);

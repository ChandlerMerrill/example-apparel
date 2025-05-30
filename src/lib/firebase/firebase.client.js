"use client";
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyAMRmFaICCR2-awQ0xgoCYrkD0zvJX5boo",
  authDomain: "esoteric-product-catalog.firebaseapp.com",
  projectId: "esoteric-product-catalog",
  storageBucket: "esoteric-product-catalog.firebasestorage.app",
  messagingSenderId: "151774419559",
  appId: "1:151774419559:web:204d0638fd2496778e92c2",
  measurementId: "G-6C5GT26W8T",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const functions = getFunctions(app);

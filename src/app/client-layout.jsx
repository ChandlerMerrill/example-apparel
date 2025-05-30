"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChangedListener } from "@/lib/auth/auth.client";
import { getUserInfo } from "@/lib/user/user.client";
import { setCurrentUser } from "@/store/user/user.reducer";

export default function ClientLayout({ children }) {
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (authUser) => {
      try {
        if (authUser) {
          const userInfo = await getUserInfo(authUser.uid);

          dispatch(
            setCurrentUser({
              uid: authUser.uid,
              email: authUser.email,
              ...userInfo,
            })
          );
        } else {
          dispatch(setCurrentUser(null));
        }
      } catch (error) {
        console.error("Error during auth state handling:", error);
        dispatch(setCurrentUser(null)); // fallback to safe state
      } finally {
        setAuthChecked(true);
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  if (!authChecked) return null; // Optional: Replace with <SplashScreen />
  return <div className="client-layout">{children}</div>;
}

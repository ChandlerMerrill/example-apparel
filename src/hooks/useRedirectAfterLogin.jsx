// src/hooks/useRedirectAfterLogin.jsx
"use client";

// import { useSearchParams, useRouter } from 'next/navigation'

// export function useRedirectAfterLogin(defaultPath = '/') {
//   const router = useRouter()
//   const searchParams = useSearchParams()

//   const redirectPath = searchParams.get('redirect') || defaultPath

//   function redirect() {
//     router.push(redirectPath)
//   }

//   return { redirectPath, redirect }
// }

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { getDestinationForUser } from "@/lib/auth/get-user-destination/get-user-destination";

export function useRedirectAfterLogin() {
  const router = useRouter();
  const searchParams = useSearchParams();

  console.log("useRedirectAfterLogin hook initialized"); // ADD THIS

  const redirect = useCallback(
    async (uid) => {
      const explicit = searchParams.get("redirect");
      console.log("Explicit redirect param:", explicit);

      if (explicit) {
        router.replace(explicit);
        return;
      }

      try {
        const destination = await getDestinationForUser(uid);
        console.log("redirecting to destination:", destination); // MAYBE NOT REACHED
        router.replace(destination);
      } catch (err) {
        console.error("Error fetching destination:", err);
      }
    },
    [router, searchParams]
  );

  return { redirect };
}

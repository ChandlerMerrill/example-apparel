// src/hooks/useRedirectAfterLogin.jsx
'use client'

import { useSearchParams, useRouter } from 'next/navigation'

export function useRedirectAfterLogin(defaultPath = '/') {
  const router = useRouter()
  const searchParams = useSearchParams()

  const redirectPath = searchParams.get('redirect') || defaultPath

  function redirect() {
    router.push(redirectPath)
  }

  return { redirectPath, redirect }
}

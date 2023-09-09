'use client'

import { LogOut } from '@/app/components/icons/LogOut'
import { signOut } from 'next-auth/react'

export function LogOutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="bg-ateneo-400 ml-10 rounded-default p-5"
    >
      <LogOut />
    </button>
  )
}

'use client'

import { Button } from '@/app/components/Button'
import { Logo } from '@/app/components/Logo'
import { Arrow } from '@/app/components/icons/Arrow'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export function RegisterMenu() {
  const router = useRouter()

  const handleBack = () => {
    router.back()
  }

  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between bg-opal px-10 py-8 md:relative md:h-screen md:w-24 md:flex-col md:px-0">
      <Link href="/">
        <Logo hideText viewBox="0 0 45 65" width={45} height={45} />
      </Link>
      <Button
        type="button"
        onClick={handleBack}
        className="h-11 w-11 rounded-2xl"
      >
        <Arrow />
      </Button>
    </nav>
  )
}

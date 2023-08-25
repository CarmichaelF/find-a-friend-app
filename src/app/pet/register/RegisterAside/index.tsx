'use client'

import { Button } from '@/app/components/Button'
import { Logo } from '@/app/components/Logo'
import { Arrow } from '@/app/components/icons/Arrow'
import { useRouter } from 'next/navigation'

export function RegisterAside() {
  const router = useRouter()

  const handleBack = () => {
    router.back()
  }

  return (
    <aside className="flex h-screen w-24 flex-col items-center justify-between bg-opal py-8">
      <Logo hideText viewBox="0 0 45 65" width={45} height={45} />
      <Button
        type="button"
        onClick={handleBack}
        className="h-11 w-11 rounded-2xl"
      >
        <Arrow />
      </Button>
    </aside>
  )
}

'use client'

import { usePathname, useSearchParams, useRouter } from 'next/navigation'

interface ChangeQueryParams {
  name: string
  value: string
}

export function useQuery() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const current = new URLSearchParams(Array.from(searchParams.entries()))

  const changeQuery = ({ name, value }: ChangeQueryParams) => {
    if (!value) {
      current.delete(name)
    } else {
      current.set(name, value)
    }

    if (value === 'default') {
      current.delete(name)
    }

    const search = current.toString()
    const query = search ? `?${search}` : ''
    router.push(`${pathname}${query}`)
  }

  return { changeQuery }
}

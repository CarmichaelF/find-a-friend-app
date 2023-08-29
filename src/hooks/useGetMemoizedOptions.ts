'use client'

import { useMemo } from 'react'

interface UseGetMemoizedOptionsProps<T> {
  allOptions: T
  filter: keyof T
}

export function useGetMemoizedOptions<G>({
  allOptions,
  filter,
}: UseGetMemoizedOptionsProps<G>) {
  const valuesToIterate = allOptions?.[filter] || []

  const options = Object.values(valuesToIterate).map((option) => ({
    label: option,
    value: option,
  }))

  const memoizedOptions = useMemo(() => options, [options])

  return memoizedOptions
}

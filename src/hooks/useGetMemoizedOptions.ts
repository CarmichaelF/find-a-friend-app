'use client'

import { useMemo } from 'react'

interface UseGetMemoizedOptionsProps<T> {
  allOptions: T
  filter: keyof T
}

export function useGetMemoizedOptions<T>({
  allOptions,
  filter,
}: UseGetMemoizedOptionsProps<T>) {
  const valuesToIterate = allOptions?.[filter] || []

  const options = Object.values(valuesToIterate).map((option) => ({
    label: option,
    value: option,
  }))

  const memoizedOptions = useMemo(() => options, [options])

  return memoizedOptions
}

'use client'

import { FiltersOptions } from '@/app/search-results/interfaces'
import { usePets } from '@/hooks/usePets'
import { useMemo } from 'react'

export function useGetMemoizedOptions(filter: FiltersOptions) {
  const { allFilters } = usePets()

  const valuesToIterate = allFilters?.[filter] || []

  const options = Object.values(valuesToIterate).map((option) => ({
    label: option,
    value: option,
  }))

  const memoizedOptions = useMemo(() => options, [options])

  return memoizedOptions
}

'use client'

import * as Select from '@/app/components/Select'
import { useGeoCity } from '@/hooks/useGeoCity'
import { useGetMemoizedOptions } from '@/hooks/useGetMemoizedOptions'
import { usePets } from '@/hooks/usePets'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ChangeEvent, useEffect } from 'react'

export function AsideFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { selectedFilters, fetchPets } = usePets()
  const { selectedCity } = useGeoCity()

  const onSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()))
    const { name } = event.target

    const value = event.target.value.trim()

    if (!value) {
      current.delete(name)
    } else {
      current.set(name, event.target.value)
    }

    if (value === 'default') {
      current.delete(name)
    }
    const search = current.toString()
    const query = search ? `?${search}` : ''
    router.push(`${pathname}${query}`)
  }

  const ageOptions = useGetMemoizedOptions('age')

  const energyOptions = useGetMemoizedOptions('energyLevel')

  const sizeOptions = useGetMemoizedOptions('petSize')

  const independenceOptions = useGetMemoizedOptions('independencyLevel')

  useEffect(() => {
    if (!selectedCity) return
    fetchPets(selectedCity.nome)
  }, [selectedFilters])

  return (
    <div className="flex flex-1 flex-col bg-opal pl-14 pr-10 pt-9">
      <span className="text-xl font-extrabold text-white">Filtros</span>
      <div className="my-7">
        <Select.Label htmlFor="age-filter">Idade</Select.Label>
        <Select.Root className="mt-3 w-full bg-opal-400">
          <Select.Control
            options={ageOptions}
            onChange={onSelect}
            name="age"
            value={selectedFilters?.get('age') || ''}
            id="age-filter"
          />
        </Select.Root>
      </div>
      <div className="my-7">
        <Select.Label htmlFor="energy-filter">Nível de Energia</Select.Label>
        <Select.Root className="mt-3 w-full bg-opal-400">
          <Select.Control
            options={energyOptions}
            onChange={onSelect}
            name="energyLevel"
            value={selectedFilters?.get('energyLevel') || ''}
            id="energy-filter"
          />
        </Select.Root>
      </div>
      <div className="my-7">
        <Select.Label htmlFor="size-filter">Porte do animal</Select.Label>
        <Select.Root className="mt-3 w-full bg-opal-400">
          <Select.Control
            options={sizeOptions}
            onChange={onSelect}
            name="petSize"
            value={selectedFilters?.get('petSize') || ''}
            id="size-filter"
          />
        </Select.Root>
      </div>
      <div className="my-7">
        <Select.Label htmlFor="independency-filter">
          Nível de independência
        </Select.Label>
        <Select.Root className="mt-3 w-full bg-opal-400">
          <Select.Control
            options={independenceOptions}
            onChange={onSelect}
            name="independencyLevel"
            value={selectedFilters?.get('independencyLevel') || ''}
            id="independency-filter"
          />
        </Select.Root>
      </div>
    </div>
  )
}

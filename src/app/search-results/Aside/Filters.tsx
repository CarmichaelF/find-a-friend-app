'use client'

import * as Select from '@/app/components/Select'
import { useGeoCity } from '@/hooks/useGeoCity'
import { usePets } from '@/hooks/usePets'
import { getSelectOptions } from '@/utils/get-select-options'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ChangeEvent, useEffect, useMemo } from 'react'

export function AsideFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { allFilters, selectedFilters, fetchPets } = usePets()
  const { selectedCity } = useGeoCity()

  const onSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()))

    const value = event.target.value.trim()
    const { name } = event.target

    if (!value) {
      current.delete(name)
    } else {
      current.set(name, event.target.value)
    }

    const search = current.toString()

    const query = search ? `?${search}` : ''

    router.push(`${pathname}${query}`)
  }

  const ageOptions = useMemo(
    () => getSelectOptions(allFilters, 'age'),
    [allFilters],
  )

  const energyOptions = useMemo(
    () => getSelectOptions(allFilters, 'energyLevel'),
    [allFilters],
  )

  const sizeOptions = useMemo(
    () => getSelectOptions(allFilters, 'petSize'),
    [allFilters],
  )

  const independenceOptions = useMemo(
    () => getSelectOptions(allFilters, 'independencyLevel'),
    [allFilters],
  )

  useEffect(() => {
    if (!selectedCity) return
    fetchPets(selectedCity.nome)
  }, [selectedFilters])

  return (
    <div className="flex flex-1 flex-col bg-opal pl-14 pr-10 pt-9">
      <span className="text-xl font-extrabold text-white">Filtros</span>
      <div className="my-7">
        <Select.Label>Idade</Select.Label>
        <Select.Root className="mt-3 w-full bg-opal-400">
          <Select.Control
            options={ageOptions}
            onChange={onSelect}
            name="age"
            value={selectedFilters?.get('age') || ''}
          />
        </Select.Root>
      </div>
      <div className="my-7">
        <Select.Label>Nível de Energia</Select.Label>
        <Select.Root className="mt-3 w-full bg-opal-400">
          <Select.Control
            options={energyOptions}
            onChange={onSelect}
            name="energyLevel"
            value={selectedFilters?.get('energyLevel') || ''}
          />
        </Select.Root>
      </div>
      <div className="my-7">
        <Select.Label>Porte do animal</Select.Label>
        <Select.Root className="mt-3 w-full bg-opal-400">
          <Select.Control
            options={sizeOptions}
            onChange={onSelect}
            name="petSize"
            value={selectedFilters?.get('petSize') || ''}
          />
        </Select.Root>
      </div>
      <div className="my-7">
        <Select.Label>Nível de independência</Select.Label>
        <Select.Root className="mt-3 w-full bg-opal-400">
          <Select.Control
            options={independenceOptions}
            onChange={onSelect}
            name="independencyLevel"
            value={selectedFilters?.get('independencyLevel') || ''}
          />
        </Select.Root>
      </div>
    </div>
  )
}

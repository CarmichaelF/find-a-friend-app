'use client'

import { usePets } from '@/hooks/usePets'
import * as Select from '../../components/Select'
import { useQuery } from '@/hooks/useQuery'
import { ChangeEvent } from 'react'
import { isObjectEmpty } from '@/utils/verify-empty-object'

export function SearchResultsFilter() {
  const { changeQuery } = useQuery()

  const { pets, allFilters, selectedFilters } = usePets()

  const onSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name } = event.target

    const value = event.target.value.trim()
    changeQuery({ name, value })
  }

  return (
    <div className="flex items-center justify-between">
      <span className="text-xl font-normal text-ateneo">
        Encontre{' '}
        <strong className="font-extrabold">{`${pets.length} ${
          pets.length === 1 ? 'amigo' : 'amigos'
        }`}</strong>{' '}
        na sua cidade
      </span>
      {!isObjectEmpty(allFilters) && (
        <Select.Root className="bg-opal-100 text-ateneo">
          <Select.Control
            options={Object.values(allFilters.petType).map((type) => ({
              label: type.charAt(0).toUpperCase() + type.slice(1),
              value: type,
            }))}
            onChange={onSelect}
            name="petType"
            value={selectedFilters?.get('petType') || ''}
          />
        </Select.Root>
      )}
    </div>
  )
}

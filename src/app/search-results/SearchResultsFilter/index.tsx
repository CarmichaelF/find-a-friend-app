'use client'

import { usePets } from '@/hooks/usePets'
import * as Select from '../../components/Select'

export function SearchResultsFilter() {
  const { pets, allFilters } = usePets()

  return (
    <div className="flex items-center justify-between">
      <span className="text-xl font-normal text-ateneo">
        Encontre{' '}
        <strong className="font-extrabold">{`${pets.length} ${
          pets.length === 1 ? 'amigo' : 'amigos'
        }`}</strong>{' '}
        na sua cidade
      </span>
      {allFilters && (
        <Select.Root className="bg-grey text-ateneo">
          <Select.Control
            options={Object.values(allFilters.petType).map((type) => ({
              label: type.charAt(0).toUpperCase() + type.slice(1),
              value: type,
            }))}
            name="filter-pet-type"
          />
        </Select.Root>
      )}
    </div>
  )
}

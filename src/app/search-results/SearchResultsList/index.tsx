'use client'

import { useEffect } from 'react'
import { usePets } from '@/hooks/usePets'
import { useGeoCity } from '@/hooks/useGeoCity'
import { SearchResultsListCard } from './SearchResultsListCard'

export function SearchResultsList() {
  const { selectedCity } = useGeoCity()
  const { pets, fetchPets } = usePets()

  useEffect(() => {
    if (selectedCity?.nome) fetchPets(selectedCity.nome)
  }, [])

  return (
    <div className="mt-12 grid grid-cols-3 gap-8">
      {pets?.map(({ images, name, id }) => (
        <SearchResultsListCard image={images[0]} name={name} key={id} />
      ))}
    </div>
  )
}

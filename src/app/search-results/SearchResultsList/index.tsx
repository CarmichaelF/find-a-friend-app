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
    <div className="mt-12 grid grid-cols-[repeat(3,minmax(200px,500px))] gap-8">
      {pets?.map(({ images, name, id }) => (
        <SearchResultsListCard image={images[0]} id={id} name={name} key={id} />
      ))}
    </div>
  )
}

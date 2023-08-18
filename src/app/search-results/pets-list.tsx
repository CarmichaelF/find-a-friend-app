'use client'

import { useEffect } from 'react'
import { PetCard } from './pet-card'
import { usePets } from '@/hooks/usePets'
import { useGeoCity } from '@/hooks/useGeoCity'

export function PetsList() {
  const { selectedCity } = useGeoCity()
  const { pets, fetchPets } = usePets()

  useEffect(() => {
    if (selectedCity?.nome) fetchPets(selectedCity.nome)
  }, [])

  return (
    <div className="grid grid-cols-3">
      {pets?.map(({ images, name, id }) => (
        <PetCard image={images[0]} name={name} key={id} />
      ))}
    </div>
  )
}

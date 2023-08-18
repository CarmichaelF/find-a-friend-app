'use client'

import { findAFriendAPI } from '@/services/api'
import { PropsWithChildren, createContext, useState } from 'react'

type PetsContextType = {
  pets: Pet[]
  fetchPets(city: string): void
}

export const PetsContext = createContext({} as PetsContextType)

export const PetsProvider = ({ children }: PropsWithChildren) => {
  const [pets, setPets] = useState<Pet[]>([])

  const fetchPets = async (city: string) => {
    const { data } = await findAFriendAPI<{ pets: Pet[] }>(`/pets?city=${city}`)
    setPets(data.pets)
  }

  return (
    <PetsContext.Provider value={{ pets, fetchPets }}>
      {children}
    </PetsContext.Provider>
  )
}

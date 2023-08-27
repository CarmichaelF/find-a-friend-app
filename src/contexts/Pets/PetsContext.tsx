'use client'

import { Filters, PetFilters } from '@/app/search-results/interfaces'
import { useGeoCity } from '@/hooks/useGeoCity'
import { findAFriendAPI } from '@/services/api'
import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation'
import { PropsWithChildren, createContext, useEffect, useState } from 'react'

type PetsContextType = {
  pets: Pet[]
  fetchPets(city: string): void
  allFilters: Filters
  selectedFilters: ReadonlyURLSearchParams | undefined
}

export const PetsContext = createContext({} as PetsContextType)

export const PetsProvider = ({ children }: PropsWithChildren) => {
  const { selectedCity } = useGeoCity()
  const [pets, setPets] = useState<Pet[]>([])
  const [allFilters, setAllFilters] = useState<Filters>({} as Filters)
  const [selectedFilters, setSelectedFilters] =
    useState<ReadonlyURLSearchParams>()
  const searchParams = useSearchParams()

  const getAllFilterOptions = async () => {
    const { data } = await findAFriendAPI<PetFilters>('/pets/filters')
    setAllFilters(data.filters)
  }

  const fetchPets = async (city: string) => {
    const { data } = await findAFriendAPI<{ pets: Pet[] }>(
      `/pets?city=${city}&${searchParams.toString()}`,
    )
    setPets(data.pets)
  }

  useEffect(() => {
    getAllFilterOptions()
  }, [])

  useEffect(() => {
    setSelectedFilters(searchParams)
  }, [searchParams])

  useEffect(() => {
    if (!selectedCity) return
    fetchPets(selectedCity.nome)
  }, [selectedFilters])

  return (
    <PetsContext.Provider
      value={{ pets, fetchPets, allFilters, selectedFilters }}
    >
      {children}
    </PetsContext.Provider>
  )
}

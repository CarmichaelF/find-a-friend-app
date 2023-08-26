'use client'

import { LOCALSTORAGE } from '@/constants/localStorage'
import { useGeoState } from '@/hooks/useGeoState'
import { brasilAPI } from '@/services/api'
import {
  retrieveFromLocalStorage,
  saveToLocalStorage,
} from '@/utils/local-storage'
import { PropsWithChildren, createContext, useEffect, useState } from 'react'

export type GeoCity = {
  codigo_ibge: string
  nome: string
}

type GeoCityContextType = {
  cities: GeoCity[]
  loading?: boolean
  selectedCity: GeoCity | null
  changeSelectedCity: (id: number) => void
}

export const GeoCityContext = createContext({} as GeoCityContextType)

export function GeoCityProvider({ children }: PropsWithChildren) {
  const { selectedState } = useGeoState()
  const [selectedCity, setSelectedCity] = useState<GeoCity | null>(() => {
    const localStorageCity = retrieveFromLocalStorage<GeoCity>({
      key: LOCALSTORAGE.city,
    })
    return localStorageCity
  })
  const [cities, setCities] = useState<GeoCity[]>([])
  const [loading, setLoading] = useState(false)

  const fetchCities = async () => {
    setLoading(true)
    const response = await brasilAPI<GeoCity[]>(
      `/municipios/v1/${selectedState?.sigla}`,
    )
    const { data } = response
    if (response.status !== 200) throw new Error('Error fetching cities')
    setCities(data)
    setLoading(false)
  }

  const changeSelectedCity = (id: number) => {
    const cityFound = cities?.find((city) => city.codigo_ibge === id.toString())
    if (!cityFound) throw new Error('City not found')
    setSelectedCity(cityFound)
  }

  useEffect(() => {
    if (selectedCity === null) return
    saveToLocalStorage({
      key: LOCALSTORAGE.city,
      value: selectedCity,
    })
  }, [selectedCity])

  useEffect(() => {
    ;(async () => {
      if (selectedState) await fetchCities()
    })()
  }, [selectedState])

  return (
    <GeoCityContext.Provider
      value={{
        cities,
        loading,
        selectedCity,
        changeSelectedCity,
      }}
    >
      {children}
    </GeoCityContext.Provider>
  )
}

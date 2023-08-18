'use client'

import { LOCALSTORAGE } from '@/constants/localStorage'
import { brasilAPI } from '@/services/api'
import {
  retrieveFromLocalStorage,
  saveToLocalStorage,
} from '@/utils/localStorage'
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

export type GeoCity = {
  codigo_ibge: string
  nome: string
}

type GeoCityContextType = {
  cities: GeoCity[]
  loading?: boolean
  selectedCity: GeoCity | null
  changeSelectedCity: (id: number) => void
  fetchCities: (uf: string) => Promise<void>
}

const GeoCityContext = createContext({} as GeoCityContextType)

export function GeoCityProvider({ children }: PropsWithChildren) {
  const [selectedCity, setSelectedCity] = useState<GeoCity | null>(null)
  const [cities, setCities] = useState<GeoCity[]>([])
  const [loading, setLoading] = useState(false)

  const fetchCities = async (uf: string) => {
    setLoading(true)
    const response = await brasilAPI<GeoCity[]>(`/municipios/v1/${uf}`)
    const { data } = response
    if (response.status !== 200) throw new Error('Error fetching cities')
    setCities(data)
    setSelectedCity(data[0])
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
    const localStorageCity = retrieveFromLocalStorage<GeoCity>({
      key: LOCALSTORAGE.city,
    })
    setSelectedCity(localStorageCity)
  }, [])

  return (
    <GeoCityContext.Provider
      value={{
        cities,
        loading,
        selectedCity,
        changeSelectedCity,
        fetchCities,
      }}
    >
      {children}
    </GeoCityContext.Provider>
  )
}

export function useGeoCity() {
  return useContext(GeoCityContext)
}

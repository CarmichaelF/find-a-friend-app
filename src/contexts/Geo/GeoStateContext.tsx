'use client'

import { LOCALSTORAGE } from '@/constants/localStorage'
import { brasilAPI } from '@/services/api'
import {
  retrieveFromLocalStorage,
  saveToLocalStorage,
} from '@/utils/local-storage'
import { PropsWithChildren, createContext, useEffect, useState } from 'react'

export type GeoState = {
  id: number
  sigla: string
  nome: string
  regiao: {
    id: number
    sigla: string
    nome: string
  }
}

type GeoStateContextType = {
  states: GeoState[]
  loading?: boolean
  selectedState: GeoState | null
  changeSelectedState: (id: number) => void
}

export const GeoStateContext = createContext({} as GeoStateContextType)

export function GeoStateProvider({ children }: PropsWithChildren) {
  const [selectedState, setSelectedState] = useState<GeoState | null>(null)
  const [states, setStates] = useState<GeoState[]>([])
  const [loading, setLoading] = useState(true)

  const fetchStates = async () => {
    setLoading(true)
    const response = await brasilAPI('/uf/v1')
    const { data } = response
    if (response.status !== 200) throw new Error('Error fetching states')
    setLoading(false)
    return data
  }

  const changeSelectedState = (id: number) => {
    const stateFound = states?.find((state) => state.id === id)
    if (!stateFound) throw new Error('State not found')
    setSelectedState(stateFound)
  }

  useEffect(() => {
    if (selectedState === null) return
    saveToLocalStorage({
      key: LOCALSTORAGE.state,
      value: selectedState,
    })
  }, [selectedState])

  useEffect(() => {
    ;(async () => {
      const fetchedStates = await fetchStates()
      setStates(fetchedStates)

      const localStorageState = retrieveFromLocalStorage<GeoState>({
        key: LOCALSTORAGE.state,
      })
      setSelectedState(localStorageState)
    })()
  }, [])

  return (
    <GeoStateContext.Provider
      value={{
        states,
        loading,
        selectedState,
        changeSelectedState,
      }}
    >
      {children}
    </GeoStateContext.Provider>
  )
}

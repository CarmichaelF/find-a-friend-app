'use client'

import { useContext } from 'react'
import { PetsContext } from '../contexts/Pets/PetsContext'

export function usePets() {
  if (!PetsContext)
    throw new Error('usePets must be used within a GeoCityProvider')
  return useContext(PetsContext)
}

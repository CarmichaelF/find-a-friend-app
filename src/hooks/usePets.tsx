'use client'

import { useContext } from 'react'
import { PetsContext } from '../contexts/Pets/PetsContext'

export function usePets() {
  // Verify why the error is not throwing
  if (!PetsContext)
    throw new Error('usePets must be used within a PetsProvider')
  return useContext(PetsContext)
}

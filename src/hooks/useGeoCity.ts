'use client'

import { useContext } from 'react'
import { GeoCityContext } from '../contexts/Geo/GeoCityContext'

export function useGeoCity() {
  if (!GeoCityContext)
    throw new Error('useGeoCity must be used within a GeoCityProvider')
  return useContext(GeoCityContext)
}

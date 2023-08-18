'use client'

import { useContext } from 'react'
import { GeoStateContext } from '../contexts/Geo/GeoStateContext'

export function useGeoState() {
  if (!GeoStateContext)
    throw new Error('useGeoState must be used within a GeoStateProvider')

  return useContext(GeoStateContext)
}

'use client'

import { PropsWithChildren } from 'react'
import { GeoStateProvider } from './GeoStateContext'
import { GeoCityProvider } from './GeoCityContext'

export function GeoProvider({ children }: PropsWithChildren) {
  return (
    <GeoStateProvider>
      <GeoCityProvider>{children}</GeoCityProvider>
    </GeoStateProvider>
  )
}

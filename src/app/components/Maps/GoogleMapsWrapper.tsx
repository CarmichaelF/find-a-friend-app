'use client'

import React from 'react'
import { Status, Wrapper } from '@googlemaps/react-wrapper'
import { clientEnv } from '@/env'
import { GoogleMaps } from './GoogleMaps'
import { Loader } from '../icons/Loader'
import { GoogleStyleWrapper } from './GoogleStyleWrapper'

interface GoogleMapsWrapperProps {
  lat: number
  lng: number
}

export const GoogleMapsWrapper = ({ lat, lng }: GoogleMapsWrapperProps) => {
  const render = (status: Status) => {
    if (status === Status.LOADING) {
      return (
        <GoogleStyleWrapper className="flex cursor-wait items-center justify-center">
          <Loader className="h-full animate-spin" />
        </GoogleStyleWrapper>
      )
    }

    if (status === Status.FAILURE) {
      return <div>Failed to load google maps</div>
    }

    return <GoogleMaps lat={Number(lat)} lng={Number(lng)} />
  }

  const apiKey = clientEnv.NEXT_PUBLIC_GOOGLE_MAPS_KEY

  if (!apiKey) {
    return <div>Cannot display the map: google maps api key missing</div>
  }

  return <Wrapper apiKey={apiKey} render={render} />
}

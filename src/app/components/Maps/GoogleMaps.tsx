'use client'

/* eslint-disable no-new */
import React, { useEffect, useRef } from 'react'
import { GoogleStyleWrapper } from './GoogleStyleWrapper'

interface GoogleMapsProps {
  lat: number
  lng: number
  zoom?: number
}

export const GoogleMaps = ({ lat, lng, zoom = 15 }: GoogleMapsProps) => {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (ref.current) {
      const map = new window.google.maps.Map(ref.current, {
        center: { lat, lng },
        zoom,
      })

      new google.maps.Marker({
        position: { lat, lng },
        map,
        icon: {
          url: '/assets/svg/pet-marker.svg',
        },
      })
    }
  }, [lat, lng, ref, zoom])

  return <GoogleStyleWrapper ref={ref} />
}

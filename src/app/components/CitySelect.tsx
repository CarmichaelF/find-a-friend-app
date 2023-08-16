'use client'

import { useGeoCity } from '@/hooks/useGeoCity'
import { Select } from './Select'
import { useEffect, useMemo } from 'react'
import { useGeoState } from '@/hooks/useGeoState'

export function CitySelect() {
  const { selectedState } = useGeoState()
  const { loading, cities, selectedCity, changeSelectedCity, fetchCities } =
    useGeoCity()

  const options = useMemo(
    () =>
      cities?.map(({ codigo_ibge: value, nome: label }) => ({
        value,
        label,
      })),
    [cities],
  )

  useEffect(() => {
    ;(async () => {
      if (selectedState) await fetchCities(selectedState.sigla)
    })()
  }, [selectedState])

  return (
    <Select
      defaultOption="Selecione a UF"
      options={options}
      loading={loading}
      sizeVariant="medium"
      disabled={!options?.length}
      value={selectedCity?.codigo_ibge}
      onChange={(e) => changeSelectedCity(Number(e.target.value))}
    />
  )
}

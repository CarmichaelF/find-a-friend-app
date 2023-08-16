'use client'
import { useGeoState } from '@/hooks/useGeoState'
import { Select } from './Select'
import { useMemo } from 'react'

export function StateSelect() {
  const { states, loading, selectedState, changeSelectedState } = useGeoState()

  const options = useMemo(
    () =>
      states?.map(({ sigla, id }) => ({
        value: id.toString(),
        label: sigla,
      })),
    [states],
  )

  return (
    <Select
      defaultOption="UF"
      label="Busque um amigo:"
      value={selectedState?.id}
      options={options}
      loading={loading}
      onChange={(e) => changeSelectedState(Number(e.target.value))}
    />
  )
}

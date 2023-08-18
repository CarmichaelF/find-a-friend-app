'use client'

import { useGeoState } from '@/hooks/useGeoState'
import * as Select from '../components/Select'
import { useGeoCity } from '@/hooks/useGeoCity'
import { useEffect, useMemo } from 'react'
import { Button } from '../components/Button'
import { Search } from '../components/icons/Search'

export function Form() {
  const {
    loading: loadingCity,
    cities,
    selectedCity,
    changeSelectedCity,
    fetchCities,
  } = useGeoCity()

  const {
    states,
    loading: loadingState,
    selectedState,
    changeSelectedState,
  } = useGeoState()

  const stateOptions = useMemo(
    () =>
      states?.map(({ sigla, id }) => ({
        value: id.toString(),
        label: sigla,
      })),
    [states],
  )
  const cityOptions = useMemo(
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
    <form className="flex w-full items-center gap-3 pr-10">
      <Select.Root loading={loadingState} className="bg-opal-500">
        <Select.Control
          name="state"
          defaultOption="UF"
          value={selectedState?.id}
          options={stateOptions}
          onChange={(e) => changeSelectedState(Number(e.target.value))}
        />
      </Select.Root>
      <Select.Root
        loading={loadingCity}
        className="border border-opal bg-opal-500"
      >
        <Select.Control
          name="city"
          defaultOption="Selecione a UF"
          options={cityOptions}
          disabled={!cityOptions?.length}
          value={selectedCity?.codigo_ibge}
          onChange={(e) => changeSelectedCity(Number(e.target.value))}
        />
      </Select.Root>
      <Button type="submit">
        <Search />
      </Button>
    </form>
  )
}

'use client'

import { useGeoState } from '@/hooks/useGeoState'
import * as Select from '../../components/Select'
import { useGeoCity } from '@/hooks/useGeoCity'
import { useMemo } from 'react'
import { Button } from '../../components/Button'
import { Search } from '../../components/icons/Search'
import { usePets } from '@/hooks/usePets'

export function AsideForm() {
  const { fetchPets } = usePets()
  const {
    loading: loadingCity,
    cities,
    selectedCity,
    changeSelectedCity,
  } = useGeoCity()

  const {
    states,
    loading: loadingState,
    selectedState,
    changeSelectedState,
  } = useGeoState()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (selectedCity?.nome) fetchPets(selectedCity?.nome)
  }

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

  return (
    <form
      className="flex w-full items-center gap-3 pr-10"
      onSubmit={handleSubmit}
    >
      <Select.Root loading={loadingState} className="bg-opal-500">
        <Select.Control
          name="state"
          value={selectedState?.id}
          defaultOption={{
            label: 'UF',
            value: 'default-value',
          }}
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
          options={cityOptions}
          disabled={!cityOptions?.length}
          value={selectedCity?.codigo_ibge}
          defaultOption={{
            label: 'Selecione a UF',
            value: '',
          }}
          onChange={(e) => changeSelectedCity(Number(e.target.value))}
        />
      </Select.Root>
      <Button type="submit">
        <Search />
      </Button>
    </form>
  )
}

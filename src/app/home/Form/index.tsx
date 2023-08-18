'use client'

import { useGeoCity } from '@/hooks/useGeoCity'
import { findAFriendAPI } from '@/services/api'
import { Button } from '@/app/components/Button'
import { Search } from '@/app/components/icons/Search'
import { ComponentProps, useEffect, useMemo } from 'react'
import { useGeoState } from '@/hooks/useGeoState'
import * as Select from '@/app/components/Select'

export function Form(props: ComponentProps<'form'>) {
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const { data } = await findAFriendAPI<{ pets: Pet[] }>(
      `/pets?city=${selectedCity?.nome}`,
    )
    console.log('data', data)
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

  useEffect(() => {
    ;(async () => {
      if (selectedState) await fetchCities(selectedState.sigla)
    })()
  }, [selectedState])

  return (
    <form
      className="flex items-center gap-8"
      {...props}
      onSubmit={handleSubmit}
    >
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-6">
          <Select.Label>Busque um amigo:</Select.Label>
          <Select.Root loading={loadingState}>
            <Select.Control
              name="state"
              defaultOption="UF"
              value={selectedState?.id}
              options={stateOptions}
              onChange={(e) => changeSelectedState(Number(e.target.value))}
            />
          </Select.Root>
        </div>
        <Select.Root className="border-none bg-opal-500" loading={loadingCity}>
          <Select.Control
            name="city"
            defaultOption="Selecione a UF"
            options={cityOptions}
            disabled={!cityOptions?.length}
            value={selectedCity?.codigo_ibge}
            onChange={(e) => changeSelectedCity(Number(e.target.value))}
          />
        </Select.Root>
      </div>
      <Button type="submit">
        <Search />
      </Button>
    </form>
  )
}

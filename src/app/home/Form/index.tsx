'use client'

import { useGeoCity } from '@/hooks/useGeoCity'
import { Button } from '@/app/components/Button'
import { Search } from '@/app/components/icons/Search'
import { ComponentProps, useMemo } from 'react'
import { useGeoState } from '@/hooks/useGeoState'
import * as Select from '@/app/components/Select'
import { useRouter } from 'next/navigation'

export function Form(props: ComponentProps<'form'>) {
  const { push } = useRouter()
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    push('/search-results')
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
              defaultOption={{
                label: 'UF',
                value: 'default-value',
              }}
              value={selectedState?.id}
              options={stateOptions}
              onChange={(e) => changeSelectedState(Number(e.target.value))}
            />
          </Select.Root>
        </div>
        <Select.Root className="border-none bg-opal-500" loading={loadingCity}>
          <Select.Control
            name="city"
            defaultOption={{
              label: 'Selecione a UF',
              value: 'default-value',
            }}
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

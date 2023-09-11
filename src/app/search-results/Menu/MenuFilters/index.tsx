import * as Select from '@/app/components/Select'
import { useGetMemoizedOptions } from '@/hooks/useGetMemoizedOptions'
import { usePets } from '@/hooks/usePets'
import { useQuery } from '@/hooks/useQuery'
import { ChangeEvent } from 'react'

export function MenuFilters() {
  const { selectedFilters, allFilters: allOptions } = usePets()

  const { changeQuery } = useQuery()

  const onSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name } = event.target

    const value = event.target.value.trim()
    changeQuery({ name, value })
  }

  const ageOptions = useGetMemoizedOptions({
    allOptions,
    filter: 'age',
  })

  const energyOptions = useGetMemoizedOptions({
    allOptions,
    filter: 'energyLevel',
  })

  const sizeOptions = useGetMemoizedOptions({ allOptions, filter: 'petSize' })

  const independenceOptions = useGetMemoizedOptions({
    allOptions,
    filter: 'independencyLevel',
  })
  return (
    <>
      <span className="text-xl font-extrabold text-white">Filtros</span>
      <div className="my-5">
        <Select.Label htmlFor="age-filter">Idade</Select.Label>
        <Select.Root className="mt-3 w-full border-none bg-opal-400">
          <Select.Control
            options={ageOptions}
            onChange={onSelect}
            name="age"
            value={selectedFilters?.get('age') || ''}
            id="age-filter"
          />
        </Select.Root>
      </div>
      <div className="my-5">
        <Select.Label htmlFor="energy-filter">Nível de Energia</Select.Label>
        <Select.Root className="mt-3 w-full border-none bg-opal-400">
          <Select.Control
            options={energyOptions}
            onChange={onSelect}
            name="energyLevel"
            value={selectedFilters?.get('energyLevel') || ''}
            id="energy-filter"
          />
        </Select.Root>
      </div>
      <div className="my-5">
        <Select.Label htmlFor="size-filter">Porte do animal</Select.Label>
        <Select.Root className="mt-3 w-full border-none bg-opal-400">
          <Select.Control
            options={sizeOptions}
            onChange={onSelect}
            name="petSize"
            value={selectedFilters?.get('petSize') || ''}
            id="size-filter"
          />
        </Select.Root>
      </div>
      <div className="my-5">
        <Select.Label htmlFor="independency-filter">
          Nível de independência
        </Select.Label>
        <Select.Root className="mt-3 w-full border-none bg-opal-400">
          <Select.Control
            options={independenceOptions}
            onChange={onSelect}
            name="independencyLevel"
            value={selectedFilters?.get('independencyLevel') || ''}
            id="independency-filter"
          />
        </Select.Root>
      </div>
    </>
  )
}

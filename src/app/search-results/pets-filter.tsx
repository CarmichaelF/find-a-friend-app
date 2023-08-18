'use client'

import { usePets } from '@/hooks/usePets'
import * as Select from '../components/Select'

export function PetsFilter() {
  const { pets } = usePets()

  return (
    <div className="flex items-center justify-between">
      <span className="text-xl font-normal text-ateneo">
        Encontre{' '}
        <strong className="font-extrabold">{`${pets.length} ${
          pets.length === 1 ? 'amigo' : 'amigos'
        }`}</strong>{' '}
        na sua cidade
      </span>
      <Select.Root className="bg-grey text-ateneo">
        <Select.Control
          options={[
            { label: 'Gatos e Cachorros', value: 'dogs-and-cats' },
            { label: 'Gatos', value: 'cats' },
            { label: 'Cachorros', value: 'dogs' },
          ]}
          name="filter-pet-type"
        />
      </Select.Root>
    </div>
  )
}

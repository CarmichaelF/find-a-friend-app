import { Logo } from '@/app/components/Logo'
import { PropsWithChildren } from 'react'
import { GeoCityProvider } from '@/hooks/useGeoCity'
import { GeoStateProvider } from '@/hooks/useGeoState'
import { Form } from './form'
import * as Select from '../components/Select'

export default function SearchResultsLayout({ children }: PropsWithChildren) {
  return (
    <div className="grid grid-cols-search-results">
      <aside className="flex h-screen flex-col">
        <div className="h-full bg-opal-500">
          <div className="flex flex-col gap-6 pl-14 pt-20">
            <Logo hideText />
            <div className="flex items-center justify-between gap-3 pb-6">
              <GeoCityProvider>
                <GeoStateProvider>
                  <Form />
                </GeoStateProvider>
              </GeoCityProvider>
            </div>
          </div>
          <div className="flex h-full flex-col bg-opal pl-14 pr-10 pt-9">
            <span className="text-xl font-extrabold text-white">Filtros</span>
            <div className="my-7">
              <Select.Label>Idade</Select.Label>
              <Select.Root className="bg-opal-400 mt-3 w-full">
                <Select.Control
                  options={[
                    {
                      label: 'Filhote',
                      value: 'puppy',
                    },
                  ]}
                />
              </Select.Root>
            </div>
            <div className="my-7">
              <Select.Label>Nível de Energia</Select.Label>
              <Select.Root className="bg-opal-400 mt-3 w-full">
                <Select.Control
                  options={[
                    {
                      label: '03',
                      value: '03',
                    },
                  ]}
                />
              </Select.Root>
            </div>
            <div className="my-7">
              <Select.Label>Porte do animal</Select.Label>
              <Select.Root className="bg-opal-400 mt-3 w-full">
                <Select.Control
                  options={[
                    {
                      label: 'Pequenino',
                      value: 'small',
                    },
                  ]}
                />
              </Select.Root>
            </div>
            <div className="my-7">
              <Select.Label>Nível de independência</Select.Label>
              <Select.Root className="bg-opal-400 mt-3 w-full">
                <Select.Control
                  options={[
                    {
                      label: 'Médio',
                      value: 'medium',
                    },
                  ]}
                />
              </Select.Root>
            </div>
          </div>
        </div>
      </aside>
      <main className="w-full">{children}</main>
    </div>
  )
}

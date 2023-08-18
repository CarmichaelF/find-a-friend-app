import { PropsWithChildren } from 'react'
import { Aside } from './aside'
import { GeoProvider } from '@/contexts/Geo'
import { PetsProvider } from '@/contexts/Pets/PetsContext'

export default function SearchResultsLayout({ children }: PropsWithChildren) {
  return (
    <GeoProvider>
      <PetsProvider>
        <div className="grid grid-cols-search-results">
          <Aside />
          <main className="w-full">{children}</main>
        </div>
      </PetsProvider>
    </GeoProvider>
  )
}

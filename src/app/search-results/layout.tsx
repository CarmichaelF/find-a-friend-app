import { PropsWithChildren } from 'react'
import { GeoProvider } from '@/contexts/Geo'
import { PetsProvider } from '@/contexts/Pets/PetsContext'
import { Aside } from './Aside'

export default function SearchResultsLayout({ children }: PropsWithChildren) {
  return (
    <GeoProvider>
      <PetsProvider>
        <div className="grid grid-cols-search-results bg-[#FDECED]">
          <Aside />
          <main className="w-full">{children}</main>
        </div>
      </PetsProvider>
    </GeoProvider>
  )
}

import { PropsWithChildren } from 'react'
import { GeoProvider } from '@/contexts/Geo'
import { PetsProvider } from '@/contexts/Pets/PetsContext'
import { Menu } from './Menu'

export default function SearchResultsLayout({ children }: PropsWithChildren) {
  return (
    <GeoProvider>
      <PetsProvider>
        <div className="flex flex-col bg-[#FDECED] lg:grid lg:grid-cols-search-results">
          <Menu />
          <main className="w-full">{children}</main>
        </div>
      </PetsProvider>
    </GeoProvider>
  )
}

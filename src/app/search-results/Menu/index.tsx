import Link from 'next/link'
import { Logo } from '@/app/components/Logo'
import { MenuForm } from './MenuForm'
import { SearchResultsFilters } from './SearchResultsFilters'

export function Menu() {
  return (
    <div className="sticky top-0 z-10 flex flex-col lg:bottom-0 lg:h-screen">
      <nav className="flex h-full flex-col bg-opal-500">
        <div className="flex flex-col gap-6 pl-10 pt-20 md:pl-14">
          <Link href="/">
            <Logo hideText />
          </Link>
          <div className="flex items-center justify-between gap-3 pb-6">
            <MenuForm />
          </div>
        </div>
        <SearchResultsFilters />
      </nav>
    </div>
  )
}

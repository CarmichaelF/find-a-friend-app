import Link from 'next/link'
import { Logo } from '@/app/components/Logo'
import { AsideForm } from './AsideForm'
import { AsideFilters } from './Filters'

export function Aside() {
  return (
    <aside className="flex h-screen flex-col">
      <div className="flex h-full flex-col bg-opal-500">
        <div className="flex flex-col gap-6 pl-14 pt-20">
          <Link href="/">
            <Logo hideText />
          </Link>
          <div className="flex items-center justify-between gap-3 pb-6">
            <AsideForm />
          </div>
        </div>
        <AsideFilters />
      </div>
    </aside>
  )
}

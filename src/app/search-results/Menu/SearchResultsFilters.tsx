'use client'

import { CloseSquare } from '@/app/components/icons/CloseSquare'
import { HamburgerMenu } from '@/app/components/icons/HamburgerMenu'
import { MenuFilters } from './MenuFilters'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useLockedBody } from 'usehooks-ts'

export function SearchResultsFilters() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  useLockedBody(isFilterOpen, 'root')

  const isDesktop = useMediaQuery({
    query: '(min-width: 1024px)',
  })

  const handleToggleFilter = () => {
    setIsFilterOpen(!isFilterOpen)
  }

  useEffect(() => {
    if (isDesktop) {
      setIsFilterOpen(false)
    }
  }, [isDesktop])

  return (
    <div className="flex h-full flex-1 flex-col bg-opal pl-14 pr-10 pt-9 md:h-auto">
      {!isDesktop && (
        <button
          onClick={handleToggleFilter}
          className="mb-8 flex items-center gap-2"
          type="button"
        >
          <HamburgerMenu width={20} height={20} className="text-white" />
          <span className="text-base font-semibold text-white">
            Open Filters
          </span>
        </button>
      )}
      <div
        data-is-filter-open={isFilterOpen}
        className="fixed -top-full left-0 right-0 z-10 flex h-full min-h-screen w-full flex-col gap-5 bg-inherit px-10 pb-12 pt-10 transition-all duration-500 data-[is-filter-open=true]:top-0"
      >
        <button onClick={handleToggleFilter}>
          <CloseSquare className="ml-auto text-white" />
        </button>
        {!isDesktop && <MenuFilters />}
      </div>

      {isDesktop && <MenuFilters />}
    </div>
  )
}

import { SearchResultsFilter } from './SearchResultsFilter'
import { SearchResultsList } from './SearchResultsList'

export default function SearchResultsPage() {
  return (
    <div className="m-auto mt-10 flex max-w-container flex-col px-10 pb-12 md:px-8 lg:mt-40">
      <SearchResultsFilter />
      <SearchResultsList />
    </div>
  )
}

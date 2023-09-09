import { SearchResultsFilter } from './SearchResultsFilter'
import { SearchResultsList } from './SearchResultsList'

export default function SearchResultsPage() {
  return (
    <div className="m-auto mt-40 flex max-w-container flex-col px-8 pb-12">
      <SearchResultsFilter />
      <SearchResultsList />
    </div>
  )
}

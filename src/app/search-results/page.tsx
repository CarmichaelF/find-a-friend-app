import { SearchResultsFilter } from './SearchResultsFilter'
import { SearchResultsList } from './SearchResultsList'

export default function SearchResultsPage() {
  return (
    <div className="mt-40 flex flex-col px-8">
      <SearchResultsFilter />
      <SearchResultsList />
    </div>
  )
}

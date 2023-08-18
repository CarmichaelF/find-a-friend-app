import { PetsFilter } from './pets-filter'
import { PetsList } from './pets-list'

export default function SearchResultsPage() {
  return (
    <div className="mt-40 flex flex-col px-8">
      <PetsFilter />
      <PetsList />
    </div>
  )
}

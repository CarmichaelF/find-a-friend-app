import Image from 'next/image'
import { PetIcon } from '../../components/icons/PetIcon'

interface SearchResultsListCardProps {
  name: string
  image: string
}

export function SearchResultsListCard({
  name,
  image,
}: SearchResultsListCardProps) {
  return (
    <div className="flex flex-col items-center rounded-3xl bg-ateneo p-1 shadow">
      <Image
        src={image}
        alt={name}
        width={300}
        height={300}
        className="w-full overflow-hidden rounded-3xl"
      />
      <div className="relative flex h-[70px] w-full flex-col items-center justify-end">
        <PetIcon className="absolute -top-1/3" />
        <span className="mb-4 mt-2 text-lg font-bold text-white">{name}</span>
      </div>
    </div>
  )
}

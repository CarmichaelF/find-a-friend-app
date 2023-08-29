import Image from 'next/image'
import { PetIcon } from '../../components/icons/PetIcon'
import Link from 'next/link'

interface SearchResultsListCardProps {
  id: string
  name: string
  image: string
}

export function SearchResultsListCard({
  id,
  name,
  image,
}: SearchResultsListCardProps) {
  return (
    <Link href={`/pet/detail/${id}`}>
      <div className="flex flex-col items-center rounded-3xl bg-ateneo p-1 shadow">
        <div className="flex max-h-36 items-center justify-center overflow-hidden rounded-3xl">
          <Image
            width={300}
            height={300}
            src={image}
            alt={name}
            className="w-full overflow-hidden rounded-3xl"
          />
        </div>
        <div className="relative flex h-[70px] w-full flex-col items-center justify-end">
          <PetIcon className="absolute -top-1/3" />
          <span className="mb-4 mt-2 text-lg font-bold text-white">{name}</span>
        </div>
      </div>
    </Link>
  )
}

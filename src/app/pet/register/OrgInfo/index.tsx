import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { PetIcon } from '@/app/components/icons/PetIcon'
import { getServerSession } from 'next-auth'
import { LogOutButton } from './LogOutButton'

export async function OrgInfo() {
  const data = await getServerSession(authOptions)

  return (
    <div className="flex gap-4 rounded-default bg-ateneo px-20 py-6">
      <PetIcon />
      <div className="flex flex-col truncate">
        <h2 className="truncate text-3xl font-bold text-white">
          {data?.user?.name}
        </h2>
        <p className="truncate text-base font-semibold text-white">
          {data?.user?.address?.address}
        </p>
      </div>
      <LogOutButton />
    </div>
  )
}

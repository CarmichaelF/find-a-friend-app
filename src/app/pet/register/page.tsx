import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export default async function RegisterPet() {
  const session = await getServerSession(authOptions)
  return <div>register pet</div>
}

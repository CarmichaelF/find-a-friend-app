import { SignInForm } from './SignInForm'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function OrgSignIn() {
  const session = await getServerSession()
  if (session) redirect('/')

  return (
    <div className="w-ful flex h-3/4 flex-1 flex-col justify-center">
      <h1 className="text-6xl font-bold text-ateneo">Boas-vindas!</h1>
      <SignInForm />
    </div>
  )
}

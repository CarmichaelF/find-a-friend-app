import { SignUpForm } from './SignUpForm'

export default async function OrgSignUp() {
  return (
    <div className="w-ful flex h-full flex-1 flex-col">
      <h1 className="text-6xl font-bold text-ateneo">
        Cadastre sua organização
      </h1>
      <SignUpForm />
    </div>
  )
}

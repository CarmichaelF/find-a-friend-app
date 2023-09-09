import { PetsProvider } from '@/contexts/Pets/PetsContext'
import { RegisterForm } from './RegisterForm'
import { OrgInfo } from './OrgInfo'

export default async function RegisterPet() {
  return (
    <div className="m-auto mt-28 flex max-h-register-pet-form w-full max-w-pet-form flex-col gap-8 overflow-auto">
      <OrgInfo />
      <div className="h-full w-full rounded-default border border-light-grey bg-white px-20 py-16">
        <h1 className="mb-5 text-4xl font-extrabold text-ateneo">
          Adicione um pet
        </h1>
        <hr className="bg-light-grey" />
        <PetsProvider>
          <RegisterForm />
        </PetsProvider>
      </div>
    </div>
  )
}

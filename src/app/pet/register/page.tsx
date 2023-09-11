import { PetsProvider } from '@/contexts/Pets/PetsContext'
import { RegisterForm } from './RegisterForm'
import { OrgInfo } from './OrgInfo'

export default async function RegisterPet() {
  return (
    <div className="m-auto my-6 mt-10 flex w-full max-w-pet-form flex-col gap-8 overflow-auto px-10 md:max-h-register-pet-form md:px-0">
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

import { PetsProvider } from '@/contexts/Pets/PetsContext'
import { RegisterForm } from './RegisterForm'

export default async function RegisterPet() {
  return (
    <div className="m-auto h-full max-h-register-pet-form w-full max-w-register-aside overflow-auto rounded-default border border-light-grey bg-white px-20 py-16">
      <h1 className="mb-5 text-4xl font-extrabold text-ateneo">
        Adicione um pet
      </h1>
      <hr className="bg-light-grey" />
      <PetsProvider>
        <RegisterForm />
      </PetsProvider>
    </div>
  )
}

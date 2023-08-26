import { PetsProvider } from '@/contexts/Pets/PetsContext'
import { RegisterAside } from './RegisterAside'
import { RegisterForm } from './RegisterForm'

export default async function RegisterPet() {
  // const session = await getServerSession(authOptions)
  return (
    <div className="flex bg-opal-100">
      <RegisterAside />

      <div className="m-auto h-full max-h-register-pet-form w-full max-w-register-aside overflow-auto rounded-default border border-light-grey bg-white px-20 py-16">
        <div></div>
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

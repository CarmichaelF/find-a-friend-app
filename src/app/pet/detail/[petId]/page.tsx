import { PetEnergy } from '@/app/components/icons/PetEnergy'
import { PetEnvironment } from '@/app/components/icons/PetEnvironment'
import { PetSize } from '@/app/components/icons/PetSize'
import { PetSizeDisabled } from '@/app/components/icons/PetSizeDisabled'
import { findAFriendAPI } from '@/services/api'
import Image from 'next/image'
import { PetCharacteristic } from './PetCharacteristic'

export async function generateStaticParams() {
  const {
    data: { pets },
  } = await findAFriendAPI<{ pets: Pet[] }>('/pets')

  return pets.map((pet) => ({
    petId: pet.id,
  }))
}

export default async function PetDetail({
  params: { petId },
}: {
  params: { petId: string }
}) {
  const {
    data: { pet },
  } = await findAFriendAPI<{ pet: Pet }>(`/pets/${petId}`)

  return (
    <div className="m-auto h-full max-h-register-pet-form w-full max-w-register-aside overflow-auto rounded-default border border-light-grey bg-white">
      <div className="flex max-h-[350px] items-center justify-center overflow-hidden">
        <Image
          src={pet.images[0]}
          width={400}
          height={400}
          alt={pet.name}
          className="w-full"
        />
      </div>
      <div className="mt-20 px-20 py-16">
        <h1 className="text-6xl font-extrabold text-ateneo">{pet.name}</h1>
        <p className="mb-11 mt-6 text-lg font-semibold text-ateneo">
          {pet.description}
        </p>
        <div className="flex gap-4">
          <PetCharacteristic label="Energia" level={pet.energyLevel}>
            <PetEnergy />
          </PetCharacteristic>
          <PetCharacteristic label={`Ambiente ${pet.environment}`}>
            <PetEnvironment />
          </PetCharacteristic>
          <PetCharacteristic label={`${pet.petSize}`}>
            <PetSize />
            <PetSizeDisabled />
            <PetSizeDisabled />
          </PetCharacteristic>
        </div>
      </div>
    </div>
  )
}

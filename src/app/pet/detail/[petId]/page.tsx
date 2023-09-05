import { PetEnergy } from '@/app/components/icons/PetEnergy'
import { PetEnvironment } from '@/app/components/icons/PetEnvironment'
import { PetSize } from '@/app/components/icons/PetSize'
import { PetSizeDisabled } from '@/app/components/icons/PetSizeDisabled'
import { findAFriendAPI } from '@/services/api'
import { PetCharacteristic } from './PetCharacteristic'
import { GoogleMapsWrapper } from '@/app/components/Maps/GoogleMapsWrapper'
import Link from 'next/link'
import { PetIcon } from '@/app/components/icons/PetIcon'
import { WhatsApp } from '@/app/components/icons/WhatsApp'
import { Alert } from '@/app/components/icons/Alert'

import { PetSlider } from './PetSlider'

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
      <PetSlider pet={pet} />
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
        <div className="mt-20">
          <div className="overflow-hidden rounded-default border border-light-grey">
            <GoogleMapsWrapper
              lat={Number(pet.address.latitude)}
              lng={Number(pet.address.longitude)}
            />
          </div>
          <Link
            href={`https://www.google.com/maps/place/${pet.address.latitude},${pet.address.longitude}/@${pet.address.latitude},${pet.address.longitude},18z`}
            target="_blank"
            className="-mt-5 flex items-center justify-center rounded-b-default bg-ateneo py-5 pt-10"
          >
            <span className="text-center text-lg font-bold text-naples">
              Ver rotas no Google Maps
            </span>
          </Link>
        </div>
        <hr className="mb-14 mt-10 bg-light-grey" />
        <div className="flex gap-4">
          <PetIcon />
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-bold text-ateneo">
                {pet.org.name}
              </span>
              <span className="text-base font-semibold text-ateneo">
                {pet.address.address}
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-grey px-6 py-3">
              <WhatsApp className="text-ateneo" />
              <span className="text-lg font-bold text-ateneo">
                {pet.org.phone}
              </span>
            </div>
          </div>
        </div>
        <hr className="my-14 bg-light-grey" />
        <div className="flex flex-col gap-10">
          <span className="text-3xl font-bold text-ateneo">
            Requesitos para adoção
          </span>
          <ul className="flex flex-col gap-3">
            {pet.requirements.map((requirement, index) => (
              <li
                key={index}
                className="requirement-gradient flex items-center gap-4 rounded-xl border border-opal px-10 py-4"
              >
                <Alert />
                <span className="text-lg font-semibold text-opal">
                  {requirement.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-14 bg-light-grey" />
        <Link
          className="flex w-full items-center justify-center gap-4 rounded-default bg-green py-5 text-center"
          href={`https://wa.me/${pet.org.phone}`}
        >
          <WhatsApp className="text-white" />
          <span className="text-lg font-extrabold text-white">
            Entrar em contato
          </span>
        </Link>
      </div>
    </div>
  )
}

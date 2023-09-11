import { Logo } from '@/app/components/Logo'
import Image from 'next/image'
import { Form } from './Form'
import { GeoProvider } from '@/contexts/Geo'

export function HomePage() {
  return (
    <GeoProvider>
      <div className="flex h-full min-h-screen w-full flex-col items-center justify-center bg-opal px-6 py-8 md:h-screen md:px-28 md:py-30">
        <div className="m-auto max-w-container">
          <Logo className="self-start" />
          <div className="flex flex-col items-center pb-10 pt-3 md:flex-row md:pb-30">
            <h1 className="max-w-[490px] text-2xl font-extrabold tracking-tight text-white md:text-7xl">
              Leve a felicidade para o seu lar
            </h1>
            <Image
              width={600}
              height={600}
              src="/assets/svg/home-illustration.svg"
              alt="Dogs illustration"
              className="ml-auto"
            />
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <span className="max-w-[400px] text-2xl font-semibold text-white">
              Encontre o animal de estimação ideal para seu estilo de vida!
            </span>
            <Form />
          </div>
        </div>
      </div>
    </GeoProvider>
  )
}

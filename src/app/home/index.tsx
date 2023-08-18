import { GeoCityProvider } from '@/hooks/useGeoCity'
import { GeoStateProvider } from '@/hooks/useGeoState'
import { Logo } from '@/app/components/Logo'
import Image from 'next/image'
import { Form } from './Form'

export function HomePage() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-opal px-28 py-31">
      <div className="m-auto max-w-container">
        <Logo className="self-start" />
        <div className="flex items-center pb-30 pt-3">
          <h1 className="max-w-[490px] text-7xl font-extrabold tracking-tight text-white">
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
        <div className="flex items-center">
          <span className="max-w-[400px] text-2xl font-semibold text-white">
            Encontre o animal de estimação ideal para seu estilo de vida!
          </span>
          <GeoCityProvider>
            <GeoStateProvider>
              <Form />
            </GeoStateProvider>
          </GeoCityProvider>
        </div>
      </div>
    </div>
  )
}

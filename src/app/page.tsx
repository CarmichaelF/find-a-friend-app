import Image from 'next/image'
import { Logo } from './components/Logo'
import { GeoCityProvider } from '@/hooks/useGeoCity'
import { GeoStateProvider } from '@/hooks/useGeoState'
import { StateSelect } from './components/StateSelect'
import { CitySelect } from './components/CitySelect'
import { Button } from './components/Button'
import { Search } from './components/icons/Search'

export default function Home() {
  return (
    <GeoCityProvider>
      <GeoStateProvider>
        <div className="flex h-screen w-full flex-col items-center justify-center bg-opal px-28 py-31">
          <div className="max-w-container m-auto">
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
              <form className="flex items-center gap-8">
                <div className="flex items-center gap-3">
                  <StateSelect />
                  <CitySelect />
                </div>
                <Button type="submit">
                  <Search />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </GeoStateProvider>
    </GeoCityProvider>
  )
}

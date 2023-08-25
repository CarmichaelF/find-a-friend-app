import { PropsWithChildren } from 'react'
import { Logo } from '../components/Logo'
import Image from 'next/image'

export default function OrgLayout({ children }: PropsWithChildren) {
  return (
    <div className="m-auto flex h-screen w-full max-w-container items-center gap-32">
      <div className="flex h-3/4 flex-col items-center justify-between rounded-default bg-opal px-14 py-10">
        <Logo className="mt-20" />
        <Image
          width={400}
          height={400}
          src="/assets/svg/home-illustration.svg"
          alt="Dogs illustration"
          className="ml-auto"
        />
      </div>
      {children}
    </div>
  )
}

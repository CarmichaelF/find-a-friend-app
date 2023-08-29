import { PropsWithChildren } from 'react'
import { RegisterAside } from './register/PetAside'

export default function PetLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex bg-opal-100">
      <RegisterAside />
      {children}
    </div>
  )
}

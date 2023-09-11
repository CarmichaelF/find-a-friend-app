import { PropsWithChildren } from 'react'
import { RegisterMenu } from './register/RegisterMenu'

export default function PetLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col bg-opal-100 md:flex-row">
      <RegisterMenu />
      {children}
    </div>
  )
}

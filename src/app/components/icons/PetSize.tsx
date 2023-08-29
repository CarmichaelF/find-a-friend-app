import { ComponentProps } from 'react'

export function PetSize(props: ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
      {...props}
    >
      <circle cx={6} cy={6} r={6} fill="#0D3B66" />
    </svg>
  )
}

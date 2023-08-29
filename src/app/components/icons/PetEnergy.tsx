import { ComponentProps } from 'react'

export function PetEnergy(props: ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={22}
      viewBox="0 0 20 22"
      fill="none"
      {...props}
    >
      <path
        d="M11 1L1 13h9l-1 8L19 9h-9l1-8z"
        stroke="#0D3B66"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

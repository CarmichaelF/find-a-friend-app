import { ComponentProps } from 'react'

export function Button({ children, ...props }: ComponentProps<'button'>) {
  return (
    <button
      className="flex h-input w-input items-center justify-center overflow-hidden rounded-input bg-naples"
      {...props}
    >
      {children}
    </button>
  )
}

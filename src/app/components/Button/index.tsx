import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export function Button({
  children,
  className,
  ...props
}: ComponentProps<'button'>) {
  return (
    <button
      className={twMerge(
        'flex h-16 w-20 items-center justify-center overflow-hidden rounded-default bg-naples',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

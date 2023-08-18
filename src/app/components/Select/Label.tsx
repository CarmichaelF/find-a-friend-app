import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type LabelProps = ComponentProps<'label'>

export function Label({ className, ...props }: LabelProps) {
  return (
    <label
      className={twMerge('text-base font-normal text-white', className)}
      {...props}
    />
  )
}

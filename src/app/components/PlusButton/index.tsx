import { ComponentProps } from 'react'
import { Plus } from '../icons/Plus'
import { twMerge } from 'tailwind-merge'

export function PlusButton({ className, ...props }: ComponentProps<'button'>) {
  return (
    <button
      type="button"
      className={twMerge(
        'dashe flex h-16 items-center justify-center rounded-xl border border-dashed border-opal-500 bg-opal-100',
        className,
      )}
      {...props}
    >
      <Plus />
    </button>
  )
}

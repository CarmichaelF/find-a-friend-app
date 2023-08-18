import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { Loader } from '../icons/Loader'
import { Chevron } from '../icons/Chevron'

export interface SelectProps extends ComponentProps<'div'> {
  loading?: boolean
}

export function Root({
  children,
  loading = false,
  className,
  ...props
}: SelectProps) {
  return (
    <div
      className={twMerge(
        'relative flex h-input items-center gap-1 overflow-hidden rounded-input border border-white bg-opal text-xl font-bold text-white',
        className,
      )}
      {...props}
    >
      {loading && (
        <div className="absolute z-10 flex h-full w-full cursor-wait items-center justify-center bg-opal">
          <Loader className="animate-spin" />
        </div>
      )}
      {children}
      <Chevron className="pointer-events-none absolute right-3 text-inherit" />
    </div>
  )
}

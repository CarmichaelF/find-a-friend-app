import { ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

type GoogleStyleWrapperProps = ComponentProps<'div'>

export const GoogleStyleWrapper = forwardRef<
  HTMLDivElement,
  GoogleStyleWrapperProps
>(({ className, children }: GoogleStyleWrapperProps, ref) => {
  return (
    <div ref={ref} className={twMerge('h-[230px] w-full', className)}>
      {children}
    </div>
  )
})

GoogleStyleWrapper.displayName = 'GoogleStyleWrapper'

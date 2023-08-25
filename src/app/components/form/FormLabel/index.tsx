import { ComponentProps, ElementType } from 'react'
import { twMerge } from 'tailwind-merge'

type FormLabelProps<T extends ElementType = 'label'> = {
  as?: ElementType
} & ComponentProps<T>

export function FormLabel({
  children,
  className,
  as: Component = 'label',
  ...props
}: FormLabelProps) {
  return (
    <Component
      className={twMerge('text-base font-semibold text-ateneo', className)}
      {...props}
    >
      {children}
    </Component>
  )
}

import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const variants = tv({
  base: 'w-full bg-ateneo h-20 font-extrabold text-xl rounded-default',
  variants: {
    color: {
      primary: 'text-white bg-ateneo',
      secondary: 'bg-grey text-ateneo',
    },
  },
  defaultVariants: {
    color: 'primary',
  },
})

type Variants = VariantProps<typeof variants>

export function FormButton({
  children,
  color,
  ...props
}: ComponentProps<'button'> & Variants) {
  return (
    <button {...props} className={variants({ color })}>
      {children}
    </button>
  )
}

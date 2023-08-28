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

type FormButtonProps = Variants & ComponentProps<'button'>

export function FormButton({ children, color, ...props }: FormButtonProps) {
  return (
    <button {...props} className={variants({ color })}>
      {children}
    </button>
  )
}

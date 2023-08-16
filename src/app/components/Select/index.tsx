import { ComponentProps, useId } from 'react'
import { Chevron } from '../icons/Chevron'
import { tv } from 'tailwind-variants'
import { Loader } from '../icons/Loader'

export type SelectOptions = {
  value: string
  label: string
}

interface InputProps extends ComponentProps<'select'> {
  defaultOption?: string
  label?: string
  sizeVariant?: 'small' | 'medium'
  options: SelectOptions[]
  loading?: boolean
}

export function Select({
  defaultOption,
  label,
  sizeVariant = 'small',
  options,
  loading = false,
  ...props
}: InputProps) {
  const generatedId = useId()
  const id = props.id || generatedId

  const variants = tv({
    base: 'rounded-input h-input relative flex items-center gap-1 overflow-hidden border border-white bg-opal text-xl font-bold',
    variants: {
      size: {
        small: 'w-input',
        medium: 'min-w-70 border-none bg-opal-500',
      },
    },
  })

  return (
    <label
      htmlFor={id}
      className="flex items-center justify-start gap-6 text-base font-normal text-white"
    >
      {label && <span>{label}</span>}
      <div className={variants({ size: sizeVariant })}>
        {loading && (
          <div className="absolute z-10 flex h-full w-full cursor-wait items-center justify-center bg-opal">
            <Loader className="animate-spin" />
          </div>
        )}
        <select
          className="h-full w-full cursor-pointer appearance-none bg-inherit px-3 pr-7 outline-none transition-all"
          id={id}
          {...props}
          defaultValue="default-option"
        >
          {defaultOption && (
            <option disabled value="default-option" className="transition-all">
              {defaultOption}
            </option>
          )}
          {options.map(({ label, value }) => (
            <option className="transition-all" key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <Chevron className="pointer-events-none absolute right-3" />
      </div>
    </label>
  )
}

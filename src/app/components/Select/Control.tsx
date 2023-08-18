import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export type SelectOptions = {
  value: string
  label: string
}

interface ControlProps extends ComponentProps<'select'> {
  defaultOption?: string
  options: SelectOptions[]
}

export function Control({
  defaultOption,
  options,
  className,
  ...props
}: ControlProps) {
  return (
    <select
      className={twMerge(
        'h-full w-full cursor-pointer appearance-none bg-inherit px-5 pr-8 outline-none transition-all',
        className,
      )}
      defaultValue="default-option"
      {...props}
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
  )
}

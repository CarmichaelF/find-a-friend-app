import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export type SelectOptions = {
  value: string
  label: string
}

interface ControlProps extends ComponentProps<'select'> {
  defaultOption?: SelectOptions
  options: SelectOptions[]
}

export function Control({
  defaultOption = { label: 'Select one', value: 'default' },
  options,
  className,
  ...props
}: ControlProps) {
  return (
    <select
      className={twMerge(
        'h-full w-full cursor-pointer appearance-none bg-inherit px-5 pr-10 outline-none transition-all',
        className,
      )}
      {...props}
    >
      <option value={defaultOption.value} className="transition-all">
        {defaultOption.label}
      </option>
      {options.map(({ label, value }) => (
        <option className="transition-all" key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  )
}

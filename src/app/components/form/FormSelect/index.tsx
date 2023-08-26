import { ComponentProps, useId } from 'react'
import { FormLabel } from '../FormLabel'
import { Chevron } from '../../icons/Chevron'

export type FormSelectOptions = {
  value: string
  label: string
}

interface FormSelectProps extends ComponentProps<'select'> {
  label?: string
  defaultOption?: FormSelectOptions
  options: FormSelectOptions[]
}

export function FormSelect({
  defaultOption = { label: 'Selecione uma opção', value: 'default' },
  options,
  label,
  ...props
}: FormSelectProps) {
  const id = useId()

  return (
    <div className="flex flex-col gap-2">
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <div className="relative">
        <select
          className="h-16 w-full cursor-pointer rounded-lg border border-light-grey bg-grey px-5 text-lg font-semibold text-ateneo"
          id={id}
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
        <Chevron
          className="pointer-events-none absolute bottom-0 right-0 top-0 mx-5 h-full text-ateneo"
          width={25}
          height={25}
        />
      </div>
    </div>
  )
}

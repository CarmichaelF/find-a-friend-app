'use client'

import { ComponentProps, forwardRef, useId } from 'react'
import { FormLabel } from '../FormLabel'
import { Chevron } from '../../icons/Chevron'
import { Loader } from '../../icons/Loader'

export type FormSelectOptions = {
  value: string
  label: string
}

interface FormSelectProps extends ComponentProps<'select'> {
  label?: string
  defaultOption?: FormSelectOptions
  options: FormSelectOptions[]
}

export const defaultFormSelectOption = {
  label: 'Selecione uma opção',
  value: '',
}

export const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  (
    {
      defaultOption = defaultFormSelectOption,
      options,
      label,
      ...props
    }: FormSelectProps,
    ref,
  ) => {
    const isLoading = options.length === 0
    const id = useId()

    return (
      <div className="flex flex-col gap-2">
        <FormLabel htmlFor={id}>{label}</FormLabel>
        <div className="relative">
          {isLoading ? (
            <div className="z-10 flex h-16 w-full cursor-wait items-center gap-2 rounded-lg border border-light-grey bg-grey px-5 text-lg font-semibold text-ateneo">
              <Loader className="animate-spin" />
              <span className="font-semibold text-ateneo">Carregando...</span>
            </div>
          ) : (
            <select
              className="h-16 w-full cursor-pointer rounded-lg border border-light-grey bg-grey px-5 text-lg font-semibold text-ateneo"
              id={id}
              ref={ref}
              defaultValue={defaultOption.value}
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
          )}

          <Chevron
            className="pointer-events-none absolute bottom-0 right-0 top-0 mx-5 h-full text-ateneo"
            width={25}
            height={25}
          />
        </div>
      </div>
    )
  },
)

FormSelect.displayName = 'FormSelect'

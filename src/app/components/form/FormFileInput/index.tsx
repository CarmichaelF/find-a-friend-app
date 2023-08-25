'use client'

import { ComponentProps, useId, useState } from 'react'
import { FormLabel } from '../FormLabel'
import { Cloud } from '../../icons/Cloud'

interface FormFileInputProps extends ComponentProps<'input'> {
  label?: string
}

export function FormFileInput({ label, ...props }: FormFileInputProps) {
  const id = useId()

  return (
    <label htmlFor={id} className="flex flex-col gap-2">
      {label && <FormLabel as="span">{label}</FormLabel>}
      <div className="flex h-40 cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border border-light-grey bg-grey">
        <input type="file" hidden id={id} {...props} />
        <Cloud />
        <span className="text-lg font-semibold text-ateneo">
          Arraste e solte o arquivo
        </span>
      </div>
    </label>
  )
}

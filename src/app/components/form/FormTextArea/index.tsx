import { ComponentProps, useId } from 'react'
import { FormLabel } from '../FormLabel'

interface FormTextAreaProps extends ComponentProps<'textarea'> {
  label?: string
}

export function FormTextArea({
  label,
  maxLength,
  ...props
}: FormTextAreaProps) {
  const id = useId()
  return (
    <div className="flex flex-col">
      <div className="mb-2 flex items-center gap-6">
        {label && <FormLabel htmlFor={id}>{label}</FormLabel>}
        {maxLength && (
          <span className="text-xs font-normal text-dark-grey">
            {`Máximo de ${maxLength} caracteres`}
          </span>
        )}
      </div>

      <textarea
        maxLength={maxLength}
        className="h-32 w-full rounded-lg border border-light-grey bg-grey px-4 pt-3 text-lg font-semibold text-ateneo"
        id={id}
        {...props}
      />
    </div>
  )
}

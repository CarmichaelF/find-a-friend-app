import { ErrorMessage, Props } from '@hookform/error-message'
import { FieldErrors } from 'react-hook-form'

export function CustomErrorMessage<T extends FieldErrors>(
  props: Props<T, 'span'>,
) {
  return (
    <ErrorMessage className="font-bold text-opal-500" {...props} as="span" />
  )
}

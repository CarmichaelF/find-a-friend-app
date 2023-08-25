'use client'

import { ComponentProps, forwardRef, useState } from 'react'
import { EyeOff } from '../../icons/EyeOff'
import { EyeOn } from '../../icons/EyeOn'

interface FormInputProps extends ComponentProps<'input'> {
  label?: string
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ type, label, ...props }, ref) => {
    const isPasswordType = type === 'password'

    const [isOn, setIsOn] = useState(false)

    const handleToggleIsOn = () => {
      setIsOn(!isOn)
    }

    return (
      <div className="flex flex-col">
        {label && (
          <label className="mb-2 text-base font-semibold text-ateneo">
            {label}
          </label>
        )}
        <div className="relative h-16">
          <input
            {...props}
            type={isPasswordType ? (isOn ? 'text' : 'password') : type}
            className="h-full w-full rounded-lg border border-light-grey bg-grey px-4 text-lg font-semibold text-ateneo"
            ref={ref}
          />
          {isPasswordType && (
            <button
              type="button"
              onClick={handleToggleIsOn}
              className="absolute bottom-0 right-0 top-0 px-7"
            >
              {isOn ? (
                <EyeOn width={25} height={25} />
              ) : (
                <EyeOff width={25} height={25} />
              )}
            </button>
          )}
        </div>
      </div>
    )
  },
)

FormInput.displayName = 'FormInput'

export { FormInput }

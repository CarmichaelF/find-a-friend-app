'use client'

import { PlusButton } from '@/app/components/PlusButton'
import { FormInput } from '@/app/components/form/FormInput'
import { CloseSquare } from '@/app/components/icons/CloseSquare'
import { removeDuplicatesFromArray } from '@/utils/remove-duplicates-from-array'
import { ChangeEvent, ComponentProps, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { twMerge } from 'tailwind-merge'

interface FormPetRequirementsProps extends ComponentProps<'div'> {
  onRequirementsChange(requirements: string[]): void
}

export function FormPetRequirements({
  className,
  onRequirementsChange,
  ...props
}: FormPetRequirementsProps) {
  const [inputValue, setInputValue] = useState('')
  const [requirements, setRequirements] = useState<string[]>([] as string[])

  const handleOnInputChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setInputValue(ev.target.value)
  }

  const handleAddNewRequirement = () => {
    setRequirements((prevState) => {
      const { filteredArray, hadDuplicates } =
        removeDuplicatesFromArray<string>([...prevState, inputValue])
      if (hadDuplicates)
        toast.warning(
          'Requisito duplicado encontrado, por favor verifique os requisitos adicionados.',
        )
      return filteredArray
    })
  }

  const handleDeleteRequirement = (requirementName: string) => {
    const requirementsCopy = [...requirements]
    const requirementToBeDeletedIndex = requirementsCopy.findIndex(
      (requirement) => requirement === requirementName,
    )

    if (requirementToBeDeletedIndex === -1) return

    requirementsCopy.splice(requirementToBeDeletedIndex, 1)

    setRequirements(requirementsCopy)
  }

  useEffect(() => {
    onRequirementsChange(requirements)
  }, [requirements])

  return (
    <div className={twMerge('flex flex-col', className)} {...props}>
      <h2 className="text-4xl font-extrabold text-ateneo">
        Requesitos para adoção
      </h2>
      <hr className="my-7 bg-light-grey" />
      <FormInput
        onChange={handleOnInputChange}
        label="Requisito"
        placeholder="Defina um requisito para a adoção do pet"
      />
      <div className="mt-3 flex flex-col gap-2">
        {requirements.map((requirement) => (
          <div
            key={requirement}
            className="flex items-center gap-3 rounded-xl border border-light-grey p-2 px-3"
          >
            <span className="break-all text-sm font-normal text-ateneo">
              {requirement}
            </span>
            <button
              className="ml-auto"
              type="button"
              onClick={() => handleDeleteRequirement(requirement)}
            >
              <CloseSquare />
            </button>
          </div>
        ))}
      </div>
      <PlusButton onClick={handleAddNewRequirement} className="mt-3" />
    </div>
  )
}

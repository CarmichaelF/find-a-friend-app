'use client'

import { FormFileInput } from '@/app/components/form/FormFileInput'
import { FormInput } from '@/app/components/form/FormInput'
import { FormSelect } from '@/app/components/form/FormSelect'
import { FormTextArea } from '@/app/components/form/FormTextArea'
import { useGetMemoizedOptions } from '@/hooks/useGetMemoizedOptions'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export function RegisterForm({ className, ...props }: ComponentProps<'form'>) {
  const ageOptions = useGetMemoizedOptions('age')

  const energyOptions = useGetMemoizedOptions('energyLevel')

  const sizeOptions = useGetMemoizedOptions('petSize')

  const independenceOptions = useGetMemoizedOptions('independencyLevel')

  const environmentOptions = useGetMemoizedOptions('environment')

  return (
    <form
      className={twMerge('mt-10 flex flex-col gap-6', className)}
      {...props}
    >
      <FormInput label="Nome" />
      <FormInput label="Sobre" />
      <FormTextArea maxLength={300} label="Sobre" />
      <FormSelect options={ageOptions} label="Idade" />
      <FormSelect options={energyOptions} label="Porte" />
      <FormSelect options={sizeOptions} label="Nível de energia" />
      <FormSelect
        options={independenceOptions}
        label="Nível de independência"
      />
      <FormSelect options={environmentOptions} label="Ambiente" />
      <FormFileInput label="Fotos" />
    </form>
  )
}

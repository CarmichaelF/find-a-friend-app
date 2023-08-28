'use client'

import { FormFileInput } from '@/app/components/form/FormFileInput'
import { FormInput } from '@/app/components/form/FormInput'
import { FormSelect } from '@/app/components/form/FormSelect'
import { FormTextArea } from '@/app/components/form/FormTextArea'
import { useGetMemoizedOptions } from '@/hooks/useGetMemoizedOptions'
import { useEffect } from 'react'
import { FormPetRequirements } from './FormPetRequirements'
import { Button } from '@/app/components/Button'
import { CustomErrorMessage } from '@/app/components/form/CustomErrorMessage'
import { useRegisterPet } from './useRegisterPet'
import { usePets } from '@/hooks/usePets'

export function RegisterForm() {
  const { allFilters: allOptions } = usePets()

  const {
    formState: { errors },
    onSubmit,
    register,
    setValue,
    setError,
    handleSubmit,
  } = useRegisterPet()

  const ageOptions = useGetMemoizedOptions({
    allOptions,
    filter: 'age',
  })

  const energyOptions = useGetMemoizedOptions({
    allOptions,
    filter: 'energyLevel',
  })

  const sizeOptions = useGetMemoizedOptions({
    allOptions,
    filter: 'petSize',
  })

  const independenceOptions = useGetMemoizedOptions({
    allOptions,
    filter: 'independencyLevel',
  })

  const environmentOptions = useGetMemoizedOptions({
    allOptions,
    filter: 'environment',
  })

  const petTypeOptions = useGetMemoizedOptions({
    allOptions,
    filter: 'petType',
  })

  const handleOnUpload = (files: File[]) => {
    if (files.length !== 0) {
      setError('images', {
        type: 'manual',
        message: '',
      })
    }
    setValue('images', files)
  }

  const handleOnRequirementsChange = (requirements: string[]) => {
    setValue(
      'requirements',
      requirements.map((requirement) => {
        return { description: requirement }
      }),
    )
  }

  useEffect(() => {
    register('images')
    register('requirements')
  }, [])

  return (
    <form
      className={'mt-10 flex flex-col gap-6'}
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormInput label="Nome" {...register('name')} />
      <CustomErrorMessage errors={errors} name="name" />
      <FormTextArea
        maxLength={300}
        label="Sobre"
        {...register('description')}
      />
      <CustomErrorMessage errors={errors} name="description" />
      <FormSelect options={ageOptions} label="Idade" {...register('age')} />
      <CustomErrorMessage errors={errors} name="age" />
      <FormSelect
        options={sizeOptions}
        label="Porte"
        {...register('petSize')}
      />
      <CustomErrorMessage errors={errors} name="petSize" />
      <FormSelect
        options={energyOptions}
        label="Nível de energia"
        {...register('energyLevel')}
      />
      <CustomErrorMessage errors={errors} name="energyLevel" />
      <FormSelect
        options={independenceOptions}
        label="Nível de independência"
        {...register('independencyLevel')}
      />
      <CustomErrorMessage errors={errors} name="independencyLevel" />
      <FormSelect
        options={environmentOptions}
        label="Ambiente"
        {...register('environment')}
      />
      <CustomErrorMessage errors={errors} name="environment" />
      <FormSelect
        options={petTypeOptions}
        label="Tipo de pet"
        {...register('petType')}
      />
      <CustomErrorMessage errors={errors} name="petType" />
      <FormFileInput label="Fotos" multiple onUpload={handleOnUpload} />
      <CustomErrorMessage errors={errors} name="images" />
      <CustomErrorMessage errors={errors} name="singleErrorInput" />
      <FormPetRequirements
        className="mt-20"
        onRequirementsChange={handleOnRequirementsChange}
      />
      <Button className="mt-32 w-full font-extrabold" type="submit">
        Confirmar
      </Button>
    </form>
  )
}

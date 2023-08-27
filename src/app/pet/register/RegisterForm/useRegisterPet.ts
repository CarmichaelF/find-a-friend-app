'use client'

import { defaultFormSelectOption } from '@/app/components/form/FormSelect'
import { findAFriendAPI } from '@/services/api'
import { zodResolver } from '@hookform/resolvers/zod'
import { AxiosError } from 'axios'
import { useSession } from 'next-auth/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { z } from 'zod'

export function useRegisterPet() {
  const RegisterPetSchema = z.object({
    name: z.string().nonempty('O nome do pet é obrigatório.'),
    description: z.string().nonempty('A descrição do pet é obrigatória.'),
    age: z.string().nonempty('A idade do pet é obrigatória.'),
    petSize: z.string().nonempty('O Porte do pet é obrigatório.'),
    energyLevel: z
      .string()
      .nonempty('O nível de energia do pet é obrigatório.'),
    environment: z.string().nonempty('O ambiente do pet é obrigatório.'),
    independencyLevel: z
      .string()
      .nonempty('O nível  de independência do pet é obrigatório.'),
    petType: z.string().nonempty('O nome do pet é obrigatório.'),
    images: z
      .array(z.instanceof(File))
      .min(1, { message: 'Pelo menos 1 imagem do pet deve ser enviada.' }),
    requirements: z.array(
      z.object({
        description: z.string(),
      }),
    ),
  })

  type RegisterPetSchemaType = z.infer<typeof RegisterPetSchema>

  const { data } = useSession()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<RegisterPetSchemaType>({
    resolver: zodResolver(RegisterPetSchema),
    defaultValues: {
      age: defaultFormSelectOption.value,
      description: '',
      energyLevel: defaultFormSelectOption.value,
      environment: defaultFormSelectOption.value,
      images: [],
      independencyLevel: defaultFormSelectOption.value,
      name: '',
      petSize: defaultFormSelectOption.value,
      petType: defaultFormSelectOption.value,
      requirements: [],
    },
  })

  const onSubmit: SubmitHandler<RegisterPetSchemaType> = async (body) => {
    const formData = new FormData()
    body.images.forEach((file) => formData.append('files', file))
    const auth = { Authorization: `Bearer ${data?.access_token}` }

    try {
      const {
        data: { files: images },
      } = await findAFriendAPI.post('/pets/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          ...auth,
        },
      })
      console.log('images', images)
      const response = await findAFriendAPI.post(
        '/pets',
        { ...body, images },
        {
          headers: auth,
        },
      )
      console.log('response', response)
    } catch (error) {
      console.error('error', error)
      if (error instanceof AxiosError) toast.error(error.response?.data.message)
    }
  }

  return { onSubmit: handleSubmit(onSubmit), setValue, errors, register }
}

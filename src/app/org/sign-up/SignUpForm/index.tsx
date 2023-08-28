'use client'

import { FormButton } from '@/app/components/form/FormButton'
import { FormInput } from '@/app/components/form/FormInput'
import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { z } from 'zod'
import { toast } from 'react-toastify'
import { isObjectEmpty } from '@/utils/verify-empty-object'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { findAFriendAPI } from '@/services/api'
import { AxiosError } from 'axios'

export function SignUpForm() {
  const SignUpSchema = z
    .object({
      name: z.string().nonempty('O nome do responsável é obrigatório.'),
      email: z.string().email('O email é inválido.'),
      zipcode: z.string().nonempty('O CEP é obrigatório.'),
      address: z.string().nonempty('O endereço é obrigatório.'),
      phone: z.string().nonempty('O telefone é obrigatório.'),
      password: z.string().nonempty('A senha é obrigatória.'),
      confirmPassword: z
        .string()
        .nonempty('A confirmação de senha é obrigatória.'),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords don't match",
      path: ['confirmPassword'],
    })

  type SignUpSchemaType = z.infer<typeof SignUpSchema>

  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) })

  const onSubmit: SubmitHandler<SignUpSchemaType> = async (data) => {
    try {
      await findAFriendAPI.post('/orgs', data)
      await signIn('credentials', {
        redirect: false,
        ...{ email: data.email, password: data.password },
      })
      router.push('/pet/register')
    } catch (error) {
      console.error('error', error)
      if (error instanceof AxiosError) toast.error(error.response?.data.message)
    }
  }

  useEffect(() => {
    if (isObjectEmpty(errors)) return
    Object.values(errors).forEach((error) => toast(error.message))
  }, [errors])

  return (
    <form
      className="mt-24 flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormInput
        label="Nome do responsável"
        type="name"
        placeholder="João da Silva"
        autoComplete="name"
        {...register('name')}
      />
      <FormInput
        label="Email"
        type="email"
        placeholder="nome@email.com"
        autoComplete="email"
        {...register('email')}
      />
      <FormInput
        label="CEP"
        type="zipCode"
        placeholder="00000-000"
        autoComplete="zipcode"
        {...register('zipcode')}
      />
      <FormInput
        label="Endereço"
        type="address"
        placeholder="Rua dos Bobos, 0"
        autoComplete="address"
        {...register('address')}
      />
      <FormInput
        label="Whatsapp"
        type="phone"
        placeholder="(00) 00000-0000"
        autoComplete="phone"
        {...register('phone')}
      />
      <FormInput
        label="Senha"
        type="password"
        placeholder="********"
        autoComplete="new-password"
        {...register('password')}
      />
      <FormInput
        label="Confirme sua senha"
        type="password"
        placeholder="********"
        autoComplete="new-password"
        {...register('confirmPassword')}
      />

      <div className="mt-16 flex flex-col gap-5">
        <FormButton type="submit">Cadastrar</FormButton>
        <Link
          href="/org/sign-in"
          className="text-center text-xl font-extrabold text-ateneo underline"
        >
          Já possui conta?
        </Link>
      </div>
    </form>
  )
}

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

export function SignInForm() {
  const SignInSchema = z.object({
    email: z.string().email({
      message: 'E-mail inválido.',
    }),
    password: z
      .string()
      .min(8, {
        message: 'A senha precisa ter no mínimo 8 caracteres.',
      })
      .max(20, {
        message: 'A senha precisa ter no máximo 20 caracteres.',
      }),
  })

  type SignInSchemaType = z.infer<typeof SignInSchema>

  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchemaType>({ resolver: zodResolver(SignInSchema) })

  const onSubmit: SubmitHandler<SignInSchemaType> = async (data) => {
    const result = await signIn('credentials', {
      redirect: false,
      ...data,
    })
    if (result?.error) return toast(result.error)
    router.push('/pet/register')
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
        label="Email"
        type="email"
        placeholder="nome@email.com"
        autoComplete="email"
        {...register('email')}
      />
      <FormInput
        label="Senha"
        type="password"
        placeholder="*********"
        autoComplete="password"
        {...register('password')}
      />
      <div className="mt-16 flex flex-col gap-5">
        <FormButton type="submit">Login</FormButton>
        <FormButton type="button" color="secondary">
          <Link href="/org/sign-up">Cadastrar minha organização</Link>
        </FormButton>
      </div>
    </form>
  )
}

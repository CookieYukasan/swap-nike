'use client'

import { Input } from '@/components/Input'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z
  .object({
    email: z.string().email('Email must be a valid email address'),
    password: z
      .string()
      .min(6, 'Password must be at least 6 characters')
      .max(20, 'Password must be at most 20 characters'),
  })
  .transform((fields) => ({
    ...fields,
    email: fields.email.toLowerCase(),
  }))

type FormProps = z.infer<typeof schema>

export function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: zodResolver(schema),
    mode: 'all',
  })

  function handleSignIn(data: FormProps) {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(handleSignIn)}>
      <div className="mb-6">
        <label className="text-[#677681]" htmlFor="email">
          Email
        </label>
        <Input
          {...register('email')}
          hasError={!!errors?.email}
          className="mt-2"
          id="email"
          autoComplete="off"
          type="email"
          placeholder="Email"
        />
        {errors?.email && <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <label className="text-[#677681]" htmlFor="password">
          Password
        </label>
        <Input
          {...register('password')}
          hasError={!!errors?.password}
          className="mt-2"
          id="password"
          autoComplete="off"
          type="password"
          placeholder="Password"
        />
        {errors?.password && <p className="mt-2 text-sm text-red-500">{errors.password.message}</p>}
      </div>

      <div className="mt-2 text-end">
        <Link href="/forgot-password" className="font-bold text-[#1D1E20]">
          Forgot password
        </Link>
      </div>

      <button className="mt-6 w-full rounded bg-black py-4 text-white">Log in</button>
    </form>
  )
}

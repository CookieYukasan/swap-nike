'use client'

import { Input } from '@/components/Input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z
  .object({
    email: z.string().email('Email must be a valid email address'),
    password: z
      .string()
      .min(6, 'Password must be at least 6 characters')
      .max(20, 'Password must be at most 20 characters'),
    confirmPassword: z
      .string()
      .min(6, 'Password must be at least 6 characters')
      .max(20, 'Password must be at most 20 characters'),
    agreeTerms: z.boolean(),
  })
  .refine((fields) => fields.password === fields.confirmPassword, {
    message: 'Password and confirm password must be the same',
    path: ['confirmPassword'],
  })
  .refine(({ agreeTerms }) => agreeTerms === true, {
    message: 'You must agree to the terms and conditions',
    path: ['agreeTerms'],
  })
  .transform((fields) => ({
    ...fields,
    email: fields.email.toLowerCase(),
  }))

type FormProps = z.infer<typeof schema>

export function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: zodResolver(schema),
    mode: 'all',
  })

  function handleSignUp(data: FormProps) {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(handleSignUp)}>
      <div className="mb-6">
        <label className="text-[#677681]" htmlFor="email">
          Email
        </label>
        <Input {...register('email')} id="email" className="mt-2" autoComplete="off" type="email" placeholder="Email" />
        {errors?.email && <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>}
      </div>

      <div className="mb-6">
        <label className="text-[#677681]" htmlFor="password">
          Password
        </label>
        <Input
          {...register('password')}
          id="password"
          className="mt-2"
          autoComplete="off"
          type="password"
          placeholder="Password"
        />
        {errors?.password && <p className="mt-2 text-sm text-red-500">{errors.password.message}</p>}
      </div>

      <div>
        <label className="text-[#677681]" htmlFor="confirmPassword">
          Confirm password
        </label>
        <Input
          {...register('confirmPassword')}
          id="confirmPassword"
          className="mt-2"
          autoComplete="off"
          type="password"
          placeholder="Confirm password"
        />
        {errors?.confirmPassword && <p className="mt-2 text-sm text-red-500">{errors.confirmPassword.message}</p>}
      </div>

      <div className="group mt-6 flex w-full items-center">
        <div className="relative mr-2 h-6 w-6">
          <input
            {...register('agreeTerms')}
            type="checkbox"
            id="agreeTerms"
            className="h-full w-full cursor-pointer appearance-none rounded border border-zinc-200 accent-transparent outline-none checked:bg-black"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="white"
            className="bi bi-check pointer-events-none absolute -left-[2px] -top-[2px]"
            viewBox="0 0 15 15"
          >
            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />{' '}
          </svg>
        </div>
        {/* <label
          className="mr-2 h-[25px] w-[25px] rounded border border-zinc-200 bg-transparent group-checked:bg-black"
          htmlFor="agreeTerms"
        ></label> */}
        <label htmlFor="agreeTerms" className="font-medium text-[#7C8089]">
          I agree to the <span className="text-[#1D1E20]">Terms & Conditions</span>
        </label>
      </div>
      {errors?.agreeTerms && <p className="mt-2 text-sm text-red-500">{errors.agreeTerms.message}</p>}

      <button className="mt-6 w-full rounded bg-black py-4 text-white">Sign up</button>
    </form>
  )
}

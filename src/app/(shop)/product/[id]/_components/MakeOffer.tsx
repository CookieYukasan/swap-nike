'use client'

import formatBalance from '@/utils/formatBalance'
import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import { ReactNode } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

const userBalance = 92.76
const schema = z.object({
  amount: z
    .number({
      errorMap: () => {
        return { message: 'Please enter a valid amount.' }
      },
    })
    .min(1)
    .max(userBalance, `You don't have enough balance.`),
})

type FormProps = z.infer<typeof schema>

export default function MakeOffer({ children }: { children: ReactNode }) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    mode: 'all',
    resolver: zodResolver(schema),
  })

  const handleMakeOffer = (data: FormProps) => {
    console.log(data)
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-70 data-[state=open]:animate-overlayShow" />
        <Dialog.Content className="fixed left-[50%] top-[50%] max-h-[85vh] w-full max-w-[600px] translate-x-[-50%] translate-y-[-50%] rounded bg-white p-6 focus:outline-none data-[state=open]:animate-contentShow">
          <Dialog.Title className="text-xl font-bold">Make a offer</Dialog.Title>
          <Dialog.Description className="mb-5 mt-2 leading-normal">
            Make offer to the owner of this product
          </Dialog.Description>
          <form onSubmit={handleSubmit(handleMakeOffer)} className="my-8">
            <label className="text-[#677681]" htmlFor="amount">
              Amount
            </label>
            {/** TODO: make this input mask currency */}
            <input
              {...register('amount', {
                setValueAs: (value) => Number(value),
              })}
              id="amount"
              className="mt-2 w-full rounded border border-[#CFD9DE] p-4 transition-colors invalid:border-red-600 focus:border-zinc-600 focus:outline-none"
              autoComplete="off"
              type="number"
              placeholder="Enter amount"
            />
            {errors?.amount && (
              <div className="mt-2 flex items-center justify-between">
                <p className="text-sm text-red-500">{errors.amount.message}</p>
                {errors.amount.type === 'too_big' && (
                  <p className="text-sm text-red-500">Your balance is {formatBalance(userBalance)}</p>
                )}
              </div>
            )}
          </form>
          <div className="flex justify-end">
            <Dialog.Close asChild>
              <button
                className="w-full rounded bg-black py-4 font-medium text-white"
                onClick={handleSubmit(handleMakeOffer)}
              >
                Make offer
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button className="absolute right-6 top-6 appearance-none items-center justify-center" aria-label="Close">
              <span className="material-symbols-outlined !text-3xl">close</span>
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

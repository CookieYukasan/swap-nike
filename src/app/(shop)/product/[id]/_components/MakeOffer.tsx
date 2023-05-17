'use client'

import { MaskInput } from '@/components/Input'
import { LoadingSpinner } from '@/components/LoadingSpinner'
import { Modal } from '@/components/Modal'
import { delay } from '@/utils/delay'
import formatCurrency from '@/utils/formatCurrency'
import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import { ReactNode, useState } from 'react'
import { useForm } from 'react-hook-form'
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
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormProps>({
    mode: 'all',
    criteriaMode: 'all',
    resolver: zodResolver(schema),
  })
  const [isLoaded, setIsLoaded] = useState(false)

  const handleMakeOffer = async (data: FormProps) => {
    setIsLoaded(true)
    try {
      await delay(3000)
    } catch (error) {
      console.log(error)
    }
    setIsLoaded(false)
  }

  return (
    <Modal trigger={children} defaultOpen={false}>
      <Dialog.Title className="text-xl font-bold">Make a offer</Dialog.Title>
      <Dialog.Description className="mb-5 mt-2 leading-normal">Make your best offer!</Dialog.Description>
      <form onSubmit={handleSubmit(handleMakeOffer)} className="my-8">
        <label className="text-[#677681]" htmlFor="amount">
          Amount
        </label>
        {/** TODO: make this input mask currency */}
        {/* <input
          {...register('amount', {
            setValueAs: (value) => Number(value),
          })}
          id="amount"
          className="mt-2 w-full rounded border border-[#CFD9DE] p-4 transition-colors invalid:border-red-600 focus:border-zinc-600 focus:outline-none"
          autoComplete="off"
          type="number"
          placeholder="Enter amount"
        /> */}
        <MaskInput
          mask={formatCurrency}
          type="number"
          id="amount"
          autoComplete="off"
          placeholder="Enter amount"
          {...register('amount', {
            setValueAs: (value) => Number(value),
          })}
        />
        {errors?.amount && (
          <div className="mt-2 flex items-center justify-between">
            <p className="text-sm text-red-500">{errors.amount.message}</p>
            {errors.amount.type === 'too_big' && (
              <p className="text-sm text-red-500">Your balance is {formatCurrency(userBalance)}</p>
            )}
          </div>
        )}
      </form>
      <div className="flex justify-end">
        <Dialog.Close asChild>
          <button
            className="flex w-full items-center justify-center rounded bg-black py-4 font-medium text-white"
            onClick={handleSubmit(handleMakeOffer)}
          >
            {isLoaded ? <LoadingSpinner /> : 'Make offer'}
          </button>
        </Dialog.Close>
      </div>
      <Dialog.Close asChild>
        <button className="absolute right-6 top-6 appearance-none items-center justify-center" aria-label="Close">
          <span className="material-symbols-outlined !text-3xl">close</span>
        </button>
      </Dialog.Close>
    </Modal>
  )
}

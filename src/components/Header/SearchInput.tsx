'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z
  .object({
    search: z.string(),
  })
  .transform((fields) => ({
    search: fields.search.toLowerCase(),
  }))

type FormProps = z.infer<typeof schema>

export function SearchInput() {
  const { register, handleSubmit } = useForm<FormProps>({
    mode: 'all',
    resolver: zodResolver(schema),
  })
  const router = useRouter()

  function handleSearch(data: FormProps) {
    router.push(`/search?query=${data.search}`)
  }

  return (
    <form onSubmit={handleSubmit(handleSearch)}>
      <div className="relative flex">
        <Image src="/icons/search.svg" alt="Search" width={24} height={24} className="absolute left-4 top-4" />
        <input
          {...register('search')}
          id="search"
          className="h-[56px] rounded border border-[#CFD9DE] p-4 pl-12 transition-colors focus:border-zinc-600 focus:outline-none"
          autoComplete="off"
          type="text"
          placeholder="Find your sneaker"
        />
      </div>
    </form>
  )
}

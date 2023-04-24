'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Modal } from '../Modal'
import { SneakerProps } from '@/@types'
import Link from 'next/link'
import { limitString } from '@/utils/limitString'

const schema = z
  .object({
    search: z.string(),
  })
  .transform((fields) => ({
    search: fields.search.toLowerCase(),
  }))

type FormProps = z.infer<typeof schema>

const sneakerData: SneakerProps[] = [
  {
    id: 884894297050,
    title: 'Nike Air Max 97 Off-White Menta',
    date: '2022-07-10T12:10:05.225Z',
    images: [
      'https://loremflickr.com/800/500/sneakers?lock=61487',
      'https://loremflickr.com/800/500/sneakers?lock=90004',
      'https://loremflickr.com/800/500/sneakers?lock=39963',
      'https://loremflickr.com/800/500/sneakers?lock=10992',
      'https://loremflickr.com/800/500/sneakers?lock=5632',
      'https://loremflickr.com/800/500/sneakers?lock=69289',
    ],
    author: {
      id: 905168613649,
      userName: 'Alessandra79',
      email: 'Jodie_Welch82@yahoo.com',
      avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/917.jpg',
    },
    isFavorite: true,
    sizes: [28],
    isAvailable: true,
    actionRemainingDate: '2023-05-02',
    currentBid: 36.17,
  },
  {
    id: 884894297050,
    title: 'Nike Air Force 1 Low',
    date: '2022-07-10T12:10:05.225Z',
    images: [
      'https://loremflickr.com/800/500/sneakers?lock=90004',
      'https://loremflickr.com/800/500/sneakers?lock=61487',
      'https://loremflickr.com/800/500/sneakers?lock=39963',
      'https://loremflickr.com/800/500/sneakers?lock=10992',
      'https://loremflickr.com/800/500/sneakers?lock=5632',
      'https://loremflickr.com/800/500/sneakers?lock=69289',
    ],
    author: {
      id: 905168613649,
      userName: 'Alessandra79',
      email: 'Jodie_Welch82@yahoo.com',
      avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/917.jpg',
    },
    isFavorite: true,
    sizes: [28],
    isAvailable: true,
    actionRemainingDate: '2023-05-02',
    currentBid: 36.17,
  },
  {
    id: 884894297050,
    title: 'Nike Air Jordan 1 Low',
    date: '2022-07-10T12:10:05.225Z',
    images: [
      'https://loremflickr.com/800/500/sneakers?lock=69289',
      'https://loremflickr.com/800/500/sneakers?lock=61487',
      'https://loremflickr.com/800/500/sneakers?lock=90004',
      'https://loremflickr.com/800/500/sneakers?lock=39963',
      'https://loremflickr.com/800/500/sneakers?lock=10992',
      'https://loremflickr.com/800/500/sneakers?lock=5632',
    ],
    author: {
      id: 905168613649,
      userName: 'Alessandra79',
      email: 'Jodie_Welch82@yahoo.com',
      avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/917.jpg',
    },
    isFavorite: true,
    sizes: [28],
    isAvailable: true,
    actionRemainingDate: '2023-05-02',
    currentBid: 36.17,
  },
]

export function MobileSearchInput() {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const products = search.length ? sneakerData.filter((product) => product.title.toLowerCase().includes(search)) : []

  return (
    <>
      <Modal
        open={open}
        onOpenChange={setOpen}
        contentClassName="fixed left-[50%] top-[50px] max-h-[85vh] w-[95vw] max-w-[600px] translate-x-[-50%] rounded p-6 focus:outline-none data-[state=open]:animate-contentShow"
        trigger={
          <div className="flex h-[50px] w-[50px] items-center justify-center rounded border border-[#CFD9DE] p-4">
            <span className="material-symbols-outlined !text-2xl">search</span>
          </div>
        }
      >
        <input
          onChange={onChangeSearch}
          type="text"
          placeholder="Find your sneaker"
          className="w-full rounded border border-[#CFD9DE] p-4 transition-colors invalid:border-red-600 focus:border-zinc-600 focus:outline-none"
        />

        <div className="mt-4 space-y-4">
          {products.map((item, index) => (
            <div className="flex rounded border border-[#CFD9DE] bg-white p-4" key={index}>
              <img src={item.images[0]} alt="Sneaker Photo rounded" className="h-[56px] w-[56px]" />
              <div className="ml-4">
                <h3 className="mb-2 font-bold text-[#1D1E20]">{limitString(item.title, 20)}</h3>
                <div className="flex items-center">
                  <Link href={`/product/${item.id}`} className="text-black" onClick={() => setOpen(false)}>
                    See details
                  </Link>
                  <span className="material-symbols-outlined ml-2">arrow_forward</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </>
  )
}

export function DesktopSearchInput() {
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

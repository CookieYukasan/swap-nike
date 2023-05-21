import { SneakerProps } from '@/@types'
import { Button } from '@/components/Button'
import { NextHighlightDate } from '@/components/NextHighlightDate'
import { SneakerCard } from '@/components/SneakerCard'
import { fetchWrapper } from '@/utils/fetchWrapper'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FeedbackSwiper } from './_components/FeedbackSwiper'

export const revalidate = 60 // in seconds

const expectData = [
  {
    title: 'Lorem ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    iconName: 'mood',
  },
  {
    title: 'Lorem ipsum 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    iconName: 'verified_user',
  },
  {
    title: 'Worldwide deliveries',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    iconName: 'flight_takeoff',
  },
  {
    title: 'Lorem ipsum 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    iconName: 'schedule',
  },
]

export const metadata: Metadata = {
  title: 'Home',
}

async function fetchData() {
  const highlightsData = await fetchWrapper<SneakerProps[]>('/sneakers?limit=4', {
    method: 'GET',
  })

  const exchangesData = await fetchWrapper<SneakerProps[]>('/sneakers?limit=8', {
    method: 'GET',
  })

  return {
    highlightsData,
    exchangesData,
  }
}

export default async function Home() {
  const { exchangesData, highlightsData } = await fetchData()

  const nextHighlightDate = new Date()
  nextHighlightDate.setDate(nextHighlightDate.getDate() + 1)

  return (
    <main className="container mx-auto mt-8">
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#1D1E20]">Nike Highlight</h1>
          <p className="mt-4 font-medium text-[#7C8089]">Nike most visited of the week</p>
        </div>
        <div className="mt-6 text-center md:mt-0 md:text-inherit">
          <h1 className="mb-2 font-medium text-[#1D1E20] md:mb-4">The next highlight will be on</h1>
          <NextHighlightDate nextHighlightDate={nextHighlightDate} />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {highlightsData.map((item) => (
          <SneakerCard key={item.id} data={item} />
        ))}
      </div>
      <div className="mt-6 grid-cols-12 md:mt-24 md:grid">
        <div className="relative col-span-3 hidden md:block">
          <Image src="/symbol.png" width={166} height={93} alt="Nike Symbol" className="absolute -top-12" />
          <Image
            src="https://source.unsplash.com/lJ7iAZxplpc"
            width={310}
            height={380}
            alt="Sneaker"
            className="h-[350px] w-full rounded object-cover"
          />
          <div className="absolute bottom-0 h-2/3 w-full rounded bg-gradient-to-t from-zinc-800 to-transparent">
            <div className="absolute bottom-0 w-full px-4 py-4">
              <h1 className="text-xl font-bold text-white">Bruce Orozco</h1>
              <div className="mt-2 w-full rounded bg-black bg-opacity-80 py-4">
                <p className="text-center font-bold text-white">Sold off</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6 md:mx-8">
          <h1 className="mb-4 text-3xl font-bold text-[#1D1E20]">Feedback</h1>
          <FeedbackSwiper />
        </div>
        <Image
          src="/visual-arts-nike.png"
          width={312}
          height={440}
          alt="Illustration Art"
          className="col-span-3 hidden md:block"
        />
      </div>
      <div className="mt-8">
        <h1 className="text-3xl font-bold text-[#1D1E20]">Exchanges available</h1>
        <p className="mt-4 font-medium text-[#7C8089]">Find your new love</p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {exchangesData.map((item) => (
            <SneakerCard key={item.id} data={item} />
          ))}
        </div>
        <div className="mx-auto mt-8 max-w-md">
          <Link href="/sneakers">
            <Button>
              See more Nike <span className="material-symbols-outlined ml-2 text-white">arrow_forward</span>
            </Button>
          </Link>
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-3xl font-bold text-[#1D1E20]">What to expect from Swap Nike</h1>
        <p className="mt-4 font-medium text-[#7C8089]">Be surprised</p>

        <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
          {expectData.map((item) => (
            <div key={item.title} className="flex items-center">
              <span className="material-symbols-outlined !text-5xl">{item.iconName}</span>
              <div className="ml-5">
                <h1 className="text-xl font-bold text-[#1D1E20]">{item.title}</h1>
                <p className="mt-2 text-[#7C8089]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="relative rounded">
          <Image
            src="https://source.unsplash.com/random?nike"
            alt="Sneaker"
            width={500}
            height={350}
            className="h-[350px] w-full rounded object-cover"
          />
          <div className="absolute bottom-0 h-full w-full rounded bg-gradient-to-t from-black to-transparent">
            <div className="absolute bottom-0 px-4 pb-6">
              <h1 className="mb-2 text-xl font-bold text-white">Nike Air Max 270</h1>
              <p className="text-white">
                Take the opportunity to learn from home, without a fixed schedule and at your own pace. It is you who
                defines your availability.
              </p>
            </div>
          </div>
        </div>
        <div className="relative rounded">
          <Image
            src="https://source.unsplash.com/random?airmax97"
            alt="Sneaker"
            width={500}
            height={350}
            className="h-[350px] w-full rounded object-cover"
          />
          <div className="absolute bottom-0 h-full w-full rounded bg-gradient-to-t from-black to-transparent">
            <div className="absolute bottom-0 px-4 pb-6">
              <h1 className="mb-2 text-xl font-bold text-white">Lorem ipsum</h1>
              <p className="text-white">
                Take the opportunity to learn from home, without a fixed schedule and at your own pace. It is you who
                defines your availability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

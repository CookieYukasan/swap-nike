'use client'

import { Avatar } from '@/components/Avatar'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'

import 'swiper/css'

type FeedbackProps = {
  authorName: string
  description: string
  avatar: string
}

const feedbacksArr: FeedbackProps[] = [
  {
    authorName: 'Cookie',
    description: `So far I've had nothing but positives experiences with Nike and their sneakers, they're always well built and last me quite a few years. The only downside is they tend to be a bit pricey. But as I'm a really big fan of the brand and everything they stand for I'll continue to support them with my purchase decisions.
    <br/><br/>
    But thanks to Swap nike I can change my shoes without having to buy a new one.`,
    avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1.jpg',
  },
  {
    authorName: 'Nightmare',
    description: `So far I've had nothing but positives experiences with Nike and their sneakers, they're always well built and last me quite a few years. The only downside is they tend to be a bit pricey. But as I'm a really big fan of the brand and everything they stand for I'll continue to support them with my purchase decisions.
    <br/><br/>
    But thanks to Swap nike I can change my shoes without having to buy a new one.`,
    avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/2.jpg',
  },
  {
    authorName: 'Stunner',
    description: `So far I've had nothing but positives experiences with Nike and their sneakers, they're always well built and last me quite a few years. The only downside is they tend to be a bit pricey. But as I'm a really big fan of the brand and everything they stand for I'll continue to support them with my purchase decisions.
    <br/><br/>
    But thanks to Swap nike I can change my shoes without having to buy a new one.`,
    avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/5.jpg',
  },
]

function Feedback({ className, data }: { className?: string; data?: FeedbackProps }) {
  return (
    <div className={`relative h-full ${className}`}>
      <div className="flex items-center">
        <Avatar src={data?.avatar || '/images/avatar.png'} size={60} alt="User Photo" />
        <p className="ml-4 font-medium text-[#1D1E20]">{data?.authorName}</p>
      </div>
      <p
        className="mt-4 text-[#1D1E20]"
        dangerouslySetInnerHTML={{
          __html: data?.description || '',
        }}
      ></p>
      <div className="absolute bottom-0 right-0 hidden space-x-6 md:block">
        <span className="material-symbols-outlined cursor-pointer !text-3xl">arrow_back_ios</span>
        <span className="material-symbols-outlined cursor-pointer !text-3xl">arrow_forward_ios</span>
      </div>
    </div>
  )
}

export function FeedbackSwiper() {
  return (
    <>
      <Feedback className="hidden md:block" data={feedbacksArr[0]} />

      <div className="md:hidden">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {feedbacksArr.map((item) => (
            <SwiperSlide key={item.authorName}>
              <Feedback data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

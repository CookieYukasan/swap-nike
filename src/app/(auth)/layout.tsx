import Image from 'next/image'
import { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex h-screen justify-between">
      <div className="mx-16 mt-12 w-1/3">{children}</div>
      <div className="relative h-full w-2/3">
        <Image
          className="h-full object-cover"
          src="https://source.unsplash.com/random/1920x1080/?sneaker"
          width={1920}
          height={1080}
          alt="Sneaker Image"
        />
        <div className="absolute bottom-0 h-full w-full bg-gradient-to-t from-black to-transparent">
          <div className="absolute bottom-0 mb-24 ml-28">
            <h1 className="mb-4 text-4xl font-bold text-white">Just change it</h1>
            <span className="text-xl text-white">
              Join Nike Biggest Lovers <br />
              Trade your rare sneakers with other Nike Lovers
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}

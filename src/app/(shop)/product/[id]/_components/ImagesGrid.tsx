'use client'

import { useState } from 'react'

type Props = {
  images: string[]
  children: React.ReactNode
  isSold: boolean
}

export default function ImagesGrid({ images, children, isSold }: Props) {
  const [activeImage, setActiveImage] = useState(images[0])

  return (
    <>
      <div className="col-span-1">
        <div className="space-y-6">
          {images.map((imageUrl) => (
            <img
              key={imageUrl}
              src={imageUrl}
              alt="Sneaker"
              className="mx-auto h-[90px] w-[88px] cursor-pointer rounded border border-[#CFD9DE] bg-zinc-300 object-cover transition-transform hover:scale-105"
              onClick={() => setActiveImage(imageUrl)}
            />
          ))}
        </div>
      </div>
      <div className="col-span-6">
        <div className="relative">
          <img src={activeImage} alt="Sneaker Thumbnail" className="h-[600px] w-full rounded object-cover" />
          {isSold && (
            <div className="absolute left-1/2 top-1/2 -ml-32 w-72 rounded bg-black bg-opacity-70 py-4">
              <p className="text-center font-bold text-white">Sold off</p>
            </div>
          )}
        </div>
        {children}
      </div>
    </>
  )
}

'use client'

import { cn } from '@/utils/classNames'
import { CameraSlash, Image } from '@phosphor-icons/react'
import NextImage, { ImageProps } from 'next/image'
import { useState } from 'react'

export function SneakerCardImage({ src, alt, ...props }: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isError, setIsError] = useState(false)
  const imageHeight = isLoaded ? 'h-[350px]' : 'h-0'

  return (
    <>
      <NextImage
        src={src}
        width={500}
        height={500}
        className={cn('w-full rounded-t object-cover', imageHeight)}
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsError(true)}
        {...props}
        alt={alt}
      />
      {(!isLoaded || isError) && (
        <div className="flex h-[350px] w-full animate-pulse items-center justify-center rounded-t bg-gray-200 object-cover">
          {isError && <CameraSlash size={100} weight="thin" color="#AAA" />}
          {!isLoaded && <Image size={100} weight="thin" color="#AAA" />}
        </div>
      )}
    </>
  )
}

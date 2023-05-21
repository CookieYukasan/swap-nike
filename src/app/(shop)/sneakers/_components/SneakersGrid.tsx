'use client'

import { SneakerCard } from '@/components/SneakerCard'
import { useSneakersStore } from '@/store/useSneakersStore'

export function SneakersGrid() {
  const sneakers = useSneakersStore((state) => state.sneakers)

  return (
    <div className="grid w-full grid-cols-3 gap-6">
      {sneakers.map((sneaker) => (
        <SneakerCard key={sneaker.id} data={sneaker} />
      ))}
    </div>
  )
}

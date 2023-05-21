'use client'

import { SneakerProps } from '@/@types'
import { Button } from '@/components/Button'
import { useSneakersStore } from '@/store/useSneakersStore'
import { fetchWrapper } from '@/utils/fetchWrapper'
import { useState } from 'react'

export function ViewMoreButton() {
  const [isLoading, setIsLoading] = useState(false)
  const addSneakers = useSneakersStore((state) => state.addSneakers)

  async function fetchSneakers() {
    setIsLoading(true)
    try {
      const sneakersData = await fetchWrapper<SneakerProps[]>('/sneakers?limit=6', { method: 'GET' })
      addSneakers(sneakersData ?? [])
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  return (
    <Button onClick={fetchSneakers} className="mt-8 max-w-md" isLoading={isLoading}>
      View more sneakers
    </Button>
  )
}

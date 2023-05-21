'use client'

import { SneakerProps } from '@/@types'
import { useSneakersStore } from '@/store/useSneakersStore'
import { useRef } from 'react'

export const InitializerStore = ({ sneakers }: { sneakers: SneakerProps[] }) => {
  const initializer = useRef(false)

  if (!initializer.current) {
    useSneakersStore.setState({ sneakers })
    initializer.current = true
  }

  return null
}

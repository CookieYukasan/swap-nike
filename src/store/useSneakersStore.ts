import { SneakerProps } from '@/@types'
import { create } from 'zustand'

interface StoreProps {
  sneakers: SneakerProps[]
  addSneakers: (sneakers: SneakerProps[]) => void
  fetchSneakers: () => Promise<void>
}

export const useSneakersStore = create<StoreProps>((set, get) => ({
  sneakers: [] as SneakerProps[],
  addSneakers: (sneakers) => set((state) => ({ ...state, sneakers: [...state.sneakers, ...sneakers] })),
  fetchSneakers: async () => {
    const sneakers = await fetch('/api/sneakers?limit=6')
      .then((res) => res.json())
    const newSneakersArr = { ...get().sneakers, ...sneakers }
    set((state) => ({ ...state, sneakers: newSneakersArr }))
  },
}))
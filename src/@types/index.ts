export type SneakerProps = {
  id: number
  title: string
  date: string
  images: string[]
  author: UserProps
  isFavorite: boolean
  sizes: number[]
  isAvailable: boolean
  soldValue?: number
  buyer?: UserProps
  currentBid?: number
  actionRemainingDate?: string
  offers?: OfferProps[]
}

export type OfferProps = {
  id: number
  value: number
  author: UserProps
  createdAt: string
}

export type UserProps = {
  id: number
  userName: string
  email: string
  avatar: string
}

export type SneakerProps = {
  id: number | string
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
  authorId: number | string
  createdAt: string
}

export type UserProps = {
  id: number
  userName: string
  avatar: string
}

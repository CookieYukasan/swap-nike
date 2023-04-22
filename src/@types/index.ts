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
}

export type UserProps = {
  id: number
  userName: string
  email: string
  avatar: string
}

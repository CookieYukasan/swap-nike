import { SneakerProps, UserProps } from '@/@types'
import { faker } from '@faker-js/faker'
import path from 'path'
import { promises as fs } from 'fs'

export const generateUser = (quantity = 1) => {
  const users: UserProps[] = []

  for (let i = 0; i < quantity; i++) {
    users.push({
      id: Number(faker.random.numeric(12)),
      userName: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
    })
  }

  return users
}

export const generateSneaker = (forceData?: object) => {
  const imagesCount = faker.datatype.number({ min: 4, max: 6 })
  const images = Array.from({ length: imagesCount }, () => faker.image.imageUrl(800, 500, 'sneakers', true))
  const isAvailable = faker.datatype.boolean()

  const sneaker: SneakerProps = {
    id: Number(faker.random.numeric(12)),
    title: faker.commerce.productName(),
    date: faker.date.past().toISOString(),
    images,
    author: generateUser()[0],
    isFavorite: faker.datatype.boolean(),
    sizes: [Number(faker.datatype.number({ min: 28, max: 42 }))],
    isAvailable,
    ...forceData,
  }

  if (!isAvailable) {
    sneaker.buyer = generateUser()[0]
    sneaker.soldValue = Number(faker.finance.amount())
  } else {
    sneaker.currentBid = Number(faker.finance.amount())
  }

  return sneaker
}

export async function getDatabase<T = unknown>(databaseTable: string) {
  const jsonDirectory = path.join(process.cwd(), 'json')
  const data = await fs.readFile(jsonDirectory + '/data.json', 'utf-8')

  return JSON.parse(data)[databaseTable] as T
}

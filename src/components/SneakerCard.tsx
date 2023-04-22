import { SneakerProps } from '@/@types'
import Link from 'next/link'

export function SneakerCard({ data }: { data: SneakerProps }) {
  const { id, title, date, images } = data

  const dateFormatted = new Date(date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })

  return (
    <div className="rounded-lg border border-[#CFD9DE] transition-transform duration-300 hover:-translate-y-2 hover:translate-x-2">
      <Link href={`/product/${id}`}>
        <img src={images[0]} alt="Sneaker" className="h-[350px] w-full rounded-t object-cover" />
      </Link>
      <div className="p-4">
        <h1 className="font-medium text-[#1D1E20]">{title}</h1>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center">
            <span className="material-symbols-outlined">calendar_today</span>
            <span className="ml-2 text-[#7C8089]">{dateFormatted}</span>
          </div>
          <Link href={`/product/${id}`} className="flex items-center">
            <span className="mr-2 font-bold text-black">Negotiate</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

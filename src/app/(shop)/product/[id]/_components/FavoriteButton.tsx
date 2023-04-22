'use client'

import { useState } from 'react'

export default function FavoriteButton({ isFavorite }: { isFavorite: boolean }) {
  const [isFavoriteState, setIsFavoriteState] = useState(isFavorite)

  return (
    <div className="mt-2 flex items-center">
      <p className="mr-2 cursor-pointer font-medium text-black" onClick={() => setIsFavoriteState((state) => !state)}>
        Favorite
      </p>
      <span
        onClick={() => setIsFavoriteState((state) => !state)}
        className={`material-symbols-outlined cursor-pointer select-none !text-[24px] transition-transform ${
          isFavoriteState ? 'fill-icon text-red-600' : 'text-black'
        }`}
      >
        favorite
      </span>
    </div>
  )
}

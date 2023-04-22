'use client'

import { useEffect, useState } from 'react'

export function NextHighlightDate({ nextHighlightDate }: { nextHighlightDate: Date }) {
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const { days, hours, minutes, seconds } = getRemainingTime()
      setRemainingTime({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  function getRemainingTime() {
    const difference = nextHighlightDate.getTime() - new Date().getTime()
    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((difference / 1000 / 60) % 60)
    const seconds = Math.floor((difference / 1000) % 60)
    return { days, hours, minutes, seconds }
  }

  return (
    <div className="flex items-center justify-center space-x-4 rounded bg-black py-4">
      {remainingTime.days > 0 && <p className="font-bold text-white">{remainingTime.days}D</p>}
      <p className="font-bold text-white">{remainingTime.hours}H</p>
      <p className="font-bold text-white">{remainingTime.minutes}M</p>
      <p className="font-bold text-white">{remainingTime.seconds}S</p>
    </div>
  )
}

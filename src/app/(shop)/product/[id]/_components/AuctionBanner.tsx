'use client'

import { useEffect, useState } from 'react'

export function AuctionBanner({ auctionRemainingDate }: { auctionRemainingDate: string }) {
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
    const difference = new Date(auctionRemainingDate).getTime() - new Date().getTime()
    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((difference / 1000 / 60) % 60)
    const seconds = Math.floor((difference / 1000) % 60)
    return { days, hours, minutes, seconds }
  }
  return (
    <div className="bg-black py-4 text-center text-white">
      <h1 className="font-medium">AUCTION ENDS IN</h1>
      <div className="mt-2 flex items-center justify-center space-x-4 text-2xl font-bold">
        <p>{remainingTime.days}D</p>
        <p>{remainingTime.hours}H</p>
        <p>{remainingTime.minutes}M</p>
        <p>{remainingTime.seconds}S</p>
      </div>
    </div>
  )
}

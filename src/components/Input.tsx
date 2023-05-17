'use client'

import { cn } from '@/utils/classNames'
import React, { forwardRef, useState } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ type, hasError, ...props }, ref) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true)

  const handleTogglePasswordVisibility = () => setIsPasswordVisible((prevState) => !prevState)

  const visibilityType = type === 'password' ? (isPasswordVisible ? 'password' : 'text') : type
  return (
    <div
      className={cn(
        'h-14 rounded border border-[#CFD9DE] transition-colors focus-within:border-zinc-600 focus-within:outline-none',
        {
          'border-red-600': hasError,
        },
      )}
    >
      <input type={visibilityType} ref={ref} className="h-full w-full bg-transparent px-4 outline-none" {...props} />
    </div>
  )
})

interface MaskInputProps extends InputProps {
  mask: (value: number) => string
}

export const MaskInput = forwardRef<HTMLInputElement, MaskInputProps>(({ mask, ...props }, ref) => {
  return (
    <Input
      onChange={(e) => {
        e.target.value = mask(Number(e.target.value))
      }}
      ref={ref}
      {...props}
    />
  )
})

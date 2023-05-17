'use client'

import { cn } from '@/utils/classNames'
import { Eye, EyeSlash } from '@phosphor-icons/react'
import React, { forwardRef, useState } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ type, className, hasError, ...props }, ref) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true)

  const handleTogglePasswordVisibility = () => setIsPasswordVisible((prevState) => !prevState)

  const visibilityType = type === 'password' ? (isPasswordVisible ? 'password' : 'text') : type
  return (
    <div
      className={cn(
        className,
        'flex h-14 items-center justify-between rounded ring-1 ring-[#CFD9DE] transition-colors',
        'focus-within:ring-zinc-600',
        {
          'ring-red-600': hasError,
        },
      )}
    >
      <input
        type={visibilityType}
        ref={ref}
        className={cn('h-full w-full bg-transparent px-4 outline-none')}
        {...props}
      />
      {type === 'password' && (
        <button type="button" className="pr-4" onClick={handleTogglePasswordVisibility}>
          {isPasswordVisible ? <EyeSlash size={32} weight="thin" /> : <Eye size={32} weight="thin" />}
        </button>
      )}
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

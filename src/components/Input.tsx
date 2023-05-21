'use client'

import { cn } from '@/utils/classNames'
import { Eye, EyeSlash } from '@phosphor-icons/react'
import React, { forwardRef, useState } from 'react'
import CurrencyInput, { CurrencyInputProps } from 'react-currency-input-field'

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

interface MaskCurrencyInputProps extends CurrencyInputProps {
  hasError?: boolean
}

export const MaskCurrencyInput = forwardRef<HTMLInputElement, MaskCurrencyInputProps>(
  ({ className, hasError, ...props }, ref) => {
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
        <CurrencyInput
          fixedDecimalLength={2}
          decimalsLimit={2}
          prefix="R$ "
          decimalSeparator=","
          groupSeparator="."
          className={cn('h-full w-full bg-transparent px-4 outline-none')}
          ref={ref}
          {...props}
        />
      </div>
    )
  },
)

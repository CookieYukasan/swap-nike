'use client'

import { cn } from '@/utils/classNames'
import { LoadingSpinner } from './LoadingSpinner'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
  loadingContent?: React.ReactNode
}

export function Button({ className, children, isLoading, loadingContent, ...props }: ButtonProps) {
  return (
    <button
      className={cn('flex h-14 w-full items-center justify-center rounded bg-black py-4 text-white', className)}
      {...props}
    >
      {!isLoading && children}

      {isLoading && !loadingContent && <LoadingSpinner />}
      {isLoading && loadingContent && loadingContent}
    </button>
  )
}

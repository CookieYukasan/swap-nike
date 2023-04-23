import { HTMLProps } from 'react'

const defaultClasses =
  'rounded border border-[#CFD9DE] p-4 transition-colors invalid:border-red-600 focus:border-zinc-600 focus:outline-none'

export function Input({ type = 'text', className, ...rest }: HTMLProps<HTMLInputElement>) {
  return (
    <div>
      <input {...rest} type={type} className={`${defaultClasses} ${className}`} />
    </div>
  )
}

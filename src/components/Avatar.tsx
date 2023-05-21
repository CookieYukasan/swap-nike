import { cn } from '@/utils/classNames'

type AvatarProps = {
  src: string
  alt: string
  size: number
  className?: string
}

export function Avatar({ src, alt, size, className }: AvatarProps) {
  return <img src={src} width={size} height={size} alt={alt} className={cn('rounded-full object-cover', className)} />
}

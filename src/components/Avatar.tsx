import Image from 'next/image'

type AvatarProps = {
  src: string
  alt: string
  size: number
}

export function Avatar({ src, alt, size }: AvatarProps) {
  // TODO: fix avatar height size bug
  return <img src={src} width={size} height={size} alt={alt} className="rounded-full object-cover" />
}

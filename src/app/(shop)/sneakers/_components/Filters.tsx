import { cn } from '@/utils/classNames'

export function SizeFilter() {
  const sizes = Array.from({ length: 13 }, (_, i) => i + 36)
  return (
    <div className="flex flex-wrap">
      {sizes.map((size) => (
        <button key={size} className={cn('h-16 w-16 border border-gray-300')}>
          {size}
        </button>
      ))}
    </div>
  )
}

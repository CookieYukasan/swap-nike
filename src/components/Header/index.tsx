import Image from 'next/image'
import Link from 'next/link'
import { SearchInput } from './SearchInput'

const headerLinks = [
  { name: 'Explore', href: '/explore' },
  { name: 'Recent Activities', href: '/recent-activities' },
  { name: 'Blog', href: '/blog' },
]

export function Header() {
  return (
    <div>
      <div className="container mx-auto mt-4">
        <p className="text-end text-sm font-medium text-[#7C8089]">
          Don't have an account?{' '}
          <Link href="/signup" className="font-bold text-[#1D1E20]">
            Sign up for free
          </Link>
        </p>
      </div>
      <header className="border-b border-b-[#CFD9DE] pb-6">
        <div className="container mx-auto mt-5 flex justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={100} height={100} />
            </Link>
            <nav className="ml-6">
              <ul className="flex space-x-6">
                {headerLinks.map((link, index) => (
                  <li key={link.name}>
                    <Link href={link.href} className="font-medium text-[#1D1E20]">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex">
            <SearchInput />
            <Link href="/signin">
              <button className="ml-6 h-[56px] w-[200px] rounded bg-black py-4 text-white">Log in</button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  )
}

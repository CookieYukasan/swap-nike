import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Link from 'next/link'

export const metadata = {
  title: 'Not Found',
  description: 'Your page was not found.',
}

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col justify-between">
      <Header />
      <div className="container mx-auto flex flex-col items-center">
        <span className="material-symbols-outlined mb-4 !text-8xl text-red-500">error</span>
        <h1 className="text-5xl font-bold text-[#1D1E20]">Page not found</h1>
        <p className="text-1xl mt-6 font-medium text-[#7C8089]">
          If your think it's a error, please{' '}
          <Link
            href="https://github.com/CookieYukasan"
            target="_blank"
            className="text-black underline underline-offset-1"
          >
            contact us
          </Link>{' '}
          or{' '}
          <Link href="/" className="text-black underline underline-offset-1">
            back to home
          </Link>
          .
        </p>
      </div>
      <Footer />
    </div>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { SignInForm } from '../_components/SignInForm'

export const metadata = {
  title: 'Swap Nike | Sign In',
  description: 'Sign in to Swap Nike and start trading your Nike with other users',
}

export default function SignIn() {
  return (
    <>
      <Link href="/">
        <Image src="/logo.png" width={100} height={100} alt="Logo" />
      </Link>
      <h1 className="mt-6 text-3xl font-bold text-[#7C8089]">
        Hi, Welcome to <span className="font-bold text-[#1D1E20]">Swap Nike!</span>
      </h1>
      <p className="mt-2 font-medium text-[#7C8089]">Trade your Nike with other users</p>
      <button className="mt-6 flex w-full items-center rounded border border-[#CFD9DE] p-4 transition-colors hover:bg-zinc-100">
        <Image src="/icons/google.svg" width={24} height={24} alt="Google" />
        <p className="flex-1 text-[#1D1E20]">Continue with Google</p>
      </button>
      <button className="mt-6 flex w-full items-center rounded border border-[#CFD9DE] p-4 transition-colors hover:bg-zinc-100">
        <Image src="/icons/apple.svg" width={24} height={24} alt="Apple" />
        <p className="flex-1 text-[#1D1E20]">Continue with Apple</p>
      </button>

      <p className="my-4 text-center text-[#9A9C9E]">or</p>

      <SignInForm />
      <p className="mt-6 text-[#7C8089]">
        Don't have an account?{' '}
        <Link href="/signup">
          <span className="font-bold text-[#1D1E20]">Sign up for free</span>
        </Link>
      </p>
    </>
  )
}

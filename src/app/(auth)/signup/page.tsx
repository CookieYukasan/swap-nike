import Image from 'next/image'
import Link from 'next/link'
import { SignUpForm } from '../_components/SignUpForm'

export const metadata = {
  title: 'Sign Up',
  description: 'Sign up to Swap Nike and start trading your Nike with other users',
}

export default function SignUp() {
  return (
    <>
      <Link href="/">
        <Image src="/logo.png" width={100} height={100} alt="Logo" />
      </Link>
      <h1 className="mt-6 text-3xl font-bold text-[#1D1E20]">Sign up</h1>
      <p className="mb-6 mt-2 font-medium text-[#7C8089]">Create account to start using Swap Nike.</p>
      <SignUpForm />
      <p className="mt-6 text-[#7C8089]">
        Are you already a member?{' '}
        <Link href="/signin">
          <span className="font-bold text-[#1D1E20]">Sign in here</span>
        </Link>
      </p>
    </>
  )
}

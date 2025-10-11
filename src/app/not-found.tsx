import Link from 'next/link'

import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'

export default function NotFound() {
  return (
    <div className="flex min-h-full flex-col items-center justify-center px-6 py-24">
      <div className="w-full max-w-md">
        <div className="flex justify-center">
          <Link href="/" aria-label="Home">
            <Logo className="h-10 w-auto text-zinc-900" />
          </Link>
        </div>
        <p className="mt-20 text-center text-sm font-medium text-zinc-700">
          404
        </p>
        <h1 className="mt-3 text-center text-lg font-semibold text-zinc-900">
          Page not found
        </h1>
        <p className="mt-3 text-center text-sm text-zinc-700">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <div className="mt-10 flex justify-center">
          <Button href="/">Go back home</Button>
        </div>
      </div>
    </div>
  )
}

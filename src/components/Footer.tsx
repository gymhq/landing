import Link from 'next/link'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

export function Footer() {
  return (
    <footer className="bg-white">
      <Container>
        <div className="py-16">
          <Logo className="mx-auto h-10 w-auto text-zinc-900" />
        </div>
        <div className="flex flex-col items-center border-t border-zinc-400/10 py-10">
          <div className="mb-4 flex gap-x-6 text-sm">
            <Link
              href="/terms"
              className="text-zinc-600 transition-colors hover:text-zinc-900"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-zinc-600 transition-colors hover:text-zinc-900"
            >
              Privacy
            </Link>
          </div>
          <p className="text-sm text-zinc-500">
            Copyright &copy; {new Date().getFullYear()} GymHQ. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}

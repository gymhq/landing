import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

export function Header() {
  return (
    <header className="py-10">
      <Container>
        <nav className="relative z-50 flex items-center justify-between">
          <Link href="/" aria-label="Home" className="flex items-center gap-3">
            <Logo className="h-10 w-auto text-zinc-900" />
            <span className="text-xl font-semibold text-zinc-900">GYMHQ</span>
          </Link>
          <Button href="mailto:karn@gymhq.in">Book Demo</Button>
        </nav>
      </Container>
    </header>
  )
}

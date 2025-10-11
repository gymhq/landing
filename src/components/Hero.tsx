import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    <Container className="pt-20 pb-16 text-center lg:pt-32">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-zinc-900 sm:text-7xl">
        Complete Gym Management Platform
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-zinc-700">
        GymHQ is a comprehensive platform for gym owners to manage memberships,
        cafes, and everything in between. Simplify your gym operations with our
        all-in-one solution.
      </p>
      <div className="mt-10 flex justify-center">
        <Button href="mailto:karn@gymhq.in">Book Demo</Button>
      </div>
    </Container>
  )
}

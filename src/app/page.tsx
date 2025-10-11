import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </>
  )
}

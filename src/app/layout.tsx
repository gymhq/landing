import { type Metadata } from 'next'
import { Figtree } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - GymHQ',
    default: 'GymHQ - Complete Gym Management Platform',
  },
  description:
    'GymHQ is a comprehensive platform for gym owners to manage memberships, cafes, and everything in between. Simplify your gym operations with our all-in-one solution.',
}

const figtree = Figtree({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-figtree',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx('h-full scroll-smooth antialiased', figtree.variable)}
    >
      <body className="relative flex h-full flex-col bg-white">
        {/* Left side dumbbells - filled background */}
        <div className="pointer-events-none fixed top-0 left-0 h-full w-[calc(50vw-640px)] opacity-[0.04]">
          <div className="absolute top-10 left-[10%] -rotate-12">
            <DumbbellIcon />
          </div>
          <div className="absolute top-32 left-[30%] rotate-45">
            <DumbbellIcon />
          </div>
          <div className="absolute top-48 left-[60%] -rotate-[25deg]">
            <DumbbellIcon />
          </div>
          <div className="absolute top-72 left-[15%] rotate-[60deg]">
            <DumbbellIcon />
          </div>
          <div className="absolute top-96 left-[45%] -rotate-45">
            <DumbbellIcon />
          </div>
          <div className="absolute top-[30rem] left-[70%] rotate-12">
            <DumbbellIcon />
          </div>
          <div className="absolute top-[38rem] left-[20%] -rotate-[35deg]">
            <DumbbellIcon />
          </div>
          <div className="absolute top-[48rem] left-[55%] rotate-[70deg]">
            <DumbbellIcon />
          </div>
          <div className="absolute top-[58rem] left-[10%] -rotate-12">
            <DumbbellIcon />
          </div>
          <div className="absolute top-[68rem] left-[40%] rotate-45">
            <DumbbellIcon />
          </div>
          <div className="absolute top-[78rem] left-[65%] -rotate-[50deg]">
            <DumbbellIcon />
          </div>
          <div className="absolute bottom-[40rem] left-[25%] rotate-12">
            <DumbbellIcon />
          </div>
          <div className="absolute bottom-[30rem] left-[50%] -rotate-45">
            <DumbbellIcon />
          </div>
          <div className="absolute bottom-[20rem] left-[15%] rotate-[30deg]">
            <DumbbellIcon />
          </div>
          <div className="absolute bottom-[10rem] left-[60%] -rotate-12">
            <DumbbellIcon />
          </div>
          <div className="absolute bottom-20 left-[35%] rotate-45">
            <DumbbellIcon />
          </div>
        </div>

        {/* Right side dumbbells - filled background */}
        <div className="pointer-events-none fixed top-0 right-0 h-full w-[calc(50vw-640px)] opacity-[0.04]">
          <div className="absolute top-16 right-[15%] rotate-12">
            <DumbbellIcon />
          </div>
          <div className="absolute top-40 right-[45%] -rotate-45">
            <DumbbellIcon />
          </div>
          <div className="absolute top-56 right-[70%] rotate-[25deg]">
            <DumbbellIcon />
          </div>
          <div className="absolute top-80 right-[20%] -rotate-[60deg]">
            <DumbbellIcon />
          </div>
          <div className="absolute top-[26rem] right-[50%] rotate-45">
            <DumbbellIcon />
          </div>
          <div className="absolute top-[34rem] right-[10%] -rotate-12">
            <DumbbellIcon />
          </div>
          <div className="absolute top-[44rem] right-[65%] rotate-[35deg]">
            <DumbbellIcon />
          </div>
          <div className="absolute top-[54rem] right-[30%] -rotate-[70deg]">
            <DumbbellIcon />
          </div>
          <div className="absolute top-[64rem] right-[55%] rotate-12">
            <DumbbellIcon />
          </div>
          <div className="absolute top-[74rem] right-[15%] -rotate-45">
            <DumbbellIcon />
          </div>
          <div className="absolute top-[84rem] right-[40%] rotate-[50deg]">
            <DumbbellIcon />
          </div>
          <div className="absolute right-[60%] bottom-[38rem] -rotate-12">
            <DumbbellIcon />
          </div>
          <div className="absolute right-[25%] bottom-[28rem] rotate-45">
            <DumbbellIcon />
          </div>
          <div className="absolute right-[50%] bottom-[18rem] -rotate-[30deg]">
            <DumbbellIcon />
          </div>
          <div className="absolute right-[10%] bottom-[8rem] rotate-12">
            <DumbbellIcon />
          </div>
          <div className="absolute right-[45%] bottom-24 -rotate-45">
            <DumbbellIcon />
          </div>
        </div>

        {/* Center content area with dashed borders */}
        <div className="relative z-10 mx-auto w-full max-w-7xl border-x-2 border-dashed border-zinc-200 bg-white/50 backdrop-blur-sm">
          {children}
        </div>
      </body>
    </html>
  )
}

function DumbbellIcon() {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-zinc-900"
    >
      {/* Left weight */}
      <rect x="2" y="25" width="18" height="30" rx="3" fill="currentColor" />
      {/* Left handle connector */}
      <rect x="18" y="32" width="8" height="16" rx="2" fill="currentColor" />
      {/* Center bar */}
      <rect x="24" y="36" width="32" height="8" rx="2" fill="currentColor" />
      {/* Right handle connector */}
      <rect x="54" y="32" width="8" height="16" rx="2" fill="currentColor" />
      {/* Right weight */}
      <rect x="60" y="25" width="18" height="30" rx="3" fill="currentColor" />
    </svg>
  )
}

import {
  UserGroupIcon,
  CreditCardIcon,
  ClipboardDocumentCheckIcon,
  BuildingStorefrontIcon,
  CalendarDaysIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'

const features = [
  {
    name: 'Membership Management',
    description:
      'Streamline member onboarding, track subscriptions, and manage profiles all in one place. Keep your members engaged with automated renewals and notifications.',
    icon: UserGroupIcon,
  },
  {
    name: 'Smart Billing',
    description:
      'Automated invoicing and payment processing with support for multiple payment methods. Handle gym fees, personal training sessions, and cafe purchases seamlessly.',
    icon: CreditCardIcon,
  },
  {
    name: 'Attendance Tracking',
    description:
      'Real-time check-in system with QR codes and biometric support. Monitor gym capacity, track member visits, and generate attendance reports effortlessly.',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: 'Cafe Management',
    description:
      'Manage your gym cafe inventory, process orders, and track sales. Integrated billing ensures smooth operations for supplements, snacks, and beverages.',
    icon: BuildingStorefrontIcon,
  },
  {
    name: 'Trainer Scheduling',
    description:
      'Coordinate personal training sessions, manage trainer availability, and handle client bookings. Optimize your training staff utilization with smart scheduling.',
    icon: CalendarDaysIcon,
  },
  {
    name: 'Business Analytics',
    description:
      'Comprehensive insights into revenue, member trends, and operational metrics. Make data-driven decisions to grow your gym business with detailed reports.',
    icon: ChartBarIcon,
  },
]

export function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold text-zinc-900">
            Everything you need
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-balance text-zinc-900 sm:text-5xl">
            Complete gym management solution
          </p>
          <p className="mt-6 text-lg leading-8 text-zinc-700">
            From member onboarding to billing, attendance tracking to cafe
            management—GYMHQ provides all the tools you need to run your gym
            efficiently.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold text-zinc-900">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-900">
                    <feature.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-zinc-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )
}

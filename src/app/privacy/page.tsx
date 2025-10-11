import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

const lastUpdated = 'January 11, 2025'

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for GymHQ - Complete Gym Management Platform',
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <Container className="py-16">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-1 text-2xl font-semibold text-zinc-900">
              Privacy Policy
            </h1>
            <p className="mb-8 text-sm text-zinc-600">
              Last updated: {lastUpdated}
            </p>

            <div className="space-y-6 text-sm leading-relaxed text-zinc-700">
              <section>
                <h2 className="mb-2 font-medium text-zinc-900">
                  1. Introduction
                </h2>
                <p className="mb-2">
                  Welcome to GYMHQ. We are committed to protecting your personal
                  information and your right to privacy. This Privacy Policy
                  explains how we collect, use, disclose, and safeguard your
                  information when you use our mobile application and services.
                </p>
                <p>
                  By using GYMHQ, you agree to the collection and use of
                  information in accordance with this policy. If you do not
                  agree with our policies and practices, please do not use our
                  services.
                </p>
              </section>

              <section>
                <h2 className="mb-2 font-medium text-zinc-900">
                  2. Company Information
                </h2>
                <p>Legal Name: GYMHQ</p>
                <p>Address: Ranchi, India</p>
                <p>
                  Contact Email:{' '}
                  <a
                    href="mailto:support@gymhq.in"
                    className="text-zinc-900 underline hover:text-zinc-700"
                  >
                    support@gymhq.in
                  </a>
                </p>
              </section>

              <section>
                <h2 className="mb-2 font-medium text-zinc-900">
                  3. Information We Collect
                </h2>
                <p className="mb-2">
                  We collect personal information that you provide to us and
                  information that is automatically collected when you use our
                  services. The types of information we collect include:
                </p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Contact Information: Phone number, address</li>
                  <li>
                    Fitness Data: Gym activity, workout history, exercise
                    routines, fitness goals
                  </li>
                  <li>
                    Health Information: Health metrics, wellness data related to
                    your fitness journey
                  </li>
                  <li>
                    Location Data: Your location to help you find nearby gyms
                    and fitness facilities
                  </li>
                  <li>
                    Payment Information: Payment details processed through our
                    secure payment partners
                  </li>
                  <li>
                    Photos: Optional photos you choose to upload (profile
                    pictures, progress photos)
                  </li>
                  <li>
                    Usage Data: Information about how you interact with our app
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-2 font-medium text-zinc-900">
                  4. How We Collect Information
                </h2>
                <p className="mb-2">We collect information through:</p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    Direct Input: Information you provide when creating an
                    account, updating your profile, or using our services
                  </li>
                  <li>
                    Automatic Collection: Data collected automatically through
                    your use of the app, including cookies and similar
                    technologies
                  </li>
                  <li>
                    Future Integration: We may collect data from fitness bands
                    and wearable devices in the future to enhance your
                    experience
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-2 font-medium text-zinc-900">
                  5. How We Use Your Information
                </h2>
                <p className="mb-2">
                  We use the collected information for the following purposes:
                </p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    Account Management: To create and manage your account,
                    authenticate your identity
                  </li>
                  <li>
                    Service Provision: To provide, maintain, and improve our
                    fitness services
                  </li>
                  <li>
                    Customer Support: To respond to your inquiries and provide
                    assistance
                  </li>
                  <li>
                    Personalization: To enhance your fitness journey with
                    personalized recommendations and experiences
                  </li>
                  <li>
                    Communication: To send you important updates, notifications,
                    and information about our services
                  </li>
                  <li>
                    Security: To protect against unauthorized access and
                    maintain the security of your account
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-2 font-medium text-zinc-900">
                  6. Data Security
                </h2>
                <p className="mb-2">
                  We take the security of your personal information seriously.
                  All data collected is encrypted using industry-standard
                  encryption protocols. We implement appropriate technical and
                  organizational security measures to protect your information
                  against unauthorized access, alteration, disclosure, or
                  destruction.
                </p>
                <p>
                  However, please note that no method of transmission over the
                  internet or electronic storage is 100% secure. While we strive
                  to use commercially acceptable means to protect your
                  information, we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="mb-2 font-medium text-zinc-900">
                  7. Third-Party Service Providers
                </h2>
                <p className="mb-2">
                  We work with trusted third-party service providers to deliver
                  our services. These partners may have access to your personal
                  information only to perform specific tasks on our behalf and
                  are obligated not to disclose or use it for any other purpose.
                  Our third-party partners include:
                </p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    Firebase: For authentication, database, and cloud services
                  </li>
                  <li>Fly.io: For application hosting and deployment</li>
                  <li>Customer.io: For email communications</li>
                  <li>
                    Payment Processors: Razorpay, Paytm, and PhonePe for secure
                    payment processing
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-2 font-medium text-zinc-900">
                  8. Cookies and Tracking Technologies
                </h2>
                <p className="mb-2">
                  We use cookies and similar tracking technologies to track
                  activity on our app and store certain information. We use
                  cookies for:
                </p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Login tracking and session management</li>
                  <li>Maintaining your preferences</li>
                  <li>Improving app performance and user experience</li>
                  <li>
                    Analytics and understanding how users interact with our
                    services
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-2 font-medium text-zinc-900">
                  9. Data Retention
                </h2>
                <p className="mb-2">
                  We retain your personal information only for as long as
                  necessary to fulfill the purposes outlined in this Privacy
                  Policy, unless a longer retention period is required or
                  permitted by law.
                </p>
                <p>
                  When you request deletion of your account and data, we will
                  process your request promptly. However, please note that your
                  data may remain in our systems for up to 30 days after your
                  deletion request to ensure complete removal across all our
                  systems and backups.
                </p>
              </section>

              <section>
                <h2 className="mb-2 font-medium text-zinc-900">
                  10. Your Rights and Choices
                </h2>
                <p className="mb-2">
                  You have the following rights regarding your personal
                  information:
                </p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    Access: You can request access to the personal information
                    we hold about you
                  </li>
                  <li>
                    Correction: You can update or correct your personal
                    information through your account settings
                  </li>
                  <li>
                    Deletion: You can request deletion of your account and
                    personal data at any time
                  </li>
                  <li>
                    Opt-Out: You can opt-out of receiving promotional
                    communications from us
                  </li>
                  <li>
                    Data Portability: You can request a copy of your data in a
                    structured, commonly used format
                  </li>
                </ul>
                <p className="mt-2">
                  To exercise any of these rights, please contact us at{' '}
                  <a
                    href="mailto:support@gymhq.in"
                    className="text-zinc-900 underline hover:text-zinc-700"
                  >
                    support@gymhq.in
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="mb-2 font-medium text-zinc-900">
                  11. Geographic Scope
                </h2>
                <p>
                  GYMHQ services are intended for users in India only. By using
                  our services, you consent to the collection, storage, and
                  processing of your information in India in accordance with
                  this Privacy Policy and applicable Indian data protection
                  laws.
                </p>
              </section>

              <section>
                <h2 className="mb-2 font-medium text-zinc-900">
                  12. Children&apos;s Privacy
                </h2>
                <p>
                  Our services are not intended for individuals under the age of
                  18. We do not knowingly collect personal information from
                  children. If you are a parent or guardian and believe that
                  your child has provided us with personal information, please
                  contact us, and we will take steps to delete such information.
                </p>
              </section>

              <section>
                <h2 className="mb-2 font-medium text-zinc-900">
                  13. Changes to This Privacy Policy
                </h2>
                <p className="mb-2">
                  We may update our Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page and updating the &quot;Last updated&quot; date at
                  the top of this policy. You are advised to review this Privacy
                  Policy periodically for any changes.
                </p>
                <p>
                  Changes to this Privacy Policy are effective when they are
                  posted on this page. Your continued use of our services after
                  any modifications indicates your acceptance of the updated
                  Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="mb-2 font-medium text-zinc-900">
                  14. Contact Us
                </h2>
                <p className="mb-2">
                  If you have any questions, concerns, or requests regarding
                  this Privacy Policy or our data practices, please contact us
                  at:
                </p>
                <div className="mt-2">
                  <p>GYMHQ</p>
                  <p>Ranchi, India</p>
                  <p>
                    Email:{' '}
                    <a
                      href="mailto:support@gymhq.in"
                      className="text-zinc-900 underline hover:text-zinc-700"
                    >
                      support@gymhq.in
                    </a>
                  </p>
                </div>
              </section>

              <section className="mt-4 border-t border-zinc-200 pt-4 text-xs text-zinc-600">
                <p>
                  By using GYMHQ, you acknowledge that you have read,
                  understood, and agree to be bound by this Privacy Policy.
                </p>
              </section>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}

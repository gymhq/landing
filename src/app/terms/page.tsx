import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

const lastUpdated = 'January 11, 2025'

export const metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for GymHQ - Complete Gym Management Platform',
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <Container className="py-16">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-1 text-2xl font-semibold text-zinc-900">
              Terms of Service
            </h1>
            <p className="mb-8 text-sm text-zinc-600">
              Last updated: {lastUpdated}
            </p>

            <div className="space-y-6 text-sm leading-relaxed text-zinc-700">
              <section>
                <h2 className="mb-2 font-medium text-zinc-900">
                  1. Acceptance of Terms
                </h2>
                <p className="mb-2">
                  Welcome to GYMHQ. By accessing or using our mobile application
                  and services, you agree to be bound by these Terms of Service.
                  If you do not agree to these terms, please do not use our
                  services.
                </p>
                <p>
                  These terms constitute a legally binding agreement between you
                  and GYMHQ. We reserve the right to update these terms at any
                  time, and your continued use of our services constitutes
                  acceptance of any changes.
                </p>
              </section>

              <section>
                <h2 className="mb-2 font-medium text-zinc-900">
                  2. About GYMHQ
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
                  3. Description of Services
                </h2>
                <p className="mb-2">
                  GYMHQ provides a fitness and gym management platform that
                  allows users to:
                </p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Find and connect with gyms and fitness facilities</li>
                  <li>Track workout routines and fitness progress</li>
                  <li>Manage gym memberships and payments</li>
                  <li>Access fitness content and recommendations</li>
                  <li>Monitor health and wellness metrics</li>
                </ul>
                <p className="mt-2">
                  Our services are currently available only to users in India.
                </p>
              </section>

              <section>
                <h2 className="mb-2 font-medium text-zinc-900">
                  4. User Accounts
                </h2>
                <p className="mb-2">
                  To use GYMHQ, you must create an account by providing accurate
                  and complete information. You are responsible for:
                </p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    Maintaining the confidentiality of your account credentials
                  </li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized access</li>
                  <li>
                    Ensuring your account information remains accurate and up to
                    date
                  </li>
                </ul>
                <p className="mt-2">
                  You must be at least 18 years old to create an account and use
                  our services.
                </p>
              </section>

              <section>
                <h2 className="mb-2 font-medium text-zinc-900">
                  5. Payment Terms
                </h2>
                <p className="mb-2">
                  GYMHQ processes payments through third-party payment
                  processors including Razorpay, Paytm, and PhonePe. By making a
                  payment, you agree to:
                </p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Provide accurate payment information</li>
                  <li>Pay all fees and charges associated with your account</li>
                  <li>
                    Comply with the terms and conditions of our payment
                    processors
                  </li>
                </ul>
                <p className="mt-2">
                  All fees are non-refundable unless otherwise stated or
                  required by law. We reserve the right to change our pricing at
                  any time with prior notice to users.
                </p>
              </section>

              <section>
                <h2 className="mb-2 font-medium text-zinc-900">
                  6. User Responsibilities
                </h2>
                <p className="mb-2">When using GYMHQ, you agree to:</p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Use the services only for lawful purposes</li>
                  <li>
                    Provide accurate information about your fitness and health
                  </li>
                  <li>Respect the intellectual property rights of others</li>
                  <li>Not interfere with or disrupt the services</li>
                  <li>
                    Not attempt to gain unauthorized access to our systems
                  </li>
                  <li>Not upload malicious code or harmful content</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-2 font-medium text-zinc-900">
                  7. Prohibited Activities
                </h2>
                <p className="mb-2">You may not:</p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    Use the services for any illegal or unauthorized purpose
                  </li>
                  <li>Harass, abuse, or harm other users</li>
                  <li>
                    Impersonate any person or entity or misrepresent your
                    affiliation
                  </li>
                  <li>
                    Collect or harvest data from other users without consent
                  </li>
                  <li>
                    Reverse engineer, decompile, or disassemble any part of our
                    services
                  </li>
                  <li>
                    Use automated systems or bots to access or scrape our
                    services
                  </li>
                  <li>
                    Transmit spam, chain letters, or other unsolicited
                    communications
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-2 font-medium text-zinc-900">
                  8. Intellectual Property
                </h2>
                <p className="mb-2">
                  All content, features, and functionality of GYMHQ, including
                  but not limited to text, graphics, logos, images, and
                  software, are owned by GYMHQ or its licensors and are
                  protected by intellectual property laws.
                </p>
                <p>
                  You are granted a limited, non-exclusive, non-transferable
                  license to access and use our services for personal,
                  non-commercial purposes only. You may not copy, modify,
                  distribute, sell, or lease any part of our services without
                  prior written consent.
                </p>
              </section>

              <section>
                <h2 className="mb-2 font-medium text-zinc-900">
                  9. User Content
                </h2>
                <p className="mb-2">
                  You retain ownership of any content you upload to GYMHQ, such
                  as photos, workout data, and health information. By uploading
                  content, you grant GYMHQ a worldwide, non-exclusive,
                  royalty-free license to use, store, and display your content
                  solely for the purpose of providing and improving our
                  services.
                </p>
                <p>
                  You are solely responsible for your content and must ensure it
                  does not violate any laws or third-party rights.
                </p>
              </section>

              <section>
                <h2 className="mb-2 font-medium text-zinc-900">
                  10. Health and Fitness Disclaimer
                </h2>
                <p className="mb-2">
                  GYMHQ provides fitness tracking and information services, but
                  we are not a medical or healthcare provider. The information
                  and recommendations provided through our services are for
                  informational purposes only and should not be considered
                  medical advice.
                </p>
                <p className="mb-2">Important:</p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    Consult with a physician before starting any fitness program
                  </li>
                  <li>
                    Do not disregard professional medical advice based on
                    information from GYMHQ
                  </li>
                  <li>
                    We are not responsible for any injuries or health issues
                  </li>
                  <li>Use our services at your own risk</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-2 font-medium text-zinc-900">
                  11. Service Availability
                </h2>
                <p>
                  We strive to provide continuous access to our services, but we
                  do not guarantee that our services will be available at all
                  times. Services may be interrupted for maintenance, updates,
                  or due to factors beyond our control. We reserve the right to
                  modify, suspend, or discontinue any part of our services
                  without notice.
                </p>
              </section>

              <section>
                <h2 className="mb-2 font-medium text-zinc-900">
                  12. Account Termination
                </h2>
                <p className="mb-2">
                  We reserve the right to suspend or terminate your account at
                  any time if you violate these terms or engage in conduct that
                  we deem harmful to GYMHQ, other users, or third parties.
                </p>
                <p>
                  You may delete your account at any time through the app
                  settings. Upon deletion, your data will be removed from our
                  systems within 30 days, as outlined in our Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="mb-2 font-medium text-zinc-900">
                  13. Disclaimers
                </h2>
                <p className="mb-2">
                  GYMHQ services are provided &quot;as is&quot; and &quot;as
                  available&quot; without any warranties of any kind, either
                  express or implied. We disclaim all warranties, including but
                  not limited to:
                </p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    Warranties of merchantability or fitness for a purpose
                  </li>
                  <li>
                    Warranties regarding the accuracy or completeness of
                    information
                  </li>
                  <li>Warranties of uninterrupted or error-free service</li>
                  <li>Warranties regarding security or data protection</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-2 font-medium text-zinc-900">
                  14. Limitation of Liability
                </h2>
                <p className="mb-2">
                  To the maximum extent permitted by law, GYMHQ and its
                  affiliates, officers, employees, and partners shall not be
                  liable for any indirect, incidental, special, consequential,
                  or punitive damages arising from or related to your use of our
                  services.
                </p>
                <p>
                  Our total liability for any claims arising from your use of
                  GYMHQ shall not exceed the amount you paid to us in the 12
                  months prior to the claim, or ₹1,000, whichever is greater.
                </p>
              </section>

              <section>
                <h2 className="mb-2 font-medium text-zinc-900">
                  15. Indemnification
                </h2>
                <p>
                  You agree to indemnify and hold harmless GYMHQ and its
                  affiliates from any claims, damages, losses, liabilities, and
                  expenses (including legal fees) arising from your use of our
                  services, your violation of these terms, or your violation of
                  any rights of another party.
                </p>
              </section>

              <section>
                <h2 className="mb-2 font-medium text-zinc-900">
                  16. Third-Party Services
                </h2>
                <p>
                  Our services may contain links to or integrate with
                  third-party websites, apps, or services (such as payment
                  processors and fitness device integrations). We are not
                  responsible for the content, privacy practices, or terms of
                  service of any third-party services. Your use of third-party
                  services is at your own risk.
                </p>
              </section>

              <section>
                <h2 className="mb-2 font-medium text-zinc-900">
                  17. Governing Law and Disputes
                </h2>
                <p className="mb-2">
                  These Terms of Service shall be governed by and construed in
                  accordance with the laws of India. Any disputes arising from
                  these terms or your use of GYMHQ shall be subject to the
                  exclusive jurisdiction of the courts in Ranchi, Jharkhand,
                  India.
                </p>
                <p>
                  Before filing any legal action, you agree to first attempt to
                  resolve any dispute by contacting us at support@gymhq.in.
                </p>
              </section>

              <section>
                <h2 className="mb-2 font-medium text-zinc-900">
                  18. Changes to Terms
                </h2>
                <p className="mb-2">
                  We may update these Terms of Service from time to time. When
                  we make changes, we will update the &quot;Last updated&quot;
                  date at the top of this page and notify you through the app or
                  via email.
                </p>
                <p>
                  Your continued use of GYMHQ after changes are posted
                  constitutes your acceptance of the updated terms. If you do
                  not agree to the changes, you must stop using our services.
                </p>
              </section>

              <section>
                <h2 className="mb-2 font-medium text-zinc-900">
                  19. Severability
                </h2>
                <p>
                  If any provision of these terms is found to be invalid or
                  unenforceable, the remaining provisions shall continue in full
                  force and effect. The invalid provision shall be modified to
                  the minimum extent necessary to make it valid and enforceable.
                </p>
              </section>

              <section>
                <h2 className="mb-2 font-medium text-zinc-900">
                  20. Contact Us
                </h2>
                <p className="mb-2">
                  If you have any questions, concerns, or disputes regarding
                  these Terms of Service, please contact us at:
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
                  understood, and agree to be bound by these Terms of Service.
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

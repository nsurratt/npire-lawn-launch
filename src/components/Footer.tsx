import Link from 'next/link'

const footerLinks = {
  services: [
    { label: 'Mowing & Lawn Care', href: '/mowing-lawn-care' },
    { label: 'Fertilizer & Weed Control', href: '/fertilizer-weed-control' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Service Areas', href: '/service-areas' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Contact', href: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1C2E10' }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Col 1: Logo + tagline */}
          <div>
            <Link href="/" className="inline-block mb-3">
              <span className="text-white font-heading text-xl">
                Neighbor&apos;s Lawn &amp; Garden
              </span>
            </Link>
            <p className="text-white/60 font-body text-xs mb-1">Owner: Danny Green · Since 2012</p>
            <p className="text-gray-400 font-body text-sm leading-relaxed mb-4 mt-3">
              Family-owned lawn care and landscaping for Marietta homeowners. Danny and the crew know your neighborhood because they live here too.
            </p>
            <p className="text-gray-500 font-body text-xs mb-6">
              Serving Marietta and surrounding areas since 2012
            </p>
            {/* Social links */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/neighborslawngarden"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-accent transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/neighborslawngarden"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-accent transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth="2" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </a>
              <a
                href="https://g.page/neighborslawngarden"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-accent transition-colors"
                aria-label="Google Reviews"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-white font-body font-semibold text-sm uppercase tracking-wider mb-4">
                Services
              </h3>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white font-body text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-body font-semibold text-sm uppercase tracking-wider mb-4">
                Company
              </h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white font-body text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h3 className="text-white font-body font-semibold text-sm uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href="tel:7705550162"
                  className="hover:text-white transition-colors font-body font-medium text-white"
                >
                  (770) 555-0162
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@neighborslawn.com"
                  className="hover:text-white font-body transition-colors"
                >
                  hello@neighborslawn.com
                </a>
              </li>
              <li className="font-body">
                612 Powder Springs St<br />
                Marietta, GA 30060
              </li>
              <li className="font-body">
                Mon–Sat: 8am–5pm<br />
                <span className="text-gray-500">Closed Sunday</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-white/5 rounded-xl text-xs text-gray-500 space-y-1">
              <p className="font-body">GA Pesticide Applicator License</p>
              <p className="font-body">General Liability · Licensed &amp; Insured</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p className="font-body">&copy; {new Date().getFullYear()} Neighbor&apos;s Lawn &amp; Garden. All rights reserved.</p>
          <p className="font-body">Marietta, GA · Licensed · Insured · Founded 2012</p>
        </div>
      </div>
    </footer>
  )
}

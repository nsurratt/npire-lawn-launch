'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/mowing-lawn-care' },
  { label: 'Service Areas', href: '/service-areas' },
  { label: 'About', href: '/about' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [drawerOpen])

  return (
    <>
      <nav
        aria-label="Main navigation"
        style={{ backgroundColor: '#FEFDF8' }}
        className={`fixed top-8 left-0 right-0 z-50 transition-shadow duration-200 ${
          scrolled ? 'shadow-md' : 'border-b border-brand-border'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex-shrink-0">
              <span className="text-brand-primary font-heading text-lg leading-tight block">
                Neighbor&apos;s Lawn &amp; Garden
              </span>
              <span className="text-brand-text-muted font-body text-xs block">
                Owner: Danny Green · Since 2012
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-brand-text-secondary hover:text-brand-primary font-body font-medium text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:7705550162"
                className="text-brand-primary font-body font-semibold text-sm hover:text-brand-primary-hover transition-colors"
              >
                (770) 555-0162
              </a>
              <Link
                href="/contact"
                className="bg-brand-accent hover:bg-brand-accent-hover text-white font-body font-semibold text-sm px-5 py-2.5 rounded-full transition-colors"
              >
                Get Estimate
              </Link>
            </div>

            <div className="flex md:hidden items-center gap-3">
              <a
                href="tel:7705550162"
                className="text-brand-primary font-body font-semibold text-sm"
                aria-label="Call Neighbor's Lawn & Garden"
              >
                (770) 555-0162
              </a>
              <button
                onClick={() => setDrawerOpen(true)}
                className="p-2 rounded-md text-brand-text-secondary hover:text-brand-primary"
                aria-label="Open navigation menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {drawerOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setDrawerOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        style={{ backgroundColor: '#FEFDF8' }}
        className={`fixed top-0 right-0 h-full w-80 max-w-full z-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-4 border-b border-brand-border">
            <div>
              <p className="text-brand-primary font-heading text-base leading-tight">
                Neighbor&apos;s Lawn &amp; Garden
              </p>
              <p className="text-brand-text-muted font-body text-xs">Danny Green · Since 2012</p>
            </div>
            <button
              onClick={() => setDrawerOpen(false)}
              className="p-2 rounded-md text-brand-text-secondary hover:text-brand-primary"
              aria-label="Close navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 px-6 py-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setDrawerOpen(false)}
                className="block py-3 text-brand-text-primary font-body font-medium text-base border-b border-brand-border/50 hover:text-brand-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="px-6 py-6 border-t border-brand-border">
            <a
              href="tel:7705550162"
              className="flex items-center justify-center gap-2 w-full bg-brand-primary hover:bg-brand-primary-hover text-white font-body font-semibold text-center py-3 rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              Call (770) 555-0162
            </a>
            <Link
              href="/contact"
              onClick={() => setDrawerOpen(false)}
              className="block w-full mt-3 border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white font-body font-semibold text-center py-3 rounded-lg transition-colors"
            >
              Get a Free Estimate
            </Link>
            <p className="text-xs text-brand-text-muted text-center mt-3">
              Marietta, GA · Licensed &amp; Insured
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

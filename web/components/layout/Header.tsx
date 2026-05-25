'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { href: '#journey', label: 'الرحلة' },
  { href: '#features', label: 'المميزات' },
  { href: '#programs', label: 'الكورسات' },
  { href: '#faq', label: 'الأسئلة الشائعة' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) firstLinkRef.current?.focus()
  }, [mobileOpen])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [mobileOpen])

  const closeMenu = () => setMobileOpen(false)

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 border-b backdrop-blur-xl backdrop-saturate-150 transition-[background-color,box-shadow,border-color] duration-300 ${scrolled
        ? 'border-border shadow-[0_8px_30px_-12px_oklch(20%_0.02_163.6_/_0.18)]'
        : 'border-white/20'
        }`}
      style={{
        backgroundColor: scrolled
          ? 'oklch(99% 0.005 163.6 / 0.85)'
          : 'oklch(99% 0.005 163.6 / 0.6)',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 h-[60px] sm:h-[68px] flex items-center gap-6">
        {/* Logo */}
        <Link href="/" className="order-last ms-auto shrink-0" aria-label="INDEX Business School">
          <Image
            src="/images/IBS LOGO FULL.png"
            alt="IBS"
            width={150}
            height={54}
            className="h-11 w-auto object-contain sm:h-12"
            priority
            unoptimized
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:block" aria-label="القائمة الرئيسية">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-4 py-2 min-h-[44px] inline-flex items-center text-sm text-text-2 rounded-lg hover:text-text hover:bg-surface transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <a
          href="#book"
          className="order-first me-2 hidden md:inline-flex items-center px-5 py-2.5 bg-cta hover:bg-cta-hover text-white text-sm font-semibold rounded-lg transition-colors"
        >
          املأ الاستمارة
        </a>

        {/* Mobile toggle */}
        <button
          ref={toggleRef}
          className="md:hidden ms-auto flex h-11 w-11 items-center justify-center rounded-lg hover:bg-surface active:bg-surface transition-colors"
          aria-label={mobileOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="relative block h-[14px] w-5" aria-hidden="true">
            <span className={`absolute inset-x-0 block h-0.5 rounded-full bg-text transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${mobileOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'}`} />
            <span className={`absolute inset-x-0 top-1/2 block h-0.5 -translate-y-1/2 rounded-full bg-text transition-opacity duration-200 ${mobileOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`absolute inset-x-0 block h-0.5 rounded-full bg-text transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${mobileOpen ? 'bottom-1/2 translate-y-1/2 -rotate-45' : 'bottom-0'}`} />
          </span>
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div
          id="mobile-nav"
          className="mobile-menu md:hidden border-t border-white/20 backdrop-blur-xl backdrop-saturate-150 px-5 pt-3 pb-5 shadow-[0_8px_24px_-12px_oklch(20%_0.02_163.6_/_0.25)]"
          style={{ backgroundColor: 'oklch(99% 0.005 163.6 / 0.85)' }}
        >
          <nav aria-label="القائمة المحمولة">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    ref={i === 0 ? firstLinkRef : undefined}
                    onClick={closeMenu}
                    className="flex min-h-[48px] items-center px-4 text-start text-base font-medium text-text-2 rounded-xl hover:text-text hover:bg-surface active:bg-surface transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-3">
                <a
                  href="#book"
                  onClick={closeMenu}
                  className="flex min-h-[48px] w-full items-center justify-center px-5 bg-cta hover:bg-cta-hover active:scale-[0.99] text-white font-bold rounded-xl transition-all duration-200"
                >
                  املأ الاستمارة
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

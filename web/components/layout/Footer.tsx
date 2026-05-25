import Image from 'next/image'
import Link from 'next/link'

const otherPages = [
  { href: '#journey', label: 'Student Journey' },
  { href: '#features', label: 'Included Features' },
  { href: '#programs', label: 'Programs' },
  { href: '#book', label: 'Book an Interview' },
]

const quickLinks = [
  { href: '#faq', label: 'FAQ' },
  { href: '#programs', label: 'Admissions Plans' },
  { href: '#features', label: 'Portfolio Support' },
  { href: '#book', label: 'Contact Admissions' },
]

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-en mb-4 text-[0.68rem] font-extrabold uppercase tracking-[0.08em] text-ibs-green sm:mb-5 sm:text-[0.72rem]">
      {children}
    </h3>
  )
}

function PlusIcon() {
  return (
    <span
      aria-hidden="true"
      className="mt-[0.18rem] inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-sm bg-ibs-green text-[0.8rem] font-black leading-none text-ink"
    >
      +
    </span>
  )
}

const linkClass =
  'group inline-flex items-start gap-2.5 text-[0.78rem] font-semibold leading-snug text-white/64 transition-colors duration-200 hover:text-white sm:text-sm sm:font-medium'

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-ink text-white/70" dir="ltr">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ibs-green/70 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-[-11rem] -z-10 h-[26rem] w-[38rem] rounded-full opacity-45 blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, oklch(62% 0.14 163.6 / 0.3), transparent)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.18]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.16) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'linear-gradient(180deg, #000 0%, transparent 72%)',
          WebkitMaskImage: 'linear-gradient(180deg, #000 0%, transparent 72%)',
        }}
      />

      <div className="mx-auto max-w-[1180px] px-5 py-10 sm:px-6 sm:py-16">
        <div className="grid grid-cols-2 gap-x-5 gap-y-9 sm:grid-cols-2 lg:grid-cols-[1.45fr_0.82fr_0.82fr_1fr] lg:gap-12">
          <section className="col-span-2 mx-auto max-w-[330px] text-center lg:col-span-1 lg:mx-0 lg:max-w-[350px] lg:text-left">
            <Link href="/" aria-label="INDEX Business School" className="inline-flex">
              <Image
                src="/images/ibs-full-logo-black.svg"
                alt="INDEX Business School"
                width={150}
                height={64}
                className="h-14 w-auto object-contain brightness-0 invert sm:h-16"
              />
            </Link>
            <p className="mx-auto mt-4 max-w-[31ch] text-[0.82rem] leading-6 text-white/60 sm:mt-5 sm:text-sm sm:leading-7 lg:mx-0">
              Practical live online programs for design, AI tools, digital marketing, and full online brand building.
            </p>
            <div className="mt-5 flex items-center justify-center gap-2.5 sm:mt-6 lg:justify-start">
              <a
                href="https://www.instagram.com/ibs.courses"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="INDEX Business School on Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-ibs-green text-ink transition-transform duration-200 hover:-translate-y-0.5"
              >
                <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="#book"
                aria-label="Book an admissions interview"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-ibs-green text-ink transition-transform duration-200 hover:-translate-y-0.5"
              >
                <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
                </svg>
              </a>
              <a
                href="#programs"
                aria-label="View programs"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-ibs-green text-ink transition-transform duration-200 hover:-translate-y-0.5"
              >
                <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z" />
                </svg>
              </a>
            </div>
          </section>

          <nav aria-label="Other pages">
            <ColumnHeading>Other Pages</ColumnHeading>
            <ul className="grid gap-3">
              {otherPages.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={linkClass}>
                    <PlusIcon />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Quick links">
            <ColumnHeading>Quick Links</ColumnHeading>
            <ul className="grid gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={linkClass}>
                    <PlusIcon />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <section className="col-span-2 rounded-xl border border-white/10 bg-white/[0.035] p-4 lg:col-span-1 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0">
            <ColumnHeading>Contact Info</ColumnHeading>
            <ul className="grid gap-3.5 text-[0.78rem] font-semibold leading-snug text-white/64 sm:text-sm sm:font-medium">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-ibs-green" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span>Cairo, Egypt</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-ibs-green" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16v16H4z" />
                    <path d="m22 6-10 7L2 6" />
                  </svg>
                </span>
                <span>Admissions through the interview form</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-ibs-green" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 11.2 18.8 19.5 19.5 0 0 1 5.2 12.8 19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.66 2.8a2 2 0 0 1-.45 2.11L8 9.9a16 16 0 0 0 6.1 6.1l1.27-1.27a2 2 0 0 1 2.11-.45c.9.31 1.84.53 2.8.66A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <span>WhatsApp updates after submission</span>
              </li>
            </ul>
          </section>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1180px] flex-col items-center justify-between gap-3 px-5 py-5 text-center sm:flex-row sm:px-6 sm:py-6">
          <p className="font-en max-w-[30ch] text-[0.68rem] font-semibold leading-5 text-white/45 sm:max-w-none sm:text-xs">
            Copyright 2026. All rights reserved by{' '}
            <span className="inline-block rounded bg-ibs-green px-2 py-1 text-ink">INDEX Business School</span>
          </p>
          <p className="font-en text-[0.68rem] font-semibold text-white/35 sm:text-xs">
            Learn. Practice. Grow.
          </p>
        </div>
      </div>
    </footer>
  )
}

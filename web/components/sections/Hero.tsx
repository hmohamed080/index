import Image from 'next/image'

const trustPoints = [
  'Live Online',
  'للمبتدئين',
  'Portfolio حقيقي',
  'دعم CV',
  'مجتمع خاص',
  'عرض الCV على الشركات',
  'نسب قبول في الشركات اكتر 86%',
]

function CheckIcon() {
  return (
    <svg
      className="w-[15px] h-[15px] text-ibs-green-text shrink-0"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
      <polyline
        points="5,8 7.5,10.5 11,6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Hero() {
  return (
    <section
      className="relative isolate flex min-h-[540px] items-center overflow-hidden py-16 sm:min-h-[640px] sm:py-24 lg:min-h-[90vh] lg:py-28"
      id="hero"
      aria-labelledby="hero-headline"
    >
      {/* ── Cinematic background ───────────────────────────── */}
      <Image
        src="/images/header.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[58%_28%] sm:object-center"
      />

      {/* Readability overlay — darker at top, clears toward middle */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(180deg, oklch(18% 0.01 163.6 / 0.45) 0%, oklch(18% 0.01 163.6 / 0.12) 32%, transparent 55%)',
        }}
      />
      {/* Brand-green atmospheric tint */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-[-8%] -z-10 h-[460px] w-[680px] rounded-full"
        style={{
          background: 'radial-gradient(closest-side, oklch(62% 0.14 163.6 / 0.28), transparent)',
          filter: 'blur(20px)',
        }}
      />
      {/* Smooth white fade into the page at the bottom */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-[45%]"
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, oklch(99.2% 0.005 163.6 / 0.65) 55%, var(--color-bg) 100%)',
        }}
      />

      {/* ── Floating glass card ────────────────────────────── */}
      <div className="relative mx-auto w-full max-w-[680px] px-5 sm:max-w-[760px] sm:px-6">
        <div className="hero-float">
          <div
            className="relative mx-auto rounded-2xl border border-white/55 px-5 py-8 text-center shadow-[0_24px_60px_-22px_oklch(20%_0.02_163.6_/_0.5)] backdrop-blur-xl sm:rounded-[28px] sm:px-12 sm:py-14 sm:shadow-[0_30px_80px_-24px_oklch(20%_0.02_163.6_/_0.5)]"
            style={{ backgroundColor: 'oklch(99% 0.006 163.6 / 0.72)' }}
          >
            {/* Badge */}
            <span
              className="hero-rise inline-flex items-center gap-2 rounded-full border border-ibs-green-border bg-ibs-green-light/70 px-4 py-1.5 font-en text-[0.7rem] font-bold uppercase tracking-[0.12em] text-ibs-green-text"
              style={{ animationDelay: '0.05s' }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-ibs-green" aria-hidden="true" />
              INDEX Business School
            </span>

            {/* Headline */}
            <h1
              id="hero-headline"
              className="hero-rise mt-5 font-display text-[clamp(1.75rem,7vw,3.75rem)] font-bold leading-[1.2] tracking-tight text-text sm:mt-6 sm:leading-[1.14]"
              style={{ animationDelay: '0.15s' }}
            >
              محاضرة واحدة في الاسبوع
              <span className="text-ibs-green-text"> ساعتين بس!</span>
            </h1>

            {/* Paragraph */}
            <p
              className="hero-rise mx-auto mt-4 max-w-[46ch] text-[0.9375rem] leading-[1.75] text-text-2 sm:mt-5 sm:text-[1.0625rem] sm:leading-[1.8]"
              style={{ animationDelay: '0.25s' }}
            >
              كل اللي انت محتاجة عشان تعتمد من INDEX
            </p>

            {/* CTAs */}
            <div
              className="hero-rise mt-7 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row"
              style={{ animationDelay: '0.35s' }}
            >
              <a
                href="#book"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cta px-7 py-3.5 text-base font-bold text-white shadow-[var(--shadow-card)] transition-all duration-300 hover:bg-cta-hover hover:shadow-[var(--shadow-card-hover)] active:scale-[0.98] sm:w-auto sm:py-4"
              >
                املأ الاستمارة
                <svg
                  className="h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-1"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M10 3 5 8l5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#programs"
                className="inline-flex w-full items-center justify-center rounded-xl border border-border bg-bg/70 px-7 py-3.5 text-base font-semibold text-text backdrop-blur transition-colors hover:border-text-2 hover:bg-surface sm:w-auto sm:py-4"
              >
                برامج IBS
              </a>
            </div>

            {/* Trust row */}
            <ul
              className="hero-rise mx-auto mt-7 flex max-w-[560px] flex-wrap items-center justify-center gap-x-4 gap-y-2 border-t border-border/70 pt-6 sm:mt-9 sm:gap-x-5 sm:gap-y-2.5 sm:pt-7"
              aria-label="مميزات البرنامج"
              style={{ animationDelay: '0.45s' }}
            >
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-1.5 text-sm font-medium text-text-2">
                  <CheckIcon />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

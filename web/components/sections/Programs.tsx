type Program = {
  tag: string
  title: string
  badge?: string
  desc: string
  price: string
  items: string[]
  bonusLabel?: string
  bonus: string[]
  featured: boolean
}

const programs: Program[] = [
  {
    tag: 'Graphic Design',
    title: 'GRAPHIC DESIGN',
    desc: 'أساس قوي في التصميم التجاري من الهوية والمطبوعات لواجهات الاستخدام والمحتوى المتحرك.',
    price: '8,600',
    items: [
      'Design Theories',
      'Social Media Designs',
      'Printing',
      'Brand & Logo',
      'Prompt Eng.',
      'UI / UX',
      'Packaging',
      'Motion Graphics',
    ],
    bonus: ['Personal Branding', 'Get Your First Client'],
    featured: false,
  },
  {
    tag: 'AI Tools',
    title: 'AI TOOLS',
    badge: 'Most Practical',
    desc: 'أدوات AI للتصميم والإعلانات والصوت والتصوير والفيديو والأتمتة.',
    price: '8,600',
    items: [
      'Prompt Eng.',
      'UI / UX',
      'Ads Designs',
      'Motion Graphics',
      'Voice & VO',
      'AI Photography',
      'Socail Media Scheduling',
      'Video Creation',
    ],
    bonus: ['Build AI Agents', 'AI Automation'],
    featured: false,
  },
  {
    tag: 'Exclusive',
    title: 'BUILD A FULL ONLINE BRAND',
    badge: 'Exclusive',
    desc: 'بناء براند أونلاين من البحث والتخطيط للهوية والموقع والإعلانات.',
    price: '9,800',
    items: [
      'Market Gap Research',
      'Branding & Identity',
      'Sales (B2B/B2C)',
      'Marketing Planning',
      'Prompt Eng.',
      'Building Websites',
      'Products AI Photoshoots',
      'Smart Ads',
    ],
    bonus: ['Pitching & Partnering', 'Hiring & Hierarchy'],
    featured: true,
  },
  {
    tag: 'Digital Marketing',
    title: 'DIGITAL MARKETING',
    desc: 'مسار عملي لبناء إعلانات والتحليل وتنفيذ Campaign حقيقية.',
    price: '8,600',
    items: [
      'Digital Marketing Basics',
      'Marketing Funnel',
      'Social Media Algorithms',
      'Content, Hooks & Viral Ideas',
      'Email-marketing',
      'Copywriting & Selling Ads',
      'Analytics & Tracking',
      'Instagram, TikTok & Facebook',
    ],
    bonus: [
      'Google Ads',
      'AI Marketing',
    ],
    featured: false,
  },
]

function CheckMark() {
  return (
    <span
      className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-[4px] bg-ibs-green text-[0.75rem] font-bold leading-none text-bg"
      aria-hidden="true"
    >
      ✓
    </span>
  )
}

export function Programs() {
  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-surface border-y border-border"
      id="programs"
      aria-labelledby="programs-title"
    >
      <div className="pointer-events-none absolute -top-28 start-1/2 h-[360px] w-[760px] -translate-x-1/2 rounded-[999px] border-[42px] border-ibs-green/70 opacity-70 rotate-[-14deg]" />
      <div className="pointer-events-none absolute top-28 -end-32 h-[260px] w-[420px] rounded-[999px] border-[34px] border-ibs-green/35 rotate-[24deg]" />

      <div className="relative max-w-[1200px] mx-auto px-6">
        <div className="mb-10 sm:mb-14 max-w-[880px]">
          <p className="font-en mb-4 text-[0.82rem] font-extrabold uppercase tracking-[0.08em] text-ibs-green-text">
            INDEX Business School
          </p>
          <h2
            id="programs-title"
            className="font-display text-[clamp(2.25rem,6vw,4.75rem)] font-bold text-text mb-4 leading-[1.04] tracking-tight"
          >
            باقات مصممة لمهارات السوق الحقيقية
          </h2>
          <p className="max-w-[62ch] text-[1.0625rem] text-text-2 leading-relaxed">
            اختار الباقة المناسبة وابدأ بمسار واضح للتطبيق العملي. كل باقة فيها محتوى أساسي، تطبيقات متقدمة، وبونص يساعدك تتحرك باحتراف.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 items-stretch" dir="ltr">
          {programs.map((prog) => (
            <article
              key={prog.tag}
              dir="rtl"
              className={`program-card group relative flex min-h-full flex-col overflow-hidden rounded-lg border bg-bg p-6 shadow-[0_22px_44px_-28px_oklch(0%_0_0_/_0.32)] transition-[transform,box-shadow,border-color,background-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform hover:-translate-y-3 hover:rotate-[0.35deg] hover:border-ibs-green-border hover:shadow-[0_34px_70px_-32px_oklch(0%_0_0_/_0.45)] motion-reduce:transform-none motion-reduce:transition-none ${prog.featured
                ? 'border-ibs-green-border bg-bg ring-2 ring-ibs-green-border'
                : 'border-border'
                }`}
              aria-labelledby={`prog-${prog.tag.toLowerCase().replace(/\s/g, '-')}`}
            >
              <span className="program-card__line" aria-hidden="true" />
              <span className="program-card__glow" aria-hidden="true" />
              <div className="relative z-10 flex min-h-full flex-col gap-5">
                <div
                  className={`font-en self-start rounded-lg px-3 py-2 text-[0.65rem] font-extrabold uppercase tracking-[0.08em] transition-[background-color,color,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${prog.featured
                    ? 'bg-ibs-green text-text'
                    : 'bg-ibs-green-light text-ibs-green-text group-hover:-translate-y-0.5 group-hover:bg-ibs-green-border group-hover:text-text'
                    }`}
                  dir="ltr"
                >
                  {prog.badge ?? prog.tag}
                </div>

                <h3
                  id={`prog-${prog.tag.toLowerCase().replace(/\s/g, '-')}`}
                  className="font-en max-w-[12ch] text-left text-[clamp(1.55rem,2.6vw,2.15rem)] font-extrabold text-text leading-[1.08]"
                  dir="ltr"
                >
                  {prog.title}
                </h3>

                <p className="text-[0.9375rem] text-text-2 leading-relaxed">{prog.desc}</p>

                <div className="flex justify-start" dir="ltr">
                  <div
                    className={`font-en rounded-lg px-5 py-3 text-center text-[1.6rem] font-extrabold leading-none ${prog.featured
                      ? 'bg-ibs-green text-white'
                      : 'bg-text text-bg'
                      }`}
                  >
                    {prog.price}
                    <span className="ms-1 align-middle text-[0.72rem] font-bold uppercase opacity-80">
                      EGP
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <p className="mb-4 text-[0.92rem] font-bold text-text">
                    محتوى الباقة
                  </p>
                  <ul className="font-en grid gap-3 text-[0.84rem] font-semibold leading-snug text-text-2" dir="ltr">
                    {prog.items.map((item, index) => (
                      <li
                        key={item}
                        className="program-card__item flex items-start gap-3"
                        style={{ transitionDelay: `${index * 18}ms` }}
                      >
                        <CheckMark />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className="mt-auto rounded-lg border border-ibs-green-border bg-ibs-green-light px-4 py-3 text-left text-sm font-bold text-text"
                  dir="ltr"
                >
                  <span className="font-en text-ibs-green-text">{prog.bonusLabel ?? 'BONUS:'}</span>
                  <ul className="font-en mt-2 grid gap-1.5">
                    {prog.bonus.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#book"
                  className="w-full text-center px-5 py-3 bg-cta hover:bg-cta-hover group-hover:bg-cta-hover text-white font-semibold rounded-lg transition-[background-color,box-shadow] duration-300 text-sm group-hover:shadow-[var(--shadow-card-hover)]"
                >
                  املأ الاستمارة
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 text-text sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-semibold text-text-2">
            الحجز بيبدأ بمقابلة قصيرة مع فريق IBS لاختيار المسار الأنسب ليك.
          </p>
          <a
            href="#book"
            className="inline-flex items-center justify-center rounded-lg bg-text px-5 py-3 text-sm font-bold text-bg transition-colors hover:bg-cta"
          >
            احجز مقابلة الآن
          </a>
        </div>
      </div>
    </section>
  )
}

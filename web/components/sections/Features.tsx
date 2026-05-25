const features = [
  {
    code: 'LIVE',
    name: 'محاضرات Live Online',
    desc: 'جلسات لايف تفاعلية على Zoom مع مدرب متخصص، أسئلة مباشرة وتطبيق أثناء المحاضرة.',
  },
  {
    code: 'ZERO',
    name: 'للمبتدئين بالكامل',
    desc: 'المحتوى يبدأ من الصفر بخطوات واضحة، مناسب حتى لو دي أول تجربة تعليمية ليك في المجال.',
  },
  {
    code: 'DO',
    name: 'تعلم عملي وتطبيقي',
    desc: 'كل محاضرة تتحول لتطبيق فعلي، مهارات تستخدمها مباشرة بدل الاكتفاء بالنظريات.',
  },
  {
    code: 'CASE',
    name: 'Case Studies حقيقية',
    desc: 'تحليل حالات من السوق الفعلي عشان تفهم قرارات الشركات وتطبقها على مشاريعك.',
  },
  {
    code: 'REC',
    name: 'تسجيلات بعد المحاضرات',
    desc: 'كل جلسة بتتسجل، تقدر ترجع للمحتوى وتراجع الخطوات في الوقت المناسب ليك.',
  },
  {
    code: 'COMM',
    name: 'Community ودعم مستمر',
    desc: 'مجتمع خاص لطلاب IBS للتواصل، مشاركة الشغل، الدعم، والفرص بعد البرنامج.',
  },
  {
    code: 'WORK',
    name: 'Portfolio ومشاريع',
    desc: 'تشتغل على أعمال حقيقية تضيفها للـ Portfolio وتعرضها في مقابلات أو مع عملاء.',
  },
  {
    code: 'CV',
    name: 'تحضير وتوزيع CV',
    desc: 'مساعدة في تجهيز الـ CV بشكل احترافي، مع دعم في عرضه على فرص مناسبة.',
  },
  {
    code: 'FIT',
    name: 'مقابلة قبل القبول',
    desc: 'مكالمة قصيرة نفهم فيها هدفك ونتأكد إن البرنامج مناسب ليك قبل بداية الرحلة.',
  },
  {
    code: 'SEATS',
    name: 'أماكن محدودة',
    desc: 'عرض حصري ومميزات خاصة للجامعات بمناسبة الـ Pilot Phase الأول من نوعه في مصر بتقنية الـ Autonomous Learning.',
  },
]

const marqueeItems = [
  'Live Online',
  'Portfolio',
  'CV Support',
  'Community',
  'Case Studies',
  'Recordings',
  'Interview',
  'Limited Seats',
]

export function Features() {
  return (
    <section
      className="relative overflow-hidden bg-bg py-16 sm:py-20 lg:py-24"
      id="features"
      aria-labelledby="features-title"
    >
      <style>
        {`
          @keyframes benefits-marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }

          .benefits-marquee {
            overflow: hidden;
            white-space: nowrap;
          }

          .benefits-marquee-track {
            align-items: center;
            animation: benefits-marquee 32s linear infinite;
            display: flex;
            flex-wrap: nowrap;
            gap: 2.5rem;
            width: max-content;
            white-space: nowrap;
            will-change: transform;
          }

          .benefits-marquee-track > * {
            flex: 0 0 auto;
          }

          @media (prefers-reduced-motion: reduce) {
            .benefits-marquee-track {
              animation: none;
              transform: translateX(-12%);
            }
          }

          @media (max-width: 640px) {
            .benefits-marquee-track {
              animation-duration: 24s;
              gap: 1.35rem;
            }
          }
        `}
      </style>
      <div className="pointer-events-none absolute inset-0 opacity-[0.13] [background-image:linear-gradient(90deg,oklch(44%_0.012_163.6_/_0.16)_1px,transparent_1px),linear-gradient(0deg,oklch(44%_0.012_163.6_/_0.13)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[320px]"
        style={{
          background:
            'radial-gradient(ellipse 58% 74% at 86% -8%, oklch(92% 0.075 163.6 / 0.48) 0%, oklch(92% 0.075 163.6 / 0.28) 38%, transparent 72%)',
          maskImage: 'linear-gradient(180deg, #000 0%, #000 52%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(180deg, #000 0%, #000 52%, transparent 100%)',
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="mb-14 me-auto max-w-[760px] text-right lg:mb-16">
          <div>
            <p className="font-en mb-4 text-[0.78rem] font-extrabold uppercase tracking-[0.08em] text-ibs-green-text">
              IBS Benefits
            </p>
            <h2
              id="features-title"
              className="font-display text-[clamp(2.25rem,5vw,4.25rem)] font-bold leading-[1.18] tracking-tight text-text"
            >
              كل البرامج بتشمل
            </h2>
          </div>
          <p className="mt-5 me-auto max-w-[48rem] text-[1.05rem] leading-[1.95] text-text-2">
            أساس ثابت في كل برنامج: تعلم مباشر، تطبيق عملي، متابعة، ومخرجات تقدر تستخدمها في سوق العمل.
          </p>
        </div>
      </div>

      <div className="relative z-10 mb-14 border-y border-ibs-green-text/20 bg-cta py-3 text-bg shadow-[0_18px_46px_-34px_oklch(0%_0_0_/_0.55)] sm:py-3.5">
        <div className="benefits-marquee" dir="ltr" aria-hidden="true">
          <div className="benefits-marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="font-en inline-flex items-center gap-4 whitespace-nowrap text-[0.78rem] font-extrabold uppercase leading-none tracking-[0.01em] sm:gap-6 sm:text-[clamp(0.95rem,1.7vw,1.2rem)]"
              >
                {item}
                <span className="text-[1.05em] leading-none sm:text-[1.2em]">✳</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="relative mb-8 text-center">
          <p
            className="pointer-events-none absolute inset-x-0 -top-7 font-en text-[clamp(4rem,14vw,9rem)] font-black uppercase leading-none text-text/[0.035]"
            aria-hidden="true"
          >
            Benefits
          </p>
          <p className="relative mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-ibs-green-border bg-bg px-4 py-2 text-sm font-bold text-ibs-green-text shadow-[0_14px_30px_-28px_oklch(0%_0_0_/_0.5)]">
            <span className="h-2 w-2 rounded-full bg-cta" aria-hidden="true" />
            ثابت في كل برنامج
          </p>
          <h3 className="relative font-display text-[clamp(1.8rem,4vw,3.4rem)] font-bold leading-tight text-text">
            تجربة كاملة من أول المحاضرة لحد المخرجات
          </h3>
        </div>

        <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="group relative min-h-[210px] overflow-hidden rounded-lg border border-border bg-surface p-5 shadow-[0_18px_44px_-38px_oklch(0%_0_0_/_0.6)] transition duration-300 hover:-translate-y-1 hover:border-ibs-green-border hover:bg-bg hover:shadow-[0_26px_56px_-42px_oklch(0%_0_0_/_0.65)]"
            >
              <div className="pointer-events-none absolute -start-8 -top-8 h-24 w-24 rounded-full bg-ibs-green-light opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="relative mb-8 flex items-center justify-between gap-3">
                <span className="font-en flex h-11 min-w-11 items-center justify-center rounded-full border border-border bg-bg px-3 text-[0.68rem] font-extrabold uppercase text-ibs-green-text shadow-[0_10px_24px_-22px_oklch(0%_0_0_/_0.6)]">
                  {feature.code}
                </span>
                <span className="h-px flex-1 bg-border" aria-hidden="true" />
              </div>
              <dt className="relative font-display text-[1.18rem] font-bold leading-snug text-text">
                {feature.name}
              </dt>
              <dd className="relative mt-3 text-[0.92rem] leading-relaxed text-text-2">
                {feature.desc}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-14 border-t border-border pt-10 text-center">
          <p className="mx-auto max-w-[760px] font-display text-[clamp(1.55rem,3.2vw,2.65rem)] font-bold leading-[1.28] text-text">
            كل برنامج معمول عشان{' '}
            <span className="text-ibs-green-text">تتعلم وتطبق</span>{' '}
            وتخرج بحاجة تقدر{' '}
            <span className="block text-ibs-green sm:inline">تشتغل بيها فورًا.</span>
          </p>
        </div>
      </div>
    </section>
  )
}

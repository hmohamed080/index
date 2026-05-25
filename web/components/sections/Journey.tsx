import type { CSSProperties } from 'react'

const frames = [
  {
    eyebrow: 'من أول خطوة',
    title: 'ابدأ رحلتك في IBS',
    subtitle: 'من الاستمارة لأول مكالمة',
    note: 'بداية بسيطة',
    noteTop: '52%',
    noteRight: '42%',
    path: 'M 790 78 C 735 145, 720 285, 665 368 C 560 465, 390 405, 245 520 C 130 612, 520 700, 785 628',
    steps: [
      {
        num: '01',
        top: '42%',
        right: '7%',
        title: 'املاء الاستمارة',
        desc: 'هيجيلك confirmation email بتسجيلك معانا.',
      },
      {
        num: '02',
        top: '61%',
        left: '7%',
        title: 'مكالمة Interview خلال 48 ساعة',
        desc: 'هيجيلك مكالمة من فريق IBS خلال 48 ساعة لمقابلة قصيرة نفهم فيها احتياجك ونوضح الخطوة الجاية.',
      },
    ],
  },
  {
    eyebrow: 'بعد القبول',
    title: 'تجهيز الالتحاق',
    subtitle: 'كل التفاصيل بتوصلك قبل البداية',
    note: 'متابعة شخصية',
    noteTop: '42%',
    noteLeft: '43%',
    path: 'M 108 76 C 255 118, 186 252, 235 318 C 315 422, 525 382, 575 470 C 635 574, 690 566, 792 594',
    steps: [
      {
        num: '03',
        top: '33%',
        left: '5%',
        title: 'فريق IBS يتابع معاك',
        desc: 'بعد قبولك في البرنامج، فريقنا هيتابع معاك خطوات الالتحاق ويساعدك في الحجز.',
      },
      {
        num: '04',
        top: '52%',
        left: '36%',
        title: 'إيميل البداية',
        desc: 'عند بدء البرنامج هيوصلك إيميل فيه كل اللينكات والملفات واحتياجاتك وجروبات المجتمع الخاص.',
      },
      {
        num: '05',
        top: '72%',
        right: '3%',
        title: 'Online Live Workshops',
        desc: 'البرنامج بالكامل عملي Online Live مرة واحدة أسبوعياً لمدة ساعتين.',
      },
    ],
  },
  {
    eyebrow: 'أثناء البرنامج',
    title: 'تعلم وتطبيق حقيقي',
    subtitle: 'المحاضرات، المشاريع، والمجتمع في مسار واحد',
    note: 'تطبيق عملي',
    noteTop: '57%',
    noteRight: '51%',
    path: 'M 790 76 C 710 145, 725 300, 665 374 C 555 480, 350 330, 230 388 C 110 455, 210 575, 355 600 C 500 660, 640 655, 786 622',
    steps: [
      {
        num: '06',
        top: '44%',
        right: '7%',
        title: 'مشاريع حقيقية',
        desc: 'أثناء البرنامج هتعمل مشاريع حقيقية وتتضاف للـ CV والـ Portfolio بتاعك.',
      },
      {
        num: '07',
        top: '43%',
        left: '7%',
        title: 'تعلم خطوة بخطوة',
        desc: 'هتتعلم خطوة بخطوة، والمحاضرات بتتسجل عشان تعرف ترجع لها في أي وقت.',
      },
      {
        num: '08',
        top: '72%',
        right: '13%',
        title: 'مجتمع واتساب خاص',
        desc: 'بتشارك مشاريعك في مجتمع متكامل وخاص على واتساب.',
      },
      {
        num: '09',
        top: '73%',
        left: '18%',
        title: 'دعم مباشر',
        desc: 'تواصل مباشر مع المحاضرين للاستشارات والدعم عبر واتساب.',
      },
    ],
  },
  {
    eyebrow: 'بعد البرنامج',
    title: 'الشهادة والفرص',
    subtitle: 'الدعم مستمر بعد آخر محاضرة',
    note: 'الفرص مستمرة',
    noteTop: '58%',
    noteLeft: '42%',
    path: 'M 110 86 C 265 128, 230 258, 285 350 C 360 470, 625 335, 690 392 C 775 468, 610 560, 470 585 C 330 615, 610 685, 780 626',
    steps: [
      {
        num: '10',
        top: '37%',
        left: '7%',
        title: 'شهادة معتمدة',
        desc: 'شهادة معتمدة من وكالة INDEX السعودية لريادة الأعمال والاقتصاد الدولي.',
      },
      {
        num: '11',
        top: '45%',
        right: '7%',
        title: 'عرض على شركات',
        desc: 'فرص عمل هتتبعتلك على واتساب من فريق توظيف IBS.',
      },
      {
        num: '12',
        top: '70%',
        left: '34%',
        title: 'مزايا للمتميزين',
        desc: 'خصومات خاصة للبرامج المستقبلية وفرصة حصرية للعمل معنا في فريق IBS للطلبة المتميزين.',
      },
    ],
  },
]

export function Journey() {
  return (
    <section
      className="bg-surface border-y border-border"
      id="journey"
      aria-labelledby="journey-title"
    >
      <div className="max-w-[1200px] mx-auto px-6 py-16 sm:py-20 lg:py-24">
        <div className="mb-12 max-w-[820px] sm:mb-16">
          <p className="font-en mb-4 text-[0.82rem] font-extrabold uppercase tracking-[0.08em] text-ibs-green-text">
            INDEX Business School
          </p>
          <h2
            id="journey-title"
            className="font-display mb-6 text-[clamp(2.25rem,6vw,4.75rem)] font-bold leading-[1.16] tracking-tight text-text"
          >
            رحلتك في IBS
          </h2>
          <p className="max-w-[58ch] text-[1.0625rem] leading-[1.9] text-text-2">
            مسار واضح من أول الاستمارة لحد المشاريع، الشهادة، وفرص العمل.
          </p>
        </div>

        <div className="grid gap-6 lg:gap-8">
          {frames.map((frame, index) => (
            <article
              key={frame.title}
              className="relative min-h-[760px] overflow-hidden rounded-xl border border-border bg-bg px-6 py-8 shadow-[0_28px_70px_-48px_oklch(0%_0_0_/_0.45)] sm:px-8 lg:min-h-[820px] lg:px-12 lg:py-10"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,oklch(96%_0.035_163.6_/_0.78),transparent_28%),linear-gradient(135deg,oklch(99%_0.004_163.6),oklch(95.5%_0.008_163.6))]" />
              <div className="pointer-events-none absolute inset-0 opacity-[0.22] [background-image:linear-gradient(90deg,oklch(45%_0.015_163.6_/_0.18)_1px,transparent_1px),linear-gradient(0deg,oklch(45%_0.015_163.6_/_0.14)_1px,transparent_1px)] [background-size:22px_22px]" />

              <div className="relative z-10 flex items-start justify-between gap-6">
                <p
                  className="font-en text-[0.78rem] font-extrabold uppercase tracking-[0.08em] text-ibs-green-text"
                  dir="ltr"
                >
                  {index + 1 < 10 ? `0${index + 1}` : index + 1} / 04
                </p>
                <p className="font-en text-[0.78rem] font-extrabold uppercase tracking-[0.08em] text-text-3">
                  journey process
                </p>
              </div>

              <div className="relative z-10 mt-14 max-w-[560px] lg:mt-12">
                <p className="mb-3 text-sm font-bold text-ibs-green-text">
                  {frame.eyebrow}
                </p>
                <h3 className="font-display text-[clamp(2rem,5vw,4.2rem)] font-bold leading-[1.15] text-text">
                  {frame.title}
                </h3>
                <p className="mt-5 max-w-[44ch] text-base leading-[1.85] text-text-2">
                  {frame.subtitle}
                </p>
              </div>

              <svg
                className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
                viewBox="0 0 900 720"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d={frame.path}
                  fill="none"
                  stroke="oklch(49% 0.14 163.6 / 0.86)"
                  strokeLinecap="round"
                  strokeWidth="3.5"
                  vectorEffect="non-scaling-stroke"
                  filter="drop-shadow(0 9px 8px oklch(0% 0 0 / 0.13))"
                />
              </svg>

              <p
                className="absolute hidden rotate-[-8deg] font-display text-[1.05rem] font-semibold text-ibs-green-text/80 lg:block"
                style={
                  {
                    top: frame.noteTop,
                    left: frame.noteLeft ?? 'auto',
                    right: frame.noteRight ?? 'auto',
                  } as CSSProperties & Record<string, string>
                }
              >
                {frame.note}
              </p>

              <ol className="relative z-10 mt-10 grid gap-5 lg:hidden">
                {frame.steps.map((step) => (
                  <li
                    key={step.num}
                    className="relative rounded-xl border border-border/80 bg-bg/90 p-5 shadow-[0_18px_42px_-34px_oklch(0%_0_0_/_0.55)] backdrop-blur-[1px]"
                  >
                    <span
                      className="absolute -top-9 left-5 font-en text-[3.8rem] font-extrabold leading-none text-ibs-green-text drop-shadow-[0_12px_14px_oklch(0%_0_0_/_0.16)]"
                      dir="ltr"
                    >
                      {step.num}
                    </span>
                    <div className="pt-7">
                      <h4 className="font-display text-[1.35rem] font-bold leading-snug text-text">
                        {step.title}
                      </h4>
                      <p className="mt-2 text-[0.95rem] leading-relaxed text-text-2">
                        {step.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <ol className="absolute inset-0 z-10 hidden lg:block">
                {frame.steps.map((step) => (
                  <li
                    key={step.num}
                    className="absolute w-[min(300px,30vw)] rounded-xl border border-border/80 bg-bg/90 p-5 shadow-[0_18px_42px_-34px_oklch(0%_0_0_/_0.55)] backdrop-blur-[1px] xl:w-[330px]"
                    style={
                      {
                        top: step.top,
                        left: step.left ?? 'auto',
                        right: step.right ?? 'auto',
                      } as CSSProperties & Record<string, string>
                    }
                  >
                    <span
                      className="absolute -top-9 left-5 font-en text-[3.8rem] font-extrabold leading-none text-ibs-green-text drop-shadow-[0_12px_14px_oklch(0%_0_0_/_0.16)]"
                      dir="ltr"
                    >
                      {step.num}
                    </span>
                    <div className="pt-7">
                      <h4 className="font-display text-[1.35rem] font-bold leading-snug text-text">
                        {step.title}
                      </h4>
                      <p className="mt-2 text-[0.95rem] leading-relaxed text-text-2">
                        {step.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

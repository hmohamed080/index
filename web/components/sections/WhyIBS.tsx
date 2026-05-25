const reasons = [
  {
    num: '١',
    name: 'ورش عمل عملية مبنية على سوق الشغل الحقيقي',
    detail:
      'مش مجرد شرح نظري — كل ورشة بتتعلم فيها Skills تقدر تستخدمها فورًا في شغل، Freelance، أو مشروعك الخاص.',
  },
  {
    num: '٢',
    name: 'مناسبين للدراسة والشغل بدون ضغط',
    detail:
      'ورش IBS أونلاين مرة واحدة أسبوعيًا لمدة ساعتين فقط، مع تسجيل كامل للمحاضرات عشان تتعلم براحتك وفي وقتك.',
  },
  {
    num: '٣',
    name: 'بناء Portfolio ونتائج حقيقية',
    detail:
      'بتطلع من الورشة بمشاريع عملية حقيقية تساعدك تبدأ تبني Portfolio قوي يفتحلك فرص أكتر.',
  },
  {
    num: '٤',
    name: 'استخدام أحدث أدوات الـ AI في 2026',
    detail:
      '    بنعلمك إزاي تستخدم أدوات الذكاء الاصطناعي الحديثة بشكل عملي يخليك أسرع وأقوى في السوق.',
  },
  {
    num: '٥',
    name: 'دعم مهني وفرص حقيقية بعد التعلم',
    detail:
      '    بنساعدك في كتابة الـ CV وتجهيزه، وكمان بنوصل ملفات الطلاب لـ +200 شركة موثوقة وفرص مختلفة.',
  },
  {
    num: '٦',
    name: 'Community تساعدك تكمل وتتطور',
    detail:
      '    مش بتتعلم لوحدك — بتكون وسط ناس عندها نفس الطموح، مع متابعة ودعم يساعدوك تستمر وتتطور أسر',
  },
]

export function WhyIBS() {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24"
      id="why-ibs"
      aria-labelledby="why-title"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10 lg:gap-20 items-start">

          {/* Sticky header */}
          <div className="lg:sticky lg:top-24">
            <h2
              id="why-title"
              className="font-display text-[clamp(1.875rem,3.5vw,2.625rem)] font-bold text-text mb-4 tracking-tight"
            >
              إيه اللي يميز IBS
            </h2>
            <p className="text-[1.0625rem] text-text-2 leading-relaxed">
              IBS هي تجربة عملية مبنية على التوجيه، الممارسة، والنتائج الفعلية.
            </p>
          </div>

          {/* Reasons list */}
          <ol className="border-t border-border">
            {reasons.map((r) => (
              <li
                key={r.num}
                className="flex gap-5 items-start py-6 border-b border-border"
              >
                <span className="font-display text-2xl font-bold text-ibs-green-text leading-none pt-0.5 min-w-[2rem]">
                  {r.num}
                </span>
                <div>
                  <h3 className="font-display font-bold text-lg text-text mb-2 leading-snug">
                    {r.name}
                  </h3>
                  <p className="text-[0.9375rem] text-text-2 leading-relaxed">{r.detail}</p>
                </div>
              </li>
            ))}
          </ol>

        </div>
      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'الكورسات أونلاين ولا حضوري؟',
    a: 'لايف أونلاين بالكامل عبر Zoom. هتقدر تحضر من أي مكان في مصر أو خارجها. المحاضرات بتتسجل كمان لو فاتتك.',
  },
  {
    q: 'مين يقدر يقدم؟',
    a: 'أي حد فوق ١٦ سنة: طالب، خريج، موظف، صاحب بيزنس، أو حتى حد عايز يتحول لمجال جديد. المهم إنك عندك هدف واضح.',
  },
  {
    q: 'هل لازم يكون عندي خبرة؟',
    a: 'لأ. البرامج مبنية من الصفر ومناسبة للمبتدئ الكامل. بداية قوية أهم من خلفية سابقة.',
  },
  {
    q: 'هل في مقابلة قبل القبول؟',
    a: 'أيوه. مش معقد ومش امتحان. مجرد محادثة قصيرة مع فريق IBS بنفهم فيها احتياجك ونتأكد إن البرنامج مناسب ليك.',
  },
  {
    q: 'إزاي أقدم؟',
    a: 'ابعت بياناتك في الفورم اللي فوق. فريق IBS هيتواصل معاك خلال ٢٤ ساعة لتحديد موعد المقابلة.',
  },
  {
    q: 'هل الأماكن محدودة؟',
    a: 'أيوه. كل ورشة عمل بيضم عدد محدود من الطلاب عشان نضمن الجودة والتفاعل الحقيقي. التقدم المبكر بيفرق.',
  },
  {
    q: 'هل المحتوى عملي ولا نظري؟',
    a: 'عملي في المقام الأول. كيس ستاديز، مشاريع حقيقية، وتطبيق مباشر. النظرية موجودة بس بتخدم التطبيق مش العكس.',
  },
  {
    q: 'هل الكورسات مناسبة للطلبة والخريجين؟',
    a: 'أيوه تماماً. كتير من طلاب IBS طلبة وخريجين بيستخدموا البرامج للدخول لسوق الشغل بخبرة حقيقية وPortfolio وCV قوي.',
  },
  {
    q: 'هل مناسبة لأصحاب البيزنس؟',
    a: 'أيوه. فيه طلاب عندهم بيزنس قائم وبيجوا لتطويره أو لفهم جانب معين أعمق. البرامج بتفيد المبتدئ والـ intermediate بنفس الكفاءة.',
  },
  {
    q: 'هل ممكن تساعدني في Career Shift؟',
    a: 'أيوه. برامج IBS مبنية على المهارات العملية اللي السوق بيطلبها. بتطلع بـ Portfolio وCV جديد بيدعم تحولك المهني.',
  },
  {
    q: 'هل في Portfolio؟',
    a: 'أيوه. كل برنامج فيه مشاريع حقيقية بتبني بيها Portfolio تعرضه في أي مقابلة عمل أو عند أي عميل.',
  },
  {
    q: 'هل في مساعدة في الـ CV؟',
    a: 'أيوه. فيه جلسة تحضير CV مخصصة بتظهر مهاراتك الجديدة بشكل صح، وبعدها توزيع على شركات في السوق.',
  },
  {
    q: 'ليه أختار IBS؟',
    a: ' التعلم العملي، بناء الـ Portfolio، ودعم ما بعد الكورس. IBS مش منصة بتبيع كورسات. هي رحلة متكاملة من التدريب إلي التوظيف.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-border last:border-0">
      <button
        className="w-full flex items-center justify-between gap-5 py-5 text-start text-[1.0625rem] font-semibold text-text hover:text-ibs-green-text transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ibs-green focus-visible:ring-offset-2 rounded-md"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        type="button"
      >
        <span className="leading-snug">{q}</span>
        <svg
          className={`w-[18px] h-[18px] text-text-3 shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${open ? 'rotate-180 text-ibs-green-text' : ''}`}
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <polyline
            points="4,6 8,10 12,6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className={`faq-answer ${open ? 'open' : ''}`}>
        <div>
          <p className="pb-5 text-[0.9375rem] text-text-2 leading-relaxed max-w-[60ch]">{a}</p>
        </div>
      </div>
    </div>
  )
}

export function FAQ() {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24"
      id="faq"
      aria-labelledby="faq-title"
    >
      <div className="max-w-[720px] mx-auto px-6">
        <div className="mb-10 text-center">
          <h2
            id="faq-title"
            className="font-display text-[clamp(1.875rem,3.5vw,2.625rem)] font-bold text-text tracking-tight"
          >
            الأسئلة الشائعة
          </h2>
          <p className="mt-3 text-[1.0625rem] text-text-2 leading-relaxed">
            كل اللي محتاج تعرفه قبل ما تقدم
          </p>
        </div>
        <div className="border-t border-border">
          {faqs.map((item) => (
            <FAQItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  )
}

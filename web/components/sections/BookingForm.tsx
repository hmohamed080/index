'use client'

import { useState, type FormEvent } from 'react'

type FormErrors = Partial<Record<string, string>>
type SelectOption = { value: string; label: string }

const statusOptions = [
  { value: 'student', label: 'طالب' },
  { value: 'graduate', label: 'خريج' },
  { value: 'business-owner', label: 'صاحب بيزنس' },
  { value: 'career-shift', label: 'Career Shift' },
  { value: 'beginner', label: 'مبتدئ' },
  { value: 'other', label: 'أخرى' },
]

const courseOptions = [
  { value: 'graphic-design', label: 'Graphic Design' },
  { value: 'ai-tools', label: 'AI Tools' },
  { value: 'online-brand', label: 'Build a Full Online Brand' },
  { value: 'digital-marketing', label: 'Digital Marketing' },
  { value: 'unsure', label: 'مش متأكد، محتاج مساعدة' },
]

const timeOptions = [
  { value: 'morning', label: 'morning (9 AM - 12 PM)' },
  { value: 'noon', label: 'noon (12 PM - 3 PM)' },
  { value: 'afternoon', label: 'afternoon (3 PM - 6 PM)' },
  { value: 'evening', label: 'evening (6 PM - 10 PM)' },
]

function getOptionLabel(options: SelectOption[], value: FormDataEntryValue | null) {
  if (typeof value !== 'string') return ''

  return options.find((option) => option.value === value)?.label ?? value
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {}
  const name = (data.get('name') as string)?.trim()
  const phone = (data.get('phone') as string)?.trim()
  const email = (data.get('email') as string)?.trim()
  const age = (data.get('age') as string)?.trim()
  const status = data.get('status') as string
  const course = data.get('course') as string
  const goal = (data.get('goal') as string)?.trim()
  const time = data.get('time') as string

  if (!name) errors.name = 'الاسم مطلوب'
  if (!phone) {
    errors.phone = 'رقم الهاتف مطلوب'
  } else if (!/^(\+?2?01[0-2,5]{1}[0-9]{8})$/.test(phone)) {
    errors.phone = 'أدخل رقم هاتف صحيح'
  }
  if (!email) {
    errors.email = 'البريد الإلكتروني مطلوب'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'أدخل بريد إلكتروني صحيح'
  }
  if (!age) {
    errors.age = 'السن مطلوب'
  } else if (Number(age) < 16 || Number(age) > 65) {
    errors.age = 'السن يجب أن يكون بين ١٦ و٦٥ سنة'
  }
  if (!status) errors.status = 'اختر حالتك'
  if (!course) errors.course = 'اختر الكورس المهتم به'
  if (!goal || goal.length < 10) errors.goal = 'اكتب هدفك باختصار (١٠ حروف على الأقل)'
  if (!time) errors.time = 'اختر أنسب وقت للتواصل'

  return errors
}

const inputBase =
  'w-full px-4 py-3 border-[1.5px] border-border rounded-lg bg-bg text-text text-base transition-colors focus:outline-none focus:border-ibs-green focus:ring-2 focus:ring-ibs-green/15 placeholder:text-text-3'
const inputError =
  'border-red-500 focus:border-red-500 focus:ring-red-500/15'

function SelectChevron() {
  return (
    <svg
      className="pointer-events-none absolute top-1/2 -translate-y-1/2 end-3 w-4 h-4 text-text-3"
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
  )
}

export function BookingForm() {
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = new FormData(e.currentTarget)
    const errs = validate(data)

    setErrors(errs)

    if (Object.keys(errs).length > 0) return

    const status = data.get('status')
    const course = data.get('course')
    const goal = data.get('goal')
    const time = data.get('time')
    const bestContactTime = getOptionLabel(timeOptions, time)

    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_CRM_LEADS_API!,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-form-key': process.env.NEXT_PUBLIC_FORM_KEY!,
          },
          body: JSON.stringify({
            fullName: data.get('name'),
            phone: data.get('phone'),
            email: data.get('email'),
            age: data.get('age'),
            currentStatus: status,
            currentStatusLabel: getOptionLabel(statusOptions, status),
            interestedCourse: course,
            interestedCourseLabel: getOptionLabel(courseOptions, course),
            goal,
            comment: goal,
            bestContactTime,
            bestContactTimeKey: time,
            source: 'INDEX Landing Page',
          }),
        }
      )

      const result = await res.json()

      if (!res.ok || !result.ok) {
        console.error('Lead submit failed:', result)
        alert('حدث خطأ أثناء الإرسال')
        return
      }

      console.log('Lead submitted:', result.id)

      setSubmitted(true)
    } catch (error) {
      console.error(error)
      alert('تعذر الاتصال بالسيرفر')
    }
  }

  if (submitted) {
    return (
      <section className="py-16 sm:py-20 lg:py-24 bg-surface border-y border-border" id="book">
        <div className="max-w-[720px] mx-auto px-6 text-center py-10">
          <div className="w-14 h-14 mx-auto mb-5">
            <svg viewBox="0 0 48 48" fill="none" className="text-ibs-green-text" aria-hidden="true">
              <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2.5" />
              <polyline
                points="14,25 21,32 34,17"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3 className="font-display text-2xl font-bold text-text mb-3">
            تم إرسال طلبك بنجاح!
          </h3>
          <p className="text-base text-text-2 leading-relaxed max-w-[44ch] mx-auto">
            فريق IBS هيتواصل معاك خلال ٢٤ ساعة لتحديد موعد المقابلة. شكراً على اهتمامك.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-surface border-y border-border"
      id="book"
      aria-labelledby="book-title"
    >
      <div className="max-w-[720px] mx-auto px-6">
        <div className="text-center mb-10">
          <h2
            id="book-title"
            className="font-display text-[clamp(1.875rem,3.5vw,2.625rem)] font-bold text-text mb-3 tracking-tight"
          >
            املأ الاستمارة الآن!
          </h2>
          <p className="text-[1.0625rem] text-text-2 leading-relaxed mb-4">
            فريق IBS هيتواصل معاك لتحديد مقابلة قصيرة.
          </p>
          <span className="inline-block text-sm font-semibold text-ibs-green-text bg-ibs-green-light px-4 py-2 rounded-lg">
            العدد محدود، اضمن مكانك!
          </span>
        </div>

        <form onSubmit={handleSubmit} noValidate aria-label="فورم حجز المقابلة" className="flex flex-col gap-5">

          {/* Name + Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm font-medium text-text">
                الاسم بالكامل <span className="text-ibs-green-text" aria-hidden="true">*</span>
              </label>
              <input
                id="name" name="name" type="text"
                placeholder="اكتب اسمك هنا"
                autoComplete="name"
                aria-required="true"
                aria-describedby={errors.name ? 'name-err' : undefined}
                className={`${inputBase} ${errors.name ? inputError : ''}`}
              />
              {errors.name && <span id="name-err" role="alert" className="text-xs text-red-600 font-medium">{errors.name}</span>}
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="phone" className="text-sm font-medium text-text">
                رقم الهاتف / واتساب <span className="text-ibs-green-text" aria-hidden="true">*</span>
              </label>
              <input
                id="phone" name="phone" type="tel"
                placeholder="01xxxxxxxxx"
                autoComplete="tel"
                aria-required="true"
                aria-describedby={errors.phone ? 'phone-err' : undefined}
                className={`${inputBase} ${errors.phone ? inputError : ''}`}
                dir="ltr"
              />
              {errors.phone && <span id="phone-err" role="alert" className="text-xs text-red-600 font-medium">{errors.phone}</span>}
            </div>
          </div>

          {/* Email + Age */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-medium text-text">
                البريد الإلكتروني <span className="text-ibs-green-text" aria-hidden="true">*</span>
              </label>
              <input
                id="email" name="email" type="email"
                placeholder="example@email.com"
                autoComplete="email"
                aria-required="true"
                aria-describedby={errors.email ? 'email-err' : undefined}
                className={`${inputBase} ${errors.email ? inputError : ''}`}
                dir="ltr"
              />
              {errors.email && <span id="email-err" role="alert" className="text-xs text-red-600 font-medium">{errors.email}</span>}
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="age" className="text-sm font-medium text-text">
                السن <span className="text-ibs-green-text" aria-hidden="true">*</span>
              </label>
              <input
                id="age" name="age" type="number"
                placeholder="٢٢" min={16} max={65}
                aria-required="true"
                aria-describedby={errors.age ? 'age-err' : undefined}
                className={`${inputBase} ${errors.age ? inputError : ''}`}
              />
              {errors.age && <span id="age-err" role="alert" className="text-xs text-red-600 font-medium">{errors.age}</span>}
            </div>
          </div>

          {/* Status + Course */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="status" className="text-sm font-medium text-text">
                الحالة الحالية <span className="text-ibs-green-text" aria-hidden="true">*</span>
              </label>
              <div className="relative">
                <select
                  id="status" name="status"
                  aria-required="true"
                  aria-describedby={errors.status ? 'status-err' : undefined}
                  className={`${inputBase} pe-10 appearance-none ${errors.status ? inputError : ''}`}
                  defaultValue=""
                >
                  <option value="" disabled>اختر حالتك</option>
                  {statusOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
                <SelectChevron />
              </div>
              {errors.status && <span id="status-err" role="alert" className="text-xs text-red-600 font-medium">{errors.status}</span>}
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="course" className="text-sm font-medium text-text">
                الكورس المهتم به <span className="text-ibs-green-text" aria-hidden="true">*</span>
              </label>
              <div className="relative">
                <select
                  id="course" name="course"
                  aria-required="true"
                  aria-describedby={errors.course ? 'course-err' : undefined}
                  className={`${inputBase} pe-10 appearance-none ${errors.course ? inputError : ''}`}
                  defaultValue=""
                >
                  <option value="" disabled>اختر الكورس</option>
                  {courseOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
                <SelectChevron />
              </div>
              {errors.course && <span id="course-err" role="alert" className="text-xs text-red-600 font-medium">{errors.course}</span>}
            </div>
          </div>

          {/* Goal */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="goal" className="text-sm font-medium text-text">
              هدفك من الانضمام <span className="text-ibs-green-text" aria-hidden="true">*</span>
            </label>
            <textarea
              id="goal" name="goal" rows={3}
              placeholder="مثلاً: عايز أبدأ بيزنس أونلاين، أو عايز أتحول لمجال التسويق..."
              aria-required="true"
              aria-describedby={errors.goal ? 'goal-err' : undefined}
              className={`${inputBase} resize-y min-h-[96px] ${errors.goal ? inputError : ''}`}
            />
            {errors.goal && <span id="goal-err" role="alert" className="text-xs text-red-600 font-medium">{errors.goal}</span>}
          </div>

          {/* Time */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="time" className="text-sm font-medium text-text">
              أنسب وقت للتواصل <span className="text-ibs-green-text" aria-hidden="true">*</span>
            </label>
            <div className="relative">
              <select
                id="time" name="time"
                aria-required="true"
                aria-describedby={errors.time ? 'time-err' : undefined}
                className={`${inputBase} pe-10 appearance-none ${errors.time ? inputError : ''}`}
                defaultValue=""
              >
                <option value="" disabled>اختر الوقت المناسب</option>
                {timeOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
              <SelectChevron />
            </div>
            {errors.time && <span id="time-err" role="alert" className="text-xs text-red-600 font-medium">{errors.time}</span>}
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-cta hover:bg-cta-hover text-white text-base font-bold rounded-lg transition-colors active:scale-[0.98] mt-1"
          >
            ارسال
          </button>

          <p className="text-center text-[0.8375rem] text-text-3 leading-relaxed">
            بعد إرسال البيانات، فريق IBS هيتواصل معاك لتحديد مقابلة قصيرة وفهم البرنامج الأنسب ليك.
          </p>
        </form>
      </div>
    </section>
  )
}

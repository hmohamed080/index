import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Journey } from '@/components/sections/Journey'
import { Features } from '@/components/sections/Features'
import { Programs } from '@/components/sections/Programs'
import { WhyIBS } from '@/components/sections/WhyIBS'
import { BookingForm } from '@/components/sections/BookingForm'
import { FAQ } from '@/components/sections/FAQ'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Journey />
        <Features />
        <Programs />
        <WhyIBS />
        <BookingForm />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}


import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/sections/Hero'
import { Amenities } from '@/components/sections/Amenities'
import { AICelebrations } from '@/components/sections/AICelebrations'
import { Reviews } from '@/components/sections/Reviews'
import { Booking } from '@/components/sections/Booking'
import { Footer } from '@/components/sections/Footer'
import { Toaster } from '@/components/ui/toaster'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <Hero />
      <Amenities />
      <AICelebrations />
      <Reviews />
      <Booking />
      <Footer />
      <Toaster />
    </main>
  )
}

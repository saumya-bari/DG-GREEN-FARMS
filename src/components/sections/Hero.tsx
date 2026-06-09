
"use client"

import Image from 'next/image'
import { PlaceHolderImages } from '@/app/lib/placeholder-images'
import { Button } from '@/components/ui/button'
import { ArrowDown } from 'lucide-react'

export const Hero = () => {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-cabin')

  return (
    <section id="experience" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={heroImage?.imageUrl || ''} 
          alt={heroImage?.description || 'Verdant Luxe Reserve'}
          fill
          className="object-cover scale-105"
          priority
          data-ai-hint="luxury forest cabin"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-background/40 to-background z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center container px-6 flex flex-col items-center">
        <div className="space-y-4 mb-8 opacity-0 animate-fade-in [animation-delay:200ms]">
          <span className="text-primary tracking-[0.6em] uppercase text-sm font-semibold">Escape to the Extraordinary</span>
          <h1 className="font-headline text-5xl md:text-8xl lg:text-9xl text-white leading-tight">
            Verdant Luxe <br /> <span className="italic font-light">Reserve</span>
          </h1>
        </div>
        
        <p className="max-w-2xl text-muted-foreground text-lg md:text-xl font-light leading-relaxed mb-10 opacity-0 animate-fade-in [animation-delay:600ms]">
          A sanctuary where architectural elegance meets the raw beauty of the forest. 
          Indulge in an exclusive retreat designed for those who seek silence, luxury, and serenity.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in [animation-delay:1000ms]">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-10 py-7 text-base tracking-widest uppercase">
            Explore Suites
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 px-10 py-7 text-base tracking-widest uppercase">
            View Gallery
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce text-primary/50">
        <ArrowDown size={32} strokeWidth={1} />
      </div>
    </section>
  )
}


"use client"

import { Star } from 'lucide-react'

const reviews = [
  {
    name: "Alexander Voss",
    source: "Google Reviews",
    rating: 5,
    text: "The silence here is something I've never experienced. Architectural perfection meets untamed wilderness. Simply breathtaking."
  },
  {
    name: "Eleanor Sterling",
    source: "Guest Testimonial",
    rating: 5,
    text: "Verdant Luxe is an absolute sanctuary. The private pool overlooking the valley at sunrise was the highlight of our stay."
  },
  {
    name: "Julian Thorne",
    source: "Verified Guest",
    rating: 5,
    text: "Everything from the heated jacuzzi to the in-house chef was beyond expectations. A masterclass in luxury hospitality."
  }
]

export const Reviews = () => {
  return (
    <section id="reviews" className="py-24 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary tracking-[0.4em] uppercase text-xs mb-4 block">Voices of Serenity</span>
          <h2 className="font-headline text-4xl md:text-6xl text-white">Guest Reflections</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="luxury-glass p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="flex text-primary mb-6 space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-white font-light italic leading-relaxed mb-8">
                  "{review.text}"
                </p>
              </div>
              <div className="border-t border-white/10 pt-6">
                <h4 className="font-headline text-lg text-white">{review.name}</h4>
                <p className="text-[10px] tracking-widest uppercase text-muted-foreground">{review.source}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


import Image from 'next/image'
import { PlaceHolderImages } from '@/app/lib/placeholder-images'
import { Waves, Thermometer, Bed, Utensils } from 'lucide-react'

const amenities = [
  {
    id: 'amenity-pool',
    title: 'Infinity Pool',
    desc: 'Uninterrupted views of the misty forest line.',
    icon: <Waves className="gold-stroke" size={24} strokeWidth={1} />
  },
  {
    id: 'amenity-jacuzzi',
    title: 'Heated Jacuzzi',
    desc: 'Therapeutic warmth amidst the cool nocturnal breeze.',
    icon: <Thermometer className="gold-stroke" size={24} strokeWidth={1} />
  },
  {
    id: 'amenity-suite',
    title: 'Deluxe Suites',
    desc: 'Bespoke furnishings and floor-to-ceiling glass.',
    icon: <Bed className="gold-stroke" size={24} strokeWidth={1} />
  },
  {
    id: 'amenity-dining',
    title: 'In-house Diner',
    desc: 'Private gourmet experiences crafted by our top chefs.',
    icon: <Utensils className="gold-stroke" size={24} strokeWidth={1} />
  }
]

export const Amenities = () => {
  return (
    <section id="amenities" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-primary tracking-[0.4em] uppercase text-xs mb-4 block">Our Offerings</span>
            <h2 className="font-headline text-4xl md:text-6xl text-white">Exceptional Amenities</h2>
          </div>
          <p className="text-muted-foreground max-w-sm mb-2 font-light">
            Every detail at Verdant Luxe Reserve is meticulously curated to provide a world-class hospitality experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((item) => {
            const img = PlaceHolderImages.find(p => p.id === item.id)
            return (
              <div key={item.id} className="group relative overflow-hidden rounded-lg">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <Image 
                    src={img?.imageUrl || ''} 
                    alt={item.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    data-ai-hint={item.title}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                </div>
                
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <div className="mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-headline text-2xl text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-500">
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

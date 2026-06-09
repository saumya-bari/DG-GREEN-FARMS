
"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'luxury-glass py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex flex-col">
          <span className="font-headline text-2xl tracking-widest text-primary uppercase">Verdant Luxe</span>
          <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground -mt-1">Reserve</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-12">
          {['Experience', 'Amenities', 'Architect', 'Reviews'].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium tracking-widest uppercase hover:text-primary transition-colors"
            >
              {item}
            </Link>
          ))}
          <Button variant="default" className="bg-accent hover:bg-accent/90 text-white tracking-widest uppercase text-xs px-8">
            Book Now
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-primary" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden luxury-glass absolute top-full left-0 w-full p-8 flex flex-col items-center space-y-6 animate-fade-in">
          {['Experience', 'Amenities', 'Architect', 'Reviews'].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-lg font-medium tracking-widest uppercase hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Button className="w-full bg-accent text-white tracking-widest uppercase">
            Reserve Your Stay
          </Button>
        </div>
      )}
    </nav>
  )
}

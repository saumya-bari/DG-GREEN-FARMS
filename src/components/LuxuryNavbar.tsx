"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface LuxuryNavbarProps {
  onBookClick: () => void;
}

export default function LuxuryNavbar({ onBookClick }: LuxuryNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Amenities", href: "#amenities" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#testimonials" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'bg-luxury-dark/95 backdrop-blur-md py-4 border-b border-gold/10 shadow-2xl' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group">
          <img 
            src="https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920463/LOGO_i9h4ex.jpg" 
            alt="DG Green Farms" 
            className="w-10 h-10 object-cover rounded-full border border-gold/30 shadow-lg"
          />
          <span className="font-serif text-xl tracking-wider text-white group-hover:text-gold transition-colors duration-300 uppercase">
            DG <span className="font-light italic">Green Farms</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] tracking-[0.3em] uppercase text-white/70 hover:text-gold transition-colors duration-300 font-semibold font-sans"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={onBookClick}
            className="px-6 py-2.5 border border-gold text-gold text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-gold hover:text-luxury-dark transition-all duration-300 font-sans shadow-lg"
          >
            RESERVE ESCAPE
          </button>
        </div>

        <button
          className="lg:hidden text-gold p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-luxury-dark z-[101] flex flex-col items-center justify-center gap-10"
          >
            <button
              className="absolute top-8 right-8 text-gold p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-serif italic text-white hover:text-gold transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                onBookClick();
                setIsMenuOpen(false);
              }}
              className="mt-4 px-12 py-4 bg-gold text-luxury-dark text-sm tracking-[0.2em] uppercase font-bold shadow-xl"
            >
              Reserve Escape
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
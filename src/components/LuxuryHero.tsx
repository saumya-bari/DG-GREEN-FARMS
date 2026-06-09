
"use client"

import { motion } from "framer-motion";
import { Sparkles, ArrowDown } from "lucide-react";

interface LuxuryHeroProps {
  onBookClick: () => void;
  onExploreClick: () => void;
}

export default function LuxuryHero({ onBookClick, onExploreClick }: LuxuryHeroProps) {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-luxury-dark">
      {/* Dynamic Vector Background */}
      <div className="absolute inset-0 opacity-15">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M0,500 Q250,200 500,500 T1000,500"
            fill="none"
            stroke="#c9a84c"
            strokeWidth="0.5"
            animate={{ d: ["M0,500 Q250,200 500,500 T1000,500", "M0,500 Q250,800 500,500 T1000,500", "M0,500 Q250,200 500,500 T1000,500"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-2 mb-8">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-[10px] tracking-[0.5em] uppercase text-gold font-sans font-medium">Escape to the Extraordinary</span>
          </div>
          
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white leading-tight mb-10">
            DG Green <br /> <span className="italic font-light text-gold text-glow">Farms</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-white/70 text-lg md:text-xl font-light leading-relaxed mb-12">
            A sanctuary where architectural elegance meets the raw beauty of the forest. 
            Indulge in an exclusive retreat designed for those who seek silence and luxury.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={onBookClick}
              className="px-10 py-4 bg-gold hover:bg-gold-light text-luxury-dark text-xs tracking-[0.3em] uppercase font-bold transition-all duration-300 shadow-xl cursor-pointer"
            >
              Secure Stay
            </button>
            <button
              onClick={onExploreClick}
              className="px-10 py-4 bg-transparent border border-gold/40 hover:border-gold text-gold text-xs tracking-[0.3em] uppercase font-bold transition-all duration-300 hover:bg-gold/5 cursor-pointer"
            >
              View Gallery
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold/50 cursor-pointer"
        onClick={onExploreClick}
      >
        <ArrowDown className="w-5 h-5" strokeWidth={1} />
      </motion.div>
    </section>
  );
}

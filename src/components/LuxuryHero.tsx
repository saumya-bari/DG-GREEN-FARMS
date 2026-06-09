"use client"

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Flame, Waves, Sparkles } from "lucide-react";
import ShinyText from "@/components/ShinyText";

interface LuxuryHeroProps {
  onBookClick: () => void;
  onExploreClick: () => void;
}

interface Particle {
  width: number;
  height: number;
  left: string;
  top: string;
  yMove: number;
  xMove: number;
  duration: number;
  delay: number;
}

export default function LuxuryHero({ onBookClick, onExploreClick }: LuxuryHeroProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generatedParticles = Array.from({ length: 22 }).map(() => ({
      width: Math.random() * 3 + 2,
      height: Math.random() * 3 + 2,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      yMove: -Math.random() * 150 - 50,
      xMove: (Math.random() - 0.5) * 40,
      duration: Math.random() * 6 + 5,
      delay: Math.random() * 5,
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#021107] pt-20">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <img
          src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1920&h=1080&auto=format&fit=crop"
          alt="Luxury Private Pool Backdrop"
          className="w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#021107] via-[#021107]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#021107]/50 via-transparent to-[#021107]/50" />
        
        <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full bg-emerald-500/10 blur-[130px] opacity-70" />
        <div className="absolute top-[50%] left-1/4 w-[400px] h-[400px] rounded-full bg-teal-500/5 blur-[120px] opacity-60" />
        
        <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M -100 200 Q 300 400 800 150 T 1700 350"
            fill="none"
            stroke="#c9a84c"
            strokeWidth="1.5"
            animate={{
              d: [
                "M -100 200 Q 300 400 800 150 T 1700 350",
                "M -100 250 Q 350 350 800 200 T 1700 300",
                "M -100 200 Q 300 400 800 150 T 1700 350"
              ]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M -100 600 Q 400 450 900 650 T 1800 500"
            fill="none"
            stroke="#c9a84c"
            strokeWidth="1"
            animate={{
              d: [
                "M -100 600 Q 400 450 900 650 T 1800 500",
                "M -100 550 Q 450 500 900 600 T 1800 550",
                "M -100 600 Q 400 450 900 650 T 1800 500"
              ]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center opacity-[0.18]">
          <div className="relative w-full h-full max-w-4xl max-h-[700px] flex items-center justify-center">
            <div className="absolute w-[280px] h-[280px] md:w-[480px] md:h-[480px] border border-gold/15 rounded-full liquid-pool-bg" />
            <div className="absolute w-[350px] h-[350px] md:w-[600px] md:h-[600px] border border-emerald-500/10 rounded-full liquid-pool-bg [animation-delay:4s]" />
            <div className="absolute w-[420px] h-[420px] md:w-[720px] md:h-[720px] border border-gold/10 rounded-full liquid-pool-bg [animation-delay:8s]" />
          </div>
        </div>

        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gold/70"
            style={{
              width: p.width,
              height: p.height,
              left: p.left,
              top: p.top,
            }}
            animate={{
              y: [0, p.yMove],
              x: [0, p.xMove],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/25 backdrop-blur-sm mb-6"
        >
          <div className="flex items-center gap-2">
            <img 
              src="https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920463/LOGO_i9h4ex.jpg" 
              alt="DG Green Farms Logo" 
              className="w-5 h-5 object-cover rounded-full border border-gold/40 shadow-[0_0_8px_rgba(201,168,76,0.25)]"
            />
            <span className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-gold font-sans font-semibold">
              DG GREEN FARMS
            </span>
          </div>
          <span className="text-white/30 hidden md:inline">|</span>
          <div className="flex items-center gap-1.5 bg-[#0c2415]/70 px-2 py-0.5 border border-gold/20 rounded-md">
            <span className="text-gold font-bold text-xs">4.7 ★</span>
            <span className="text-[9px] md:text-[10px] tracking-wider text-white/80 font-sans uppercase font-medium">
              (Google Reviews)
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 0.95, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-5xl sm:text-7xl md:text-8xl font-light text-white tracking-wide leading-[1.1] mb-6"
          id="hero-title"
        >
          Where <span className="font-serif italic text-gold text-glow">Luxury</span>
          <br />
          <span className="font-sans font-bold tracking-tight block mt-3 text-2xl sm:text-4xl md:text-5xl uppercase">
            <ShinyText 
              text="Parties & Gatherings Blend" 
              speed={3} 
              color="#ffffff" 
              shineColor="#c9a84c" 
              spread={120}
              className="tracking-tight"
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="text-xs sm:text-sm text-gold-light/95 leading-relaxed tracking-widest uppercase font-sans font-medium mb-10 max-w-3xl mx-auto"
        >
          Indore's Perfect Destination for Celebrations, Get-togethers & Weekend Escapes
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 text-xs md:text-sm text-white/70 tracking-wider uppercase font-sans mb-12 max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-1.5 px-3 py-1 border-r border-white/20 last:border-0">
            <Waves className="w-4 h-4 text-gold opacity-80" />
            <span>Private Pool</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 border-r border-white/20 last:border-0">
            <Flame className="w-4 h-4 text-gold opacity-80" />
            <span>Heated Jacuzzi</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 border-r border-white/20 last:border-0">
            <Waves className="w-4 h-4 text-gold opacity-80" />
            <span>Deluxe Suites</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1">
            <Sparkles className="w-4 h-4 text-gold opacity-80" />
            <span>In-House Diner</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={onBookClick}
            className="w-full sm:w-auto px-8 py-4 bg-gold text-luxury-dark font-sans text-xs tracking-[0.2em] font-semibold uppercase hover:bg-gold-light focus:outline-none transition-all duration-300 shadow-2xl cursor-pointer"
            id="hero-cta-primary"
          >
            Reserve Your Escape
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, borderColor: "#c9a84c", color: "#c9a84c" }}
            whileTap={{ scale: 0.97 }}
            onClick={onExploreClick}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 text-white font-sans text-xs tracking-[0.2em] uppercase hover:bg-white/5 focus:outline-none transition-all duration-300 cursor-pointer"
            id="hero-cta-secondary"
          >
            Explore Property
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase text-white/50 font-sans">
          Scroll to discover
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-gold-light" />
        </motion.div>
      </motion.div>
    </section>
  );
}

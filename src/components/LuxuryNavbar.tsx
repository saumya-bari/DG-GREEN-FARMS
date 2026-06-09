"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, Phone } from "lucide-react";
import GlitchText from "./GlitchText";

interface LuxuryNavbarProps {
  onBookClick: () => void;
}

export default function LuxuryNavbar({ onBookClick }: LuxuryNavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "About", href: "#about" },
    { label: "Amenities", href: "#amenities" },
    { label: "Gallery", href: "#gallery-section" },
    { label: "Reviews", href: "#testimonials" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 md:px-12 ${
          scrolled
            ? "bg-[#060e0a]/90 backdrop-blur-md border-b border-gold/15 shadow-lg"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            className="group flex items-center gap-2.5 focus:outline-none"
            id="nav-logo"
          >
            <img 
              src="https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920463/LOGO_i9h4ex.jpg" 
              alt="DG Green Farms Logo" 
              className="w-9 h-9 object-cover rounded-full border border-gold/30 shadow-[0_0_10px_rgba(201,168,76,0.2)] group-hover:border-gold group-hover:shadow-[0_0_15px_rgba(201,168,76,0.35)] transition-all duration-300"
            />
            <div className="font-serif text-xl md:text-2xl tracking-wider text-gold hover:text-gold-light transition-colors duration-300 uppercase flex items-center">
              <GlitchText speed={0.8} className="font-serif">DG GREEN FARMS</GlitchText>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8 list-none m-0 p-0">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="relative text-[10px] tracking-[0.16em] uppercase text-white/80 hover:text-gold transition-all duration-300 py-2 group font-sans font-semibold"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Book CTA */}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(201,168,76,0.3)" }}
              whileTap={{ scale: 0.98 }}
              onClick={onBookClick}
              className="text-[10px] uppercase tracking-[0.18em] text-gold bg-transparent border border-gold hover:bg-gold hover:text-luxury-dark transition-all duration-300 px-6 py-2.5 rounded-none cursor-pointer font-bold font-sans"
              id="desktop-cta"
            >
              Reserve Escape
            </motion.button>
          </div>

          {/* Mobile menu trigger */}
          <div className="md:hidden flex items-center gap-4">
            <a
              href="tel:+919977220204"
              className="p-2 text-gold hover:text-gold-light transition-colors duration-200"
              title="Call Staycation Manager"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-gold transition-colors duration-200 focus:outline-none"
              id="mobile-menu-btn"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-[70px] left-0 right-0 z-40 bg-[#060e0a] border-b border-gold/15 shadow-xl md:hidden overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              <ul className="flex flex-col gap-5 list-none m-0 p-0">
                {menuItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xs uppercase tracking-[0.16em] text-white/90 hover:text-gold py-1 font-semibold"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full text-center text-xs uppercase tracking-[0.18em] text-luxury-dark bg-gold hover:bg-gold-light py-4 font-bold transition-all duration-300"
                id="mobile-cta"
              >
                Reserve Escape
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

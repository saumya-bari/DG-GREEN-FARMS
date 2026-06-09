
"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  MapPin,
  Sparkles,
  Star,
  Users,
  Check,
  Waves,
  Flame,
  Heart,
  BedDouble,
  Utensils,
  ArrowRight,
  ArrowLeft,
  X,
  ChevronRight,
  ShieldCheck,
  Award
} from "lucide-react";
import LuxuryNavbar from "@/components/LuxuryNavbar";
import LuxuryHero from "@/components/LuxuryHero";
import CustomCursor from "@/components/CustomCursor";
import Counter from "@/components/Counter";
import { amenitiesList, reviewsList } from "@/app/lib/data";

export default function App() {
  const [selectedAmenityDetail, setSelectedAmenityDetail] = useState<any>(null);
  const [activeLightboxImage, setActiveLightboxImage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  const handleWhatsAppContact = (customText?: string) => {
    const text = customText || "Greetings Verdant Luxe, I would like to enquire about a luxury getaway staycation reservation.";
    window.open(`https://wa.me/919977220204?text=${encodeURIComponent(text)}`, "_blank");
  };

  const galleryImages = [
    {
      src: "https://picsum.photos/seed/v1/1200/800",
      title: "Sunset Pool Majesty",
      category: "Private Pool",
      description: "Exclusive heated pool illuminated with twilight fiber-optics.",
      size: "col-span-12 md:col-span-8 h-[280px] md:h-[380px]"
    },
    {
      src: "https://picsum.photos/seed/v2/1200/800",
      title: "Deluxe Master Sanctuary",
      category: "Luxury Suite",
      description: "Plush designer bedrooms with smart dimming lights.",
      size: "col-span-12 md:col-span-4 h-[280px] md:h-[380px]"
    },
    {
      src: "https://picsum.photos/seed/v3/1200/800",
      title: "Imperial Canopy Seclusion",
      category: "Romantic Decor",
      description: "A private evening setup adorned with golden accents.",
      size: "col-span-12 sm:col-span-6 md:col-span-4 h-[280px]"
    },
    {
      src: "https://picsum.photos/seed/v4/1200/800",
      title: "Floating Rose Serenade",
      category: "Romantic Decor",
      description: "Red rose petals floating gently on the pool water.",
      size: "col-span-12 sm:col-span-6 md:col-span-4 h-[280px]"
    },
    {
      src: "https://picsum.photos/seed/v5/1200/800",
      title: "Midnight Solitude Spa",
      category: "Wellness",
      description: "Warm ambient lit wellness bath designed for private evening meditation.",
      size: "col-span-12 md:col-span-4 h-[280px]"
    }
  ];

  const filteredImages = selectedCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === selectedCategory);

  const handleOpenLightbox = (index: number) => {
    setActiveLightboxImage(filteredImages[index].src);
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => setActiveLightboxImage(null);

  const handleNextLightbox = () => {
    setLightboxIndex((prev) => {
      const nextIdx = (prev + 1) % filteredImages.length;
      setActiveLightboxImage(filteredImages[nextIdx].src);
      return nextIdx;
    });
  };

  const handlePrevLightbox = () => {
    setLightboxIndex((prev) => {
      const prevIdx = (prev - 1 + filteredImages.length) % filteredImages.length;
      setActiveLightboxImage(filteredImages[prevIdx].src);
      return prevIdx;
    });
  };

  useEffect(() => {
    if (!activeLightboxImage) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleCloseLightbox();
      else if (e.key === "ArrowRight") handleNextLightbox();
      else if (e.key === "ArrowLeft") handlePrevLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeLightboxImage]);

  return (
    <main className="relative min-h-screen bg-luxury-dark text-white overflow-x-hidden">
      <CustomCursor />
      <LuxuryNavbar onBookClick={() => handleWhatsAppContact()} />
      <LuxuryHero onBookClick={() => handleWhatsAppContact()} onExploreClick={() => scrollToSection("gallery")} />

      {/* About Section */}
      <section className="relative py-32 bg-[#0a140f] z-10 border-t border-gold/10" id="about">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative h-[500px] w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="absolute right-0 top-0 w-[85%] h-[80%] overflow-hidden bg-[#0c2415] border border-gold/20 shadow-2xl group cursor-pointer"
            >
              <img src="https://picsum.photos/seed/about1/800/600" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              className="absolute left-0 bottom-0 w-[60%] h-[55%] overflow-hidden bg-[#1a1205] border-4 border-[#0a140f] shadow-2xl group cursor-pointer"
            >
              <img src="https://picsum.photos/seed/about2/800/600" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-gold" />
              <span className="text-xs tracking-[0.3em] uppercase text-gold font-sans">Our Sanctuary</span>
            </div>
            <h2 className="font-serif text-5xl font-light text-white mb-8">
              Coutured for <span className="italic text-gold">Serenity</span>
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-10 font-light">
              Experience the pinnacle of exclusive forest living. Verdant Luxe Reserve offers a bespoke takeover experience, ensuring absolute privacy for your celebrations and retreats.
            </p>
            <div className="grid grid-cols-2 gap-10">
              <div>
                <span className="text-4xl text-gold font-serif"><Counter target={4} suffix="+" /></span>
                <span className="block text-[10px] uppercase tracking-widest text-white/50 mt-2">Deluxe Suites</span>
              </div>
              <div>
                <span className="text-4xl text-gold font-serif"><Counter target={100} suffix="%" /></span>
                <span className="block text-[10px] uppercase tracking-widest text-white/50 mt-2">Privacy Shield</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="relative py-32 bg-[#061009] z-10 border-t border-gold/10" id="amenities">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-6 block">Ultra-Custom Features</span>
            <h2 className="font-serif text-5xl font-light text-white mb-16">World-Class <span className="italic text-gold">Services</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenitiesList.map((amenity, idx) => (
              <motion.div
                key={amenity.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setSelectedAmenityDetail(amenity)}
                className="relative aspect-[1/1.1] overflow-hidden bg-luxury-dark border border-gold/10 group cursor-pointer flex flex-col justify-end p-10 text-left"
              >
                <img src={amenity.image} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                <div className="relative z-20">
                  <div className="w-12 h-12 border border-gold/40 flex items-center justify-center mb-6 bg-black/60 group-hover:bg-gold transition-all">
                    {idx === 0 && <Waves className="w-5 h-5 text-gold group-hover:text-black" />}
                    {idx === 1 && <Flame className="w-5 h-5 text-gold group-hover:text-black" />}
                    {idx === 2 && <Utensils className="w-5 h-5 text-gold group-hover:text-black" />}
                    {idx === 3 && <BedDouble className="w-5 h-5 text-gold group-hover:text-black" />}
                    {idx === 4 && <Heart className="w-5 h-5 text-gold group-hover:text-black" />}
                    {idx === 5 && <Users className="w-5 h-5 text-gold group-hover:text-black" />}
                  </div>
                  <span className="text-[10px] tracking-widest uppercase text-gold block mb-2">{amenity.tagline}</span>
                  <h3 className="font-serif text-2xl text-white mb-4">{amenity.name}</h3>
                  <div className="flex items-center gap-2 text-xs text-gold/80 group-hover:translate-x-2 transition-transform">
                    <span>Customize this stay</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative py-32 bg-[#040906] z-10 border-t border-gold/10" id="gallery">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Visual Sanctuary</span>
          <h2 className="font-serif text-5xl font-light text-white">Pure <span className="italic text-gold">Seclusion</span></h2>
        </div>
        
        <div className="grid grid-cols-12 gap-4 px-6 md:px-12 max-w-7xl mx-auto">
          {filteredImages.map((image, idx) => (
            <motion.div
              key={image.src}
              onClick={() => handleOpenLightbox(idx)}
              className={`${image.size} relative overflow-hidden cursor-pointer border border-gold/10 group`}
            >
              <img src={image.src} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />
              <div className="absolute bottom-6 left-6 z-20">
                <span className="text-[9px] tracking-widest uppercase text-gold mb-1 block">{image.category}</span>
                <h4 className="font-serif text-xl text-white">{image.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-[#050b07] z-10 border-t border-gold/10" id="testimonials">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <span className="text-xs tracking-[0.3em] uppercase text-gold mb-6 block">Guest Chronicles</span>
          <h2 className="font-serif text-5xl font-light text-white mb-20">Words of Our <span className="italic text-gold text-glow">Patrons</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviewsList.map((rev) => (
              <div key={rev.id} className="p-10 border border-gold/15 bg-black/40 text-left">
                <div className="flex gap-1 text-gold mb-8">
                  {Array.from({ length: rev.rating }).map((_, i) => <Star key={i} className="w-4 h-4 fill-gold" />)}
                </div>
                <p className="font-serif italic text-white/90 text-lg mb-10 leading-relaxed">"{rev.text}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-gold/10">
                  <div className="w-10 h-10 border border-gold/30 bg-gold/10 flex items-center justify-center font-bold text-xs text-gold">{rev.authorInitials}</div>
                  <div>
                    <span className="text-sm font-semibold text-white block">{rev.author}</span>
                    <span className="text-[10px] text-white/50 uppercase tracking-widest">{rev.stayType}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-luxury-dark border-t border-gold/15 pt-24 pb-12 z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-2 space-y-8">
              <span className="font-serif text-3xl tracking-widest text-gold uppercase">Verdant Luxe <span className="text-white italic font-light">Reserve</span></span>
              <p className="text-white/50 text-sm max-w-sm leading-relaxed">
                Indore's premiere boutique resort. Orchestrating private luxury stays, candlelight jacuzzi layouts, and authentic culinary retreats.
              </p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-gold font-bold mb-8">Navigation</h4>
              <ul className="space-y-4 text-xs text-white/60">
                <li><a href="#about" className="hover:text-gold transition-colors">About Story</a></li>
                <li><a href="#amenities" className="hover:text-gold transition-colors">Amenities</a></li>
                <li><a href="#gallery" className="hover:text-gold transition-colors">Gallery</a></li>
                <li><a href="#testimonials" className="hover:text-gold transition-colors">Patrons</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-gold font-bold mb-8">Contact</h4>
              <ul className="space-y-4 text-xs text-white/60">
                <li>+1 (800) LUXE-RES</li>
                <li>concierge@verdantluxe.com</li>
                <li>Sanctuary Blvd, Forest Edge</li>
              </ul>
            </div>
          </div>
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/40 uppercase tracking-widest">
            <span>&copy; {new Date().getFullYear()} Verdant Luxe Reserve. All Rights Reserved.</span>
            <div className="flex gap-8">
              <a href="#" className="hover:text-gold">Privacy</a>
              <a href="#" className="hover:text-gold">Terms</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <AnimatePresence>
        {selectedAmenityDetail && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative w-full max-w-lg bg-[#0a1410] border border-gold/30 p-12 shadow-2xl">
              <button onClick={() => setSelectedAmenityDetail(null)} className="absolute top-6 right-6 text-white/70 hover:text-white transition-all"><X className="w-6 h-6" /></button>
              <Sparkles className="w-8 h-8 text-gold mb-6" />
              <h2 className="font-serif text-3xl font-light text-white mb-2">{selectedAmenityDetail.name}</h2>
              <span className="text-[10px] tracking-widest text-gold uppercase mb-8 block">{selectedAmenityDetail.tagline}</span>
              <p className="text-white/80 leading-relaxed mb-10">{selectedAmenityDetail.description}</p>
              <button onClick={() => handleWhatsAppContact(`Inquiry about ${selectedAmenityDetail.name}`)} className="w-full py-4 bg-gold text-luxury-dark text-xs tracking-widest uppercase font-bold hover:bg-gold-light transition-colors">Inquire Now</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeLightboxImage && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-6 backdrop-blur-lg" onClick={handleCloseLightbox}>
            <button onClick={handleCloseLightbox} className="absolute top-10 right-10 text-white hover:text-gold transition-colors z-[10001]"><X className="w-8 h-8" /></button>
            <motion.img initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} src={activeLightboxImage} className="max-w-full max-h-[80vh] object-contain border border-gold/20" onClick={(e) => e.stopPropagation()} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

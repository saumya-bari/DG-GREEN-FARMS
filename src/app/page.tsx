"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Star,
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
  Award,
  Phone,
  MapPin,
  Users
} from "lucide-react";
import LuxuryNavbar from "@/components/LuxuryNavbar";
import LuxuryHero from "@/components/LuxuryHero";
import CustomCursor from "@/components/CustomCursor";
import Counter from "@/components/Counter";
import { amenitiesList, reviewsList, galleryImages } from "@/app/lib/data";

export default function App() {
  const [selectedAmenityDetail, setSelectedAmenityDetail] = useState<any>(null);
  const [activeLightboxImage, setActiveLightboxImage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  const handleWhatsAppContact = (customText?: string) => {
    const text = customText || "Greetings DG Green Farms, I would like to enquire about a luxury getaway staycation reservation.";
    window.open(`https://wa.me/919977220204?text=${encodeURIComponent(text)}`, "_blank");
  };

  const handleOpenLightbox = (index: number) => {
    setActiveLightboxImage(galleryImages[index].src);
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => setActiveLightboxImage(null);

  const handleNextLightbox = () => {
    setLightboxIndex((prev) => {
      const nextIdx = (prev + 1) % galleryImages.length;
      setActiveLightboxImage(galleryImages[nextIdx].src);
      return nextIdx;
    });
  };

  const handlePrevLightbox = () => {
    setLightboxIndex((prev) => {
      const prevIdx = (prev - 1 + galleryImages.length) % galleryImages.length;
      setActiveLightboxImage(galleryImages[prevIdx].src);
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
    <main className="relative min-h-screen bg-luxury-dark text-white selection:bg-gold/30 overflow-x-hidden">
      <CustomCursor />
      <LuxuryNavbar onBookClick={() => handleWhatsAppContact()} />
      <LuxuryHero onBookClick={() => handleWhatsAppContact()} onExploreClick={() => scrollToSection("gallery")} />

      {/* Story Section */}
      <section className="relative py-24 bg-[#0a140f] z-10 border-t border-gold/10" id="about">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[480px] md:h-[580px] w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="absolute right-0 top-0 w-[82%] h-[75%] overflow-hidden bg-[#0c2415] border border-gold/15 shadow-2xl group cursor-pointer"
            >
              <img src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=800&h=600&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" alt="About Pool" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              className="absolute left-0 bottom-0 w-[58%] h-[50%] overflow-hidden bg-[#1a1205] border-4 border-[#0a140f] shadow-2xl group cursor-pointer"
            >
              <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&h=600&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" alt="About Bedroom" />
            </motion.div>
            <motion.div
              initial={{ rotate: -15, scale: 0.8 }}
              whileInView={{ rotate: 0, scale: 1 }}
              viewport={{ once: true }}
              className="absolute right-[5%] bottom-[12%] z-30 bg-gold text-luxury-dark p-4 text-center shadow-lg w-[140px]"
            >
              <Award className="w-5 h-5 mx-auto text-luxury-dark mb-1" />
              <span className="font-serif text-2xl font-bold block">4.7 ★</span>
              <span className="text-[7px] tracking-widest uppercase font-bold block mt-1">GUEST RATING</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-[1px] bg-gold" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-sans font-semibold">OUR SANCTUARY</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-white leading-tight mb-6">
              A Private Escape <br />
              <span className="italic text-gold text-glow">Coutured for Serenity</span>
            </h2>
            <p className="text-white/85 text-sm md:text-base leading-relaxed mb-10 font-light font-sans">
              Experience the peak of exclusive farm living at DG Green Farms. Our boutique resort offers a bespoke takeover experience, ensuring absolute privacy for your celebrations and retreats.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gold/15">
              <div>
                <span className="text-4xl text-gold font-serif"><Counter target={4} suffix="+" /></span>
                <span className="block text-[10px] uppercase tracking-widest text-white/50 mt-1 font-sans">Deluxe Suites</span>
              </div>
              <div>
                <span className="text-4xl text-gold font-serif"><Counter target={100} suffix="%" /></span>
                <span className="block text-[10px] uppercase tracking-widest text-white/50 mt-1 font-sans">Privacy Guarantee</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="relative py-24 bg-[#061009] z-10 border-t border-gold/10" id="amenities">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-sans font-semibold block mb-4">ULTRA-CUSTOM FEATURES</span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-white mb-16">World-Class <span className="italic text-gold text-glow">Services</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {amenitiesList.map((amenity, idx) => (
              <motion.div
                key={amenity.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setSelectedAmenityDetail(amenity)}
                className="relative aspect-[1/1.1] overflow-hidden bg-luxury-dark border border-gold/10 group cursor-pointer flex flex-col justify-end p-8 text-left"
              >
                <img src={amenity.image} className="absolute inset-0 w-full h-full object-cover opacity-35 transition-all duration-700 group-hover:opacity-55 group-hover:scale-105" alt={amenity.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040a06] via-transparent to-transparent z-10" />
                <div className="relative z-20">
                  <div className="w-12 h-12 border border-gold/40 flex items-center justify-center mb-6 bg-black/60 group-hover:bg-gold transition-all duration-300">
                    {amenity.icon === "Waves" && <Waves className="w-5 h-5 text-gold group-hover:text-luxury-dark" />}
                    {amenity.icon === "Flame" && <Flame className="w-5 h-5 text-gold group-hover:text-luxury-dark" />}
                    {amenity.icon === "Utensils" && <Utensils className="w-5 h-5 text-gold group-hover:text-luxury-dark" />}
                    {amenity.icon === "BedDouble" && <BedDouble className="w-5 h-5 text-gold group-hover:text-luxury-dark" />}
                    {amenity.icon === "Heart" && <Heart className="w-5 h-5 text-gold group-hover:text-luxury-dark" />}
                    {amenity.icon === "Users" && <Users className="w-5 h-5 text-gold group-hover:text-luxury-dark" />}
                  </div>
                  <span className="text-[10px] tracking-widest uppercase text-gold block mb-2 font-sans font-semibold">{amenity.tagline}</span>
                  <h3 className="font-serif text-xl text-white mb-2">{amenity.name}</h3>
                  <div className="flex items-center gap-1.5 text-[10px] text-gold/80 group-hover:translate-x-1 transition-all font-sans font-semibold">
                    <span className="uppercase tracking-widest">Customize this stay</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section - EXACTLY AS REQUESTED */}
      <section className="relative py-24 bg-[#040906] z-10 border-t border-gold/10 overflow-hidden" id="gallery">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-left">
          <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-sans font-semibold block mb-3">CAPTURED MOMENTS</span>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-white leading-tight">See the <span className="italic text-gold text-glow">Beauty</span></h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-6 md:px-12 max-w-7xl mx-auto">
          {galleryImages.map((image, idx) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => handleOpenLightbox(idx)}
              className="relative overflow-hidden cursor-pointer border border-gold/15 group aspect-[3/4] bg-[#0c1a10]"
            >
              <img src={image.src} className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-110" alt={image.title} />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />
              <div className="absolute bottom-6 left-6 z-20 text-left">
                <h4 className="font-serif text-lg italic text-white mb-1">{image.title}</h4>
                <span className="text-[9px] tracking-widest uppercase text-gold font-sans font-semibold">{image.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Patrons Section */}
      <section className="py-24 bg-[#050b07] z-10 border-t border-gold/10" id="testimonials">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-sans font-semibold mb-6 block">GUEST CHRONICLES</span>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-white mb-20">Words of Our <span className="italic text-gold text-glow">Patrons</span></h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {reviewsList.map((rev) => (
              <div key={rev.id} className="p-8 border border-gold/15 bg-[#0a1410] text-left">
                <div className="flex gap-1 text-gold mb-6">
                  {Array.from({ length: rev.rating }).map((_, i) => <Star key={i} className="w-4 h-4 fill-gold" />)}
                </div>
                <p className="font-serif italic text-white/90 text-lg mb-8 leading-relaxed">"{rev.text}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-gold/10">
                  <div className="w-10 h-10 border border-gold/30 bg-gold/10 flex items-center justify-center font-bold text-xs text-gold">{rev.authorInitials}</div>
                  <div>
                    <span className="text-xs font-semibold text-white block font-sans">{rev.author}</span>
                    <span className="text-[10px] text-white/50 uppercase tracking-widest font-sans font-medium">{rev.stayType}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-luxury-dark border-t border-gold/15 pt-20 pb-12 z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <span className="font-serif text-2xl tracking-widest text-gold uppercase">DG <span className="text-white italic font-light">Green Farms</span></span>
              <p className="text-white/50 text-xs max-w-sm leading-relaxed font-light font-sans">
                Indore's premiere boutique resort. Orchestrating private luxury stays, candlelight jacuzzi layouts, and authentic farm culinary retreats.
              </p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-gold font-bold mb-8 font-sans">NAVIGATION</h4>
              <ul className="space-y-4 text-xs text-white/60 font-light font-sans">
                <li><a href="#about" className="hover:text-gold transition-colors uppercase tracking-widest">Story</a></li>
                <li><a href="#amenities" className="hover:text-gold transition-colors uppercase tracking-widest">Amenities</a></li>
                <li><a href="#gallery" className="hover:text-gold transition-colors uppercase tracking-widest">Gallery</a></li>
                <li><a href="#testimonials" className="hover:text-gold transition-colors uppercase tracking-widest">Patrons</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-gold font-bold mb-8 font-sans">CONTACT</h4>
              <ul className="space-y-4 text-xs text-white/60 font-light font-sans uppercase tracking-widest">
                <li>+91 99772 20204</li>
                <li>concierge@dggreenfarms.com</li>
                <li>Parsvnath City, Indore</li>
              </ul>
            </div>
          </div>
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/40 uppercase tracking-widest font-sans">
            <span>&copy; {new Date().getFullYear()} DG Green Farms. All Rights Reserved.</span>
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
              <span className="text-[10px] tracking-widest text-gold uppercase mb-8 block font-sans font-semibold">{selectedAmenityDetail.tagline}</span>
              <p className="text-white/80 leading-relaxed mb-10 text-sm font-sans font-light">{selectedAmenityDetail.description}</p>
              <button onClick={() => handleWhatsAppContact(`Inquiry about ${selectedAmenityDetail.name}`)} className="w-full py-4 bg-gold text-luxury-dark text-xs tracking-widest uppercase font-bold hover:bg-gold-light transition-colors font-sans">Inquire via WhatsApp</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeLightboxImage && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-6 backdrop-blur-lg" onClick={handleCloseLightbox}>
            <button onClick={handleCloseLightbox} className="absolute top-10 right-10 text-white hover:text-gold transition-colors z-[10001]"><X className="w-8 h-8" /></button>
            <motion.img initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} src={activeLightboxImage} className="max-w-full max-h-[85vh] object-contain border border-gold/20 shadow-2xl" onClick={(e) => e.stopPropagation()} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
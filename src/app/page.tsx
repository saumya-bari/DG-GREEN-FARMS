
"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  MapPin,
  Sparkles,
  Check,
  Waves,
  Flame,
  Heart,
  BedDouble,
  Utensils,
  X,
  ChevronRight,
  Award,
  Users,
  ShieldCheck,
  Instagram,
  ArrowDown
} from "lucide-react";
import LuxuryNavbar from "@/components/LuxuryNavbar";
import LuxuryHero from "@/components/LuxuryHero";
import CustomCursor from "@/components/CustomCursor";
import Counter from "@/components/Counter";
import CircularGallery from "@/components/ui/CircularGallery";
import GlareHover from "@/components/GlareHover";
import Threads from "@/components/Threads";
import GlitchText from "@/components/GlitchText";
import { amenitiesList } from "@/app/lib/data";

export default function App() {
  const [selectedAmenityDetail, setSelectedAmenityDetail] = useState<any>(null);

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

  const beautyImages = [
    { url: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1781004634/t1_pwfa6e.jpg", title: "Twilight Pool Ambience", desc: "MASTER ESTATE SECTION" },
    { url: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1781004634/t4_ozfpvj.jpg", title: "Poolside Organic Dining", desc: "CULINARY EXPERIENCE" },
    { url: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1781004639/t3_hp3s6m.jpg", title: "Surprise Romantic Decor", desc: "BESPOKE ANNIVERSARIES" },
    { url: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1781004638/t2_yoaycw.jpg", title: "Luminescent Master Suite", desc: "DELUXE ACCOMMODATION" },
    { url: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1781004638/t5_oyvkbx.jpg", title: "Private Group Retreat", desc: "SECURE GATHERINGS" },
    { url: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1781004638/t7_qwagru.jpg", title: "Wellness Jacuzzi Spa", desc: "HYDROTHERAPY" },
    { url: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1781004637/t6_yf6uq3.jpg", title: "Lush Sanctuary Lawns", desc: "OPEN AIR ZEN" },
  ];

  const visualSanctuaryItems = [
    { image: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920471/D9_vxkjho.png", text: "Imperial Seclusion" },
    { image: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920469/D5_ynpe38.png", text: "Floating Serenade" },
    { image: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920464/D6_vvq67s.png", text: "Midnight Solitude" },
    { image: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920464/D8_v9samu.png", text: "Velvet Rendezvous" },
    { image: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920460/d1_wpnfzg.png", text: "Cascading Petal Spa" },
    { image: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920447/D3_fctofk.png", text: "Gourmet Evening" },
    { image: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920446/D4_d8nz9n.png", text: "Whispering Red Canopy" },
    { image: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920445/D2_myhzij.png", text: "Floating Champagne" },
    { image: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920436/C2_l033eb.png", text: "Azure Infinity" },
    { image: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920418/B1_lnes8l.png", text: "Presidential Retreat" },
    { image: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920417/A5_euuohd.png", text: "Secret Palm Oasis" },
    { image: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920414/B3_kie4py.png", text: "Luminescent Master" },
    { image: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920411/A4_v4t56r.png", text: "Lush Sanctuary" },
    { image: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920403/A7_vnkmdi.png", text: "Zen Lawns" },
    { image: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920382/A3_sdom9l.png", text: "Tropical Courtyard" },
    { image: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920462/C1_wiinti.png", text: "Reflective Waters" },
    { image: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920376/A2_pd83ek.png", text: "Majestic Palm Gate" },
    { image: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920371/A6_txpr1w.png", text: "Emerald Privacy" },
    { image: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920370/A1_d5mlfv.png", text: "Grand Facade" },
    { image: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920396/A8_ocq5vf.png", text: "Sunlit Meadow" },
    { image: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1781004634/t1_pwfa6e.jpg", text: "Luxe Pool View" }
  ];

  return (
    <main className="relative min-h-screen bg-luxury-dark text-white selection:bg-gold/30 overflow-x-hidden">
      <CustomCursor />
      <LuxuryNavbar onBookClick={() => handleWhatsAppContact()} />
      <LuxuryHero onBookClick={() => handleWhatsAppContact()} onExploreClick={() => scrollToSection("gallery-section")} />

      {/* Story Section */}
      <section className="relative py-24 bg-[#0a140f] z-10 border-t border-gold/10" id="about">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="relative h-[500px] md:h-[650px] w-full">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="absolute right-0 top-0 w-[90%] h-[75%] overflow-hidden bg-[#0c2415] border border-gold/15 shadow-2xl group cursor-pointer">
              <img src="https://res.cloudinary.com/dhc0phwyg/image/upload/v1781004634/t1_pwfa6e.jpg" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" alt="DG Green Farms Pool" />
              <div className="absolute inset-0 bg-black/20" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="absolute left-0 bottom-0 w-[55%] h-[48%] overflow-hidden bg-[#1a1205] border-4 border-[#0a140f] shadow-2xl group cursor-pointer z-20">
              <img src="https://res.cloudinary.com/dhc0phwyg/image/upload/v1781004638/t2_yoaycw.jpg" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" alt="Master Suite" />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="text-[8px] tracking-[0.3em] uppercase text-gold/80 font-bold mb-1">STAYCATION HAVEN</span>
                <h4 className="font-serif italic text-white text-base mb-4">Bespoke Twilight Pool</h4>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="absolute right-[5%] bottom-[5%] z-30 bg-gold text-luxury-dark p-6 text-center shadow-2xl min-w-[150px]">
              <div className="flex flex-col items-center">
                <Award className="w-6 h-6 text-luxury-dark mb-1" />
                <span className="font-serif text-2xl font-bold block">4.7 ★</span>
                <span className="text-[8px] tracking-[0.2em] uppercase font-bold block mt-1">GOOGLE REVIEWS</span>
              </div>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-left">
            <h2 className="font-serif text-5xl md:text-6xl font-light text-white leading-tight mb-8">A Private Escape <br /> <span className="italic text-gold text-glow">Coutured for Serenity</span></h2>
            <div className="space-y-6 text-white/80 text-sm md:text-base leading-relaxed mb-8 font-light font-sans max-w-xl">
              <p>Turn your weekend into a mini-vacation at <strong>DG Green Farms</strong> 🌿✨ Experience good vibes, cozy deluxe rooms, premium pool dips, and unforgettable moments with family and friends! 💛</p>
            </div>
            <div className="w-full h-px bg-gold/15 mb-12" />
            <div className="grid grid-cols-2 gap-y-12 gap-x-8">
              <div><span className="text-4xl text-gold font-serif block mb-1"><Counter target={4} suffix="+" /></span><span className="block text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">DELUXE SUITES</span></div>
              <div><span className="text-4xl text-gold font-serif block mb-1"><Counter target={100} suffix="%" /></span><span className="block text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">UNBIASED PRIVACY</span></div>
              <div><span className="text-4xl text-gold font-serif block mb-1">24/7</span><span className="block text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">BUTLER HOSPITALITY</span></div>
              <div><span className="text-4xl text-gold font-serif block mb-1">∞</span><span className="block text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">UNFORGETTABLE VIBE</span></div>
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
              <motion.div key={amenity.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} onClick={() => setSelectedAmenityDetail(amenity)} className="relative aspect-[1/1.1] overflow-hidden bg-luxury-dark border border-gold/10 group cursor-pointer flex flex-col justify-end p-8 text-left">
                <img src={amenity.image} className="absolute inset-0 w-full h-full object-cover opacity-35 transition-all duration-700 group-hover:opacity-55 group-hover:scale-105" alt={amenity.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040a06] via-transparent to-transparent z-10" />
                <div className="relative z-20">
                  <div className="w-12 h-12 border border-gold/40 flex items-center justify-center mb-6 bg-black/60 group-hover:bg-gold transition-all duration-300">
                    {idx === 0 && <Waves className="w-5 h-5 text-gold group-hover:text-luxury-dark" />}
                    {idx === 1 && <Flame className="w-5 h-5 text-gold group-hover:text-luxury-dark" />}
                    {idx === 2 && <Utensils className="w-5 h-5 text-gold group-hover:text-luxury-dark" />}
                    {idx === 3 && <BedDouble className="w-5 h-5 text-gold group-hover:text-luxury-dark" />}
                    {idx === 4 && <Heart className="w-5 h-5 text-gold group-hover:text-luxury-dark" />}
                    {idx === 5 && <Users className="w-5 h-5 text-gold group-hover:text-luxury-dark" />}
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

      {/* See the Beauty Section (Infinite Scroll) */}
      <section className="relative py-24 bg-[#040906] z-10 border-t border-gold/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-left">
          <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-sans font-semibold block mb-3">CAPTURED MOMENTS</span>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-white leading-tight">See the <span className="italic text-gold text-glow">Beauty</span></h2>
        </div>
        
        <div className="relative w-full">
          {/* Gradient Fades on edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#040906] to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#040906] to-transparent z-20 pointer-events-none" />
          
          <div className="flex overflow-hidden">
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, ease: "linear", repeat: Infinity }}
              className="flex gap-4 shrink-0 px-4"
            >
              {[...beautyImages, ...beautyImages].map((img, idx) => (
                <div key={idx} className="relative w-[300px] md:w-[420px] aspect-[4/5] shrink-0 border border-white/5 overflow-hidden group">
                   <img src={img.url} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
                   <div className="absolute bottom-8 left-8 right-8 transition-transform duration-500 group-hover:-translate-y-2">
                     <h4 className="font-serif text-xl text-white mb-1.5">{img.title}</h4>
                     <p className="text-[9px] tracking-[0.25em] uppercase text-gold font-bold font-sans">{img.desc}</p>
                   </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visual Sanctuary Section */}
      <section className="relative py-24 bg-[#040906] z-10 border-t border-gold/10 overflow-hidden" id="gallery-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-left">
          <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-sans font-semibold block mb-3">Visual Sanctuary</span>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-white leading-tight">A Glimpse into <span className="italic text-gold text-glow">Pure Seclusion</span></h2>
        </div>
        <div className="relative w-full h-[600px] md:h-[800px]">
          <CircularGallery items={visualSanctuaryItems} bend={3} textColor="#c9a84c" borderRadius={0.02} scrollEase={0.03} font="italic 20px Cormorant Garamond" />
        </div>
      </section>

      {/* Estate Specifications Section */}
      <section className="relative py-24 bg-[#0a140f] z-10 border-t border-gold/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-sans font-bold block mb-4">ESTATE BLUEPRINTS</span>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-white leading-tight">Verified Estate <span className="italic text-gold text-glow">Specifications</span></h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-2.5 px-5 py-3 border border-emerald-500/30 bg-emerald-500/5 backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span className="text-[9px] tracking-[0.2em] uppercase text-white/80 font-bold font-sans">GOOGLE MAPS VERIFIED</span>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ y: -8 }} className="relative overflow-hidden group">
              <GlareHover width="100%" height="100%" background="rgba(6, 14, 10, 0.6)" borderColor="rgba(201, 168, 76, 0.1)" borderRadius="0px" glareColor="#c9a84c" glareOpacity={0.2} className="!block p-10 h-full border border-gold/10 hover:border-gold/30">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-blue-600/20 border border-blue-600/40 flex items-center justify-center"><Waves className="w-5 h-5 text-blue-500" /></div>
                  <div><h4 className="font-serif text-lg text-white">Accessibility</h4><span className="text-[8px] tracking-[0.3em] uppercase text-white/40 font-bold">INCLUSIVE DESIGN</span></div>
                </div>
                <motion.ul variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
                  {["Wheelchair-accessible entrance", "Wheelchair-accessible car park", "Seating & restrooms accessible"].map((item, i) => (
                    <motion.li key={i} variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} className="flex items-center gap-3 text-xs text-white/70 font-light font-sans"><Check className="w-4 h-4 text-emerald-500 shrink-0" /><span>{item}</span></motion.li>
                  ))}
                </motion.ul>
              </GlareHover>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ y: -8 }} transition={{ delay: 0.1 }} className="relative overflow-hidden group">
              <GlareHover width="100%" height="100%" background="rgba(6, 14, 10, 0.6)" borderColor="rgba(201, 168, 76, 0.1)" borderRadius="0px" glareColor="#c9a84c" glareOpacity={0.2} className="!block p-10 h-full border border-gold/10 hover:border-gold/30">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-red-600/20 border border-red-600/40 flex items-center justify-center"><Users className="w-5 h-5 text-red-500" /></div>
                  <div><h4 className="font-serif text-lg text-white">Parking & Valet</h4><span className="text-[8px] tracking-[0.3em] uppercase text-white/40 font-bold">SEAMLESS INGRESS</span></div>
                </div>
                <motion.ul variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
                  {["Free on-site parking garage", "Secure parking lot inside", "Fully gated 24/7 security"].map((item, i) => (
                    <motion.li key={i} variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} className="flex items-center gap-3 text-xs text-white/70 font-light font-sans"><Check className="w-4 h-4 text-emerald-500 shrink-0" /><span>{item}</span></motion.li>
                  ))}
                </motion.ul>
              </GlareHover>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ y: -8 }} transition={{ delay: 0.2 }} className="relative overflow-hidden group">
              <GlareHover width="100%" height="100%" background="rgba(6, 14, 10, 0.6)" borderColor="rgba(201, 168, 76, 0.1)" borderRadius="0px" glareColor="#c9a84c" glareOpacity={0.2} className="!block p-10 h-full border border-gold/10 hover:border-gold/30">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-orange-600/20 border border-orange-600/40 flex items-center justify-center"><Flame className="w-5 h-5 text-orange-500" /></div>
                  <div><h4 className="font-serif text-lg text-white">Pet & Garden</h4><span className="text-[8px] tracking-[0.3em] uppercase text-white/40 font-bold">LUSH OPEN SPACES</span></div>
                </div>
                <motion.ul variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
                  {["Dogs allowed inside villa spaces", "Vast organic garden lawns", "Perfect for celebrations"].map((item, i) => (
                    <motion.li key={i} variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} className="flex items-center gap-3 text-xs text-white/70 font-light font-sans"><Check className="w-4 h-4 text-emerald-500 shrink-0" /><span>{item}</span></motion.li>
                  ))}
                </motion.ul>
              </GlareHover>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="relative py-24 bg-[#060e0a] z-10 border-t border-gold/10 overflow-hidden" id="booking">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(201,168,76,0.15),transparent_70%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <div className="gold-line-split mb-6"><span className="text-[10px] tracking-[0.4em] uppercase text-gold font-sans font-bold">RESERVE ESCAPE</span></div>
            <h2 className="font-serif text-5xl md:text-7xl font-light text-white leading-tight mb-8">Begin Your <br /> <span className="italic text-gold text-glow">Luxury Journey</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="h-full group">
              <GlareHover width="100%" height="100%" background="#0a1410" borderColor="rgba(201, 168, 76, 0.15)" borderRadius="0px" glareColor="#c9a84c" glareOpacity={0.15} className="!block p-10 md:p-12 h-full border border-gold/15 hover:border-gold/30">
                <div className="flex flex-col justify-between h-full w-full text-left">
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-6">DIRECT RESERVATIONS</h4>
                    <div className="flex items-center gap-5 p-5 border border-gold/10 bg-gold/5 mb-10">
                      <div className="w-12 h-12 flex items-center justify-center border border-gold/20 text-gold bg-luxury-dark"><Phone className="w-5 h-5" /></div>
                      <div><span className="text-[8px] tracking-widest uppercase text-white/30 block mb-1">HOTLINE</span><span className="text-lg font-bold text-white font-serif">+91 99772 20204</span></div>
                    </div>
                  </div>
                  <button onClick={() => handleWhatsAppContact()} className="w-full py-5 bg-gold text-luxury-dark text-xs tracking-[0.2em] uppercase font-bold hover:bg-gold-light transition-all">BOOK VIA WHATSAPP</button>
                </div>
              </GlareHover>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="h-full group">
              <GlareHover width="100%" height="100%" background="#0a1410" borderColor="rgba(201, 168, 76, 0.15)" borderRadius="0px" glareColor="#c9a84c" glareOpacity={0.15} className="!block p-10 md:p-12 h-full border border-gold/15 hover:border-gold/30">
                <div className="flex flex-col justify-between h-full w-full text-left">
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-6">ESTATE COORDINATES</h4>
                    <div className="flex items-start gap-5 p-5 border border-gold/10 bg-gold/5 mb-10">
                      <div className="w-12 h-12 flex items-center justify-center border border-gold/20 text-gold bg-luxury-dark shrink-0"><MapPin className="w-5 h-5" /></div>
                      <div><span className="text-[8px] tracking-widest uppercase text-white/30 block mb-1">LOCATION</span><span className="text-xs text-white/80 leading-relaxed">69, 70, Parsvnath City, Satwik Green, Manglaya Sadak, Indore</span></div>
                    </div>
                  </div>
                  <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="w-full py-5 border border-gold/40 text-gold text-xs tracking-[0.2em] uppercase font-bold hover:bg-gold hover:text-luxury-dark transition-all text-center">GET DIRECTIONS</a>
                </div>
              </GlareHover>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-[#060e0a] border-t border-gold/15 pt-20 pb-12 z-10 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <Threads color={[0.788, 0.659, 0.298]} amplitude={1.2} distance={0.1} enableMouseInteraction={true} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-1 space-y-6">
              <div className="flex items-center gap-3">
                <img src="https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920463/LOGO_i9h4ex.jpg" className="w-12 h-12 rounded-full border border-gold/30" alt="Logo" />
                <div className="font-serif text-xl md:text-2xl tracking-wider text-gold uppercase"><GlitchText speed={0.8}>DG GREEN FARMS</GlitchText></div>
              </div>
              <p className="text-white/50 text-[11px] max-w-sm leading-relaxed font-light">Indore's premiere boutique resort. Orchestrating private luxury stays and authentic farm retreats.</p>
              <div className="flex gap-4 pt-2">
                <a href="https://wa.me/919977220204" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border border-white/10 text-white/60 hover:text-gold hover:border-gold transition-all rounded-full"><Instagram className="w-5 h-5" /></a>
              </div>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-8">EXPLORE STAY</h4>
              <ul className="space-y-4 text-xs text-white/60 font-light list-none p-0">
                <li><a href="#about" className="hover:text-gold transition-colors">The Farmhouse Story</a></li>
                <li><a href="#amenities" className="hover:text-gold transition-colors">Bespoke Amenities</a></li>
                <li><a href="#gallery-section" className="hover:text-gold transition-colors">Private Gallery</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-8">STAY INQUIRIES</h4>
              <ul className="space-y-4 text-xs text-white/60 font-light list-none p-0">
                <li><button onClick={() => handleWhatsAppContact()} className="hover:text-gold transition-colors">Luxurious Day Outing</button></li>
                <li><button onClick={() => handleWhatsAppContact()} className="hover:text-gold transition-colors">Overnight Sanctuary</button></li>
                <li><button onClick={() => handleWhatsAppContact()} className="hover:text-gold transition-colors">Romantic Oasis</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-8 font-sans">INQUIRIES</h4>
              <div><span className="text-[8px] uppercase tracking-widest text-white/30 block mb-1">ENQUIRE MANAGER</span><span className="text-sm font-bold text-white">+91 99772 20204</span></div>
            </div>
          </div>
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/40 uppercase tracking-widest">
            <div>&copy; {new Date().getFullYear()} DG GREEN FARMS. ALL RIGHTS RESERVED.</div>
            <div className="text-gold font-medium mt-4 md:mt-0">Website developed by SAUMYA BARI</div>
          </div>
        </div>
      </footer>

      {/* Amenity Detail Modal */}
      <AnimatePresence>
        {selectedAmenityDetail && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/85 backdrop-blur-sm z-[9999] flex items-center justify-center p-4" onClick={() => setSelectedAmenityDetail(null)}>
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="bg-[#0a1410] border border-gold/30 p-8 md:p-10 w-full max-w-lg relative shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setSelectedAmenityDetail(null)} className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"><X className="w-5 h-5" /></button>
              <div className="flex items-center gap-2 mb-6"><Sparkles className="w-4 h-4 text-gold" /><span className="text-[10px] tracking-[0.25em] uppercase text-gold font-sans font-bold">CUSTOMIZE RETREAT</span></div>
              <h2 className="font-serif text-3xl text-white mb-2">{selectedAmenityDetail.name}</h2>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#1aa87a] font-sans font-bold mb-8">{selectedAmenityDetail.tagline}</p>
              <p className="text-white/80 font-sans text-sm leading-relaxed mb-10">{selectedAmenityDetail.description}</p>
              <button onClick={() => handleWhatsAppContact(`Inquiry: ${selectedAmenityDetail.name}`)} className="w-full py-4 bg-gold text-luxury-dark font-sans text-[10px] tracking-[0.15em] font-bold uppercase hover:bg-gold-light transition-colors">ENQUIRE VIA WHATSAPP</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

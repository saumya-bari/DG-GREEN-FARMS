
"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  MapPin,
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
  Users
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
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

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

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1920&h=1080&auto=format&fit=crop",
      title: "Sunset Pool Majesty",
      category: "Private Pool",
      description: "Exclusive heated pool illuminated with twilight fiber-optics under Indore's evening sky.",
      size: "col-span-12 md:col-span-8 h-[280px] md:h-[450px]"
    },
    {
      src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&h=800&auto=format&fit=crop",
      title: "Deluxe Master Sanctuary",
      category: "Luxury Suite",
      description: "Plush designer bedrooms with smart dimming lights and elegant pool-view glass panes.",
      size: "col-span-12 md:col-span-4 h-[280px] md:h-[450px]"
    },
    {
      src: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920471/D9_vxkjho.png",
      title: "Imperial Canopy Seclusion",
      category: "Romantic Decor",
      description: "A private evening setup adorned with golden accents, custom balloons, and rich red fabrics for romantic isolation.",
      size: "col-span-12 sm:col-span-6 md:col-span-4 h-[300px]"
    },
    {
      src: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920469/D5_ynpe38.png",
      title: "Floating Rose Serenade",
      category: "Romantic Decor",
      description: "Red rose petals floating gently on the pool water under a canopy of warm romantic fairy-lights.",
      size: "col-span-12 sm:col-span-6 md:col-span-4 h-[300px]"
    },
    {
      src: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920464/D6_vvq67s.png",
      title: "Midnight Solitude Spa",
      category: "Wellness",
      description: "Warm ambient lit wellness bath designed for private evening meditation and supreme relaxation.",
      size: "col-span-12 md:col-span-4 h-[300px]"
    },
    {
      src: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920464/D8_v9samu.png",
      title: "Velvet Rendezvous Setup",
      category: "Romantic Decor",
      description: "An opulent crimson and gold candlelit pathway welcoming couples with unmatched grandness.",
      size: "col-span-12 sm:col-span-6 md:col-span-4 h-[260px]"
    },
    {
      src: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920460/d1_wpnfzg.png",
      title: "Cascading Petal Spa",
      category: "Wellness",
      description: "Indulgent deep-soak tub carpeted with fresh red rose petals and surrounded by ambient glowing candles.",
      size: "col-span-12 md:col-span-4 h-[260px]"
    },
    {
      src: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920447/D3_fctofk.png",
      title: "Gourmet Evening Canopy",
      category: "Fine Dining",
      description: "Intimate dining experience with premium silverware, handpicked flowers, and a designated butler corner.",
      size: "col-span-12 sm:col-span-6 md:col-span-4 h-[280px]"
    },
    {
      src: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920446/D4_d8nz9n.png",
      title: "Whispering Red Canopy",
      category: "Romantic Decor",
      description: "A dreamy poolside cabana draped in crimson and warm light, curated exclusively for timeless celebrations.",
      size: "col-span-12 md:col-span-4 h-[280px]"
    },
    {
      src: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920445/D2_myhzij.png",
      title: "Floating Champagne Breakfast",
      category: "Fine Dining",
      description: "A stunning floating breakfast tray with premium champagnes and fresh treats launched on the crystal pool.",
      size: "col-span-12 md:col-span-4 h-[280px] md:h-[340px]"
    },
    {
      src: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920436/C2_l033eb.png",
      title: "Azure Infinity Deck",
      category: "Private Pool",
      description: "Crystal clear pool view extending into lush green outlines under dynamic custom illumination.",
      size: "col-span-12 md:col-span-8 h-[280px] md:h-[340px]"
    },
    {
      src: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920418/B1_lnes8l.png",
      title: "Presidential Retreat Suite",
      category: "Luxury Suite",
      description: "Bespoke king-sized chamber featuring opulent fabrics, warm backlighting, and private pool-deck access.",
      size: "col-span-12 md:col-span-4 h-[280px] md:h-[340px]"
    },
    {
      src: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920417/A5_euuohd.png",
      title: "Secret Palm Oasis",
      category: "Estate View",
      description: "Vibrant palm-covered parameters ensuring your stay is completely hidden from the outside world.",
      size: "col-span-12 sm:col-span-6 md:col-span-4 h-[260px]"
    },
    {
      src: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920414/B3_kie4py.png",
      title: "Luminescent Master Bedroom",
      category: "Luxury Suite",
      description: "Perfectly balanced contemporary master bedroom with plush leather detailing and integrated smart home controls.",
      size: "col-span-12 sm:col-span-6 md:col-span-4 h-[260px]"
    },
    {
      src: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920411/A4_v4t56r.png",
      title: "Lush Sanctuary Pathway",
      category: "Estate View",
      description: "Impeccably manicured green gardens and cobblestoned garden walking paths leading to the main luxury villa.",
      size: "col-span-12 md:col-span-4 h-[260px]"
    },
    {
      src: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920403/A7_vnkmdi.png",
      title: "Symmetrical Zen Lawns",
      category: "Estate View",
      description: "Expertly landscaped garden vistas framed by tropical footage, showcasing the vast green luxury boundary.",
      size: "col-span-12 md:col-span-6 h-[280px]"
    },
    {
      src: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920382/A3_sdom9l.png",
      title: "Tropical Courtyard",
      category: "Estate View",
      description: "Sun-dappled pathways lined with bright magenta bougainvillea and tall palm trees.",
      size: "col-span-12 md:col-span-6 h-[280px]"
    },
    {
      src: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920462/C1_wiinti.png",
      title: "Reflective Evening Waters",
      category: "Private Pool",
      description: "Fountain jets arching into the warm water, creating a perfect sensory auditory landscape.",
      size: "col-span-12 sm:col-span-6 md:col-span-4 h-[260px]"
    },
    {
      src: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920376/A2_pd83ek.png",
      title: "Majestic Palm Guarded Gate",
      category: "Estate View",
      description: "Tall exotic palm trees guarding the grand entry lines of the farm.",
      size: "col-span-12 sm:col-span-6 md:col-span-4 h-[260px]"
    },
    {
      src: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920371/A6_txpr1w.png",
      title: "Emerald Privacy Walls",
      category: "Estate View",
      description: "Thick natural foliage barriers providing absolute secure visual block.",
      size: "col-span-12 md:col-span-4 h-[260px]"
    },
    {
      src: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920370/A1_d5mlfv.png",
      title: "Grand Facade Arrival",
      category: "Estate View",
      description: "An monumental look of DG Green Farms' entrance, radiating pure architectural elegance.",
      size: "col-span-12 md:col-span-8 h-[280px] md:h-[340px]"
    },
    {
      src: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920396/A8_ocq5vf.png",
      title: "Sunlit Meadow Retreat",
      category: "Estate View",
      description: "Soft golden rays filtered through thick trees, illuminating a manicured lawn.",
      size: "col-span-12 sm:col-span-6 md:col-span-4 h-[260px]"
    },
    {
      src: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920464/D7_bjclin.png",
      title: "Bespoke Anniversary Alcove",
      category: "Romantic Decor",
      description: "An exclusive floral heart arrangement backdropped by warm string curtains.",
      size: "col-span-12 sm:col-span-6 md:col-span-4 h-[260px]"
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
  }, [activeLightboxImage, selectedCategory]);

  return (
    <main className="relative min-h-screen bg-luxury-dark text-white selection:bg-gold/30 overflow-x-hidden">
      <CustomCursor />
      <LuxuryNavbar onBookClick={() => handleWhatsAppContact()} />
      <LuxuryHero onBookClick={() => handleWhatsAppContact()} onExploreClick={() => scrollToSection("gallery-section")} />

      {/* Story Section - OUR SANCTUARY */}
      <section className="relative py-24 bg-[#0a140f] z-10 border-t border-gold/10" id="about">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] md:h-[650px] w-full">
            {/* Main Pool Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="absolute right-0 top-0 w-[90%] h-[75%] overflow-hidden bg-[#0c2415] border border-gold/15 shadow-2xl group cursor-pointer"
            >
              <img 
                src="https://res.cloudinary.com/dhc0phwyg/image/upload/v1781004634/t1_pwfa6e.jpg" 
                className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" 
                alt="DG Green Farms Pool" 
              />
              <div className="absolute inset-0 bg-black/20" />
            </motion.div>

            {/* Overlapping Bedroom Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute left-0 bottom-0 w-[55%] h-[48%] overflow-hidden bg-[#1a1205] border-4 border-[#0a140f] shadow-2xl group cursor-pointer z-20"
            >
              <img 
                src="https://res.cloudinary.com/dhc0phwyg/image/upload/v1781004638/t2_yoaycw.jpg" 
                className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" 
                alt="Master Suite" 
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="text-[8px] tracking-[0.3em] uppercase text-gold/80 font-bold mb-1">STAYCATION HAVEN</span>
                <h4 className="font-serif italic text-white text-base mb-4">Bespoke Twilight Pool</h4>
                <div className="mt-auto pt-4 border-t border-white/10">
                  <span className="text-[7px] tracking-[0.4em] uppercase text-white/40 font-bold">MASTER SUITE</span>
                </div>
              </div>
            </motion.div>

            {/* Award Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute right-[5%] bottom-[5%] z-30 bg-gold text-luxury-dark p-6 text-center shadow-2xl min-w-[150px]"
            >
              <div className="flex flex-col items-center">
                <Award className="w-6 h-6 text-luxury-dark mb-1" />
                <span className="font-serif text-2xl font-bold block">4.7 ★</span>
                <span className="text-[8px] tracking-[0.2em] uppercase font-bold block mt-1">55 GOOGLE REVIEWS</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-gold" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-gold font-sans font-bold">OUR SANCTUARY</span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl font-light text-white leading-tight mb-8">
              A Private Escape <br />
              <span className="italic text-gold text-glow">Coutured for Serenity</span>
            </h2>
            <div className="space-y-6 text-white/80 text-sm md:text-base leading-relaxed mb-12 font-light font-sans max-w-xl">
              <p>
                Turn your weekend into a mini-vacation at <strong>DG Green Farms</strong> 🌿✨ 
                Experience good vibes, cozy deluxe rooms, premium pool dips, and unforgettable moments with family and friends! 💛 
                Whether relaxing under our outdoor Gazebo, strolling the lush organic garden, or enjoying top-tier gourmet food prepared with personal care by <strong>Chef Vivek Sharma and Rahul</strong>, DG Green Farms is the perfect gated destination for parties, get-togethers, and weekend escapes in Indore.
              </p>
              <p className="italic text-white/40 text-xs">
                "Chef Vivek Sharma and Rahul did a fantastic job with food and service." Your escape includes complete privacy and helpful, highly rated on-site support.
              </p>
            </div>

            <div className="flex flex-wrap gap-12 pt-8 border-t border-gold/15">
              <div>
                <span className="text-4xl text-gold font-serif block mb-1">
                  <Counter target={4} suffix="+" />
                </span>
                <span className="block text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">DELUXE SUITES</span>
              </div>
              <div>
                <span className="text-4xl text-gold font-serif block mb-1">
                  <Counter target={100} suffix="%" />
                </span>
                <span className="block text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">UNBIASED PRIVACY</span>
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

      {/* Gallery Section - Visual Sanctuary */}
      <section className="relative py-24 bg-[#040906] z-10 border-t border-gold/10 overflow-hidden" id="gallery-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-left">
          <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-sans font-semibold block mb-3">Visual Sanctuary</span>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-white leading-tight">A Glimpse into <span className="italic text-gold text-glow">Pure Seclusion</span></h2>
          <p className="mt-4 text-white/50 text-xs md:text-sm font-light max-w-2xl leading-relaxed">
            Experience the visual serenity of DG Green Farms Indore. Every frame captures the exquisite synergy between high-end architectural craft and breathtaking organic natural settings. Click any frame to view in high definition.
          </p>
        </div>
        
        <div className="flex md:flex-wrap items-center gap-2 mb-10 px-6 md:px-12 max-w-7xl mx-auto overflow-x-auto scrollbar-none">
          {["All", "Private Pool", "Luxury Suite", "Wellness", "Romantic Decor", "Fine Dining", "Estate View"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 font-sans text-[10px] tracking-widest uppercase border transition-all duration-300 whitespace-nowrap ${selectedCategory === cat ? 'bg-gold text-luxury-dark border-gold' : 'bg-transparent text-white/50 border-white/10 hover:text-gold hover:border-gold/30'}`}
            >
              {cat === "All" ? "All Spaces" : cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-4 px-6 md:px-12 max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, idx) => (
              <motion.div
                layout
                key={image.src}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                onClick={() => handleOpenLightbox(idx)}
                className={`${image.size} relative overflow-hidden cursor-pointer border border-gold/15 group bg-[#0c1a10]`}
              >
                <img src={image.src} className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-110" alt={image.title} />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />
                <div className="absolute bottom-6 left-6 z-20 text-left">
                  <span className="text-[9px] tracking-widest uppercase text-gold font-sans font-semibold block mb-1">{image.category}</span>
                  <h4 className="font-serif text-lg italic text-white">{image.title}</h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-24 bg-[#050b07] z-10 border-t border-gold/10" id="testimonials">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-sans font-semibold block mb-4">
              GUEST CHRONICLES
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-white leading-tight">
              Words of Our <span className="italic text-gold text-glow">Patrons</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {reviewsList.map((rev, index) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                key={rev.id}
                className="p-10 border border-gold/15 bg-[#0a1410] text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 text-gold mb-8">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="font-serif italic text-white/90 text-base leading-relaxed mb-10">
                    "{rev.text}"
                  </p>
                </div>
                <div className="flex items-center gap-5 pt-8 border-t border-gold/10">
                  <div className="w-12 h-12 border border-gold/30 flex items-center justify-center bg-gold/5 font-sans font-bold text-xs text-gold">
                    {rev.authorInitials}
                  </div>
                  <div>
                    <span className="font-sans font-bold text-sm text-white block mb-0.5">
                      {rev.author}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-white/40 block">
                      {rev.stayType}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reserve Escape Section */}
      <section className="relative py-24 bg-[#060e0a] z-10 border-t border-gold/10 overflow-hidden" id="booking">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="gold-line-split mb-6">
              <span className="text-[10px] tracking-[0.4em] uppercase text-gold font-sans font-bold">RESERVE ESCAPE</span>
            </div>
            <h2 className="font-serif text-5xl md:text-7xl font-light text-white leading-tight mb-8">
              Begin Your <br />
              <span className="italic text-gold text-glow">Luxury Journey</span>
            </h2>
            <p className="text-white/60 text-sm md:text-base max-w-3xl mx-auto leading-relaxed font-light font-sans mb-16">
              We render bespoke boutique resort takeover experiences. Connect directly with our reservation coordinator via WhatsApp or phone call to secure prioritized suite dates and custom pool/jacuzzi setups instantly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Direct Reservations Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 md:p-12 border border-gold/15 bg-[#0a1410] text-left flex flex-col justify-between group hover:border-gold/30 transition-all duration-500"
            >
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-6 font-sans">DIRECT RESERVATIONS</h4>
                <p className="text-white/50 text-xs md:text-sm leading-relaxed mb-10 font-light font-sans">
                  Select your package or custom duration requirements. We assist you live with rates, availability, and romantic decor preparations.
                </p>
                <div className="flex items-center gap-5 p-5 border border-gold/10 bg-gold/5 mb-10">
                  <div className="w-12 h-12 flex items-center justify-center border border-gold/20 text-gold bg-luxury-dark">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[8px] tracking-widest uppercase text-white/30 block mb-1 font-sans">IMMEDIATE HOTLINE</span>
                    <span className="text-lg font-bold text-white font-serif">+91 99772 20204</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleWhatsAppContact()}
                className="w-full py-5 bg-gold text-luxury-dark text-xs tracking-[0.2em] uppercase font-bold hover:bg-gold-light transition-all duration-300 font-sans shadow-lg"
              >
                BOOK VIA WHATSAPP
              </button>
            </motion.div>

            {/* Estate Coordinates Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 md:p-12 border border-gold/15 bg-[#0a1410] text-left flex flex-col justify-between group hover:border-gold/30 transition-all duration-500"
            >
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-6 font-sans">ESTATE COORDINATES</h4>
                <p className="text-white/50 text-xs md:text-sm leading-relaxed mb-10 font-light font-sans">
                  Perfectly situated within a high-security premium gated farm community just minutes outside Indore.
                </p>
                <div className="flex items-start gap-5 p-5 border border-gold/10 bg-gold/5 mb-10">
                  <div className="w-12 h-12 flex items-center justify-center border border-gold/20 text-gold bg-luxury-dark shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[8px] tracking-widest uppercase text-white/30 block mb-1 font-sans">RESORT LOCATION ADDRESS</span>
                    <span className="text-xs md:text-sm text-white/80 leading-relaxed font-light font-sans">
                      69, 70, Parsvnath City, Satwik Green, Manglaya Sadak, Rahu Khedi, Indore, MP 453771
                    </span>
                  </div>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=DG+Green+Farms+–+Perfect+Destination+for+Parties+%26+Gatherings+in+Indore"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-5 border border-gold/40 text-gold text-xs tracking-[0.2em] uppercase font-bold hover:bg-gold hover:text-luxury-dark transition-all duration-300 font-sans text-center shadow-lg"
              >
                GET ROUTE DIRECTIONS
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-luxury-dark border-t border-gold/15 pt-20 pb-12 z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <img src="https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920463/LOGO_i9h4ex.jpg" className="w-10 h-10 rounded-full border border-gold/30" alt="Logo" />
                <span className="font-serif text-2xl tracking-widest text-gold uppercase">DG <span className="text-white italic font-light">Green Farms</span></span>
              </div>
              <p className="text-white/50 text-xs max-w-sm leading-relaxed font-light font-sans">
                Indore's premiere boutique resort. Orchestrating private luxury stays, candlelight jacuzzi layouts, and authentic farm culinary retreats.
              </p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-gold font-bold mb-8 font-sans">NAVIGATION</h4>
              <ul className="space-y-4 text-xs text-white/60 font-light font-sans">
                <li><a href="#about" className="hover:text-gold transition-colors uppercase tracking-widest">Story</a></li>
                <li><a href="#amenities" className="hover:text-gold transition-colors uppercase tracking-widest">Amenities</a></li>
                <li><a href="#gallery-section" className="hover:text-gold transition-colors uppercase tracking-widest">Gallery</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-gold font-bold mb-8 font-sans">CONTACT</h4>
              <ul className="space-y-4 text-xs text-white/60 font-light font-sans uppercase tracking-widest">
                <li>+91 99772 20204</li>
                <li>Parsvnath City, Indore</li>
              </ul>
            </div>
          </div>
          <div className="pt-10 border-t border-white/5 text-[10px] text-white/40 uppercase tracking-widest font-sans text-center">
            &copy; {currentYear || '2025'} DG Green Farms. All Rights Reserved. Website developed by SAUMYA BARI
          </div>
        </div>
      </footer>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeLightboxImage && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-6 backdrop-blur-lg" onClick={handleCloseLightbox}>
            <button onClick={handleCloseLightbox} className="absolute top-10 right-10 text-white hover:text-gold transition-colors z-[10001] border border-white/20 px-4 py-2 text-xs tracking-widest uppercase flex items-center gap-2"><X className="w-4 h-4" /> Close</button>
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="relative max-w-5xl max-h-[85vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
              <img src={activeLightboxImage} className="max-w-full max-h-[70vh] object-contain border border-gold/20 shadow-2xl" alt="Lightbox" />
              <div className="mt-8 text-center bg-black/50 backdrop-blur-md p-6 border border-white/10 w-full">
                <span className="text-[10px] tracking-[0.3em] uppercase text-gold block mb-2">{filteredImages[lightboxIndex].category}</span>
                <h4 className="font-serif text-2xl italic text-white mb-2">{filteredImages[lightboxIndex].title}</h4>
                <p className="text-white/60 text-xs font-light max-w-2xl mx-auto">{filteredImages[lightboxIndex].description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export interface PropertyAmenity {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  accentColor: string;
  svgRepresentation: string;
  image: string;
}

export interface StayPackage {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  features: string[];
  priceDesc: string;
  isFeatured?: boolean;
}

export interface ReviewItem {
  id: string;
  rating: number;
  text: string;
  author: string;
  stayType: string;
  authorInitials: string;
}

export const amenitiesList: PropertyAmenity[] = [
  {
    id: "pool",
    name: "Private Swimming Pool",
    tagline: "Absolute Privacy & Ambient Lights",
    description: "An exclusive heated pool illuminated with custom twilight fiber-optics — completely private for you and your guests.",
    icon: "Waves",
    accentColor: "border-[#1aa87a]",
    svgRepresentation: "pool",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=800&h=600&auto=format&fit=crop"
  },
  {
    id: "jacuzzi",
    name: "Heated Wellness Jacuzzi",
    tagline: "Therapeutic Hydro-Massage & Candles",
    description: "Unwind in bubble jet streams featuring custom chromotherapy lights, romantic set candle glow, and curated thermal control.",
    icon: "Flame",
    accentColor: "border-[#8b40c0]",
    svgRepresentation: "jacuzzi",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbece8?q=80&w=800&h=600&auto=format&fit=crop"
  },
  {
    id: "restaurant",
    name: "In-House Gourmet Diner",
    tagline: "Farm-to-Table Culinary Arts",
    description: "Savour outstanding cuisine curated by our private chef. From authentic Indori morning platters to twilight poolside dining.",
    icon: "Utensils",
    accentColor: "border-[#c0540a]",
    svgRepresentation: "restaurant",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&h=600&auto=format&fit=crop"
  },
  {
    id: "rooms",
    name: "Deluxe Luxury Suites",
    tagline: "Opulent Redesigned Living Spaces",
    description: "Plush designer bedrooms with smart dimming lights, opulent Egyptian cotton bedding, and masterfully crafted garden-view windows.",
    icon: "BedDouble",
    accentColor: "border-[#c9a84c]",
    svgRepresentation: "rooms",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&h=600&auto=format&fit=crop"
  },
  {
    id: "romance",
    name: "Romantic Pool Decors",
    tagline: "A Canvas of Red Roses & Candlelights",
    description: "Poolside layouts of red rose paths, candle grids, and customized balloons perfect for anniversaries and bespoke couple nights.",
    icon: "Heart",
    accentColor: "border-[#c0102a]",
    svgRepresentation: "romance",
    image: "https://images.unsplash.com/photo-1522673607200-164883eecd0c?q=80&w=800&h=600&auto=format&fit=crop"
  },
  {
    id: "groups",
    name: "Private Group Retreats",
    tagline: "Secluded High-End Celebration Spaces",
    description: "Host safe family reunions, birthday bashes, and corporate retreats with private lounge bean bags and professional sound systems.",
    icon: "Users",
    accentColor: "border-[#2a8a28]",
    svgRepresentation: "groups",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&h=600&auto=format&fit=crop"
  }
];

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=800&h=600&auto=format&fit=crop",
    title: "Sunset Pool Majesty",
    category: "Private Pool",
    description: "Exclusive heated pool illuminated with twilight fiber-optics under Indore's evening sky.",
    size: "col-span-12 md:col-span-8 h-[280px] md:h-[380px]"
  },
  {
    src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&h=600&auto=format&fit=crop",
    title: "Deluxe Master Sanctuary",
    category: "Luxury Suite",
    description: "Plush designer bedrooms with smart dimming lights and elegant pool-view glass panes.",
    size: "col-span-12 md:col-span-4 h-[280px] md:h-[380px]"
  },
  {
    src: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920471/D9_vxkjho.png",
    title: "Imperial Canopy Seclusion",
    category: "Romantic Decor",
    description: "A private evening setup adorned with golden accents, custom balloons, and rich red fabrics for romantic isolation.",
    size: "col-span-12 sm:col-span-6 md:col-span-4 h-[280px]"
  },
  {
    src: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920469/D5_ynpe38.png",
    title: "Floating Rose Serenade",
    category: "Romantic Decor",
    description: "Red rose petals floating gently on the pool water under a canopy of warm romantic fairy-lights.",
    size: "col-span-12 sm:col-span-6 md:col-span-4 h-[280px]"
  },
  {
    src: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920464/D6_vvq67s.png",
    title: "Midnight Solitude Spa",
    category: "Wellness",
    description: "Warm ambient lit wellness bath designed for private evening meditation and supreme relaxation.",
    size: "col-span-12 md:col-span-4 h-[280px]"
  },
  {
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbece8?q=80&w=800&h=600&auto=format&fit=crop",
    title: "Chromotherapy Jacuzzi",
    category: "Wellness",
    description: "Heated hydro-massage bubble jacuzzi with therapeutic light grids and romantic candle lights.",
    size: "col-span-12 sm:col-span-6 md:col-span-4 h-[260px]"
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
    src: "https://images.unsplash.com/photo-1522673607200-164883eecd0c?q=80&w=800&h=600&auto=format&fit=crop",
    title: "Bespoke Love Canopy",
    category: "Romantic Decor",
    description: "Handcrafted rose paths, customized balloons, and candle arrays celebrating couples' special moments.",
    size: "col-span-12 sm:col-span-6 md:col-span-4 h-[280px]"
  },
  {
    src: "https://res.cloudinary.com/dhc0phwyg/image/upload/v1780920447/D3_fctofk.png",
    title: "Gourmet Evening Canopy",
    category: "Fine Dining",
    description: "Intimate dining experience with premium silverware, handpicked flowers, and a designated butler corner.",
    size: "col-span-12 sm:col-span-6 md:col-span-4 h-[280px]"
  }
];

export const packagesList: StayPackage[] = [
  {
    id: "day-outing",
    name: "Luxurious Day Outing",
    tagline: "A Luxurious Refreshment Break",
    badge: "Day Escape",
    features: [
      "Exclusive private pool access",
      "Complimentary dynamic Jacuzzi slot",
      "Welcome Indori snacks & cocktails",
      "Access to luxury lawn swings",
      "Gourmet culinary lunch included",
      "Ideal for quick retreats"
    ],
    priceDesc: "Bespoke Groups"
  },
  {
    id: "overnight",
    name: "Overnight Farm Sanctuary",
    tagline: "Our Signature Staycation Experience",
    badge: "Most Popular",
    features: [
      "2 Deluxe Master Bedroom Suites",
      "All-night private heated pool access",
      "Unlimited candlelit Jacuzzi hydrotherapy",
      "Curated multi-course dinner & breakfast",
      "Stargazing bonfire setup",
      "Bespoke turn-down service",
      "Late visual checkout"
    ],
    priceDesc: "Bespoke Luxury Suite",
    isFeatured: true
  },
  {
    id: "romance-night",
    name: "Romantic Candlelight Oasis",
    tagline: "Couture Anniversary & Occasions Night",
    badge: "Bespoke Couples",
    features: [
      "Bespoke couple's custom room setup",
      "Red rose path & love balloon layout",
      "Poolside floating candlelight dinner",
      "Jacuzzi sprinkled with fresh rose petals",
      "Handcrafted champagne & celebratory cake",
      "Personalized butler service"
    ],
    priceDesc: "Tailored Quote"
  }
];

export const reviewsList: ReviewItem[] = [
  {
    id: "rev-1",
    rating: 5,
    text: "We had a wonderful family stay at DG Green Farms. The place is spacious, safe, and well-maintained. Kids enjoyed the pool while we relaxed in the open areas. Food was fresh and tasty.",
    author: "Saloni Ankulnerkar",
    stayType: "Family Staycation",
    authorInitials: "SA"
  },
  {
    id: "rev-2",
    rating: 5,
    text: "Amazing experience at DG Green Farms! Beautiful property, very clean rooms, peaceful environment and excellent service. The pool and jacuzzi were a highlight.",
    author: "Saloni Jummani",
    stayType: "Local Guide · 23 reviews",
    authorInitials: "SJ"
  },
  {
    id: "rev-3",
    rating: 5,
    text: "Incredible Experience! DG Green Farms exceeded all our expectations. Great location, beautiful pool, and a wonderful atmosphere for a night out with friends.",
    author: "Aditya Verma",
    stayType: "Weekend Event Venue",
    authorInitials: "AV"
  }
];
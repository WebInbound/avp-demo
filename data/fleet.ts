export type CarImage = {
  src: string;
  alt: string;
};

export type CarHighlight = {
  label: string;
  value: string;
};

export type Car = {
  slug: string;
  brand: string;
  model: string;
  category: string;
  tagline: string;
  images: CarImage[];
  bullets: string[];
  highlights: CarHighlight[];
};

export const fleet: Car[] = [
  // ✅ Ferrari Portofino
  {
    slug: "ferrari-portofino",
    brand: "Ferrari",
    model: "Portofino",
    category: "GT",
    tagline: "Pure Italian elegance with twin-turbo V8 emotion.",
    images: [
      { src: "/images/cars/portofino-back.jpg", alt: "Ferrari Portofino rear" },
      { src: "/images/cars/portofino-front.jpg", alt: "Ferrari Portofino front" },
      { src: "/images/cars/portofino-interior.jpg", alt: "Ferrari Portofino interior" },
    ],
    bullets: [
      "Delivered anywhere in Europe (24/7)",
      "Daily / Weekend / Weekly rentals",
      "Booking via DM or phone",
    ],
    highlights: [
      { label: "Engine", value: "3.9L V8 Twin Turbo" },
      { label: "Power", value: "600 HP" },
      { label: "0–100 km/h", value: "3.5s" },
      { label: "Drive", value: "RWD" },
    ],
  },

  // ✅ Ferrari GTC4Lusso T
  {
    slug: "ferrari-gtc4-lusso-t",
    brand: "Ferrari",
    model: "GTC4Lusso T",
    category: "GT",
    tagline: "V8 grand tourer: luxury, space, and presence.",
    images: [
      { src: "/images/cars/gtc4lusso-back.jpg", alt: "Ferrari GTC4 Lusso T rear" },
      { src: "/images/cars/gtc4lusso-front.jpg", alt: "Ferrari GTC4 Lusso T front" },
      { src: "/images/cars/gtc4lusso-side.jpg", alt: "Ferrari GTC4 Lusso T side" },
      { src: "/images/cars/gtc4lusso-back2.jpg", alt: "Ferrari GTC4 Lusso T back" },
      { src: "/images/cars/gtc4lusso-interior.jpg", alt: "Ferrari GTC4 Lusso T interior" },
      { src: "/images/cars/gtc4lusso-engine.jpg", alt: "Ferrari GTC4 Lusso T engine" },
    ],
    bullets: [
      "Delivered anywhere in Europe (24/7)",
      "Daily / Weekend / Weekly rentals",
      "Perfect for long-distance luxury trips",
    ],
    highlights: [
      { label: "Engine", value: "3.9L V8 Twin Turbo" },
      { label: "Power", value: "610 HP" },
      { label: "0–100 km/h", value: "3.5s" },
      { label: "Seats", value: "4" },
    ],
  },

  // ✅ Porsche 911 Carrera 4S Cabriolet
  {
    slug: "porsche-911-carrera-4s-cabriolet",
    brand: "Porsche",
    model: "911 Carrera 4S Cabriolet",
    category: "Convertible",
    tagline: "Open-top precision, timeless Porsche performance.",
    images: [
      { src: "/images/cars/911c4s-front.jpg", alt: "Porsche 911 Carrera 4S front" },
      { src: "/images/cars/911c4s-back.jpg", alt: "Porsche 911 Carrera 4S rear" },
      { src: "/images/cars/911c4s-interior.jpg", alt: "Porsche 911 Carrera 4S interior" },
    ],
    bullets: [
      "Available across Europe 🇪🇺",
      "Daily / Weekend / Weekly rentals",
      "Perfect for Monaco & Riviera cruising",
    ],
    highlights: [
      { label: "Engine", value: "3.0L Flat-6 Twin Turbo" },
      { label: "Power", value: "450 HP" },
      { label: "0–100 km/h", value: "3.6s" },
      { label: "Drive", value: "AWD" },
    ],
  },

  // ✅ Aston Martin DBX
  {
    slug: "aston-martin-dbx",
    brand: "Aston Martin",
    model: "DBX",
    category: "Luxury SUV",
    tagline: "V8 luxury, elegance and presence.",
    images: [
      { src: "/images/cars/dbx-front.jpg", alt: "Aston Martin DBX front" },
      { src: "/images/cars/dbx-back.jpg", alt: "Aston Martin DBX rear" },
      { src: "/images/cars/dbx-interior.jpg", alt: "Aston Martin DBX interior" },
    ],
    bullets: [
      "Luxury SUV for business or leisure",
      "Delivered anywhere in Europe",
      "Ideal for long-distance comfort travel",
    ],
    highlights: [
      { label: "Engine", value: "4.0L V8 Twin Turbo" },
      { label: "Power", value: "550 HP" },
      { label: "0–100 km/h", value: "4.5s" },
      { label: "Seats", value: "5" },
    ],
  },

  // ✅ Audi R8 Spyder
  {
    slug: "audi-r8-spyder",
    brand: "Audi",
    model: "R8 Spyder",
    category: "Supercar",
    tagline: "V10 sound, speed and supercar theatre.",
    images: [
      { src: "/images/cars/r8-front.jpg", alt: "Audi R8 Spyder front" },
      { src: "/images/cars/r8-back.jpg", alt: "Audi R8 Spyder rear" },
      { src: "/images/cars/r8-interior.jpg", alt: "Audi R8 Spyder interior" },
    ],
    bullets: [
      "Drop the roof and unleash the V10",
      "Available across Europe 🇪🇺",
      "Perfect for Monaco & Alps drives",
    ],
    highlights: [
      { label: "Engine", value: "5.2L V10" },
      { label: "Power", value: "620 HP" },
      { label: "0–100 km/h", value: "3.3s" },
      { label: "Drive", value: "Quattro AWD" },
    ],
  },

  // ✅ Audi RSQ8 2025
  {
    slug: "audi-rsq8-2025",
    brand: "Audi",
    model: "RSQ8 2025",
    category: "Performance SUV",
    tagline: "600+ HP super-SUV presence.",
    images: [
      { src: "/images/cars/rsq8-front.jpg", alt: "Audi RSQ8 front" },
      { src: "/images/cars/rsq8-back.jpg", alt: "Audi RSQ8 rear" },
      { src: "/images/cars/rsq8-interior.jpg", alt: "Audi RSQ8 interior" },
    ],
    bullets: [
      "Luxury + performance combined",
      "Available across Europe 🇪🇺",
      "Perfect for Autobahn & Riviera",
    ],
    highlights: [
      { label: "Engine", value: "4.0L V8 Twin Turbo" },
      { label: "Power", value: "600+ HP" },
      { label: "0–100 km/h", value: "3.8s" },
      { label: "Seats", value: "5" },
    ],
  },

  // ✅ Audi RS3
  {
    slug: "audi-rs3",
    brand: "Audi",
    model: "RS3",
    category: "Performance",
    tagline: "Compact rocket with iconic 5-cylinder sound.",
    images: [
      { src: "/images/cars/rs3-front.jpg", alt: "Audi RS3 front" },
      { src: "/images/cars/rs3-back.jpg", alt: "Audi RS3 rear" },
      { src: "/images/cars/rs3-interior.jpg", alt: "Audi RS3 interior" },
    ],
    bullets: [
      "Daily / Weekend / Weekly rentals",
      "Perfect city + highway combo",
      "All-wheel drive confidence",
    ],
    highlights: [
      { label: "Engine", value: "2.5L 5-Cylinder Turbo" },
      { label: "Power", value: "400 HP" },
      { label: "0–100 km/h", value: "3.8s" },
      { label: "Drive", value: "Quattro AWD" },
    ],
  },
];
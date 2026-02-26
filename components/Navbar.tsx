"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="relative h-10 w-[160px] md:h-12 md:w-[200px]">
            <Image
              src="/brand/logo.png"
              alt="AVP Supercars"
              fill
              priority
              sizes="200px"
              className="object-contain scale-[2.70] origin-left drop-shadow-[0_0_16px_rgba(212,175,55,0.6)]"
            />
          </div>
          <span className="sr-only">AVP Supercars</span>
        </Link>

        <nav className="hidden md:flex gap-8 text-sm text-white/80">
          <Link href="/fleet" className="hover:text-white transition">
            Fleet
          </Link>
          <Link href="/services" className="hover:text-white transition">
            Services
          </Link>
          <Link href="/locations" className="hover:text-white transition">
            Delivery
          </Link>
          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>
        </nav>

        <Link
          href="/contact"
          className="hidden md:inline-flex rounded-xl bg-white text-black font-semibold px-4 py-2 hover:bg-white/90 transition"
        >
          Request
        </Link>
      </div>
    </header>
  );
}
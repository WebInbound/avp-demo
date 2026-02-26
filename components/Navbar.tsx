"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const NAV = [
  { href: "/fleet", label: "Fleet" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/locations", label: "Delivery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const activeHref = useMemo(() => {
    const match = NAV.find((n) => pathname?.startsWith(n.href));
    return match?.href ?? "";
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-[160px] md:h-12 md:w-[200px]">
              <Image
                src="/brand/logo.png"
                alt="AVP Supercars"
                fill
                priority
                sizes="200px"
                className="object-contain scale-[2.7] origin-left drop-shadow-[0_0_16px_rgba(212,175,55,0.6)]"
              />
            </div>
          </Link>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {NAV.map((item) => {
              const isActive = pathname?.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative transition ${
                    isActive
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-2 left-0 h-[2px] w-full transition-transform duration-300 ${
                      isActive
                        ? "bg-white scale-x-100"
                        : "bg-white/40 scale-x-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden md:inline-flex rounded-xl bg-white text-black font-semibold px-4 py-2 hover:bg-white/90 transition"
          >
            Request
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative w-8 h-8 flex items-center justify-center"
          >
            <motion.span
              animate={{
                rotate: open ? 45 : 0,
                y: open ? 6 : 0,
              }}
              className="absolute w-6 h-[2px] bg-white"
            />
            <motion.span
              animate={{ opacity: open ? 0 : 1 }}
              className="absolute w-6 h-[2px] bg-white"
            />
            <motion.span
              animate={{
                rotate: open ? -45 : 0,
                y: open ? -6 : 0,
              }}
              className="absolute w-6 h-[2px] bg-white"
            />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl"
          >
            {/* subtle cinematic glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.06),transparent_55%)]" />

            <div className="h-full flex flex-col justify-center items-center gap-10 text-4xl font-semibold">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-white/80 hover:text-white transition"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-10"
              >
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="rounded-2xl bg-white text-black font-semibold px-8 py-4"
                >
                  Request availability
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { fleet } from "@/data/fleet";
import CarCard from "@/components/CarCard";

export default function Home() {
  const featured = fleet.filter((c) =>
    ["audi-r8-spyder", "ferrari-gtc4-lusso-t"].includes(c.slug)
  );
  const heroRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Parallax (più leggero)
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", prefersReducedMotion ? "0%" : "10%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.06, prefersReducedMotion ? 1.06 : 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", prefersReducedMotion ? "0%" : "18%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, prefersReducedMotion ? 1 : 0]);

  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative min-h-[100svh] overflow-hidden flex items-center justify-center"
      >
        {/* Background */}
        <motion.div className="absolute inset-0" style={{ y: bgY, scale: bgScale }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/cars/r8-front.jpg"
            alt="Audi R8 Spyder"
            className="w-[120%] h-full object-cover opacity-45 -translate-x-[-1%]"
          />
        </motion.div>

        {/* Overlays (più leggeri, look più premium) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07)_0%,rgba(0,0,0,0)_58%)]" />

        {/* Content */}
        <motion.div
          className="relative z-10 text-center px-6"
          style={{ y: contentY, opacity: contentOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-xs tracking-[0.35em] text-white/60"
          >
            DELIVERED ANYWHERE IN EUROPE • 24/7
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="mt-6 text-4xl md:text-6xl font-semibold leading-tight"
          >
            AVP SUPERCARS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="mt-6 max-w-2xl mx-auto text-white/70 text-lg"
          >
            Luxury Car Rental, Sales & Sourcing — Monaco & French Riviera lifestyle. Europe-wide delivery.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/fleet"
              className="rounded-2xl bg-white text-black font-semibold px-8 py-4 hover:bg-white/90 transition"
            >
              Explore Fleet
            </Link>

            <Link
              href="/contact"
              className="rounded-2xl border border-white/20 bg-black/40 px-8 py-4 hover:bg-white/10 transition"
            >
              Request a Car
            </Link>
          </motion.div>

          <div className="mt-8 text-xs text-white/45">
            Rates, deposits and requirements are provided upon request. [XXX]
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs text-white/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.7 }}
        >
          Scroll to explore ↓
        </motion.div>
      </section>

      {/* FEATURED */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-xs tracking-widest text-white/60">FEATURED</div>
            <h2 className="mt-3 text-4xl font-semibold">Signature Collection</h2>
            <p className="mt-3 text-white/70 max-w-2xl">
              A curated selection of supercars, GTs and performance SUVs — delivered anywhere in Europe.
            </p>
          </div>

          <Link href="/fleet" className="hidden md:inline text-sm text-white/70 hover:text-white transition">
            View all →
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((car) => (
            <CarCard key={car.slug} car={car} />
          ))}
        </div>

        <div className="mt-12 flex justify-center md:hidden">
          <Link
            href="/fleet"
            className="rounded-2xl border border-white/15 bg-black/40 px-7 py-3 text-white hover:bg-white/10 transition"
          >
            View all →
          </Link>
        </div>
      </section>
    {/* WHY AVP */}
      <section className="py-20 md:py-28 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left */}
            <div className="lg:col-span-5">
              <div className="text-xs tracking-[0.35em] text-white/60">
                WHY AVP
              </div>

              <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
                Monaco-level service,
                <span className="text-white/70"> delivered anywhere in Europe.</span>
              </h2>

              <p className="mt-5 text-white/70 text-lg leading-relaxed">
                We handle everything end-to-end: selection, availability, delivery, and
                support. Fast replies via WhatsApp, transparent deposits, and a fleet
                curated for presence and performance.
              </p>

              {/* Premium stats */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-xs text-white/55">Delivery</div>
                  <div className="mt-2 text-white font-semibold text-xl">Europe-wide • 24/7</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-xs text-white/55">Response time</div>
                  <div className="mt-2 text-white font-semibold text-xl">Fast via WhatsApp</div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-2xl bg-white text-black font-semibold px-7 py-3 hover:bg-white/90 transition"
                >
                  Request availability
                </Link>

                <Link
                  href="/services"
                  className="rounded-2xl border border-white/15 bg-black/40 px-7 py-3 text-white hover:bg-white/10 transition"
                >
                  Explore services
                </Link>
              </div>
            </div>

            {/* Right (Glass cards) */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-xl shadow-[0_30px_120px_rgba(0,0,0,0.55)]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Card 1 */}
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
                    <div className="text-xs text-white/60 tracking-widest">DELIVERY</div>
                    <div className="mt-2 text-xl font-semibold">Door-to-door logistics</div>
                    <p className="mt-2 text-white/70 text-sm leading-relaxed">
                      Monaco / French Riviera base with Europe-wide delivery, tailored times,
                      and handover on location.
                    </p>
                    <div className="mt-4 text-xs text-white/55">
                      Included: coordination • timing • handover
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
                    <div className="text-xs text-white/60 tracking-widest">FLEET</div>
                    <div className="mt-2 text-xl font-semibold">Curated vehicles only</div>
                    <p className="mt-2 text-white/70 text-sm leading-relaxed">
                      Supercars, GTs and performance SUVs chosen for spec, presence and
                      condition — no random listings.
                    </p>
                    <div className="mt-4 text-xs text-white/55">
                      Focus: premium spec • clean history • top condition
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
                    <div className="text-xs text-white/60 tracking-widest">SUPPORT</div>
                    <div className="mt-2 text-xl font-semibold">Real humans, fast reply</div>
                    <p className="mt-2 text-white/70 text-sm leading-relaxed">
                      WhatsApp-first communication for fastest scheduling, changes and
                      confirmations.
                    </p>
                    <div className="mt-4 text-xs text-white/55">
                      Best for: last-minute bookings • events • travel
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
                    <div className="text-xs text-white/60 tracking-widest">BOOKING</div>
                    <div className="mt-2 text-xl font-semibold">Clear terms, on request</div>
                    <p className="mt-2 text-white/70 text-sm leading-relaxed">
                      Rates, deposits and requirements shared upon request — aligned to
                      dates, location and driver profile.
                    </p>
                    <div className="mt-4 text-xs text-white/55">
                      Includes: deposit • delivery • availability window
                    </div>
                  </div>
                </div>

                {/* bottom line */}
                <div className="mt-6 rounded-2xl border border-white/10 bg-black/35 px-5 py-4 text-sm text-white/70">
                  Tip: for fastest booking, send us <span className="text-white font-semibold">car</span>,{" "}
                  <span className="text-white font-semibold">dates</span> and{" "}
                  <span className="text-white font-semibold">delivery location</span>.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SERVICES PREVIEW */}
      <section className="pb-24 md:pb-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="text-xs tracking-[0.35em] text-white/60">SERVICES</div>
              <h2 className="mt-4 text-4xl md:text-5xl font-semibold">
                More than a rental
              </h2>
              <p className="mt-4 text-white/70 max-w-2xl">
                From supercar delivery to sourcing and event logistics — AVP offers a full
                luxury automotive service across Europe.
              </p>
            </div>

            <Link
              href="/services"
              className="inline-flex w-fit rounded-2xl border border-white/15 bg-black/40 px-7 py-3 text-white hover:bg-white/10 transition"
            >
              View all services →
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Service 1 */}
            <div className="group rounded-3xl border border-white/10 bg-white/5 p-7 hover:bg-white/10 transition">
              <div className="flex items-center justify-between">
                <div className="text-xs tracking-widest text-white/60">RENTAL</div>
                <div className="h-9 w-9 rounded-2xl border border-white/10 bg-black/40 backdrop-blur grid place-items-center">
                  <span className="text-white/80">↗</span>
                </div>
              </div>

              <div className="mt-4 text-xl font-semibold">Luxury rentals</div>
              <p className="mt-3 text-white/70 text-sm leading-relaxed">
                Daily, weekend and weekly bookings. Vehicles delivered to hotels, villas,
                airports and yachts across Europe.
              </p>

              <div className="mt-5 text-xs text-white/55">
                Includes: delivery • handover • support
              </div>
            </div>

            {/* Service 2 */}
            <div className="group rounded-3xl border border-white/10 bg-white/5 p-7 hover:bg-white/10 transition">
              <div className="flex items-center justify-between">
                <div className="text-xs tracking-widest text-white/60">SOURCING</div>
                <div className="h-9 w-9 rounded-2xl border border-white/10 bg-black/40 backdrop-blur grid place-items-center">
                  <span className="text-white/80">↗</span>
                </div>
              </div>

              <div className="mt-4 text-xl font-semibold">Car sourcing</div>
              <p className="mt-3 text-white/70 text-sm leading-relaxed">
                Looking for a specific spec? We help source rare and high-performance
                vehicles. Private, fast, discreet.
              </p>

              <div className="mt-5 text-xs text-white/55">
                Includes: search • verification • negotiation [XXX]
              </div>
            </div>

            {/* Service 3 */}
            <div className="group rounded-3xl border border-white/10 bg-white/5 p-7 hover:bg-white/10 transition">
              <div className="flex items-center justify-between">
                <div className="text-xs tracking-widest text-white/60">EVENTS</div>
                <div className="h-9 w-9 rounded-2xl border border-white/10 bg-black/40 backdrop-blur grid place-items-center">
                  <span className="text-white/80">↗</span>
                </div>
              </div>

              <div className="mt-4 text-xl font-semibold">Events & logistics</div>
              <p className="mt-3 text-white/70 text-sm leading-relaxed">
                Supercar presence for private events, brand activations, weddings and VIP
                weekends. Coordination included.
              </p>

              <div className="mt-5 text-xs text-white/55">
                Includes: timing • delivery • presentation
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-2xl bg-white text-black font-semibold px-7 py-3 hover:bg-white/90 transition"
            >
              Request service
            </Link>

            <Link
              href="/fleet"
              className="rounded-2xl border border-white/15 bg-black/40 px-7 py-3 text-white hover:bg-white/10 transition"
            >
              Explore fleet →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
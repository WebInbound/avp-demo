"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

export default function LocationsPage() {
  const prefersReducedMotion = useReducedMotion();

  const heroRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Parallax (pulito, non esagerato)
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", prefersReducedMotion ? "0%" : "12%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.06, prefersReducedMotion ? 1.06 : 1.14]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", prefersReducedMotion ? "0%" : "18%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, prefersReducedMotion ? 1 : 0]);

  return (
    <main className="bg-black text-white min-h-screen">
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative min-h-[85svh] overflow-hidden flex items-center px-6 pt-28 pb-14"
      >
        {/* Background (GTC4 back) */}
        <motion.div className="absolute inset-0" style={{ y: bgY, scale: bgScale }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/cars/gtc4lusso-back.jpg"
            alt="Ferrari GTC4Lusso T back"
            className="w-full h-full object-cover opacity-45"
            // Sposta il focus verso destra/su, per renderla più “hero”
            style={{ objectPosition: "70% 45%" }}
          />
        </motion.div>

        {/* Overlays cinematic */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />

        {/* Content */}
        <motion.div
          className="relative z-10 max-w-6xl mx-auto w-full"
          style={{ y: contentY, opacity: contentOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-xs tracking-[0.4em] text-white/60"
          >
            DELIVERY EXPERIENCE
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.06 }}
            className="mt-6 text-5xl md:text-6xl font-semibold leading-tight"
          >
            Delivered where luxury
            <br />
            <span className="text-white/70">meets you.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="mt-6 max-w-2xl text-white/70 text-lg"
          >
            Airports, villas, yachts, private residences — we handle logistics with Monaco-level
            precision across Europe.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="rounded-2xl bg-white text-black font-semibold px-8 py-4 hover:bg-white/90 transition"
            >
              Request delivery
            </Link>

            <Link
              href="/fleet"
              className="rounded-2xl border border-white/15 bg-black/40 px-8 py-4 hover:bg-white/10 transition"
            >
              Explore fleet →
            </Link>
          </motion.div>

          <div className="mt-8 text-xs text-white/45">
            Delivery fees depend on distance and timing. [XXX]
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

      {/* SPLIT: Coverage + Glass panel */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-xs tracking-[0.4em] text-white/60">COVERAGE</div>
            <h2 className="mt-5 text-4xl font-semibold">
              Europe-wide delivery, Monaco base
            </h2>

            <p className="mt-6 text-white/70 leading-relaxed">
              French Riviera is our core route, with frequent deliveries to Italy and Switzerland.
              If you have a special request, we can organize it. [XXX]
            </p>

            <div className="mt-10 space-y-3 text-white/70">
              <div>Monaco • Monte-Carlo</div>
              <div>Nice • Cannes • Saint-Tropez</div>
              <div>Milan • Lake Como</div>
              <div>Geneva • Zurich</div>
              <div>Paris • Ibiza [XXX]</div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-2xl bg-white text-black font-semibold px-7 py-3 hover:bg-white/90 transition"
              >
                Request a quote
              </Link>

              <Link
                href="/services"
                className="rounded-2xl border border-white/15 bg-black/40 px-7 py-3 text-white hover:bg-white/10 transition"
              >
                Services →
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.7, delay: 0.06 }}
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 md:p-10 backdrop-blur-xl shadow-[0_40px_140px_rgba(0,0,0,0.6)] relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.09),rgba(0,0,0,0)_55%)] opacity-60" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.06),rgba(0,0,0,0)_55%)] opacity-60" />

              <div className="relative">
                <div className="text-xs tracking-[0.35em] text-white/60">DROP-OFF</div>
                <h3 className="mt-4 text-3xl font-semibold">Delivered where you are</h3>
                <p className="mt-4 text-white/70">
                  We coordinate timing and handover. You receive the car ready to drive.
                </p>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
                  <GlassItem title="Airports" desc="Nice (NCE), Milan, Geneva, Paris and more." />
                  <GlassItem title="Luxury hotels" desc="Direct handover at premium hotels and resorts." />
                  <GlassItem title="Private villas" desc="Door-to-door delivery & collection." />
                  <GlassItem title="Yachts & marinas" desc="Port / marina coordination on request. [XXX]" />
                </div>

                <div className="mt-8 rounded-2xl border border-white/10 bg-black/35 px-5 py-4 text-sm text-white/70">
                  Fastest booking: send <span className="text-white font-semibold">car</span>,{" "}
                  <span className="text-white font-semibold">dates</span> and{" "}
                  <span className="text-white font-semibold">delivery location</span>.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-xs tracking-[0.4em] text-white/60">HOW IT WORKS</div>
          <h2 className="mt-6 text-4xl font-semibold">Simple. Precise. Premium.</h2>

          <div className="mt-16 grid md:grid-cols-3 gap-10">
            <Step number="01" title="Request" text="Car, dates, delivery location." />
            <Step number="02" title="Confirm" text="Availability, rate, deposit and timing." />
            <Step number="03" title="Handover" text="Delivered directly to you — support 24/7." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center rounded-3xl border border-white/10 bg-white/5 p-12 backdrop-blur-xl">
          <h3 className="text-3xl md:text-4xl font-semibold">Ready to plan delivery?</h3>
          <p className="mt-6 text-white/70">
            Tell us vehicle, date and location — we’ll reply with options and a quote.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="rounded-2xl bg-white text-black font-semibold px-10 py-4 hover:bg-white/90 transition"
            >
              Request now
            </Link>
            <Link
              href="/fleet"
              className="rounded-2xl border border-white/15 bg-black/40 px-10 py-4 text-white hover:bg-white/10 transition"
            >
              Explore fleet →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function GlassItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/35 p-6 hover:bg-white/10 transition">
      <div className="text-xs tracking-[0.35em] text-white/60">{title}</div>
      <div className="mt-3 text-lg font-semibold">{title}</div>
      <div className="mt-2 text-sm text-white/70 leading-relaxed">{desc}</div>
    </div>
  );
}

function Step({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-left hover:bg-white/10 transition">
      <div className="text-xs tracking-[0.35em] text-white/60">{number}</div>
      <div className="mt-4 text-xl font-semibold">{title}</div>
      <div className="mt-3 text-white/70 text-sm leading-relaxed">{text}</div>
    </div>
  );
}
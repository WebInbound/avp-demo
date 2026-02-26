"use client";

import { useCallback, useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import CarCard from "@/components/CarCard";
import FleetFilters from "@/components/FleetFilters";
import { fleet } from "@/data/fleet";
import type { Car } from "@/data/fleet";

export default function FleetPage() {
  const items = useMemo(() => fleet, []);
  const [list, setList] = useState<Car[]>(items);

  const onChange = useCallback((filtered: Car[]) => {
    setList(filtered);
  }, []);

  return (
    <main className="bg-black text-white min-h-screen">
      {/* HERO */}
      <section className="relative pt-28 pb-14 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/cars/r8-front.jpg"
            alt="Fleet"
            className="w-full h-full object-cover opacity-30"
            style={{ objectPosition: "55% center" }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xs tracking-[0.35em] text-white/60"
          >
            EUROPE-WIDE DELIVERY • 24/7
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.05 }}
            className="mt-6 text-5xl md:text-6xl font-semibold"
          >
            Explore the Fleet
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-4 max-w-2xl text-white/70"
          >
            Availability, rates and deposits are provided upon request. Delivery to
            villas, hotels, airports and yachts across Europe.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              href="/contact"
              className="rounded-2xl bg-white text-black font-semibold px-7 py-3 hover:bg-white/90 transition"
            >
              Request availability
            </Link>

            <Link
              href="/services"
              className="rounded-2xl border border-white/15 bg-black/40 px-7 py-3 hover:bg-white/10 transition"
            >
              View services
            </Link>
          </motion.div>

          {/* FILTERS */}
          <FleetFilters items={items} onChange={onChange} />
        </div>
      </section>

      {/* GRID */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {list.length === 0 ? (
            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center text-white/70">
              No vehicles match your search.
            </div>
          ) : (
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {list.map((car, i) => (
                <motion.div
                  key={car.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: i * 0.03 }}
                  viewport={{ once: true, margin: "-120px" }}
                >
                  <CarCard car={car} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
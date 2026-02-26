"use client";

import { useEffect, useMemo, useState } from "react";
import type { Car } from "@/data/fleet";

type Props = {
  items: Car[];
  onChange: (filtered: Car[]) => void;
};

export default function FleetFilters({ items, onChange }: Props) {
  const categories = useMemo(() => {
    const set = new Set(items.map((c) => c.category));
    return ["All", ...Array.from(set)];
  }, [items]);

  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();

    return items.filter((c) => {
      const matchesCat = cat === "All" ? true : c.category === cat;
      const matchesQ =
        !query ||
        `${c.brand} ${c.model} ${c.tagline}`.toLowerCase().includes(query);

      return matchesCat && matchesQ;
    });
  }, [items, q, cat]);

  // ✅ IMPORTANT: non chiamare onChange dentro useMemo/render
  useEffect(() => {
    onChange(filtered);
  }, [filtered, onChange]);

  return (
    <div className="relative mt-10 sticky top-20 z-40 rounded-3xl border border-white/15 bg-black/35 backdrop-blur-xl p-4 md:p-5 shadow-[0_20px_80px_rgba(0,0,0,0.55)] hover:bg-black/45 transition">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex-1">
          <div className="text-xs text-white/60 mb-2">Search</div>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search brand, model…"
            className="w-full rounded-2xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder:text-white/35 outline-none focus:border-white/20"
          />
        </div>

        <div className="w-full md:w-64">
          <div className="text-xs text-white/60 mb-2">Category</div>
          <select
            value={cat}
            onChange={(e) => setCat(e.target.value)}
            className="w-full rounded-2xl bg-black/40 border border-white/10 px-4 py-3 text-white outline-none focus:border-white/20"
          >
            {categories.map((c) => (
              <option key={c} value={c} className="bg-black">
                {c}
              </option>
            ))}
          </select>
        </div>

        <button
          type="button"
          onClick={() => {
            setQ("");
            setCat("All");
          }}
          className="md:self-end rounded-2xl border border-white/15 bg-black/40 px-5 py-3 text-white hover:bg-white/10 transition"
        >
          Reset
        </button>
      </div>

      <div className="mt-4 text-sm text-white/55">
        Showing <span className="text-white font-semibold">{filtered.length}</span>{" "}
        vehicles
      </div>
    </div>
  );
}
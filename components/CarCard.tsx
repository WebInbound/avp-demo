import Link from "next/link";
import type { Car } from "@/data/fleet";

export default function CarCard({ car }: { car: Car }) {
  return (
    <Link
      href={`/fleet/${car.slug}`}
      className="group block overflow-hidden rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
    >
      {/* Image (wide) */}
      <div className="relative aspect-[16/10] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={car.images?.[0]?.src}
          alt={`${car.brand} ${car.model}`}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
          style={{ objectPosition: "50% 55%" }} // meno “tagli” in alto/basso
        />

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(255,255,255,0.10),rgba(0,0,0,0)_55%)]" />

        {/* Light sweep */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="
              absolute -inset-y-10 -left-1/2 w-1/2
              bg-gradient-to-r from-transparent via-white/18 to-transparent
              rotate-12 blur-md
              opacity-0 group-hover:opacity-100
              translate-x-[-30%] group-hover:translate-x-[240%]
              transition-all duration-1000
            "
          />
        </div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="rounded-full border border-white/15 bg-black/40 backdrop-blur px-3 py-1 text-[11px] text-white/80">
            {car.category}
          </span>
          <span className="rounded-full border border-white/15 bg-black/40 backdrop-blur px-3 py-1 text-[11px] text-white/70">
            On request
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="text-lg font-semibold">
          {car.brand} {car.model}
        </div>
        <div className="mt-1 text-sm text-white/70 line-clamp-2">{car.tagline}</div>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-xs text-white/55">Europe-wide delivery • 24/7</div>
          <div className="text-sm text-white/85 underline underline-offset-4">
            View details →
          </div>
        </div>
      </div>
    </Link>
  );
}
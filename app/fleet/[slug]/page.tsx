import { fleet } from "@/data/fleet";
import { notFound } from "next/navigation";

export default async function CarDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const car = fleet.find((c) => c.slug === slug);
  if (!car) return notFound();

  return (
    <main className="mx-auto max-w-6xl px-5 pt-12">
      <div className="text-xs tracking-widest text-white/60">{car.category}</div>

      <h1 className="mt-2 text-4xl font-semibold">
        {car.brand} {car.model}
      </h1>

      <p className="mt-3 text-white/70 max-w-2xl">{car.tagline}</p>

      {/* CTA */}
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={`/contact?car=${encodeURIComponent(`${car.brand} ${car.model}`)}`}
          className="rounded-xl bg-white text-black font-semibold px-5 py-3 hover:bg-white/90 transition"
        >
          Request this car
        </a>

        <a
          href="/fleet"
          className="rounded-xl border border-white/15 bg-black/40 px-5 py-3 text-white hover:bg-white/10 transition"
        >
          Back to fleet
        </a>
      </div>

      {/* Images */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {car.images.map((img) => (
          <div
            key={img.src}
            className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Info */}
      <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="text-white font-semibold">Rental info</div>

        <ul className="mt-3 grid gap-2 text-sm text-white/70">
          {car.bullets.map((b) => (
            <li key={b}>• {b}</li>
          ))}
        </ul>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
          {car.highlights.map((h) => (
            <div
              key={h.label}
              className="rounded-xl border border-white/10 bg-black/40 p-4"
            >
              <div className="text-xs text-white/60">{h.label}</div>
              <div className="text-white font-semibold mt-1">{h.value}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-xs text-white/45">
          Rates, deposits and requirements are provided upon request. [XXX]
        </div>
      </div>
    </main>
  );
}
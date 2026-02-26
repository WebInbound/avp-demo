import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Cambia qui lo sfondo se vuoi (metti una tua foto) */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/cars/gtc4lusso-back.jpg"
            alt="AVP Supercars"
            className="h-full w-full object-cover opacity-45"
            style={{ objectPosition: "55% center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-20">
          <div className="text-xs tracking-[0.35em] text-white/60">ABOUT</div>

          <h1 className="mt-6 text-5xl md:text-6xl font-semibold leading-tight">
            AVP Supercars
          </h1>

          <p className="mt-6 max-w-2xl text-white/70 text-lg">
            Luxury car rental, sales & sourcing — Monaco & French Riviera lifestyle,
            with Europe-wide delivery. Built for clients who want the right car,
            at the right time, without friction.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/fleet"
              className="rounded-2xl bg-white text-black font-semibold px-7 py-3 hover:bg-white/90 transition"
            >
              Explore Fleet
            </Link>
            <Link
              href="/contact"
              className="rounded-2xl border border-white/15 bg-black/40 px-7 py-3 text-white hover:bg-white/10 transition"
            >
              Request availability
            </Link>
          </div>
        </div>
      </section>

      {/* STATS / TRUST */}
      <section className="mx-auto max-w-7xl px-6 -mt-10 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { k: "24/7", v: "Concierge delivery" },
            { k: "EU", v: "Europe-wide service" },
            { k: "VIP", v: "Discretion & speed" },
          ].map((s) => (
            <div
              key={s.k}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6"
            >
              <div className="text-3xl font-semibold">{s.k}</div>
              <div className="mt-2 text-white/65">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* STORY + VALUES */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <div className="text-xs tracking-widest text-white/60">OUR STORY</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold">
              Built around experience, not inventory
            </h2>

            <p className="mt-5 text-white/70 leading-relaxed">
              We operate like a concierge: fast response, clear options, and premium
              delivery across Europe. Whether it’s a supercar weekend in Monaco,
              a business arrival in Milan, or a road trip through the Alps, we match
              the vehicle and logistics to the moment.
            </p>

            <p className="mt-4 text-white/70 leading-relaxed">
              Every booking is handled with discretion and attention to detail:
              handover, timing, locations, and requirements are coordinated to feel
              effortless.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-xs tracking-widest text-white/60">VALUES</div>

              <ul className="mt-5 grid gap-4 text-white/75">
                {[
                  ["Discretion", "Privacy-first approach and clean communication."],
                  ["Precision", "Fast confirmations, clear requirements, no chaos."],
                  ["Taste", "Curated cars and premium presentation."],
                  ["Reliability", "Delivery logistics you can trust."],
                ].map(([t, d]) => (
                  <li key={t} className="rounded-2xl border border-white/10 bg-black/40 p-4">
                    <div className="font-semibold text-white">{t}</div>
                    <div className="mt-1 text-sm text-white/65">{d}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CO-FOUNDERS */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-6 relative min-h-[320px]">
              {/* Quando hai la foto: mettila in public/images/founders/cofounders.jpg */}
              <Image
                src="/images/founders/cofounders.jpg"
                alt="Co-founders of AVP Supercars"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/10 to-transparent" />
            </div>

            <div className="lg:col-span-6 p-8 md:p-10">
              <div className="text-xs tracking-[0.35em] text-white/60">CO-FOUNDERS</div>
              <h3 className="mt-3 text-3xl font-semibold">Your point of contact</h3>

              <p className="mt-5 text-white/70 leading-relaxed">
                Add a short story about who you are, what you do, and why clients trust you.
                Keep it direct: response time, network, discretion, and delivery capability.
              </p>

              <div className="mt-6 grid gap-3">
                <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                  <div className="text-xs text-white/60">Base</div>
                  <div className="mt-1 font-semibold">Monaco / French Riviera</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                  <div className="text-xs text-white/60">Delivery</div>
                  <div className="mt-1 font-semibold">Anywhere in Europe • 24/7</div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-2xl bg-white text-black font-semibold px-7 py-3 hover:bg-white/90 transition"
                >
                  Contact us
                </Link>
                <Link
                  href="/fleet"
                  className="rounded-2xl border border-white/15 bg-black/40 px-7 py-3 text-white hover:bg-white/10 transition"
                >
                  View fleet →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
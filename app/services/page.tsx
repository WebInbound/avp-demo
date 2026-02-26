import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="relative min-h-[70vh] md:min-h-[78vh] overflow-hidden px-6 pt-20 pb-16">
        {/* Background */}
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/cars/portofino-interior.jpg"
            alt="Ferrari Portofino Interior"
            className="h-full w-full object-cover opacity-60 scale-105"
            style={{ objectPosition: "40% 0%" }} 
          />

          {/* overlay (più pulito e meno “nero a metà”) */}
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />
        </div>

        {/* Content */}
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <div className="text-xs tracking-[0.35em] text-white/70">SERVICES</div>

            <h1 className="mt-5 text-5xl md:text-6xl font-semibold">
              Bespoke Automotive Service
            </h1>

            <p className="mt-5 text-white/75 text-lg">
              Luxury rentals, sourcing and concierge delivery across Europe. Built for Monaco-level expectations.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="rounded-2xl bg-white text-black font-semibold px-7 py-3 hover:bg-white/90 transition"
              >
                Request availability
              </a>

              <a
                href="/fleet"
                className="rounded-2xl border border-white/20 bg-black/30 px-7 py-3 hover:bg-white/10 transition"
              >
                View fleet →
              </a>
            </div>

            <div className="mt-6 text-xs text-white/50">
              Rates, deposits and requirements are provided upon request. [XXX]
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE GRID */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard
              eyebrow="RENTAL"
              title="Luxury rentals"
              desc="Daily, weekend and weekly rentals. Delivery to hotels, villas, airports and yachts across Europe."
              bullets={[
                "Europe-wide delivery • 24/7",
                "VIP handover on location",
                "Flexible durations (on request)",
              ]}
            />

            <ServiceCard
              eyebrow="SOURCING"
              title="Vehicle sourcing"
              desc="We help you source rare and high-performance vehicles with speed, discretion and verification."
              bullets={[
                "Target spec search & shortlist",
                "Background / condition checks [XXX]",
                "Negotiation & coordination support",
              ]}
            />

            <ServiceCard
              eyebrow="EVENTS"
              title="Events & logistics"
              desc="Supercar presence for weddings, brand activations, VIP weekends and private events."
              bullets={[
                "Timing & presentation planning",
                "Delivery / collection coordination",
                "Multi-car requests supported [XXX]",
              ]}
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur-xl shadow-[0_30px_120px_rgba(0,0,0,0.55)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <div className="text-xs tracking-[0.35em] text-white/60">
                HOW IT WORKS
              </div>
              <h2 className="mt-4 text-4xl font-semibold">
                Simple, fast, concierge-level
              </h2>
              <p className="mt-4 text-white/70">
                Tell us what you want and where you need it — we take care of the
                rest.
              </p>

              <div className="mt-7 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-2xl bg-white text-black font-semibold px-7 py-3 hover:bg-white/90 transition"
                >
                  Contact on WhatsApp
                </Link>

                <Link
                  href="/locations"
                  className="rounded-2xl border border-white/15 bg-black/40 px-7 py-3 text-white hover:bg-white/10 transition"
                >
                  Delivery locations →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-5">
              <Step
                n="01"
                title="Request"
                text="Send us the car, dates and delivery location. Fast replies via WhatsApp."
              />
              <Step
                n="02"
                title="Confirm"
                text="We confirm availability, rate, deposit and requirements based on your request."
              />
              <Step
                n="03"
                title="Deliver"
                text="Door-to-door delivery & handover. Enjoy the experience — support 24/7."
              />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-black/40 p-10 text-center">
          <h3 className="text-3xl md:text-4xl font-semibold">
            Ready to book?
          </h3>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Send your preferred car, dates and delivery location. We’ll reply with
            availability, rate and deposit details.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="rounded-2xl bg-white text-black font-semibold px-8 py-4 hover:bg-white/90 transition"
            >
              Request now
            </Link>

            <Link
              href="/fleet"
              className="rounded-2xl border border-white/15 bg-black/40 px-8 py-4 text-white hover:bg-white/10 transition"
            >
              Explore fleet →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function ServiceCard({
  eyebrow,
  title,
  desc,
  bullets,
}: {
  eyebrow: string;
  title: string;
  desc: string;
  bullets: string[];
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-7 hover:bg-white/10 transition">
      <div className="text-xs tracking-[0.35em] text-white/60">{eyebrow}</div>
      <div className="mt-3 text-2xl font-semibold">{title}</div>
      <p className="mt-3 text-white/70 text-sm leading-relaxed">{desc}</p>

      <ul className="mt-6 space-y-2 text-sm text-white/70">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="text-white/50">•</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Step({ n, title, text }: { n: string; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
      <div className="text-xs tracking-[0.35em] text-white/60">{n}</div>
      <div className="mt-2 text-xl font-semibold">{title}</div>
      <p className="mt-3 text-sm text-white/70 leading-relaxed">{text}</p>
    </div>
  );
}
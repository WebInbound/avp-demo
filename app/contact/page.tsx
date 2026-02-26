import RequestForm from "@/components/RequestForm";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 pt-12">
      <div className="text-xs tracking-widest text-white/60">CONTACT</div>
      <h1 className="mt-2 text-4xl font-semibold">Let’s arrange your car</h1>
      <p className="mt-3 text-white/70 max-w-2xl">
        Europe-wide delivery • 24/7. Rates, deposits and requirements are shared upon request.
      </p>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3">
          <RequestForm />
        </div>

        <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="text-lg font-semibold">Direct contacts</div>
          <div className="mt-4 grid gap-2 text-sm text-white/70">
            <div>Phone: <span className="text-white">[XXX_PHONE]</span></div>
            <div>WhatsApp: <span className="text-white">[XXX_WHATSAPP]</span></div>
            <div>Email: <span className="text-white">[XXX_EMAIL]</span></div>
            <div>Base: <span className="text-white">Monaco / French Riviera</span></div>
            <div>Delivery: <span className="text-white">Anywhere in Europe</span></div>
          </div>

          <div className="mt-6 text-xs text-white/50">
            For fast booking please include: car model, dates, delivery location, and driver details.
          </div>
        </div>
      </div>
    </main>
  );
}
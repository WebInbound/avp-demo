"use client";

export default function WhatsAppFloat() {
  const whatsappNumber = "[XXX_WHATSAPP_NUMBER]"; // es: 377XXXXXXXX
  const text = encodeURIComponent("Hi AVP Supercars, I’d like to request a car. [XXX]");

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${text}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 rounded-2xl border border-white/15 bg-black/70 backdrop-blur px-4 py-3 text-sm text-white shadow-lg hover:bg-white/10 transition"
      aria-label="WhatsApp"
    >
      <span className="font-semibold">WhatsApp</span>
      <span className="text-white/60"> • Fast reply</span>
    </a>
  );
}
"use client";

import { useMemo, useState } from "react";

type FormState = {
  name: string;
  phone: string;
  email: string;
  car: string;
  startDate: string;
  endDate: string;
  location: string;
  message: string;
};

export default function RequestForm({
  defaultCar = "",
}: {
  defaultCar?: string;
}) {
  const [s, setS] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    car: defaultCar,
    startDate: "",
    endDate: "",
    location: "",
    message: "",
  });

  const whatsappNumber = "[XXX_WHATSAPP_NUMBER]"; // es: 377XXXXXXXX
  const emailTo = "[XXX_EMAIL]";

  const whatsappText = useMemo(() => {
    const lines = [
      "AVP Supercars — Request",
      `Name: ${s.name || "[name]"}`,
      `Phone: ${s.phone || "[phone]"}`,
      `Email: ${s.email || "[email]"}`,
      `Car: ${s.car || "[car]"}`,
      `Dates: ${s.startDate || "[start]"} → ${s.endDate || "[end]"}`,
      `Delivery location: ${s.location || "[location]"}`,
      `Message: ${s.message || "[message]"}`,
    ];
    return encodeURIComponent(lines.join("\n"));
  }, [s]);

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent("AVP Supercars — Request");
    const body = encodeURIComponent(
      [
        `Name: ${s.name}`,
        `Phone: ${s.phone}`,
        `Email: ${s.email}`,
        `Car: ${s.car}`,
        `Dates: ${s.startDate} → ${s.endDate}`,
        `Delivery location: ${s.location}`,
        "",
        s.message,
      ].join("\n")
    );
    return `mailto:${emailTo}?subject=${subject}&body=${body}`;
  }, [s, emailTo]);

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setS((p) => ({ ...p, [k]: e.target.value }));

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="text-lg font-semibold">Request a car</div>
      <p className="mt-2 text-sm text-white/70">
        Rates, deposits and requirements are provided upon request. Use WhatsApp for fastest reply.
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Full name" placeholder="John Doe" value={s.name} onChange={set("name")} />
        <Field label="Phone" placeholder="+33 ..." value={s.phone} onChange={set("phone")} />
        <Field label="Email" placeholder="you@email.com" value={s.email} onChange={set("email")} />
        <Field label="Car" placeholder="Ferrari Portofino" value={s.car} onChange={set("car")} />
        <Field label="Start date" placeholder="YYYY-MM-DD" value={s.startDate} onChange={set("startDate")} />
        <Field label="End date" placeholder="YYYY-MM-DD" value={s.endDate} onChange={set("endDate")} />
        <div className="md:col-span-2">
          <Field label="Delivery location" placeholder="Monaco / Nice / Milan / ..." value={s.location} onChange={set("location")} />
        </div>
        <div className="md:col-span-2">
          <Area label="Message" placeholder="Tell us your request…" value={s.message} onChange={set("message")} />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          className="rounded-xl bg-white text-black font-semibold px-5 py-3 hover:bg-white/90 transition"
          href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp request
        </a>

        <a
          className="rounded-xl border border-white/15 bg-black/40 px-5 py-3 text-white hover:bg-white/10 transition"
          href={mailtoHref}
        >
          Email request
        </a>
      </div>

      <div className="mt-4 text-xs text-white/50">
        Contact: Phone [XXX_PHONE] • WhatsApp [XXX_WHATSAPP] • Email [XXX_EMAIL]
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (e: any) => void;
  placeholder?: string;
}) {
  return (
    <label className="grid gap-2 text-sm">
      <span className="text-white/70">{label}</span>
      <input
        className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-white/25"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  );
}

function Area({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (e: any) => void;
  placeholder?: string;
}) {
  return (
    <label className="grid gap-2 text-sm">
      <span className="text-white/70">{label}</span>
      <textarea
        className="min-h-[110px] rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-white/25"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  );
}
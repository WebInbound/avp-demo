import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="mx-auto max-w-6xl px-5 py-10 text-sm text-white/60">
        <div className="flex flex-col gap-2">
          <div className="text-white/80 font-semibold">AVP SUPERCARS</div>
          <div>Source • Rent • Sales</div>
          <div>Phone: +377 37 70 34 20</div>

          <div className="flex gap-4 mt-2">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/faq" className="hover:text-white">FAQ</Link>
          </div>

          <div className="text-xs text-white/40 mt-4">
            Terms, rates, deposits and requirements are provided upon request. [XXX]
          </div>
        </div>
      </div>
    </footer>
  );
}
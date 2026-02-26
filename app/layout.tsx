import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata = {
  title: "AVP Supercars — Source • Rent • Sales",
  description: "Luxury car rental, sales & sourcing. Delivered anywhere in Europe — 24/7.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        {children}
        <body className="bg-black text-white">
          {children}

          {/* FOOTER */}
          <footer className="relative border-t border-white/10 mt-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_60%)]" />

            <div className="relative max-w-7xl mx-auto px-6 py-20">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                {/* Brand */}
                <div>
                  <div className="text-xl font-semibold tracking-wide">
                    AVP <span className="text-white/60">SUPERCARS</span>
                  </div>
                  <p className="mt-4 text-white/60 text-sm leading-relaxed">
                    Luxury car rental, sourcing & delivery across Europe.
                    Monaco-based. 24/7 concierge service.
                  </p>
                </div>

                {/* Navigation */}
                <div>
                  <div className="text-sm text-white/50 tracking-widest">NAVIGATION</div>
                  <ul className="mt-4 space-y-3 text-sm">
                    <li><a href="/fleet" className="hover:text-white transition">Fleet</a></li>
                    <li><a href="/services" className="hover:text-white transition">Services</a></li>
                    <li><a href="/about" className="hover:text-white transition">About</a></li>
                    <li><a href="/locations" className="hover:text-white transition">Delivery</a></li>
                    <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
                  </ul>
                </div>

                {/* Locations */}
                <div>
                  <div className="text-sm text-white/50 tracking-widest">LOCATIONS</div>
                  <ul className="mt-4 space-y-3 text-sm text-white/70">
                    <li>Monaco</li>
                    <li>French Riviera</li>
                    <li>Milan</li>
                    <li>Geneva</li>
                    <li>Zurich</li>
                  </ul>
                </div>

                {/* CTA */}
                <div>
                  <div className="text-sm text-white/50 tracking-widest">REQUEST</div>
                  <p className="mt-4 text-white/60 text-sm">
                    Send car, dates and delivery location for fastest confirmation.
                  </p>

                  <a
                    href="/contact"
                    className="mt-6 inline-block rounded-2xl bg-white text-black font-semibold px-6 py-3 hover:bg-white/90 transition"
                  >
                    Request availability
                  </a>
                </div>
              </div>

              {/* Bottom */}
              <div className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/50 gap-4">
                <div>
                  © {new Date().getFullYear()} AVP Supercars. All rights reserved.
                </div>

                <div className="flex gap-6">
                  <a href="/privacy" className="hover:text-white transition">Privacy</a>
                  <a href="/faq" className="hover:text-white transition">FAQ</a>
                </div>
              </div>
            </div>
          </footer>
        </body>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
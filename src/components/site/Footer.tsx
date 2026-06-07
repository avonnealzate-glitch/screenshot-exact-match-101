import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const links = [
  { to: "/legal", label: "Legal" },
  { to: "/cdl", label: "CDL Schools AI" },
  { to: "/healthcare", label: "Health Careers Schools" },
  { to: "/realtors", label: "Real Estate" },
  { to: "/home-services", label: "Home Services" },
  { to: "/geo", label: "AI Search Visibility" },
  { to: "/about", label: "About" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-navy-deep">
      <div className="mx-auto max-w-[1400px] px-5 py-14">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="font-display text-2xl font-semibold text-gold">Get Day AI</div>
            <p className="mt-2 font-display italic text-gold-soft">AI That Fits. Businesses That Scale.</p>
            <p className="mt-4 max-w-xl text-sm text-foreground/70">
              Custom AI Revenue Generating Systems built for every business — any size, any industry, any market.
              Designed and deployed by Dr. Nova Day, EdD.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-white">
              <a href="mailto:hello@getdayai.com" className="hover:text-gold">hello@getdayai.com</a>
              <span className="opacity-40">·</span>
              <a href="tel:+14702292626" className="hover:text-gold">+1 (470) 229-2626</a>
            </div>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <div className="flex flex-wrap gap-x-4 gap-y-2 md:justify-end">
              {links.map((l) => (
                <Link key={l.to} to={l.to} className="text-sm text-white hover:text-gold">{l.label}</Link>
              ))}
            </div>
            <div className="mt-2 flex gap-3 text-white">
              <a href="#" aria-label="LinkedIn" className="hover:text-gold"><Linkedin size={18} /></a>
              <a href="#" aria-label="Facebook" className="hover:text-gold"><Facebook size={18} /></a>
              <a href="#" aria-label="Instagram" className="hover:text-gold"><Instagram size={18} /></a>
              <a href="#" aria-label="TikTok" className="hover:text-gold font-semibold text-sm">TT</a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-border/40 pt-5 text-center text-xs text-white/70">
          © 2026 Get Day AI · Custom AI Revenue Generating Systems · Dr. Nova Day LLC
        </div>
      </div>
    </footer>
  );
}

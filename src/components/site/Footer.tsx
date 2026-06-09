import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const industries = [
  { to: "/legal", label: "Legal" },
  { to: "/cdl", label: "Education" },
  { to: "/realtors", label: "Real Estate" },
  { to: "/home-services", label: "Home Services" },
  { to: "/geo", label: "AI" },
] as const;

const services = [
  "AI Agents",
  "AI Search Visibility",
  "Workflow Automation",
  "AI Prospecting & Client Building",
  "Business Plan Writing",
  "Revenue Projections & Forecasting",
  "Acquisitions Consulting",
  "Speech Writing + Speaker Tools",
  "Grant Writing (AI-Assisted)",
];

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-navy-deep">
      <div className="mx-auto max-w-[1400px] px-5 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="font-display text-2xl font-semibold text-gold">Get Day AI</div>
            <p className="mt-2 font-display italic text-gold-soft">AI That Fits. AI For You.</p>
            <p className="mt-4 max-w-xl text-sm text-foreground/70">
              Custom AI Revenue Generating Systems built for every business — any size, any industry, any market.
              Designed and deployed by Dr. Nova Day, EdD.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white">
              <a href="mailto:hello@getdayai.com" className="hover:text-gold">hello@getdayai.com</a>
              <span className="opacity-40">·</span>
              <a href="tel:+14702292626" className="hover:text-gold">+1 (470) 229-2626</a>
            </div>
            <div className="mt-5 flex gap-3 text-white">
              <a href="#" aria-label="LinkedIn" className="hover:text-gold"><Linkedin size={18} /></a>
              <a href="#" aria-label="Facebook" className="hover:text-gold"><Facebook size={18} /></a>
              <a href="#" aria-label="Instagram" className="hover:text-gold"><Instagram size={18} /></a>
              <a href="#" aria-label="TikTok" className="hover:text-gold font-semibold text-sm">TT</a>
            </div>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Services</div>
            <ul className="mt-4 space-y-2">
              {services.map((s) => (
                <li key={s} className="text-sm text-white/85">{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Industries</div>
            <ul className="mt-4 space-y-2">
              {industries.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-white/85 hover:text-gold">{l.label}</Link>
                </li>
              ))}
              <li>
                <Link to="/about" className="text-sm text-white/85 hover:text-gold">About</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border/40 pt-5 text-center text-xs text-white/70">
          © 2026 Get Day AI · Custom AI Revenue Generating Systems · Dr. Nova Day LLC
        </div>
      </div>
    </footer>
  );
}

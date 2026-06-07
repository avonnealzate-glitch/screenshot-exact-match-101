import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/legal", label: "Legal" },
  { to: "/cdl", label: "CDL Schools AI" },
  { to: "/healthcare", label: "Health Careers Schools" },
  { to: "/realtors", label: "Real Estate" },
  { to: "/home-services", label: "Home Services" },
  { to: "/geo", label: "AI Search Visibility" },
  { to: "/about", label: "About" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/40 bg-navy-deep/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 px-5">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight text-gold">
          <span className="grid h-8 w-8 place-items-center rounded-full border border-gold/60 text-gold">G</span>
          Get Day AI
        </Link>
        <nav className="hidden items-center gap-5 text-[13px] font-medium text-foreground/80 xl:flex">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="whitespace-nowrap transition-colors hover:text-gold">
              {l.label}
            </Link>
          ))}
          <a href="https://get-day-ai-shop.myshopify.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-gold">
            Shop
          </a>
        </nav>
        <a href="#contact" className="hidden rounded-full bg-gold px-5 py-2 text-[13px] font-semibold text-navy-deep transition-all hover:bg-gold-bright xl:inline-block">
          Book a Demo
        </a>
        <button onClick={() => setOpen(!open)} className="xl:hidden text-gold" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border/40 bg-navy-deep xl:hidden">
          <div className="mx-auto flex max-w-[1400px] flex-col gap-1 px-5 py-4">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="py-2 text-sm text-foreground/85">
                {l.label}
              </Link>
            ))}
            <a href="https://get-day-ai-shop.myshopify.com" target="_blank" rel="noreferrer" className="py-2 text-sm text-foreground/85">Shop</a>
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-gold px-5 py-2 text-center text-sm font-semibold text-navy-deep">
              Book a Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

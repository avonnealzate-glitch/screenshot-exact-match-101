import { Phone } from "lucide-react";
import { SiteLayout } from "./SiteLayout";

interface Props {
  agent: string;
  vertical: string;
  hearLabel: string;
  phoneDisplay: string;
  phoneHref: string;
  description: string;
  bullets: string[];
}

export function VerticalPage({ agent, vertical, hearLabel, phoneDisplay, phoneHref, description, bullets }: Props) {
  const cta = (
    <a href={phoneHref} className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 text-sm font-semibold text-navy-deep transition-all hover:bg-gold-bright">
      <Phone size={16} /> {hearLabel} — {phoneDisplay}
    </a>
  );
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-br from-navy-deep via-navy to-navy-deep">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />
        <div className="mx-auto max-w-[1100px] px-5 py-24 text-center">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-gold">{vertical}</p>
          <h1 className="mx-auto mt-4 max-w-3xl font-display text-5xl font-semibold leading-[1.05] md:text-6xl">
            Meet <span className="text-gold">{agent}</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-foreground/80">{description}</p>
          <div className="mt-8">{cta}</div>
        </div>
      </section>

      {/* Bullets */}
      <section className="mx-auto max-w-[1100px] px-5 py-20">
        <h2 className="text-center font-display text-4xl font-semibold">What {agent} Does For You</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {bullets.map((b, i) => (
            <div key={i} className="rounded-2xl border border-border/60 bg-card p-6">
              <div className="font-display text-2xl text-gold">0{i + 1}</div>
              <p className="mt-2 text-foreground/85">{b}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">{cta}</div>
      </section>

      {/* Closing CTA */}
      <section className="border-y border-gold/30 bg-gold/10">
        <div className="mx-auto max-w-[1000px] px-5 py-16 text-center">
          <h2 className="font-display text-4xl font-semibold">Hear {agent} Live</h2>
          <p className="mt-3 text-foreground/75">Call right now and experience exactly what your customers will hear.</p>
          <div className="mt-6">{cta}</div>
        </div>
      </section>
    </SiteLayout>
  );
}

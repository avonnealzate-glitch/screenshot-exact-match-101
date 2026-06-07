import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Check } from "lucide-react";
import { SiteLayout } from "../components/site/SiteLayout";

export const Route = createFileRoute("/geo")({
  head: () => ({
    meta: [
      { title: "AI Search Visibility — Get Day AI" },
      { name: "description", content: "45% of customers now use AI to find businesses. Get found and recommended on ChatGPT and other AI apps." },
    ],
  }),
  component: GeoPage,
});

const tiers = [
  { name: "Starter", price: "$1,500", popular: false, features: ["2 platforms/mo", "Monthly report", "Listing cleanup", "2 calls/mo"] },
  { name: "Pro", price: "$2,500", popular: true, features: ["4 platforms/mo", "2 content pieces/mo", "Competitor strategy", "Bi-weekly report", "2 calls/mo"] },
  { name: "Authority", price: "$3,500", popular: false, features: ["6 platforms/mo", "4 content pieces/mo", "Full displacement", "Weekly report", "2 calls/mo"] },
];

function GeoPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <section className="border-b border-border/40 bg-gradient-to-br from-navy-deep via-navy to-navy-deep">
        <div className="mx-auto max-w-[1100px] px-5 py-24 text-center">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-gold">AI Search Visibility</p>
          <h1 className="mx-auto mt-4 max-w-4xl font-display text-5xl font-semibold leading-[1.05] md:text-6xl">
            45% of Your Customers Are Now Asking <span className="text-gold">AI</span> Who to Call.<br />Is Your Business the Answer?
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-foreground/80">
            Get Day AI improves your chances of being found and recommended on ChatGPT and other AI apps — before your competitors even know they should be there.
          </p>
          <a href="tel:+14707779005" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 text-sm font-semibold text-navy-deep transition-all hover:bg-gold-bright">
            <Phone size={16} /> Call Gia to Schedule Your Free Audit — +1 (470) 777-9005
          </a>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <p className="text-lg leading-relaxed text-foreground/80">
            When someone in your city asks AI for the best lawyer, accountant, or consultant — AI gives one answer. Not a list. <strong className="text-gold">One name.</strong> If that name isn't yours, that customer never calls. They don't even know you exist. And you never know you lost them.
          </p>
        </div>
      </section>

      <section className="border-y border-border/40 bg-navy py-20">
        <div className="mx-auto max-w-[1200px] px-5">
          <h2 className="text-center font-display text-5xl font-semibold">Plans</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {tiers.map((t) => (
              <div key={t.name} className={`relative rounded-2xl border p-8 ${t.popular ? "border-gold bg-gold/5 shadow-[0_20px_60px_-20px_rgba(201,168,76,0.4)]" : "border-border/60 bg-card"}`}>
                {t.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-xs font-bold text-navy-deep">MOST POPULAR</div>}
                <h3 className="font-display text-2xl font-semibold">{t.name}</h3>
                <div className="mt-3"><span className="font-display text-5xl font-bold text-gold">{t.price}</span><span className="text-sm text-foreground/60">/month</span></div>
                <ul className="mt-6 space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground/85"><Check size={16} className="mt-0.5 text-gold" />{f}</li>
                  ))}
                </ul>
                <a href="tel:+14707779005" className="mt-7 block rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-navy-deep transition-all hover:bg-gold-bright">Get Started</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-xl px-5">
          <h2 className="text-center font-display text-4xl font-semibold">Get My Free Audit</h2>
          {sent ? (
            <div className="mt-8 rounded-2xl border border-gold/40 bg-gold/10 p-8 text-center">
              <p className="text-lg">Thank you! Gia will reach out within 24 hours.</p>
              <p className="mt-2 text-foreground/75">You can also call directly — <a href="tel:+14707779005" className="text-gold underline">+1 (470) 777-9005</a></p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="mt-8 space-y-4 rounded-2xl border border-border/60 bg-card p-6">
              {[
                { n: "firstName", l: "First Name" },
                { n: "businessName", l: "Business Name" },
                { n: "email", l: "Email Address", type: "email" },
                { n: "phone", l: "Phone Number", type: "tel" },
              ].map((f) => (
                <div key={f.n}>
                  <label className="block text-xs font-medium text-foreground/70">{f.l}</label>
                  <input required type={f.type ?? "text"} name={f.n} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-gold" />
                </div>
              ))}
              <button type="submit" className="mt-2 w-full rounded-full bg-gold px-5 py-3 text-sm font-semibold text-navy-deep transition-all hover:bg-gold-bright">Get My Free Audit</button>
            </form>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}

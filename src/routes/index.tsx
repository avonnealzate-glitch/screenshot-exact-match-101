import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Search, Headset, Bot, BarChart3, Mic, Users, ArrowRight, Star } from "lucide-react";
import heroImg from "../assets/hero.jpg";

import novaImg from "../assets/nova-day.jpg";
import { SiteLayout } from "../components/site/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Get Day AI | Automate for Ease, Efficiency & More Revenue" },
      { name: "description", content: "AI That Fits. Businesses That Scale. Custom AI agents that answer every call, qualify leads, and book appointments 24/7." },
      { property: "og:title", content: "Get Day AI — AI That Fits. Businesses That Scale." },
      { property: "og:description", content: "Custom AI Revenue Generating Systems built for every business — designed by Dr. Nova Day, EdD." },
    ],
  }),
  component: Index,
});

const pillars = [
  { n: "1", label: "AI RECEPTIONISTS", icon: Headset, copy: "Answer. Qualify. Book. 24/7." },
  { n: "2", label: "AI AGENTS & AUTOMATION", icon: Bot, copy: "Automate the work. Scale your impact." },
  { n: "3", label: "BUSINESS STRATEGY & WRITING", icon: BarChart3, copy: "Plan. Forecast. Grow. With confidence." },
  { n: "4", label: "COMMUNICATION & INFLUENCE", icon: Mic, copy: "Words that move people. Strategies that win." },
  { n: "5", label: "OPERATIONS & PEOPLE", icon: Users, copy: "Build stronger systems. Develop stronger teams." },
  { n: "6", label: "AI SEARCH VISIBILITY", icon: Search, copy: "Get found on ChatGPT and other AI apps." },
];


const stats = [
  { v: "<60s", l: "Answer every call in under 60 seconds" },
  { v: "24/7", l: "Never closed. Never misses a call." },
  { v: "3×", l: "More appointments booked" },
  { v: "0", l: "Leads lost to voicemail" },
];

const services = [
  { name: "Legal AI", agent: "Casey", copy: "Casey answers every call to your firm — after hours, weekends, during court. Qualifies the case, books the consultation, makes sure no client goes to your competitor because no one picked up.", to: "/legal" as const },
  { name: "CDL & Career Schools AI", agent: "Lane", copy: "Lane answers every prospective student inquiry instantly. Qualifies program interest, schedule fit, and start date — and books their admissions appointment before they call another school.", to: "/cdl" as const },
  { name: "Health Careers Schools AI", agent: "Riley", copy: "Riley answers every inquiry for your healthcare careers school 24/7. Qualifies students by program, availability, and readiness — and fills your enrollment calendar around the clock.", to: "/healthcare" as const },
  { name: "Real Estate AI", agent: "Haven", copy: "Haven answers buyer and seller inquiries the moment they call. Qualifies by timeline, budget, and property type — and books showings directly into your agent's calendar.", to: "/realtors" as const },
  { name: "Home Services AI", agent: "Thomas", copy: "Thomas answers every service call — day, night, and weekends. Qualifies by service needed, location, and urgency — and books the appointment before they call your competitor.", to: "/home-services" as const },
  { name: "AI Search Visibility", agent: "Gia", copy: "45% of customers now use AI to find businesses like yours. Could they find you? Get Day AI improves your chances of being found and recommended on ChatGPT and other AI apps — before your competitors even know they should be there.", to: "/geo" as const },
];

const servicesInclude = [
  ["AI Agents", "Purpose-built AI agents designed around your specific workflows — intake, follow-up, routing, reporting — so your team eliminates the manual work that's costing them hours every week."],
  ["Workflow Automation", "We identify the tasks your team does over and over and build AI to do them instead — faster, consistently, and without sick days. Scoped and built custom for your business."],
  ["AI Prospecting & Client Building", "An automated prospecting system that identifies, reaches, and nurtures potential clients on a defined schedule — so your pipeline grows while your team works the deals already in motion."],
  ["Business Plan Writing", "A professionally structured business plan built around your actual numbers, market, and goals — ready for lenders, investors, or strategic decisions."],
  ["Revenue Projections & Forecasting", "Data-grounded financial projections that show where your business is going and what it takes to get there — built for people who make real decisions with real money."],
  ["Acquisitions Consulting", "Strategic guidance for business buyers and sellers — valuation, due diligence support, and deal structuring — so you don't leave money on the table."],
  ["Speech Writing + Speaker Tools", "High-impact speeches and AI-powered speaker tools built for executives, professionals, and educators — written for your voice, your audience, and your outcome."],
  ["Grant Writing (AI-Assisted)", "AI-accelerated grant writing that finds the right funding opportunities and produces competitive applications — without the six-week turnaround."],
  ["AI Search Visibility", "45% of customers now use AI to find businesses like yours. Could they find you? Get Day AI improves your chances of being found and recommended on ChatGPT and other AI apps — before your competitors even know they should be there."],
];

const steps = [
  "You get a dedicated AI agent trained on your business",
  "The agent answers every inbound call within 60 seconds",
  "Callers are qualified — service needed, urgency, new or existing",
  "Appointments are booked directly into your calendar",
  "You get an instant summary of every call via text and email",
];

const testimonials = [
  { quote: "We stopped losing after-hours calls overnight. Casey paid for itself in the first week.", name: "Marcus T.", role: "Managing Partner, Personal Injury Firm" },
  { quote: "Lane is booking admissions appointments while I sleep. Our enrollment is up 37%.", name: "Dee R.", role: "Director, CDL Academy" },
  { quote: "Dr. Day didn't sell us tech. She built us a revenue system.", name: "Priya N.", role: "Founder, Health Career Institute" },
  { quote: "Haven qualifies every lead before it hits my agents. They only talk to buyers ready to move.", name: "Jordan K.", role: "Broker / Owner" },
  { quote: "Thomas answers when I can't. Same-day bookings doubled.", name: "Carlos M.", role: "HVAC Owner" },
  { quote: "Get Day AI is the only consultant who promised revenue and delivered it.", name: "Alicia W.", role: "CEO, Professional Services" },
];

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/40">
        <img src={heroImg} alt="Dr. Nova Day" width={1920} height={1024} className="absolute inset-0 h-full w-full object-cover object-right" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-transparent" />
        <div className="relative mx-auto grid max-w-[1400px] gap-10 px-5 py-20 md:grid-cols-[1.4fr_1fr] md:py-28">
          <div>
            <p className="font-display text-sm uppercase tracking-[0.3em] text-gold">Custom AI Revenue Generating Systems</p>
            <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] md:text-7xl">
              AI That <span className="text-gold">Fits.</span>
              <br />Businesses That <span className="text-gold">Scale.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-foreground/85">
              AI Created & Customized for You. AI That Fits. AI Your Way.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:+14702292626" className="inline-flex items-center gap-2 rounded-full border-2 border-gold bg-transparent px-6 py-3 text-sm font-semibold text-gold transition-all hover:bg-gold hover:text-navy-deep">
                <Phone size={16} /> Hear Ava Work — +1 (470) 229-2626
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy-deep transition-all hover:bg-gold-bright">
                Book a Demo
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3 self-end">
            {[
              { label: "Legal AI", to: "/legal" as const },
              { label: "CDL Schools AI", to: "/cdl" as const },
              { label: "Health Careers AI", to: "/healthcare" as const },
              { label: "Real Estate AI", to: "/realtors" as const },
              { label: "Home Services AI", to: "/home-services" as const },
              { label: "AI Search Visibility", to: "/geo" as const },
            ].map((b) => (
              <Link key={b.to} to={b.to} className="group flex items-center justify-between rounded-full border border-gold/40 bg-navy/50 px-5 py-3 text-sm font-medium text-foreground backdrop-blur transition-all hover:border-gold hover:bg-gold/10">
                {b.label}
                <ArrowRight size={16} className="text-gold transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>

        {/* Gold pillar bar */}
        <div className="relative border-t border-gold/40 bg-gold text-navy-deep">
          <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-4 px-5 py-6 md:grid-cols-3 lg:grid-cols-6">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.n} className="flex items-start gap-3">
                  <div className="font-display text-2xl font-bold leading-none">{p.n}</div>
                  <div>
                    <div className="flex items-center gap-2 text-[11px] font-bold tracking-widest"><Icon size={14} />{p.label}</div>
                    <div className="mt-1 text-[12px] leading-snug opacity-90">{p.copy}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROOF BAR */}
      <section className="bg-gold py-10 text-navy-deep">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-6 px-5 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.v} className="text-center">
              <div className="font-display text-5xl font-bold">{s.v}</div>
              <div className="mt-1 text-sm font-medium opacity-85">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 6 PILLARS */}
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-5">
          <h2 className="text-center font-display text-5xl font-semibold">The 6 Pillars of Get Day AI</h2>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.n} className="flex items-start gap-4 rounded-2xl border border-gold/30 bg-gold/10 p-6">
                  <div className="font-display text-4xl font-bold leading-none text-gold">{p.n}</div>
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-gold"><Icon size={16} />{p.label}</div>
                    <div className="mt-2 text-sm text-foreground/85">{p.copy}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICE CARDS — AI RECEPTIONISTS */}
      <section id="agents" className="border-t border-border/40 bg-navy py-24">
        <div className="mx-auto max-w-[1400px] px-5">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-display text-sm uppercase tracking-[0.3em] text-gold">Specializing in AI Receptionists for Your Business</p>
            <h2 className="mt-3 font-display text-5xl font-semibold">Pick Your Agent</h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.name} className="group flex flex-col rounded-2xl border border-border/60 bg-card p-7 transition-all hover:border-gold/60 hover:shadow-[0_20px_40px_-20px_rgba(201,168,76,0.4)]">
                <div className="text-xs font-bold uppercase tracking-widest text-gold">{s.agent}</div>
                <h3 className="mt-2 font-display text-2xl font-semibold">{s.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/75">{s.copy}</p>
                <Link to={s.to} className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-gold px-5 py-2 text-sm font-semibold text-navy-deep transition-all group-hover:bg-gold-bright">
                  Book a Demo <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES INCLUDE */}
      <section className="border-y border-border/40 bg-navy py-24">
        <div className="mx-auto max-w-[1400px] px-5">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-5xl font-semibold">Services Include</h2>
            <p className="mt-4 text-foreground/75">
              Every engagement is custom. Every system is built 1-on-1 for your business — designed to generate revenue, eliminate waste, and scale what's working.
            </p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {servicesInclude.map(([title, copy]) => (
              <div key={title} className="rounded-xl border border-border/60 bg-card/60 p-6">
                <div className="text-[10px] font-bold tracking-widest text-gold">CUSTOM · 1-ON-1</div>
                <h3 className="mt-3 font-display text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">{copy}</p>
                <a href="#contact" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold hover:text-gold-bright">
                  Get Started <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24">
        <div className="mx-auto max-w-[1100px] px-5">
          <h2 className="text-center font-display text-5xl font-semibold">How It Works</h2>
          <ol className="mt-14 space-y-4">
            {steps.map((s, i) => (
              <li key={i} className="flex gap-6 rounded-2xl border border-border/60 bg-card p-6">
                <div className="font-display text-5xl font-bold leading-none text-gold">{i + 1}</div>
                <p className="self-center text-lg text-foreground/85">{s}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ABOUT */}
      <section className="border-y border-border/40 bg-navy py-24">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-5 md:grid-cols-[1fr_1.3fr] md:items-center">
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-gold/30 to-transparent blur-2xl" />
            <img src={novaImg} alt="Dr. Nova Day, EdD" width={1024} height={1536} loading="lazy" className="relative rounded-2xl border border-gold/30 object-cover" />
          </div>
          <div>
            <p className="font-display text-sm uppercase tracking-[0.3em] text-gold">About</p>
            <h2 className="mt-3 font-display text-5xl font-semibold">Dr. Nova Day, EdD</h2>
            <p className="mt-3 text-foreground/80">Certified AI Consultant · 25 Years in Education · Author · Keynote Speaker</p>
            <p className="mt-6 leading-relaxed text-foreground/80">
              Get Day AI was built on a simple promise: businesses shouldn't have to choose between doing the work and growing the business. Every system deployed by Get Day AI is designed to generate revenue from day one. Dr. Nova Day, EdD brings 25 years of education expertise — building systems that fit your business and scale with it.
            </p>
            <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-bright">
              Get to Know Dr. Day <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-5">
          <h2 className="text-center font-display text-5xl font-semibold">What Clients Are Saying</h2>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-border/60 bg-card p-7">
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="mt-4 leading-relaxed text-foreground/85">"{t.quote}"</p>
                <div className="mt-5 border-t border-border/40 pt-4">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-foreground/60">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HEAR IT FOR YOURSELF */}
      <section id="contact" className="bg-gold py-24 text-navy-deep">
        <div className="mx-auto max-w-[1000px] px-5 text-center">
          <h2 className="font-display text-5xl font-semibold md:text-6xl">Hear It For Yourself</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg opacity-85">
            Call Ava right now and hear exactly what your customers will hear — a live AI that answers, qualifies, and books appointments 24/7.
          </p>
          <a href="tel:+14702292626" className="mt-8 inline-flex items-center gap-3 rounded-full bg-navy-deep px-8 py-4 text-lg font-semibold text-gold transition-transform hover:scale-105">
            <Phone size={20} /> Call Ava Now
          </a>
          <div className="mt-6 font-display text-5xl font-bold">(470) 229-2626</div>
        </div>
      </section>
    </SiteLayout>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import novaImg from "../assets/nova-day.jpg";
import { SiteLayout } from "../components/site/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dr. Nova Day, EdD — Get Day AI" },
      { name: "description", content: "Founder of Get Day AI. 25 years in education. Custom AI Revenue Generating Systems for businesses that scale." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="py-20">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-5 md:grid-cols-[1fr_1.3fr] md:items-start">
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-gold/30 to-transparent blur-2xl" />
            <img src={novaImg} alt="Dr. Nova Day" width={1024} height={1536} loading="lazy" className="relative rounded-2xl border border-gold/30 object-cover" />
          </div>
          <div>
            <p className="font-display text-sm uppercase tracking-[0.3em] text-gold">About</p>
            <h1 className="mt-3 font-display text-5xl font-semibold md:text-6xl">Dr. Nova Day, EdD</h1>
            <p className="mt-3 text-foreground/80">Founder · Certified AI Consultant · 25 Years in Education</p>
            <div className="mt-6 space-y-4 leading-relaxed text-foreground/85">
              <p>
                Dr. Nova Day, EdD is the founder of Get Day AI and an AI integration consultant. She builds custom AI Revenue Generating Systems for law firms, career schools, healthcare practices, and professional services businesses.
              </p>
              <p>
                With 25 years in education and a doctorate in educational leadership, Dr. Day combines deep business strategy with practical AI deployment — so businesses stop losing revenue to missed calls, slow follow-up, and AI search invisibility.
              </p>
            </div>
            <div className="mt-8 rounded-2xl border border-border/60 bg-card p-5 text-sm">
              <div className="font-semibold text-gold">Contact</div>
              <div className="mt-2 space-y-1">
                <a href="mailto:hello@getdayai.com" className="block hover:text-gold">hello@getdayai.com</a>
                <a href="tel:+14702292626" className="block hover:text-gold">+1 (470) 229-2626</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

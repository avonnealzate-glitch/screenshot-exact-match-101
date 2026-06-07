import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/free")({
  head: () => ({
    meta: [
      { title: "5 AI Services You Can Charge For This Weekend" },
      { name: "description", content: "Free instant download. 5 AI-powered services you can start offering this weekend." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: FreePage,
});

function FreePage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <main className="flex-1">
        <div className="mx-auto max-w-2xl px-5 py-24">
          <h1 className="font-display text-5xl font-semibold leading-tight md:text-6xl">
            5 AI Services You Can Charge For <span className="text-gold">This Weekend</span>
          </h1>
          <p className="mt-4 text-lg text-foreground/80">Free. Instant download. No fluff.</p>
          <p className="mt-6 text-foreground/75">
            This free guide breaks down 5 AI-powered services you can start offering this weekend. Real services. Real rates. No experience required.
          </p>

          {sent ? (
            <div className="mt-10 rounded-2xl border border-gold/40 bg-gold/10 p-6">
              <p className="font-semibold text-gold">Check your inbox.</p>
              <p className="mt-1 text-sm text-foreground/80">Your guide is on its way.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="mt-10 space-y-4 rounded-2xl border border-border/60 bg-card p-6">
              <div>
                <label className="block text-xs font-medium text-foreground/70">First Name</label>
                <input required className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-gold" />
              </div>
              <div>
                <label className="block text-xs font-medium text-foreground/70">Email Address</label>
                <input required type="email" className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-gold" />
              </div>
              <button className="mt-2 w-full rounded-full bg-gold px-5 py-3 text-sm font-semibold text-navy-deep transition-all hover:bg-gold-bright">
                Send Me the Free Guide
              </button>
            </form>
          )}
        </div>
      </main>
      <footer className="border-t border-border/40 py-6 text-center text-xs text-white/70">
        © 2026 Get Day AI · getdayai.com
      </footer>
    </div>
  );
}

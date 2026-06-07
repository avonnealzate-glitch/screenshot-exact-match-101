import { createFileRoute } from "@tanstack/react-router";
import { VerticalPage } from "../components/site/VerticalPage";

export const Route = createFileRoute("/cdl")({
  head: () => ({ meta: [{ title: "CDL Schools AI — Lane | Get Day AI" }, { name: "description", content: "Lane answers every prospective student inquiry instantly and books the admissions appointment." }] }),
  component: () => (
    <VerticalPage
      agent="Lane"
      vertical="CDL & Career Schools AI"
      hearLabel="Hear Lane Work"
      phoneDisplay="+1 (470) 777-7224"
      phoneHref="tel:+14707777224"
      description="Lane answers every prospective student inquiry instantly. Qualifies program interest, schedule fit, and start date — and books the admissions appointment before they call another school."
      bullets={[
        "Captures every inquiry from web, ad, and phone — never a missed lead.",
        "Qualifies program, financing path, and earliest start date.",
        "Books admissions calls and confirms attendance with reminders.",
        "Reports trends and source attribution to your enrollment team.",
      ]}
    />
  ),
});

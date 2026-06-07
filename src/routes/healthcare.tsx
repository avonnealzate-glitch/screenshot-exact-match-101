import { createFileRoute } from "@tanstack/react-router";
import { VerticalPage } from "../components/site/VerticalPage";

export const Route = createFileRoute("/healthcare")({
  head: () => ({ meta: [{ title: "Health Careers Schools AI — Riley | Get Day AI" }, { name: "description", content: "Riley answers every inquiry for your healthcare careers school 24/7 and fills your enrollment calendar." }] }),
  component: () => (
    <VerticalPage
      agent="Riley"
      vertical="Health Careers Schools AI"
      hearLabel="Hear Riley Work"
      phoneDisplay="+1 (470) 243-2433"
      phoneHref="tel:+14702432433"
      description="Riley answers every inquiry for your healthcare careers school 24/7. Qualifies students by program, availability, and readiness — and fills your enrollment calendar around the clock."
      bullets={[
        "Handles inquiries for CNA, MA, phlebotomy, and allied health programs.",
        "Qualifies prerequisite status and program readiness.",
        "Books admissions appointments directly into your calendar.",
        "Routes urgent enrollment questions to a human when needed.",
      ]}
    />
  ),
});

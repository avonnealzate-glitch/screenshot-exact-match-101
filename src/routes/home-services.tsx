import { createFileRoute } from "@tanstack/react-router";
import { VerticalPage } from "../components/site/VerticalPage";

export const Route = createFileRoute("/home-services")({
  head: () => ({ meta: [{ title: "Home Services AI — Thomas | Get Day AI" }, { name: "description", content: "Thomas answers every service call — day, night, and weekends — and books the appointment first." }] }),
  component: () => (
    <VerticalPage
      agent="Thomas"
      vertical="Home Services AI"
      hearLabel="Hear Thomas Work"
      phoneDisplay="+1 (470) 771-6555"
      phoneHref="tel:+14707716555"
      description="Thomas answers every service call — day, night, and weekends. Qualifies by service needed, location, and urgency — and books the appointment before they call your competitor."
      bullets={[
        "Handles HVAC, plumbing, electrical, and general service intake.",
        "Qualifies urgency: emergency, same-day, or scheduled.",
        "Books to the next available technician by service area.",
        "Captures every after-hours call you were losing to voicemail.",
      ]}
    />
  ),
});

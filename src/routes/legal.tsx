import { createFileRoute } from "@tanstack/react-router";
import { VerticalPage } from "../components/site/VerticalPage";

export const Route = createFileRoute("/legal")({
  head: () => ({ meta: [{ title: "Legal AI — Casey | Get Day AI" }, { name: "description", content: "Casey answers every call to your firm — 24/7. Qualifies the case and books the consultation." }] }),
  component: () => (
    <VerticalPage
      agent="Casey"
      vertical="Legal AI"
      hearLabel="Hear Casey Work"
      phoneDisplay="+1 (470) 570-7050"
      phoneHref="tel:+14705707050"
      description="Casey answers every call to your firm — after hours, weekends, during court. Qualifies the case, books the consultation, and makes sure no client goes to your competitor because no one picked up."
      bullets={[
        "Answers every inbound call in under 60 seconds — even when court is in session.",
        "Qualifies case type, jurisdiction, urgency, and conflict checks before booking.",
        "Books the consultation directly into your firm's calendar.",
        "Sends a clean call summary by text and email to the attorney on intake.",
      ]}
    />
  ),
});

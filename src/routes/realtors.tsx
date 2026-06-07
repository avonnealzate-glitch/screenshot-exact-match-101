import { createFileRoute } from "@tanstack/react-router";
import { VerticalPage } from "../components/site/VerticalPage";

export const Route = createFileRoute("/realtors")({
  head: () => ({ meta: [{ title: "Real Estate AI — Haven | Get Day AI" }, { name: "description", content: "Haven answers buyer and seller inquiries instantly and books showings to your agent's calendar." }] }),
  component: () => (
    <VerticalPage
      agent="Haven"
      vertical="Real Estate AI"
      hearLabel="Hear Haven Work"
      phoneDisplay="+1 (470) 665-5646"
      phoneHref="tel:+14706655646"
      description="Haven answers buyer and seller inquiries the moment they call. Qualifies by timeline, budget, and property type — and books showings directly into your agent's calendar."
      bullets={[
        "Responds instantly to sign calls, web leads, and Zillow inquiries.",
        "Qualifies buyer timeline, budget, and pre-approval status.",
        "Books showings to the right agent based on territory and availability.",
        "Sends instant lead summaries to the assigned agent.",
      ]}
    />
  ),
});

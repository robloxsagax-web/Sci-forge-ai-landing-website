import { createFileRoute } from "@tanstack/react-router";
import { PricingPage } from "@/components/sciforge/Pricing";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — SciForge AI" },
      {
        name: "description",
        content:
          "Free Student at $0, Premium Researcher at $10/month, and Institutional custom pricing for classrooms and labs.",
      },
      { property: "og:title", content: "Pricing — SciForge AI" },
      {
        property: "og:description",
        content:
          "Free Student at $0, Premium Researcher at $10/month, and Institutional custom pricing for classrooms and labs.",
      },
    ],
  }),
  component: PricingPage,
});

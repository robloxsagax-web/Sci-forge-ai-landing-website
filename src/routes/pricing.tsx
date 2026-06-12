import { createFileRoute } from "@tanstack/react-router";
import { PricingPage } from "@/components/sciforge/Pricing";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — SciForge AI" },
      {
        name: "description",
        content: "Free Student Core, Rs. 2,500/mo Quantum Engine for researchers, and custom Institutional Grid licensing.",
      },
      { property: "og:title", content: "Pricing — SciForge AI" },
      {
        property: "og:description",
        content: "Three activation tiers calibrated for the student, the researcher, and the institution.",
      },
    ],
  }),
  component: PricingPage,
});
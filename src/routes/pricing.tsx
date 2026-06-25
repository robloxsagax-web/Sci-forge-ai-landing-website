import { createFileRoute } from "@tanstack/react-router";
import { PricingPage } from "@/components/sciforge/Pricing";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing: SciForge AI" },
      {
        name: "description",
        content: "SciForge AI pricing starts with a $0 free account, a $10 monthly research plan, and custom institutional quotes.",
      },
      { property: "og:title", content: "Pricing: SciForge AI" },
      {
        property: "og:description",
        content: "Clear terms for the free account, the $10 monthly plan, and custom institutional licensing.",
      },
    ],
  }),
  component: PricingPage,
});

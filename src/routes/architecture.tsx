import { createFileRoute } from "@tanstack/react-router";
import { ArchitecturePage } from "@/components/sciforge/Architecture";

export const Route = createFileRoute("/architecture")({
  head: () => ({
    meta: [
      { title: "Architecture — SciForge AI" },
      {
        name: "description",
        content:
          "Multi-model hybrid orchestration, 60Hz canvas vector ingestion, and strict academic Elo diagnostics.",
      },
      { property: "og:title", content: "Architecture — SciForge AI" },
      {
        property: "og:description",
        content: "How SciForge fuses Llama 3.3, Gemini Core Pro, and a symbolic solver into one engine.",
      },
    ],
  }),
  component: ArchitecturePage,
});
import { createFileRoute } from "@tanstack/react-router";
import { ComparePage } from "@/components/sciforge/Compare";

export const Route = createFileRoute("/compare")({
  head: () => ({
    meta: [
      { title: "SciForge AI vs ChatGPT for STEM study" },
      {
        name: "description",
        content:
          "Compare SciForge AI with generic chat tools for STEM study, handwritten work, concept maps, quizzes, notes, and research workflows.",
      },
      { property: "og:title", content: "SciForge AI vs ChatGPT for STEM study" },
      {
        property: "og:description",
        content:
          "See how SciForge AI differs from generic chat assistants for structured STEM study and problem solving.",
      },
    ],
  }),
  component: ComparePage,
});

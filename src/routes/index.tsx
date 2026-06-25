import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/sciforge/Landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SciForge AI — The Cognitive Engine for STEM" },
      {
        name: "description",
        content:
          "AI STEM mentor with scribble analysis, research help, adaptive quizzes, exports, and classroom-ready study workflows.",
      },
      { property: "og:title", content: "SciForge AI — The Cognitive Engine for STEM" },
      {
        property: "og:description",
        content:
          "A STEM study workbench for reasoning, scribble analysis, quizzes, notes, and classroom-ready exports.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return <LandingPage />;
}

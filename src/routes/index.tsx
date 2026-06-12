import { createFileRoute } from "@tanstack/react-router";
import SciForgeLanding from "@/components/sciforge/SciForgeLanding";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SciForge AI — The Cognitive Engine for STEM" },
      { name: "description", content: "AI STEM mentor with scribble analysis, quantum research, adaptive quizzes, and a dyslexia-friendly accessibility engine." },
      { property: "og:title", content: "SciForge AI — The Cognitive Engine for STEM" },
      { property: "og:description", content: "ChatGPT + Apple Intelligence + Google Classroom, engineered for STEM mastery." },
    ],
  }),
  component: Index,
});

function Index() {
  return <SciForgeLanding />;
}

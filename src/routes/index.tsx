import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/sciforge/Landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SciForge AI: AI workbench for STEM study" },
      { name: "description", content: "SciForge AI helps students, researchers, and engineers explain STEM concepts, solve problems, generate notes, and build adaptive quizzes." },
      { property: "og:title", content: "SciForge AI: AI workbench for STEM study" },
      { property: "og:description", content: "A plain-language AI workspace for STEM study, research, notes, quizzes, and problem solving." },
    ],
  }),
  component: Index,
});

function Index() {
  return <LandingPage />;
}

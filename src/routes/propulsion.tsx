import { createFileRoute } from "@tanstack/react-router";
import { PropulsionPage } from "@/components/sciforge/Propulsion";

export const Route = createFileRoute("/propulsion")({
  head: () => ({
    meta: [
      { title: "Academic Propulsion — SciForge AI" },
      {
        name: "description",
        content: "Workspaces tailored for students closing the gap and researchers compressing the loop.",
      },
      { property: "og:title", content: "Academic Propulsion — SciForge AI" },
      {
        property: "og:description",
        content: "Two distinct propulsion profiles. One adaptive workbench for STEM mastery.",
      },
    ],
  }),
  component: PropulsionPage,
});
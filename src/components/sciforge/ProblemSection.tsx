import { BookOpenCheck, ListTree, Route } from "lucide-react";
import { SectionHeader, TraceCard } from "./chrome";

const PROBLEMS = [
  {
    icon: Route,
    label: "Multistep problems",
    title: "A problem stops making sense halfway through.",
    body: "One missed step in a derivation, physics setup, or chemistry mechanism can make the rest feel unusable. SciForge keeps the work in a STEM workspace so you can inspect the path, not just the final answer.",
  },
  {
    icon: BookOpenCheck,
    label: "Study notes",
    title: "Notes pile up before they become study material.",
    body: "Lecture fragments, lab observations, and rough outlines need to turn into review notes, quizzes, and maps. SciForge gives those study jobs a place to live together.",
  },
  {
    icon: ListTree,
    label: "Classroom practice",
    title: "Teachers need the next practice step fast.",
    body: "A class may need another explanation, a targeted quiz, or a prerequisite map. SciForge helps turn the same topic into the next useful study artifact.",
  },
] as const;

export function ProblemSection() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          kicker="02 · STUDY BOTTLENECKS"
          title={
            <>
              STEM work gets stuck
              <br />
              in <span className="brand-gradient-text">predictable places</span>.
            </>
          }
          sub="SciForge AI is built for the messy middle between seeing an answer and understanding how to get there."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {PROBLEMS.map((problem) => {
            const Icon = problem.icon;
            return (
              <TraceCard key={problem.title} className="h-full">
                <div className="p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan/15 text-cyan">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="max-w-[9rem] text-right font-mono text-[10px] uppercase leading-snug tracking-[0.2em] text-muted-foreground">
                      {problem.label}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold tracking-tight">
                    {problem.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {problem.body}
                  </p>
                </div>
              </TraceCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

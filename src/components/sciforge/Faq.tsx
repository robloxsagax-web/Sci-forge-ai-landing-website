import { BookOpenCheck, CheckCircle2, PlugZap, School, ShieldCheck } from "lucide-react";
import { SectionHeader, TraceCard } from "./chrome";

const FAQS = [
  {
    icon: ShieldCheck,
    question: "Do you train on student work?",
    answer:
      "No. The terms shown on this site describe Research Vault work as AES-256 sealed, with no training-pipeline ingest.",
  },
  {
    icon: CheckCircle2,
    question: "Can I trust every answer?",
    answer:
      "Use it to show steps, check reasoning, and build practice material. For graded work, lab protocols, or citations, verify the final answer with your teacher, textbook, or source material.",
  },
  {
    icon: PlugZap,
    question: "Does it connect to Google Classroom?",
    answer:
      "The public site does not promise a live classroom sync today. SciForge AI is a STEM workspace for notes, quizzes, maps, and exports, with integrations scoped through institutional pilots.",
  },
  {
    icon: School,
    question: "Will it fit a classroom or lab?",
    answer:
      "Yes, for guided practice, concept review, research notes, and problem-solving support. Teams that need shared access, admin controls, or policy review should start with institutional licensing.",
  },
  {
    icon: BookOpenCheck,
    question: "What makes it different from a chat box?",
    answer:
      "The workspace is organized around STEM jobs: handwritten work, symbolic reasoning, quizzes, concept maps, notes, and research portfolios. Students start from the task, not a blank chat prompt.",
  },
] as const;

export function Faq() {
  return (
    <section id="faq" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          kicker="04 · FIELD QUESTIONS"
          title={
            <>
              Clear answers before
              <br />
              <span className="brand-gradient-text">a buyer has to ask.</span>
            </>
          }
          sub="The short version on privacy, answer quality, integrations, and classroom fit."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {FAQS.map((item) => {
            const Icon = item.icon;
            return (
              <TraceCard key={item.question} className="h-full">
                <div className="flex h-full gap-4 p-5">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan/15 text-cyan">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold tracking-tight">
                      {item.question}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </TraceCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Brain,
  Check,
  FileText,
  MessageSquare,
  Network,
  PenTool,
  ShieldCheck,
  X,
} from "lucide-react";
import { SectionHeader, TraceCard } from "./chrome";

const COMPARISON_ROWS = [
  {
    need: "Starting point",
    sciforge: "Choose a STEM workspace: solve, sketch, map, quiz, or document.",
    generic: "Start in a blank chat and decide the workflow yourself.",
  },
  {
    need: "Study structure",
    sciforge: "Turns questions into notes, quizzes, concept maps, and research portfolios.",
    generic: "Can draft study material, but you have to prompt for each format.",
  },
  {
    need: "Math and diagrams",
    sciforge: "Includes a Scribble Lab for equations, sketches, and engineering diagrams.",
    generic: "Mostly text-first unless you add separate tools or uploads.",
  },
  {
    need: "Problem solving",
    sciforge: "Blends model reasoning with symbolic math and STEM-specific modules.",
    generic: "Broad reasoning that works across many topics, not one STEM workflow.",
  },
  {
    need: "Classroom fit",
    sciforge: "Built around repeatable study artifacts students and teachers can review.",
    generic: "Useful for one-off explanations, but less organized for a course loop.",
  },
];

const WORKFLOWS = [
  {
    Icon: PenTool,
    title: "Scribble-to-solution work",
    body: "Students can move from handwritten equations or diagrams into guided correction instead of rewriting everything as a perfect prompt.",
  },
  {
    Icon: Network,
    title: "Concept maps and prerequisites",
    body: "SciForge AI can show how topics connect, which helps a learner see the missing step before the answer.",
  },
  {
    Icon: FileText,
    title: "Reusable study artifacts",
    body: "Notes, quizzes, and research portfolios stay organized as outputs, not scattered across a long chat history.",
  },
  {
    Icon: ShieldCheck,
    title: "Study privacy expectations",
    body: "The product frames research-vault and export behavior clearly for school, lab, and department review.",
  },
];

const BEST_FIT = [
  "You want a STEM study system, not just a chat window.",
  "You need notes, quizzes, maps, sketches, and research work in one place.",
  "You care about repeatable workflows for students, labs, or classrooms.",
];

const CHATGPT_FIT = [
  "You need a broad assistant for many non-STEM tasks.",
  "You are comfortable writing detailed prompts for every output.",
  "You only need one-off explanations, summaries, or brainstorming.",
];

export function ComparePage() {
  return (
    <>
      <section className="relative pt-36 pb-16 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid [mask-image:radial-gradient(ellipse_at_top,black_25%,transparent_75%)]" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground/70">
            06 · COMPARISON
          </div>
          <h1 className="mt-5 font-display text-5xl sm:text-6xl font-extrabold tracking-tight leading-[0.98]">
            SciForge AI vs ChatGPT for STEM study.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            ChatGPT is a broad general assistant. SciForge AI is a STEM workbench
            for students and researchers who need structured problem solving,
            diagrams, notes, quizzes, and concept maps in one study flow.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 rounded-lg brand-gradient px-4 py-3 text-sm font-semibold text-background shadow-[0_0_28px_-4px_color-mix(in_oklab,var(--brand-orange)_70%,transparent)]"
            >
              See pricing
              <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              onClick={() => {
                localStorage.setItem("auth_redirect_target", "core-intelligence-console");
                window.location.href = "https://sci-forge-aii.vercel.app/";
              }}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/60 px-4 py-3 text-sm font-semibold text-foreground hover:border-orange/60"
            >
              Try the workspace
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <section className="relative py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-5 lg:grid-cols-[1fr_1.6fr_1fr]">
            <TraceCard className="h-full">
              <div className="p-6">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange/15 text-orange">
                  <Brain className="h-5 w-5" />
                </div>
                <h2 className="mt-5 font-display text-2xl font-extrabold tracking-tight">
                  SciForge AI
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Purpose-built around STEM learning workflows, so the tool starts
                  closer to the work a student or researcher is trying to finish.
                </p>
              </div>
            </TraceCard>

            <TraceCard className="h-full border-orange/50 shadow-[0_30px_80px_-30px_color-mix(in_oklab,var(--brand-orange)_60%,transparent)]">
              <div className="p-6">
                <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-orange">
                  Main difference
                </div>
                <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight">
                  SciForge AI packages the STEM workflow around the answer.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  A generic chat tool can explain a formula. SciForge AI is built
                  to carry the surrounding study loop: sketch analysis, concept
                  dependencies, quiz generation, notes, and research artifacts.
                </p>
              </div>
            </TraceCard>

            <TraceCard className="h-full">
              <div className="p-6">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan/15 text-cyan">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <h2 className="mt-5 font-display text-2xl font-extrabold tracking-tight">
                  ChatGPT
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Strong as a broad assistant, especially when you already know
                  what to ask and how to shape the output.
                </p>
              </div>
            </TraceCard>
          </div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            kicker="SIDE-BY-SIDE"
            title="Where the workflow differs."
            sub="This is not a claim that broad chat tools are bad. It is the difference between a general assistant and a study system tuned for STEM work."
          />
          <div className="mt-10 overflow-hidden rounded-lg border border-border bg-card/40">
            <div className="grid grid-cols-[0.9fr_1.35fr_1.35fr] border-b border-border bg-background/45 px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              <div>Need</div>
              <div>SciForge AI</div>
              <div>Generic chat tool</div>
            </div>
            {COMPARISON_ROWS.map((row) => (
              <div
                key={row.need}
                className="grid gap-4 border-b border-border px-4 py-4 text-sm last:border-b-0 md:grid-cols-[0.9fr_1.35fr_1.35fr]"
              >
                <div className="font-semibold text-foreground">{row.need}</div>
                <div className="flex gap-2 text-foreground/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                  <span>{row.sciforge}</span>
                </div>
                <div className="flex gap-2 text-muted-foreground">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/70" />
                  <span>{row.generic}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            kicker="SPECIALIZED STEM FLOW"
            title={
              <>
                Built for the work around
                <br />
                <span className="brand-gradient-text">the final answer.</span>
              </>
            }
            sub="The value is in the supporting workflow: reading the problem, exposing gaps, creating practice, and keeping the artifacts usable later."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {WORKFLOWS.map(({ Icon, title, body }) => (
              <div key={title}>
                <TraceCard className="h-full">
                  <div className="p-5">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-orange/15 text-orange">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold tracking-tight">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {body}
                    </p>
                  </div>
                </TraceCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-5 lg:grid-cols-2">
            <TraceCard>
              <div className="p-6">
                <h2 className="font-display text-2xl font-extrabold tracking-tight">
                  Choose SciForge AI when
                </h2>
                <ul className="mt-5 space-y-3 text-sm">
                  {BEST_FIT.map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                      <span className="text-foreground/85">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TraceCard>
            <TraceCard>
              <div className="p-6">
                <h2 className="font-display text-2xl font-extrabold tracking-tight">
                  Choose ChatGPT when
                </h2>
                <ul className="mt-5 space-y-3 text-sm">
                  {CHATGPT_FIT.map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                      <span className="text-foreground/85">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TraceCard>
          </div>
        </div>
      </section>
    </>
  );
}

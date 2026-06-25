import { motion } from "motion/react";
import {
  Brain,
  PenTool,
  Telescope,
  NotebookPen,
  ListChecks,
  Network,
  Rocket,
  FolderLock,
  Sparkles,
} from "lucide-react";
import { SectionHeader, TraceCard } from "./chrome";

// Spring animation profiles
export const SPRING_LAYOUT = { mass: 0.6, tension: 140, friction: 18 };
export const GLIDE_LAYOUT = { ease: [0.16, 1, 0.3, 1], duration: 0.8 };

const WORKSPACES = [
  {
    icon: Brain,
    code: "W-01",
    title: "Ask a STEM mentor",
    redirectTarget: "core-intelligence-console",
    motion: "Guided answer path",
    body: "Work through formulas, concepts, and lab questions with guided explanations that keep the reasoning visible.",
    tone: "orange",
    features: ["Step-by-step help", "Concept checks", "Study prompts", "Reasoning support"],
  },
  {
    icon: PenTool,
    code: "W-02",
    title: "Check handwritten work",
    redirectTarget: "scribble-analysis-lab",
    motion: "Handwriting review",
    body: "Upload or draw equations, sketches, or diagrams, then review where the work goes off track.",
    tone: "gold",
    features: ["Equation review", "Sketch support", "Mistake checks", "Diagram notes"],
  },
  {
    icon: Telescope,
    code: "W-03",
    title: "Work through advanced math",
    redirectTarget: "quantum-research-engine",
    motion: "Advanced problem solving",
    body: "Use a focused space for symbolic algebra, calculus, and scientific calculations when a problem needs more than quick chat.",
    tone: "cyan",
    features: ["Symbolic algebra", "Calculus help", "Scientific computing", "Precision checks"],
  },
  {
    icon: NotebookPen,
    code: "W-04",
    title: "Build study notes",
    redirectTarget: "notes-generator",
    motion: "Notes to study guide",
    body: "Turn rough class notes or topic outlines into organized summaries, technical notes, and exam prep material.",
    tone: "orange",
    features: ["Summary builder", "Review notes", "Exam outlines", "Study exports"],
  },
  {
    icon: ListChecks,
    code: "W-05",
    title: "Generate practice quizzes",
    redirectTarget: "quiz-generator",
    motion: "Quiz practice loop",
    body: "Create targeted quizzes for a topic, skill level, or weak spot so practice matches what you need to learn next.",
    tone: "gold",
    features: ["Custom quizzes", "Skill practice", "Difficulty levels", "Progress checks"],
  },
  {
    icon: Network,
    code: "W-06",
    title: "Map related concepts",
    redirectTarget: "concept-dependency-map",
    motion: "Concept map view",
    body: "See how prerequisites, formulas, and ideas connect across a STEM subject before choosing what to review next.",
    tone: "cyan",
    features: ["Prerequisite maps", "Concept links", "Learning paths", "Visual review"],
  },
  {
    icon: Rocket,
    code: "W-07",
    title: "Plan what to study next",
    redirectTarget: "academic-propulsion",
    motion: "Study roadmap",
    body: "Track goals, weak areas, and next steps in one roadmap so study sessions have a clear direction.",
    tone: "orange",
    features: ["Study roadmap", "Progress tracking", "Next steps", "Weak spots"],
  },
  {
    icon: Sparkles,
    code: "W-08",
    title: "Combine work across subjects",
    redirectTarget: "cognitive-synergy",
    motion: "Cross-topic workspace",
    body: "Bring notes, questions, and research from different STEM topics into one workspace for cross-topic problem solving.",
    tone: "gold",
    features: ["Cross-topic help", "Shared workspace", "Synthesis notes", "Project support"],
  },
  {
    icon: FolderLock,
    code: "W-09",
    title: "Save research artifacts",
    redirectTarget: "research-portfolio",
    motion: "Organized project library",
    body: "Keep generated documents, quiz history, lab notes, and research outputs organized for later review or export.",
    tone: "cyan",
    features: ["Saved outputs", "Quiz history", "Document library", "Export controls"],
  },
] as const;

export function Workspaces() {
  return (
    <section id="workspaces" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          kicker="02 · STEM WORKSPACES"
          title={
            <>
              Nine modules.
              <br />
              One <span className="brand-gradient-text">study workflow</span>.
            </>
          }
          sub="Each card starts with the job it helps you do, from checking handwritten work to saving research artifacts."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WORKSPACES.map((w, i) => {
            const Icon = w.icon;
            return (
              <motion.div
                key={w.code}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              >
                <TraceCard
                  data-cursor-card
                  className="h-full cursor-pointer"
                  onClick={() => {
                    localStorage.setItem("auth_redirect_target", w.redirectTarget);
                    window.location.href = "https://sci-forge-aii.vercel.app/";
                  }}
                >
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <div
                        className={`inline-flex h-9 w-9 items-center justify-center rounded-lg ${
                          w.tone === "orange"
                            ? "bg-orange/15 text-orange"
                            : w.tone === "gold"
                              ? "bg-gold/15 text-gold"
                              : "bg-cyan/15 text-cyan"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="font-mono text-[10px] text-muted-foreground">{w.code}</span>
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold tracking-tight">
                      {w.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {w.body}
                    </p>

                    {/* Feature pills */}
                    <div className="mt-3 flex flex-wrap gap-1">
                      {w.features.slice(0, 3).map((feature) => (
                        <span
                          key={feature}
                          className="rounded-full border border-border/50 bg-background/30 px-2 py-0.5 font-mono text-[9px] text-muted-foreground/70"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 border-t border-border pt-3">
                      <div className="text-[10px] uppercase tracking-widest font-mono text-muted-foreground/70">
                        Workspace focus
                      </div>
                      <div className="mt-1 font-mono text-[11px] text-cyan">{w.motion}</div>
                    </div>
                  </div>
                </TraceCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

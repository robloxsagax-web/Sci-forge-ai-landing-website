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
} from "lucide-react";
import { SectionHeader, TraceCard } from "./chrome";

const WORKSPACES = [
  {
    icon: Brain,
    code: "W-01",
    title: "Core Intelligence Console",
    motion: "Stream-pill ignition · 60fps token cascade",
    body: "The central chat nexus. Fire multi-model stream queries and watch answers cascade across a reasoning pipeline tuned for deep academic velocity.",
    tone: "orange",
  },
  {
    icon: PenTool,
    code: "W-02",
    title: "Scribble Analysis Lab",
    motion: "Vector-diff overlay · surgical cubic-bezier path reveal",
    body: "Processes your hand-drawn calculus derivations, trusses, and circuits. Instantly ingests vectors to flag exact geometric and mathematical notation errors.",
    tone: "gold",
  },
  {
    icon: Telescope,
    code: "W-03",
    title: "Quantum Research Engine",
    motion: "Telemetry-glyph scroll · deep-field parallax",
    body: "Built for complex academic investigations. Executes deep-dive variable derivations and symbolic algebra at 1e-14 precision.",
    tone: "cyan",
  },
  {
    icon: NotebookPen,
    code: "W-04",
    title: "Notes Generator",
    motion: "Sheet-fold cascade · modular accordion bloom",
    body: "Auto-compiles structured summaries, modular concept breakdowns, and exam-ready briefs modeled directly on professional scientific outlines.",
    tone: "orange",
  },
  {
    icon: ListChecks,
    code: "W-05",
    title: "Quiz Generator",
    motion: "Difficulty-tier ladder · Elo-curve sweep",
    body: "Fires customized testing fields mapped to strict difficulty tiers, running diagnostic metrics to track exactly which sub-skills have leveled up.",
    tone: "gold",
  },
  {
    icon: Network,
    code: "W-06",
    title: "Concept Dependency Map",
    motion: "Force-graph crystallization · edge-glow trace",
    body: "An interactive node web tracking prerequisite knowledge. See exactly what structural gates block your mastery of advanced engineering concepts.",
    tone: "cyan",
  },
  {
    icon: Rocket,
    code: "W-07",
    title: "Academic Propulsion",
    motion: "Skill-vector launch · radial velocity rings",
    body: "Generates personalized learning roadmaps with dynamic skill-velocity vectors rendered like a live flight telemetry HUD.",
    tone: "orange",
  },
  {
    icon: FolderLock,
    code: "W-08",
    title: "Research Portfolio",
    motion: "Vault unlock · AES-glyph shimmer",
    body: "A secure, zero-mock-data vault consolidating every generated artifact—notes, quizzes, lab outputs, and scribble diffs—into one archive.",
    tone: "gold",
  },
] as const;

export function Workspaces() {
  return (
    <section id="workspaces" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          kicker="// 02 · CORE WORKSPACE ARTIFACTS"
          title={
            <>
              Eight workspaces.
              <br />
              One <span className="brand-gradient-text">cognitive instrument</span>.
            </>
          }
          sub="Each module is a purpose-built surface — not a chat wrapper. Tuned vocabulary, tuned reasoning chain, tuned visual grammar."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {WORKSPACES.map((w, i) => {
            const Icon = w.icon;
            return (
              <motion.div
                key={w.code}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              >
                <TraceCard className="h-full">
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
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
                    <div className="mt-4 border-t border-border pt-3">
                      <div className="text-[10px] uppercase tracking-widest font-mono text-muted-foreground/70">
                        Motion profile
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
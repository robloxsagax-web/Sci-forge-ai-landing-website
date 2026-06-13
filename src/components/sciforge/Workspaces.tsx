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
    title: "Core Intelligence Console",
    redirectTarget: "core-intelligence-console",
    motion: "Stream-pill ignition · 60fps token cascade",
    body: "Collaborate with your adaptive STEM mentor inside an optimized, multi-model execution surface engineered for deep academic inquiry.",
    tone: "orange",
    features: ["Multi-model routing", "60fps token cascade", "Adaptive reasoning", "Deep inquiry"],
  },
  {
    icon: PenTool,
    code: "W-02",
    title: "Scribble Analysis Lab",
    redirectTarget: "scribble-analysis-lab",
    motion: "Vector-diff overlay · surgical cubic-bezier path reveal",
    body: "Real-time vector geometric processing and mistake correction engine that analyzes handwritten equations, sketches, and engineering diagrams.",
    tone: "gold",
    features: ["60Hz vector processing", "Sketch analysis", "Error detection", "Diagram parsing"],
  },
  {
    icon: Telescope,
    code: "W-03",
    title: "Quantum Research Engine",
    redirectTarget: "quantum-research-engine",
    motion: "Telemetry-glyph scroll · deep-field parallax",
    body: "Dedicated to intense, multi-variable scientific computations and advanced symbolic algebraic derivations running at 1e-14 precision.",
    tone: "cyan",
    features: ["1e-14 precision", "Symbolic algebra", "Multi-var calculus", "Scientific computing"],
  },
  {
    icon: NotebookPen,
    code: "W-04",
    title: "Scientific Documentation Lab",
    redirectTarget: "notes-generator",
    motion: "Sheet-fold cascade · modular accordion bloom",
    body: "Automated knowledge compilation surface that builds structured summaries, technical notes, and exam-ready outlines.",
    tone: "orange",
    features: ["Auto-compilation", "Structured summaries", "Exam briefs", "Technical notes"],
  },
  {
    icon: ListChecks,
    code: "W-05",
    title: "Mastery Assessment Engine",
    redirectTarget: "quiz-generator",
    motion: "Difficulty-tier ladder · Elo-curve sweep",
    body: "Fires custom academic testing arrays mapped to strict skill-calibrated difficulty tracks with target dynamic tracking metrics.",
    tone: "gold",
    features: ["Skill calibration", "Elo tracking", "Adaptive testing", "Performance metrics"],
  },
  {
    icon: Network,
    code: "W-06",
    title: "Concept Dependency Map",
    redirectTarget: "concept-dependency-map",
    motion: "Force-graph crystallization · edge-glow trace",
    body: "Interactive visual network relationship graph mapping prerequisite learning paths and core knowledge structures for STEM subjects.",
    tone: "cyan",
    features: ["Prerequisite mapping", "Visual graphs", "Knowledge structures", "Learning paths"],
  },
  {
    icon: Rocket,
    code: "W-07",
    title: "Academic Propulsion",
    redirectTarget: "academic-propulsion",
    motion: "Skill-vector launch · radial velocity rings",
    body: "Tracks personalized study roadmaps and dynamic skill velocity vectors mapped across a flight-HUD telemetry overlay.",
    tone: "orange",
    features: ["Progress tracking", "Telemetry HUD", "Velocity vectors", "Adaptive paths"],
  },
  {
    icon: Sparkles,
    code: "W-08",
    title: "Cognitive Synergy Hub",
    redirectTarget: "cognitive-synergy",
    motion: "Node crystallization · cross-agent synthesis",
    body: "A centralized real-time workspace where multi-tier agent nodes collaborate to synthesize cross-disciplinary solutions.",
    tone: "gold",
    features: ["Multi-agent collab", "Real-time synthesis", "Cross-disciplinary", "Node orchestration"],
  },
  {
    icon: FolderLock,
    code: "W-09",
    title: "Research Portfolio",
    redirectTarget: "research-portfolio",
    motion: "Vault unlock · AES-glyph shimmer",
    body: "Secure local asset library consolidating all generated documents, quiz histories, lab outputs, and historical artifacts.",
    tone: "cyan",
    features: ["AES-256 encryption", "Artifact consolidation", "Local library", "Export controls"],
  },
] as const;

export function Workspaces() {
  return (
    <section id="workspaces" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          kicker="02 · CORE WORKSPACE ARTIFACTS"
          title={
            <>
              Nine modules.
              <br />
              One <span className="brand-gradient-text">cognitive instrument</span>.
            </>
          }
          sub="Each module is a purpose-built surface — not a chat wrapper. Tuned vocabulary, tuned reasoning chain, tuned visual grammar."
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
                <TraceCard data-cursor-card className="h-full cursor-pointer" onClick={() => {
                  localStorage.setItem('auth_redirect_target', w.redirectTarget);
                  window.location.href = "https://sci-forge-aii.vercel.app/";
                }}>
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
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">{w.body}</p>
                    
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
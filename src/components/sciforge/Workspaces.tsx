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
  Zap,
  Eye,
  Calculator,
  FileText,
  Target,
  GitBranch,
  Gauge,
  Shield,
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
    body: "The definitive cognitive command center for advanced academic research. Features an integrated multi-model routing orchestration environment capable of processing parallel live queries. Built-in interactive suggestion nodes let users instantly run complex concepts with a single click. Includes automated code structure generation, type-guarded output validations, and clear LaTeX equations for clean rendering of physics and mathematical formulas.",
    tone: "orange",
    interactionEngine: "A running multi-tier query stream detailing token construction outputs alongside real-time accuracy scoring benchmarks.",
    features: ["Multi-model routing", "60fps token cascade", "LaTeX rendering", "Type validation"],
  },
  {
    icon: PenTool,
    code: "W-02",
    title: "Scribble Analysis Lab",
    redirectTarget: "scribble-analysis-lab",
    motion: "Vector-diff overlay · surgical cubic-bezier path reveal",
    body: "An advanced structural visual reasoning module built atop a 60Hz vector-diff processing framework. Ingests raw hand-drawn user inputs, normalizing complex sketches into crisp SVG vector data arrays. Features an integrated symbolic algebra matrix and engineering physics solver that automatically evaluates node points, beam vectors, and load values. Flags mechanical logic flaws, structural deflection anomalies, and calculus notation errors with precise inline highlights linked directly to foundational physics principles.",
    tone: "gold",
    interactionEngine: "A production-ready canvas schematic tracking a 5-node mechanics truss with live delta correction lines.",
    features: ["60Hz vector processing", "SVG normalization", "Physics solver", "Error highlighting"],
  },
  {
    icon: Telescope,
    code: "W-03",
    title: "Quantum Research Engine",
    redirectTarget: "quantum-research-engine",
    motion: "Telemetry-glyph scroll · deep-field parallax",
    body: "Engineered exclusively for extreme scientific computing and high-precision academic deep-dives. Utilizes symbolic algebra integration running at a native precision threshold of 1e-14. Capable of handling massive mathematical calculations, multi-variable calculus loops, and complex organic chemistry reaction tracking without context execution dropouts.",
    tone: "cyan",
    interactionEngine: "A rolling background terminal showing live calculation steps and data log validation traces.",
    features: ["1e-14 precision", "Symbolic algebra", "Multi-var calculus", "Reaction tracking"],
  },
  {
    icon: NotebookPen,
    code: "W-04",
    title: "Notes Generator",
    redirectTarget: "notes-generator",
    motion: "Sheet-fold cascade · modular accordion bloom",
    body: "An automated markdown processing layout that compiles clean, structured study blueprints, comprehensive revision notes, and exam-ready briefs. Designed to mirror how researchers naturally catalog knowledge systems—completely eliminating surface-level summaries in favor of layered informational architectures.",
    tone: "orange",
    interactionEngine: "Interactive, nested structural accordions showing layered breakdowns from foundational concepts to advanced technical implementations.",
    features: ["Markdown processing", "Layered structure", "Exam-ready briefs", "Knowledge mapping"],
  },
  {
    icon: ListChecks,
    code: "W-05",
    title: "Quiz Generator",
    redirectTarget: "quiz-generator",
    motion: "Difficulty-tier ladder · Elo-curve sweep",
    body: "Generates custom academic testing fields mapped directly to rigid difficulty paths. Employs a dynamic calibration engine that adapts question difficulty to student skill levels, calculating knowledge retention metrics via precise performance profiles.",
    tone: "gold",
    interactionEngine: "An interactive difficulty selector showing skill levels adjusting across an animated tracking curve.",
    features: ["Difficulty calibration", "Elo tracking", "Skill profiling", "Adaptive testing"],
  },
  {
    icon: Network,
    code: "W-06",
    title: "Concept Dependency Map",
    redirectTarget: "concept-dependency-map",
    motion: "Force-graph crystallization · edge-glow trace",
    body: "An interactive visual node relationship framework mapping out required prerequisite pathways for STEM subjects. Traces dependencies across topics so students can visualize exactly what knowledge blocks must be mastered before tackling advanced scientific modules.",
    tone: "cyan",
    interactionEngine: "A dynamic visual canvas graph with floating nodes, connecting lines, and glowing edge trails showing learning progression.",
    features: ["Prerequisite mapping", "Node visualization", "Dependency tracking", "Learning paths"],
  },
  {
    icon: Rocket,
    code: "W-07",
    title: "Academic Propulsion",
    redirectTarget: "academic-propulsion",
    motion: "Skill-vector launch · radial velocity rings",
    body: "Tracks personalized study roadmaps and dynamic performance vectors in real time. Renders growth data through a premium flight telemetry interface, adjusting learning paths based on master tracking statistics.",
    tone: "orange",
    interactionEngine: "Radial progress rings and vector charts tracking comprehension velocities across core modules.",
    features: ["Progress tracking", "Telemetry HUD", "Velocity vectors", "Adaptive paths"],
  },
  {
    icon: FolderLock,
    code: "W-08",
    title: "Research Portfolio",
    redirectTarget: "research-portfolio",
    motion: "Vault unlock · AES-glyph shimmer",
    body: "A highly secure, zero-mock-data storage vault that groups and catalogs all user artifacts—including generated formulas, quiz histories, notes, and scribble diagnostics—into an organized local library.",
    tone: "gold",
    interactionEngine: "A secure structural library interface with clear document filters and data export controls.",
    features: ["AES-256 encryption", "Zero-mock data", "Artifact cataloging", "Export controls"],
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
                <TraceCard className="h-full cursor-pointer" onClick={() => {
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
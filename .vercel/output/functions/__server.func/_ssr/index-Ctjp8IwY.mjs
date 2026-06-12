import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as TelemetryBanner, S as SectionHeader, T as TraceCard } from "./router-BjRbeK34.mjs";
import { a as useScroll, b as useTransform, m as motion } from "../_libs/framer-motion.mjs";
import { A as ArrowRight, c as ChevronRight, e as Brain, P as PenTool, f as Telescope, N as NotebookPen, g as ListChecks, h as Network, R as Rocket, i as FolderLock, a as Sparkles, j as SendHorizontal } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const SUGGESTIONS = [
  { label: "Photosynthesis", prompt: "Break down the light-dependent reactions of photosynthesis." },
  { label: "Tensor Calc", prompt: "Derive the Christoffel symbols for a 2-sphere metric, step by step." },
  { label: "Truss Solver", prompt: "Solve this hand-drawn truss for axial forces — joint method." },
  { label: "Org Chem Mechanisms", prompt: "Walk through the SN2 mechanism for 2-bromobutane + NaOH." }
];
function PromptAnchor() {
  const [active, setActive] = reactExports.useState(0);
  const [typed, setTyped] = reactExports.useState("");
  const [tokens, setTokens] = reactExports.useState([]);
  const cancelRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    cancelRef.current = false;
    setTyped("");
    setTokens([]);
    const target = SUGGESTIONS[active].prompt;
    let i = 0;
    const typeId = window.setInterval(() => {
      if (cancelRef.current) return;
      i++;
      setTyped(target.slice(0, i));
      if (i >= target.length) {
        window.clearInterval(typeId);
        const stream = [
          "› reasoning",
          "core_intelligence",
          "→",
          "decomposing",
          "prompt",
          "··",
          "loading",
          "context",
          "✓",
          "drafting",
          "answer",
          "▌"
        ];
        let k = 0;
        const tokId = window.setInterval(() => {
          if (cancelRef.current) return window.clearInterval(tokId);
          setTokens((t) => [...t, stream[k]]);
          k++;
          if (k >= stream.length) {
            window.clearInterval(tokId);
            window.setTimeout(() => {
              if (!cancelRef.current) setActive((a) => (a + 1) % SUGGESTIONS.length);
            }, 1600);
          }
        }, 90);
      }
    }, 32);
    return () => {
      cancelRef.current = true;
      window.clearInterval(typeId);
    };
  }, [active]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-12 max-w-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl border border-border bg-card/50 backdrop-blur-xl shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": true,
        className: "pointer-events-none absolute -inset-px rounded-2xl opacity-70",
        style: {
          background: "radial-gradient(60% 80% at 20% 0%, color-mix(in oklab, var(--brand-orange) 22%, transparent), transparent 60%), radial-gradient(50% 80% at 90% 100%, color-mix(in oklab, var(--brand-cyan) 18%, transparent), transparent 60%)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center gap-3 px-4 py-3 border-b border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-7 w-7 items-center justify-center rounded-lg bg-orange/15 text-orange", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground", children: "core_intelligence.console / live" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto inline-flex items-center gap-1.5 font-mono text-[10px] text-mentor", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-mentor animate-pulse-dot" }),
        "stream-ready"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative px-5 py-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-[64px] text-left text-base sm:text-lg text-foreground/95 leading-snug font-sans", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/70", children: "Ask our adaptive mentor… " }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: typed }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-0.5 inline-block h-5 w-[2px] -mb-1 align-middle bg-orange animate-[caret-blink_700ms_step-end_infinite]" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex flex-wrap items-center gap-2", children: [
        SUGGESTIONS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setActive(i),
            className: `inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-wider transition-all ${active === i ? "border-orange/60 bg-orange/15 text-orange shadow-[0_0_18px_-4px_color-mix(in_oklab,var(--brand-orange)_70%,transparent)]" : "border-border bg-background/40 text-muted-foreground hover:text-foreground hover:border-orange/40"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-current" }),
              s.label
            ]
          },
          s.label
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => {
              localStorage.setItem("pending_initial_query", SUGGESTIONS[active].prompt);
              window.location.href = "https://sci-forge-aii.vercel.app/";
            },
            className: "ml-auto inline-flex h-8 items-center gap-1.5 rounded-lg brand-gradient px-3 text-xs font-semibold text-background",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SendHorizontal, { className: "h-3.5 w-3.5" }),
              "Run"
            ]
          }
        )
      ] }),
      tokens.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-1.5 font-mono text-[10px] text-cyan/90", children: tokens.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.span,
        {
          initial: { opacity: 0, y: 6 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.18 },
          className: "rounded-md border border-cyan/30 bg-cyan/10 px-1.5 py-0.5",
          children: t
        },
        i + t
      )) })
    ] })
  ] }) });
}
function Hero() {
  const ref = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "hero", ref, className: "relative pt-36 pb-20 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 blueprint-grid [mask-image:radial-gradient(ellipse_at_top,black_25%,transparent_75%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        style: { y },
        className: "pointer-events-none absolute left-1/2 top-24 -z-10 h-[560px] w-[860px] -translate-x-1/2 rounded-full bg-orange/15 blur-[120px]"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6 text-center relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground/70", children: "01 · COGNITIVE ENTRANCE" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 8 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: "relative mt-5 inline-flex items-center gap-2 rounded-full border border-orange/40 bg-card/40 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-orange backdrop-blur",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "absolute inset-0 -z-10 rounded-full bg-orange/15 blur-md" }),
            "⌗ Drop the slow study loop"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 font-display text-5xl sm:text-7xl font-extrabold tracking-wide leading-[1.1]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.span,
          {
            initial: { opacity: 0, y: 18 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
            className: "block text-white drop-shadow-sm",
            children: "Step into deep"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative block mt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "absolute inset-0 -z-10 blur-2xl opacity-50 bg-gradient-to-r from-[#FF7A00] to-[#FFB547]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block bg-gradient-to-r from-[#FF7A00] to-[#FFB547] bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(255,122,0,0.35)] tracking-normal font-extrabold", children: "cognitive" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative block mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block bg-gradient-to-r from-[#FF7A00] to-[#FFB547] bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(255,122,0,0.35)] tracking-normal font-extrabold", children: "acceleration." }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 12, filter: "blur(20px)" },
          animate: { opacity: 1, y: 0, filter: "blur(0px)" },
          transition: { duration: 0.9, delay: 0.6 },
          className: "mx-auto mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground",
          children: "The intelligent workbench engineered exclusively for scientists, engineers, and the students becoming them."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PromptAnchor, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay: 0.9 },
          className: "mt-10 flex flex-wrap items-center justify-center gap-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { whileHover: { scale: 1.04 }, whileTap: { scale: 0.97 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => window.location.href = "https://sci-forge-aii.vercel.app/",
                className: "group relative inline-flex items-center gap-2 overflow-hidden rounded-xl brand-gradient px-5 py-3 text-sm font-semibold text-background shadow-[0_0_32px_-4px_color-mix(in_oklab,var(--brand-orange)_70%,transparent)] cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      "aria-hidden": true,
                      className: "absolute inset-0 bg-[linear-gradient(115deg,transparent_30%,rgba(255,255,255,0.45)_50%,transparent_70%)] bg-[length:220%_100%] animate-[glyph-shimmer_2.6s_linear_infinite]"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative", children: "Initialize Workspace" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "relative h-4 w-4" })
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/architecture",
                className: "group relative inline-flex items-center gap-2 rounded-xl border border-border bg-card/40 px-5 py-3 text-sm font-semibold backdrop-blur transition hover:border-orange/60",
                children: [
                  "Tour the engine",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })
                ]
              }
            )
          ]
        }
      )
    ] })
  ] });
}
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
    features: ["Multi-model routing", "60fps token cascade", "LaTeX rendering", "Type validation"]
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
    features: ["60Hz vector processing", "SVG normalization", "Physics solver", "Error highlighting"]
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
    features: ["1e-14 precision", "Symbolic algebra", "Multi-var calculus", "Reaction tracking"]
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
    features: ["Markdown processing", "Layered structure", "Exam-ready briefs", "Knowledge mapping"]
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
    features: ["Difficulty calibration", "Elo tracking", "Skill profiling", "Adaptive testing"]
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
    features: ["Prerequisite mapping", "Node visualization", "Dependency tracking", "Learning paths"]
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
    features: ["Progress tracking", "Telemetry HUD", "Velocity vectors", "Adaptive paths"]
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
    features: ["AES-256 encryption", "Zero-mock data", "Artifact cataloging", "Export controls"]
  }
];
function Workspaces() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "workspaces", className: "relative py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        kicker: "02 · CORE WORKSPACE ARTIFACTS",
        title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Eight workspaces.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "One ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "brand-gradient-text", children: "cognitive instrument" }),
          "."
        ] }),
        sub: "Each module is a purpose-built surface — not a chat wrapper. Tuned vocabulary, tuned reasoning chain, tuned visual grammar."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: WORKSPACES.map((w, i) => {
      const Icon = w.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: 0.5, delay: i % 4 * 0.06 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(TraceCard, { className: "h-full cursor-pointer", onClick: () => {
            localStorage.setItem("auth_redirect_target", w.redirectTarget);
            window.location.href = "https://sci-forge-aii.vercel.app/";
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `inline-flex h-9 w-9 items-center justify-center rounded-lg ${w.tone === "orange" ? "bg-orange/15 text-orange" : w.tone === "gold" ? "bg-gold/15 text-gold" : "bg-cyan/15 text-cyan"}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-muted-foreground", children: w.code })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-lg font-bold tracking-tight", children: w.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3", children: w.body }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-1", children: w.features.slice(0, 3).map((feature) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "rounded-full border border-border/50 bg-background/30 px-2 py-0.5 font-mono text-[9px] text-muted-foreground/70",
                children: feature
              },
              feature
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 border-t border-border pt-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest font-mono text-muted-foreground/70", children: "Motion profile" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-mono text-[11px] text-cyan", children: w.motion })
            ] })
          ] }) })
        },
        w.code
      );
    }) })
  ] }) });
}
function LandingPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TelemetryBanner, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Workspaces, {})
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LandingPage, {});
}
export {
  Index as component
};

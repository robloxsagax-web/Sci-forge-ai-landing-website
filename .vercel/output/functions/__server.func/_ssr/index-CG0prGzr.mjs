import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { b as TelemetryBanner, S as SectionHeader, T as TraceCard } from "./router-pXq7oO6z.mjs";
import { a as useMotionValue, b as useSpring, m as motion, c as useScroll, d as useTransform } from "../_libs/framer-motion.mjs";
import { e as Target, f as FileText, g as BookOpen, h as FolderKanban, A as ArrowRight, c as ChevronRight, R as Route, i as BookOpenCheck, j as ListTree, k as Brain, P as PenTool, l as Telescope, N as NotebookPen, m as ListChecks, n as Network, o as Rocket, a as Sparkles, p as FolderLock, q as ShieldCheck, r as CircleCheck, s as PlugZap, t as School, u as SendHorizontal } from "../_libs/lucide-react.mjs";
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
  { emoji: "🌿", label: "Teach me Photosynthesis", prompt: "Explain the light-dependent reactions of photosynthesis in detail." },
  { emoji: "⚡", label: "Create a quiz on Physics", prompt: "Generate a quiz on Newton's Laws of Motion with varying difficulty levels." },
  { emoji: "📝", label: "Generate study notes", prompt: "Create comprehensive study notes on cellular biology fundamentals." },
  { emoji: "🔬", label: "Explain Newton's Laws", prompt: "Walk through Newton's Three Laws of Motion with real-world examples." }
];
const METRICS = [
  { icon: Target, value: "0", label: "Questions Solved" },
  { icon: FileText, value: "0", label: "Notes Generated" },
  { icon: BookOpen, value: "0", label: "Quizzes Completed" },
  { icon: FolderKanban, value: "0", label: "Research Projects" }
];
const SYSTEM_STATUS = [
  { label: "Model", value: "Llama 3.3" },
  { label: "Latency", value: "42ms" },
  { label: "Tokens/s", value: "85 t/s" }
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
            className: `inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] transition-all ${active === i ? "border-orange/60 bg-orange/15 text-orange shadow-[0_0_18px_-4px_color-mix(in_oklab,var(--brand-orange)_70%,transparent)]" : "border-border bg-background/40 text-muted-foreground hover:text-foreground hover:border-orange/40"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: s.emoji }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: s.label })
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
            className: "block text-zinc-950 dark:text-white drop-shadow-sm",
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay: 0.4 },
          className: "mt-8 grid grid-cols-2 md:grid-cols-4 gap-3",
          children: METRICS.map((m, i) => {
            const Icon = m.icon;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded-xl border border-border bg-card/40 px-4 py-3 backdrop-blur",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 text-orange/70" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground", children: m.label })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-bold text-foreground", children: m.value })
                ]
              },
              m.label
            );
          })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.6, delay: 0.5 },
          className: "mt-4 inline-flex items-center gap-4 rounded-full border border-border/50 bg-background/30 px-4 py-2 font-mono text-[10px] text-muted-foreground/70",
          children: SYSTEM_STATUS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground/50", children: [
              s.label,
              ":"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-cyan", children: s.value }),
            i < SYSTEM_STATUS.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-border mx-1", children: "|" })
          ] }, s.label))
        }
      ),
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
const PROBLEMS = [
  {
    icon: Route,
    label: "Multistep problems",
    title: "A problem stops making sense halfway through.",
    body: "One missed step in a derivation, physics setup, or chemistry mechanism can make the rest feel unusable. SciForge keeps the work in a STEM workspace so you can inspect the path, not just the final answer."
  },
  {
    icon: BookOpenCheck,
    label: "Study notes",
    title: "Notes pile up before they become study material.",
    body: "Lecture fragments, lab observations, and rough outlines need to turn into review notes, quizzes, and maps. SciForge gives those study jobs a place to live together."
  },
  {
    icon: ListTree,
    label: "Classroom practice",
    title: "Teachers need the next practice step fast.",
    body: "A class may need another explanation, a targeted quiz, or a prerequisite map. SciForge helps turn the same topic into the next useful study artifact."
  }
];
function ProblemSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        kicker: "02 · STUDY BOTTLENECKS",
        title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "STEM work gets stuck",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "in ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "brand-gradient-text", children: "predictable places" }),
          "."
        ] }),
        sub: "SciForge AI is built for the messy middle between seeing an answer and understanding how to get there."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-4 lg:grid-cols-3", children: PROBLEMS.map((problem) => {
      const Icon = problem.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(TraceCard, { className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan/15 text-cyan", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "max-w-[9rem] text-right font-mono text-[10px] uppercase leading-snug tracking-[0.2em] text-muted-foreground", children: problem.label })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display text-xl font-bold tracking-tight", children: problem.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: problem.body })
      ] }) }, problem.title);
    }) })
  ] }) });
}
const WORKSPACES = [
  {
    icon: Brain,
    code: "W-01",
    title: "Ask a STEM mentor",
    redirectTarget: "core-intelligence-console",
    motion: "Guided answer path",
    body: "Work through formulas, concepts, and lab questions with guided explanations that keep the reasoning visible.",
    tone: "orange",
    features: ["Step-by-step help", "Concept checks", "Study prompts", "Reasoning support"]
  },
  {
    icon: PenTool,
    code: "W-02",
    title: "Check handwritten work",
    redirectTarget: "scribble-analysis-lab",
    motion: "Handwriting review",
    body: "Upload or draw equations, sketches, or diagrams, then review where the work goes off track.",
    tone: "gold",
    features: ["Equation review", "Sketch support", "Mistake checks", "Diagram notes"]
  },
  {
    icon: Telescope,
    code: "W-03",
    title: "Work through advanced math",
    redirectTarget: "quantum-research-engine",
    motion: "Advanced problem solving",
    body: "Use a focused space for symbolic algebra, calculus, and scientific calculations when a problem needs more than quick chat.",
    tone: "cyan",
    features: ["Symbolic algebra", "Calculus help", "Scientific computing", "Precision checks"]
  },
  {
    icon: NotebookPen,
    code: "W-04",
    title: "Build study notes",
    redirectTarget: "notes-generator",
    motion: "Notes to study guide",
    body: "Turn rough class notes or topic outlines into organized summaries, technical notes, and exam prep material.",
    tone: "orange",
    features: ["Summary builder", "Review notes", "Exam outlines", "Study exports"]
  },
  {
    icon: ListChecks,
    code: "W-05",
    title: "Generate practice quizzes",
    redirectTarget: "quiz-generator",
    motion: "Quiz practice loop",
    body: "Create targeted quizzes for a topic, skill level, or weak spot so practice matches what you need to learn next.",
    tone: "gold",
    features: ["Custom quizzes", "Skill practice", "Difficulty levels", "Progress checks"]
  },
  {
    icon: Network,
    code: "W-06",
    title: "Map related concepts",
    redirectTarget: "concept-dependency-map",
    motion: "Concept map view",
    body: "See how prerequisites, formulas, and ideas connect across a STEM subject before choosing what to review next.",
    tone: "cyan",
    features: ["Prerequisite maps", "Concept links", "Learning paths", "Visual review"]
  },
  {
    icon: Rocket,
    code: "W-07",
    title: "Plan what to study next",
    redirectTarget: "academic-propulsion",
    motion: "Study roadmap",
    body: "Track goals, weak areas, and next steps in one roadmap so study sessions have a clear direction.",
    tone: "orange",
    features: ["Study roadmap", "Progress tracking", "Next steps", "Weak spots"]
  },
  {
    icon: Sparkles,
    code: "W-08",
    title: "Combine work across subjects",
    redirectTarget: "cognitive-synergy",
    motion: "Cross-topic workspace",
    body: "Bring notes, questions, and research from different STEM topics into one workspace for cross-topic problem solving.",
    tone: "gold",
    features: ["Cross-topic help", "Shared workspace", "Synthesis notes", "Project support"]
  },
  {
    icon: FolderLock,
    code: "W-09",
    title: "Save research artifacts",
    redirectTarget: "research-portfolio",
    motion: "Organized project library",
    body: "Keep generated documents, quiz history, lab notes, and research outputs organized for later review or export.",
    tone: "cyan",
    features: ["Saved outputs", "Quiz history", "Document library", "Export controls"]
  }
];
function Workspaces() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "workspaces", className: "relative py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        kicker: "03 · STEM WORKSPACES",
        title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Nine modules.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "One ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "brand-gradient-text", children: "study workflow" }),
          "."
        ] }),
        sub: "Each card starts with the job it helps you do, from checking handwritten work to saving research artifacts."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: WORKSPACES.map((w, i) => {
      const Icon = w.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: 0.5, delay: i % 3 * 0.06 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            TraceCard,
            {
              "data-cursor-card": true,
              className: "h-full cursor-pointer",
              onClick: () => {
                localStorage.setItem("auth_redirect_target", w.redirectTarget);
                window.location.href = "https://sci-forge-aii.vercel.app/";
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
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
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest font-mono text-muted-foreground/70", children: "Workspace focus" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-mono text-[11px] text-cyan", children: w.motion })
                ] })
              ] })
            }
          )
        },
        w.code
      );
    }) })
  ] }) });
}
const FAQS = [
  {
    icon: ShieldCheck,
    question: "Do you train on student work?",
    answer: "No. The terms shown on this site describe Research Vault work as AES-256 sealed, with no training-pipeline ingest."
  },
  {
    icon: CircleCheck,
    question: "Can I trust every answer?",
    answer: "Use it to show steps, check reasoning, and build practice material. For graded work, lab protocols, or citations, verify the final answer with your teacher, textbook, or source material."
  },
  {
    icon: PlugZap,
    question: "Does it connect to Google Classroom?",
    answer: "The public site does not promise a live classroom sync today. SciForge AI is a STEM workspace for notes, quizzes, maps, and exports, with integrations scoped through institutional pilots."
  },
  {
    icon: School,
    question: "Will it fit a classroom or lab?",
    answer: "Yes, for guided practice, concept review, research notes, and problem-solving support. Teams that need shared access, admin controls, or policy review should start with institutional licensing."
  },
  {
    icon: BookOpenCheck,
    question: "What makes it different from a chat box?",
    answer: "The workspace is organized around STEM jobs: handwritten work, symbolic reasoning, quizzes, concept maps, notes, and research portfolios. Students start from the task, not a blank chat prompt."
  }
];
function Faq() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "faq", className: "relative py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        kicker: "04 · FIELD QUESTIONS",
        title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Clear answers before",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "brand-gradient-text", children: "a buyer has to ask." })
        ] }),
        sub: "The short version on privacy, answer quality, integrations, and classroom fit."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-4 md:grid-cols-2", children: FAQS.map((item) => {
      const Icon = item.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(TraceCard, { className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full gap-4 p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan/15 text-cyan", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-base font-bold tracking-tight", children: item.question }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: item.answer })
        ] })
      ] }) }, item.question);
    }) })
  ] }) });
}
const CURSOR_CONFIGS = {
  default: {
    dotSize: 6,
    ringSize: 32,
    ringBorderWidth: 1,
    hasDashArray: false,
    isSpinning: false,
    isCrosshair: false
  },
  link: {
    dotSize: 6,
    ringSize: 56,
    ringBorderWidth: 1.5,
    hasDashArray: true,
    isSpinning: true,
    isCrosshair: false
  },
  card: {
    dotSize: 4,
    ringSize: 12,
    ringBorderWidth: 2,
    hasDashArray: false,
    isSpinning: false,
    isCrosshair: true
  }
};
function CustomCursor() {
  const cursorRef = reactExports.useRef(null);
  const [cursorState, setCursorState] = reactExports.useState("default");
  const [isVisible, setIsVisible] = reactExports.useState(false);
  const [isTouchDevice, setIsTouchDevice] = reactExports.useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springConfig = { stiffness: 280, damping: 24, mass: 0.4 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);
  const config = CURSOR_CONFIGS[cursorState];
  reactExports.useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0 || window.matchMedia("(pointer: coarse)").matches
      );
    };
    checkTouch();
  }, []);
  const handleMouseMove = reactExports.useCallback(
    (e) => {
      const x = e.clientX;
      const y = e.clientY;
      cursorX.set(x);
      cursorY.set(y);
      if (!isVisible) setIsVisible(true);
    },
    [cursorX, cursorY, isVisible]
  );
  const handleMouseEnter = reactExports.useCallback(() => {
    if (!isTouchDevice) setIsVisible(true);
  }, [isTouchDevice]);
  const handleMouseLeave = reactExports.useCallback(() => {
    setIsVisible(false);
  }, []);
  const handleElementDetection = reactExports.useCallback((e) => {
    const target = e.target;
    const isLink = target.closest('a, button, [role="button"], input, textarea, select') !== null || target.tagName === "A" || target.tagName === "BUTTON";
    const isCard = target.closest("[data-cursor-card]") !== null || target.closest(".group") !== null;
    if (isCard) {
      setCursorState("card");
    } else if (isLink) {
      setCursorState("link");
    } else {
      setCursorState("default");
    }
  }, []);
  reactExports.useEffect(() => {
    if (isTouchDevice) return;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleElementDetection);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.body.style.cursor = "none";
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleElementDetection);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.body.style.cursor = "auto";
    };
  }, [isTouchDevice, handleMouseMove, handleElementDetection, handleMouseEnter, handleMouseLeave]);
  if (isTouchDevice) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: cursorRef,
      className: "fixed inset-0 pointer-events-none z-[9999]",
      style: { opacity: isVisible ? 1 : 0 },
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "absolute rounded-full",
            style: {
              width: config.dotSize,
              height: config.dotSize,
              backgroundColor: "#FF7A00",
              x: cursorX,
              y: cursorY,
              translateX: "-50%",
              translateY: "-50%",
              willChange: "transform"
            },
            animate: {
              scale: config.isCrosshair ? 0.5 : 1
            },
            transition: { duration: 0.15 }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "absolute rounded-full",
            style: {
              width: config.ringSize,
              height: config.ringSize,
              x: ringX,
              y: ringY,
              translateX: "-50%",
              translateY: "-50%",
              willChange: "transform",
              border: `${config.ringBorderWidth}px ${config.hasDashArray ? "dashed" : "solid"} #FFB547`,
              boxShadow: `
            inset 0 0 ${config.ringSize / 3}px rgba(255, 181, 71, 0.03),
            0 0 ${config.ringSize / 4}px rgba(255, 122, 0, 0.08)
          `
            },
            animate: {
              width: config.ringSize,
              height: config.ringSize,
              rotate: config.isSpinning ? 360 : 0
            },
            transition: {
              width: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
              height: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
              rotate: {
                duration: config.isSpinning ? 4 : 0,
                repeat: config.isSpinning ? Infinity : 0,
                ease: "linear"
              }
            }
          }
        ),
        config.isCrosshair && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            className: "absolute",
            style: {
              width: config.ringSize,
              height: config.ringSize,
              x: ringX,
              y: ringY,
              translateX: "-50%",
              translateY: "-50%",
              willChange: "transform"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute top-1/2 left-0 right-0 h-px bg-[#FF7A00]",
                  style: {
                    transform: "translateY(-50%)",
                    opacity: 0.8
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute left-1/2 top-0 bottom-0 w-px bg-[#FF7A00]",
                  style: {
                    transform: "translateX(-50%)",
                    opacity: 0.8
                  }
                }
              )
            ]
          }
        )
      ]
    }
  );
}
function LandingPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CustomCursor, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TelemetryBanner, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProblemSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Workspaces, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Faq, {})
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LandingPage, {});
}
export {
  Index as component
};

import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { T as TraceCard, S as SectionHeader } from "./router-BqNrySHH.mjs";
import { A as ArrowRight, b as Brain, c as MessageSquare, C as Check, X, P as PenTool, N as Network, d as FileText, e as ShieldCheck } from "../_libs/lucide-react.mjs";
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
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const COMPARISON_ROWS = [
  {
    need: "Starting point",
    sciforge: "Choose a STEM workspace: solve, sketch, map, quiz, or document.",
    generic: "Start in a blank chat and decide the workflow yourself."
  },
  {
    need: "Study structure",
    sciforge: "Turns questions into notes, quizzes, concept maps, and research portfolios.",
    generic: "Can draft study material, but you have to prompt for each format."
  },
  {
    need: "Math and diagrams",
    sciforge: "Includes a Scribble Lab for equations, sketches, and engineering diagrams.",
    generic: "Mostly text-first unless you add separate tools or uploads."
  },
  {
    need: "Problem solving",
    sciforge: "Blends model reasoning with symbolic math and STEM-specific modules.",
    generic: "Broad reasoning that works across many topics, not one STEM workflow."
  },
  {
    need: "Classroom fit",
    sciforge: "Built around repeatable study artifacts students and teachers can review.",
    generic: "Useful for one-off explanations, but less organized for a course loop."
  }
];
const WORKFLOWS = [
  {
    Icon: PenTool,
    title: "Scribble-to-solution work",
    body: "Students can move from handwritten equations or diagrams into guided correction instead of rewriting everything as a perfect prompt."
  },
  {
    Icon: Network,
    title: "Concept maps and prerequisites",
    body: "SciForge AI can show how topics connect, which helps a learner see the missing step before the answer."
  },
  {
    Icon: FileText,
    title: "Reusable study artifacts",
    body: "Notes, quizzes, and research portfolios stay organized as outputs, not scattered across a long chat history."
  },
  {
    Icon: ShieldCheck,
    title: "Study privacy expectations",
    body: "The product frames research-vault and export behavior clearly for school, lab, and department review."
  }
];
const BEST_FIT = [
  "You want a STEM study system, not just a chat window.",
  "You need notes, quizzes, maps, sketches, and research work in one place.",
  "You care about repeatable workflows for students, labs, or classrooms."
];
const CHATGPT_FIT = [
  "You need a broad assistant for many non-STEM tasks.",
  "You are comfortable writing detailed prompts for every output.",
  "You only need one-off explanations, summaries, or brainstorming."
];
function ComparePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-36 pb-16 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 blueprint-grid [mask-image:radial-gradient(ellipse_at_top,black_25%,transparent_75%)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-5xl px-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground/70", children: "06 · COMPARISON" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-5 font-display text-5xl sm:text-6xl font-extrabold tracking-tight leading-[0.98]", children: "SciForge AI vs ChatGPT for STEM study." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-5 max-w-2xl text-muted-foreground", children: "ChatGPT is a broad general assistant. SciForge AI is a STEM workbench for students and researchers who need structured problem solving, diagrams, notes, quizzes, and concept maps in one study flow." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex flex-wrap items-center justify-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/pricing",
              className: "inline-flex items-center gap-2 rounded-lg brand-gradient px-4 py-3 text-sm font-semibold text-background shadow-[0_0_28px_-4px_color-mix(in_oklab,var(--brand-orange)_70%,transparent)]",
              children: [
                "See pricing",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => {
                localStorage.setItem("auth_redirect_target", "core-intelligence-console");
                window.location.href = "https://sci-forge-aii.vercel.app/";
              },
              className: "inline-flex items-center gap-2 rounded-lg border border-border bg-card/60 px-4 py-3 text-sm font-semibold text-foreground hover:border-orange/60",
              children: [
                "Try the workspace",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 lg:grid-cols-[1fr_1.6fr_1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TraceCard, { className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange/15 text-orange", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-5 font-display text-2xl font-extrabold tracking-tight", children: "SciForge AI" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: "Purpose-built around STEM learning workflows, so the tool starts closer to the work a student or researcher is trying to finish." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TraceCard, { className: "h-full border-orange/50 shadow-[0_30px_80px_-30px_color-mix(in_oklab,var(--brand-orange)_60%,transparent)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[11px] uppercase tracking-[0.28em] text-orange", children: "Main difference" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-3xl font-extrabold tracking-tight", children: "SciForge AI packages the STEM workflow around the answer." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-relaxed text-muted-foreground", children: "A generic chat tool can explain a formula. SciForge AI is built to carry the surrounding study loop: sketch analysis, concept dependencies, quiz generation, notes, and research artifacts." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TraceCard, { className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan/15 text-cyan", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-5 font-display text-2xl font-extrabold tracking-tight", children: "ChatGPT" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: "Strong as a broad assistant, especially when you already know what to ask and how to shape the output." })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          kicker: "SIDE-BY-SIDE",
          title: "Where the workflow differs.",
          sub: "This is not a claim that broad chat tools are bad. It is the difference between a general assistant and a study system tuned for STEM work."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 overflow-hidden rounded-lg border border-border bg-card/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[0.9fr_1.35fr_1.35fr] border-b border-border bg-background/45 px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Need" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "SciForge AI" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Generic chat tool" })
        ] }),
        COMPARISON_ROWS.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "grid gap-4 border-b border-border px-4 py-4 text-sm last:border-b-0 md:grid-cols-[0.9fr_1.35fr_1.35fr]",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-foreground", children: row.need }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 text-foreground/85", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-orange" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: row.sciforge })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/70" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: row.generic })
              ] })
            ]
          },
          row.need
        ))
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          kicker: "SPECIALIZED STEM FLOW",
          title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            "Built for the work around",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "brand-gradient-text", children: "the final answer." })
          ] }),
          sub: "The value is in the supporting workflow: reading the problem, exposing gaps, creating practice, and keeping the artifacts usable later."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: WORKFLOWS.map(({ Icon, title, body }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TraceCard, { className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-9 w-9 items-center justify-center rounded-lg bg-orange/15 text-orange", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-lg font-bold tracking-tight", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: body })
      ] }) }) }, title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TraceCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-extrabold tracking-tight", children: "Choose SciForge AI when" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-3 text-sm", children: BEST_FIT.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-orange" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/85", children: item })
        ] }, item)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TraceCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-extrabold tracking-tight", children: "Choose ChatGPT when" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-3 text-sm", children: CHATGPT_FIT.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-cyan" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/85", children: item })
        ] }, item)) })
      ] }) })
    ] }) }) })
  ] });
}
const SplitComponent = ComparePage;
export {
  SplitComponent as component
};

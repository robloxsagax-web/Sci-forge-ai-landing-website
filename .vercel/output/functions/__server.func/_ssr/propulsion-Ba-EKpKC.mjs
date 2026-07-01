import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SectionHeader, T as TraceCard } from "./router-Dw5f5nRo.mjs";
import { G as GraduationCap, F as FlaskConical, a as Sparkles, L as Layers } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
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
const COLUMNS = [
  {
    Icon: GraduationCap,
    code: "A",
    kicker: "For students closing the gap",
    title: "Break the STEM bottleneck.",
    body: "Convert intimidating text documents into interactive concept dependency nodes and modular briefs that match your processing pace.",
    tone: "orange",
    chips: ["Concept Map", "Modular Briefs", "Adaptive Drills"]
  },
  {
    Icon: FlaskConical,
    code: "B",
    kicker: "For researchers compressing the loop",
    title: "Accelerate the investigation.",
    body: "Automate deep variable derivations, manage complex symbolic equations, and archive every technical artifact into secure vaults.",
    tone: "cyan",
    chips: ["Symbolic Algebra", "Vault Archive", "Citation-Ready"]
  }
];
function TargetSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        kicker: "04 · WORKSPACE ADAPTATION",
        title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Two minds.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "One ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "brand-gradient-text", children: "propulsion stack." })
        ] }),
        sub: "SciForge adapts its reasoning chain and visual grammar to who's holding it — undergrad cramming a final, or principal investigator chasing a deadline."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid lg:grid-cols-2 gap-5", children: COLUMNS.map((c, i) => {
      const Icon = c.Icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6, delay: i * 0.1 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(TraceCard, { className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-7", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `inline-flex h-11 w-11 items-center justify-center rounded-xl ${c.tone === "orange" ? "bg-orange/15 text-orange" : "bg-cyan/15 text-cyan"}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: [
                "Column ",
                c.code
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground", children: c.kicker }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display text-2xl font-extrabold tracking-tight", children: c.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: c.body }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex flex-wrap gap-1.5", children: c.chips.map((chip) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "rounded-full border border-border bg-background/40 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
                children: chip
              },
              chip
            )) })
          ] }) })
        },
        c.code
      );
    }) })
  ] }) });
}
function ClassroomIntegration() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TraceCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[11px] uppercase tracking-[0.28em] text-orange", children: "05 · INTUITIVE PLATFORM INTEGRATION" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "mt-4 font-display text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight", children: [
        "One ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "brand-gradient-text", children: "fluid surface" }),
        " ",
        "for deep focus."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground max-w-md", children: "SciForge blends deep reasoning intelligence with structured classroom organization. Bring your existing research assets, notes, and technical sketches together into a fluid workspace designed for deep focus." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/pricing",
            className: "inline-flex items-center gap-1.5 rounded-lg brand-gradient px-4 py-2 text-xs font-semibold text-background",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
              "See pricing"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/architecture",
            className: "inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-xs font-semibold hover:border-orange/60",
            children: "Read the architecture"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative border-t lg:border-t-0 lg:border-l border-border bg-background/40 p-6 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3", children: [
        ["Notes", "138"],
        ["Quizzes", "42"],
        ["Sketches", "27"],
        ["Derivations", "61"],
        ["Citations", "204"],
        ["Vault size", "1.2GB"]
      ].map(([k, v], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 8 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.06 },
          className: "rounded-lg border border-border bg-card/50 p-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: k }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-display text-lg font-bold", children: v })
          ]
        },
        k
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 rounded-lg border border-border bg-card/50 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-mentor", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "h-3.5 w-3.5" }),
          " live · workspace.timeline"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 space-y-2 font-mono text-[11px]", children: [
          ["09:14", "Imported PDF · 14p"],
          ["09:22", "Generated 12 flashcards"],
          ["09:41", "Ran scribble diff · 0.4mm"],
          ["10:03", "Vault sync ✓"]
        ].map(([t, e]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/80", children: e })
        ] }, t)) })
      ] })
    ] })
  ] }) }) }) });
}
function PropulsionPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-36 pb-12 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 blueprint-grid [mask-image:radial-gradient(ellipse_at_top,black_25%,transparent_75%)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-5xl px-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground/70", children: "ACADEMIC PROPULSION" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-5 font-display text-5xl sm:text-6xl font-extrabold tracking-tight leading-[0.98]", children: [
          "Workspaces that",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "brand-gradient-text", children: "adapt to the mind." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-5 max-w-2xl text-muted-foreground", children: "From first-year survival mode to principal investigator velocity — the same engine, two distinct propulsion profiles." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TargetSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ClassroomIntegration, {})
  ] });
}
const SplitComponent = PropulsionPage;
export {
  SplitComponent as component
};

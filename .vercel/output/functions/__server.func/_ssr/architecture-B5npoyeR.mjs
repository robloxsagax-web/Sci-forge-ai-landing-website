import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { a as TelemetryBanner, T as TraceCard, S as SectionHeader } from "./router-CBjVi-4k.mjs";
import { P as PenTool, b as Cpu, c as ChevronRight, d as Gauge } from "../_libs/lucide-react.mjs";
import { m as motion, u as useInView } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function ScribbleLab() {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { ref, className: "relative py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: -24 },
        animate: inView ? { opacity: 1, x: 0 } : {},
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeader,
            {
              kicker: "03 · CANVAS VECTOR INGESTION",
              title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                "Your sketch.",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "Reasoned, ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "brand-gradient-text", children: "line by line." })
              ] }),
              sub: "A 60Hz canvas processing matrix converting hand-drawn input shapes into clean SVG normalized paths for instant architectural and geometric reasoning."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 space-y-3", children: [
            ["Vector ingest", "60Hz canvas → SVG path normalization"],
            ["Reasoning chain", "Symbolic algebra + structural physics solver"],
            ["Correction overlay", "Red-trace deltas with citation to the rule"]
          ].map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 inline-flex h-5 w-5 items-center justify-center rounded-md bg-orange/15 text-orange", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3.5 w-3.5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm", children: k }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs text-muted-foreground", children: v })
            ] })
          ] }, k)) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 30, scale: 0.96 },
        animate: inView ? { opacity: 1, y: 0, scale: 1 } : {},
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(TraceCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-3 py-2 font-mono text-[10px] text-muted-foreground border-b border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-orange animate-pulse-dot" }),
              "scribble.lab/session-7f3a"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-cyan", children: "VECTOR-DIFF v4.1" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-[4/3] blueprint-grid rounded-xl bg-background/40 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 400 300", className: "absolute inset-0 h-full w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "strokeGrad", x1: "0", y1: "0", x2: "1", y2: "1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "oklch(0.74 0.19 50)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "oklch(0.82 0.15 75)" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.path,
              {
                d: "M40 240 L200 80 L360 240 Z M40 240 L360 240 M120 240 L200 80 M280 240 L200 80 M120 240 L280 240",
                stroke: "url(#strokeGrad)",
                strokeWidth: "2",
                fill: "none",
                initial: { pathLength: 0 },
                animate: inView ? { pathLength: 1 } : {},
                transition: { duration: 2.2, ease: "easeInOut" }
              }
            ),
            [
              [40, 240],
              [200, 80],
              [360, 240],
              [120, 240],
              [280, 240]
            ].map(([x, y], i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.circle,
              {
                cx: x,
                cy: y,
                r: "4",
                fill: "oklch(0.74 0.19 50)",
                initial: { scale: 0 },
                animate: inView ? { scale: 1 } : {},
                transition: { delay: 1.4 + i * 0.1, type: "spring", stiffness: 300 }
              },
              i
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.g,
              {
                initial: { opacity: 0 },
                animate: inView ? { opacity: 1 } : {},
                transition: { delay: 2.4, duration: 0.6 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.circle,
                    {
                      cx: "200",
                      cy: "80",
                      r: "14",
                      fill: "none",
                      stroke: "oklch(0.7 0.19 22)",
                      strokeWidth: "1.5",
                      strokeDasharray: "3 3",
                      animate: { r: [14, 18, 14], opacity: [1, 0.6, 1] },
                      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "text",
                    {
                      x: "220",
                      y: "70",
                      fill: "oklch(0.7 0.19 22)",
                      fontSize: "10",
                      fontFamily: "JetBrains Mono",
                      children: "apex load → axial Fmax"
                    }
                  )
                ]
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2 p-3 font-mono text-[10px]", children: [
            ["NODES", "5", false],
            ["MEMBERS", "7", false],
            ["DEFLECT", "0.4mm", true]
          ].map(([k, v, hot]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `rounded-md border px-2 py-1.5 ${hot ? "border-orange/40 bg-orange/10 animate-pulse" : "border-border bg-background/40"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: k }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-xs ${hot ? "text-orange" : "text-foreground"}`, children: v })
              ]
            },
            k
          )) })
        ] }) })
      }
    )
  ] }) });
}
function HybridOrchestration() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TraceCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Cpu, { className: "h-3.5 w-3.5 text-orange" }),
          " orchestration.bus"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-mentor", children: "↑ 4,201 req/s" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 400 220", className: "mt-4 h-56 w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "lineGrad", x1: "0", y1: "0", x2: "1", y2: "0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "oklch(0.74 0.19 50)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "oklch(0.74 0.13 210)" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "40", cy: "110", r: "10", fill: "oklch(0.74 0.19 50)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "20", y: "140", fill: "currentColor", fontSize: "9", fontFamily: "JetBrains Mono", children: "query.in" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "140", y: "95", width: "60", height: "30", rx: "6", fill: "oklch(0.2 0.008 260)", stroke: "oklch(0.74 0.19 50)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "148", y: "114", fill: "currentColor", fontSize: "9", fontFamily: "JetBrains Mono", children: "router" }),
        [40, 110, 180].map((y, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.path,
          {
            d: `M50 110 C 90 110, 100 ${y}, 140 ${y}`,
            stroke: "url(#lineGrad)",
            strokeWidth: "1.5",
            fill: "none",
            initial: { pathLength: 0 },
            animate: { pathLength: 1 },
            transition: { duration: 1.2, delay: 0.1 * i }
          },
          i
        )),
        [
          [300, 50, "LLAMA-3.3 · reasoning"],
          [300, 110, "GEMINI-PRO · long-ctx"],
          [300, 170, "SYMPY · symbolic"]
        ].map(([x, y, lbl], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.path,
            {
              d: `M200 110 C 240 110, 250 ${y}, 290 ${y}`,
              stroke: "oklch(0.74 0.13 210)",
              strokeWidth: "1.5",
              fill: "none",
              initial: { pathLength: 0 },
              animate: { pathLength: 1 },
              transition: { duration: 1.2, delay: 0.4 + 0.1 * i }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.circle,
            {
              cx: x,
              cy: y,
              r: "8",
              fill: "oklch(0.74 0.13 210)",
              initial: { scale: 0 },
              animate: { scale: 1 },
              transition: { delay: 1.4 + i * 0.1 }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "text",
            {
              x: x + 14,
              y: y + 3,
              fill: "currentColor",
              fontSize: "9",
              fontFamily: "JetBrains Mono",
              children: lbl
            }
          )
        ] }, i))
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        kicker: "04 · MULTI-MODEL HYBRID",
        title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Three engines.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "brand-gradient-text", children: "Zero hallucinations." })
        ] }),
        sub: "Simultaneously running multi-model tasks. Leveraging specialized primary reasoning cores alongside long-context analysts to process massive workloads with zero data hallucinations."
      }
    ) })
  ] }) });
}
function EloDiagnostics() {
  const bars = [42, 58, 71, 64, 79, 88, 82, 91];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        kicker: "05 · ACADEMIC ELO DIAGNOSTICS",
        title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Calibration that",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "brand-gradient-text", children: "moves with you." })
        ] }),
        sub: "Testing modules built with active calibration engines. Your skill profile updates dynamically over an interactive curve, shifting difficulty tiers up or down based on your performance."
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TraceCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Gauge, { className: "h-3.5 w-3.5 text-orange" }),
          " elo.curve / live"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-cyan", children: "1842 → 1907" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex items-end gap-2 h-44", children: bars.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { height: 0 },
          whileInView: { height: `${b}%` },
          viewport: { once: true },
          transition: { duration: 0.7, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] },
          className: "flex-1 rounded-t-md bg-gradient-to-t from-orange/30 via-orange/70 to-gold relative overflow-hidden",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-x-0 top-1 text-center font-mono text-[9px] text-background/80", children: 1700 + b * 3 })
        },
        i
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 grid grid-cols-8 gap-2 font-mono text-[9px] text-muted-foreground text-center", children: bars.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        "T",
        i + 1
      ] }, i)) })
    ] }) })
  ] }) });
}
function ArchitecturePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-36 pb-12 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 blueprint-grid [mask-image:radial-gradient(ellipse_at_top,black_25%,transparent_75%)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-5xl px-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground/70", children: "03 · DEEP ENGINE ARCHITECTURE" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-5 font-display text-5xl sm:text-6xl font-extrabold tracking-tight leading-[0.98]", children: [
          "Engineered for",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "brand-gradient-text", children: "cognitive depth." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-5 max-w-2xl text-muted-foreground", children: "Moving past general-purpose chatbots. SciForge is fine-tuned to solve structural, mathematical, and spatial data blockades." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 inline-flex items-center gap-2 rounded-full border border-orange/40 bg-orange/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-orange", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PenTool, { className: "h-3.5 w-3.5" }),
          " Scribble · Hybrid · Elo"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TelemetryBanner, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HybridOrchestration, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScribbleLab, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EloDiagnostics, {})
  ] });
}
const SplitComponent = ArchitecturePage;
export {
  SplitComponent as component
};

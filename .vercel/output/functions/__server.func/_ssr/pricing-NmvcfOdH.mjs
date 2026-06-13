import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { T as TraceCard, S as SectionHeader } from "./router-D5KVh5vY.mjs";
import { G as GraduationCap, a as Sparkles, B as Building2, C as Check } from "../_libs/lucide-react.mjs";
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
const PLANS = [
  {
    Icon: GraduationCap,
    name: "Core Portal",
    tag: "Student Tier",
    price: "$0",
    period: "/ Free Account",
    cta: "Open free account",
    href: "/",
    featured: false,
    signupRedirect: true,
    items: [
      "Core Intelligence Console",
      "Basic Notes Generator access",
      "Standard Concept Maps",
      "Open adaptive chat interface"
    ]
  },
  {
    Icon: Sparkles,
    name: "Quantum Engine",
    tag: "Premium Researcher · Recommended",
    price: "$10",
    period: "/ Month",
    cta: "Initialize Quantum Engine",
    href: "/",
    featured: true,
    signupRedirect: true,
    items: [
      "Unrestricted Scribble Analysis Lab",
      "High-precision Quantum Research Engine",
      "Deep-tier Quiz Generators",
      "Custom Research Portfolios"
    ]
  },
  {
    Icon: Building2,
    name: "Institutional Grid",
    tag: "University / Lab Network",
    price: "Custom",
    period: "Pricing",
    cta: "Request licensing quote",
    href: "/",
    featured: false,
    signupRedirect: false,
    items: [
      "Multi-seat deployment pipelines",
      "Admin diagnostic overview suites",
      "Dedicated server allocations",
      "SLA + private model routing"
    ]
  }
];
function PricingPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-36 pb-12 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 blueprint-grid [mask-image:radial-gradient(ellipse_at_top,black_25%,transparent_75%)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-5xl px-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground/70", children: "05 · MEMBERSHIP INFRASTRUCTURE" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-5 font-display text-5xl sm:text-6xl font-extrabold tracking-tight leading-[0.98]", children: [
          "Transparent value.",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "brand-gradient-text", children: "Engine-grade scale." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-5 max-w-2xl text-muted-foreground", children: "One workbench, three activation tiers — calibrated for the student, the researcher, and the institution." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid lg:grid-cols-3 gap-5", children: PLANS.map((p, i) => {
      const Icon = p.Icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6, delay: i * 0.08 },
          className: p.featured ? "lg:-mt-4" : "",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            TraceCard,
            {
              className: `h-full ${p.featured ? "border-orange/60 shadow-[0_30px_80px_-30px_color-mix(in_oklab,var(--brand-orange)_60%,transparent)]" : ""}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-7 flex flex-col h-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `inline-flex h-10 w-10 items-center justify-center rounded-xl ${p.featured ? "brand-gradient text-background" : "bg-orange/15 text-orange"}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" })
                    }
                  ),
                  p.featured && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full border border-orange/40 bg-orange/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-orange", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-orange animate-pulse-dot" }),
                    "Recommended"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display text-2xl font-extrabold tracking-tight", children: p.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground", children: p.tag }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-baseline gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `font-display text-4xl font-extrabold ${p.featured ? "brand-gradient-text" : ""}`,
                      children: p.price
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-muted-foreground", children: p.period })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-2.5 text-sm", children: p.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Check,
                    {
                      className: `mt-0.5 h-4 w-4 shrink-0 ${p.featured ? "text-orange" : "text-mentor"}`
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/85", children: item })
                ] }, item)) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: p.signupRedirect ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => {
                      localStorage.setItem("auth_default_tab", "signup");
                      window.location.href = "https://sci-forge-aii.vercel.app/";
                    },
                    className: `inline-flex w-full items-center justify-center gap-1.5 rounded-xl px-4 py-3 text-sm font-semibold transition cursor-pointer ${p.featured ? "brand-gradient text-background shadow-[0_0_28px_-4px_color-mix(in_oklab,var(--brand-orange)_70%,transparent)]" : "border border-border bg-card/60 hover:border-orange/60"}`,
                    children: p.cta
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: p.href,
                    className: `inline-flex w-full items-center justify-center gap-1.5 rounded-xl px-4 py-3 text-sm font-semibold transition ${p.featured ? "brand-gradient text-background shadow-[0_0_28px_-4px_color-mix(in_oklab,var(--brand-orange)_70%,transparent)]" : "border border-border bg-card/60 hover:border-orange/60"}`,
                    children: p.cta
                  }
                ) })
              ] })
            }
          )
        },
        p.name
      );
    }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          kicker: "FAQ MATRIX",
          title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            "Honest answers.",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "brand-gradient-text", children: "Zero marketing fog." })
          ] }),
          align: "center"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid sm:grid-cols-2 gap-4", children: [
        [
          "Do you train on my data?",
          "Never. The Research Vault runs in zero-mock mode — AES-256 sealed, no training pipeline ingest."
        ],
        [
          "Which models power Quantum Engine?",
          "Llama 3.3 70B as primary reasoning core, Gemini Core Pro for long-context analysis, plus a SymPy/JAX symbolic layer."
        ],
        [
          "Can I downgrade or cancel?",
          "Anytime. Your portfolio and notes export cleanly to PDF, Markdown, or LaTeX before billing closes."
        ],
        [
          "Institutional pilot timeline?",
          "Two-week pilot, dedicated allocation. Ping the licensing team and you'll have a sandbox by Friday."
        ]
      ].map(([q, a]) => /* @__PURE__ */ jsxRuntimeExports.jsx(TraceCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-base font-bold", children: q }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-sm text-muted-foreground", children: a })
      ] }) }, q)) })
    ] }) })
  ] });
}
const SplitComponent = PricingPage;
export {
  SplitComponent as component
};

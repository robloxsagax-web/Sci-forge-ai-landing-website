import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { T as Type, S as Sun, M as Moon, A as ArrowRight } from "../_libs/lucide-react.mjs";
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
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const appCss = "/assets/styles-B9PmUTO2.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function useChrome() {
  const [theme, setTheme] = reactExports.useState("dark");
  const [dyslexic, setDyslexic] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
  }, [theme]);
  reactExports.useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dyslexic", dyslexic);
    root.classList.toggle("a11y-aaa", dyslexic);
  }, [dyslexic]);
  return { theme, setTheme, dyslexic, setDyslexic };
}
function useClock() {
  const [now, setNow] = reactExports.useState(null);
  reactExports.useEffect(() => {
    setNow(/* @__PURE__ */ new Date());
    const id = window.setInterval(() => setNow(/* @__PURE__ */ new Date()), 1e3);
    return () => window.clearInterval(id);
  }, []);
  if (!now) return "--:--:--";
  return now.toLocaleTimeString("en-GB", { hour12: false });
}
function BrandMark() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { "aria-hidden": true, className: "relative inline-flex h-7 w-7 items-center justify-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.span,
      {
        initial: { scale: 0 },
        animate: { scale: 1 },
        transition: { duration: 0.1, delay: 0.1, ease: "easeOut" },
        className: "absolute h-2.5 w-2.5 rounded-full bg-orange shadow-[0_0_18px_4px_color-mix(in_oklab,var(--brand-orange)_70%,transparent)]"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.svg, { viewBox: "0 0 28 28", className: "absolute h-7 w-7 animate-ring-orbit", children: [
      { rotate: 0, stroke: "var(--brand-orange)", op: 0.85, delay: 0.15 },
      { rotate: 60, stroke: "var(--brand-gold)", op: 0.7, delay: 0.25 },
      { rotate: -60, stroke: "var(--brand-cyan)", op: 0.55, delay: 0.35 }
    ].map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.ellipse,
      {
        cx: "14",
        cy: "14",
        rx: "12",
        ry: "5",
        fill: "none",
        stroke: r.stroke,
        strokeOpacity: r.op,
        strokeWidth: "1",
        transform: `rotate(${r.rotate} 14 14)`,
        initial: { pathLength: 0 },
        animate: { pathLength: 1 },
        transition: { duration: 0.4, delay: r.delay, ease: [0.16, 1, 0.3, 1] }
      },
      i
    )) })
  ] });
}
function ShimmerNavLink({ to, children }) {
  const [hot, setHot] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Link,
    {
      to,
      onMouseEnter: () => {
        setHot(false);
        requestAnimationFrame(() => setHot(true));
      },
      onAnimationEnd: () => setHot(false),
      className: "relative inline-block text-foreground/80 hover:text-foreground transition-colors",
      activeProps: { className: "text-orange" },
      activeOptions: { exact: true },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: hot ? "glyph-shimmer" : "", children })
    }
  );
}
const NAV_LINKS = [
  ["Workspaces", "/"],
  ["Core Intelligence", "/architecture"],
  ["Scribble Lab", "/propulsion"],
  ["Pricing", "/pricing"]
];
function Nav({ theme, setTheme, dyslexic, setDyslexic }) {
  const clock = useClock();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "fixed top-0 inset-x-0 z-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-4 max-w-6xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-2xl border border-border bg-background/70 px-4 py-2.5 backdrop-blur-xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.4)]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BrandMark, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-[15px] font-extrabold tracking-[0.18em] uppercase", children: [
        "SCI",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: "FORGE" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-[#FF7A00] to-[#FFB547] bg-clip-text text-transparent", children: "AI" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "hidden md:inline-flex items-center gap-1.5 ml-3 pl-3 border-l border-border font-mono text-[10px] text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-mentor animate-pulse-dot" }),
        clock
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-7 text-[13px]", children: NAV_LINKS.map(([l, href]) => /* @__PURE__ */ jsxRuntimeExports.jsx(ShimmerNavLink, { to: href, children: l }, l)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setDyslexic(!dyslexic),
          "aria-pressed": dyslexic,
          "aria-label": "Toggle dyslexia-friendly typeface and AAA contrast",
          title: "Accessibility: OpenDyslexic + AAA contrast",
          className: `group inline-flex h-9 items-center gap-1.5 rounded-lg border px-2.5 text-xs font-mono transition-all ${dyslexic ? "bg-orange/20 text-orange border-orange/50 shadow-[0_0_18px_-4px_color-mix(in_oklab,var(--brand-orange)_70%,transparent)]" : "bg-card/40 text-muted-foreground hover:text-foreground border-border"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Type, { className: "h-3.5 w-3.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold tracking-wider", children: "A+" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
          "aria-label": "Toggle light/dark theme",
          className: "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card/40 text-muted-foreground hover:text-foreground transition-colors",
          children: theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-4 w-4" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { whileHover: { scale: 1.04 }, whileTap: { scale: 0.97 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => window.location.href = "https://sci-forge-aii.vercel.app/",
          className: "group relative hidden sm:inline-flex h-9 items-center gap-1.5 overflow-hidden rounded-lg brand-gradient px-3 text-xs font-semibold text-background shadow-[0_0_24px_-4px_color-mix(in_oklab,var(--brand-orange)_70%,transparent)] cursor-pointer",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                "aria-hidden": true,
                className: "absolute inset-0 bg-[linear-gradient(115deg,transparent_30%,rgba(255,255,255,0.45)_50%,transparent_70%)] bg-[length:220%_100%] animate-[glyph-shimmer_2.6s_linear_infinite]"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative", children: "Launch Workspace" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "relative h-3.5 w-3.5" })
          ]
        }
      ) })
    ] })
  ] }) }) });
}
const TELEMETRY = [
  "MODEL: LLAMA-3.3-70B  LATENCY: 42ms  SPEED: 85 t/s",
  "GEMINI-CORE-PRO  CTX: 1.0M  STREAM: STABLE",
  "SCRIBBLE-ENGINE: VECTOR-DIFF v4.1  FRAMES: 60Hz",
  "GRAPH-SOLVER: NODES 1,284  EDGES 3,902  OK",
  "ADAPTIVE-MENTOR: ONLINE  CONF 0.97",
  "RESEARCH-VAULT: AES-256  ZERO-MOCK MODE",
  "QUANTUM-ENGINE: SYMPY+JAX  PRECISION 1e-14",
  "QUIZ-CALIBRATOR: ELO 1842 → 1907"
];
function TelemetryBanner() {
  const doubled = reactExports.useMemo(() => [...TELEMETRY, ...TELEMETRY, ...TELEMETRY], []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "aria-hidden": true, className: "group relative overflow-hidden border-y border-border bg-background/40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-max animate-marquee-x whitespace-nowrap py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground/40 group-hover:text-cyan/80 transition-colors", children: doubled.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-6 flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-orange/70" }),
      "[",
      t,
      "]"
    ] }, i)) })
  ] });
}
function SectionHeader({
  kicker,
  title,
  sub,
  align = "left"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[11px] uppercase tracking-[0.28em] text-orange", children: kicker }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.02]", children: title }),
    sub && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "p",
      {
        className: `mt-4 text-base text-muted-foreground max-w-2xl ${align === "center" ? "mx-auto" : ""}`,
        children: sub
      }
    )
  ] });
}
function TraceCard({
  children,
  className = "",
  onClick
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      onClick,
      whileHover: { scale: 1.025, y: -2 },
      transition: { type: "spring", mass: 0.5, stiffness: 120, damping: 16 },
      className: `group relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-[#FF7A00] hover:shadow-[0_0_25px_rgba(255,122,0,0.12)] ${className}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-[-100%] animate-[trace-spin_6s_linear_infinite]",
              style: {
                background: "conic-gradient(from 0deg, transparent 0 60%, oklch(0.74 0.19 50) 70%, oklch(0.82 0.15 75) 80%, transparent 90% 100%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-[1px] rounded-[15px] bg-card" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -bottom-12 left-1/2 -z-10 h-24 w-3/4 -translate-x-1/2 rounded-full bg-orange/0 group-hover:bg-orange/20 blur-2xl transition-colors duration-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children })
      ]
    }
  );
}
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border bg-background/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[13px]", children: [
      ["Core Dashboard", "/"],
      ["System Documentation", "/architecture"],
      ["API Pipeline", "/architecture"],
      ["Institutional Licensing", "/pricing"]
    ].map(([l, href]) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: href,
        className: "text-foreground/80 hover:text-orange transition-colors",
        children: l
      },
      l
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-mentor/40 bg-mentor/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-mentor", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-mentor animate-pulse-dot" }),
      "All systems nominal · v4.1 Aurora"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[11px] text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "© 2026 SCIFORGEAI" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tracking-[0.22em] uppercase", children: "Forged for STEM" })
    ] })
  ] }) });
}
function SiteShell({ children }) {
  const chrome = useChrome();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "top", className: "relative min-h-screen bg-background text-foreground overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { ...chrome }),
    children,
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$4 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SciForge AI — The Cognitive Engine for STEM" },
      { name: "description", content: "SciForge AI is the AI STEM mentor that fuses ChatGPT-grade reasoning, Apple Intelligence polish, and a Google-Classroom workflow into one accessible workspace." },
      { name: "author", content: "SciForge AI" },
      { property: "og:title", content: "SciForge AI — The Cognitive Engine for STEM" },
      { property: "og:description", content: "An AI STEM mentor engineered for deep reasoning, scribble analysis, and adaptive academic propulsion." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.cdnfonts.com/css/opendyslexic"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", className: "dark", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$4.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx("main", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SiteShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }) }) });
}
const $$splitComponentImporter$3 = () => import("./propulsion-RYyxDfGb.mjs");
const Route$3 = createFileRoute("/propulsion")({
  head: () => ({
    meta: [{
      title: "Academic Propulsion — SciForge AI"
    }, {
      name: "description",
      content: "Workspaces tailored for students closing the gap and researchers compressing the loop."
    }, {
      property: "og:title",
      content: "Academic Propulsion — SciForge AI"
    }, {
      property: "og:description",
      content: "Two distinct propulsion profiles. One adaptive workbench for STEM mastery."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./pricing-Dkw7oISy.mjs");
const Route$2 = createFileRoute("/pricing")({
  head: () => ({
    meta: [{
      title: "Pricing — SciForge AI"
    }, {
      name: "description",
      content: "Free Student Core, Rs. 2,500/mo Quantum Engine for researchers, and custom Institutional Grid licensing."
    }, {
      property: "og:title",
      content: "Pricing — SciForge AI"
    }, {
      property: "og:description",
      content: "Three activation tiers calibrated for the student, the researcher, and the institution."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./architecture-B5npoyeR.mjs");
const Route$1 = createFileRoute("/architecture")({
  head: () => ({
    meta: [{
      title: "Architecture — SciForge AI"
    }, {
      name: "description",
      content: "Multi-model hybrid orchestration, 60Hz canvas vector ingestion, and strict academic Elo diagnostics."
    }, {
      property: "og:title",
      content: "Architecture — SciForge AI"
    }, {
      property: "og:description",
      content: "How SciForge fuses Llama 3.3, Gemini Core Pro, and a symbolic solver into one engine."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-DyzvIBxs.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "SciForge AI — The Cognitive Engine for STEM"
    }, {
      name: "description",
      content: "AI STEM mentor with scribble analysis, quantum research, adaptive quizzes, and a dyslexia-friendly accessibility engine."
    }, {
      property: "og:title",
      content: "SciForge AI — The Cognitive Engine for STEM"
    }, {
      property: "og:description",
      content: "ChatGPT + Apple Intelligence + Google Classroom, engineered for STEM mastery."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const PropulsionRoute = Route$3.update({
  id: "/propulsion",
  path: "/propulsion",
  getParentRoute: () => Route$4
});
const PricingRoute = Route$2.update({
  id: "/pricing",
  path: "/pricing",
  getParentRoute: () => Route$4
});
const ArchitectureRoute = Route$1.update({
  id: "/architecture",
  path: "/architecture",
  getParentRoute: () => Route$4
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$4
});
const rootRouteChildren = {
  IndexRoute,
  ArchitectureRoute,
  PricingRoute,
  PropulsionRoute
};
const routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  SectionHeader as S,
  TraceCard as T,
  TelemetryBanner as a,
  router as r
};

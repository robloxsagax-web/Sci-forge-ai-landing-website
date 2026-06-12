import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Sun, Moon, Type, ArrowRight } from "lucide-react";

/* ===========================================================
 * SciForge AI — Shared site chrome
 * Used by every route via the root layout.
 * =========================================================== */

type Theme = "dark" | "light";

export function useChrome() {
  const [theme, setTheme] = useState<Theme>("dark");
  // Native default: OpenDyslexic typeface ON (per global spec)
  const [dyslexic, setDyslexic] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dyslexic", dyslexic);
    root.classList.toggle("a11y-aaa", dyslexic);
  }, [dyslexic]);

  return { theme, setTheme, dyslexic, setDyslexic };
}

function useClock() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);
  if (!now) return "--:--:--";
  return now.toLocaleTimeString("en-GB", { hour12: false });
}

export function BrandMark() {
  return (
    <span aria-hidden className="relative inline-flex h-7 w-7 items-center justify-center">
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.1, delay: 0.1, ease: "easeOut" }}
        className="absolute h-2.5 w-2.5 rounded-full bg-orange shadow-[0_0_18px_4px_color-mix(in_oklab,var(--brand-orange)_70%,transparent)]"
      />
      <motion.svg viewBox="0 0 28 28" className="absolute h-7 w-7 animate-ring-orbit">
        {[
          { rotate: 0, stroke: "var(--brand-orange)", op: 0.85, delay: 0.15 },
          { rotate: 60, stroke: "var(--brand-gold)", op: 0.7, delay: 0.25 },
          { rotate: -60, stroke: "var(--brand-cyan)", op: 0.55, delay: 0.35 },
        ].map((r, i) => (
          <motion.ellipse
            key={i}
            cx="14"
            cy="14"
            rx="12"
            ry="5"
            fill="none"
            stroke={r.stroke}
            strokeOpacity={r.op}
            strokeWidth="1"
            transform={`rotate(${r.rotate} 14 14)`}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.4, delay: r.delay, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
      </motion.svg>
    </span>
  );
}

function ShimmerNavLink({ to, children }: { to: string; children: string }) {
  const [hot, setHot] = useState(false);
  return (
    <Link
      to={to}
      onMouseEnter={() => {
        setHot(false);
        requestAnimationFrame(() => setHot(true));
      }}
      onAnimationEnd={() => setHot(false)}
      className="relative inline-block text-foreground/80 hover:text-foreground transition-colors"
      activeProps={{ className: "text-orange" }}
      activeOptions={{ exact: true }}
    >
      <span className={hot ? "glyph-shimmer" : ""}>{children}</span>
    </Link>
  );
}

const NAV_LINKS: [string, string][] = [
  ["Workspaces", "/"],
  ["Core Intelligence", "/architecture"],
  ["Scribble Lab", "/propulsion"],
  ["Pricing", "/pricing"],
];

export function Nav({ theme, setTheme, dyslexic, setDyslexic }: ReturnType<typeof useChrome>) {
  const clock = useClock();
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto mt-4 max-w-6xl px-4">
        <div className="flex items-center justify-between rounded-2xl border border-border bg-background/70 px-4 py-2.5 backdrop-blur-xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.4)]">
          <Link to="/" className="flex items-center gap-2.5">
            <BrandMark />
            <span className="font-display text-[15px] font-extrabold tracking-[0.18em] uppercase">
              Sci<span className="text-orange">·</span>Forge AI
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 ml-3 pl-3 border-l border-border font-mono text-[10px] text-muted-foreground">
              <span className="h-1 w-1 rounded-full bg-mentor animate-pulse-dot" />
              {clock}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-7 text-[13px]">
            {NAV_LINKS.map(([l, href]) => (
              <ShimmerNavLink key={l} to={href}>
                {l}
              </ShimmerNavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setDyslexic(!dyslexic)}
              aria-pressed={dyslexic}
              aria-label="Toggle dyslexia-friendly typeface and AAA contrast"
              title="Accessibility: OpenDyslexic + AAA contrast"
              className={`group inline-flex h-9 items-center gap-1.5 rounded-lg border px-2.5 text-xs font-mono transition-all ${
                dyslexic
                  ? "bg-orange/20 text-orange border-orange/50 shadow-[0_0_18px_-4px_color-mix(in_oklab,var(--brand-orange)_70%,transparent)]"
                  : "bg-card/40 text-muted-foreground hover:text-foreground border-border"
              }`}
            >
              <Type className="h-3.5 w-3.5" />
              <span className="font-semibold tracking-wider">A+</span>
            </button>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle light/dark theme"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card/40 text-muted-foreground hover:text-foreground transition-colors"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <button
                onClick={() => (window.location.href = "https://sci-forge-aii.vercel.app/")}
                className="group relative hidden sm:inline-flex h-9 items-center gap-1.5 overflow-hidden rounded-lg brand-gradient px-3 text-xs font-semibold text-background shadow-[0_0_24px_-4px_color-mix(in_oklab,var(--brand-orange)_70%,transparent)] cursor-pointer"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 bg-[linear-gradient(115deg,transparent_30%,rgba(255,255,255,0.45)_50%,transparent_70%)] bg-[length:220%_100%] animate-[glyph-shimmer_2.6s_linear_infinite]"
                />
                <span className="relative">Launch Workspace</span>
                <ArrowRight className="relative h-3.5 w-3.5" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
}

const TELEMETRY = [
  "MODEL: LLAMA-3.3-70B  LATENCY: 42ms  SPEED: 85 t/s",
  "GEMINI-CORE-PRO  CTX: 1.0M  STREAM: STABLE",
  "SCRIBBLE-ENGINE: VECTOR-DIFF v4.1  FRAMES: 60Hz",
  "GRAPH-SOLVER: NODES 1,284  EDGES 3,902  OK",
  "ADAPTIVE-MENTOR: ONLINE  CONF 0.97",
  "RESEARCH-VAULT: AES-256  ZERO-MOCK MODE",
  "QUANTUM-ENGINE: SYMPY+JAX  PRECISION 1e-14",
  "QUIZ-CALIBRATOR: ELO 1842 → 1907",
];

export function TelemetryBanner() {
  const doubled = useMemo(() => [...TELEMETRY, ...TELEMETRY, ...TELEMETRY], []);
  return (
    <div aria-hidden className="group relative overflow-hidden border-y border-border bg-background/40">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="flex w-max animate-marquee-x whitespace-nowrap py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground/40 group-hover:text-cyan/80 transition-colors">
        {doubled.map((t, i) => (
          <span key={i} className="px-6 flex items-center gap-3">
            <span className="h-1 w-1 rounded-full bg-orange/70" />
            [{t}]
          </span>
        ))}
      </div>
    </div>
  );
}

export function SectionHeader({
  kicker,
  title,
  sub,
  align = "left",
}: {
  kicker: string;
  title: React.ReactNode;
  sub?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-orange">{kicker}</div>
      <h2 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.02]">
        {title}
      </h2>
      {sub && (
        <p
          className={`mt-4 text-base text-muted-foreground max-w-2xl ${align === "center" ? "mx-auto" : ""}`}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

export function TraceCard({
  children,
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`group relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden transition-transform duration-300 hover:scale-[1.025] hover:border-orange/40 hover:shadow-[0_30px_60px_-30px_color-mix(in_oklab,var(--brand-orange)_45%,transparent)] ${className}`}
    >
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div
          className="absolute inset-[-100%] animate-[trace-spin_6s_linear_infinite]"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0 60%, oklch(0.74 0.19 50) 70%, oklch(0.82 0.15 75) 80%, transparent 90% 100%)",
          }}
        />
        <div className="absolute inset-[1px] rounded-[15px] bg-card" />
      </div>
      <div className="pointer-events-none absolute -bottom-12 left-1/2 -z-10 h-24 w-3/4 -translate-x-1/2 rounded-full bg-orange/0 group-hover:bg-orange/20 blur-2xl transition-colors duration-500" />
      <div className="relative">{children}</div>
    </div>
  );
}

/* ---------- Global footer ---------- */
export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background/60">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[13px]">
          {[
            ["Core Dashboard", "/"],
            ["System Documentation", "/architecture"],
            ["API Pipeline", "/architecture"],
            ["Institutional Licensing", "/pricing"],
          ].map(([l, href]) => (
            <Link
              key={l}
              to={href}
              className="text-foreground/80 hover:text-orange transition-colors"
            >
              {l}
            </Link>
          ))}
        </nav>
        <div className="mt-6 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-mentor/40 bg-mentor/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-mentor">
            <span className="h-1.5 w-1.5 rounded-full bg-mentor animate-pulse-dot" />
            All systems nominal · v4.1 Aurora
          </div>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[11px] text-muted-foreground">
          <div>© 2026 SciForge AI</div>
          <div className="tracking-[0.22em] uppercase">Forged for STEM</div>
        </div>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const chrome = useChrome();
  return (
    <div id="top" className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav {...chrome} />
      {children}
      <SiteFooter />
    </div>
  );
}
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import {
  Sun,
  Moon,
  Type,
  Atom,
  PenTool,
  Telescope,
  NotebookPen,
  ListChecks,
  Network,
  Rocket,
  FolderLock,
  ArrowRight,
  CircuitBoard,
  ChevronRight,
  Cpu,
  Activity,
  Gauge,
  Zap,
  Brain,
} from "lucide-react";

/* -----------------------------------------------------------
 * SciForge AI — Master Landing
 * Sections:
 *  01 SYSTEM INITIALIZATION ENTRY (Hero)
 *  02 REAL-TIME SYSTEM ENGINE PROFILE (Telemetry HUDs + banner)
 *  03 OBSERVABLE INSTRUMENT CAPABILITIES (Workspace matrix)
 *  04 MODULE BREAKDOWN: SCRIBBLE ANALYSIS
 *  05 OBSERVABLE RUNTIME PERFORMANCE (Terminal)
 *  Footer
 * --------------------------------------------------------- */

type Theme = "dark" | "light";

function useChrome() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [dyslexic, setDyslexic] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // A+ toggles dyslexic typeface AND AAA contrast in one node.
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dyslexic", dyslexic);
    root.classList.toggle("a11y-aaa", dyslexic);
  }, [dyslexic]);

  return { theme, setTheme, dyslexic, setDyslexic };
}

/* ---------- System clock ---------- */
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

/* ---------- Brand mark: Atom-Ring Fusion ---------- */
function BrandMark() {
  return (
    <span
      aria-hidden
      className="relative inline-flex h-7 w-7 items-center justify-center"
    >
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.1, delay: 0.1, ease: "easeOut" }}
        className="absolute h-2.5 w-2.5 rounded-full bg-orange shadow-[0_0_18px_4px_color-mix(in_oklab,var(--brand-orange)_70%,transparent)]"
      />
      <motion.svg
        viewBox="0 0 28 28"
        className="absolute h-7 w-7 animate-ring-orbit"
        initial={{ rotate: 0 }}
      >
        <motion.ellipse
          cx="14"
          cy="14"
          rx="12"
          ry="5"
          fill="none"
          stroke="var(--brand-orange)"
          strokeOpacity="0.85"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.ellipse
          cx="14"
          cy="14"
          rx="12"
          ry="5"
          fill="none"
          stroke="var(--brand-gold)"
          strokeOpacity="0.7"
          strokeWidth="1"
          transform="rotate(60 14 14)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.4, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.ellipse
          cx="14"
          cy="14"
          rx="12"
          ry="5"
          fill="none"
          stroke="var(--brand-cyan)"
          strokeOpacity="0.55"
          strokeWidth="1"
          transform="rotate(-60 14 14)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.4, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.svg>
    </span>
  );
}

/* ---------- Shimmery hover link ---------- */
function ShimmerLink({ children, href }: { children: string; href: string }) {
  const [hot, setHot] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => {
        setHot(false);
        // re-trigger animation
        requestAnimationFrame(() => setHot(true));
      }}
      onAnimationEnd={() => setHot(false)}
      className="relative inline-block text-foreground/80 hover:text-foreground transition-colors"
    >
      <span className={hot ? "glyph-shimmer" : ""}>{children}</span>
    </a>
  );
}

/* ---------- Nav ---------- */
function Nav({
  theme,
  setTheme,
  dyslexic,
  setDyslexic,
}: ReturnType<typeof useChrome>) {
  const clock = useClock();
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto mt-4 max-w-6xl px-4">
        <div className="flex items-center justify-between rounded-2xl border border-border bg-background/70 px-4 py-2.5 backdrop-blur-xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.4)]">
          <a href="#top" className="flex items-center gap-2.5">
            <BrandMark />
            <span className="font-display text-[15px] font-extrabold tracking-[0.18em] uppercase">
              Sci<span className="text-orange">·</span>Forge<span className="text-muted-foreground"> </span>AI
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 ml-3 pl-3 border-l border-border font-mono text-[10px] text-muted-foreground">
              <span className="h-1 w-1 rounded-full bg-mentor animate-pulse-dot" />
              {clock}
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-[13px]">
            {[
              ["Workspaces", "#workspaces"],
              ["Core Tech", "#core-tech"],
              ["Research Vault", "#research-vault"],
              ["Pricing", "#pricing"],
            ].map(([l, href]) => (
              <ShimmerLink key={l} href={href as string}>
                {l as string}
              </ShimmerLink>
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
            <motion.a
              href="#hero"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 360, damping: 22 }}
              className="group relative hidden sm:inline-flex h-9 items-center gap-1.5 overflow-hidden rounded-lg brand-gradient px-3 text-xs font-semibold text-background shadow-[0_0_24px_-4px_color-mix(in_oklab,var(--brand-orange)_70%,transparent)]"
            >
              <span
                aria-hidden
                className="absolute inset-0 bg-[linear-gradient(115deg,transparent_30%,rgba(255,255,255,0.45)_50%,transparent_70%)] bg-[length:220%_100%] animate-[glyph-shimmer_2.6s_linear_infinite]"
              />
              <span className="relative">Launch</span>
              <motion.span
                className="relative inline-flex"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
              >
                <ArrowRight className="h-3.5 w-3.5" />
              </motion.span>
            </motion.a>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ---------- Telemetry banner (horizontal conveyor) ---------- */
const TELEMETRY = [
  "MODEL: LLAMA-3.3-70B // LATENCY: 42ms // SPEED: 85 t/s",
  "GEMINI-CORE-PRO // CTX: 1.0M // STREAM: STABLE",
  "SCRIBBLE-ENGINE: VECTOR-DIFF v4.1 // FRAMES: 60Hz",
  "GRAPH-SOLVER: NODES 1,284 // EDGES 3,902 // OK",
  "ADAPTIVE-MENTOR: ONLINE // CONF 0.97",
  "RESEARCH-VAULT: AES-256 // ZERO-MOCK MODE",
  "QUANTUM-ENGINE: SYMPY+JAX // PRECISION 1e-14",
  "QUIZ-CALIBRATOR: ELO 1842 → 1907",
];

function TelemetryBanner() {
  const doubled = useMemo(() => [...TELEMETRY, ...TELEMETRY, ...TELEMETRY], []);
  return (
    <div
      aria-hidden
      className="group relative overflow-hidden border-y border-border bg-background/40"
    >
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

/* ---------- Section header ---------- */
function SectionHeader({
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
      {sub && <p className={`mt-4 text-base text-muted-foreground max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>{sub}</p>}
    </div>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);

  const headlineWords = ["cognitive", "acceleration."];

  return (
    <section id="hero" ref={ref} className="relative pt-36 pb-20 overflow-hidden">
      <div className="absolute inset-0 blueprint-grid [mask-image:radial-gradient(ellipse_at_top,black_25%,transparent_75%)]" />
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute left-1/2 top-24 -z-10 h-[560px] w-[860px] -translate-x-1/2 rounded-full bg-orange/15 blur-[120px]"
      />
      <div className="mx-auto max-w-5xl px-6 text-center relative">
        <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground/70">
          // 01 · SYSTEM INITIALIZATION ENTRY
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mt-5 inline-flex items-center gap-2 rounded-full border border-orange/40 bg-card/40 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-orange backdrop-blur"
        >
          <span
            aria-hidden
            className="absolute inset-0 -z-10 rounded-full bg-orange/15 blur-md"
          />
          ⌗ Drop the slow study loop
        </motion.div>

        <h1 className="mt-6 font-display text-5xl sm:text-7xl font-extrabold tracking-tight leading-[0.95]">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="block text-foreground"
          >
            Step into deep
          </motion.span>
          <span className="relative block">
            <span
              aria-hidden
              className="absolute inset-0 -z-10 blur-2xl opacity-60 brand-gradient-text"
            >
              cognitive acceleration.
            </span>
            <span className="inline-flex flex-wrap justify-center gap-x-3">
              {headlineWords.map((w, wi) =>
                w.split("").map((ch, ci) => (
                  <motion.span
                    key={`${wi}-${ci}`}
                    initial={{ y: 30, opacity: 0, rotateX: -60 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    transition={{
                      duration: 0.55,
                      delay: 0.25 + wi * 0.18 + ci * 0.025,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="brand-gradient-text inline-block"
                  >
                    {ch}
                  </motion.span>
                )),
              )}
            </span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12, filter: "blur(20px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground"
        >
          For students closing the gap. Researchers compressing the loop.
          Institutes engineering the next generation of scientific minds.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <motion.a
            href="#workspaces"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 320, damping: 22 }}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl brand-gradient px-5 py-3 text-sm font-semibold text-background shadow-[0_0_32px_-4px_color-mix(in_oklab,var(--brand-orange)_70%,transparent)]"
          >
            <span
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(115deg,transparent_30%,rgba(255,255,255,0.45)_50%,transparent_70%)] bg-[length:220%_100%] animate-[glyph-shimmer_2.6s_linear_infinite]"
            />
            <span className="relative">Initialize Workspace</span>
            <motion.span className="relative inline-flex" whileHover={{ x: 4 }}>
              <ArrowRight className="h-4 w-4" />
            </motion.span>
          </motion.a>
          <a
            href="#core-tech"
            className="group relative inline-flex items-center gap-2 rounded-xl border border-border bg-card/40 px-5 py-3 text-sm font-semibold backdrop-blur transition hover:border-orange/60"
          >
            Tour the engine
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        {/* Live KPI HUD */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.15, duration: 0.8 }}
          className="mx-auto mt-14 grid max-w-3xl grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs"
        >
          {[
            ["LATENCY", "42ms", "p50 edge"],
            ["THROUGHPUT", "85 t/s", "stream"],
            ["CTX WINDOW", "1.0M", "gemini-core"],
            ["MENTOR CONF", "0.97", "align vector"],
          ].map(([k, v, sub], i) => (
            <motion.div
              key={k}
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 3.6, repeat: Infinity, delay: i * 0.18, ease: "easeInOut" }}
              className="rounded-xl border border-border bg-card/40 p-3 text-left backdrop-blur"
            >
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{k}</div>
              <div className="mt-1 text-base text-foreground">{v}</div>
              <div className="text-[9px] uppercase tracking-widest text-muted-foreground/70 mt-0.5">
                {sub}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Card with luminescent trace border ---------- */
function TraceCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
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

/* ---------- Workspaces ---------- */
const WORKSPACES = [
  {
    icon: Brain,
    code: "W-01",
    title: "Core Intelligence Console",
    motion: "Stream-pill ignition · 60fps token cascade",
    body: "The central nexus. Tap a suggestion pill — 'Explain photosynthesis' — and watch the answer cascade across a streaming reasoning pipeline tuned for academic depth, not hype.",
    tone: "orange",
  },
  {
    icon: PenTool,
    code: "W-02",
    title: "Scribble Analysis Lab",
    motion: "Vector-diff overlay · surgical red-trace reveal",
    body: "Sketch a truss, a derivation, a circuit. A real-time logical reasoning engine ingests your hand-drawn vectors and surfaces structural, calculus, and notation errors before they cost you a grade.",
    tone: "gold",
  },
  {
    icon: Telescope,
    code: "W-03",
    title: "Quantum Research Engine",
    motion: "Telemetry-glyph scroll · deep-field parallax",
    body: "Dedicated to extreme investigations. Deep-dive variable derivations, symbolic algebra at 1e-14 precision, and computations that would melt a consumer chatbot.",
    tone: "cyan",
  },
  {
    icon: NotebookPen,
    code: "W-04",
    title: "Notes Generator",
    motion: "Sheet-fold cascade · modular accordion bloom",
    body: "Auto-compiles structured summaries, modular concept breakdowns, and exam-ready briefs. Designed to mirror how scientists actually outline knowledge — not how blogs ramble.",
    tone: "orange",
  },
  {
    icon: ListChecks,
    code: "W-05",
    title: "Quiz Generator",
    motion: "Difficulty-tier ladder · Elo-curve sweep",
    body: "Fires customized testing fields mapped to strict difficulty tiers, with diagnostic metrics that track exactly which sub-skill cracked — and which leveled up.",
    tone: "gold",
  },
  {
    icon: Network,
    code: "W-06",
    title: "Concept Dependency Map",
    motion: "Force-graph crystallization · edge-glow trace",
    body: "An interactive node web of prerequisite knowledge. See what blocks gate what — so you stop trying to learn Lagrangians before you own a derivative.",
    tone: "cyan",
  },
  {
    icon: Rocket,
    code: "W-07",
    title: "Academic Propulsion",
    motion: "Skill-vector launch · radial velocity rings",
    body: "Personalized learning roadmaps with dynamic skill-velocity vectors. Watch your growth trajectory render like a flight telemetry HUD.",
    tone: "orange",
  },
  {
    icon: FolderLock,
    code: "W-08",
    title: "Research Portfolio",
    motion: "Vault unlock · AES-glyph shimmer",
    body: "A secure, zero-mock-data vault consolidating every generated artifact — notes, quizzes, lab outputs, scribble diffs — in one citation-ready archive.",
    tone: "gold",
  },
] as const;

function Workspaces() {
  return (
    <section id="workspaces" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          kicker="// 03 · OBSERVABLE INSTRUMENT CAPABILITIES"
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
                <TraceCard className="h-full">
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
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
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

/* ---------- Scribble Lab feature reveal ---------- */
function ScribbleLab() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section id="core-tech" ref={ref} className="relative py-28">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeader
            kicker="// 04 · MODULE BREAKDOWN: SCRIBBLE ANALYSIS"
            title={
              <>
                Your sketch.
                <br />
                Reasoned, <span className="brand-gradient-text">line by line.</span>
              </>
            }
            sub="Drop a hand-drawn truss, a calculus derivation, a circuit. The vector-diff engine reads geometry, notation, and intent — then flags exactly where the logic breaks."
          />
          <div className="mt-8 space-y-3">
            {[
              ["Vector ingest", "60Hz canvas → SVG path normalization"],
              ["Reasoning chain", "Symbolic algebra + structural physics solver"],
              ["Correction overlay", "Red-trace deltas with citation to the rule"],
            ].map(([k, v]) => (
              <div key={k} className="flex items-start gap-3">
                <div className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-md bg-orange/15 text-orange">
                  <ChevronRight className="h-3.5 w-3.5" />
                </div>
                <div>
                  <div className="font-semibold text-sm">{k}</div>
                  <div className="font-mono text-xs text-muted-foreground">{v}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <TraceCard>
            <div className="p-1.5">
              <div className="flex items-center justify-between px-3 py-2 font-mono text-[10px] text-muted-foreground border-b border-border">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-orange animate-pulse-dot" />
                  scribble.lab/session-7f3a
                </div>
                <div className="text-cyan">VECTOR-DIFF v4.1</div>
              </div>
              <div className="relative aspect-[4/3] blueprint-grid rounded-xl bg-background/40 overflow-hidden">
                <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full">
                  <defs>
                    <linearGradient id="strokeGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="oklch(0.74 0.19 50)" />
                      <stop offset="100%" stopColor="oklch(0.82 0.15 75)" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d="M40 240 L200 80 L360 240 Z M40 240 L360 240 M120 240 L200 80 M280 240 L200 80 M120 240 L280 240"
                    stroke="url(#strokeGrad)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={inView ? { pathLength: 1 } : {}}
                    transition={{ duration: 2.2, ease: "easeInOut" }}
                  />
                  {[
                    [40, 240],
                    [200, 80],
                    [360, 240],
                    [120, 240],
                    [280, 240],
                  ].map(([x, y], i) => (
                    <motion.circle
                      key={i}
                      cx={x}
                      cy={y}
                      r="4"
                      fill="oklch(0.74 0.19 50)"
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ delay: 1.4 + i * 0.1, type: "spring", stiffness: 300 }}
                    />
                  ))}
                  <motion.g
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 2.4, duration: 0.6 }}
                  >
                    <motion.circle
                      cx="200"
                      cy="80"
                      r="14"
                      fill="none"
                      stroke="oklch(0.7 0.19 22)"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                      animate={{ r: [14, 18, 14], opacity: [1, 0.6, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <text x="220" y="70" fill="oklch(0.7 0.19 22)" fontSize="10" fontFamily="JetBrains Mono">
                      apex load → axial Fmax
                    </text>
                  </motion.g>
                </svg>
              </div>
              <div className="grid grid-cols-3 gap-2 p-3 font-mono text-[10px]">
                {[
                  ["NODES", "5", false],
                  ["MEMBERS", "7", false],
                  ["DEFLECT", "0.4mm", true],
                ].map(([k, v, hot]) => (
                  <div
                    key={k as string}
                    className={`rounded-md border px-2 py-1.5 ${
                      hot ? "border-orange/40 bg-orange/10 animate-pulse" : "border-border bg-background/40"
                    }`}
                  >
                    <div className="text-muted-foreground">{k}</div>
                    <div className={`text-xs ${hot ? "text-orange" : "text-foreground"}`}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </TraceCard>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Live telemetry terminal ---------- */
function TerminalSection() {
  const lines = [
    { t: "boot", text: "sciforge.core ▸ initializing reasoning bus…" },
    { t: "ok", text: "model.load LLAMA-3.3-70B  ✓  42ms" },
    { t: "ok", text: "model.load GEMINI-CORE-PRO  ✓  ctx 1.0M" },
    { t: "mentor", text: "adaptive_mentor.online  conf=0.97" },
    { t: "stream", text: "stream.tokens 85 t/s · variance 1.2%" },
    { t: "ok", text: "scribble.engine vector-diff v4.1 ready" },
    { t: "ok", text: "vault.cipher AES-256-GCM · zero-mock=true" },
    { t: "wait", text: "awaiting prompt ▌" },
  ];
  return (
    <section id="research-vault" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-5 gap-10 items-center">
        <div className="lg:col-span-2">
          <SectionHeader
            kicker="// 05 · OBSERVABLE RUNTIME PERFORMANCE"
            title={
              <>
                Verified by the engine,
                <br />
                not the <span className="brand-gradient-text">marketing.</span>
              </>
            }
            sub="Every workspace runs against the same observable runtime. What you see in our terminal is what you'd see in yours."
          />
          <div className="mt-8 grid grid-cols-2 gap-3">
            {[
              { Icon: Cpu, k: "Llama 3.3 · 70B", v: "Primary reasoning core" },
              { Icon: Activity, k: "Gemini Core Pro", v: "Long-context analyst" },
              { Icon: Gauge, k: "85 t/s", v: "Stream throughput" },
              { Icon: Zap, k: "42ms p50", v: "Edge latency" },
            ].map(({ Icon, k, v }) => (
              <div key={k} className="rounded-xl border border-border bg-card/40 p-3">
                <Icon className="h-4 w-4 text-orange" />
                <div className="mt-2 text-sm font-semibold">{k}</div>
                <div className="font-mono text-[11px] text-muted-foreground">{v}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-3">
          <TraceCard>
            <div className="bg-background/60">
              <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-gold/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-mentor/70" />
                <span className="ml-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  sciforge ▸ runtime.log
                </span>
              </div>
              <div className="p-5 font-mono text-[12px] leading-relaxed">
                {lines.map((l, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.18, duration: 0.4 }}
                    className="flex gap-3"
                  >
                    <span className="text-muted-foreground/60 w-8">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`w-16 ${
                        l.t === "ok"
                          ? "text-mentor"
                          : l.t === "mentor"
                            ? "text-mentor"
                            : l.t === "stream"
                              ? "text-cyan"
                              : l.t === "wait"
                                ? "text-orange"
                                : "text-gold"
                      }`}
                    >
                      [{l.t}]
                    </span>
                    <span className="text-foreground/85 flex-1">
                      {l.text}
                      {l.t === "wait" && (
                        <span className="ml-1 inline-block h-3 w-2 -mb-0.5 bg-orange align-middle animate-[caret-blink_500ms_step-end_infinite]" />
                      )}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </TraceCard>
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA + Footer ---------- */
function CtaFooter() {
  return (
    <section id="pricing" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <TraceCard className="text-center">
          <div className="relative px-8 py-16 sm:py-20">
            <div className="absolute inset-0 blueprint-grid opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange/40 bg-orange/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-orange">
                <CircuitBoard className="h-3.5 w-3.5" /> Drop the slow study loop
              </div>
              <h2 className="mt-6 font-display text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.0]">
                Step into deep
                <br />
                <span className="brand-gradient-text text-glow-orange">cognitive acceleration.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
                For students closing the gap. Researchers compressing the loop.
                Institutes engineering the next generation of scientific minds.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 320, damping: 22 }}
                  href="#hero"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl brand-gradient px-5 py-3 text-sm font-semibold text-background shadow-[0_0_28px_color-mix(in_oklab,var(--brand-gold)_45%,transparent)]"
                >
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-[linear-gradient(115deg,transparent_30%,rgba(255,255,255,0.45)_50%,transparent_70%)] bg-[length:220%_100%] animate-[glyph-shimmer_2.6s_linear_infinite]"
                  />
                  <span className="relative">Initialize Workspace</span>
                  <ArrowRight className="relative h-4 w-4" />
                </motion.a>
                <a
                  href="#core-tech"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card/50 px-5 py-3 text-sm font-semibold backdrop-blur hover:border-orange/60 transition"
                >
                  Tour the engine
                </a>
              </div>
            </div>
          </div>
        </TraceCard>

        <footer className="mt-16 border-t border-border pt-8">
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[13px]">
            {[
              ["Core Dashboard", "#hero"],
              ["System Documentation", "#core-tech"],
              ["API Pipeline", "#research-vault"],
              ["Institutional Licensing", "#pricing"],
            ].map(([l, href]) => (
              <ShimmerLink key={l} href={href}>
                {l}
              </ShimmerLink>
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
        </footer>
      </div>
    </section>
  );
}

/* ---------- Page ---------- */
export default function SciForgeLanding() {
  const t = useChrome();
  return (
    <div id="top" className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <Nav {...t} />
      <Hero />
      <TelemetryBanner />
      <Workspaces />
      <ScribbleLab />
      <TerminalSection />
      <CtaFooter />
    </div>
  );
}
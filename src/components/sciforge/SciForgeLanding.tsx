import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import {
  Sun,
  Moon,
  Type,
  Atom,
  Sparkles,
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
 * --------------------------------------------------------- */

type Theme = "dark" | "light";

function useTheme() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [dyslexic, setDyslexic] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dyslexic", dyslexic);
  }, [dyslexic]);

  return { theme, setTheme, dyslexic, setDyslexic };
}

/* ---------- Animated typing prompt ---------- */
const PROMPTS = [
  "Deconstruct quantum superposition into first principles…",
  "Debug this calculus matrix derivation step-by-step…",
  "Map the prerequisite chain for tensor calculus…",
  "Generate an exam-grade brief on CRISPR gene editing…",
  "Solve this hand-drawn truss for axial forces…",
];

function useTyping(strings: string[]) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"type" | "hold" | "erase">("type");

  useEffect(() => {
    const target = strings[i];
    let t: number;
    if (phase === "type") {
      if (text.length < target.length) {
        t = window.setTimeout(() => setText(target.slice(0, text.length + 1)), 38);
      } else {
        t = window.setTimeout(() => setPhase("hold"), 1400);
      }
    } else if (phase === "hold") {
      t = window.setTimeout(() => setPhase("erase"), 900);
    } else {
      if (text.length > 0) {
        t = window.setTimeout(() => setText(target.slice(0, text.length - 1)), 18);
      } else {
        t = window.setTimeout(() => {
          setI((i + 1) % strings.length);
          setPhase("type");
        }, 200);
      }
    }
    return () => window.clearTimeout(t);
  }, [text, phase, i, strings]);

  return text;
}

/* ---------- Nav ---------- */
function Nav({
  theme,
  setTheme,
  dyslexic,
  setDyslexic,
}: ReturnType<typeof useTheme>) {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto mt-4 max-w-6xl px-4">
        <div className="flex items-center justify-between rounded-2xl border border-border bg-background/70 px-4 py-2.5 backdrop-blur-xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.3)]">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-md brand-gradient">
              <Atom className="h-4 w-4 text-background" strokeWidth={2.5} />
              <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-orange animate-pulse-dot" />
            </span>
            <span className="font-display text-[15px] font-extrabold tracking-wider uppercase">
              SciForge<span className="text-orange">.</span>AI
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-[13px] text-muted-foreground">
            {["Workspaces", "Core Tech", "Research Vault", "Pricing"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
                className="hover:text-foreground transition-colors"
              >
                {l}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setDyslexic(!dyslexic)}
              aria-pressed={dyslexic}
              aria-label="Toggle dyslexia-friendly typeface"
              className={`group inline-flex h-9 items-center gap-1.5 rounded-lg border border-border px-2.5 text-xs font-mono transition-all ${
                dyslexic ? "bg-orange/15 text-orange border-orange/40" : "bg-card/40 text-muted-foreground hover:text-foreground"
              }`}
            >
              <Type className="h-3.5 w-3.5" />
              <span className="font-semibold">A+</span>
            </button>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card/40 text-muted-foreground hover:text-foreground transition-colors"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <a
              href="#hero"
              className="hidden sm:inline-flex h-9 items-center gap-1.5 rounded-lg brand-gradient px-3 text-xs font-semibold text-background shadow-[0_0_24px_-4px_rgba(255,122,0,0.55)] hover:brightness-110 transition"
            >
              Launch <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ---------- Telemetry strip ---------- */
const TELEMETRY = [
  "[MODEL: LLAMA-3.3-70B // LATENCY: 42ms // SPEED: 85 t/s]",
  "[GEMINI-CORE-PRO // CTX: 1.0M // STREAM: STABLE]",
  "[SCRIBBLE-ENGINE: VECTOR-DIFF v4.1 // FRAMES: 60Hz]",
  "[GRAPH-SOLVER: NODES 1,284 // EDGES 3,902 // OK]",
  "[ADAPTIVE-MENTOR: ONLINE // CONF 0.97]",
  "[RESEARCH-VAULT: AES-256 // ZERO-MOCK MODE]",
  "[QUANTUM-ENGINE: SYMPY+JAX // PRECISION 1e-14]",
  "[QUIZ-CALIBRATOR: ELO 1842 → 1907]",
];

function TelemetryStream({ side }: { side: "left" | "right" }) {
  const doubled = useMemo(() => [...TELEMETRY, ...TELEMETRY], []);
  return (
    <div
      aria-hidden
      className={`pointer-events-none fixed top-0 ${
        side === "left" ? "left-0" : "right-0"
      } hidden lg:block z-0 h-screen w-44 overflow-hidden opacity-[0.18]`}
    >
      <div
        className={`flex flex-col gap-3 px-3 py-10 font-mono text-[10px] leading-snug text-cyan animate-telemetry ${
          side === "left" ? "text-left" : "text-right"
        }`}
      >
        {doubled.map((t, i) => (
          <div key={i}>{t}</div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  const typed = useTyping(PROMPTS);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section id="hero" ref={ref} className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 blueprint-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <motion.div
        style={{ y }}
        className="absolute left-1/2 top-20 -z-10 h-[560px] w-[860px] -translate-x-1/2 rounded-full bg-orange/15 blur-[120px]"
      />
      <div className="mx-auto max-w-5xl px-6 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-[11px] font-mono uppercase tracking-widest text-muted-foreground backdrop-blur"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-mentor animate-pulse-dot" />
          Mentor Online · v4.1 Aurora
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-6 font-display text-5xl sm:text-7xl font-extrabold tracking-tight leading-[0.95]"
        >
          The cognitive engine
          <br />
          for <span className="brand-gradient-text text-glow-orange">STEM mastery.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground"
        >
          ChatGPT-grade reasoning. Apple Intelligence polish. Google Classroom workflow.
          One workspace, engineered exclusively for scientists, engineers, and the
          students becoming them.
        </motion.p>

        {/* Prompt field */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mx-auto mt-10 max-w-2xl"
        >
          <div className="group relative rounded-2xl border border-border bg-card/60 p-2 pl-4 backdrop-blur-xl shadow-[0_0_60px_-20px_rgba(255,122,0,0.35)]">
            <div className="flex items-center gap-3">
              <Sparkles className="h-4 w-4 text-orange shrink-0" />
              <div className="flex-1 truncate py-2.5 text-left text-sm sm:text-[15px] text-foreground/90 font-mono">
                {typed}
                <span className="ml-0.5 inline-block h-4 w-[2px] -mb-0.5 bg-orange align-middle animate-caret" />
              </div>
              <motion.button
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
                className="inline-flex items-center gap-1.5 rounded-xl brand-gradient px-4 py-2.5 text-sm font-semibold text-background shadow-[0_0_20px_rgba(255,181,71,0.35)]"
              >
                Initialize Workspace <ArrowRight className="h-4 w-4" />
              </motion.button>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-[11px] font-mono text-muted-foreground">
            {["Photosynthesis", "Tensor Calc", "Truss Solver", "Org Chem Mechanisms"].map((p) => (
              <button
                key={p}
                className="rounded-full border border-border bg-card/40 px-2.5 py-1 hover:border-orange/60 hover:text-foreground transition"
              >
                {p}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Live KPIs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mx-auto mt-14 grid max-w-3xl grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs"
        >
          {[
            ["LATENCY", "42ms"],
            ["THROUGHPUT", "85 t/s"],
            ["CTX WINDOW", "1.0M"],
            ["MENTOR CONF", "0.97"],
          ].map(([k, v]) => (
            <div
              key={k}
              className="rounded-xl border border-border bg-card/40 p-3 text-left backdrop-blur"
            >
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{k}</div>
              <div className="mt-1 text-base text-foreground">{v}</div>
            </div>
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
      className={`group relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden ${className}`}
    >
      {/* Animated conic gradient ring on hover */}
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
    motion: "Vector-diff overlay · surgical cubic-bezier reveal",
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
          kicker="// 02 · WORKSPACE MATRIX"
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
                        <Icon className="h-4.5 w-4.5" />
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

/* ---------- Section header ---------- */
function SectionHeader({
  kicker,
  title,
  sub,
}: {
  kicker: string;
  title: React.ReactNode;
  sub?: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-orange">{kicker}</div>
      <h2 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.02]">
        {title}
      </h2>
      {sub && <p className="mt-4 text-base text-muted-foreground max-w-2xl">{sub}</p>}
    </div>
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
            kicker="// 03 · SCRIBBLE ANALYSIS LAB"
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

        {/* Faux canvas display */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <TraceCard>
            <div className="p-1.5">
              <div className="flex items-center justify-between px-3 py-2 font-mono text-[10px] text-muted-foreground border-b border-border">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-orange" />
                  scribble.lab/session-7f3a
                </div>
                <div>VECTOR-DIFF v4.1</div>
              </div>
              <div className="relative aspect-[4/3] blueprint-grid rounded-xl bg-background/40 overflow-hidden">
                <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full">
                  <defs>
                    <linearGradient id="strokeGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="oklch(0.74 0.19 50)" />
                      <stop offset="100%" stopColor="oklch(0.82 0.15 75)" />
                    </linearGradient>
                  </defs>
                  {/* Truss */}
                  <motion.path
                    d="M40 240 L200 80 L360 240 Z M40 240 L360 240 M120 240 L200 80 M280 240 L200 80 M120 240 L280 240"
                    stroke="url(#strokeGrad)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={inView ? { pathLength: 1 } : {}}
                    transition={{ duration: 2.2, ease: "easeInOut" }}
                  />
                  {/* Joints */}
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
                  {/* Annotation */}
                  <motion.g
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 2.4, duration: 0.6 }}
                  >
                    <circle cx="200" cy="80" r="14" fill="none" stroke="oklch(0.7 0.19 22)" strokeWidth="1.5" strokeDasharray="3 3" />
                    <text x="220" y="70" fill="oklch(0.7 0.19 22)" fontSize="10" fontFamily="JetBrains Mono">
                      apex load → axial Fmax
                    </text>
                  </motion.g>
                </svg>
              </div>
              <div className="grid grid-cols-3 gap-2 p-3 font-mono text-[10px]">
                {[
                  ["NODES", "5"],
                  ["MEMBERS", "7"],
                  ["DEFLECT", "0.4mm"],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-md border border-border bg-background/40 px-2 py-1.5">
                    <div className="text-muted-foreground">{k}</div>
                    <div className="text-foreground text-xs">{v}</div>
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
            kicker="// 04 · LIVE TELEMETRY"
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
                    transition={{ delay: i * 0.08 }}
                    className="flex gap-3"
                  >
                    <span className="text-muted-foreground/60 w-8">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`w-14 ${
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
                    <span className="text-foreground/85">{l.text}</span>
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

/* ---------- CTA / Footer ---------- */
function CtaFooter() {
  return (
    <section id="pricing" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <TraceCard className="text-center">
          <div className="relative px-8 py-16 sm:py-20">
            <div className="absolute inset-0 blueprint-grid opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange/40 bg-orange/10 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-orange">
                <CircuitBoard className="h-3.5 w-3.5" /> Drop the slow study loop
              </div>
              <h2 className="mt-6 font-display text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.0]">
                Step into deep
                <br />
                <span className="brand-gradient-text text-glow-orange">cognitive acceleration.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
                For students closing the gap. Researchers compressing the loop. Institutes engineering the next generation of scientific minds.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <motion.a
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 320, damping: 22 }}
                  href="#hero"
                  className="inline-flex items-center gap-1.5 rounded-xl brand-gradient px-5 py-3 text-sm font-semibold text-background shadow-[0_0_28px_rgba(255,181,71,0.4)]"
                >
                  Initialize Workspace <ArrowRight className="h-4 w-4" />
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

        <footer className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border pt-6 font-mono text-[11px] text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-mentor animate-pulse-dot" />
            ALL SYSTEMS NOMINAL · v4.1 AURORA
          </div>
          <div>© {new Date().getFullYear()} SciForge AI · Forged for STEM</div>
        </footer>
      </div>
    </section>
  );
}

/* ---------- Page ---------- */
export default function SciForgeLanding() {
  const t = useTheme();
  return (
    <div id="top" className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <TelemetryStream side="left" />
      <TelemetryStream side="right" />
      <Nav {...t} />
      <Hero />
      <Workspaces />
      <ScribbleLab />
      <TerminalSection />
      <CtaFooter />
    </div>
  );
}
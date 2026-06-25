import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ChevronRight, Sparkles, SendHorizontal, BookOpen, FileText, Target, FolderKanban } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { captureAnalyticsEvent } from "../../lib/analytics";

const SUGGESTIONS = [
  { emoji: "🌿", label: "Teach me Photosynthesis", prompt: "Explain the light-dependent reactions of photosynthesis in detail." },
  { emoji: "⚡", label: "Create a quiz on Physics", prompt: "Generate a quiz on Newton's Laws of Motion with varying difficulty levels." },
  { emoji: "📝", label: "Generate study notes", prompt: "Create comprehensive study notes on cellular biology fundamentals." },
  { emoji: "🔬", label: "Explain Newton's Laws", prompt: "Walk through Newton's Three Laws of Motion with real-world examples." },
];

// Metric cards for the dashboard
const METRICS = [
  { icon: Target, value: "0", label: "Questions Solved" },
  { icon: FileText, value: "0", label: "Notes Generated" },
  { icon: BookOpen, value: "0", label: "Quizzes Completed" },
  { icon: FolderKanban, value: "0", label: "Research Projects" },
];

// System status panel
const SYSTEM_STATUS = [
  { label: "Model", value: "Llama 3.3" },
  { label: "Latency", value: "42ms" },
  { label: "Tokens/s", value: "85 t/s" },
];

/* Live, looping prompt anchor that mimics the workspace input. */
function PromptAnchor() {
  const [active, setActive] = useState(0);
  const [typed, setTyped] = useState("");
  const [tokens, setTokens] = useState<string[]>([]);
  const cancelRef = useRef(false);

  useEffect(() => {
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
        // Emit token cascade
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
          "▌",
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

  return (
    <div className="mx-auto mt-12 max-w-3xl">
      <div className="relative rounded-2xl border border-border bg-card/50 backdrop-blur-xl shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-70"
          style={{
            background:
              "radial-gradient(60% 80% at 20% 0%, color-mix(in oklab, var(--brand-orange) 22%, transparent), transparent 60%), radial-gradient(50% 80% at 90% 100%, color-mix(in oklab, var(--brand-cyan) 18%, transparent), transparent 60%)",
          }}
        />
        <div className="relative flex items-center gap-3 px-4 py-3 border-b border-border">
          <div className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-orange/15 text-orange">
            <Sparkles className="h-3.5 w-3.5" />
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
            core_intelligence.console / live
          </div>
          <div className="ml-auto inline-flex items-center gap-1.5 font-mono text-[10px] text-mentor">
            <span className="h-1.5 w-1.5 rounded-full bg-mentor animate-pulse-dot" />
            stream-ready
          </div>
        </div>

        <div className="relative px-5 py-5">
          <div className="min-h-[64px] text-left text-base sm:text-lg text-foreground/95 leading-snug font-sans">
            <span className="text-muted-foreground/70">Ask our adaptive mentor… </span>
            <span>{typed}</span>
            <span className="ml-0.5 inline-block h-5 w-[2px] -mb-1 align-middle bg-orange animate-[caret-blink_700ms_step-end_infinite]" />
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            {SUGGESTIONS.map((s, i) => (
              <button
                key={s.label}
                onClick={() => setActive(i)}
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] transition-all ${
                  active === i
                    ? "border-orange/60 bg-orange/15 text-orange shadow-[0_0_18px_-4px_color-mix(in_oklab,var(--brand-orange)_70%,transparent)]"
                    : "border-border bg-background/40 text-muted-foreground hover:text-foreground hover:border-orange/40"
                }`}
              >
                <span>{s.emoji}</span>
                <span className="font-medium">{s.label}</span>
              </button>
            ))}

            <button
              onClick={() => {
                captureAnalyticsEvent("prompt_run_clicked", {
                  source: "hero_prompt_anchor",
                  suggestion_label: SUGGESTIONS[active].label,
                  destination: "workspace_app",
                });
                localStorage.setItem('pending_initial_query', SUGGESTIONS[active].prompt);
                window.location.href = "https://sci-forge-aii.vercel.app/";
              }}
              className="ml-auto inline-flex h-8 items-center gap-1.5 rounded-lg brand-gradient px-3 text-xs font-semibold text-background"
            >
              <SendHorizontal className="h-3.5 w-3.5" />
              Run
            </button>
          </div>

          {tokens.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-[10px] text-cyan/90">
              {tokens.map((t, i) => (
                <motion.span
                  key={i + t}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.18 }}
                  className="rounded-md border border-cyan/30 bg-cyan/10 px-1.5 py-0.5"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section id="hero" ref={ref} className="relative pt-36 pb-20 overflow-hidden">
      <div className="absolute inset-0 blueprint-grid [mask-image:radial-gradient(ellipse_at_top,black_25%,transparent_75%)]" />
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute left-1/2 top-24 -z-10 h-[560px] w-[860px] -translate-x-1/2 rounded-full bg-orange/15 blur-[120px]"
      />
      <div className="mx-auto max-w-5xl px-6 text-center relative">
        <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground/70">
          01 · COGNITIVE ENTRANCE
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mt-5 inline-flex items-center gap-2 rounded-full border border-orange/40 bg-card/40 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-orange backdrop-blur"
        >
          <span aria-hidden className="absolute inset-0 -z-10 rounded-full bg-orange/15 blur-md" />
          ⌗ Drop the slow study loop
        </motion.div>

        <h1 className="mt-6 font-display text-5xl sm:text-7xl font-extrabold tracking-wide leading-[1.1]">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="block text-zinc-950 dark:text-white drop-shadow-sm"
          >
            Step into deep
          </motion.span>
          <span className="relative block mt-2">
            <span aria-hidden className="absolute inset-0 -z-10 blur-2xl opacity-50 bg-gradient-to-r from-[#FF7A00] to-[#FFB547]" />
            <span className="block bg-gradient-to-r from-[#FF7A00] to-[#FFB547] bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(255,122,0,0.35)] tracking-normal font-extrabold">
              cognitive
            </span>
          </span>
          <span className="relative block mt-2">
            <span className="block bg-gradient-to-r from-[#FF7A00] to-[#FFB547] bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(255,122,0,0.35)] tracking-normal font-extrabold">
              acceleration.
            </span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12, filter: "blur(20px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground"
        >
          The intelligent workbench engineered exclusively for scientists,
          engineers, and the students becoming them.
        </motion.p>

        <PromptAnchor />

        {/* Metrics Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {METRICS.map((m, i) => {
            const Icon = m.icon;
            return (
              <div
                key={m.label}
                className="rounded-xl border border-border bg-card/40 px-4 py-3 backdrop-blur"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Icon className="h-4 w-4 text-orange/70" />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    {m.label}
                  </span>
                </div>
                <div className="font-display text-2xl font-bold text-foreground">
                  {m.value}
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* System Status Panel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-4 inline-flex items-center gap-4 rounded-full border border-border/50 bg-background/30 px-4 py-2 font-mono text-[10px] text-muted-foreground/70"
        >
          {SYSTEM_STATUS.map((s, i) => (
            <span key={s.label} className="flex items-center gap-1.5">
              <span className="text-foreground/50">{s.label}:</span>
              <span className="text-cyan">{s.value}</span>
              {i < SYSTEM_STATUS.length - 1 && <span className="text-border mx-1">|</span>}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <button
              onClick={() => {
                captureAnalyticsEvent("workspace_launch_clicked", {
                  source: "hero_primary_cta",
                  destination: "workspace_app",
                });
                window.location.href = "https://sci-forge-aii.vercel.app/";
              }}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl brand-gradient px-5 py-3 text-sm font-semibold text-background shadow-[0_0_32px_-4px_color-mix(in_oklab,var(--brand-orange)_70%,transparent)] cursor-pointer"
            >
              <span
                aria-hidden
                className="absolute inset-0 bg-[linear-gradient(115deg,transparent_30%,rgba(255,255,255,0.45)_50%,transparent_70%)] bg-[length:220%_100%] animate-[glyph-shimmer_2.6s_linear_infinite]"
              />
              <span className="relative">Initialize Workspace</span>
              <ArrowRight className="relative h-4 w-4" />
            </button>
          </motion.div>
          <Link
            to="/architecture"
            className="group relative inline-flex items-center gap-2 rounded-xl border border-border bg-card/40 px-5 py-3 text-sm font-semibold backdrop-blur transition hover:border-orange/60"
          >
            Tour the engine
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

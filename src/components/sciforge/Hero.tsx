import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ChevronRight, Sparkles, SendHorizontal } from "lucide-react";
import { Link } from "@tanstack/react-router";

const SUGGESTIONS = [
  { label: "Photosynthesis", prompt: "Break down the light-dependent reactions of photosynthesis." },
  { label: "Tensor Calc", prompt: "Derive the Christoffel symbols for a 2-sphere metric, step by step." },
  { label: "Truss Solver", prompt: "Solve this hand-drawn truss for axial forces — joint method." },
  { label: "Org Chem Mechanisms", prompt: "Walk through the SN2 mechanism for 2-bromobutane + NaOH." },
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
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-wider transition-all ${
                  active === i
                    ? "border-orange/60 bg-orange/15 text-orange shadow-[0_0_18px_-4px_color-mix(in_oklab,var(--brand-orange)_70%,transparent)]"
                    : "border-border bg-background/40 text-muted-foreground hover:text-foreground hover:border-orange/40"
                }`}
              >
                <span className="h-1 w-1 rounded-full bg-current" />
                {s.label}
              </button>
            ))}

            <Link
              to="/architecture"
              className="ml-auto inline-flex h-8 items-center gap-1.5 rounded-lg brand-gradient px-3 text-xs font-semibold text-background"
            >
              <SendHorizontal className="h-3.5 w-3.5" />
              Run
            </Link>
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
          // 01 · COGNITIVE ENTRANCE
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
            <span aria-hidden className="absolute inset-0 -z-10 blur-2xl opacity-60 brand-gradient-text">
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
          The intelligent workbench engineered exclusively for scientists,
          engineers, and the students becoming them.
        </motion.p>

        <PromptAnchor />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/pricing"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl brand-gradient px-5 py-3 text-sm font-semibold text-background shadow-[0_0_32px_-4px_color-mix(in_oklab,var(--brand-orange)_70%,transparent)]"
            >
              <span
                aria-hidden
                className="absolute inset-0 bg-[linear-gradient(115deg,transparent_30%,rgba(255,255,255,0.45)_50%,transparent_70%)] bg-[length:220%_100%] animate-[glyph-shimmer_2.6s_linear_infinite]"
              />
              <span className="relative">Initialize Workspace</span>
              <ArrowRight className="relative h-4 w-4" />
            </Link>
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
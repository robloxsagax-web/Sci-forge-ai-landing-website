import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ChevronRight, Cpu, PenTool, Gauge } from "lucide-react";
import { SectionHeader, TraceCard, TelemetryBanner } from "./chrome";

function ScribbleLab() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section ref={ref} className="relative py-24">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeader
            kicker="03 · CANVAS VECTOR INGESTION"
            title={
              <>
                Your sketch.
                <br />
                Reasoned, <span className="brand-gradient-text">line by line.</span>
              </>
            }
            sub="A 60Hz canvas processing matrix converting hand-drawn input shapes into clean SVG normalized paths for instant architectural and geometric reasoning."
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
                    <text
                      x="220"
                      y="70"
                      fill="oklch(0.7 0.19 22)"
                      fontSize="10"
                      fontFamily="JetBrains Mono"
                    >
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
                      hot
                        ? "border-orange/40 bg-orange/10 animate-pulse"
                        : "border-border bg-background/40"
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

function HybridOrchestration() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <TraceCard>
          <div className="p-5">
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              <span className="flex items-center gap-2">
                <Cpu className="h-3.5 w-3.5 text-orange" /> orchestration.bus
              </span>
              <span className="text-mentor">↑ 4,201 req/s</span>
            </div>
            <svg viewBox="0 0 400 220" className="mt-4 h-56 w-full">
              <defs>
                <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="oklch(0.74 0.19 50)" />
                  <stop offset="100%" stopColor="oklch(0.74 0.13 210)" />
                </linearGradient>
              </defs>
              {/* Query source */}
              <circle cx="40" cy="110" r="10" fill="oklch(0.74 0.19 50)" />
              <text x="20" y="140" fill="currentColor" fontSize="9" fontFamily="JetBrains Mono">
                query.in
              </text>
              {/* Splitter */}
              <rect x="140" y="95" width="60" height="30" rx="6" fill="oklch(0.2 0.008 260)" stroke="oklch(0.74 0.19 50)" />
              <text x="148" y="114" fill="currentColor" fontSize="9" fontFamily="JetBrains Mono">
                router
              </text>
              {[40, 110, 180].map((y, i) => (
                <motion.path
                  key={i}
                  d={`M50 110 C 90 110, 100 ${y}, 140 ${y}`}
                  stroke="url(#lineGrad)"
                  strokeWidth="1.5"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.1 * i }}
                />
              ))}
              {[
                [300, 50, "LLAMA-3.3 · reasoning"],
                [300, 110, "GEMINI-PRO · long-ctx"],
                [300, 170, "SYMPY · symbolic"],
              ].map(([x, y, lbl], i) => (
                <g key={i}>
                  <motion.path
                    d={`M200 110 C 240 110, 250 ${y}, 290 ${y}`}
                    stroke="oklch(0.74 0.13 210)"
                    strokeWidth="1.5"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, delay: 0.4 + 0.1 * i }}
                  />
                  <motion.circle
                    cx={x as number}
                    cy={y as number}
                    r="8"
                    fill="oklch(0.74 0.13 210)"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.4 + i * 0.1 }}
                  />
                  <text
                    x={(x as number) + 14}
                    y={(y as number) + 3}
                    fill="currentColor"
                    fontSize="9"
                    fontFamily="JetBrains Mono"
                  >
                    {lbl}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </TraceCard>
        <div>
          <SectionHeader
            kicker="04 · MULTI-MODEL HYBRID"
            title={
              <>
                Three engines.
                <br />
                <span className="brand-gradient-text">Zero hallucinations.</span>
              </>
            }
            sub="Simultaneously running multi-model tasks. Leveraging specialized primary reasoning cores alongside long-context analysts to process massive workloads with zero data hallucinations."
          />
        </div>
      </div>
    </section>
  );
}

function EloDiagnostics() {
  const bars = [42, 58, 71, 64, 79, 88, 82, 91];
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeader
            kicker="05 · ACADEMIC ELO DIAGNOSTICS"
            title={
              <>
                Calibration that
                <br />
                <span className="brand-gradient-text">moves with you.</span>
              </>
            }
            sub="Testing modules built with active calibration engines. Your skill profile updates dynamically over an interactive curve, shifting difficulty tiers up or down based on your performance."
          />
        </div>
        <TraceCard>
          <div className="p-5">
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              <span className="flex items-center gap-2">
                <Gauge className="h-3.5 w-3.5 text-orange" /> elo.curve / live
              </span>
              <span className="text-cyan">1842 → 1907</span>
            </div>
            <div className="mt-5 flex items-end gap-2 h-44">
              {bars.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${b}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="flex-1 rounded-t-md bg-gradient-to-t from-orange/30 via-orange/70 to-gold relative overflow-hidden"
                >
                  <span className="absolute inset-x-0 top-1 text-center font-mono text-[9px] text-background/80">
                    {1700 + b * 3}
                  </span>
                </motion.div>
              ))}
            </div>
            <div className="mt-3 grid grid-cols-8 gap-2 font-mono text-[9px] text-muted-foreground text-center">
              {bars.map((_, i) => (
                <div key={i}>T{i + 1}</div>
              ))}
            </div>
          </div>
        </TraceCard>
      </div>
    </section>
  );
}

export function ArchitecturePage() {
  return (
    <>
      <section className="relative pt-36 pb-12 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid [mask-image:radial-gradient(ellipse_at_top,black_25%,transparent_75%)]" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground/70">
            03 · DEEP ENGINE ARCHITECTURE
          </div>
          <h1 className="mt-5 font-display text-5xl sm:text-6xl font-extrabold tracking-tight leading-[0.98]">
            Engineered for{" "}
            <span className="brand-gradient-text">cognitive depth.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Moving past general-purpose chatbots. SciForge is fine-tuned to
            solve structural, mathematical, and spatial data blockades.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-orange/40 bg-orange/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-orange">
            <PenTool className="h-3.5 w-3.5" /> Scribble · Hybrid · Elo
          </div>
        </div>
      </section>
      <TelemetryBanner />
      <HybridOrchestration />
      <ScribbleLab />
      <EloDiagnostics />
    </>
  );
}
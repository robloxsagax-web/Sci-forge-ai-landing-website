import { motion } from "motion/react";
import { GraduationCap, FlaskConical, Layers, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeader, TraceCard } from "./chrome";

const COLUMNS = [
  {
    Icon: GraduationCap,
    code: "A",
    kicker: "For students closing the gap",
    title: "Break the STEM bottleneck.",
    body: "Convert intimidating text documents into interactive concept dependency nodes and modular briefs that match your processing pace.",
    tone: "orange",
    chips: ["Concept Map", "Modular Briefs", "Adaptive Drills"],
  },
  {
    Icon: FlaskConical,
    code: "B",
    kicker: "For researchers compressing the loop",
    title: "Accelerate the investigation.",
    body: "Automate deep variable derivations, manage complex symbolic equations, and archive every technical artifact into secure vaults.",
    tone: "cyan",
    chips: ["Symbolic Algebra", "Vault Archive", "Citation-Ready"],
  },
] as const;

function TargetSection() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          kicker="// 04 · WORKSPACE ADAPTATION"
          title={
            <>
              Two minds.
              <br />
              One <span className="brand-gradient-text">propulsion stack.</span>
            </>
          }
          sub="SciForge adapts its reasoning chain and visual grammar to who's holding it — undergrad cramming a final, or principal investigator chasing a deadline."
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-5">
          {COLUMNS.map((c, i) => {
            const Icon = c.Icon;
            return (
              <motion.div
                key={c.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <TraceCard className="h-full">
                  <div className="p-7">
                    <div className="flex items-center justify-between">
                      <div
                        className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${
                          c.tone === "orange"
                            ? "bg-orange/15 text-orange"
                            : "bg-cyan/15 text-cyan"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        Column {c.code}
                      </span>
                    </div>
                    <div className="mt-5 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                      {c.kicker}
                    </div>
                    <h3 className="mt-2 font-display text-2xl font-extrabold tracking-tight">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {c.chips.map((chip) => (
                        <span
                          key={chip}
                          className="rounded-full border border-border bg-background/40 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                        >
                          {chip}
                        </span>
                      ))}
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

function ClassroomIntegration() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <TraceCard>
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-10">
              <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-orange">
                // 05 · INTUITIVE PLATFORM INTEGRATION
              </div>
              <h3 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                One <span className="brand-gradient-text">fluid surface</span>{" "}
                for deep focus.
              </h3>
              <p className="mt-4 text-muted-foreground max-w-md">
                SciForge blends deep reasoning intelligence with structured
                classroom organization. Bring your existing research assets,
                notes, and technical sketches together into a fluid workspace
                designed for deep focus.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Link
                  to="/pricing"
                  className="inline-flex items-center gap-1.5 rounded-lg brand-gradient px-4 py-2 text-xs font-semibold text-background"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  See pricing
                </Link>
                <Link
                  to="/architecture"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-xs font-semibold hover:border-orange/60"
                >
                  Read the architecture
                </Link>
              </div>
            </div>
            <div className="relative border-t lg:border-t-0 lg:border-l border-border bg-background/40 p-6 overflow-hidden">
              <div className="grid grid-cols-3 gap-3">
                {[
                  ["Notes", "138"],
                  ["Quizzes", "42"],
                  ["Sketches", "27"],
                  ["Derivations", "61"],
                  ["Citations", "204"],
                  ["Vault size", "1.2GB"],
                ].map(([k, v], i) => (
                  <motion.div
                    key={k}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="rounded-lg border border-border bg-card/50 p-3"
                  >
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {k}
                    </div>
                    <div className="mt-1 font-display text-lg font-bold">{v}</div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-5 rounded-lg border border-border bg-card/50 p-4">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-mentor">
                  <Layers className="h-3.5 w-3.5" /> live · workspace.timeline
                </div>
                <div className="mt-3 space-y-2 font-mono text-[11px]">
                  {[
                    ["09:14", "Imported PDF · 14p"],
                    ["09:22", "Generated 12 flashcards"],
                    ["09:41", "Ran scribble diff · 0.4mm"],
                    ["10:03", "Vault sync ✓"],
                  ].map(([t, e]) => (
                    <div key={t} className="flex gap-3">
                      <span className="text-muted-foreground">{t}</span>
                      <span className="text-foreground/80">{e}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </TraceCard>
      </div>
    </section>
  );
}

export function PropulsionPage() {
  return (
    <>
      <section className="relative pt-36 pb-12 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid [mask-image:radial-gradient(ellipse_at_top,black_25%,transparent_75%)]" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground/70">
            // ACADEMIC PROPULSION
          </div>
          <h1 className="mt-5 font-display text-5xl sm:text-6xl font-extrabold tracking-tight leading-[0.98]">
            Workspaces that{" "}
            <span className="brand-gradient-text">adapt to the mind.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            From first-year survival mode to principal investigator velocity —
            the same engine, two distinct propulsion profiles.
          </p>
        </div>
      </section>
      <TargetSection />
      <ClassroomIntegration />
    </>
  );
}
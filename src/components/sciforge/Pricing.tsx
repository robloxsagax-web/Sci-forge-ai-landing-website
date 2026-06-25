import { motion } from "motion/react";
import { Check, Sparkles, Building2, GraduationCap } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeader, TraceCard } from "./chrome";

const PLANS = [
  {
    Icon: GraduationCap,
    name: "Free Student",
    tag: "Core study tools",
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
      "Open adaptive chat interface",
    ],
  },
  {
    Icon: Sparkles,
    name: "Premium Researcher",
    tag: "For deeper STEM work",
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
      "Custom Research Portfolios",
    ],
  },
  {
    Icon: Building2,
    name: "Institutional",
    tag: "Classroom and lab teams",
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
      "SLA + private model routing",
    ],
  },
] as const;

export function PricingPage() {
  return (
    <>
      <section className="relative pt-36 pb-12 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid [mask-image:radial-gradient(ellipse_at_top,black_25%,transparent_75%)]" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground/70">
            05 · MEMBERSHIP INFRASTRUCTURE
          </div>
          <h1 className="mt-5 font-display text-5xl sm:text-6xl font-extrabold tracking-tight leading-[0.98]">
            Transparent value.{" "}
            <span className="brand-gradient-text">Engine-grade scale.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            One workbench, three activation tiers — calibrated for the
            student, the researcher, and the institution.
          </p>
        </div>
      </section>

      <section className="relative py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-3 gap-5">
            {PLANS.map((p, i) => {
              const Icon = p.Icon;
              return (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className={p.featured ? "lg:-mt-4" : ""}
                >
                  <TraceCard
                    className={`h-full ${p.featured ? "border-orange/60 shadow-[0_30px_80px_-30px_color-mix(in_oklab,var(--brand-orange)_60%,transparent)]" : ""}`}
                  >
                    <div className="p-7 flex flex-col h-full">
                      <div className="flex items-center justify-between">
                        <div
                          className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${
                            p.featured
                              ? "brand-gradient text-background"
                              : "bg-orange/15 text-orange"
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        {p.featured && (
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-orange/40 bg-orange/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-orange">
                            <span className="h-1 w-1 rounded-full bg-orange animate-pulse-dot" />
                            Recommended
                          </span>
                        )}
                      </div>
                      <h3 className="mt-5 font-display text-2xl font-extrabold tracking-tight">
                        {p.name}
                      </h3>
                      <div className="mt-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                        {p.tag}
                      </div>
                      <div className="mt-6 flex items-baseline gap-2">
                        <span
                          className={`font-display text-4xl font-extrabold ${p.featured ? "brand-gradient-text" : ""}`}
                        >
                          {p.price}
                        </span>
                        <span className="font-mono text-xs text-muted-foreground">
                          {p.period}
                        </span>
                      </div>
                      <ul className="mt-6 space-y-2.5 text-sm">
                        {p.items.map((item) => (
                          <li key={item} className="flex items-start gap-2.5">
                            <Check
                              className={`mt-0.5 h-4 w-4 shrink-0 ${
                                p.featured ? "text-orange" : "text-mentor"
                              }`}
                            />
                            <span className="text-foreground/85">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        {p.signupRedirect ? (
                          <button
                            onClick={() => {
                              localStorage.setItem('auth_default_tab', 'signup');
                              window.location.href = "https://sci-forge-aii.vercel.app/";
                            }}
                            className={`inline-flex w-full items-center justify-center gap-1.5 rounded-xl px-4 py-3 text-sm font-semibold transition cursor-pointer ${
                              p.featured
                                ? "brand-gradient text-background shadow-[0_0_28px_-4px_color-mix(in_oklab,var(--brand-orange)_70%,transparent)]"
                                : "border border-border bg-card/60 hover:border-orange/60"
                            }`}
                          >
                            {p.cta}
                          </button>
                        ) : (
                          <Link
                            to={p.href}
                            className={`inline-flex w-full items-center justify-center gap-1.5 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                              p.featured
                                ? "brand-gradient text-background shadow-[0_0_28px_-4px_color-mix(in_oklab,var(--brand-orange)_70%,transparent)]"
                                : "border border-border bg-card/60 hover:border-orange/60"
                            }`}
                          >
                            {p.cta}
                          </Link>
                        )}
                      </div>
                    </div>
                  </TraceCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeader
            kicker="FAQ MATRIX"
            title={
              <>
                Honest answers.
                <br />
                <span className="brand-gradient-text">Zero marketing fog.</span>
              </>
            }
            align="center"
          />
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              [
                "Do you train on my data?",
                "Never. The Research Vault runs in zero-mock mode — AES-256 sealed, no training pipeline ingest.",
              ],
              [
                "Which models power Quantum Engine?",
                "Llama 3.3 70B as primary reasoning core, Gemini Core Pro for long-context analysis, plus a SymPy/JAX symbolic layer.",
              ],
              [
                "Can I downgrade or cancel?",
                "Anytime. Your portfolio and notes export cleanly to PDF, Markdown, or LaTeX before billing closes.",
              ],
              [
                "Institutional pilot timeline?",
                "Two-week pilot, dedicated allocation. Ping the licensing team and you'll have a sandbox by Friday.",
              ],
            ].map(([q, a]) => (
              <TraceCard key={q}>
                <div className="p-5">
                  <div className="font-display text-base font-bold">{q}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{a}</div>
                </div>
              </TraceCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import { motion } from "motion/react";
import { Check, Sparkles, Building2, GraduationCap } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeader, TraceCard } from "./chrome";

const PLANS = [
  {
    Icon: GraduationCap,
    name: "Core Portal",
    tag: "Student Tier",
    price: "$0",
    period: "/ free account",
    cta: "Open free account",
    href: "/",
    featured: false,
    signupRedirect: true,
    description: "Start with core study help before choosing a paid plan.",
    terms: ["Free account", "No trial deadline", "Upgrade only when you need research tools"],
    items: [
      "AI explanations for STEM concepts",
      "Basic notes generator",
      "Standard concept maps",
      "Adaptive chat workspace",
    ],
  },
  {
    Icon: Sparkles,
    name: "Quantum Engine",
    tag: "Premium Researcher",
    price: "$10",
    period: "/ month",
    cta: "Upgrade to Quantum Engine",
    href: "/",
    featured: true,
    signupRedirect: true,
    description: "For students and researchers who need deeper STEM problem solving.",
    terms: ["Monthly billing", "Cancel before the next renewal", "Includes advanced research tools"],
    items: [
      "Scribble Analysis Lab",
      "High-precision research engine",
      "Advanced quiz generator",
      "Research portfolio workspace",
    ],
  },
  {
    Icon: Building2,
    name: "Institutional Grid",
    tag: "University / Lab Network",
    price: "Custom",
    period: "quote",
    cta: "Request licensing quote",
    href: "/",
    featured: false,
    signupRedirect: false,
    description: "For classrooms, labs, and departments that need shared access.",
    terms: ["Custom quote", "Multi-seat licensing", "Pilot scope set before billing"],
    items: [
      "Multi-seat setup",
      "Admin overview tools",
      "Dedicated capacity options",
      "SLA and private model routing",
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
            05 · PRICING
          </div>
          <h1 className="mt-5 font-display text-5xl sm:text-6xl font-extrabold tracking-tight leading-[0.98]">
            Clear pricing for STEM work.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Start free, upgrade to the $10 monthly research plan, or request a
            custom quote for a classroom, lab, or department.
          </p>
          <div className="mx-auto mt-6 grid max-w-3xl gap-2 text-left sm:grid-cols-3">
            {[
              ["Free tier", "$0 core account"],
              ["Paid plan", "$10 per month"],
              ["Institutional", "Custom quote"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-lg border border-border bg-card/40 px-4 py-3 backdrop-blur"
              >
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {label}
                </div>
                <div className="mt-1 text-sm font-semibold text-foreground">
                  {value}
                </div>
              </div>
            ))}
          </div>
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
                      <p className="mt-4 text-sm text-muted-foreground">
                        {p.description}
                      </p>
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
                      <div className="mt-5 rounded-lg border border-border bg-background/35 p-4">
                        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                          Terms
                        </div>
                        <ul className="mt-3 space-y-2 text-sm">
                          {p.terms.map((term) => (
                            <li key={term} className="flex items-start gap-2.5">
                              <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                              <span className="text-foreground/85">{term}</span>
                            </li>
                          ))}
                        </ul>
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
                "No. Zero-mock mode means your files stay sealed with AES-256 encryption and are not used for model training.",
              ],
              [
                "Which models power Quantum Engine?",
                "Llama 3.3 70B as primary reasoning core, Gemini Core Pro for long-context analysis, plus a SymPy/JAX symbolic layer.",
              ],
              [
                "Can I downgrade or cancel?",
                "Yes. The paid plan is monthly, and your portfolio and notes export to PDF, Markdown, or LaTeX before billing closes.",
              ],
              [
                "How do institutional pilots work?",
                "Request a quote with the number of seats and course or lab scope. Pilot terms are set before billing starts.",
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

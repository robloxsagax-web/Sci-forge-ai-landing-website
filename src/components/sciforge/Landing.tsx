import { Hero } from "./Hero";
import { ProblemSection } from "./ProblemSection";
import { Workspaces } from "./Workspaces";
import { Faq } from "./Faq";
import { TelemetryBanner } from "./chrome";
import { CustomCursor } from "./CustomCursor";

export function LandingPage() {
  return (
    <>
      <CustomCursor />
      <Hero />
      <TelemetryBanner />
      <ProblemSection />
      <Workspaces />
      <Faq />
    </>
  );
}

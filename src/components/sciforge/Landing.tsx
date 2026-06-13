import { Hero } from "./Hero";
import { Workspaces } from "./Workspaces";
import { TelemetryBanner } from "./chrome";
import { CustomCursor } from "./CustomCursor";

export function LandingPage() {
  return (
    <>
      <CustomCursor />
      <Hero />
      <TelemetryBanner />
      <Workspaces />
    </>
  );
}
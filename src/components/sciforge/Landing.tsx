import { Hero } from "./Hero";
import { Workspaces } from "./Workspaces";
import { TelemetryBanner } from "./chrome";

export function LandingPage() {
  return (
    <>
      <Hero />
      <TelemetryBanner />
      <Workspaces />
    </>
  );
}
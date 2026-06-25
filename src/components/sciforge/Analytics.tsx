import { useLocation } from "@tanstack/react-router";
import { useEffect } from "react";

import { capturePageView } from "../../lib/analytics";

export function Analytics() {
  const location = useLocation();

  useEffect(() => {
    capturePageView(location.pathname);
  }, [location.pathname, location.href]);

  return null;
}

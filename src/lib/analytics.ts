const POSTHOG_PUBLIC_KEY = "phc_pK8oMrGn54FPjHdT7oRpo8jxx8ZbNJnD7CRS9qVw2CRi";
const POSTHOG_INGEST_HOST = "https://us.i.posthog.com";
const DISTINCT_ID_STORAGE_KEY = "sciforge_anonymous_id";

type AnalyticsValue = string | number | boolean | null | undefined;
type AnalyticsProperties = Record<string, AnalyticsValue>;

function isBrowser() {
  return typeof window !== "undefined";
}

function getDistinctId() {
  if (!isBrowser()) return "server";

  try {
    const existing = window.localStorage.getItem(DISTINCT_ID_STORAGE_KEY);
    if (existing) return existing;

    const generated =
      typeof window.crypto?.randomUUID === "function"
        ? window.crypto.randomUUID()
        : `anon_${Date.now()}_${Math.random().toString(16).slice(2)}`;

    window.localStorage.setItem(DISTINCT_ID_STORAGE_KEY, generated);
    return generated;
  } catch {
    return `anon_${Date.now()}_${Math.random().toString(16).slice(2)}`;
  }
}

function cleanProperties(properties: AnalyticsProperties) {
  return Object.fromEntries(
    Object.entries(properties).filter(([, value]) => value !== undefined),
  );
}

export function captureAnalyticsEvent(event: string, properties: AnalyticsProperties = {}) {
  if (!isBrowser()) return;

  const body = JSON.stringify({
    api_key: POSTHOG_PUBLIC_KEY,
    event,
    properties: {
      distinct_id: getDistinctId(),
      $current_url: window.location.href,
      $host: window.location.host,
      $pathname: window.location.pathname,
      $lib: "sciforge-direct-posthog",
      ...cleanProperties(properties),
    },
    timestamp: new Date().toISOString(),
  });

  const endpoint = `${POSTHOG_INGEST_HOST}/capture/`;

  if (navigator.sendBeacon) {
    navigator.sendBeacon(endpoint, new Blob([body], { type: "application/json" }));
    return;
  }

  void fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  });
}

export function capturePageView(pathname: string) {
  captureAnalyticsEvent("$pageview", {
    route: pathname,
    page_title: document.title,
  });
}

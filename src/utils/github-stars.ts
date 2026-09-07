// The GitHub star count shown in the navigation.
//
// This used to be a literal repeated twice in each of the ten locale layouts,
// so every thousand stars cost a twenty-line PR and any missed occurrence left
// the site quoting two different numbers. It is fetched here instead.
//
// Rendering must never depend on api.github.com being reachable: the site is
// server-rendered, and the production host is not guaranteed to reach GitHub.
// So the fetch is bounded by a short timeout, its result is cached in module
// scope for the process, and any failure falls back to the constant below.

// Last known good value. Update it when it drifts far enough to matter — it is
// only what visitors see if GitHub is unreachable, not the normal path.
const FALLBACK_STAR_COUNT = 24083;

const STARS_API = 'https://api.github.com/repos/nocobase/nocobase';
const REFRESH_AFTER_MS = 6 * 60 * 60 * 1000;
const FETCH_TIMEOUT_MS = 2500;

let cachedCount = FALLBACK_STAR_COUNT;
let cachedAt = 0;
// Concurrent requests during a cold start must not each open their own socket.
let inFlight: Promise<void> | null = null;

// 24083 -> "24k". Rounds down, matching how the count has always been written.
export function formatStarCount(count: number): string {
  if (!Number.isFinite(count) || count < 1000) return String(Math.max(0, Math.trunc(count) || 0));
  return `${Math.floor(count / 1000)}k`;
}

async function refresh(): Promise<void> {
  try {
    const response = await fetch(STARS_API, {
      headers: { Accept: 'application/vnd.github+json' },
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    });
    if (!response.ok) return;
    const count = (await response.json())?.stargazers_count;
    // A malformed or zero payload must not wipe out a good cached value.
    if (typeof count === 'number' && count > 0) {
      cachedCount = count;
      cachedAt = Date.now();
    }
  } catch {
    // Unreachable, rate-limited, or timed out — keep serving what we have and
    // retry on the next request. Never let this surface to the page.
  }
}

export async function getGithubStarLabel(): Promise<string> {
  if (Date.now() - cachedAt < REFRESH_AFTER_MS) return formatStarCount(cachedCount);
  inFlight ??= refresh().finally(() => {
    inFlight = null;
  });
  await inFlight;
  return formatStarCount(cachedCount);
}

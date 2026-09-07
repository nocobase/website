// Internal/test taxonomy that must never reach search engines.
//
// Two places need this judgement and they have to agree: the sitemap (which
// decides what to advertise) and the middleware (which decides what to serve).
// When they drift, a tag either 404s while still being advertised, or 200s
// while being silently dropped from the sitemap — an orphan page either way.
//
// Kept free of imports so `src/middleware.ts` can use it on the hot path
// without pulling in the CMS client that `src/utils/index.ts` carries.

const INTERNAL_SLUG_PATTERNS = [
  /^__/,                 // portal self-test taxonomy, e.g. __portal-tax-test-4a6608c6
  /^test-seed(?:-|$)/i,  // seeded fixtures from older test runs
];

export function isInternalTaxonomySlug(slug: unknown): boolean {
  const value = typeof slug === 'string' ? slug.trim() : '';
  if (!value) return false;
  return INTERNAL_SLUG_PATTERNS.some((pattern) => pattern.test(value));
}

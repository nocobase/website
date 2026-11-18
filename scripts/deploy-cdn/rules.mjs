/**
 * The rules that turn a public URL into a path inside the current version directory. Order matters: every rule sets
 * `flag: break`, so the first match wins and later rules never see the request.
 *
 * The build writes every page as `<path>/index.html` (`build.format: 'directory'` in astro.config.mjs), and a page is
 * served at `<path>` and `<path>/` alike, as it was before the site moved to OSS. Telling a page from a file cannot
 * rely on a dot in the URL: blog posts such as `/en/blog/2.1.0` or `/en/blog/v2.1.25-file-url` have one. A file is
 * instead a URL whose last part ends in an extension with a letter in it (`.css`, `.woff2`, `.json`, `.mp4`), which
 * no page does; `scripts/check-dist.mjs` resolves every built page and file through these rules and fails the build
 * when one does not land on itself.
 *
 * - The first rule serves a file as it is.
 * - The next three map a page onto its `index.html`: the home page, a URL with a trailing slash, one without.
 *
 * They live apart from `deploy-cdn.mjs` so that the check can import them without running the publish.
 *
 * Every language, English included, builds to `dist/<lang>/`, and `/` is the English home page at `dist/index.html`,
 * so no language needs special handling.
 */
export const REWRITE_RULES = [
  { sourceUrl: '^/(.*\\.[0-9]*[a-zA-Z][a-zA-Z0-9]*)$', target: (ts) => `/${ts}/$1` },
  { sourceUrl: '^/$', target: (ts) => `/${ts}/index.html` },
  { sourceUrl: '^/(.*)/$', target: (ts) => `/${ts}/$1/index.html` },
  { sourceUrl: '^/(.*)$', target: (ts) => `/${ts}/$1/index.html` },
];

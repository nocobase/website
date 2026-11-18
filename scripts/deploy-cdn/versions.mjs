/**
 * Pure helpers of `deploy-cdn.mjs`: reading its arguments and choosing which version directories to remove. They touch
 * no network, so `versions.test.mjs` covers them with `node --test`.
 */

/** A published version directory: `20260904150000/`. Anything else in the bucket root is left alone. */
export const TIMESTAMP_DIR_PATTERN = /^\d{14}\/$/u;

/**
 * Versions to keep besides the one being published, unless `--keep` says otherwise. One is enough to roll back to, and
 * each version is a full copy of the site, so keeping more is storage spent on directories nothing will ever point at
 * again.
 */
export const DEFAULT_KEEP_VERSIONS = 1;

/** The value of `--name <value>` or `--name=<value>`, or `undefined` when the option is absent. */
export function readOption(argv, name) {
  const flag = `--${name}`;
  const index = argv.indexOf(flag);
  if (index !== -1) return argv[index + 1] ?? '';

  const inline = argv.find((arg) => arg.startsWith(`${flag}=`));
  return inline?.slice(flag.length + 1);
}

/** Whether the bare flag `--name` was passed. */
export function hasFlag(argv, name) {
  return argv.includes(`--${name}`);
}

/** The number of old versions to keep: `--keep <n>` with n a whole number of at least 1, or the default. */
export function readKeep(argv) {
  const value = readOption(argv, 'keep');
  if (value === undefined) return DEFAULT_KEEP_VERSIONS;
  if (!/^\d+$/u.test(value) || Number(value) < 1) {
    throw new Error(`--keep takes a whole number of at least 1, got "${value}".`);
  }
  return Number(value);
}

/**
 * The version directories to delete, given the bucket's root prefixes, the version just published and how many older
 * versions to keep.
 *
 * Timestamp names sort chronologically as strings. The version just published is never deleted, and neither is anything
 * newer than it, which a concurrent publish would have written; of the versions older than it, the newest `keep` are
 * kept for rollback and the rest are returned. Only names matching the timestamp pattern are considered — `404.html`
 * and anything else at the bucket root is never touched.
 *
 * The version just published must be in the bucket. If it is not, the listing is not what this run uploaded to, and
 * nothing is safe to delete, so this throws instead of returning anything.
 */
export function selectStaleVersions(prefixes, timestamp, keep) {
  const current = `${timestamp}/`;
  const versions = prefixes.filter((prefix) => TIMESTAMP_DIR_PATTERN.test(prefix)).sort();

  if (!versions.includes(current)) {
    throw new Error(`Version ${current} is not in the bucket; refusing to remove anything.`);
  }

  const older = versions.filter((prefix) => prefix < current);
  return older.slice(0, Math.max(0, older.length - keep));
}

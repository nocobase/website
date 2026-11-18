/**
 * Point the CDN at a freshly uploaded site version, then delete the versions it replaced.
 *
 * A release is not an overwrite. Every build is uploaded to its own timestamp directory in the bucket, and publishing
 * is the single act of rewriting the CDN's back-to-origin rules to prefix that directory. Readers see the old site or
 * the new one, never a half-replaced mixture, and a bad release is rolled back by pointing the rules at the previous
 * directory rather than by re-uploading anything.
 *
 * This script does not upload. The workflow has already put the files in place by the time it runs; its arguments are
 * the directory to switch to and how many older versions to keep for rollback:
 *
 *   node deploy-cdn.mjs --timestamp <YYYYMMDDHHMMSS> [--keep <n>] [--cleanup-only]
 *
 * `--keep` defaults to 1, so the bucket holds the new version and the one before it. `--cleanup-only` is for a bucket
 * no CDN domain serves yet (`ALI_CDN_DOMAINS` empty): it switches and refreshes nothing and only removes the versions
 * `--keep` does not keep. Without it, an empty `ALI_CDN_DOMAINS` is an error.
 *
 * Run by the publish job of `.github/workflows/site.yml`, which passes the bucket and domains through the environment:
 *
 * - `ALI_ACCESS_KEY_ID`, `ALI_ACCESS_KEY_SECRET`: an Aliyun key allowed to manage the bucket and the CDN domains.
 * - `ALI_OSS_REGION`: the bucket's region as the OSS console shows it, `cn-beijing`; the `oss-` form is accepted too.
 * - `ALI_OSS_BUCKET`: the bucket the version directories live in.
 * - `ALI_CDN_DOMAINS`: the domains that serve the bucket, separated by whitespace or commas; must be empty with
 *   `--cleanup-only`.
 *
 * Copied from `scripts/deploy-cdn/` in nocobase/website-v3, which publishes www.nocobase.com and the documentation the
 * same way. Only the rewrite rules differ, because this site keeps its English pages under `/en/` and has page URLs
 * with dots in them; read the comment in `rules.mjs` before changing any of them. A fix to the rest belongs in
 * both copies.
 */
import openapi from '@alicloud/openapi-client';
import cdn20180510 from '@alicloud/cdn20180510';
import OSS from 'ali-oss';

import { REWRITE_RULES } from './rules.mjs';
import { hasFlag, readKeep, readOption, selectStaleVersions } from './versions.mjs';

// Both SDKs are CommonJS. Their client classes sit on a nested `default`, and destructuring the request classes from
// the namespace object is what works under Node's interop — named imports resolve to `undefined` here.
const { Config } = openapi;
const Cdn = cdn20180510.default;
const {
  BatchSetCdnDomainConfigRequest,
  DescribeCdnDomainConfigsRequest,
  RefreshObjectCachesRequest,
} = cdn20180510;

// `ALI_CDN_DOMAINS` is checked separately: `--cleanup-only` requires it empty.
const REQUIRED_ENV_VARS = [
  'ALI_ACCESS_KEY_ID',
  'ALI_ACCESS_KEY_SECRET',
  'ALI_OSS_BUCKET',
  'ALI_OSS_REGION',
];

const OSS_LIST_MAX_KEYS = 1000;
const OSS_DELETE_BATCH_SIZE = 1000;

const POLL_INTERVAL_MS = 10_000;
const POLL_MAX_ATTEMPTS = 180; // 30 minutes.

const FUNCTION_NAME = 'back_to_origin_url_rewrite';

function normalizeDomain(domain) {
  return domain.replace(/^https?:\/\//u, '').replace(/\/+$/u, '');
}

/**
 * `ali-oss` builds its endpoint by appending `.aliyuncs.com` to whatever it is given, so it needs the `oss-` prefixed
 * form. ossutil, which the workflow uses to upload, wants the bare region id — and the bare id is also what the OSS
 * console displays. One variable holds the console's value and this adds the prefix, rather than asking anyone to
 * remember which of two variables takes which spelling of the same region.
 *
 * Getting this wrong is quiet: `cn-beijing` yields `cn-beijing.aliyuncs.com`, a host that does not resolve, and the
 * failure surfaces as a network error naming nothing recognizable.
 */
function ossRegion() {
  const region = process.env.ALI_OSS_REGION.trim();
  return region.startsWith('oss-') ? region : `oss-${region}`;
}

function createCdnClient() {
  const config = new Config({
    accessKeyId: process.env.ALI_ACCESS_KEY_ID,
    accessKeySecret: process.env.ALI_ACCESS_KEY_SECRET,
  });
  // CDN is a global service in Aliyun's API surface — there is no region to pass.
  config.endpoint = 'cdn.aliyuncs.com';
  return new Cdn(config);
}

function createOssClient() {
  return new OSS({
    accessKeyId: process.env.ALI_ACCESS_KEY_ID,
    accessKeySecret: process.env.ALI_ACCESS_KEY_SECRET,
    bucket: process.env.ALI_OSS_BUCKET,
    region: ossRegion(),
  });
}

async function describeRewriteConfigs(cdnClient, domain) {
  const response = await cdnClient.describeCdnDomainConfigs(
    new DescribeCdnDomainConfigsRequest({
      domainName: domain,
      functionNames: FUNCTION_NAME,
    }),
  );
  return response.body?.domainConfigs?.domainConfig ?? [];
}

function readArg(config, argName) {
  const args = config.functionArgs?.functionArg ?? [];
  return args.find((arg) => arg.argName === argName)?.argValue;
}

/**
 * Write the rules, reusing the `configId` of any rule already on the domain so that this updates it rather than
 * adding a duplicate. A first deployment has nothing to read, which is why a failure here is a warning: the rules are
 * still written, just as new ones.
 */
async function updateRewriteRules(cdnClient, domain, timestamp) {
  const existingIdBySource = new Map();

  try {
    for (const config of await describeRewriteConfigs(cdnClient, domain)) {
      const source = readArg(config, 'source_url');
      if (source) existingIdBySource.set(source, config.configId);
    }
  } catch (error) {
    console.warn(
      `Could not read existing CDN configuration, treating this as a first deployment: ${error.message}`,
    );
  }

  const functions = REWRITE_RULES.map((rule) => {
    const config = {
      functionName: FUNCTION_NAME,
      functionArgs: [
        { argName: 'source_url', argValue: rule.sourceUrl },
        { argName: 'target_url', argValue: rule.target(timestamp) },
        { argName: 'flag', argValue: 'break' },
      ],
    };

    const configId = existingIdBySource.get(rule.sourceUrl);
    if (configId) config.configId = configId;

    return config;
  });

  await cdnClient.batchSetCdnDomainConfig(
    new BatchSetCdnDomainConfigRequest({
      domainNames: domain,
      functions: JSON.stringify(functions),
    }),
  );
}

/**
 * A rule is live once the API reports it `success` with the target we just wrote. Refreshing the cache before that
 * point would repopulate the edge from the previous version, so this waits first.
 */
function rulesAreLive(configs, timestamp) {
  return REWRITE_RULES.every((rule) => {
    const config = configs.find(
      (candidate) => readArg(candidate, 'source_url') === rule.sourceUrl,
    );
    if (!config || config.status !== 'success') return false;
    return readArg(config, 'target_url') === rule.target(timestamp);
  });
}

async function waitForRewriteRules(cdnClient, domain, timestamp) {
  for (let attempt = 1; attempt <= POLL_MAX_ATTEMPTS; attempt += 1) {
    try {
      const configs = await describeRewriteConfigs(cdnClient, domain);
      if (rulesAreLive(configs, timestamp)) {
        console.log(`Rewrite rules are live (attempt ${attempt}).`);
        return true;
      }
    } catch (error) {
      console.log(`Could not read rule status, retrying: ${error.message}`);
    }

    await new Promise((resolve) => setTimeout(resolve, POLL_INTERVAL_MS));
  }

  return false;
}

async function refreshCache(cdnClient, domain) {
  await cdnClient.refreshObjectCaches(
    new RefreshObjectCachesRequest({
      objectPath: `https://${domain}/`,
      objectType: 'Directory',
    }),
  );
}

async function listObjectsUnder(ossClient, prefix) {
  const names = [];
  let marker;

  for (;;) {
    const params = { prefix, 'max-keys': OSS_LIST_MAX_KEYS };
    if (marker) params.marker = marker;

    const result = await ossClient.list(params);
    for (const object of result.objects ?? []) names.push(object.name);

    if (!result.isTruncated) return names;
    marker = result.nextMarker;
  }
}

/**
 * Delete the version directories that are neither the one just published nor among the `keep` older ones kept for
 * rollback. Which ones those are is decided by `selectStaleVersions`, which throws, deleting nothing, when the version
 * just published is not in the bucket.
 */
async function cleanUpOldVersions(ossClient, timestamp, keep) {
  const result = await ossClient.list({
    prefix: '',
    delimiter: '/',
    'max-keys': OSS_LIST_MAX_KEYS,
  });

  const stale = selectStaleVersions(result.prefixes ?? [], timestamp, keep);
  if (stale.length === 0) {
    console.log(`Keeping /${timestamp}/ and up to ${keep} older version(s); nothing to remove.`);
    return;
  }

  console.log(`Keeping /${timestamp}/ and ${keep} older version(s); removing ${stale.length} version(s).`);

  for (const prefix of stale) {
    const names = await listObjectsUnder(ossClient, prefix);

    for (let index = 0; index < names.length; index += OSS_DELETE_BATCH_SIZE) {
      await ossClient.deleteMulti(
        names.slice(index, index + OSS_DELETE_BATCH_SIZE),
        { quiet: true },
      );
    }

    console.log(`  removed ${prefix} (${names.length} objects)`);
  }
}

/** The domains in `ALI_CDN_DOMAINS`, separated by whitespace or commas, without duplicates. */
function readDomains(value) {
  const domains = value
    .split(/[\s,]+/u)
    .map(normalizeDomain)
    .filter(Boolean);
  return [...new Set(domains)];
}

async function main() {
  const missing = REQUIRED_ENV_VARS.filter((name) => !process.env[name]);
  if (missing.length > 0) {
    console.error(
      `Missing required environment variables: ${missing.join(', ')}`,
    );
    process.exit(1);
  }

  const argv = process.argv.slice(2);
  const timestamp = readOption(argv, 'timestamp');
  if (!timestamp || !/^\d{14}$/u.test(timestamp)) {
    console.error(
      'Pass the uploaded version directory as --timestamp <YYYYMMDDHHMMSS>.',
    );
    process.exit(1);
  }

  let keep;
  try {
    keep = readKeep(argv);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }

  const cleanupOnly = hasFlag(argv, 'cleanup-only');
  const domains = readDomains(process.env.ALI_CDN_DOMAINS ?? '');

  if (cleanupOnly) {
    // Removing versions while a domain serves the bucket could delete the directory its rules still point at; a
    // bucket with domains is cleaned up only after they have all been switched, by a normal run.
    if (domains.length > 0) {
      console.error('--cleanup-only switches no CDN, so ALI_CDN_DOMAINS must be empty with it.');
      process.exit(1);
    }

    // Nothing is live to protect here, so a failed cleanup fails the run: it is the only thing the run does.
    try {
      await cleanUpOldVersions(createOssClient(), timestamp, keep);
    } catch (error) {
      console.error(`Cleanup failed: ${error.message}`);
      process.exit(1);
    }
    return;
  }

  if (domains.length === 0) {
    console.error('ALI_CDN_DOMAINS names no domain.');
    process.exit(1);
  }
  const cdnClient = createCdnClient();
  const ossClient = createOssClient();

  // Publishing and cleanup fail independently. A failed switch must fail the job — readers would still be on the old
  // version with nobody told. A failed cleanup must not: the new version is already live, and stale directories cost
  // storage rather than correctness. The next run will collect them.
  //
  // Every domain that serves the bucket is switched, and the old versions are removed once, after all of them: one
  // domain left on the previous directory while another cleaned it up would answer 404 for the whole site. A failure
  // on any domain stops here, before the cleanup, so the directory each domain still points at is never deleted.
  for (const domain of domains) {
    console.log(`Pointing ${domain} at /${timestamp}/ ...`);
    await updateRewriteRules(cdnClient, domain, timestamp);

    const live = await waitForRewriteRules(cdnClient, domain, timestamp);
    if (!live) {
      console.error(
        `Rewrite rules of ${domain} did not report success within ${(POLL_INTERVAL_MS * POLL_MAX_ATTEMPTS) / 60_000} minutes. ` +
          'The cache has not been refreshed, so readers stay on the previous version. Check the CDN console.',
      );
      process.exit(1);
    }

    await refreshCache(cdnClient, domain);
    console.log(`Published. https://${domain}/ now serves /${timestamp}/.`);
  }

  try {
    await cleanUpOldVersions(ossClient, timestamp, keep);
  } catch (error) {
    console.warn(
      `Cleanup failed, leaving old versions in place: ${error.message}`,
    );
  }
}

await main();

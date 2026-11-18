// Checks a static build (`dist/`) before it is published to OSS:
//
// - the files the bucket and the site depend on exist (the home page, the 404 page the bucket serves for a missing
//   object, the sitemap, robots.txt, the timeline's release notes);
// - every built page and file is reachable through the CDN's back-to-origin rewrite rules (scripts/deploy-cdn/rules.mjs):
//   a page at `<path>` and `<path>/`, a file at its own path. A page whose URL looks like a file, or a file without an
//   extension, would otherwise publish fine and answer 404.
//
//   node scripts/check-dist.mjs [dist]
import fs from 'node:fs';
import path from 'node:path';

import { REWRITE_RULES } from './deploy-cdn/rules.mjs';

const dist = path.resolve(process.argv[2] || 'dist');
const REQUIRED = [
  'index.html',
  '404.html',
  'sitemap.xml',
  'robots.txt',
  'rss.xml',
  'en/index.html',
  'cn/index.html',
  'en/commercial/index.html',
  'en/blog/timeline/index.html',
  'api/release-notes/en/page-1.json',
  'api/release-notes/en/milestones.json',
];

// The object a request for `url` is served from, relative to the version directory.
function resolve(url) {
  for (const rule of REWRITE_RULES) {
    const match = new RegExp(rule.sourceUrl).exec(url);
    if (match) return rule.target('TS').replace(/\$(\d)/g, (_, i) => match[i] ?? '').replace(/^\/TS\//, '');
  }
  return null;
}

function* filesUnder(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* filesUnder(full);
    else yield path.relative(dist, full).split(path.sep).join('/');
  }
}

const errors = [];
for (const file of REQUIRED) {
  if (!fs.existsSync(path.join(dist, file))) errors.push(`missing ${file}`);
}

let pages = 0;
let files = 0;
for (const file of filesUnder(dist)) {
  const urls = [];
  if (file === 'index.html') urls.push('/');
  else if (file.endsWith('/index.html')) urls.push('/' + file.slice(0, -'/index.html'.length), '/' + file.slice(0, -'index.html'.length));
  else urls.push('/' + file);
  file.endsWith('index.html') ? pages++ : files++;
  for (const url of urls) {
    const served = resolve(url);
    if (served !== file) errors.push(`${url} is served from ${served ?? 'nothing'}, not ${file}`);
  }
}

if (errors.length) {
  for (const error of errors.slice(0, 50)) console.error(`::error::${error}`);
  if (errors.length > 50) console.error(`... and ${errors.length - 50} more`);
  process.exit(1);
}
console.log(`dist is ready to publish: ${pages} pages and ${files} other files, all reachable through the CDN rules.`);

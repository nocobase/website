import fs from 'fs/promises';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const pkgs = [
    'kleur',
    'clsx',
    '@astrojs/internal-helpers',
    'dayjs',
    '@astrojs/markdown-remark',
    'rehype-slug',
    'remark-directive',
    'mrmime',
    '@astrojs/rss',
    'astro',
    'p-limit',
    'send',
    'server-destroy',
    'cookie',
    'path-to-regexp',
    'html-escaper',
    'cssesc',
    'sitemap',
    'qrcode',
    'dotenv'
];

(async () => {
    const pkg = await fs.readFile(resolve(__dirname, 'package.json'), 'utf-8');
    const pkgJson = JSON.parse(pkg);
    pkgJson.dependencies = {};
    for (const pkg of pkgs) {
        const content = await fs.readFile(resolve(__dirname, 'node_modules', pkg, 'package.json'), 'utf-8');
        const json =  JSON.parse(content.toString());
        pkgJson.dependencies[pkg] = json.version;
    }
    await fs.writeFile(resolve(__dirname, 'package.json'), JSON.stringify(pkgJson, null, 2));
})()

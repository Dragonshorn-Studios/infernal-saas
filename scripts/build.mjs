import { mkdir, readFile, writeFile, copyFile, readdir } from 'node:fs/promises';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const version = JSON.parse(await readFile(join(root, 'package.json'), 'utf8')).version;
const base = (process.env.PAGES_BASE ?? '/infernal-saas').replace(/\/$/, '');
if (!/^\/[a-zA-Z0-9/_-]*$/.test(base)) throw new Error('Invalid PAGES_BASE');
const dist = join(root, 'dist');
const site = join(root, 'site');

await mkdir(join(site, 'assets'), { recursive: true });
await mkdir(dist, { recursive: true });
for (const file of ['infernal.css', 'infernal.js']) {
  await copyFile(join(root, 'src', file), join(dist, file));
  await copyFile(join(root, 'src', file), join(site, 'assets', file));
  await mkdir(join(site, 'assets', 'v' + version), { recursive: true });
  await copyFile(join(root, 'src', file), join(site, 'assets', 'v' + version, file));
}
await copyFile(join(root, 'examples', 'screens.css'), join(site, 'assets', 'screens.css'));

const remap = (url) => {
  if (url === '/infernal.css') return base + '/assets/infernal.css';
  if (url === '/screens.css') return base + '/assets/screens.css';
  if (url === '/infernal.js') return base + '/assets/infernal.js';
  return base + url;
};
async function copyExamples(dir) {
  for (const item of await readdir(dir, { withFileTypes: true })) {
    const from = join(dir, item.name);
    if (item.isDirectory()) { await copyExamples(from); continue; }
    if (!item.name.endsWith('.html')) continue;
    const to = join(site, relative(join(root, 'examples'), from));
    await mkdir(dirname(to), { recursive: true });
    const html = await readFile(from, 'utf8');
    const rewritten = html.replace(/\b(href|src)="(\/[^"?#]*)([?#][^"]*)?"/g, (_match, attr, path, suffix = '') => `${attr}="${remap(path)}${suffix}"`);
    await writeFile(to, rewritten);
  }
}
await copyExamples(join(root, 'examples'));
await writeFile(join(site, '.nojekyll'), '');
console.log(`Built library v${version} and GitHub Pages under ${base}/`);

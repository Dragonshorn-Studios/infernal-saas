import { readFile, access } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const build = spawnSync(process.execPath, ['scripts/build.mjs'], { cwd: root, encoding: 'utf8' });
if (build.status !== 0) throw new Error(build.stderr || build.stdout || 'Build failed');
for (const page of ['index.html', 'rail.html', 'maomao/index.html', 'maomao/screen.html', 'sumomo/index.html', 'sumomo/screen.html']) {
  const html = await readFile(join(root, 'site', page), 'utf8');
  for (const source of html.matchAll(/<script>([\s\S]*?)<\/script>/g)) new Function(source[1]);
  if (html.includes('="/infernal.css"') || html.includes('="/screens.css"')) throw new Error(`Unrewritten asset in ${page}`);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  const duplicate = ids.find((id, i) => ids.indexOf(id) !== i);
  if (duplicate) throw new Error(`Duplicate id ${duplicate} in ${page}`);
}
for (const file of ['dist/infernal.css', 'dist/infernal.js', 'site/assets/infernal.css', 'site/assets/infernal.js', 'site/assets/v0.1.0/infernal.css']) await access(join(root, file));
console.log('Infernal UI build and page checks passed.');

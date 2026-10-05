// @ts-check
import { defineConfig } from 'astro/config';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

// GitHub Pages serves the site from /<repo>/. Set GITHUB_PAGES=1 (done by `npm run deploy`)
// to build for that path; local dev and other hosts keep serving from the root.
const GITHUB_PAGES = Boolean(process.env.GITHUB_PAGES);
const BASE = '/manns-construction-roofing';

/** Prefix root-relative href/src/action URLs in built HTML with the base path. */
function prefixBaseLinks() {
  return {
    name: 'prefix-base-links',
    hooks: {
      /** @param {{ dir: URL }} opts */
      'astro:build:done': async ({ dir }) => {
        const root = fileURLToPath(dir);
        /** @param {string} d @returns {Promise<string[]>} */
        const walk = async (d) =>
          (await Promise.all(
            (await readdir(d, { withFileTypes: true })).map((e) => {
              const p = path.join(d, e.name);
              return e.isDirectory() ? walk(p) : p.endsWith('.html') ? [p] : [];
            })
          )).flat();
        const attr = new RegExp(`\\b(href|src|action)="/(?!/)(?!${BASE.slice(1)}/)`, 'g');
        for (const file of await walk(root)) {
          const html = await readFile(file, 'utf8');
          await writeFile(file, html.replace(attr, `$1="${BASE}/`));
        }
      },
    },
  };
}

// TODO: switch `site` to the real domain once the owner has one.
export default defineConfig({
  trailingSlash: 'ignore',
  ...(GITHUB_PAGES
    ? { site: 'https://averodion-lab.github.io', base: BASE, integrations: [prefixBaseLinks()] }
    : {}),
});

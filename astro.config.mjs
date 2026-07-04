// @ts-check
import { defineConfig } from 'astro/config';

// While previewing on GitHub Pages (before the niranjanrakesh.me DNS flip),
// the site lives at https://fgbutterlettuce.github.io/niranjanrakesh-site/.
// The deploy workflow sets PUBLIC_BASE=/niranjanrakesh-site; local dev uses '/'.
// After the DNS flip: remove PUBLIC_BASE from the workflow, set site to
// https://www.niranjanrakesh.me, and add public/CNAME.
const base = process.env.PUBLIC_BASE || '/';

export default defineConfig({
  site: process.env.PUBLIC_SITE || 'https://fgbutterlettuce.github.io',
  base,
  trailingSlash: 'ignore',
});

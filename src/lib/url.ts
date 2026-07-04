/**
 * Base-aware URL helper. ALL internal hrefs and asset srcs MUST go through
 * this — the site serves from a subpath on GitHub Pages preview
 * (/niranjanrakesh-site/) and from / after the DNS flip.
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  return `${base}/${path.replace(/^\/+/, '')}`;
}

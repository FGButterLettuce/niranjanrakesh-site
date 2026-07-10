# niranjanrakesh.me

Personal site. Astro static site with multiple design directions sharing one
content source, deployed to GitHub Pages.

## Layout

```
src/content/projects/   ← case studies (markdown) — SHARED by all directions
src/data/site.json      ← hero/about/archive/contact copy — SHARED
src/pages/index.astro   ← chooser page (temporary, until a winner is picked)
src/pages/a/            ← direction A: "Voltage"   (electric dark, kinetic)
src/pages/b/            ← direction B: "Ink & Ochre" (suave editorial)
src/pages/c/            ← direction C: "Machine"   (precision engineering)
src/pages/d/            ← direction D: "Chroma"    (color-block poster energy)
src/styles/{a,b,c,d}.css ← per-direction styling
src/lib/url.ts          ← withBase() — ALL internal links/assets go through it
```

Updating content = edit the markdown/JSON, push to `main`, GitHub Actions
rebuilds and deploys automatically.

## Preview URL (now)

https://fgbutterlettuce.github.io/niranjanrakesh-site/ — chooser page linking
to `/a/`, `/b/`, `/c/`, `/d/`.

## Going live on niranjanrakesh.me (manual steps, after picking a winner)

1. Promote the winning direction to the site root; remove the others and the
   chooser.
2. In this repo: add `public/CNAME` containing `www.niranjanrakesh.me`, and in
   `.github/workflows/deploy.yml` delete the `PUBLIC_BASE`/`PUBLIC_SITE` env
   lines.
3. On GitHub → repo → Settings → Pages → Custom domain: enter
   `www.niranjanrakesh.me`, keep "Enforce HTTPS" on.
4. At the DNS provider, replace the existing records with:
   - `CNAME  www  →  fgbutterlettuce.github.io`
   - Apex `niranjanrakesh.me` → four `A` records:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
     (and `AAAA` if offered: `2606:50c0:8000::153` … `:8003::153`)
5. Wait for DNS + the certificate (minutes to an hour). The old host stays
   live until the records change, so there is no downtime window.

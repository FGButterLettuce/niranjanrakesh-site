# niranjanrakesh.me

Personal site. Astro static site, three complete design
directions sharing one content source, deployed to GitHub Pages.

## Layout

```
src/content/projects/   ← case studies (markdown) — SHARED by all directions
src/data/site.json      ← hero/about/archive/contact copy — SHARED
src/pages/index.astro   ← chooser page (temporary, until a winner is picked)
src/pages/a/            ← direction A: "Voltage"   (electric dark, kinetic)
src/pages/b/            ← direction B: "Ink & Ochre" (suave editorial)
src/pages/c/            ← direction C: "Machine"   (precision engineering)
src/styles/{a,b,c}.css  ← per-direction styling
src/lib/url.ts          ← withBase() — ALL internal links/assets go through it
```

Updating content = edit the markdown/JSON, push to `main`, GitHub Actions
rebuilds and deploys automatically.

## Preview URL (now)

https://fgbutterlettuce.github.io/niranjanrakesh-site/ — chooser page linking
to `/a/`, `/b/`, `/c/`.

## Going live on niranjanrakesh.me (manual steps, after picking a winner)

1. Tell Claude which direction won — it becomes the root, the others and the
   chooser are removed.
2. In this repo: add `public/CNAME` containing `www.niranjanrakesh.me`, and in
   `.github/workflows/deploy.yml` delete the `PUBLIC_BASE`/`PUBLIC_SITE` env
   lines. (Claude does this.)
3. On GitHub → repo → Settings → Pages → Custom domain: enter
   `www.niranjanrakesh.me`, keep "Enforce HTTPS" on.
4. At your DNS provider (wherever niranjanrakesh.me's DNS lives — currently
   pointing at Webflow), replace the Webflow records with:
   - `CNAME  www  →  fgbutterlettuce.github.io`
   - Apex `niranjanrakesh.me` → four `A` records:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
     (and `AAAA` if offered: `2606:50c0:8000::153` … `:8003::153`)
5. Wait for DNS + the certificate (minutes to an hour). Webflow stays live
   until the records change, so there is no downtime window.
6. Cancel the Webflow plan. 🎉

## Notes for morning review

- LinkedIn was left out of the contact section (no URL provided — say the word
  and it's a one-line add).
- Contact shows email + phone, as requested.

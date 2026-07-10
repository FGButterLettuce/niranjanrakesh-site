---
title: "Twogether"
tagline: "A place-collecting app for couples: send it anything, get back somewhere to go."
year: "2026"
order: 1
status: "Live in production"
stack: ["Node.js (zero dependencies)", "SQLite", "React", "PWA", "SwiftUI", "Google Places API", "Server-Sent Events", "Caddy + systemd"]
liveUrl: "https://try2gether.app"
image: "images/projects/twogether-detail.webp"
figures:
  - src: "images/projects/twogether-raw-01-places.webp"
    caption: "Places: everything either of you shares, resolved into pinned cards"
  - src: "images/projects/twogether-raw-02-place-detail.webp"
    caption: "A place card: photos, hours, rating, and the couple's own notes"
  - src: "images/projects/twogether-raw-04-memories.webp"
    caption: "Memories: the timeline a place joins after you've been"
figuresLayout: "phones"
highlights:
  - "The backend has zero npm dependencies: routing, storage, auth, and live sync built on Node built-ins"
  - "The ingestion pipeline accepts anything: Maps links, Instagram reels, arbitrary URLs, plain text"
  - "Native iOS app with a Share Extension, near feature parity with the web app"
  - "Runs on real production infrastructure: VPS, systemd, automatic HTTPS, live at try2gether.app"
flavor: "product"
---

Twogether started with my girlfriend and me losing places. We collected them in a notes app, and every entry aged into a pasted link with no context: no photos, no hours, no memory of why we saved it. Planning a day out meant re-researching our own list. The breaking point was finding out, a day late, that we'd been standing right next to a place on our list and walked somewhere else instead.

So this is the fix, built for us and for anyone with the same problem: a private space for two people where anything either of you shares becomes a pinned place card, ready to sort into lists, plan a day around, and file away as a memory after you've been.

## Nothing bounces

The core promise is that you can throw anything at it. Google Maps links resolve to exact pins. Short links get unfurled. Arbitrary URLs get scraped for OpenGraph data. Plain text becomes a place search biased toward the couple's existing pins, so results follow their city. When nothing resolves, the item still saves as a loose find to pin later. Identified places arrive enriched by Google Places with photos, category, rating, price level, and opening hours.

## A backend with zero dependencies

The entire server runs on Node built-ins: `node:http` routing, `node:sqlite` storage with WAL, scrypt password hashing, cookie and Bearer-token sessions, Server-Sent Events for live partner sync, and idempotent boot-time migrations. The package.json has no `dependencies` block at all. Even the integration tests run on Node's built-in test runner against a real spawned server and a temp database.

## From web to native iOS

The product grew a native SwiftUI app on the same backend: lists and cards with native drag-to-reorder, MapKit with hand-offs to Google Maps and Waze, a day planner with `.ics` calendar export and multi-stop routes, and live sync over SSE. The feature that earns its keep is the Share Extension. Share anything from any app on the phone and it lands in the couple's space through the same ingestion pipeline, authenticated via a shared Keychain group.

## Real infrastructure

Twogether runs on infrastructure set up end to end for it: a cloud VPS running the server as a systemd service, Caddy in front for automatic HTTPS, a marketing site at [try2gether.app](https://try2gether.app), and the API on its own subdomain. The box pulls code with a scoped read-only deploy key rather than a personal credential.

---
title: "Twogether"
tagline: "A place-collecting app for couples — send it anything, get back somewhere to go."
year: "2026"
order: 1
status: "Live in production"
stack: ["Node.js (zero dependencies)", "SQLite", "React", "PWA", "SwiftUI", "Google Places API", "Server-Sent Events", "Caddy + systemd"]
liveUrl: "https://try2gether.app"
highlights:
  - "Backend has zero npm dependencies — routing, storage, auth, and live sync built entirely on Node built-ins"
  - "Ingestion pipeline that accepts anything: Maps links, Instagram reels, arbitrary URLs, plain text — nothing bounces"
  - "Native iOS app with a Share Extension, near feature parity with the web app"
  - "Real production infrastructure: VPS, systemd, automatic HTTPS, live at try2gether.app"
flavor: "product"
---

Every couple has the same graveyard: places they said they'd go, buried in chat threads and screenshots. Twogether is the fix — a private space for two people where anything either of them shares becomes a rich, pinned place card to sort into lists, plan days around, and archive as memories after visiting.

## Nothing bounces

The core promise is that you can throw *anything* at it. Google Maps links resolve to exact pins. Short-links get unfurled. Arbitrary URLs are OpenGraph-scraped. Plain text becomes a place search biased toward the couple's existing pins, so results follow their city. And when nothing resolves, the item saves as a "loose find" to pin later — the app never rejects an input. Identified places arrive enriched by Google Places: photos, category, rating, price level, opening hours.

## A backend with zero dependencies

The entire server is built on Node built-ins — `node:http` routing, `node:sqlite` storage with WAL, scrypt password hashing, cookie *and* Bearer-token sessions, Server-Sent Events for live partner sync, idempotent boot-time migrations. There is no npm `dependencies` block at all. Even the integration test suite runs on Node's built-in test runner against a real spawned server and a temp database.

## From web to native iOS

The product grew a native SwiftUI app sharing the same backend: lists and cards with native drag-to-reorder, MapKit with Google Maps and Waze hand-offs, a day planner with `.ics` calendar export and multi-stop routes, and live sync over SSE. The soul feature is a Share Extension — share anything from any app on the phone and it lands in the couple's space through the same "nothing bounces" pipeline, authenticated via a shared Keychain group.

## Real infrastructure

Twogether runs on real production infrastructure set up end to end: a cloud VPS running the server as a systemd service, fronted by Caddy for automatic HTTPS, a marketing site with a waitlist at [try2gether.app](https://try2gether.app), and the API on its own subdomain. Deployment uses a scoped read-only deploy key — the kind of hygiene usually reserved for team infrastructure, applied to a personal product.

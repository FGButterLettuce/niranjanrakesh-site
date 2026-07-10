---
title: "PookieFlix"
tagline: "Self-hosted video watching that keeps two far-apart screens in sync."
year: "2026"
order: 2
status: "Self-hosted, in use"
stack: ["TypeScript", "Fastify", "React", "WebSockets", "HLS", "FFmpeg", "SQLite", "Docker", "Cloudflare Tunnel"]
image: "images/projects/pookieflix-library.webp"
figures:
  - src: "images/projects/pookieflix-pookie.webp"
    caption: "Pookie mode: the pitch for the person who just wants movie night to work"
  - src: "images/projects/pookieflix-hero.webp"
    caption: "Techie mode: the same page flipped for whoever runs the server"
highlights:
  - "Buffer-aware sync: playback pauses for whoever is behind, resumes when both are ready"
  - "The sync protocol is a pure state machine with no I/O, driven by 500ms client heartbeats"
  - "Automatic HLS transcoding so uploads stream adaptively on mobile"
  - "Ships as a prebuilt Docker image: one docker run, then a setup wizard instead of config files"
flavor: "engineering"
---

Movie nights from two places used to be a mess: one of us would buffer while the other kept playing, and a pause on one side never paused the other, so nobody noticed anything was wrong until the scenes stopped matching. We spent half of every movie counting down from three and pressing play together, then drifting apart again anyway.

PookieFlix is what I built to end that: our own server, a shared library, and a sync engine that assumes the two connections are never equal. Movie night now works whenever, wherever.

## Sync that respects reality

Naive sync assumes both connections are equal. They never are. Both viewers send a heartbeat every 500ms and the server is the single source of truth: if either player stalls, both pause, and playback resumes only once both have enough buffer, with thresholds that adapt so one slow moment doesn't set off a chain of pauses. Small drift gets corrected by nudging the lagging player's playback rate; past five seconds the server reseeks both. Every play command carries a wall-clock timestamp slightly in the future, so the two clients start in the same instant regardless of message jitter. The whole protocol lives in a pure state machine with no I/O, which keeps it testable.

## A streaming pipeline, not a file server

Drop an MP4 into the library and the server takes it from there. Thumbnails generate in the background, FFmpeg segments the video into HLS renditions so a phone on a flaky connection gets adaptive streaming instead of a 4GB progressive download, and subtitles come from OpenSubtitles by file hash or your own uploaded files. iOS needed its own tuning pass for autoplay, fast-start, and drift quirks.

## Zero-friction hosting

It ships as a prebuilt Docker image: one `docker run` and it's up. First run opens a setup wizard that asks for the public URL, an optional Cloudflare Tunnel for exposing a home server safely, a password, and a subtitles API key, then writes everything to a single config volume. Sharing is just a room URL. The other person needs no account and installs nothing.

## One site, two audiences

My favorite part of the packaging is the marketing site, because this product genuinely has two users: the person who wants movie night to work, and the person who has to run a server for that to happen. The site carries a toggle for exactly that split. Pookie mode is lilac and lowercase, walks through the misery ("why is watching a movie together so hard??"), and ends with a single call to action: send this page to your techie. Flip the toggle and Techie mode turns the same page dark and talks setup, from the open-source repo to the one Docker container it runs in.

The share button is the whole distribution plan. Tapping it copies a pre-written message that begs, verbatim: *"please please pleeeeaseeee can you set up pookie flix for us my god pleeeeaaaaseeee"*, with the link attached. Self-hosted software only ever spreads from the person who wants it to the person who can run it, so the site is built to make that handoff one tap long. Try both sides below.

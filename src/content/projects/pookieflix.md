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

Movie nights from two places used to be a mess. One of us buffers, the other keeps playing. Someone pauses and the other side doesn't, and nobody notices until the scenes stop matching. Count down from three, press play, drift apart again. We lost half the movie to the tooling.

PookieFlix is what I built to end that: our own server, a shared library, and a sync engine that assumes the two connections are never equal. Movie night now works whenever, wherever.

## Sync that respects reality

Naive sync assumes both connections are equal. They never are. Both viewers send a heartbeat every 500ms and the server is the single source of truth: if either player stalls, both pause, and playback resumes only once both have enough buffer, with thresholds that adapt so one slow moment doesn't set off a chain of pauses. Small drift gets corrected by nudging the lagging player's playback rate; past five seconds the server reseeks both. Every play command carries a wall-clock timestamp slightly in the future, so the two clients start in the same instant regardless of message jitter. The whole protocol lives in a pure state machine with no I/O, which keeps it testable.

## A streaming pipeline, not a file server

Drop an MP4 into the library and the server takes it from there. Thumbnails generate in the background, FFmpeg segments the video into HLS renditions so a phone on a flaky connection gets adaptive streaming instead of a 4GB progressive download, and subtitles come from OpenSubtitles by file hash or your own uploaded files. iOS needed its own tuning pass for autoplay, fast-start, and drift quirks.

## Zero-friction hosting

It ships as a prebuilt Docker image: one `docker run` and it's up. First run opens a setup wizard that asks for the public URL, an optional Cloudflare Tunnel for exposing a home server safely, a password, and a subtitles API key, then writes everything to a single config volume. Sharing is just a room URL. The other person needs no account and installs nothing.

## One site, two audiences

My favorite part of the packaging is the marketing site, because this product genuinely has two users: the person who wants movie night to work, and the person who has to run a server for that to happen. So the site has a toggle. Pookie mode is lilac and lowercase, names the pain ("why is watching a movie together so hard??"), and ends with one job: send this to your techie. Techie mode flips the same page dark and talks setup: open source, one Docker container, running in five minutes. Same product, two readers, one switch.

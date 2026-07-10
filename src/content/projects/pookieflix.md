---
title: "PookieFlix"
tagline: "Self-hosted video watching that keeps two far-apart screens in sync."
year: "2026"
order: 2
status: "Self-hosted, in use"
stack: ["TypeScript", "Fastify", "React", "WebSockets", "HLS", "FFmpeg", "SQLite", "Docker", "Cloudflare Tunnel"]
image: "images/projects/pookieflix-library.webp"
figures:
  - src: "images/projects/pookieflix-hero.webp"
    caption: "The front door: self-hosted, open source, one Docker container"
  - src: "images/projects/pookieflix-library.webp"
    caption: "The library: drop in MP4s, thumbnails and HLS renditions generate in the background"
highlights:
  - "Buffer-aware sync: playback pauses for whoever is behind, resumes when both are ready"
  - "The sync protocol is a pure state machine with no I/O, driven by 500ms client heartbeats"
  - "Automatic HLS transcoding so uploads stream adaptively on mobile"
  - "Ships as a prebuilt Docker image: one docker run, then a setup wizard instead of config files"
flavor: "engineering"
---

PookieFlix started with miserable movie nights from two different places: one side buffering while the other played on, pauses that paused only one player with the other side none the wiser, and endless counting down from three to get back in sync. So I built us a cinema we run ourselves: one server, a shared library, and sync that treats two unequal connections as the normal case. Movie night now works whenever, wherever.

## Sync that respects reality

Naive sync assumes both connections are equal. They never are. Both viewers send a heartbeat every 500ms and the server is the single source of truth: if either player stalls, both pause, and playback resumes only once both have enough buffer, with thresholds that adapt so one slow moment doesn't set off a chain of pauses. Small drift gets corrected by nudging the lagging player's playback rate; past five seconds the server reseeks both. Every play command carries a wall-clock timestamp slightly in the future, so the two clients start in the same instant regardless of message jitter. The whole protocol lives in a pure state machine with no I/O, which keeps it testable.

## A streaming pipeline, not a file server

Drop an MP4 into the library and the server takes it from there. Thumbnails generate in the background, FFmpeg segments the video into HLS renditions so a phone on a flaky connection gets adaptive streaming instead of a 4GB progressive download, and subtitles come from OpenSubtitles by file hash or your own uploaded files. iOS needed its own tuning pass for autoplay, fast-start, and drift quirks.

## Zero-friction hosting

It ships as a prebuilt Docker image: one `docker run` and it's up. First run opens a setup wizard that asks for the public URL, an optional Cloudflare Tunnel for exposing a home server safely, a password, and a subtitles API key, then writes everything to a single config volume. Sharing is just a room URL. The other person needs no account and installs nothing.

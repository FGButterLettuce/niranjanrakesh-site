---
title: "WatchTogether"
tagline: "Self-hosted video watching that keeps two far-apart screens in sync."
year: "2026"
order: 2
status: "Self-hosted, in use"
stack: ["Node.js", "HLS", "FFmpeg", "Docker", "WebSockets", "Cloudflare Tunnel"]
highlights:
  - "Buffer-aware sync: playback pauses for whoever is behind, resumes when both are ready"
  - "Automatic HLS transcoding so uploads stream adaptively on mobile"
  - "One-command Docker deploy with a first-run setup wizard instead of config files"
  - "Room links need no account: share a URL, press play together"
flavor: "engineering"
---

Watch-party plugins break, and the streaming service never has the thing you actually want to watch. WatchTogether skips the middleman entirely: your own server, your own video files, and sync that holds up on real connections.

## Sync that respects reality

Naive sync assumes both connections are equal. They never are. WatchTogether tracks each viewer's buffer state and drift, pauses playback for both when either falls behind, and resumes only when both players are ready. The thresholds adapt, so one slow moment doesn't set off a chain of pauses. Done right, it stops feeling like two video players exchanging messages and starts feeling like sitting on the same couch.

## A streaming pipeline, not a file server

Drop an MP4 into the library and the server takes it from there. Thumbnails generate in the background, FFmpeg segments the video into HLS renditions so a phone on a flaky connection gets adaptive streaming instead of a 4GB progressive download, and subtitles can be fetched via API. iOS needed its own tuning pass for autoplay, fast-start, and drift quirks.

## Zero-friction hosting

The whole thing ships as a Docker Compose stack. First run opens a setup wizard that asks for the public URL, an optional Cloudflare Tunnel for exposing a home server safely, a password, and a subtitles API key, then writes everything to a single config volume. Sharing is just a room URL. The other person needs no account and installs nothing.

---
title: "WatchTogether"
tagline: "Self-hosted synchronized video watching — two screens, one moment."
year: "2026"
order: 2
status: "Self-hosted, in use"
stack: ["Node.js", "HLS", "FFmpeg", "Docker", "WebSockets", "Cloudflare Tunnel"]
highlights:
  - "Buffer-aware sync: playback pauses for whoever is behind, resumes when both are ready"
  - "Automatic HLS transcoding pipeline so uploads stream adaptively on mobile"
  - "One-command Docker deploy with a first-run setup wizard — no config files"
  - "Room links need no account: share a URL, press play together"
flavor: "engineering"
---

Watch-party features die when the video service doesn't have the thing you want to watch, or the plugin breaks, or one side buffers into oblivion. WatchTogether removes the middleman: your own server, your own video files, perfect sync.

## Sync that respects reality

Naive sync assumes both connections are equal. They never are. WatchTogether tracks each viewer's buffer state and drift, pauses playback for *both* when either falls behind, and resumes only when both players are ready — with adaptive thresholds so a briefly slow connection doesn't cause pause-storms. The result feels less like "two video players sending messages" and more like sitting on the same couch.

## A streaming pipeline, not a file server

Drop an MP4 into the library and the server takes it from there: thumbnails generate in the background, FFmpeg segments the video into HLS renditions so phones on flaky connections get adaptive streaming instead of a 4GB progressive download, and subtitles can be fetched via API. iOS quirks around autoplay, fast-start, and drift got their own tuning pass.

## Zero-friction hosting

The whole thing ships as a Docker Compose stack. First run opens a setup wizard — public URL, optional Cloudflare Tunnel for exposing a home server safely, password, subtitles API key — and writes everything to a single config volume. Sharing is a room URL; the other person needs no account, no app, no setup.

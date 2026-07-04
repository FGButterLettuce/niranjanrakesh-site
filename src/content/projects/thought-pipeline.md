---
title: "Thought Pipeline"
tagline: "Talk on your commute, arrive with LinkedIn drafts."
year: "2026"
order: 3
status: "Personal tool, daily driver"
stack: ["Node.js", "Express", "Telegram Bot API", "Whisper (local)", "Docker", "Fly.io"]
highlights:
  - "Voice notes transcribed locally with Whisper — thoughts never leave the box for transcription"
  - "Telegram bot as the capture surface: zero new apps, works from the car"
  - "Topic clustering and batch mode turn scattered rambles into a coherent content calendar"
  - "Draft versioning, scheduling, and analytics on what actually got posted"
flavor: "tool"
---

The best ideas show up mid-commute and die there. Thought Pipeline is a mobile-first companion built around one behavior: talk when the thought happens, refine when you're back at a keyboard.

## Capture where you already are

There's no app to install. A Telegram bot receives voice notes and text — the one chat app already open, usable from CarPlay-adjacent glances or a walk. Server-side, audio is transcribed by a locally-running Whisper model rather than a cloud API, then filed into a pipeline of topics.

## From ramble to draft

Raw transcripts get shaped into LinkedIn-ready drafts, but the interesting part is what happens across *many* recordings: topic clustering groups related fragments recorded days apart, batch mode processes a backlog in one pass, and an enhanced calendar view lays drafts onto a posting schedule. Versioning keeps every edit, and analytics track which drafts became posts.

## Small tool, full lifecycle

It's a personal tool, but it's built like a product: Dockerized, deployed behind a Cloudflare tunnel with a Fly.io config as an alternate path, with real bug-fix history (ghost drafts, scheduling edge cases) from daily use. The point was never "an AI writes for you" — it's a pipeline that makes *your own* thinking survive the commute.

---
title: "Thought Pipeline"
tagline: "Talk on your commute, arrive with LinkedIn drafts."
year: "2026"
order: 3
status: "Personal tool, daily driver"
stack: ["Node.js", "Express", "Telegram Bot API", "Whisper (local)", "Docker", "Fly.io"]
highlights:
  - "Voice notes transcribed locally with Whisper, so audio never leaves the box"
  - "A Telegram bot is the capture surface: nothing new to install, works from the car"
  - "Topic clustering and batch mode turn scattered rambles into a content calendar"
  - "Draft versioning, scheduling, and analytics on what actually got posted"
flavor: "tool"
---

The best ideas show up mid-commute and die there. Thought Pipeline is built around one behavior: talk when the thought happens, refine when you're back at a keyboard.

## Capture where you already are

There's no app to install. A Telegram bot receives voice notes and text, since that's the one chat app already open and usable from the car or on a walk. Server-side, a locally running Whisper model does the transcription instead of a cloud API, then files each note into a pipeline of topics.

## From ramble to draft

Raw transcripts get shaped into LinkedIn-ready drafts, but the interesting part happens across many recordings. Topic clustering groups related fragments recorded days apart, batch mode processes a backlog in one pass, and a calendar view lays drafts onto a posting schedule. Versioning keeps every edit, and analytics track which drafts became posts.

## Small tool, full lifecycle

It's a personal tool built like a product: Dockerized, deployed behind a Cloudflare tunnel with a Fly.io config as an alternate path, and carrying a real bug-fix history (ghost drafts, scheduling edge cases) from daily use. It was never meant to be an AI writing for you. It's a pipeline that keeps your own thinking alive long enough to become a post.

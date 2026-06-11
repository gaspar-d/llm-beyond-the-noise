---
title: LLM Beyond the Noise — Slides
date: 2026-06-10
tags:
  - presentation
  - slidev
  - nttdata
---

# LLM: Beyond the Noise

Slide deck (Slidev) for the NTT Data training on conscious LLM/Agent usage.
Content in pt-BR, Excalidraw look, Anthropic palette.

---

## Run

```bash
npm install
npm run dev
```

Opens at `http://localhost:3030`. Presenter mode (speaker notes + timer): `http://localhost:3030/presenter`.

---

## Export

```bash
npm run export
```

Generates a PDF (requires `playwright-chromium`, installed on first export prompt).

---

## Useful keys

| Key | Action |
| --- | --- |
| `Space` / `→` | Next click/slide |
| `←` | Previous |
| `o` | Slide overview |
| `d` | Toggle dark mode (don't — the theme is light) |
| `g` | Go to slide number |

---

## Structure

- `slides.md` — all slides + speaker notes (HTML comments)
- `style.css` — theme: Anthropic colors, Caveat/Space Grotesk/JetBrains Mono, sketchy boxes
- Diagrams are inline SVG inside `slides.md` — edit text directly, no re-export needed

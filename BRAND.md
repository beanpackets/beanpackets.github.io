# Brand guidelines

Personal identity for **bean.packets** — the portfolio of Matthew Bean, IT support and
network professional.

Version 1.0 · Authored in this repo. Everything here is original to this project.

---

## 1. Overview

### Positioning

For hiring managers filling help desk, desktop support, and NOC roles, bean.packets is
the portfolio of a methodical IT support professional who closes tickets rather than
forwarding them, and who is building toward networking through the CCNA.

### Personality

Methodical. Plainspoken. Curious about how things actually work.

The brand's job is to make one claim credible: **this person is careful.** Every design
decision either supports that or is removed. Flourish for its own sake works against the
pitch.

### The name

`bean.packets` parses as a hostname. It says "networking" before anyone reads a word,
and it is the single most valuable asset in this identity. Lean on it.

---

## 2. Logo and wordmark

The wordmark is the name set in IBM Plex Mono Medium, lowercase, with the dot in
`--color-accent-ink`:

```
bean.packets
```

**Rules**

- Always lowercase. Never `Bean.Packets`, never `BEAN.PACKETS`.
- The dot is always accented. It is the only coloured element in the mark.
- Never substitute a shell prompt (`$`) or a caret for the dot. An earlier version used
  `$ beanpackets`; it read as "developer" and did not survive at favicon size.
- Minimum size 96px wide. Below that, use the dot alone as a mark.
- Clearspace: one lowercase `n` height on all sides.

**Never**

- Stretch, skew, outline, or add effects.
- Place it on the accent fill at small sizes — contrast is only 4.88:1 and the mono
  weight thins out.

---

## 3. Colour

One accent, a warm neutral ramp, and four status hues that are never decorative.

### Light (primary)

| Token                 | Value     | Role                          | On ground |
| --------------------- | --------- | ----------------------------- | --------- |
| `--color-ground`      | `#f5f1ec` | Page                          | —         |
| `--color-surface`     | `#fbf8f4` | Cards                         | —         |
| `--color-surface-2`   | `#f0ebe4` | Recessed blocks               | —         |
| `--color-edge`        | `#e2dad0` | Hairlines                     | —         |
| `--color-edge-bright` | `#c6bbac` | Emphasised borders            | —         |
| `--color-text`        | `#14110f` | Body copy                     | 16.72:1   |
| `--color-muted`       | `#6b615a` | Secondary copy                | 5.36:1    |
| `--color-accent`      | `#e4572e` | Fills, blocks, rules          | 3.28:1 \* |
| `--color-accent-ink`  | `#a83a17` | Accent **text**               | 5.69:1    |
| `--color-on-accent`   | `#2b0e04` | Text knocked out of a fill    | 4.88:1 †  |
| `--color-green`       | `#326b3f` | Status: resolved, available   | 5.64:1    |
| `--color-yellow`      | `#7f5709` | Status: in progress           | 5.71:1    |
| `--color-blue`        | `#27527d` | Status: informational         | 7.21:1    |
| `--color-red`         | `#9e2b20` | Status: escalated, failed     | 6.62:1    |

\* `--color-accent` is **not** a text colour on the light ground. Use `--color-accent-ink`
whenever the accent carries type.
† measured against `--color-accent`, not the ground.

### Dark

Same token names, flipped ramp. The accent brightens because `#e4572e` goes muddy on a
dark ground.

| Token                 | Value     | On ground |
| --------------------- | --------- | --------- |
| `--color-ground`      | `#14110f` | —         |
| `--color-surface`     | `#1c1815` | —         |
| `--color-surface-2`   | `#241f1b` | —         |
| `--color-edge`        | `#322b25` | —         |
| `--color-edge-bright` | `#4d423a` | —         |
| `--color-text`        | `#f5f1ec` | 16.72:1   |
| `--color-muted`       | `#a2968c` | 6.52:1    |
| `--color-accent`      | `#ff6b3d` | 6.65:1    |
| `--color-accent-ink`  | `#ff8b63` | 8.17:1    |
| `--color-green`       | `#5fbf74` | 8.23:1    |
| `--color-yellow`      | `#d9a233` | 8.21:1    |
| `--color-blue`        | `#74a8e0` | 7.54:1    |
| `--color-red`         | `#e8695c` | 5.92:1    |

Components never branch on mode. They read the token; the mode swaps the value.

### The rule that matters

**Colour carries meaning or it does not appear.**

Green means resolved or available. Amber means in progress. Blue means informational.
Red means escalated. The accent marks the primary path through a page — one per view.
Rotating hues across cards for visual variety is the thing this system exists to prevent.

---

## 4. Typography

**IBM Plex Sans** for everything readable. **IBM Plex Mono** for labels, data, code, and
the wordmark. Both are open-licensed and self-hosted — the site makes zero third-party
font requests.

| Role       | Family    | Size                          | Leading | Tracking |
| ---------- | --------- | ----------------------------- | ------- | -------- |
| Display    | Plex Sans | `clamp(2.9rem, 8.2vw, 5.25rem)` | 0.92  | −0.035em |
| Section h2 | Plex Sans | 1.45–2rem                     | 1.15    | −0.025em |
| Sub-head   | Plex Sans | 1.12rem                       | 1.3     | −0.025em |
| Body       | Plex Sans | 1rem–1.125rem                 | 1.7     | 0        |
| Eyebrow    | Plex Mono | 0.75rem, uppercase            | 1       | 0.12em   |
| Chip       | Plex Mono | 0.73rem                       | 1       | 0        |

**Rules**

- Display leading sits below 1. Big type with body leading looks accidental.
- Tracking tightens as size grows, never the reverse.
- Only two weights: 500 and 600. No 700, no light weights.
- Uppercase is reserved for mono eyebrows and chips. Never uppercase a heading.
- Minimum type size anywhere is 11px, and only for mono labels.

---

## 5. Layout

### Page grid

Content sits in `.shell`: max-width `72rem`, gutters `1.25rem` mobile / `2rem` at ≥768px.
Everything aligns to this, including the hero headline.

### The editorial split

The signature layout. The hero divides `1.55fr / 1fr`: copy on paper, a full-bleed accent
panel holding the right edge.

- The copy column's left padding is derived with **container query units** (`100cqw`), not
  `100vw`. `vw` includes the scrollbar and pushed the headline 5px off the grid that every
  section below it uses.
- The accent panel bleeds to the viewport edge. It never has a gutter.
- Below 768px the split stacks: copy first, accent panel becomes a band of at least
  `22svh`.

### Radii

6px on data blocks, 10px on cards, 4px on chips, 8px on buttons. Single-sided accents
(`border-left`) never get a radius.

---

## 6. Motion

- Reveals: 0.7s, `cubic-bezier(0.22, 1, 0.36, 1)`, 16px rise. Once, on enter.
- Hover: 0.25s colour and border only. No lift, no scale on interactive elements.
- The hero mesh runs only when on-screen **and** the tab is visible, at ≤46 nodes, DPR
  capped at 2.
- Everything above is disabled under `prefers-reduced-motion: reduce`. This is
  non-negotiable, not a nicety.

---

## 7. Imagery and graphic elements

- **The mesh.** Drifting nodes with packets crossing the links, drawn in paper on the
  accent panel. One colour — it is texture, not information, so it does not get to spend
  the palette. Without JS the panel is a flat field of accent, which is the intended
  fallback rather than a degraded one.
- **Paper tooth.** Fixed noise at 2% opacity light / 3.5% dark. Above that it reads as
  dirt, not texture.
- **Project art.** Sits at 14% opacity behind cards in light mode, 30% in dark, always
  under a scrim so type stays at full contrast.
- **All network addressing in any diagram, note, or screenshot must come from RFC 5737
  documentation ranges** (`192.0.2.0/24`, `198.51.100.0/24`, `203.0.113.0/24`). Never
  publish real addressing from a real network.

---

## 8. Voice and tone

Write the way a good tech tries to explain something to a colleague: concretely, without
posturing.

**Do**

- Lead with what happened and what it cost. "Cut repeat tickets by 30%" beats "passionate
  about IT."
- Name the actual tool, protocol, or failure mode.
- Admit the limits of what you know. "Correct, just not automatic yet" is a strength.
- Keep sentences short enough to read on a phone between meetings.

**Don't**

- Use "passionate", "guru", "ninja", "rockstar", "synergy", "leverage" as a verb.
- Claim seniority the résumé does not support.
- Write in the third person.
- Use gaming or military metaphors. This is a support role, not a raid.

---

## 9. Accessibility floor

Non-negotiable, and checked before every deploy:

- All text meets **WCAG AA** — 4.5:1 normal, 3:1 for ≥24px or ≥18.66px bold. Currently
  0 failures across the home page and note pages in both modes.
- Focus is always visible: 2px accent outline, 3px offset.
- `prefers-reduced-motion` disables every animation and transition.
- The skip link is real and reaches the main landmark.
- Decorative elements carry `aria-hidden="true"` and are excluded from contrast
  requirements; nothing carrying meaning is decorative.
- No horizontal scroll at any width from 320px up.

---

## 10. Do and don't

**Do**

- Spend colour on meaning.
- Align everything to the page grid, including the hero.
- Ship the light mode as the default; treat dark as an equal, not a fallback.
- Keep third-party requests at zero.

**Don't**

- Add a hue because a section "needs variety."
- Introduce a typeface. Two families is the whole system.
- Reintroduce glow, neon, or heavy shadow. The old ANSI-terminal treatment signalled the
  wrong job.
- Put real personal data — phone, address, personal email — anywhere in this repo. The
  public identity is `bean.packets@gmail.com` only, and CI fails the build if anything
  else reaches `dist/`.

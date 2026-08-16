# Brand guidelines

Personal identity for **bean.packets** — the portfolio of Matthew Bean, IT support and
network professional.

Version 2.0 · Authored in this repo. Everything here is original to this project.

---

## 1. Overview

### Positioning

For hiring managers filling help desk, desktop support, and NOC roles, bean.packets is
the portfolio of a methodical IT support professional who closes tickets rather than
forwarding them, and who is building toward networking through the CCNA.

### Personality

Methodical. Plainspoken. Curious about how things actually work.

The brand's job is to make one claim credible: **this person is careful.** The current
treatment spends its budget on one loud gesture — the hero — and stays disciplined
everywhere else. Careful is demonstrated by the restraint after the hero, not by the
absence of a hero.

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
- Apply the display glow to the wordmark. Glow is for display type only; at 14px it
  turns mono into mush.

---

## 3. Colour

Dark only. There is no light counterpart — this palette does not have one, and a paper
ground cannot carry it. `color-scheme` is pinned to `dark`.

A near-black ground with a green tint so the glow has something to sit in, one accent,
and four status hues that are never decorative.

| Token                 | Value     | Role                          | On ground |
| --------------------- | --------- | ----------------------------- | --------- |
| `--color-ground`      | `#030a05` | Page                          | —         |
| `--color-surface`     | `#08150b` | Cards                         | —         |
| `--color-surface-2`   | `#0d1f11` | Recessed blocks               | —         |
| `--color-edge`        | `#16301b` | Hairlines                     | —         |
| `--color-edge-bright` | `#2a5432` | Emphasised borders            | 2.30:1 \* |
| `--color-text`        | `#eaffe8` | Body copy                     | 19.03:1   |
| `--color-muted`       | `#8fae91` | Secondary copy                | 8.22:1    |
| `--color-accent`      | `#39ff14` | Fills, rules, glows           | 14.76:1   |
| `--color-accent-ink`  | `#7dff66` | Accent **text**               | 15.60:1   |
| `--color-on-accent`   | `#042b06` | Text knocked out of a fill    | 11.44:1 † |
| `--color-green`       | `#00ff9d` | Status: resolved, available   | 15.05:1   |
| `--color-yellow`      | `#ffb43d` | Status: in progress           | 11.29:1   |
| `--color-blue`        | `#00e5ff` | Status: informational         | 13.01:1   |
| `--color-red`         | `#ff3d6e` | Status: escalated, failed     | 5.85:1    |

\* borders only, never type. † measured against `--color-accent`, not the ground.

Contrast is not the constraint it was on paper — everything here clears AA by a wide
margin. **Legibility is.** `#39ff14` at body size vibrates against the ground, which is
why `--color-accent-ink` exists and why the accent proper is reserved for fills, rules,
and glow.

### Status green

The accent took green, so **resolved / available is mint (`--color-green`, `#00ff9d`)**,
not the accent. These read as distinct at chip size; do not collapse them.

### The rule that matters

**Colour carries meaning or it does not appear.**

Green means resolved or available. Amber means in progress. Blue means informational.
Red means escalated. The accent marks the primary path through a page — one per view.
Rotating hues across cards for visual variety is the thing this system exists to prevent.

---

## 4. Typography

**IBM Plex Mono** for display and for labels, data, code, and the wordmark. **IBM Plex
Sans** for everything readable at length. Both are open-licensed and self-hosted — the
site makes zero third-party font requests.

Headings moved to mono in 2.0. Mono is what makes the terminal read as deliberate rather
than as a filter dropped over an editorial layout.

| Role       | Family    | Size                            | Leading | Tracking |
| ---------- | --------- | ------------------------------- | ------- | -------- |
| Display    | Plex Mono | `clamp(2.9rem, 8.2vw, 5.25rem)` | 0.94    | −0.01em  |
| Section h2 | Plex Mono | 1.45–2rem                       | 1.15    | −0.01em  |
| Sub-head   | Plex Mono | 1.12rem                         | 1.3     | −0.01em  |
| Body       | Plex Sans | 1rem–1.125rem                   | 1.7     | 0        |
| Eyebrow    | Plex Mono | 0.75rem, uppercase              | 1       | 0.14em   |
| Chip       | Plex Mono | 0.73rem                         | 1       | 0        |

**Rules**

- Body copy stays Plex Sans. Mono at 1.7 leading over three paragraphs is a wall.
- Mono does not want the tight tracking sans did. −0.01em, not −0.035em.
- Only two weights: 500 and 600. No 700, no light weights.
- Uppercase is reserved for mono eyebrows and chips. Never uppercase a heading.
- Minimum type size anywhere is 11px, and only for mono labels.

---

## 5. Layout

### Page grid

Content sits in `.shell`: max-width `72rem`, gutters `1.25rem` mobile / `2rem` at ≥768px.
Everything aligns to this, including the hero headline.

### The hero

Full-bleed, single column, copy left-aligned on the page grid. Six layers, bottom up:

1. Canvas (flow field)
2. CSS perspective grid floor
3. Top gradient — near-solid ground down to 42%, so the headline never fights the canvas
4. Vignette
5. Copy
6. Status strip and laser rule at the base

- The copy column's left padding is derived with **container query units** (`100cqw`), not
  `100vw`. `vw` includes the scrollbar and pushed the headline 5px off the grid that every
  section below it uses.
- Layer 3 is not optional. Without it the canvas runs under the headline and the type
  loses its contrast floor.

The 1.55fr/1fr editorial split and its bleed-off accent panel were retired in 2.0.

### Radii

6px on data blocks, 10px on cards, 4px on chips, 8px on buttons. Single-sided accents
(`border-left`) never get a radius.

---

## 6. Motion

- Reveals: 0.7s, `cubic-bezier(0.22, 1, 0.36, 1)`, 16px rise. Once, on enter.
- Hover: 0.25s colour, border, and glow. No lift, no scale on interactive elements.
- The hero flow field runs only when on-screen **and** the tab is visible, particle count
  scaled to viewport area with a 360 ceiling, DPR capped at 2.
- The grid floor and status pip animate in CSS and are cheap enough to leave running.
- Everything above is disabled under `prefers-reduced-motion: reduce`. The flow field
  renders ~320 frames once and freezes on a still composition rather than going blank.
  This is non-negotiable, not a nicety.

---

## 7. Imagery and graphic elements

- **The flow field.** Particles read an angle off a layered-sine field and draw one short
  segment per frame. The canvas is washed, never cleared, so the trails are the image.
  Hue rides the field angle across accent green into mint. Bloom comes from `lighter`
  compositing — **never `shadowBlur` per stroke**, which is what kills the framerate.
  Sits at 40% opacity. Without JS the hero is ground plus the CSS grid floor, which is
  the intended fallback rather than a degraded one.
- **Scanlines.** Fixed, 1px in 3 at 22% black, whole page. Heavier makes long-form notes
  tiring; this is the ceiling, not a starting point.
- **Grid floor.** `rotateX(74deg)` on repeating gradients, 18% opacity. The same texture
  at 16% marks the `.grid-texture` section bands.
- **Project art.** 22% opacity behind cards, `saturate(0.5) hue-rotate(55deg)` so
  photography joins the palette instead of fighting it, always under a scrim.
- **Glow.** Display type only (`.neon`, `.neon-accent`), plus fills, rules, and card
  hover. Never on body copy, never on the wordmark, never on anything under 24px.
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
- Let the visual treatment leak into the copy. The design is loud; the writing is not.

---

## 9. Accessibility floor

Non-negotiable, and checked before every deploy:

- All text meets **WCAG AA** — 4.5:1 normal, 3:1 for ≥24px or ≥18.66px bold.
- Focus is always visible: 2px accent outline, 3px offset.
- `prefers-reduced-motion` disables every animation and transition.
- The skip link is real and reaches the main landmark.
- Decorative elements carry `aria-hidden="true"` and are excluded from contrast
  requirements; nothing carrying meaning is decorative.
- No horizontal scroll at any width from 320px up.
- Scanlines and glow are applied so that removing them changes nothing about what the
  page says. If a value is only legible with the glow on, the value is wrong.

---

## 10. Do and don't

**Do**

- Spend colour on meaning.
- Align everything to the page grid, including the hero.
- Keep the loud gesture in the hero and let the sections below stay quiet.
- Keep third-party requests at zero.

**Don't**

- Add a hue because a section "needs variety."
- Introduce a typeface. Two families is the whole system.
- Put glow on body copy, or let the accent carry small type — that is what
  `--color-accent-ink` is for.
- Reach for `shadowBlur` in canvas work. Composite with `lighter` instead.
- Put real personal data — phone, address, personal email — anywhere in this repo. The
  public identity is `bean.packets@gmail.com` only, and CI fails the build if anything
  else reaches `dist/`.

---

## Appendix · Version history

**2.0** — Neon terminal. Dark only, mono display, full-bleed hero over a flow-field
canvas.

**1.0** — Editorial split. Warm paper ground, orange accent, light primary with a dark
counterpart, hero divided 1.55fr/1fr against a bleed-off accent panel.

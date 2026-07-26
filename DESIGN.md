<!-- SEED: established with the user before implementation; re-run $impeccable document once there's code to capture the actual built tokens and components. -->

---
name: Vitor Botelho — Collider Event Display
description: Um portfólio pessoal encenado como o display de um evento de colisão de partículas — cada prova de carreira é uma trilha traçada e quantificada, não um card decorativo.
colors:
  vacuum: "#080E12"
  detector-steel: "#24364A"
  detector-ring: "#3C5B66"
  track-yellow: "#FFD23A"
  track-cyan: "#21B7FF"
  calorimeter-red: "#FF3B3B"
  text-light: "#E6E9EE"
typography:
  display:
    fontFamily: "Orbitron, 'Space Grotesk', sans-serif"
    fontWeight: 700
    letterSpacing: "0.01em"
  label:
    fontFamily: "Rajdhani, 'Space Grotesk', sans-serif"
    fontWeight: 500
    letterSpacing: "0.08em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontWeight: 400
  numeric:
    fontFamily: "'IBM Plex Mono', monospace"
    fontWeight: 400
---

# Design System: Vitor Botelho — Collider Event Display

## Overview

**Creative North Star: "The Collider Event Display"**

The site stages Vitor's career as one held collision event under analysis, not a résumé rendered as a webpage. From a single point at the center, two colored tracks curl outward and land on labeled tags — each tag a real, confirmed fact (a role, a project, a metric) — while an outer ring of calorimeter bars quantifies impact. The visitor's read is: *this person's claims are measured, traced, and reproducible*, echoing the FinOps/audit throughline in PRODUCT.md (showback reports, PDCA cycles, cost recommendations applied with an auditable trail) without illustrating that throughline literally as a dashboard.

This was chosen over the model's own top-ranked, more expected candidates for this subject — a cost/observability dashboard, a blueprint/schematic world, and an infrastructure-diagram world — because none of them carried the same one-glance clarity: *quantities plus traced provenance, in one composition*. Confirmed visual rejections: no generic "AI SaaS" dark hero with a gradient blob and a bold serif headline; no plain black-on-white résumé-as-webpage; no literal AWS-architecture-icon diagram.

**Key Characteristics:**
- Near-black vacuum ground; nothing else competes with it for darkness.
- Two named tracks (yellow = FinOps/automation, cyan = independent product-building) as the structural spine of every section, not a decorative accent.
- Every quantified claim (years, certifications, featured projects, confirmed metrics only — never a fabricated number) renders as a calorimeter bar or a tracked, labeled tag.
- Concentric-ring geometry governs composition and navigation icons; nothing free-floats outside that geometry.
- Orbitron display type reads as instrument signage, not a marketing wordmark.

## Colors

A near-black instrument ground carries two named "particle tracks" as the entire chromatic story, plus one alarm-register red reserved for quantified proof.

### Primary
- **Track Yellow** (`#FFD23A`): the FinOps / cloud-cost-automation track — every label, line, and tag tied to the Itaú-Unibanco role, PDCA cycles, and the AWS cost-automation tool.

### Secondary
- **Track Cyan** (`#21B7FF`): the independent-builder track — every label, line, and tag tied to Servilar, Prumo, and the hackathon/postgrad projects.

### Tertiary
- **Calorimeter Red** (`#FF3B3B`): reserved exclusively for quantified, confirmed proof — bar-chart deposits for counts that are true (years, certifications, featured projects) — never for navigation, decoration, or an invented metric.

### Neutral
- **Vacuum** (`#080E12`): the page ground, full-bleed, always. This is a dark-only system; there is no light-mode variant — the material (glowing tracks against blackness) does not survive on a light ground.
- **Detector Steel** (`#24364A`): structural chrome — panel edges, dividers, inactive ring segments, card borders.
- **Detector Ring** (`#3C5B66`): the concentric ring linework itself, at rest (unlit, unselected state).
- **Text Light** (`#E6E9EE`): body and label text over the vacuum ground.

### Named Rules
**The Two-Track Rule.** Every piece of career content belongs to exactly one of the two tracks (yellow = FinOps/automation, cyan = independent building) or is structural chrome; nothing gets an arbitrary third accent color for variety.

**The Earned-Red Rule.** Calorimeter red only appears next to a number that is true and confirmed in PRODUCT.md's Evidence section. An unconfirmed or aspirational figure never gets a bar; it stays out of the page rather than being estimated.

## Typography

**Display Font:** Orbitron (with Space Grotesk, sans-serif fallback)
**Body Font:** Inter (with system-ui fallback)
**Label/Mono Font:** Rajdhani for short UI labels; IBM Plex Mono for every numeric readout

**Character:** Orbitron gives headlines the geometric, faintly mechanical read of instrument-panel signage rather than a warm editorial voice; IBM Plex Mono makes every number look measured, not written — the pairing exists to make claims read as data, not copywriting.

### Hierarchy
- **Display** (Orbitron, 700, large/clamped — exact scale resolved during implementation): the one-line thesis in the first viewport and section-opening titles.
- **Title** (Orbitron, 600, mid-scale): card and panel headers (Experiência, Projetos, Skills, Contato).
- **Label** (Rajdhani, 500, uppercase, wide letter-spacing — exact tracking resolved during implementation): navigation items, tag chips, button text, section eyebrows.
- **Body** (Inter, 400, 65–75ch max measure): paragraph copy — summaries, project descriptions, bio text.
- **Numeric** (IBM Plex Mono, 400, tabular figures): every count, date, and metric — years, star counts, certification counts, event/version IDs.

### Named Rules
**The Numbers-Are-Mono Rule.** Any digit that represents a real, counted fact (years, certifications, stars, dates) renders in IBM Plex Mono, never in the display or body face — this is what makes a claim read as measured rather than asserted.

## Layout

Composition follows the concentric-ring geometry of the source world: a fixed center (Vitor's identity / the "event") with content radiating outward in rings rather than in a conventional single-column scroll-and-card stack. On wide viewports the two tracks visibly curl from a shared center toward opposite sides of the frame; on narrow viewports the rings collapse to a single vertical spine with the two tracks distinguished by color and a left-edge rule rather than by spatial curl (exact breakpoint values resolved during implementation). Generous negative space around the vacuum ground keeps the lit tracks and calorimeter bars legible; density is otherwise low — this is not a dense dashboard, it is one event examined closely.

## Elevation & Depth

No drop shadows. Depth reads through light, not lift: a lit track or an active ring segment sits "in front" by glow and saturation against the vacuum ground and dimmed/desaturated inactive rings, the way a real detector display separates a live signal from quiescent hardware. Inactive content is dimmed toward Detector Steel/Detector Ring rather than shrunk or shadowed.

### Named Rules
**The Glow-Not-Lift Rule.** Anything "active" or "selected" gets brighter and more saturated, never a box-shadow or a translateY lift; anything inactive desaturates toward the steel/ring neutrals instead of disappearing.

## Shapes

Circles and concentric arcs are the native form — navigation icons, the central "event" mark, and section dividers all read as ring segments, not rounded rectangles. Cards and panels get hairline borders (Detector Steel) with sharp or minimally rounded corners (a machined-panel character, not a soft consumer-app card) — exact radius value resolved during implementation, but it stays small enough to keep the instrument-panel read rather than approaching a friendly, fully-rounded card.

## Do's and Don'ts

### Do:
- **Do** keep the vacuum ground (`#080E12`) full-bleed behind every section; never introduce a white or light card surface.
- **Do** assign every piece of career content to the yellow or cyan track before designing its component; a track-less item does not belong on this page.
- **Do** render every navigation and status icon as a ring/arc form, echoing the detector geometry.
- **Do** render real numbers in IBM Plex Mono with a calorimeter-red accent only when the figure is confirmed in PRODUCT.md.

### Don't:
- **Don't** add a third or fourth accent color "for variety" — the two-track system plus calorimeter red is the whole chromatic vocabulary.
- **Don't** use drop shadows, glassmorphism, or gradient blobs anywhere; depth comes from glow and desaturation only.
- **Don't** invent a dollar figure, client count, or outcome metric that is not in PRODUCT.md's Evidence section, even as a placeholder bar — leave it out rather than estimate it.
- **Don't** let the display face (Orbitron) run onto body copy; it is for headlines and short titles only.

---
name: Vibe Coding Engineering Field Guide
description: A ContraSense Chinese engineering field guide presented as a browser-native slide deck
colors:
  deck-orange: "#d97857"
  deck-orange-strong: "#c76544"
  deck-ink: "#1d1b18"
  warm-paper: "#f3eadb"
  high-paper: "#fbf4e8"
  primary-ink: "#1d1b18"
  muted-ink: "#615b52"
  paper-mist: "#d8d0c4"
  structural-gray: "#756f67"
typography:
  display:
    fontFamily: "Noto Serif SC Variable, Songti SC, STSong, serif"
    fontSize: "clamp(3.2rem, 5.2vw, 5rem)"
    fontWeight: 850
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Noto Serif SC Variable, Songti SC, STSong, serif"
    fontSize: "clamp(2.6rem, 4.6vw, 4.6rem)"
    fontWeight: 850
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Instrument Sans Variable, PingFang SC, Microsoft YaHei, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Instrument Sans Variable, PingFang SC, Microsoft YaHei, system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 700
    lineHeight: 1
  mono:
    fontFamily: "JetBrains Mono Variable, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.66rem"
    fontWeight: 400
    lineHeight: 1.5
  sequence:
    fontFamily: "Fraunces Variable, serif"
    fontSize: "clamp(1.35rem, 7vw, 11rem)"
    fontWeight: 850
    lineHeight: 0.8
    letterSpacing: "-0.04em"
rounded:
  compact: "8px"
  control: "10px"
  card: "12px"
  panel: "14px"
  pill: "999px"
components:
  button-primary:
    backgroundColor: "{colors.deck-orange}"
    textColor: "{colors.deck-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"
    height: "46px"
  button-primary-hover:
    backgroundColor: "{colors.deck-orange-strong}"
    textColor: "{colors.deck-ink}"
  button-night:
    backgroundColor: "rgba(255, 255, 255, 0.04)"
    textColor: "#f7f2e9"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"
    height: "46px"
  panel-dark:
    backgroundColor: "{colors.deck-ink}"
    textColor: "#f7f2e9"
    rounded: "{rounded.panel}"
    padding: "24px"
---

# Design System: Vibe Coding Engineering Field Guide

## Overview

**Creative North Star: "The Warm Evidence Desk"**

The interface is a sixteen-slide browser-native presentation. Cream paper carries the argument, black ink provides structure, and orange illustrations turn abstract engineering ideas into human actions. Opening the URL reveals the cover immediately; there is no long-form site beneath the deck and no launch modal.

The visual language takes cues from Anthropic's warm editorial restraint without reproducing its brand assets. The deck stays logo-free and uses Chinese-first typography, original loose-ink illustrations, and source-bound claims.

**Key Characteristics:**

- A fixed 16:9 slide master using orange, cream, and black
- A logo-free player and slide master that keep attention on the presentation content
- Editorial Chinese display type beside compact technical labels
- Original black-ink illustrations that explain one action at a time
- Orange reserved for illustration fields, active controls, and emphasis
- One primary claim and one composition per slide

## Colors

The palette is deliberately limited to orange, cream, and black.

### Primary

- **Deck Orange:** Illustration fields, selected controls, chapter emphasis, and active states.
- **Deck Ink:** Text, rules, surrounding chrome, and crisp offset shadows.

### Secondary

- **Warm Paper:** The main reading surface and the light chapter background.
- **Structural Gray:** Inactive indices, neutral geometry, and information that belongs to the frame rather than the current decision.

### Neutral

- **Warm Ink:** High-contrast technical stages and the dark theme.
- **Deep Ink:** Nested dark surfaces and presentation surrounds.
- **Ink Panel:** Bounded artifacts and checks inside an ink stage.
- **Warm Paper:** Long-form reading chapters.
- **High Paper:** Raised reading surfaces and source cards.
- **Primary Ink:** Main text on paper.
- **Muted Ink:** Explanatory copy and supporting labels on paper.
- **Paper Mist:** Body copy and secondary information on ink surfaces.

### Named Rules

**The Three-Color Rule.** Orange carries emphasis, cream carries reading, and black carries structure. New decorative colors are not introduced.

**The Desk Rule.** Reading happens on warm paper. Orange may fill a chapter or illustration, but it never reduces text contrast.

## Typography

- **Display Font:** Noto Serif SC Variable with Songti fallbacks
- **Body Font:** Instrument Sans Variable with Chinese UI-sans fallbacks
- **Label/Mono Font:** JetBrains Mono Variable for code, protocol names, revisions, and measured state; Fraunces Variable for sequence numerals

**Character:** Dense Chinese serif headlines carry the editorial voice. A quiet sans-serif body keeps technical explanation direct, while the two specialist faces appear only when the content is genuinely sequential or machine-readable.

### Hierarchy

- **Display:** Hero statements and playback titles, limited to two or three balanced lines.
- **Headline:** Chapter titles and major section statements.
- **Title:** Artifact names, review verdicts, and bounded subproblems.
- **Body:** Explanations with a preferred measure of 60 to 75 Chinese characters when the layout allows it.
- **Label:** Controls and compact metadata written in sentence case.
- **Mono:** Code, revision identifiers, protocol state, and step counters only.

### Named Rules

**The Editorial Reserve Rule.** Serif display type appears only where the reading order needs a major pause. Interface controls and explanatory paragraphs stay sans-serif.

## Layout

Every page uses the same 16:9 canvas and scales as one unit in the workspace. A small slide header carries the chapter label and page count. A three-part footer closes the master. Content uses cover, left-right split, reversed split, and full-width statement layouts so adjacent slides do not repeat one silhouette.

The workspace canvas is sized from both viewport width and available height. Fullscreen switches to a full-bleed viewport canvas, removes the preview rail and reserved control row from layout, and floats the remaining controls above the slide. Container-relative units keep type, rules, images, and spacing proportional to the available width.

**The Canvas Rule.** Workspace mode preserves 16:9 geometry. Fullscreen uses the complete viewport without letterboxing or reserved chrome.

## Elevation & Depth

Most depth comes from contrast and overlap. Ordinary explanatory groups remain flat. The hero and slide illustrations may use one crisp offset ink shadow so they feel like printed sheets placed on a desk.

### Shadow Vocabulary

- **Print Offset:** A crisp ink offset beneath hero and presentation illustrations.
- **Paper Separation:** A single rule or tonal step instead of a generic soft card shadow.

**The Bounded Depth Rule.** A surface may use a border or a shadow to establish separation. Combining both is reserved for a stage whose frame is part of the product metaphor.

## Shapes

Panels are square or use a restrained 3 to 5 pixel radius. Controls are compact rectangles rather than pills. A rounded rectangle must represent a real artifact or state, never prose wrapped for decoration.

The player and slide master remain logo-free. Diagrams use straight grids and tonal nesting, while narrative moments use the original loose-ink illustration set.

## Components

### Buttons

- **Shape:** Primary and secondary actions use a 44-pixel minimum height and 5-pixel radius.
- **Primary:** Deck orange with a high-contrast ink foreground and no decorative shadow.
- **Hover / Focus:** Hover deepens the orange surface. Focus stays highly visible across paper, orange, and ink.
- **Ink:** A transparent surface and visible paper border for actions inside ink chapters.

### Cards / Containers

- **Corner Style:** Near-square panel geometry for artifacts and compact controls.
- **Background:** One tonal step above the parent chapter.
- **Shadow Strategy:** Flat by default; stage and raised-paper shadows only where the object boundary matters.
- **Border:** A single low-contrast stroke when the edge needs to remain visible without elevation.
- **Internal Padding:** Compact controls use 12 to 20 pixels; substantial artifacts start near 24 pixels and grow with viewport width.

### Player Chrome

The left rail holds slide previews. A single fullscreen button sits in the upper-right corner, while page controls sit at the lower right. Fullscreen hides both control groups until the pointer enters their reveal zones.

### Playback Mode

Playback is the product entry point. Cover, boundary, and closing slides use the illustration set. Desktop and mobile preserve the fixed ratio. Direction keys, Page Up, Page Down, Space, Home, and End navigate; Escape and the last-page action return to the cover.

## Do's and Don'ts

### Do:

- **Do** keep claims next to their source links and make restricted access visible.
- **Do** use orange, cream, and black according to the Three-Color Rule.
- **Do** keep illustrations sparse, original, text-free, and legible at slide size.
- **Do** test Chinese headings at desktop and mobile widths before release.
- **Do** preserve keyboard operation, visible focus, reduced motion, and fixed-ratio mobile rendering.
- **Do** label exercise data, human decisions, and unknown outcomes explicitly.

### Don't:

- **Don't** copy external brand illustrations, add a logo, or introduce decorative gradients.
- **Don't** use more than one crisp offset shadow on a single stage.
- **Don't** wrap explanatory prose in repeated same-size cards.
- **Don't** use mono type as a generic technical costume.
- **Don't** present generated expectations as a browser accessibility tree or a repair authorization.
- **Don't** add a website layer, launch modal, close action, or alternate long-form route beneath the deck.

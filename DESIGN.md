---
name: Vibe Coding Engineering Field Guide
description: A Chinese engineering field guide presented as an editorial review room
colors:
  action-blue: "#2d6cf6"
  action-blue-strong: "#174ec8"
  review-coral: "#ff927d"
  midnight: "#0b192a"
  deep-midnight: "#071321"
  midnight-panel: "#11263d"
  warm-paper: "#f4f1e9"
  high-paper: "#fffdf7"
  primary-ink: "#0d1b2e"
  muted-ink: "#556477"
  cool-mist: "#bdc8d7"
  structural-steel: "#6380a9"
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
    backgroundColor: "{colors.action-blue}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"
    height: "46px"
  button-primary-hover:
    backgroundColor: "{colors.action-blue-strong}"
    textColor: "#ffffff"
  button-night:
    backgroundColor: "rgba(255, 255, 255, 0.04)"
    textColor: "#f7f2e9"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"
    height: "46px"
  panel-dark:
    backgroundColor: "{colors.midnight-panel}"
    textColor: "#f7f2e9"
    rounded: "{rounded.panel}"
    padding: "24px"
---

# Design System: Vibe Coding Engineering Field Guide

## Overview

**Creative North Star: "The Midnight Review Room"**

The interface behaves like an editorial slide deck opened inside a quiet engineering review room. Midnight surfaces hold observation and decision work. Warm paper carries explanations that need sustained reading. One exercise stays visible while first principles, domain ownership, and adversarial review change the way it is examined.

The visual language studies the fixed stages, restrained playback controls, and alternating paper-and-night rhythm found in nyblnet/bento. The product keeps its own identity through Chinese-first editorial type, A3S blue actions, coral review signals, domain maps, and source-bound claims.

**Key Characteristics:**

- Alternating midnight and warm-paper chapters
- Editorial Chinese display type beside compact technical labels
- Fixed-stage diagrams whose state changes without hiding the underlying task
- Blue reserved for action and verified progress, coral reserved for risk and challenge
- Readable document flow before motion or presentation effects

## Colors

The palette separates action, review pressure, reading surfaces, and technical structure.

### Primary

- **A3S Action Blue:** Primary actions, selected tabs, completed workflow segments, and verified progress.
- **Deep Action Blue:** Hover and pressed emphasis where the normal action blue needs a clear state change.

### Secondary

- **Review Coral:** Warnings, unresolved decisions, focus rings, challenge states, and the second line of the hero statement.
- **Structural Steel:** Inactive indices, neutral geometry, and information that belongs to the frame rather than the current decision.

### Neutral

- **Midnight:** Major interactive stages and adversarial chapters.
- **Deep Midnight:** Persistent chrome, navigation, and nested dark surfaces.
- **Midnight Panel:** Bounded artifacts and checks inside a dark stage.
- **Warm Paper:** Long-form reading chapters.
- **High Paper:** Raised reading surfaces and source cards.
- **Primary Ink:** Main text on paper.
- **Muted Ink:** Explanatory copy and supporting labels on paper.
- **Cool Mist:** Body copy and secondary information on midnight surfaces.

### Named Rules

**The Authority Color Rule.** Blue marks an action or a verified state. Coral marks risk, review pressure, or an unresolved decision. Decorative use weakens both meanings.

**The Two-Room Rule.** Reading happens on warm paper and active review happens on midnight. New surfaces must belong to one room before they receive an accent.

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

The main container is 1180 pixels wide with a 24-pixel minimum gutter on desktop. Chapter introductions pair a narrow sequence column with a wider reading column. Complex artifacts sit below the introduction and occupy the full container so their internal hierarchy has room to work.

The sequence is meaningful and remains stable from the exercise through sources. At 860 pixels the header becomes a compact mobile menu and the hero becomes one column. At 720 pixels complex boards stack, the workflow rail becomes horizontally scrollable, and the DDD layers follow reading order. At 620 pixels chapter introductions stack and display sizes reduce. Tables preserve semantic markup inside bounded horizontal scroll regions. The document itself must not overflow at a 375-pixel viewport.

**The Visible-Default Rule.** Main reading content is present in normal document flow. Motion can explain a state change, but it cannot be the condition that makes the content appear.

## Elevation & Depth

Most depth comes from tonal layering. Paper cards sit one tone above their chapter, while dark artifacts sit one tone above midnight. Wide, softly offset shadows are reserved for stage-scale objects and raised paper; ordinary explanatory groups remain flat.

### Shadow Vocabulary

- **Stage Shadow:** A broad dark shadow beneath the hero and presentation stages.
- **Paper Shadow:** A lighter ambient shadow beneath diagrams and editorial panels.

**The Bounded Depth Rule.** A surface may use a border or a shadow to establish separation. Combining both is reserved for a stage whose frame is part of the product metaphor.

## Shapes

Panels use restrained 12 to 14 pixel corners. Small controls use the 10 pixel control radius, while pill geometry is limited to compact actions and header controls. Large rounded rectangles represent real artifacts, stages, layers, or verdicts; prose does not receive a container merely for decoration.

The brand mark uses three crisp geometric pieces inside a compact rounded square. Diagrams use straight grids and tonal nesting rather than decorative illustration.

## Components

### Buttons

- **Shape:** Primary and secondary actions use the pill token with a 46-pixel minimum height.
- **Primary:** Action blue with a high-contrast foreground and a soft downward shadow.
- **Hover / Focus:** Hover lifts by two pixels and deepens the surface. Focus uses the coral ring across light, dark, blue, and paper surfaces.
- **Night:** A translucent white surface and visible border for actions inside midnight chapters.

### Cards / Containers

- **Corner Style:** Panel geometry for artifacts and 12-pixel corners for nested objects.
- **Background:** One tonal step above the parent chapter.
- **Shadow Strategy:** Flat by default; stage and raised-paper shadows only where the object boundary matters.
- **Border:** A single low-contrast stroke when the edge needs to remain visible without elevation.
- **Internal Padding:** Compact controls use 12 to 20 pixels; substantial artifacts start near 24 pixels and grow with viewport width.

### Navigation

The sticky header stays 58 pixels high and uses deep midnight at every theme. Desktop links are quiet until hover. Mobile replaces the link row with a full-width dark menu whose items keep the document order. Theme, repository, and presentation actions remain icon-led but expose complete accessible names.

### Three-Lens Stage

The fictional task remains visible while the active lens changes. Tabs expose selected state, panels are named by their tab, and the progress line reflects the current lens. The active lens may move or clip into place, but its content starts visible.

### Workflow Player

Desktop uses a vertical rail beside a stage. Mobile turns the rail into a horizontally scrollable list with no visible scrollbar. Every step exposes an artifact, the contribution of each lens, and an exit condition.

### Playback Mode

Playback centers a 16:9 canvas inside quiet dark chrome. Mobile removes the fixed ratio, preserves reading order, and keeps previous, next, and close controls named when visible labels are hidden.

## Do's and Don'ts

### Do:

- **Do** keep claims next to their source links and make restricted access visible.
- **Do** use blue, coral, and neutral structure according to the Authority Color Rule.
- **Do** test Chinese headings at desktop and mobile widths before release.
- **Do** preserve keyboard operation, visible focus, reduced motion, and dark-theme contrast.
- **Do** label exercise data, human decisions, and unknown outcomes explicitly.

### Don't:

- **Don't** use gradients in text, decorative glass, hard offset shadows, or improvised glyph icons.
- **Don't** wrap explanatory prose in repeated same-size cards.
- **Don't** use mono type as a generic technical costume.
- **Don't** present generated expectations as a browser accessibility tree or a repair authorization.
- **Don't** let motion, horizontal scrolling, or playback become the only way to read required content.

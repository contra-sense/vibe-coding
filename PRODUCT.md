# Product Brief

## Product

Vibe Coding Engineering Field Guide is a sixteen-slide Chinese presentation for people who use coding agents in real repositories.

## Problem

The material needs to explain how people and teams turn model speed into reusable engineering judgment. An audience should be able to follow the argument in one sitting and leave with concrete practices.

## Audience

- Engineers using coding agents in existing repositories
- Reviewers responsible for accepting agent-generated changes
- Frontend and test engineers adopting a3s-test
- Technical leads defining repository boundaries, permissions, and release evidence

## Promise

After reading the guide, a reader should know what judgment to keep human, how to store team knowledge in a repository, how to challenge weak requests, and how to close changes with tests and review evidence.

## Narrative spine

The deck moves through three parts:

1. Fluid and crystallized intelligence explain where human attention compounds.
2. Shared crystallized intelligence explains how teams retain verified judgment.
3. Repository structure, rule files, first-principles review, testing, a3s-test, and Agentic Reviewer turn that judgment into daily practice.

## Required content

- Fluid and crystallized intelligence
- Shared team judgment as the enterprise efficiency principle
- Monorepo and DDD as context and ownership boundaries
- CLAUDE.md and AGENTS.md as repository-local engineering judgment
- A non-sycophantic first-principles feature gate
- Minimal necessary implementation and adversarial review
- Unit, integration, and end-to-end testing
- One chapter each for a3s-test and Agentic Reviewer

## Experience requirements

- Use a warm editorial visual grammar with paper-led slides, Chinese serif display type, square loose-ink illustrations, and quiet controls
- Keep the player, slide master, and browser chrome free of logos
- Open directly on the cover with no website, launch trigger, dialog, or close action
- Keep workspace slides at 16:9 and let fullscreen fill the complete browser viewport
- Preserve keyboard operation, direct page navigation, reduced-motion behavior, and a last-page return to the cover

## Copy requirements

- Public copy is natural Chinese edited under the human-writing rules
- Claims remain tied to fixed repository sources
- The fictional walkthrough is labelled as an exercise
- No unnamed incidents, invented metrics, borrowed authority, or vague claims of best practice
- Avoid marketing filler, adversarial posturing without a concrete check, and mechanical parallel prose

## Non-goals

- Teaching all of DDD
- Replacing repository-local guidance
- Presenting model output as a browser accessibility tree or a repair authorization
- Reproducing Bento branding, product claims, or application code
- Adding a backend, analytics, authentication, or network-dependent runtime feature

## Acceptance criteria

- The root application renders only the presentation
- Sixteen slides form one coherent argument and use varied presentation layouts
- Keyboard controls support previous, next, Home, End, and Escape-to-cover behavior
- The last page exposes a clear return-to-cover action
- The rendered deck has no page overflow or clipped Chinese headings at desktop and mobile sizes
- Tests, formatting, TypeScript checks, and production build pass
- A desktop and mobile browser review finds no console errors and verifies the primary interactions

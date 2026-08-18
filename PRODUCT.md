# Product Brief

## Product

Vibe Coding Engineering Field Guide is a source-backed Chinese handbook for people who let coding agents change real repositories and user interfaces.

## Problem

The current site introduces useful ideas, but it stops at slogans and compact summaries. A reader can repeat the five-step loop without being able to decide where a rule belongs, what evidence closes a task, or how to challenge an apparently successful result.

## Audience

- Engineers using coding agents in existing repositories
- Reviewers responsible for accepting agent-generated changes
- Frontend and test engineers adopting A3S Test and its embedded Test Kit
- Technical leads defining repository boundaries, permissions, and release evidence

## Promise

After reading the guide, a reader should be able to turn an ambiguous request into a bounded task packet, place each rule and change in the right DDD layer, run an adversarial review, and close the work with target-side evidence.

## Narrative spine

One explicitly fictional login-failure improvement travels through the whole guide. The same task is transformed by three lenses:

1. First principles identify the facts, side effects, observable outcome, and uncertainty that cannot be wished away.
2. Domain-driven design decides ownership, boundaries, invariants, and dependency direction.
3. Adversarial review attacks goal drift, boundary leakage, broken provenance, authority expansion, and unknown outcomes.

These lenses converge in one end-to-end workflow. They are not independent chapters that can contradict each other.

## Required content

- A first-principles derivation with premise, consequence, failure mode, and required evidence
- A practical DDD boundary model covering domain, application, infrastructure, and presentation
- A decision table for placing common UI and service changes
- A structured adversarial review with explicit attacks and release gates
- A detailed task packet with annotations and a copy action
- A3S Test coverage for observed surfaces, expected surface contracts, deterministic reports, human repair authorization, and re-verification
- A monorepo field procedure and failure postmortems
- A commit-pinned source ledger with private-source access warnings

## Experience requirements

- Use the visual grammar of nyblnet/bento as a reference: midnight and warm-paper chapters, editorial serif display type, fixed-ratio stage compositions, quiet controls, and one object visibly changing between states
- Retain A3S blue as the primary action color and reserve coral for risk and challenge
- Default to readable document flow; motion may enhance a visible state but must never be required to reveal content
- Provide a compact sticky header, responsive navigation, light and dark themes, and a presentation mode
- Make the three lenses and their convergence findable within the first viewport
- Preserve keyboard operation, visible focus, reduced-motion behavior, and mobile reading order

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

- The main page contains all required content and the three lenses form one coherent workflow
- Every factual section links to a relevant pinned source
- The task packet copy action reports success and failure accessibly
- Presentation mode supports keyboard navigation, focus containment, close, progress, and mobile layouts
- The rendered page has no hidden-by-default reading sections, horizontal page overflow, unreadable code, or clipped Chinese headings at desktop and mobile sizes
- Tests, formatting, TypeScript checks, and production build pass
- A desktop and mobile browser review finds no console errors and verifies the primary interactions

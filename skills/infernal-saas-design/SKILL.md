---
name: infernal-saas-design
description: Apply the Infernal SaaS design system to developer tooling interfaces, especially Dragonshorn Studios Sumomo, Maomao, Mergehenna, and agent workspaces. Use when creating or refactoring forms, review cards, agent planning views, workspace navigation, command menus, status chips, diffs, or dark/light product UI and when the user asks to keep interfaces visually consistent with Infernal UI.
---

# Infernal SaaS Design

Use the existing system, not improvised one-off styling. Treat this skill as the source of *design decisions* and the repository's `src/infernal.css` as the source of *styles*. Keep product behavior in its owning application.

## Workflow

1. Inspect the consuming app's framework, existing components, theme switch and accessibility conventions.
2. Select `machine` (Sumomo/coding) or `mergehenna` (Maomao/review) as the brand; support both `dark` and `light` where practical.
3. Load or install the library stylesheet and optional JavaScript; see [Integration](references/integration.md). Reuse namespaced `.if-*` classes and `--if-*` tokens. Do not fork the stylesheet per screen.
4. Identify the smallest sufficient pattern. Read [Component map](references/component-map.md); for complex UIs read [Product patterns](references/product-patterns.md).
5. Implement actual application state and actions using the host framework. HTML showroom interactions are mock behaviors and must not be copied as backend logic.
6. Verify keyboard focus, responsive layout, semantic status labels, contrast, reduced-motion, error/empty/loading states and product-specific constraints.

## Visual character

- Modern, restrained developer SaaS. Dark plum/purple for **Machine**; copper/ember for **Mergehenna**. Infernal means subtle atmosphere, never cartoon lava or unreadable effects.
- Surfaces are quiet, borders soft, spacing consistent. Dense operations UI remains scan-friendly; metadata uses a monospace face.
- Reserve colors for semantics: accent is not a substitute for danger/warning/success. A blocked merge must say *Blocked*, even if it also glows.
- Animated `.if-card--ember` and `.if-card--ember-strong` are optional accents; never encode essential state through motion. Honor `prefers-reduced-motion`.
- A global icon rail plus contextual navigation is appropriate for many workspaces/areas; do not force it on small standalone pages.

## Critical rules

- Do not rewrite Maomao's stack or review semantics: preserve parent job, ordered SHA-pinned members, reviewer states, aggregation and stale/superseded cases.
- Do not collapse Sumomo's planning, execution, tool calls and PR follow-up into a generic chat transcript.
- Keep components keyboard-accessible. Use semantic buttons/inputs, visible labels, `aria-expanded`, `aria-selected`, and focus handling.
- The showroom is a reference implementation, not a UI dependency. Do not copy fake review results or demo action handlers into production.
- Before adding a new style, search `src/infernal.css` for an existing class and token. Extend reusable classes only when the new behavior generalizes across products.

## Source and previews

- Repo: `https://github.com/Dragonshorn-Studios/infernal-saas`
- Published examples (after Pages is enabled): `https://dragonshorn-studios.github.io/infernal-saas/`
- See `examples/maomao/` and `examples/sumomo/` for complex composition examples, and `examples/rail.html` for two-tier navigation.

# Product-specific patterns

## Maomao / Mergehenna

Preserve a job-centered IA: queue → job detail → specialist runs → findings and aggregation. A stack review is a parent job plus ordered member reviews, not a flat list of independently mergable PRs.

- Display stack member position, PR number, base/head refs, pinned head SHA and individual state.
- Distinguish router choice, specialist verdict, aggregator verdict, schema/transport failure and stale jobs.
- Show severity, confidence, category, file/line, reason, suggested check, reviewer agreement and fingerprint on finding cards.
- Include filtered reviewer board, webhook delivery audit and profile revisions when designing operator surfaces.
- Never make review or merge actions appear completed in a preview without actually calling the product backend.

Reference: `examples/maomao/index.html`, `examples/maomao/screen.html`.

## Sumomo / Infernal Coding Machine

Preserve a workspace cockpit with explicit modes. Planning, coding and PR follow-up have distinct needs.

- Planning: editable plan, open questions, approval/handoff, replan, saved state.
- Coding: chat, live tool activity, per-message agent/model control, permissions, progress steps and rich errors.
- PR: changed files/diffs, CI checks, review comments, follow-up loop, round cap and manual/auto mode.
- Consider a persistent icon rail with contextual side nav when many workspaces/agents are present. Recent and pinned workspaces belong in the secondary pane.

Reference: `examples/sumomo/index.html`, `examples/sumomo/screen.html`, `examples/rail.html`.

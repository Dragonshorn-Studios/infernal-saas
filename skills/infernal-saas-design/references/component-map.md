# Component map

| Intent | Classes |
|---|---|
| App shell and navigation | `.if-app`, `.if-sidebar`, `.if-topbar`, `.if-nav-link`, `.if-content` |
| Two-tier contextual nav | `.if-rail-layout`, `.if-rail`, `.if-rail__button`, `.if-context-nav`, `.if-context-nav__item` |
| Cards and panels | `.if-card`, `.if-card--soft`, `.if-card--interactive`, `.if-panel`, `.if-panel__head`, `.if-panel__body` |
| Atmospheric cards | `.if-card--ember`, `.if-card--ember-strong` |
| Buttons | `.if-button`, `--primary`, `--danger`, `--ghost`, `--sm`, `--lg`, `--icon` |
| Status and labels | `.if-badge`, `--running`, `--success`, `--warning`, `--danger`, `--info`, `.if-dot` |
| Forms | `.if-field`, `.if-label`, `.if-input`, `.if-select`, `.if-textarea`, `.if-check`, `.if-switch`, `.if-range`, `.if-error` |
| Navigation and selection | `.if-tabs`, `.if-tab`, `.if-crumbs`, `.if-tree`, `.if-command-list` |
| Data | `.if-table`, `.if-queue-item`, `.if-timeline`, `.if-metric-strip`, `.if-audit`, `.if-log` |
| Agent / review | `.if-chat`, `.if-activity`, `.if-stack-review`, `.if-stack-member`, `.if-reviewer-run`, `.if-finding`, `.if-plan-step`, `.if-tool-card` |
| State and feedback | `.if-progress`, `.if-banner`, `.if-empty`, `.if-skeleton`, `.if-dialog`, `.if-popover`, `.if-tooltip` |

Use `data-if-brand="machine|mergehenna"` and `data-if-theme="dark|light"` on the root to set token values. Do not override semantic status tokens with ad hoc hardcoded RGB.

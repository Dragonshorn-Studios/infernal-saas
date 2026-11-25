# Integration

Use the checked-in distribution rather than hand-copying styles. Examples:

```html
<link rel="stylesheet" href="https://dragonshorn-studios.github.io/infernal-saas/assets/infernal.css">
<html data-if-theme="dark" data-if-brand="machine">
```

For local/installed source, copy `dist/infernal.css` and optionally `dist/infernal.js` into the application's assets. The project has no runtime dependencies and no auto-init side effects.

Optional ESM utilities:

```js
import { bindTabs, bindContextRail, setAppearance } from './infernal.js';
setAppearance({ theme: 'dark', brand: 'mergehenna' });
const cleanup = bindTabs(document);
// Call cleanup() when the host view is destroyed.
```

The tabs utility expects `[data-if-tablist]` containing `[role=tab][aria-controls]` referencing a panel ID. The rail utility expects buttons with `data-if-rail-area` and accepts an `onChange(area)` callback that lets the host render contextual sidebar contents. Keep pinned workspace state in the app, not the library.

Token usage: `var(--if-bg)`, `var(--if-surface)`, `var(--if-text)`, `var(--if-accent)`, `var(--if-line)`, `var(--if-success)`, `var(--if-danger)`.

Do not assume GitHub Pages is configured merely because the workflow exists. If not enabled, import local files. A tagged release offers an immutable source reference; `main` and the unversioned Pages asset are mutable.

# Infernal SaaS

A shared UI system for Dragonshorn Studios' developer tools: **Infernal Coding Machine / Sumomo** (plum) and **Mergehenna / Maomao** (copper). Accessible, dark-first, framework-neutral CSS with optional vanilla JavaScript behaviors.

## Quick links

- [Component catalogue](https://dragonshorn-studios.github.io/infernal-saas/)
- [Maomao patterns](https://dragonshorn-studios.github.io/infernal-saas/maomao/)
- [Sumomo patterns](https://dragonshorn-studios.github.io/infernal-saas/sumomo/)
- [Contextual side rail](https://dragonshorn-studios.github.io/infernal-saas/rail.html)

The examples are HTML reconstructions of product layouts with illustrative data, not live applications.

## Use the CSS and JavaScript

Download [`dist/infernal.css`](dist/infernal.css) and, if desired, [`dist/infernal.js`](dist/infernal.js). No npm package publication is needed: [jsDelivr's GitHub CDN](https://www.jsdelivr.com/?docs=gh) can serve both files directly from this public repository.

### CDN (recommended for static sites)

Use a **release tag** so existing apps don't change unexpectedly. Once the `v0.1.0` tag is created:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Dragonshorn-Studios/infernal-saas@v0.1.0/dist/infernal.css">
<script type="module">
  import { bindTabs } from 'https://cdn.jsdelivr.net/gh/Dragonshorn-Studios/infernal-saas@v0.1.0/dist/infernal.js';
  bindTabs(document);
</script>
```

Until the tag exists, use the already committed `main` branch URL for testing (not production):

```text
https://cdn.jsdelivr.net/gh/Dragonshorn-Studios/infernal-saas@main/dist/infernal.css
https://cdn.jsdelivr.net/gh/Dragonshorn-Studios/infernal-saas@main/dist/infernal.js
```

Or import from the GitHub Pages static asset path:

```html
<html lang="en" data-if-theme="dark" data-if-brand="machine">
<head>
  <link rel="stylesheet" href="https://dragonshorn-studios.github.io/infernal-saas/assets/infernal.css">
</head>
```

Optional JavaScript:

```js
import { bindTabs, bindContextRail, setAppearance } from './infernal.js';
setAppearance({ theme: 'dark', brand: 'mergehenna' });
const stop = bindTabs(document);
// stop() when the host view is destroyed.
```

The distributable is checked into [`dist/`](dist/). For production, pin a **tag or full commit SHA**, not the mutable `main` branch. Publish each new version by updating `package.json`'s version, building, committing `dist/`, and creating a matching Git tag. The published Pages `/assets/v0.1.0/` path is a versioned *path*, but deploys from the same repository and is not immutable by itself.

This repository is intentionally marked `private: true` in `package.json` to prevent accidental npm publication. That setting does **not** make the GitHub repository private.

## Install the design skill for agents

```sh
npx skills add Dragonshorn-Studios/infernal-saas --skill infernal-saas-design
```

Skill source: [`skills/infernal-saas-design/SKILL.md`](skills/infernal-saas-design/SKILL.md). It instructs agents to reuse the CSS/token system, preserve the distinct Sumomo and Maomao UX patterns, and avoid translating showroom mock behavior into real application logic.

## Source layout

| Path | Purpose |
|---|---|
| `src/infernal.css` | The canonical design tokens and component stylesheet |
| `src/infernal.js` | Optional ESM helpers for tabs, contextual rail and appearance |
| `dist/` | Checked-in, ready-to-consume files generated from `src/` |
| `examples/` | Source HTML for component and product showrooms |
| `scripts/build.mjs` | Generates `dist/` and a GitHub Pages-ready `site/` directory |
| `scripts/check.mjs` | Builds and validates JS syntax, IDs, and asset rewriting |
| `.github/workflows/pages.yml` | CI plus deploy to GitHub Pages on `main` |
| `skills/` | Agent Skills-compatible installation folder |

```sh
npm run check
npm run build
```

Node.js 20+ is sufficient; there are no npm dependencies and no lockfile.

## Enable GitHub Pages once

In the repository, open **Settings → Pages → Build and deployment → Source → GitHub Actions**. Then rerun **Build and publish Infernal UI** (or push to `main`). The workflow uses the official `configure-pages`, `upload-pages-artifact`, and `deploy-pages` actions. A successful Actions run verifies the deployment; creating this workflow alone does not prove Pages is enabled.

## Design boundary

Reusable components live in `src/infernal.css`, while the layout CSS for full-screen reconstructions is under `examples/screens.css`. Product application logic remains in the Sumomo and Maomao repositories. This project intentionally has no third-party runtime dependency.

**License:** [MIT](LICENSE) © 2026 Dragonshorn Studios.

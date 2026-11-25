# Infernal SaaS

CSS components and a few optional JavaScript helpers used by Dragonshorn Studios projects.

## Examples

- [Components](https://dragonshorn-studios.github.io/infernal-saas/)
- [Maomao](https://dragonshorn-studios.github.io/infernal-saas/maomao/)
- [Sumomo](https://dragonshorn-studios.github.io/infernal-saas/sumomo/)
- [Side rail](https://dragonshorn-studios.github.io/infernal-saas/rail.html)

The examples use mock data.

## Usage

Copy [`dist/infernal.css`](dist/infernal.css) and optionally [`dist/infernal.js`](dist/infernal.js) into your project, or load them from jsDelivr:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Dragonshorn-Studios/infernal-saas@main/dist/infernal.css">
<script type="module">
  import { bindTabs } from 'https://cdn.jsdelivr.net/gh/Dragonshorn-Studios/infernal-saas@main/dist/infernal.js';
  bindTabs(document);
</script>
```

`@main` is suitable for trying things out. For production, replace it with a Git tag or commit SHA. No npm publication is required.

Set `data-if-theme="dark"` or `"light"` and `data-if-brand="machine"` or `"mergehenna"` on the root `<html>` element to select the theme.

## Agent skill

```sh
npx skills add Dragonshorn-Studios/infernal-saas --skill infernal-saas-design
```

The skill is in [`skills/infernal-saas-design/`](skills/infernal-saas-design/).

## Development

Requires Node.js 20+. No external dependencies.

```sh
npm run check
npm run build
```

- `src/` — CSS and JS sources
- `dist/` — built files, committed to the repo
- `examples/` — showroom sources
- `skills/` — agent instructions
- `scripts/` — build and validation

Pushes to `main` deploy the showroom with GitHub Actions. Pages must use **GitHub Actions** as its build source in repository settings.

## License

[MIT](LICENSE) © 2026 Dragonshorn Studios.

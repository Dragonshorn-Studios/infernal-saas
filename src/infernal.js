/** Infernal UI — optional vanilla JS behaviors. No dependencies or auto-init. */

/** Activate semantic tabs and their associated panels. Returns a cleanup function. */
export function bindTabs(root = document) {
  const controller = new AbortController();
  root.querySelectorAll('[data-if-tablist]').forEach((list) => {
    const tabs = [...list.querySelectorAll('[role="tab"][aria-controls]')];
    function activate(tab, moveFocus = false) {
      tabs.forEach((item) => {
        const active = item === tab;
        item.setAttribute('aria-selected', String(active));
        item.tabIndex = active ? 0 : -1;
        const panel = root.getElementById?.(item.getAttribute('aria-controls'))
          ?? document.getElementById(item.getAttribute('aria-controls'));
        if (panel) panel.hidden = !active;
      });
      if (moveFocus) tab.focus();
    }
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => activate(tab), { signal: controller.signal });
      tab.addEventListener('keydown', (event) => {
        const offset = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;
        if (!offset && event.key !== 'Home' && event.key !== 'End') return;
        event.preventDefault();
        const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1
          : (index + offset + tabs.length) % tabs.length;
        activate(tabs[next], true);
      }, { signal: controller.signal });
    });
    if (tabs.length) activate(tabs.find((item) => item.getAttribute('aria-selected') === 'true') ?? tabs[0]);
  });
  return () => controller.abort();
}

/** Bind an optional context rail. The caller renders menu contents on change. */
export function bindContextRail(root, { initialArea, onChange }) {
  if (!root || typeof onChange !== 'function') throw new TypeError('Rail root and onChange are required');
  const buttons = [...root.querySelectorAll('[data-if-rail-area]')];
  const controller = new AbortController();
  let activeArea = initialArea ?? buttons[0]?.dataset.ifRailArea;
  function select(area, focus = false) {
    if (!buttons.some((button) => button.dataset.ifRailArea === area)) return;
    activeArea = area;
    buttons.forEach((button) => {
      const active = button.dataset.ifRailArea === area;
      button.setAttribute('aria-pressed', String(active));
      if (active && focus) button.focus();
    });
    onChange(area);
  }
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => select(button.dataset.ifRailArea), { signal: controller.signal });
    button.addEventListener('keydown', (event) => {
      if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
      event.preventDefault();
      const next = (index + (event.key === 'ArrowDown' ? 1 : -1) + buttons.length) % buttons.length;
      select(buttons[next].dataset.ifRailArea, true);
    }, { signal: controller.signal });
  });
  if (activeArea) select(activeArea);
  return { select, get activeArea() { return activeArea; }, destroy: () => controller.abort() };
}

/** Keep the theme and brand attributes on the document root. */
export function setAppearance({ theme, brand }, target = document.documentElement) {
  if (theme && !['dark', 'light'].includes(theme)) throw new RangeError('theme must be dark or light');
  if (brand && !['machine', 'mergehenna'].includes(brand)) throw new RangeError('unknown brand');
  if (theme) target.dataset.ifTheme = theme;
  if (brand) target.dataset.ifBrand = brand;
}

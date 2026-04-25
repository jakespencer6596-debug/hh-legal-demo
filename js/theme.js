/* HH Legal demo — theme: binary toggle (light/dark) with sun/moon icon */
(function () {
  const root = document.documentElement;
  const SUN = '☀';   // ☀
  const MOON = '☾';  // ☾

  function current() {
    let saved = null;
    try { saved = localStorage.getItem('theme'); } catch (e) {}
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function apply(theme) {
    if (theme !== 'light' && theme !== 'dark') theme = 'light';
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch (e) {}
    const btn = document.getElementById('theme-cycle');
    if (btn) {
      btn.textContent = theme === 'dark' ? MOON : SUN;
      btn.setAttribute('aria-label', theme === 'dark' ? 'Dark mode (click for light)' : 'Light mode (click for dark)');
      btn.setAttribute('title', theme === 'dark' ? 'Dark mode — click for light' : 'Light mode — click for dark');
    }
  }

  function toggle() {
    apply(current() === 'dark' ? 'light' : 'dark');
  }

  function init() {
    apply(current());
    const btn = document.getElementById('theme-cycle');
    if (btn) btn.addEventListener('click', toggle);
    requestAnimationFrame(() => root.classList.add('theme-transitions'));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.HHLegal = window.HHLegal || {};
  window.HHLegal.toggleTheme = toggle;
})();

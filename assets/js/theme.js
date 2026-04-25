/* HH Legal demo — theme switcher (Light / System / Dark) */
(function () {
  const root = document.documentElement;
  const mq = window.matchMedia('(prefers-color-scheme: dark)');

  function effective(pref) {
    if (pref === 'system' || !pref) return mq.matches ? 'dark' : 'light';
    return pref;
  }

  function apply(pref) {
    if (!['light', 'dark', 'system'].includes(pref)) pref = 'system';
    root.setAttribute('data-theme', effective(pref));
    try {
      if (pref === 'system') localStorage.removeItem('theme');
      else localStorage.setItem('theme', pref);
    } catch (e) {}
    document.querySelectorAll('[data-theme-set]').forEach(b => {
      const myPref = b.dataset.themeSet;
      let saved = null;
      try { saved = localStorage.getItem('theme'); } catch (e) {}
      const current = saved || 'system';
      b.setAttribute('aria-pressed', String(myPref === current));
    });
  }

  // Re-evaluate when system theme changes (only matters when in 'system' mode)
  mq.addEventListener('change', () => {
    let saved = null;
    try { saved = localStorage.getItem('theme'); } catch (e) {}
    if (!saved) apply('system');
  });

  function init() {
    document.querySelectorAll('[data-theme-set]').forEach(btn =>
      btn.addEventListener('click', () => apply(btn.dataset.themeSet))
    );
    // Re-apply once to set aria-pressed correctly (pre-paint script set the html attr already)
    let saved = null;
    try { saved = localStorage.getItem('theme'); } catch (e) {}
    apply(saved || 'system');

    // Enable transitions only after initial paint
    requestAnimationFrame(() => root.classList.add('theme-transitions'));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

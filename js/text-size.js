/* HH Legal demo — text-size switcher (Normal / Large / X-Large) */
(function () {
  const root = document.documentElement;
  const VALID = ['normal', 'large', 'xlarge'];

  function set(size) {
    if (!VALID.includes(size)) size = 'normal';
    root.setAttribute('data-text-size', size);
    try { localStorage.setItem('text-size', size); } catch (e) {}
    document.querySelectorAll('[data-size]').forEach(b =>
      b.setAttribute('aria-pressed', String(b.dataset.size === size))
    );
  }

  function init() {
    let saved = null;
    try { saved = localStorage.getItem('text-size'); } catch (e) {}
    set(saved || 'normal');
    document.querySelectorAll('[data-size]').forEach(btn =>
      btn.addEventListener('click', () => set(btn.dataset.size))
    );
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

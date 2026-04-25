/* HH Legal demo — text-size cycle (normal → large → xlarge → normal) */
(function () {
  const root = document.documentElement;
  const ORDER = ['normal', 'large', 'xlarge'];
  const LABEL = { normal: 'A', large: 'A+', xlarge: 'A++' };

  function current() {
    let saved = null;
    try { saved = localStorage.getItem('text-size'); } catch (e) {}
    return ORDER.includes(saved) ? saved : 'normal';
  }

  function apply(size) {
    if (!ORDER.includes(size)) size = 'normal';
    root.setAttribute('data-text-size', size);
    try { localStorage.setItem('text-size', size); } catch (e) {}
    const btn = document.getElementById('text-cycle');
    if (btn) {
      btn.textContent = LABEL[size];
      btn.setAttribute('aria-label', `Text size: ${size}. Click to cycle.`);
      btn.setAttribute('title', `Text size: ${LABEL[size]} — click to cycle`);
    }
  }

  function cycle() {
    const idx = ORDER.indexOf(current());
    apply(ORDER[(idx + 1) % ORDER.length]);
  }

  function init() {
    apply(current());
    const btn = document.getElementById('text-cycle');
    if (btn) btn.addEventListener('click', cycle);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.HHLegal = window.HHLegal || {};
  window.HHLegal.cycleTextSize = cycle;
})();

/* HH Legal demo — mobile nav toggle + contact form demo handler */
(function () {
  function init() {
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.main-nav');
    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        const open = nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(open));
      });
    }

    // Accessibility cog popover (lang/theme/size moved here to mirror live's tiny utility row)
    const cog = document.querySelector('.a11y-cog');
    const panel = document.querySelector('.a11y-panel');
    if (cog && panel) {
      cog.addEventListener('click', (e) => {
        e.stopPropagation();
        const open = panel.classList.toggle('open');
        cog.setAttribute('aria-expanded', String(open));
      });
      document.addEventListener('click', (e) => {
        if (!panel.contains(e.target) && e.target !== cog) {
          panel.classList.remove('open');
          cog.setAttribute('aria-expanded', 'false');
        }
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          panel.classList.remove('open');
          cog.setAttribute('aria-expanded', 'false');
        }
      });
    }

    // Back-to-top floating button
    const btt = document.getElementById('back-to-top');
    if (btt) {
      const onScroll = () => {
        if (window.scrollY > 400) btt.classList.add('visible');
        else btt.classList.remove('visible');
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    // Contact form: prevent submit, show success message
    const form = document.querySelector('form[data-demo-form]');
    if (form) {
      const msg = form.querySelector('.form-msg');
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (msg) {
          msg.classList.add('shown');
          msg.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        form.reset();
        // Re-init the i18n select placeholder after reset
        if (window.HHLegal && window.HHLegal.applyLang) {
          let lang = 'en';
          try { lang = localStorage.getItem('lang') || 'en'; } catch (e) {}
          window.HHLegal.applyLang(lang);
        }
      });
    }

    // Smooth scroll for in-page anchors
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        const id = a.getAttribute('href').slice(1);
        if (!id) return;
        const tgt = document.getElementById(id);
        if (tgt) {
          e.preventDefault();
          tgt.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

/* Pre-paint settings hydration. MUST load synchronously in <head> before stylesheet. */
(function () {
  try {
    var d = document.documentElement;
    var theme = localStorage.getItem('theme');
    var effective = theme && theme !== 'system'
      ? theme
      : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    d.setAttribute('data-theme', effective);

    var lang = localStorage.getItem('lang') || 'en';
    d.lang = lang;

    var size = localStorage.getItem('text-size') || 'normal';
    d.setAttribute('data-text-size', size);
  } catch (e) {}
})();

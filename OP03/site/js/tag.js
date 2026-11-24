const measurementId = 'G-M9WG285BR2';
window.dataLayer = window.dataLayer || [];
window.gtag = function () { window.dataLayer.push(arguments); };
if (/^G-[A-Z0-9]+$/.test(measurementId)) {
  const tag = document.createElement('script');
  tag.async = true;
  tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId;
  document.head.appendChild(tag);
  gtag('js', new Date());
  const debug = new URLSearchParams(location.search).get('debug_mode') === '1';
  gtag('config', measurementId, debug ? { debug_mode: true } : {});
}

const measurementId = '';
window.dataLayer = window.dataLayer || [];
window.gtag = function () { window.dataLayer.push(arguments); };
if (/^G-[A-Z0-9]+$/.test(measurementId)) {
  const tag = document.createElement('script');
  tag.async = true;
  tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId;
  document.head.appendChild(tag);
  gtag('js', new Date());
  gtag('config', measurementId);
}

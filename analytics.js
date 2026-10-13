(function(){
  var S = window.SITE || {}, code = S.goatcounter;
  window.tbCount = function(){};
  if (!code) return;
  var isReader = /read\.html$/.test(location.pathname);
  window.goatcounter = { no_onload: isReader };
  var s = document.createElement('script');
  s.async = true; s.src = 'https://gc.zgo.at/count.js';
  s.setAttribute('data-goatcounter', 'https://' + code + '.goatcounter.com/count');
  document.head.appendChild(s);
  function ready(fn, n){ n = n || 0; if (window.goatcounter && window.goatcounter.count) fn(); else if (n < 20) setTimeout(function(){ ready(fn, n + 1); }, 500); }
  window.tbCount = function(path, title){ ready(function(){ window.goatcounter.count({ path: path, title: title }); }); };
  document.addEventListener('click', function(e){
    var a = e.target.closest && e.target.closest('a[download]');
    if (a) ready(function(){ window.goatcounter.count({ path: 'download/' + a.getAttribute('href'), title: 'تنزيل: ' + (a.getAttribute('download') || a.getAttribute('href')), event: true }); });
  });
})();

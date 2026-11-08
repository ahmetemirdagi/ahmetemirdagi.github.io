/* Magazine theme runtime: scroll reveals, mobile menu, current section in nav. */
(function(){
  var RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Scroll reveals (once per element)
  var els = document.querySelectorAll('.reveal');
  if (RM || !('IntersectionObserver' in window)) {
    els.forEach(function(e){ e.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(x){ if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    els.forEach(function(e){ io.observe(e); });
  }

  // Mobile menu
  var btn = document.getElementById('menuBtn'), m = document.getElementById('mobileMenu');
  if (btn && m) {
    var set = function(o){
      btn.setAttribute('aria-expanded', o ? 'true' : 'false');
      m.classList.toggle('open', o);
      document.body.classList.toggle('menu-open', o);
      m.setAttribute('aria-hidden', o ? 'false' : 'true');
      m.querySelectorAll('a').forEach(function(a){ a.tabIndex = o ? 0 : -1; });
      if (o) { var f = m.querySelector('a'); if (f) setTimeout(function(){ f.focus(); }, 50); }
    };
    set(false);
    btn.addEventListener('click', function(){ set(btn.getAttribute('aria-expanded') !== 'true'); });
    m.addEventListener('click', function(e){ if (e.target.closest('a')) set(false); });
    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape' && m.classList.contains('open')) { set(false); btn.focus(); }
    });
  }

  // Highlight the section currently in view (home page only)
  var links = [].slice.call(document.querySelectorAll('[data-navlink]'));
  if ('IntersectionObserver' in window) {
    var idOf = function(l){ var h = l.getAttribute('href'); var i = h.indexOf('#'); return i < 0 ? null : h.slice(i + 1); };
    var sio = new IntersectionObserver(function(entries){
      entries.forEach(function(x){
        if (!x.isIntersecting) return;
        links.forEach(function(l){
          if (idOf(l) === x.target.id) l.setAttribute('aria-current', 'true'); else l.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    links.forEach(function(l){ var id = idOf(l); var s = id && document.getElementById(id); if (s) sio.observe(s); });
  }
})();

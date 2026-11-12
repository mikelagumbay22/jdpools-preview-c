(() => {
  const hdr = document.querySelector('[data-hdr]');
  const onScroll = () => hdr && hdr.classList.toggle('is-scrolled', scrollY > 40);
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  // mobile menu
  const btn = document.querySelector('[data-menu-btn]'), menu = document.querySelector('[data-menu]');
  if (btn && menu) {
    const set = o => { btn.setAttribute('aria-expanded', o); menu.classList.toggle('is-open', o); btn.textContent = o ? 'Close' : 'Menu'; };
    btn.addEventListener('click', () => set(btn.getAttribute('aria-expanded') !== 'true'));
    addEventListener('keydown', e => { if (e.key === 'Escape') { set(false); btn.focus(); } });
  }
  // project filters (progressive enhancement)
  const f = document.querySelector('[data-filters]'), g = document.querySelector('[data-gallery]');
  if (f && g) { f.hidden = false; f.addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return;
    f.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', x === b));
    g.querySelectorAll('[data-cat]').forEach(i => i.hidden = b.dataset.f !== 'all' && i.dataset.cat !== b.dataset.f); }); }
})();

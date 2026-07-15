'use client';

import { useEffect } from 'react';

/**
 * All non-3D behaviour from the approved preview:
 * header/drawer, mega menus, tech-showcase tabs, counters,
 * scroll reveals, and the Technology/Marketing services toggle.
 *
 * Every DOM lookup is null-guarded so pages that don't contain a given
 * element (e.g. contact/about have no FAQ or counters) never throw.
 * Re-runs on every mount so client-side navigation always re-wires handlers.
 */
export default function Interactions() {
  useEffect(() => {
    try {
      const $ = (id) => document.getElementById(id);
      const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

      // Header scroll state
      const header = $('siteHeader');
      if (header) {
        const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 42);
        window.addEventListener('scroll', onScroll);
        onScroll();
      }

      // Mobile drawer
      const drawer = $('mobileDrawer');
      const overlay = $('drawerOverlay');
      const toggle = $('mobileToggle');
      const closeBtn = $('drawerClose');
      const closeDrawer = () => {
        if (drawer) drawer.classList.remove('open');
        if (overlay) overlay.classList.remove('open');
      };
      if (toggle && drawer && overlay) {
        toggle.addEventListener('click', () => {
          drawer.classList.add('open');
          overlay.classList.add('open');
        });
      }
      if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
      if (overlay) overlay.addEventListener('click', closeDrawer);
      if (drawer) $$('a', drawer).forEach((a) => a.addEventListener('click', closeDrawer));

      // FAQ accordion
      $$('.faq-item').forEach((item) => {
        const q = item.querySelector('.faq-q');
        const a = item.querySelector('.faq-a');
        if (!q || !a) return;
        if (item.classList.contains('open')) a.style.maxHeight = a.scrollHeight + 'px';
        q.addEventListener('click', () => {
          const isOpen = item.classList.contains('open');
          $$('.faq-item').forEach((i) => {
            i.classList.remove('open');
            const ia = i.querySelector('.faq-a');
            if (ia) ia.style.maxHeight = null;
          });
          if (!isOpen) {
            item.classList.add('open');
            a.style.maxHeight = a.scrollHeight + 'px';
          }
        });
      });

      // Tech tabs
      $$('.tab-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          $$('.tab-btn').forEach((b) => b.classList.remove('active'));
          $$('.tab-panel').forEach((p) => p.classList.remove('active'));
          btn.classList.add('active');
          const panel = document.querySelector(`.tab-panel[data-panel="${btn.dataset.tab}"]`);
          if (panel) panel.classList.add('active');
        });
      });

      // Animated counters
      const counters = $$('.counter');
      if (counters.length) {
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const target = parseInt(el.dataset.target, 10) || 0;
            if (prefersReduced) { el.textContent = target + '+'; io.unobserve(el); return; }
            let cur = 0;
            const step = Math.max(1, Math.round(target / 40));
            const tick = () => {
              cur += step;
              if (cur >= target) { el.textContent = target + '+'; return; }
              el.textContent = cur;
              requestAnimationFrame(tick);
            };
            tick();
            io.unobserve(el);
          });
        }, { threshold: 0.4 });
        counters.forEach((c) => io.observe(c));
      }

      // Services Technology/Marketing toggle
      const switchBtns = $$('.svc-switch-btn');
      const panels = $$('.svc-panel');
      switchBtns.forEach((b) => {
        b.addEventListener('click', () => {
          switchBtns.forEach((x) => { x.classList.remove('active'); x.setAttribute('aria-selected', 'false'); });
          panels.forEach((p) => p.classList.remove('active'));
          b.classList.add('active');
          b.setAttribute('aria-selected', 'true');
          const panel = document.querySelector(`[data-svc-panel="${b.dataset.svc}"]`);
          if (panel) panel.classList.add('active');
        });
      });

      // Nav "Services" mega menu Technology/Marketing toggle (scoped per menu instance)
      $$('.mega-switch').forEach((group) => {
        const mega = group.closest('.mega');
        if (!mega) return;
        const megaBtns = $$('.mega-switch-btn', group);
        const megaPanels = $$('.mega-panel', mega);
        megaBtns.forEach((b) => {
          b.addEventListener('click', () => {
            megaBtns.forEach((x) => { x.classList.remove('active'); x.setAttribute('aria-selected', 'false'); });
            megaPanels.forEach((p) => p.classList.remove('active'));
            b.classList.add('active');
            b.setAttribute('aria-selected', 'true');
            const panel = mega.querySelector(`[data-mega-panel="${b.dataset.mega}"]`);
            if (panel) panel.classList.add('active');
          });
        });
      });
    } catch (err) {
      // Never let a DOM-wiring error blank the page.
      console.error('Interactions init error:', err);
    }
  }, []);

  return null;
}

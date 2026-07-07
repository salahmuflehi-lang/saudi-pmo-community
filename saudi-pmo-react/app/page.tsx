'use client';

import { useEffect } from 'react';
import './pmo-site.css';
import { MARKUP } from './siteMarkup';

export default function Home() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];
    const w = window as any;
    const docEl = document.documentElement;

    /* ---------- Najdi triangle pattern (data-uri) ---------- */
    const tri = (c: string) =>
      `url("data:image/svg+xml,${encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' width='34' height='70' viewBox='0 0 34 70'><path d='M0 70 L17 44 L34 70 Z M0 44 L17 18 L34 44' fill='none' stroke='${c}' stroke-width='2'/></svg>`
      )}")`;
    docEl.style.setProperty('--tri-gold', tri('#C49A60'));

    /* ---------- NAV scroll state + scrollspy ---------- */
    const nav = document.getElementById('nav');
    const brandLogo = document.getElementById('brandLogo') as HTMLImageElement | null;
    function updateBrand() {
      if (!brandLogo || !nav) return;
      const l = docEl.lang === 'ar' ? 'ar' : 'en';
      const night = docEl.classList.contains('night');
      const tone = nav.classList.contains('scrolled') && !night ? 'green' : 'offwhite';
      const src = `/assets/nav-${l}-${tone}.png`;
      if (!brandLogo.src.endsWith(src)) brandLogo.src = src;
      brandLogo.alt = l === 'ar' ? 'مجتمع مكاتب إدارة المشاريع السعودي' : 'Saudi PMO Community';
    }
    const links = Array.from(document.querySelectorAll('.nav-links a.lnk')) as HTMLAnchorElement[];
    const secs = links
      .map((l) => document.querySelector(l.getAttribute('href') || ''))
      .filter(Boolean) as HTMLElement[];
    function onScroll() {
      if (!nav) return;
      nav.classList.toggle('scrolled', window.scrollY > 40);
      updateBrand();
      let cur = '';
      const y = window.scrollY + 140;
      secs.forEach((s) => { if (s.offsetTop <= y) cur = '#' + s.id; });
      links.forEach((l) => l.classList.toggle('active', l.getAttribute('href') === cur));
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    cleanups.push(() => window.removeEventListener('scroll', onScroll));
    onScroll();

    /* ---------- Mobile menu ---------- */
    const navlinks = document.getElementById('navlinks');
    w.toggleMenu = () => navlinks && navlinks.classList.toggle('open');
    const menuClick = (e: Event) => {
      if ((e.target as HTMLElement).tagName === 'A') navlinks && navlinks.classList.remove('open');
    };
    if (navlinks) {
      navlinks.addEventListener('click', menuClick);
      cleanups.push(() => navlinks.removeEventListener('click', menuClick));
    }

    /* ---------- Reveal on scroll ---------- */
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.14 });
    document.querySelectorAll('.rv').forEach((el) => io.observe(el));
    cleanups.push(() => io.disconnect());

    /* ---------- Marquee: duplicate for seamless -50% loop ---------- */
    const marq = document.getElementById('marq') as HTMLElement | null;
    if (marq && !marq.dataset.doubled) { marq.innerHTML += marq.innerHTML; marq.dataset.doubled = '1'; }

    /* ---------- Count-up ---------- */
    const cio = new IntersectionObserver((es) => {
      es.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target as HTMLElement;
        const target = +(el.dataset.target || 0);
        const suffix = el.dataset.suffix || '';
        let n = 0; const step = target / 55;
        const tick = () => {
          n += step;
          if (n >= target) el.textContent = target.toLocaleString() + suffix;
          else { el.textContent = Math.floor(n).toLocaleString() + suffix; requestAnimationFrame(tick); }
        };
        tick(); cio.unobserve(el);
      });
    }, { threshold: 0.5 });
    document.querySelectorAll('.count').forEach((c) => cio.observe(c));
    cleanups.push(() => cio.disconnect());

    /* ---------- Language (EN <-> AR/RTL) ---------- */
    function applyLang(l: string) {
      docEl.lang = l;
      docEl.dir = l === 'ar' ? 'rtl' : 'ltr';
      const lb = document.getElementById('lang');
      if (lb) lb.textContent = l === 'ar' ? 'English' : 'العربية';
      document.querySelectorAll<HTMLElement>('[data-en]').forEach((el) => {
        const v = (el.dataset as any)[l];
        if (v != null) el.innerHTML = v;
      });
      document.querySelectorAll<HTMLInputElement>('[data-ph-en]').forEach((el) => {
        el.placeholder = l === 'ar' ? (el.dataset.phAr || '') : (el.dataset.phEn || '');
      });
      updateBrand();
    }
    w.toggleLang = () => applyLang(docEl.lang === 'ar' ? 'en' : 'ar');

    /* ---------- Day / Night ---------- */
    function applyTheme(night: boolean, persist?: boolean) {
      docEl.classList.toggle('night', night);
      if (persist) { try { localStorage.setItem('spmo-theme', night ? 'night' : 'day'); } catch (e) {} }
      updateBrand();
    }
    w.toggleTheme = () => applyTheme(!docEl.classList.contains('night'), true);
    let savedTheme: string | null = null;
    try { savedTheme = localStorage.getItem('spmo-theme'); } catch (e) {}
    const wantNight = savedTheme ? savedTheme === 'night' : matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(wantNight, false);

    /* Arabic is the default language */
    applyLang('ar');

    /* ---------- Join form -> Supabase (plain REST, no package needed) ---------- */
    const DB = {
      url: (process.env.NEXT_PUBLIC_SUPABASE_URL as string) || 'https://qbdixiazgtzlkcxppgyo.supabase.co',
      anonKey:
        (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string) ||
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFiZGl4aWF6Z3R6bGtjeHBwZ3lvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM0MDA5NjYsImV4cCI6MjA5ODk3Njk2Nn0.9D4fpZDkXCQUIrDaAbbJfiCM-iPI9VlznQF39ftGfqA',
    };
    const NOTIFY_EMAIL = 'mabaniprojects@gmail.com';
    w.submitJoin = async (e: Event) => {
      e.preventDefault();
      const form = document.getElementById('joinForm') as HTMLFormElement;
      const note = form.querySelector('.note') as HTMLElement;
      const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
      const inputs = form.querySelectorAll('input');
      const payload = {
        full_name: (inputs[0] as HTMLInputElement).value.trim(),
        email: (inputs[1] as HTMLInputElement).value.trim(),
        organization: (inputs[2] as HTMLInputElement).value.trim() || null,
        role: (form.querySelector('select') as HTMLSelectElement).value || null,
        lang: docEl.lang,
      };
      btn.disabled = true; btn.style.opacity = '.6';
      try {
        if (DB.url && DB.anonKey) {
          const r = await fetch(DB.url + '/rest/v1/join_requests', {
            method: 'POST',
            headers: {
              apikey: DB.anonKey,
              Authorization: 'Bearer ' + DB.anonKey,
              'Content-Type': 'application/json',
              Prefer: 'return=minimal',
            },
            body: JSON.stringify(payload),
          });
          if (!r.ok) throw new Error('HTTP ' + r.status);
        } else {
          const r = await fetch('https://formsubmit.co/ajax/' + NOTIFY_EMAIL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify({ _subject: 'New Saudi PMO Community join request', _template: 'table', ...payload }),
          });
          if (!r.ok) throw new Error('HTTP ' + r.status);
        }
        form.style.display = 'none';
        document.getElementById('formOk')!.classList.add('show');
      } catch (err) {
        note.textContent =
          docEl.lang === 'ar'
            ? 'تعذّر الإرسال — تحقق من الاتصال وحاول مجددًا.'
            : "Couldn't send — check your connection and try again.";
        note.style.color = '#e4a3a3';
        note.style.opacity = '1';
      } finally {
        btn.disabled = false; btn.style.opacity = '1';
      }
      return false;
    };

    /* ---------- Hero network canvas ---------- */
    const cv = document.getElementById('net') as HTMLCanvasElement | null;
    let raf = 0;
    let resizeHandler: (() => void) | null = null;
    if (cv) {
      const ctx = cv.getContext('2d')!;
      let cw = 0, ch = 0, pts: Array<{ x: number; y: number; vx: number; vy: number; r: number }> = [];
      const COL = { line: '196,154,96', line2: '88,132,104', dot: '216,185,138' };
      const size = () => {
        const hero = cv.parentElement as HTMLElement;
        cw = cv.width = hero.offsetWidth;
        ch = cv.height = hero.offsetHeight;
        const n = Math.min(72, Math.floor((cw * ch) / 17000));
        pts = Array.from({ length: n }, () => ({
          x: Math.random() * cw, y: Math.random() * ch,
          vx: (Math.random() - 0.5) * 0.28, vy: (Math.random() - 0.5) * 0.28,
          r: Math.random() * 1.6 + 0.6,
        }));
      };
      const draw = () => {
        ctx.clearRect(0, 0, cw, ch);
        for (let i = 0; i < pts.length; i++) {
          const p = pts[i];
          p.x += p.vx; p.y += p.vy;
          if (p.x < 0 || p.x > cw) p.vx *= -1;
          if (p.y < 0 || p.y > ch) p.vy *= -1;
          for (let j = i + 1; j < pts.length; j++) {
            const q = pts[j], dx = p.x - q.x, dy = p.y - q.y, d = Math.hypot(dx, dy);
            if (d < 150) {
              const a = (1 - d / 150) * 0.5;
              ctx.strokeStyle = `rgba(${d < 95 ? COL.line : COL.line2},${a})`;
              ctx.lineWidth = 0.7;
              ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
            }
          }
        }
        for (const p of pts) {
          ctx.fillStyle = `rgba(${COL.dot},.8)`;
          ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 7); ctx.fill();
        }
        raf = requestAnimationFrame(draw);
      };
      size(); draw();
      let t: any;
      resizeHandler = () => { clearTimeout(t); t = setTimeout(size, 200); };
      window.addEventListener('resize', resizeHandler);
    }
    cleanups.push(() => {
      if (raf) cancelAnimationFrame(raf);
      if (resizeHandler) window.removeEventListener('resize', resizeHandler);
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: MARKUP }} />;
}

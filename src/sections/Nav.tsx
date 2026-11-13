import { useEffect, useRef, useState } from 'react';
import { downloadHref, useRelease } from '../release';
import './nav.css';

// Each tab lights up while any of its sections is on screen.
const LINKS = [
  { href: '#features', label: 'Features', ids: ['features'] },
  { href: '#r1', label: 'Match day', ids: ['r1', 'r2', 'r3', 'r4'] },
  { href: '#gallery', label: 'Screens', ids: ['gallery'] },
  { href: '#compare', label: 'Compare', ids: ['compare', 'safety'] },
  { href: '#roadmap', label: 'Roadmap', ids: ['roadmap'] },
  { href: '#faq', label: 'FAQ', ids: ['faq'] },
];

function Logo() {
  return (
    <a href="#top" className="hud-logo" aria-label="RYFT home">
      <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true" className="hud-logo-mark">
        <path className="s1" d="M4 26 L14 6 L18 6 L8 26 Z" fill="#FF4655" />
        <path className="s2" d="M14 26 L24 6 L28 6 L18 26 Z" fill="#E9ECF1" />
      </svg>
      <span className="hud-logo-word" data-text="RYFT">RYFT</span>
    </a>
  );
}

function DownloadButton({ href, version, className = '' }: { href: string; version: string; className?: string }) {
  return (
    <a className={`hud-dl ${className}`} href={href}>
      <span className="hud-dl-face">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" /></svg>
        <span className="hud-dl-text">Download</span>
        {version && <span className="hud-dl-ver">v{version}</span>}
      </span>
    </a>
  );
}

export default function Nav() {
  const release = useRelease();
  const dl = downloadHref(release);
  const headerRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  // Scroll progress + compact mode, written straight to the element so scrolling doesn't re-render.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = headerRef.current;
      if (!el) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      el.style.setProperty('--p', String(max > 0 ? Math.min(1, window.scrollY / max) : 0));
      el.classList.toggle('is-scrolled', window.scrollY > 24);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(frame); };
  }, []);

  // Highlight the tab for the section crossing the middle of the screen.
  useEffect(() => {
    const visible = new Set<string>();
    const observer = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) visible.add(e.target.id);
        else visible.delete(e.target.id);
      }
      const hit = LINKS.find((l) => l.ids.some((id) => visible.has(id)));
      setActive(hit ? hit.href : null);
    }, { rootMargin: '-45% 0px -50% 0px' });
    LINKS.flatMap((l) => l.ids).forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  // Mobile menu: Escape closes it, and it closes if the window grows past the breakpoint.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    const mq = window.matchMedia('(min-width: 961px)');
    const onMq = () => { if (mq.matches) setOpen(false); };
    window.addEventListener('keydown', onKey);
    mq.addEventListener('change', onMq);
    return () => { window.removeEventListener('keydown', onKey); mq.removeEventListener('change', onMq); };
  }, [open]);

  return (
    <header ref={headerRef} className={`hud${open ? ' is-open' : ''}`}>
      <nav aria-label="Main" className="wrap hud-bar">
        <Logo />

        <div className="hud-tabs">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className={`hud-tab${active === l.href ? ' is-active' : ''}`} aria-current={active === l.href ? 'true' : undefined}>
              <span className="hud-tab-label" data-text={l.label}>{l.label}</span>
            </a>
          ))}
        </div>

        <div className="hud-spacer" />

        <DownloadButton href={dl} version={release.version} className="hud-dl-main" />

        <button type="button" className="hud-burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="hud-menu" onClick={() => setOpen((o) => !o)}>
          <i /><i /><i />
        </button>
      </nav>

      <div className="hud-progress" aria-hidden="true"><i /></div>

      <div id="hud-menu" className="hud-menu" hidden={!open}>
        <div className="wrap hud-menu-inner">
          {LINKS.map((l, i) => (
            <a key={l.href} href={l.href} className={`hud-menu-link${active === l.href ? ' is-active' : ''}`} style={{ animationDelay: `${i * 45}ms` }} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <DownloadButton href={dl} version={release.version} className="hud-dl-menu" />
        </div>
      </div>
    </header>
  );
}

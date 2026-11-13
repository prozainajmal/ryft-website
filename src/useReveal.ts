import { useEffect } from 'react';

/** Adds .in to every reveal element (.rv, .rv-l, .rv-r, .rv-z) the first time it comes on screen. */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.rv, .rv-l, .rv-r, .rv-z');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    els.forEach((el) => io.observe(el));

    // The page renders after load, so a link like /#faq can't jump on its own.
    const target = location.hash.length > 1 ? document.getElementById(decodeURIComponent(location.hash.slice(1))) : null;
    if (target) {
      target.scrollIntoView({ behavior: 'instant' as ScrollBehavior });
      // Show whatever is on screen right away instead of waiting for the observer.
      els.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < innerHeight && r.bottom > 0) { el.classList.add('in'); io.unobserve(el); }
      });
    }

    return () => io.disconnect();
  }, []);
}

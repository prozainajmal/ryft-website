import { useEffect, useState } from 'react';

// Opening animation: the RYFT logo's two slashes snap together, a red seam
// runs through the gap between them, and the screen tears open along that
// seam to reveal the page. Plays once per browser session; any click or key
// skips it.
const SEEN_KEY = 'ryft-intro-seen';
const DURATION_MS = 1700;

function shouldPlay(): boolean {
  try {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
    if (sessionStorage.getItem(SEEN_KEY)) return false;
    sessionStorage.setItem(SEEN_KEY, '1');
  } catch {
    /* storage blocked: just play it */
  }
  return true;
}

function Logo() {
  return (
    <svg className="rift-logo" viewBox="0 0 32 32" aria-hidden="true">
      <path className="rift-red" d="M4 26 L14 6 L18 6 L8 26 Z" fill="#FF4655" />
      <path className="rift-white" d="M14 26 L24 6 L28 6 L18 26 Z" fill="#E9ECF1" />
    </svg>
  );
}

export default function IntroOverlay() {
  const [playing, setPlaying] = useState(shouldPlay);

  useEffect(() => {
    if (!playing) return;
    const stop = () => setPlaying(false);
    const timer = window.setTimeout(stop, DURATION_MS);
    window.addEventListener('keydown', stop);
    window.addEventListener('pointerdown', stop);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('keydown', stop);
      window.removeEventListener('pointerdown', stop);
    };
  }, [playing]);

  return (
    <>
      {playing && (
        <div className="rift" aria-hidden="true">
          <div className="rift-half rift-a"><div className="rift-face"><Logo /></div></div>
          <div className="rift-half rift-b"><div className="rift-face"><Logo /></div></div>
          <div className="rift-seam" />
        </div>
      )}

      <div className="progress" style={{ position: "fixed", top: "0", left: "0", right: "0", height: "3px", background: "#FF4655", transformOrigin: "0 50%", zIndex: "30" }}></div>
    </>
  );
}

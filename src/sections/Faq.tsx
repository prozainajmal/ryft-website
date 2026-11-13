import { useState } from 'react';
import { FAQS } from '../data';

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" aria-label="Questions" style={{ maxWidth: 880, margin: '0 auto', padding: '100px 24px', display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div className="rv" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <span className="lbl" style={{ color: '#FF6B77' }}>Before you lock in</span>
        <h2 className="disp" style={{ fontSize: 52 }}>Questions</h2>
      </div>
      <div className="rv">
        {FAQS.map(([q, a], i) => {
          const isOpen = open === i;
          return (
            <div key={q} className={isOpen ? 'faq open' : 'faq'}>
              <button onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}>
                <span>{q}</span>
                <span className="qi" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF4655" strokeWidth="2.6" strokeLinecap="round"><path d="M12 5v14" /><path d="M5 12h14" /></svg>
                </span>
              </button>
              {isOpen && <p style={{ margin: '0 0 22px', color: '#C9CFD9', maxWidth: 720 }}>{a}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}

import { useState } from 'react';
import { FAQS } from '../data';

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" aria-label="Questions" style={{ maxWidth: 880, margin: '0 auto', padding: '100px 24px', display: 'flex', flexDirection: 'column', gap: 24 }}>
      <h2 className="disp rv" style={{ fontSize: 52 }}>Questions</h2>
      <div className="rv">
        {FAQS.map(([q, a], i) => {
          const isOpen = open === i;
          return (
            <div key={q} className="faq">
              <button onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}>
                <span>{q}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF4655" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true" style={{ flex: 'none', transform: isOpen ? 'rotate(45deg)' : 'none', transition: 'transform .2s' }}><path d="M12 5v14" /><path d="M5 12h14" /></svg>
              </button>
              {isOpen && <p style={{ margin: '0 0 20px', color: '#B7BECB', maxWidth: 720 }}>{a}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}

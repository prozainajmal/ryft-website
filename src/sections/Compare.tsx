import { COMPARE } from '../data';

export default function Compare() {
  return (
    <section id="compare" aria-label="RYFT compared with a browser tracker" className="wrap" style={{ paddingTop: 110, paddingBottom: 90, display: 'flex', flexDirection: 'column', gap: 30 }}>
      <div className="rv" style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 760 }}>
        <span className="lbl" style={{ color: '#FF6B77' }}>Why an app</span>
        <h2 className="disp" style={{ fontSize: 'clamp(44px, 5vw, 64px)' }}>More than a stats page</h2>
        <p style={{ margin: 0, fontSize: 18, color: '#B7BECB' }}>A website can show your numbers. RYFT also sits next to the game on your PC — so it can launch accounts and read the lobby too.</p>
      </div>
      <div className="rv" style={{ overflowX: 'auto', borderRadius: 12, border: '1px solid #242B37', background: '#10141B' }}>
        <table className="cmp">
          <thead><tr><th scope="col">What you get</th><th scope="col" style={{ color: '#FF6B77' }}>RYFT</th><th scope="col">Browser stats site</th></tr></thead>
          <tbody>
            {COMPARE.map((c) => (
              <tr key={c.what}>
                <td style={{ fontWeight: 600 }}>{c.what}</td>
                <td><span className="yes"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2FC28B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12 5 5 9-10" /></svg>Yes</span></td>
                <td><span className={c.cls}>{c.web}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

import { FEATURES } from '../data';

export default function FeaturesOverview() {
  return (
    <section id="features" aria-label="Features" className="wrap" style={{ paddingTop: 110, paddingBottom: 90, display: 'flex', flexDirection: 'column', gap: 40 }}>
      <div className="rv" style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 720 }}>
          <span className="lbl" style={{ color: '#FF6B77' }}>Your loadout</span>
          <h2 className="disp" style={{ fontSize: 'clamp(44px, 5.5vw, 76px)' }}>Eight abilities.<br />Zero cooldown.</h2>
        </div>
        <p style={{ margin: 0, maxWidth: 420, color: '#B7BECB', fontSize: 17 }}>Everything RYFT does, at a glance. Each feature is one tap away in the app — no setup screens, no browser.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
        {FEATURES.map((f) => (
          <a key={f.title} href={f.href} className="fcard rv-z" style={{ textDecoration: 'none', color: 'inherit' }}>
            <span className="cap"><img src={f.icon} alt="" /><span className="key">{f.key}</span></span>
            <b style={{ fontSize: 19 }}>{f.title}</b>
            <span style={{ color: '#8C95A6', fontSize: 15 }}>{f.body}</span>
            <span className="lbl" style={{ color: '#FF6B77', fontSize: 11, marginTop: 'auto' }}>{f.tag} →</span>
          </a>
        ))}
      </div>
    </section>
  );
}

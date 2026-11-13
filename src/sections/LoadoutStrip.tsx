import { GUNS } from '../data';

export default function LoadoutStrip() {
  return (
    <section aria-label="Weapon stats" style={{ borderTop: '1px solid #1F2631', borderBottom: '1px solid #1F2631', background: '#0B0E13', overflow: 'hidden' }}>
      <div className="wrap" style={{ paddingTop: 56, paddingBottom: 56, display: 'flex', flexDirection: 'column', gap: 26 }}>
        <div className="rv" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 20, flexWrap: 'wrap' }}>
          <h2 className="disp" style={{ fontSize: 44 }}>Know your loadout</h2>
          <span style={{ color: '#8C95A6', maxWidth: 420 }}>RYFT counts your kills with every gun across recent matches — so you know whether the Phantom is really your weapon.</span>
        </div>
        <div className="rv" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
          {GUNS.map((g) => (
            <div key={g.name} className="fcard" style={{ height: 140, alignItems: 'center', justifyContent: 'center', gap: 10 }}>
              <img src={g.src} alt="" className="float" style={{ height: 46, width: 'auto', maxWidth: '80%', animationDelay: g.delay }} />
              <b>{g.name}</b>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

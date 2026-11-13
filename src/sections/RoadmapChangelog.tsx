import { RELEASE_NOTES, ROADMAP } from '../data';
import { formatDate, useRelease } from '../release';

export default function RoadmapChangelog() {
  const { releases } = useRelease();
  return (
    <section id="roadmap" aria-label="Roadmap and release notes" className="wrap" style={{ paddingTop: 110, paddingBottom: 100, display: 'flex', flexWrap: 'wrap', gap: 48 }}>
      <div style={{ flex: '1 1 460px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 22 }}>
        <div className="rv" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}><span className="lbl" style={{ color: '#FF6B77' }}>Next act</span><h2 className="disp" style={{ fontSize: 56 }}>Roadmap</h2><p style={{ margin: 0, color: '#B7BECB' }}>Planned features. Not in the app yet — the order may change.</p></div>
        {ROADMAP.map(([title, body]) => (
          <div key={title} className="road rv-l"><div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}><b style={{ fontSize: 18 }}>{title}</b><span className="chip" style={{ color: '#E7B649' }}>Planned</span></div><span style={{ color: '#8C95A6', fontSize: 15 }}>{body}</span></div>
        ))}
      </div>
      <div style={{ flex: '1 1 460px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 22 }}>
        <div className="rv" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}><span className="lbl" style={{ color: '#2FC28B' }}>Patch notes</span><h2 className="disp" style={{ fontSize: 56 }}>Release notes</h2><p style={{ margin: 0, color: '#B7BECB' }}>What changed in recent versions.</p></div>
        <div className="timeline rv-r">
          {releases.map((r) => {
            const notes = RELEASE_NOTES[r.version];
            return (
              <div key={r.version} style={{ position: 'relative' }}>
                <span className="tdot"></span>
                <span className="lbl" style={{ color: '#8C95A6' }}>v{r.version} · {formatDate(r.date)}</span>
                <div style={{ fontWeight: 700, fontSize: 17, margin: '4px 0' }}>{notes?.title ?? r.name}</div>
                <span style={{ color: '#8C95A6', fontSize: 15 }}>{notes?.body ?? 'Fixes and improvements. Installed copies update automatically.'}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

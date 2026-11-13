const SQUAD = ['4ad7e0d0c4767643645f0a838b845dc9', 'ad988225d2cd30fc50f956292d7b3341', 'aaed65bd43a7c4f33dfe1753519da219'];

export default function Community() {
  return (
    <section aria-label="Community" className="wrap" style={{ paddingBottom: 100 }}>
      <div className="rv-z" style={{ position: 'relative', overflow: 'hidden', borderRadius: 16, padding: 'clamp(28px, 5vw, 48px)', background: 'linear-gradient(115deg, rgba(255,70,85,.16), #151A22 48%, #151A22 70%, rgba(63,185,201,.10))', border: '1px solid #2E3644', boxShadow: '0 30px 80px rgba(0,0,0,.45)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 32, justifyContent: 'space-between' }}>
        <div aria-hidden="true" style={{ position: 'absolute', width: 420, height: 420, right: -120, top: -200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,70,85,.22), transparent 65%)', pointerEvents: 'none' }}></div>
        <div className="scan" aria-hidden="true"></div>
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 620 }}>
          <span className="lbl" style={{ color: '#FF6B77' }}>Squad up</span>
          <h2 className="disp" style={{ fontSize: 'clamp(40px, 5vw, 52px)' }}>Shape what ships next</h2>
          <p style={{ margin: 0, color: '#C9CFD9', fontSize: 17 }}>Found a bug or want a feature? Tell us — the roadmap is built from what players ask for.</p>
        </div>
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 16 }}>
          <div className="float" aria-hidden="true" style={{ display: 'flex' }}>
            {SQUAD.map((id, i) => (
              <img key={id} src={`img/${id}.webp`} alt="" style={{ width: 56, height: 56, borderRadius: '50%', objectFit: 'cover', border: '3px solid #151A22', boxShadow: '0 0 0 1px #FF4655', marginLeft: i ? -14 : 0, background: '#1B212B' }} />
            ))}
          </div>
          <a className="btn red" href="https://github.com/prozainajmal/ryft-releases/issues/new" target="_blank" rel="noreferrer">Send a bug or an idea</a>
        </div>
      </div>
    </section>
  );
}

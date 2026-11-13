import { DownloadIcon } from '../DownloadIcon';
import { downloadHref, formatSize, useRelease } from '../release';

const STEPS = [
  ['1', 'Install & set a PIN', 'It encrypts your vault.'],
  ['2', 'Add your accounts', 'Tick “Stay signed in” for fast switches.'],
  ['3', 'Link your Riot ID', 'Your stats show up right away.'],
];

export default function Download() {
  const release = useRelease();
  const meta = [`Version ${release.version}`, formatSize(release.size), 'Free'].filter(Boolean).join(' · ');
  return (
    <section id="download" aria-label="Download RYFT" style={{ position: 'relative', overflow: 'hidden', borderTop: '1px solid #1F2631' }}>
      <img className="par" src="img/b5b14ca4238b337ae2325e8c85882089.webp" alt="" aria-hidden="true" style={{ position: 'absolute', inset: '-60px 0', width: '100%', height: 'calc(100% + 120px)', objectFit: 'cover', opacity: 0.2 }} />
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 40%, rgba(14,17,23,.55), #0E1117 75%)' }}></div>
      <div className="wrap" style={{ position: 'relative', paddingTop: 120, paddingBottom: 120, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 26 }}>
        <div className="rv" style={{ display: 'flex', gap: 14, justifyContent: 'center' }}>
          {['ef2a96d3148fbeb91a7ede74fcc83108', 'ba4047bdaa690f29d9e522d2fdcf4bb9', '4351967924f89de471b21f204c2ff488', 'db2c5a28bed5f4a25568361a6f87b439', 'd5bfc59279d899c7c190fcc82ea82169'].map((id, i) => (
            <img key={id} src={`img/${id}.webp`} alt="" className="float" style={{ width: 52, height: 52, animationDelay: `-${i}s` }} />
          ))}
        </div>
        <h2 className="disp rv" style={{ fontSize: 'clamp(72px, 11vw, 160px)' }}><span className="glitch" data-text="Lock in.">Lock in.</span></h2>
        <p className="rv" style={{ margin: 0, maxWidth: 560, fontSize: 19, color: '#B7BECB' }}>Download RYFT, set a PIN, add your accounts. Your next match day starts in under a minute.</p>
        <a className="btn red rv" href={downloadHref(release)} style={{ minHeight: 60, fontSize: 20, padding: '0 34px' }}>
          <DownloadIcon size={22} />
          Download for Windows
        </a>
        <span className="rv" style={{ color: '#8C95A6', fontSize: 14 }}>{meta}</span>
        <div className="rv" style={{ display: 'flex', flexWrap: 'wrap', gap: 14, width: '100%', maxWidth: 1000, marginTop: 18, textAlign: 'left' }}>
          <div style={{ flex: '2 1 520px', minWidth: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
            {STEPS.map(([n, title, body]) => (
              <div key={n} className="fcard" style={{ flexDirection: 'row', gap: 14, padding: 18 }}><span className="disp" style={{ fontSize: 40, color: '#FF4655' }}>{n}</span><div><b>{title}</b><div style={{ color: '#8C95A6', fontSize: 14 }}>{body}</div></div></div>
            ))}
          </div>
          <div className="fcard" style={{ flex: '1 1 260px', padding: 20, gap: 10 }}>
            <span className="lbl" style={{ color: '#FF6B77' }}>System requirements</span>
            <span style={{ color: '#C9CFD9', fontSize: 15 }}>Windows 10 or 11 (64-bit)</span>
            <span style={{ color: '#C9CFD9', fontSize: 15 }}>Riot Client installed</span>
            <span style={{ color: '#C9CFD9', fontSize: 15 }}>Internet for stats and live data</span>
          </div>
        </div>
      </div>
    </section>
  );
}

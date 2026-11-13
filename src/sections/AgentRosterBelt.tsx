import { AGENTS } from '../data';

const ROLES = [
  ['7f9c7b8bde39c99d44f51e62195127cd', 'Duelist'],
  ['e1c010a973d7185d3c0ae601efc52848', 'Initiator'],
  ['d9055c023eb3f7314bfeb23109588623', 'Controller'],
  ['e47ad3a320201f0b786fd4ffec5812d6', 'Sentinel'],
];
const rowA = AGENTS.concat(AGENTS);
const half = AGENTS.slice(15).concat(AGENTS.slice(0, 15));
const rowB = half.concat(half);

export default function AgentRosterBelt() {
  return (
    <section aria-label="Every agent" style={{ padding: '40px 0 70px', overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div className="wrap rv" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 18, marginBottom: 14, width: '100%' }}>
        <h2 className="disp" style={{ fontSize: 40 }}>Every agent. Every role.</h2>
        <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
          {ROLES.map(([id, role]) => (
            <span key={role} style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#C9CFD9', fontWeight: 600 }}><img src={`img/${id}.webp`} alt="" style={{ width: 22, height: 22 }} />{role}</span>
          ))}
        </div>
      </div>
      <div className="belt">
        {rowA.map((a, i) => <div key={i} className="agent" title={a.name}><img src={a.src} alt={i < AGENTS.length ? a.name : ''} loading="lazy" /></div>)}
      </div>
      <div className="belt rev">
        {rowB.map((a, i) => <div key={i} className="agent" title={a.name}><img src={a.src} alt="" loading="lazy" /></div>)}
      </div>
      <p className="wrap" style={{ margin: '6px auto 0', color: '#8C95A6', fontSize: 14, width: '100%' }}>RYFT ships with the official art for all 30 agents, every rank, map and gun — so your stats look like the game, even offline.</p>
    </section>
  );
}

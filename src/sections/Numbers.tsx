import type { CSSProperties } from 'react';

export default function Numbers() {
  return (
    <>
  <section aria-label="RYFT in numbers" style={{ borderTop: "1px solid #1F2631", borderBottom: "1px solid #1F2631", background: "#0B0E13" }}>
    <div className="wrap rv" style={{ paddingTop: "56px", paddingBottom: "56px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px", textAlign: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}><span className="count" style={{ "--n": 30 } as CSSProperties}></span><span className="lbl" style={{ color: "#8C95A6" }}>Agents with official art</span></div>
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}><span className="count" style={{ "--n": 25 } as CSSProperties}></span><span className="lbl" style={{ color: "#8C95A6" }}>Ranks, Iron 1 to Radiant</span></div>
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}><span className="count" style={{ "--n": 6 } as CSSProperties}></span><span className="lbl" style={{ color: "#8C95A6" }}>Leaderboard regions</span></div>
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}><span className="count" style={{ "--n": 256 } as CSSProperties}></span><span className="lbl" style={{ color: "#8C95A6" }}>Bit AES vault encryption</span></div>
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}><span className="count" style={{ "--n": 0 } as CSSProperties}></span><span className="lbl" style={{ color: "#8C95A6" }}>Browser tabs needed</span></div>
    </div>
  </section>
    </>
  );
}

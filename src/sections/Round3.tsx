import { useState } from 'react';

const SHOTS = {
  overview: ['img/overview-0.3.jpg', 'RYFT overview: player banner with rank, K/D, win rate, recent matches'],
  matches: ['img/matches-0.3.jpg', 'RYFT match history: an opened match with rounds and both team scoreboards'],
  stats: ['img/breakdown-0.3.jpg', 'RYFT breakdown: top agents, top weapons and map win rates'],
} as const;
type Tab = keyof typeof SHOTS;

export default function Round3() {
  const [tab, setTab] = useState<Tab>('overview');
  const tabBtn = (t: Tab, label: string) => (
    <button className={tab === t ? 'tab on' : 'tab'} onClick={() => setTab(t)} aria-pressed={tab === t}>{label}</button>
  );
  return (
    <>
  <section id="r3" aria-label="Round 3: stats" className="wrap" style={{ position: "relative", paddingTop: "110px", paddingBottom: "110px", display: "flex", flexDirection: "column", gap: "36px" }}>
    <span className="round-no" aria-hidden="true">03</span>
    <div className="rv" style={{ display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "flex-end", justifyContent: "space-between", position: "relative" }}>
      <div style={{ flex: "1 1 520px", display: "flex", flexDirection: "column", gap: "16px" }}>
        <span className="lbl" style={{ color: "#2FC28B" }}>Round 3 · After the match</span>
        <h2 className="disp" style={{ fontSize: "clamp(44px, 5vw, 68px)" }}>The scoreboard<br />never closes.</h2>
        <p style={{ margin: "0", fontSize: "18px", color: "#B7BECB", maxWidth: "620px" }}>Every match with the real agent, map and rank art. Open one to see both scoreboards, round-by-round results and who was MVP. Then zoom out to your agents, guns, maps and every act’s final rank.</p>
      </div>
      <div role="group" aria-label="Choose a screen" style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        {tabBtn('overview', 'Overview')}
        {tabBtn('matches', 'Match history')}
        {tabBtn('stats', 'Breakdown')}
      </div>
    </div>
    <div className="rv" style={{ position: "relative" }}>
      <img src="img/a0da04a457f951d947e08562d34a98bf.webp" alt="" aria-hidden="true" className="float hide-sm" style={{ position: "absolute", right: "-50px", top: "-150px", height: "320px", width: "auto", zIndex: "2", animationDelay: "-1s", filter: "drop-shadow(0 20px 30px rgba(0,0,0,.7))" }} />
      <div className="shot">
        <img src={SHOTS[tab][0]} alt={SHOTS[tab][1]} />
        <div className="scan" aria-hidden="true"></div>
      </div>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "12px" }}>
      <div className="fcard rv-z"><b style={{ fontSize: "17px" }}>Tracker-style match rows</b><span style={{ color: "#8C95A6", fontSize: "15px" }}>K/D/A, HS%, ADR, ACS, MVP badges and your scoreboard place, grouped by day.</span></div>
      <div className="fcard rv-z"><b style={{ fontSize: "17px" }}>Full scoreboards</b><span style={{ color: "#8C95A6", fontSize: "15px" }}>All ten players with agent and rank icons. Click anyone to open their profile.</span></div>
      <div className="fcard rv-z"><b style={{ fontSize: "17px" }}>Agents, guns, maps</b><span style={{ color: "#8C95A6", fontSize: "15px" }}>Win rate and K/D per agent, kills per weapon, win rate on every map.</span></div>
      <div className="fcard rv-z"><b style={{ fontSize: "17px" }}>RR and season ranks</b><span style={{ color: "#8C95A6", fontSize: "15px" }}>Your RR gains and losses, plus the rank you finished every act on.</span></div>
    </div>
  </section>
    </>
  );
}

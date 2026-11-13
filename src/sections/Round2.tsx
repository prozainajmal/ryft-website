export default function Round2() {
  return (
    <>
  <section id="r2" aria-label="Round 2: live match" className="diag" style={{ position: "relative", background: "#0B0E13", overflow: "hidden" }}>
    <img className="par" src="img/9acb712de282719c50f2349af413ef14.webp" alt="" aria-hidden="true" style={{ position: "absolute", inset: "-60px 0", width: "100%", height: "calc(100% + 120px)", objectFit: "cover", opacity: ".12" }} />
    <div className="wrap" style={{ position: "relative", paddingTop: "140px", paddingBottom: "140px", display: "flex", flexWrap: "wrap-reverse", gap: "56px", alignItems: "center" }}>
      <span className="round-no" aria-hidden="true" style={{ top: "60px" }}>02</span>
      <div className="rv-l" style={{ flex: "1 1 600px", minWidth: "0", position: "relative" }}>
        <img src="img/dedd0ae0391162761bb6873a14a613b5.webp" alt="" aria-hidden="true" className="float hide-sm" style={{ position: "absolute", left: "-60px", bottom: "-40px", height: "300px", width: "auto", zIndex: "2", animationDelay: "-3s", filter: "drop-shadow(0 20px 30px rgba(0,0,0,.7))" }} />
        <div className="shot"><img src="img/live-0.3.jpg" alt="RYFT live match: both teams with agent, rank, RR and peak rank" /><div className="scan" aria-hidden="true"></div></div>
      </div>
      <div className="rv-r" style={{ flex: "1 1 380px", minWidth: "0", display: "flex", flexDirection: "column", gap: "18px", position: "relative" }}>
        <span className="lbl" style={{ color: "#5FD0DE" }}>Round 2 · Agent select</span>
        <h2 className="disp" style={{ fontSize: "clamp(44px, 5vw, 68px)" }}>Know the lobby<br />before the buy phase.</h2>
        <p style={{ margin: "0", fontSize: "18px", color: "#B7BECB" }}>The moment agent select opens, RYFT shows your team’s ranks. When the map loads, the enemy team fills in — agent, rank, RR, peak and level for all ten players.</p>
        <div>
          <div className="feat"><span className="cap"><img src="img/653afac0a6b68f7fe2ff1e9419dfcbbf.webp" alt="" /><span className="key">E</span></span><div><b>Your team, instantly</b><div style={{ color: "#8C95A6", fontSize: "15px" }}>Ranks appear while everyone is still locking agents.</div></div></div>
          <div className="feat"><span className="cap"><img src="img/fd5be6206361568689d85e0cf1752eeb.webp" alt="" /><span className="key">Q</span></span><div><b>Enemies revealed on load</b><div style={{ color: "#8C95A6", fontSize: "15px" }}>All ten players with team averages, updated every few seconds.</div></div></div>
          <div className="feat"><span className="cap"><img src="img/e04908f2f96809394ea885b8eefa28a2.webp" alt="" /><span className="key">X</span></span><div><b>Peak rank and level</b><div style={{ color: "#8C95A6", fontSize: "15px" }}>Spot the smurf — or the player having an off act.</div></div></div>
        </div>
        <p style={{ margin: "0", fontSize: "14px", color: "#8C95A6" }}>Players who turned on “Hide my name” stay hidden — RYFT shows only their agent.</p>
      </div>
    </div>
  </section>
    </>
  );
}

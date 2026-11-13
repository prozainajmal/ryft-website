export default function Gallery() {
  return (
    <>
  <section id="gallery" aria-label="Screens" style={{ borderTop: "1px solid #1F2631", background: "#0B0E13", overflow: "hidden" }}>
    <div className="wrap" style={{ paddingTop: "100px", paddingBottom: "100px", display: "flex", flexDirection: "column", gap: "30px" }}>
      <div className="rv" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "20px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}><span className="lbl" style={{ color: "#FF6B77" }}>Inside the app</span><h2 className="disp" style={{ fontSize: "clamp(44px, 5vw, 64px)" }}>Take the tour</h2></div>
        <div className="dots" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>
      </div>
      <div className="rv-z" style={{ overflow: "hidden", borderRadius: "12px" }}>
        <div className="slides">
          <div><div className="shot"><img src="img/overview-0.3.jpg" alt="Overview screen" /></div><p style={{ margin: "14px 4px 0", color: "#B7BECB" }}><b style={{ color: "#E9ECF1" }}>Overview</b> — rank, key stats, Coach tips, recent matches and quick launch on one screen.</p></div>
          <div><div className="shot"><img src="img/live-0.3.jpg" alt="Live match screen" /></div><p style={{ margin: "14px 4px 0", color: "#B7BECB" }}><b style={{ color: "#E9ECF1" }}>Live match</b> — ranks, parties, recent form and smurf flags for all ten players.</p></div>
          <div><div className="shot"><img src="img/matches-0.3.jpg" alt="Match history screen" /></div><p style={{ margin: "14px 4px 0", color: "#B7BECB" }}><b style={{ color: "#E9ECF1" }}>Match history</b> — open any game for rounds and both scoreboards.</p></div>
          <div><div className="shot"><img src="img/breakdown-0.3.jpg" alt="Stats breakdown screen" /></div><p style={{ margin: "14px 4px 0", color: "#B7BECB" }}><b style={{ color: "#E9ECF1" }}>Breakdown</b> — agents, weapons and maps with real game art.</p></div>
          <div><div className="shot"><img src="img/vault-0.3.jpg" alt="Account vault screen" /></div><p style={{ margin: "14px 4px 0", color: "#B7BECB" }}><b style={{ color: "#E9ECF1" }}>Account vault</b> — every Riot account, one PIN, one-click launch.</p></div>
        </div>
      </div>
    </div>
  </section>
    </>
  );
}

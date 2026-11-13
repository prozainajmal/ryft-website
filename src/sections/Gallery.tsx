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
          <div><div className="shot"><img src="img/6fda6739bf03ed928667e1134085c08e.jpg" alt="Overview screen" /></div><p style={{ margin: "14px 4px 0", color: "#B7BECB" }}><b style={{ color: "#E9ECF1" }}>Overview</b> — rank, RR, key stats, recent matches and quick launch on one screen.</p></div>
          <div><div className="shot"><img src="img/82ad0a21eeb24fef1b060ced8214d5f6.jpg" alt="Live match screen" /></div><p style={{ margin: "14px 4px 0", color: "#B7BECB" }}><b style={{ color: "#E9ECF1" }}>Live match</b> — both teams’ ranks, RR and peaks while you play.</p></div>
          <div><div className="shot"><img src="img/2ab2d87d056729696a08ff1a78aa22b7.jpg" alt="Match history screen" /></div><p style={{ margin: "14px 4px 0", color: "#B7BECB" }}><b style={{ color: "#E9ECF1" }}>Match history</b> — open any game for rounds and both scoreboards.</p></div>
          <div><div className="shot"><img src="img/6d240f1e8a1532d44a56acef5c32875f.jpg" alt="Stats breakdown screen" /></div><p style={{ margin: "14px 4px 0", color: "#B7BECB" }}><b style={{ color: "#E9ECF1" }}>Breakdown</b> — agents, weapons and maps with real game art.</p></div>
          <div><div className="shot"><img src="img/fbb96bdcb6d68c851a03eb23736455e1.jpg" alt="Account vault screen" /></div><p style={{ margin: "14px 4px 0", color: "#B7BECB" }}><b style={{ color: "#E9ECF1" }}>Account vault</b> — every account, one PIN, one-click launch.</p></div>
        </div>
      </div>
    </div>
  </section>
    </>
  );
}

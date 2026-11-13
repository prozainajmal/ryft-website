export default function MatchDayIntro() {
  return (
    <>
  <section aria-label="How RYFT works" className="wrap" style={{ paddingTop: "110px", paddingBottom: "30px", display: "flex", flexDirection: "column", gap: "34px" }}>
    <div className="rv" style={{ display: "flex", flexDirection: "column", gap: "14px", maxWidth: "760px" }}>
      <span className="lbl" style={{ color: "#FF6B77" }}>Match day</span>
      <h2 className="disp" style={{ fontSize: "clamp(44px, 5.5vw, 76px)" }}>A match is four rounds.<br />RYFT plays all of them with you.</h2>
      <p style={{ margin: "0", fontSize: "18px", color: "#B7BECB" }}>Most trackers only show up after the game. RYFT is built around the whole match day — picking the account, reading the lobby, learning from the result, and scouting whoever’s next.</p>
    </div>
    <div className="rv" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "10px" }}>
      <a href="#r1" className="fcard" style={{ textDecoration: "none", color: "inherit", borderTop: "3px solid #FF4655", gap: "6px" }}><span className="lbl" style={{ color: "#FF6B77" }}>Round 1 · Before</span><b style={{ fontSize: "18px" }}>Pick an account, you’re in</b><span style={{ color: "#8C95A6", fontSize: "14px" }}>Account vault + one-click login</span></a>
      <a href="#r2" className="fcard" style={{ textDecoration: "none", color: "inherit", borderTop: "3px solid #3FB9C9", gap: "6px" }}><span className="lbl" style={{ color: "#5FD0DE" }}>Round 2 · Agent select</span><b style={{ fontSize: "18px" }}>Read the lobby</b><span style={{ color: "#8C95A6", fontSize: "14px" }}>Live match ranks</span></a>
      <a href="#r3" className="fcard" style={{ textDecoration: "none", color: "inherit", borderTop: "3px solid #2FC28B", gap: "6px" }}><span className="lbl" style={{ color: "#2FC28B" }}>Round 3 · After</span><b style={{ fontSize: "18px" }}>See what decided it</b><span style={{ color: "#8C95A6", fontSize: "14px" }}>Stats, scoreboards, trends</span></a>
      <a href="#r4" className="fcard" style={{ textDecoration: "none", color: "inherit", borderTop: "3px solid #E7B649", gap: "6px" }}><span className="lbl" style={{ color: "#E7B649" }}>Round 4 · Between games</span><b style={{ fontSize: "18px" }}>Scout anyone</b><span style={{ color: "#8C95A6", fontSize: "14px" }}>Profiles + leaderboards</span></a>
    </div>
  </section>
    </>
  );
}

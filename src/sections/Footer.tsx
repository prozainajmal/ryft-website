export default function Footer() {
  return (
    <>
  <footer style={{ borderTop: "1px solid #1F2631", background: "#0B0E13" }}>
    <div className="wrap" style={{ paddingTop: "56px", paddingBottom: "40px", display: "flex", flexWrap: "wrap", gap: "40px", justifyContent: "space-between" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "14px", maxWidth: "380px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <svg width="26" height="26" viewBox="0 0 32 32" aria-hidden="true"><path d="M4 26 L14 6 L18 6 L8 26 Z" fill="#FF4655"></path><path d="M14 26 L24 6 L28 6 L18 26 Z" fill="#E9ECF1"></path></svg>
          <span style={{ fontFamily: "'Barlow Condensed', Inter, sans-serif", fontWeight: "800", fontSize: "24px", letterSpacing: ".16em" }}>RYFT</span>
        </div>
        <p style={{ margin: "0", color: "#8C95A6", fontSize: "14px" }}>The Valorant companion for match day: account vault, live lobby ranks and tracker-grade stats in one Windows app.</p>
      </div>
      <nav aria-label="Product" style={{ display: "flex", flexDirection: "column", gap: "2px" }}><span className="lbl" style={{ color: "#E9ECF1", marginBottom: "8px" }}>Product</span><a className="flink" href="#features">Features</a><a className="flink" href="#r2">Live match</a><a className="flink" href="#gallery">Screens</a><a className="flink" href="#download">Download</a></nav>
      <nav aria-label="Resources" style={{ display: "flex", flexDirection: "column", gap: "2px" }}><span className="lbl" style={{ color: "#E9ECF1", marginBottom: "8px" }}>Resources</span><a className="flink" href="#roadmap">Roadmap</a><a className="flink" href="#roadmap">Release notes</a><a className="flink" href="#faq">FAQ</a><a className="flink" href="#safety">Security</a></nav>
      <nav aria-label="More" style={{ display: "flex", flexDirection: "column", gap: "2px" }}><span className="lbl" style={{ color: "#E9ECF1", marginBottom: "8px" }}>More</span><a className="flink" href="https://github.com/prozainajmal/ryft-releases/releases" target="_blank" rel="noreferrer">All versions</a><a className="flink" href="https://github.com/prozainajmal/ryft-releases/issues/new" target="_blank" rel="noreferrer">Report a bug</a></nav>
    </div>
    <div className="wrap" style={{ paddingTop: "20px", paddingBottom: "40px", borderTop: "1px solid #1F2631" }}>
      <p style={{ margin: "0", color: "#8C95A6", fontSize: "13px", maxWidth: "900px" }}>RYFT isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games and all associated properties are trademarks or registered trademarks of Riot Games, Inc.</p>
    </div>
  </footer>
    </>
  );
}

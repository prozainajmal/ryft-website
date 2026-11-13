export default function IntroOverlay() {
  return (
    <>
  <div className="intro" aria-hidden="true">
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <span className="lbl" style={{ color: "#FF6B77" }}>Competitive · Ascent</span>
      <span className="mf">Match found</span>
      <div className="bar"><i></i></div>
    </div>
  </div>

  <div className="progress" style={{ position: "fixed", top: "0", left: "0", right: "0", height: "3px", background: "#FF4655", transformOrigin: "0 50%", zIndex: "30" }}></div>
    </>
  );
}

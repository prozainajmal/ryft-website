import { downloadHref, useRelease } from '../release';

export default function Nav() {
  const dl = downloadHref(useRelease());
  return (
    <>
  <header style={{ position: "sticky", top: "0", zIndex: "20", background: "rgba(14,17,23,.86)", backdropFilter: "blur(10px)", borderBottom: "1px solid #1F2631" }}>
    <nav aria-label="Main" className="wrap" style={{ paddingTop: "10px", paddingBottom: "10px", display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
      <a href="#top" aria-label="RYFT home" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", color: "#E9ECF1" }}>
        <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true"><path d="M4 26 L14 6 L18 6 L8 26 Z" fill="#FF4655"></path><path d="M14 26 L24 6 L28 6 L18 26 Z" fill="#E9ECF1"></path></svg>
        <span style={{ fontFamily: "'Barlow Condensed', Inter, sans-serif", fontWeight: "800", fontSize: "26px", letterSpacing: ".16em" }}>RYFT</span>
      </a>
      <div className="navlinks" style={{ display: "flex", gap: "4px", flexWrap: "wrap", marginLeft: "16px" }}>
        <a className="navlink" href="#features">Features</a>
        <a className="navlink" href="#r1">Match day</a>
        <a className="navlink" href="#gallery">Screens</a>
        <a className="navlink" href="#compare">Compare</a>
        <a className="navlink" href="#roadmap">Roadmap</a>
        <a className="navlink" href="#faq">FAQ</a>
      </div>
      <div style={{ flex: "1 1 0" }}></div>
      <a className="btn red" href={dl} style={{ minHeight: "44px", fontSize: "15px", padding: "0 18px" }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v12"></path><path d="m7 10 5 5 5-5"></path><path d="M5 21h14"></path></svg>
        Download
      </a>
    </nav>
  </header>
    </>
  );
}

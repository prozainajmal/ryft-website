export default function Safety() {
  return (
    <>
  <section id="safety" aria-label="Privacy and safety" style={{ borderTop: "1px solid #1F2631", background: "#0B0E13" }}>
    <div className="wrap" style={{ paddingTop: "100px", paddingBottom: "100px", display: "flex", flexDirection: "column", gap: "34px" }}>
      <div className="rv" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "28px" }}>
        <img src="img/bf74a1e096106c87e4269c098013703f.webp" alt="" aria-hidden="true" className="float" style={{ width: "96px", height: "96px", objectFit: "contain" }} />
        <div style={{ display: "flex", flexDirection: "column", gap: "14px", maxWidth: "720px" }}>
          <span className="lbl" style={{ color: "#FF6B77" }}>Heavy armor for your accounts</span>
          <h2 className="disp" style={{ fontSize: "clamp(44px, 5vw, 64px)" }}>Built like a vault,<br />not a website.</h2>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "14px" }}>
        <div className="fcard rv-z"><span className="cap"><img src="img/bc35e1b6a541565fbf0792e158754fca.webp" alt="" /></span><b style={{ fontSize: "18px" }}>Stays on your PC</b><span style={{ color: "#8C95A6", fontSize: "15px" }}>Passwords never leave your computer. There’s no RYFT account and no cloud sync.</span></div>
        <div className="fcard rv-z"><span className="cap"><img src="img/c7e8f4ae475ec56c836b2699c12dbf48.webp" alt="" /></span><b style={{ fontSize: "18px" }}>AES-256 + your PIN</b><span style={{ color: "#8C95A6", fontSize: "15px" }}>The vault file is encrypted with a key made from your PIN. It locks itself after a few idle minutes.</span></div>
        <div className="fcard rv-z"><span className="cap"><img src="img/822666071e65d24c3e7d03cb98c45ff5.webp" alt="" /></span><b style={{ fontSize: "18px" }}>Hands off the game</b><span style={{ color: "#8C95A6", fontSize: "15px" }}>RYFT never reads game memory or injects anything into Valorant. Live data comes from the Riot Client on your PC.</span></div>
        <div className="fcard rv-z"><span className="cap"><img src="img/9ec2c2dd5e076a0a200206decfc602f2.webp" alt="" /></span><b style={{ fontSize: "18px" }}>Nothing hidden</b><span style={{ color: "#8C95A6", fontSize: "15px" }}>A plain-text diagnostic log shows every step RYFT takes — and never prints a password or PIN.</span></div>
      </div>
    </div>
  </section>
    </>
  );
}

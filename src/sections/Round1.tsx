export default function Round1() {
  return (
    <>
  <section id="r1" aria-label="Round 1: account vault" className="wrap" style={{ position: "relative", paddingTop: "100px", paddingBottom: "100px", display: "flex", flexWrap: "wrap", gap: "56px", alignItems: "center" }}>
    <span className="round-no" aria-hidden="true">01</span>
    <div className="rv-l" style={{ flex: "1 1 420px", minWidth: "0", display: "flex", flexDirection: "column", gap: "18px", position: "relative" }}>
      <span className="lbl" style={{ color: "#FF6B77" }}>Round 1 · Before the match</span>
      <h2 className="disp" style={{ fontSize: "clamp(44px, 5vw, 68px)" }}>Every account.<br />One PIN.</h2>
      <p style={{ margin: "0", fontSize: "18px", color: "#B7BECB" }}>Main, alt, smurf, the one for your friend’s duo — keep them all in an encrypted vault and launch any of them in one click. RYFT opens the Riot Client, types the login, ticks “Stay signed in” and starts Valorant.</p>
      <div>
        <div className="feat"><span className="cap"><img src="img/b2c0c3caaa8d2dbf2cb696489f7f163b.webp" alt="" /><span className="key">X</span></span><div><b>Locked with your PIN</b><div style={{ color: "#8C95A6", fontSize: "15px" }}>AES-256 encryption, stored only on your PC, auto-locks when you step away.</div></div></div>
        <div className="feat"><span className="cap"><img src="img/80fa83b155bd3822616f4440385b3474.webp" alt="" /><span className="key">E</span></span><div><b>Launch &amp; login in one click</b><div style={{ color: "#8C95A6", fontSize: "15px" }}>No more copying usernames and passwords between windows.</div></div></div>
        <div className="feat"><span className="cap"><img src="img/6903eda5308ddf29ae102cc854f2d148.webp" alt="" /><span className="key">C</span></span><div><b>Saved sessions, fewer login codes</b><div style={{ color: "#8C95A6", fontSize: "15px" }}>RYFT keeps each account’s Riot sign-in, so switching back is instant.</div></div></div>
        <div className="feat"><span className="cap"><img src="img/223e8585f242a2a4d7909edd7794235c.webp" alt="" /><span className="key">Q</span></span><div><b>Always know who’s signed in</b><div style={{ color: "#8C95A6", fontSize: "15px" }}>A live badge shows the active account; one button signs it out properly.</div></div></div>
      </div>
    </div>
    <div className="rv-r" style={{ flex: "1 1 560px", minWidth: "0", position: "relative" }}>
      <img src="img/0ac1d6616328a93ff99cf4aca3c471ba.webp" alt="" aria-hidden="true" className="float hide-sm" style={{ position: "absolute", right: "-40px", top: "-110px", height: "300px", width: "auto", zIndex: "2", filter: "drop-shadow(0 20px 30px rgba(0,0,0,.7))" }} />
      <div className="shot"><img src="img/fbb96bdcb6d68c851a03eb23736455e1.jpg" alt="RYFT account vault: saved Riot accounts with Launch and Log out buttons" /><div className="scan" aria-hidden="true"></div></div>
    </div>
  </section>
    </>
  );
}

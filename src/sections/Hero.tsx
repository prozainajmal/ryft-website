import { RANKS } from '../data';
import { downloadHref, useRelease } from '../release';

export default function Hero() {
  const dl = downloadHref(useRelease());
  return (
    <>
  <section id="top" aria-label="Introduction" style={{ position: "relative", overflow: "hidden", borderBottom: "1px solid #1F2631" }}>
    <img src="img/27313dfbf4a2124c0fac30c7bc5ce9bf.webp" alt="" aria-hidden="true" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", opacity: ".22" }} />
    <div aria-hidden="true" style={{ position: "absolute", inset: "0", background: "linear-gradient(90deg, #0E1117 30%, rgba(14,17,23,.7) 60%, rgba(14,17,23,.35)), linear-gradient(0deg, #0E1117 0%, transparent 40%)" }}></div>
    <div className="scan" aria-hidden="true"></div>
    <div aria-hidden="true" style={{ position: "absolute", inset: "0", pointerEvents: "none" }}>
      <i className="spark" style={{ left: "52%", bottom: "0", animationDelay: "0s" }}></i>
      <i className="spark" style={{ left: "60%", bottom: "0", animationDelay: "1.4s" }}></i>
      <i className="spark" style={{ left: "68%", bottom: "0", animationDelay: "2.8s", background: "#3FB9C9", boxShadow: "0 0 8px #3FB9C9" }}></i>
      <i className="spark" style={{ left: "76%", bottom: "0", animationDelay: ".7s" }}></i>
      <i className="spark" style={{ left: "84%", bottom: "0", animationDelay: "3.6s" }}></i>
      <i className="spark" style={{ left: "91%", bottom: "0", animationDelay: "5s", background: "#3FB9C9", boxShadow: "0 0 8px #3FB9C9" }}></i>
      <i className="spark" style={{ left: "46%", bottom: "0", animationDelay: "4.3s" }}></i>
      <i className="spark" style={{ left: "72%", bottom: "0", animationDelay: "6.1s" }}></i>
    </div>

    <div className="wrap" style={{ position: "relative", paddingTop: "72px", paddingBottom: "40px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "40px" }}>
      <div style={{ flex: "1 1 520px", minWidth: "0", display: "flex", flexDirection: "column", gap: "26px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
          <span className="lbl" style={{ color: "#FF6B77" }}>Free Windows app · for Valorant players</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", height: "28px", padding: "0 10px", borderRadius: "4px", background: "rgba(47,194,139,.1)", border: "1px solid rgba(47,194,139,.35)", color: "#2FC28B", fontSize: "12px", fontWeight: "700" }}><i style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#2FC28B", animation: "pulse 1.6s infinite" }}></i>Match day ready</span>
        </div>
        <h1 className="disp" style={{ fontSize: "clamp(56px, 8vw, 116px)" }}>
          <span className="glitch" data-text="Win the match">Win the match</span><br />
          <span style={{ color: "#FF4655" }}>before it loads.</span>
        </h1>
        <p style={{ margin: "0", maxWidth: "580px", fontSize: "21px", color: "#E9ECF1", fontWeight: "600" }}>One app for
          <span className="typer"><span>your main.</span><span>your smurf.</span><span>your duo’s alt.</span><span>every lobby.</span></span>
        </p>
        <p style={{ margin: "0", maxWidth: "560px", fontSize: "18px", color: "#B7BECB" }}>RYFT keeps all your Riot accounts in a locked vault, shows everyone’s rank the second agent select opens, and turns every match into tracker-grade stats — on your PC, without a single browser tab.</p>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <a className="btn red" href={dl}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v12"></path><path d="m7 10 5 5 5-5"></path><path d="M5 21h14"></path></svg>
            Download for Windows
          </a>
          <a className="btn ghost" href="#features">Explore features</a>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", maxWidth: "520px" }}>
          <span className="lbl" style={{ color: "#8C95A6" }}>Kill feed · what RYFT takes out</span>
          <div style={{ position: "relative", height: "40px" }}>
            <div style={{ position: "absolute", inset: "0", display: "grid" }}>
              <div className="kf" style={{ gridArea: "1 / 1" }}><b style={{ color: "#FF6B77" }}>RYFT</b><img src="img/71b507e7725328939b10c0728c7839c4.webp" alt="Vandal" /><span>Typing your password again</span></div>
              <div className="kf" style={{ gridArea: "1 / 1" }}><b style={{ color: "#FF6B77" }}>RYFT</b><img src="img/af41237d37dc10a1299268f81bf6e97e.webp" alt="Operator" /><span>Guessing the enemy’s ranks</span></div>
              <div className="kf" style={{ gridArea: "1 / 1" }}><b style={{ color: "#FF6B77" }}>RYFT</b><img src="img/7ad6e950920aaf53214cb86373c3bfc9.webp" alt="Sheriff" /><span>Ten tracker tabs after every game</span></div>
              <div className="kf" style={{ gridArea: "1 / 1" }}><b style={{ color: "#FF6B77" }}>RYFT</b><img src="img/956f991d31c3eccbe3b098bceb85776b.webp" alt="Phantom" /><span>Login codes on every switch</span></div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ flex: "1 1 420px", minWidth: "0", position: "relative", height: "580px", display: "flex", justifyContent: "center" }}>
        <div className="ring2 hide-sm" aria-hidden="true" style={{ left: "50%", top: "50%", width: "560px", height: "560px", margin: "-280px 0 0 -280px" }}></div>
        <div aria-hidden="true" style={{ position: "absolute", left: "50%", top: "50%", width: "460px", height: "460px", margin: "-230px 0 0 -230px", borderRadius: "50%", border: "1px dashed rgba(255,70,85,.35)" }}>
          <div className="orbit">
            <img src="img/d5bfc59279d899c7c190fcc82ea82169.webp" alt="" style={{ left: "198px", top: "-32px" }} />
            <img src="img/db2c5a28bed5f4a25568361a6f87b439.webp" alt="" style={{ left: "428px", top: "198px" }} />
            <img src="img/1c63e9cca313fce0a1c711875f8b1b3b.webp" alt="" style={{ left: "198px", top: "428px" }} />
            <img src="img/4351967924f89de471b21f204c2ff488.webp" alt="" style={{ left: "-32px", top: "198px" }} />
          </div>
        </div>
        <img className="float" src="img/4eba403c5d63a7e20c52c258432d7794.webp" alt="Jett, a Valorant agent" style={{ position: "relative", height: "560px", width: "auto", maxWidth: "100%", objectFit: "contain", filter: "drop-shadow(0 30px 40px rgba(0,0,0,.7))" }} />
        <div className="float hide-sm" style={{ position: "absolute", right: "0", bottom: "70px", animationDelay: "-2s", display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px", borderRadius: "8px", background: "rgba(21,26,34,.92)", border: "1px solid #2E3644", boxShadow: "0 16px 40px rgba(0,0,0,.5)" }}>
          <img src="img/4351967924f89de471b21f204c2ff488.webp" alt="Diamond rank icon" style={{ width: "42px", height: "42px" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}><span className="lbl" style={{ color: "#8C95A6", fontSize: "10px" }}>Enemy duelist</span><b style={{ color: "#C98CF0" }}>Diamond 3 · 90 RR</b></div>
        </div>
        <div className="float hide-sm" style={{ position: "absolute", left: "0", top: "90px", animationDelay: "-4s", display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px", borderRadius: "8px", background: "rgba(21,26,34,.92)", border: "1px solid #2E3644", boxShadow: "0 16px 40px rgba(0,0,0,.5)" }}>
          <span className="cap" style={{ width: "40px", height: "40px" }}><img src="img/b2c0c3caaa8d2dbf2cb696489f7f163b.webp" alt="" style={{ width: "24px", height: "24px" }} /></span>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}><span className="lbl" style={{ color: "#8C95A6", fontSize: "10px" }}>Vault</span><b>Smurf NA · signed in</b></div>
        </div>
      </div>
    </div>

    <div aria-label="Every rank from Iron to Radiant" style={{ position: "relative", borderTop: "1px solid #1F2631", padding: "18px 0", overflow: "hidden", background: "rgba(11,14,19,.6)" }}>
      <div className="marq">
        {RANKS.concat(RANKS).map((r, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", flex: "none" }}>
            <img src={r.src} alt="" style={{ width: "40px", height: "40px" }} />
            <span style={{ fontFamily: "'Barlow Condensed', Inter, sans-serif", fontWeight: "700", fontSize: "22px", textTransform: "uppercase", color: r.color }}>{r.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
    </>
  );
}

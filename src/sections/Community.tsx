export default function Community() {
  return (
    <>
  <section aria-label="Community" className="wrap" style={{ paddingBottom: "100px" }}>
    <div className="rv-z" style={{ position: "relative", overflow: "hidden", borderRadius: "16px", padding: "48px", background: "#151A22", border: "1px solid #2E3644", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "32px", justifyContent: "space-between" }}>
      <div className="float hide-sm" style={{ position: "absolute", right: "180px", top: "-30px", display: "flex", gap: "10px", opacity: ".35" }}>
        <img src="img/4ad7e0d0c4767643645f0a838b845dc9.webp" alt="" style={{ width: "70px", height: "70px", borderRadius: "10px" }} />
        <img src="img/ad988225d2cd30fc50f956292d7b3341.webp" alt="" style={{ width: "70px", height: "70px", borderRadius: "10px" }} />
        <img src="img/aaed65bd43a7c4f33dfe1753519da219.webp" alt="" style={{ width: "70px", height: "70px", borderRadius: "10px" }} />
      </div>
      <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "12px", maxWidth: "620px" }}>
        <span className="lbl" style={{ color: "#FF6B77" }}>Squad up</span>
        <h2 className="disp" style={{ fontSize: "52px" }}>Shape what ships next</h2>
        <p style={{ margin: "0", color: "#B7BECB", fontSize: "17px" }}>Found a bug or want a feature? Tell us — the roadmap is built from what players ask for.</p>
      </div>
      <a className="btn ghost" href="https://github.com/prozainajmal/ryft-releases/issues/new" target="_blank" rel="noreferrer" style={{ position: "relative" }}>Send a bug or an idea</a>
    </div>
  </section>
    </>
  );
}

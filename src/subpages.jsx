const Subpage = ({ page }) => {
  if (!page) return null;

  const pages = {
    about: {
      label: "ABOUT — 会社案内",
      body: (
        <div style={{ maxWidth: 900 }}>
          <div className="sec-id" style={{ marginBottom: 16 }}>§ COMPANY DETAIL</div>
          <h2 className="sec-title" style={{ marginBottom: 40 }}>COMPANY<br/><span className="cy">PROFILE.</span></h2>

          <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: 0, borderTop: "1px solid var(--line)" }}>
            {[
              ["商号", "株式会社 KU・TRUCK&TYRE・SERVICE"],
              ["設立", "1981年 (昭和56年)"],
              ["代表者", "代表取締役 —"],
              ["所在地", "〒341-0058 埼玉県三郷市彦江1-213-3"],
              ["電話", "048-952-2288"],
              ["営業時間", "8:00 – 17:00 / 日曜定休"],
              ["事業内容", "イベント機材輸送 / 一般貨物自動車運送業 / 倉庫業"],
              ["取引先", "TV局・舞台制作会社・コンサートプロモーター・展示会運営 他"],
            ].map(([k, v], i) => (
              <React.Fragment key={i}>
                <div style={{ padding: "18px 0", borderBottom: "1px solid var(--line-2)", fontFamily: "JetBrains Mono, monospace", fontSize: 11, letterSpacing: "0.1em", color: "var(--muted)", textTransform: "uppercase" }}>{k}</div>
                <div style={{ padding: "18px 0", borderBottom: "1px solid var(--line-2)", fontSize: 14, lineHeight: 1.7 }}>{v}</div>
              </React.Fragment>
            ))}
          </div>
        </div>
      ),
    },
    vehicle: {
      label: "VEHICLE — 車両紹介",
      body: (
        <div>
          <div className="sec-id" style={{ marginBottom: 16 }}>§ FLEET DETAIL</div>
          <h2 className="sec-title" style={{ marginBottom: 40 }}>THE<br/><span className="cy">FLEET.</span></h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { code: "VH-01", name: "10T WING", cap: "10,000kg", use: "大型ツアー・舞台一括輸送" },
              { code: "VH-02", name: "4T BOX", cap: "4,000kg", use: "TV局・スタジオ機材" },
              { code: "VH-03", name: "2T FLAT", cap: "2,000kg", use: "中規模イベント・展示会" },
              { code: "VH-04", name: "1T VAN", cap: "1,000kg", use: "緊急搬入・現場サポート" },
              { code: "VH-05", name: "ALUMI BOX", cap: "3,000kg", use: "精密機器" },
              { code: "VH-06", name: "HIACE", cap: "—", use: "スタッフ・小物用" },
            ].map((v, i) => (
              <div key={i} style={{ border: "1px solid var(--line)", padding: 24, background: "var(--paper)" }}>
                <div style={{ aspectRatio: "4/3", background: "var(--bg-2)", marginBottom: 18, border: "1px solid var(--line)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: "var(--muted)", letterSpacing: "0.08em" }}>TRUCK / PHOTO</div>
                <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: "var(--muted)", letterSpacing: "0.1em", marginBottom: 6 }}>{v.code}</div>
                <div style={{ fontFamily: "Anton, sans-serif", fontSize: 32, letterSpacing: "0.02em", marginBottom: 10 }}>{v.name}</div>
                <div style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.6 }}>積載: {v.cap}<br/>用途: {v.use}</div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    recruit: {
      label: "RECRUIT — 求人案内",
      body: (
        <div style={{ maxWidth: 900 }}>
          <div className="sec-id" style={{ marginBottom: 16 }}>§ CAREERS</div>
          <h2 className="sec-title" style={{ marginBottom: 24 }}>WE<br/><span className="cy">DRIVE.</span></h2>
          <p style={{ fontSize: 15, lineHeight: 2, color: "var(--ink-2)", marginBottom: 48, maxWidth: 640 }}>
            KUのドライバーは、ただの運転手ではない。<br/>
            現場の空気を読み、ミュージシャンやスタッフと並んで一つの舞台を作る仲間です。<br/>
            長く続けられる環境、ちゃんと休める体制、そしてかっこいい車両。
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {[
              { t: "中型・大型ドライバー", n: "FULL-TIME", d: "ツアー・舞台機材の輸送。大型免許必須。" },
              { t: "倉庫スタッフ", n: "FULL-TIME", d: "機材管理・搬出入サポート。" },
              { t: "事務 / 配車", n: "FULL-TIME", d: "案件管理・スケジューリング。" },
            ].map((j, i) => (
              <div key={i} style={{ border: "1px solid var(--line)", padding: 26 }}>
                <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: "var(--accent-2)", letterSpacing: "0.14em", marginBottom: 12 }}>{j.n}</div>
                <div style={{ fontFamily: "Noto Sans JP, sans-serif", fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{j.t}</div>
                <div style={{ fontSize: 13, lineHeight: 1.8, color: "var(--muted)" }}>{j.d}</div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  };

  const p = pages[page];
  if (!p) return null;

  return (
    <div className="subpage">
      <div className="subpage-head">
        <span>{p.label}</span>
        <a className="subpage-close" href="./" style={{ textDecoration: "none" }}>← BACK TO HOME</a>
      </div>
      <div className="subpage-body">{p.body}</div>
    </div>
  );
};

window.Subpage = Subpage;

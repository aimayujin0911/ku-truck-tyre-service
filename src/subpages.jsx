const RecruitBody = () => {
  const mono = { fontFamily: "JetBrains Mono, monospace" };
  const anton = { fontFamily: "Anton, sans-serif" };
  const labelMono = { ...mono, fontSize: 10, letterSpacing: "0.14em", color: "var(--accent-2)", textTransform: "uppercase" };
  const sectionGap = { marginBottom: 100 };

  const reasons = [
    { n: "01", t: "現場主義", d: "TV局・舞台・ツアー。デリケートな機材を、時間どおりに、傷ひとつなく。1981年から44年、現場で磨かれた仕事です。" },
    { n: "02", t: "退職者の少なさ", d: "20代〜60代まで11名のドライバーが在籍。長く続けられる環境を、本気で作っています。" },
    { n: "03", t: "充実の手当", d: "評価・美化・休日・皆勤・時間外・家族・住宅。ベース給に加えて月最大15万超の手当が積み上がります。" },
    { n: "04", t: "未経験でも安心", d: "先輩同乗の研修からスタート。ルート、納品、お客様対応まで、ひとつずつ。" },
    { n: "05", t: "休める会社", d: "GW・夏季・年末年始の長期休暇。育児・産前産後・傷病休暇まで完備。完全週休二日制も相談OK。" },
    { n: "06", t: "寮・社宅完備", d: "遠方からの転職もOK。寮完備、給与前払い制度、入社祝い金最大12万円であなたの一歩を支えます。" },
  ];

  const roles = [
    {
      code: "ROLE-01",
      title: "テレビ局・イベント関係 中型ドライバー",
      tag: "FULL-TIME / 増員募集",
      salary: "月給 31万円 〜 38万円",
      base: "最低保証 27.56万円 + 各種手当 + 歩合",
      summary: "番組の大道具・装飾品・舞台機材を、TV局やスタジオ、ライブ会場へ。著名人と現場ですれ違うことも。",
      need: ["中型免許以上 (AT限定不可)", "学歴・経験不問", "平成19年6月以前の普通免許もOK"],
    },
    {
      code: "ROLE-02",
      title: "大型フリードライバー",
      tag: "FULL-TIME",
      salary: "月給 40万円 〜",
      base: "ベース給 + 各種手当 + 歩合",
      summary: "関東圏内〜全国まで。長年の現場経験が、定型外の依頼にこそ活きるポジションです。",
      need: ["大型免許必須", "経験者歓迎", "免許取得費用補助あり"],
    },
    {
      code: "ROLE-03",
      title: "大型冷蔵車ドライバー",
      tag: "FULL-TIME / 高待遇",
      salary: "月給 43万円 〜",
      base: "ベース給 + 冷蔵手当 + 各種手当",
      summary: "温度管理が必要な貨物の輸送。安定した固定ルートで、計画的に走れる案件です。",
      need: ["大型免許必須", "冷蔵車経験者優遇"],
    },
    {
      code: "ROLE-04",
      title: "倉庫間配送 小型ドライバー (2t)",
      tag: "FULL-TIME / 未経験OK",
      salary: "月給 24.56万円 〜",
      base: "ベース給 + 7種類の手当 + 歩合",
      summary: "食品・家電・プラスチック加工品を、関東圏内の倉庫から倉庫・工場へ。手積み手降し・パレット・カゴ台車。",
      need: ["中型免許以上 (AT限定不可)", "経験不問・学歴不問", "フォークリフト免許者も活躍中"],
    },
    {
      code: "ROLE-05",
      title: "タイヤ取付・倉庫管理",
      tag: "FULL-TIME",
      salary: "月給 30万円 〜",
      base: "ベース給 + 各種手当",
      summary: "自社グループ車両のタイヤ取付・在庫管理。中尾上海(CHAOYANG)の正規代理店業務を支える裏方です。",
      need: ["未経験者歓迎", "資格取得支援あり", "車・タイヤ好きな人ぴったり"],
    },
    {
      code: "ROLE-06",
      title: "大型トラック整備士",
      tag: "FULL-TIME",
      salary: "月給 35万円 〜",
      base: "ベース給 + 整備士手当",
      summary: "自社車両メインの安定整備。2027年には新工場設立予定で、より働きやすい環境へ進化します。",
      need: ["整備士資格 必須", "整備士免許の取得費用は会社負担"],
    },
  ];

  const day = [
    { time: "06:00", t: "出勤・点呼", d: "体調確認、アルコールチェック、車両点検" },
    { time: "06:20", t: "出発", d: "配車計画にそって積み込み先・現場へ" },
    { time: "08:30", t: "現場到着・荷卸し", d: "TV局やイベント会場での搬入" },
    { time: "12:00", t: "休憩 (1h)", d: "ドライバー全員、ちゃんと取れます" },
    { time: "14:00", t: "次案件 積み込み", d: "次の現場 or 自社倉庫への戻り" },
    { time: "16:00", t: "倉庫到着・荷卸し", d: "機材を倉庫に格納、明日の準備" },
    { time: "17:00", t: "終了点呼・退社", d: "日報・報告事項を提出して帰宅" },
  ];

  const allowances = [
    { l: "評価手当", v: "25,000円 / 月" },
    { l: "美化手当", v: "10,000円 / 月" },
    { l: "休日手当", v: "10,000円 / 月" },
    { l: "皆勤手当", v: "支給あり" },
    { l: "時間外手当", v: "80,000円 / 月" },
    { l: "家族手当", v: "1人につき 3,000円 / 月" },
    { l: "住宅手当", v: "5,000円 / 月" },
    { l: "賞与", v: "最大 100,000円" },
  ];

  const benefits = [
    "社会保険完備", "交通費規定内支給", "入社祝い金 最大 12万円", "給与前払い制度",
    "キャリアアップ制度", "給与最低保障制度", "免許取得費用補助", "健康診断 (年1回 無料)",
    "寮・社宅完備", "再雇用制度", "慶弔見舞金制度", "丁寧な研修制度",
    "駐車場完備", "年末調整代行", "制服貸与", "資格取得支援",
  ];

  const holidays = [
    "週休制 1〜2日 (希望シフト制)", "完全週休二日制 (相談可)",
    "GW休暇", "夏季休暇", "年末年始休暇",
    "有給休暇", "育児休暇", "産前産後休暇", "傷病休暇",
  ];

  return (
    <div>
      {/* ===== HERO LEAD ===== */}
      <div style={{ maxWidth: 980, marginBottom: 80 }}>
        <div className="sec-id" style={{ marginBottom: 16 }}>§ CAREERS / RECRUIT</div>
        <h2 className="sec-title" style={{ marginBottom: 28, fontSize: "clamp(56px, 9vw, 140px)", lineHeight: 0.92 }}>
          DRIVE<br/>THE <span className="cy">SCENE.</span>
        </h2>
        <p style={{ fontSize: 16, lineHeight: 2, color: "var(--ink-2)", maxWidth: 720, marginBottom: 24 }}>
          KUのドライバーは、ただの運転手じゃない。<br/>
          ツアーの熱量、TV局の緊張感、舞台の裏側。<br/>
          現場の空気を読みながら、ミュージシャンやスタッフと並んで <span className="hl">ひとつの舞台を作る仲間</span> です。
        </p>
        <p style={{ fontSize: 14, lineHeight: 2, color: "var(--muted)", maxWidth: 720 }}>
          1981年、埼玉・三郷の小さな車庫から始まりました。<br/>
          44年。長く続けられる環境、ちゃんと休める体制、そしてかっこいい車両を、<br/>
          本気で作り続けています。
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, marginTop: 56, borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
          {[
            { n: "11", l: "DRIVERS\nON ROAD" },
            { n: "20-60s", l: "AGE RANGE\nACTIVE" },
            { n: "44", l: "YEARS\nSINCE 1981" },
            { n: "30+", l: "FLEET\nVEHICLES" },
          ].map((s, i) => (
            <div key={i} style={{ padding: "26px 22px", borderRight: i < 3 ? "1px solid var(--line)" : "none" }}>
              <div style={{ ...anton, fontSize: 44, lineHeight: 1, marginBottom: 10 }}>{s.n}</div>
              <div style={{ ...mono, fontSize: 10, letterSpacing: "0.12em", color: "var(--muted)", whiteSpace: "pre-line", lineHeight: 1.6 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== WHY KU ===== */}
      <div style={sectionGap}>
        <div className="sec-id" style={{ marginBottom: 16 }}>§01 / WHY KU</div>
        <h3 className="sec-title" style={{ marginBottom: 48, fontSize: "clamp(36px, 5vw, 72px)" }}>
          WHY <span className="cy">KU?</span>
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderTop: "1px solid var(--line)" }}>
          {reasons.map((r, i) => (
            <div key={i} style={{
              padding: "28px 26px 36px",
              borderRight: (i % 3 !== 2) ? "1px solid var(--line)" : "none",
              borderBottom: i < 3 ? "1px solid var(--line)" : "none",
            }}>
              <div style={{ ...mono, fontSize: 11, color: "var(--accent-2)", letterSpacing: "0.16em", marginBottom: 16 }}>{r.n}</div>
              <div style={{ fontFamily: "Noto Sans JP, sans-serif", fontWeight: 700, fontSize: 18, marginBottom: 12, lineHeight: 1.5 }}>{r.t}</div>
              <div style={{ fontSize: 13, lineHeight: 1.9, color: "var(--muted)" }}>{r.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== THE CREW ===== */}
      <div style={sectionGap}>
        <div className="sec-id" style={{ marginBottom: 16 }}>§02 / THE CREW</div>
        <h3 className="sec-title" style={{ marginBottom: 48, fontSize: "clamp(36px, 5vw, 72px)" }}>
          THE <span className="cy">CREW.</span>
        </h3>

        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 36, alignItems: "stretch", marginBottom: 48 }}>
          <div style={{ background: "var(--paper)", border: "1px solid var(--line)", padding: 32 }}>
            <div style={labelMono}>DRIVERS — AGE BREAKDOWN</div>
            <div style={{ ...anton, fontSize: 56, lineHeight: 1, margin: "16px 0 24px" }}>11 <span style={{ fontSize: 22, color: "var(--muted)" }}>名 在籍</span></div>
            <div style={{ display: "grid", gap: 12 }}>
              {[["20代", 2], ["30代", 1], ["40代", 2], ["50代", 3], ["60代", 3]].map(([k, v], i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "60px 1fr 40px", gap: 12, alignItems: "center" }}>
                  <span style={{ ...mono, fontSize: 11, color: "var(--muted)", letterSpacing: "0.08em" }}>{k}</span>
                  <span style={{ height: 8, background: "var(--bg-2)", borderRadius: 0, overflow: "hidden" }}>
                    <span style={{ display: "block", height: "100%", width: `${(v / 3) * 100}%`, background: "var(--accent)" }} />
                  </span>
                  <span style={{ ...mono, fontSize: 11, color: "var(--ink-2)", textAlign: "right" }}>{v}名</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 24, fontSize: 12, color: "var(--muted)", lineHeight: 1.8 }}>
              新人もベテランも、上下関係なく「あだ名」で呼び合うフランクな雰囲気。<br/>
              帰社後にも雑談したくて残るくらい、居心地のいい場所です。
            </div>
          </div>

          <div style={{ position: "relative", overflow: "hidden", border: "1px solid var(--line)", minHeight: 360 }}>
            <img src="./assets/driver-smile.jpg" alt="KUドライバー" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "saturate(0.9) contrast(1.05)" }} />
            <div style={{ position: "absolute", left: 16, bottom: 16, ...mono, fontSize: 10, color: "#fff", letterSpacing: "0.1em", padding: "6px 10px", background: "rgba(0,0,0,0.55)" }}>DRIVER / KU CREW — ON DUTY</div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          <div style={{ border: "1px solid var(--line)", padding: 28, background: "var(--paper)" }}>
            <div style={labelMono}>VOICE / DRIVER</div>
            <div style={{ ...anton, fontSize: 28, marginTop: 10, marginBottom: 14 }}>今村さん <span style={{ ...mono, fontSize: 11, color: "var(--muted)" }}>— 42歳 / 入社2年目</span></div>
            <p style={{ fontSize: 13, lineHeight: 2, color: "var(--ink-2)" }}>
              みんなからは「いまぽん」って呼ばれてます。<br/>
              40歳で前職から転職してきて、入ってみたらビックリ。仲間は上下関係なくフランクで、人間関係に悩むことがない。<br/>
              配車のサトさんは、無理のないスケジュールを組んでくれて、ドライバーが全員帰るまで責任もって待っててくれる。<br/>
              <span className="hl">ドライバーのこと、ちゃんと考えてくれてる会社</span>です。
            </p>
          </div>

          <div style={{ border: "1px solid var(--line)", padding: 28, background: "var(--paper)" }}>
            <div style={labelMono}>VOICE / DISPATCH</div>
            <div style={{ ...anton, fontSize: 28, marginTop: 10, marginBottom: 14 }}>サト部長 <span style={{ ...mono, fontSize: 11, color: "var(--muted)" }}>— 49歳 / ドライバー歴 29年</span></div>
            <p style={{ fontSize: 13, lineHeight: 2, color: "var(--ink-2)" }}>
              4人の子どもがいる、取締役部長です。<br/>
              子どもの頃に映画で見たトラックに憧れて、ずっとこの仕事ひとすじ。今も好きで、たまに現場ヘルプに出ます。<br/>
              28歳の息子もうちのドライバーで、トラック大好き。みんな <span className="hl">休みの日にまで車を磨きに来る</span> ような、車を愛してる人ばかりです。
            </p>
          </div>
        </div>
      </div>

      {/* ===== OPEN ROLES ===== */}
      <div style={sectionGap}>
        <div className="sec-id" style={{ marginBottom: 16 }}>§03 / OPEN ROLES</div>
        <h3 className="sec-title" style={{ marginBottom: 16, fontSize: "clamp(36px, 5vw, 72px)" }}>
          OPEN <span className="cy">ROLES.</span>
        </h3>
        <p style={{ fontSize: 13, lineHeight: 1.9, color: "var(--muted)", marginBottom: 40, maxWidth: 640 }}>
          現在 6つのポジションで募集中。経験者も未経験者も、車が好きな人なら歓迎します。
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, borderTop: "1px solid var(--line)", borderLeft: "1px solid var(--line)" }}>
          {roles.map((r, i) => (
            <div key={i} style={{
              padding: "30px 28px 32px",
              borderRight: "1px solid var(--line)",
              borderBottom: "1px solid var(--line)",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                <div style={{ ...mono, fontSize: 10, color: "var(--muted)", letterSpacing: "0.16em" }}>{r.code}</div>
                <div style={{ ...mono, fontSize: 9, padding: "4px 8px", background: "var(--accent)", color: "var(--accent-ink)", letterSpacing: "0.1em" }}>{r.tag}</div>
              </div>
              <div style={{ fontFamily: "Noto Sans JP, sans-serif", fontWeight: 700, fontSize: 20, lineHeight: 1.5, marginBottom: 18 }}>{r.title}</div>
              <div style={{ ...anton, fontSize: 36, lineHeight: 1, marginBottom: 6, color: "var(--ink)" }}>{r.salary}</div>
              <div style={{ ...mono, fontSize: 11, color: "var(--accent-2)", letterSpacing: "0.08em", marginBottom: 18 }}>{r.base}</div>
              <p style={{ fontSize: 13, lineHeight: 1.9, color: "var(--ink-2)", marginBottom: 20 }}>{r.summary}</p>
              <div style={{ borderTop: "1px solid var(--line-2)", paddingTop: 14 }}>
                <div style={{ ...mono, fontSize: 10, color: "var(--muted)", letterSpacing: "0.14em", marginBottom: 10 }}>REQUIREMENTS</div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 6 }}>
                  {r.need.map((n, j) => (
                    <li key={j} style={{ fontSize: 12, color: "var(--ink-2)", paddingLeft: 14, position: "relative", lineHeight: 1.7 }}>
                      <span style={{ position: "absolute", left: 0, color: "var(--accent-2)" }}>—</span>{n}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== A DAY ===== */}
      <div style={sectionGap}>
        <div className="sec-id" style={{ marginBottom: 16 }}>§04 / A DAY IN MOTION</div>
        <h3 className="sec-title" style={{ marginBottom: 48, fontSize: "clamp(36px, 5vw, 72px)" }}>
          A DAY <span className="cy">IN MOTION.</span>
        </h3>

        <div style={{ borderTop: "1px solid var(--line)" }}>
          {day.map((d, i) => (
            <div key={i} style={{
              display: "grid",
              gridTemplateColumns: "120px 1fr 2fr",
              gap: 24,
              padding: "22px 0",
              borderBottom: "1px solid var(--line-2)",
              alignItems: "baseline",
            }}>
              <div style={{ ...anton, fontSize: 32, color: "var(--accent-2)", letterSpacing: "0.02em" }}>{d.time}</div>
              <div style={{ fontFamily: "Noto Sans JP, sans-serif", fontWeight: 700, fontSize: 16 }}>{d.t}</div>
              <div style={{ fontSize: 13, lineHeight: 1.8, color: "var(--muted)" }}>{d.d}</div>
            </div>
          ))}
        </div>
        <div style={{ ...mono, fontSize: 11, color: "var(--muted)", marginTop: 20, letterSpacing: "0.06em" }}>
          ※ 5:00〜17:00の間で実働8時間 (休憩1時間)。運行により多少前後あります。
        </div>
      </div>

      {/* ===== COMPENSATION ===== */}
      <div style={sectionGap}>
        <div className="sec-id" style={{ marginBottom: 16 }}>§05 / COMPENSATION</div>
        <h3 className="sec-title" style={{ marginBottom: 48, fontSize: "clamp(36px, 5vw, 72px)" }}>
          COMP & <span className="cy">ALLOWANCES.</span>
        </h3>
        <p style={{ fontSize: 13, lineHeight: 1.9, color: "var(--muted)", marginBottom: 36, maxWidth: 720 }}>
          ベース給与に加えて、毎月積み上がる手当群。<br/>
          頑張る人に、正当に報いる仕組みです。
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, borderTop: "1px solid var(--line)", borderLeft: "1px solid var(--line)" }}>
          {allowances.map((a, i) => (
            <div key={i} style={{
              padding: "22px 20px",
              borderRight: "1px solid var(--line)",
              borderBottom: "1px solid var(--line)",
            }}>
              <div style={{ ...mono, fontSize: 10, color: "var(--muted)", letterSpacing: "0.12em", marginBottom: 12 }}>ALLOWANCE / {String(i + 1).padStart(2, "0")}</div>
              <div style={{ fontFamily: "Noto Sans JP, sans-serif", fontWeight: 700, fontSize: 14, marginBottom: 8 }}>{a.l}</div>
              <div style={{ ...anton, fontSize: 22, color: "var(--ink)", letterSpacing: "0.01em" }}>{a.v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== BENEFITS ===== */}
      <div style={sectionGap}>
        <div className="sec-id" style={{ marginBottom: 16 }}>§06 / BENEFITS</div>
        <h3 className="sec-title" style={{ marginBottom: 48, fontSize: "clamp(36px, 5vw, 72px)" }}>
          BENEFITS<span className="cy">.</span>
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
          {benefits.map((b, i) => (
            <div key={i} style={{
              padding: "18px 16px",
              border: "1px solid var(--line)",
              fontSize: 13,
              fontFamily: "Noto Sans JP, sans-serif",
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}>
              <span style={{ ...mono, fontSize: 10, color: "var(--accent-2)", letterSpacing: "0.1em" }}>{String(i + 1).padStart(2, "0")}</span>
              <span>{b}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ===== HOLIDAYS ===== */}
      <div style={sectionGap}>
        <div className="sec-id" style={{ marginBottom: 16 }}>§07 / HOLIDAYS</div>
        <h3 className="sec-title" style={{ marginBottom: 48, fontSize: "clamp(36px, 5vw, 72px)" }}>
          HOLIDAYS &<br/><span className="cy">LEAVE.</span>
        </h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {holidays.map((h, i) => (
            <span key={i} style={{
              padding: "10px 16px",
              border: "1px solid var(--line)",
              ...mono,
              fontSize: 11,
              letterSpacing: "0.08em",
              background: "var(--paper)",
            }}>{h}</span>
          ))}
        </div>
      </div>

      {/* ===== ACCESS ===== */}
      <div style={sectionGap}>
        <div className="sec-id" style={{ marginBottom: 16 }}>§08 / ACCESS</div>
        <h3 className="sec-title" style={{ marginBottom: 48, fontSize: "clamp(36px, 5vw, 72px)" }}>
          ACCESS<span className="cy">.</span>
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
          <div>
            <div style={labelMono}>HEAD OFFICE</div>
            <div style={{ fontSize: 16, lineHeight: 1.9, marginTop: 12, marginBottom: 24 }}>
              〒341-0058<br/>
              <span style={{ ...anton, fontSize: 28 }}>SAITAMA / MISATO.</span><br/>
              埼玉県三郷市彦江 1-213-3
            </div>
            <div style={labelMono}>HOURS</div>
            <div style={{ fontSize: 14, marginTop: 8 }}>8:00 – 17:00 / 日曜定休</div>
          </div>
          <div style={{ background: "var(--paper)", border: "1px solid var(--line)", padding: 28 }}>
            <div style={labelMono}>NEAREST STATIONS</div>
            <div style={{ marginTop: 16, display: "grid", gap: 14 }}>
              {[["三郷中央駅", "車 10 分"], ["八潮駅", "車 13 分"], ["新三郷駅", "車 14 分"]].map(([k, v], i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px dashed var(--line-2)", paddingBottom: 10 }}>
                  <span style={{ fontFamily: "Noto Sans JP, sans-serif", fontSize: 14, fontWeight: 700 }}>{k}</span>
                  <span style={{ ...mono, fontSize: 12, color: "var(--accent-2)", letterSpacing: "0.08em" }}>{v}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 18, ...mono, fontSize: 11, color: "var(--muted)", letterSpacing: "0.06em" }}>
              ※ 車・バイク通勤OK / 駐車場完備
            </div>
          </div>
        </div>
      </div>

      {/* ===== APPLY ===== */}
      <div style={{ ...sectionGap, marginBottom: 0 }}>
        <div className="sec-id" style={{ marginBottom: 16 }}>§09 / APPLY</div>
        <h3 className="sec-title" style={{ marginBottom: 28, fontSize: "clamp(48px, 7vw, 100px)" }}>
          JOIN <span className="cy">KU.</span>
        </h3>
        <p style={{ fontSize: 14, lineHeight: 2, color: "var(--ink-2)", marginBottom: 40, maxWidth: 640 }}>
          まずは話を聞きに来てください。<br/>
          履歴書の有無は不問。電話・メールどちらでも気軽にどうぞ。
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, marginBottom: 32, borderTop: "1px solid var(--line)" }}>
          {[
            { n: "STEP 01", t: "応募", d: "電話 or メールで連絡。氏名・連絡先のみでOK。" },
            { n: "STEP 02", t: "面談", d: "ざっくばらんに、お互いを知る場。30分〜1時間程度。" },
            { n: "STEP 03", t: "入社", d: "先輩同乗の研修からスタート。寮・社宅も準備可能。" },
          ].map((s, i) => (
            <div key={i} style={{ padding: "24px 22px", borderRight: i < 2 ? "1px solid var(--line)" : "none", borderBottom: "1px solid var(--line)" }}>
              <div style={{ ...mono, fontSize: 10, color: "var(--accent-2)", letterSpacing: "0.16em", marginBottom: 12 }}>{s.n}</div>
              <div style={{ fontFamily: "Noto Sans JP, sans-serif", fontWeight: 700, fontSize: 18, marginBottom: 10 }}>{s.t}</div>
              <div style={{ fontSize: 13, lineHeight: 1.9, color: "var(--muted)" }}>{s.d}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <a href="tel:048-952-2288" style={{ display: "block", padding: "26px 28px", background: "var(--ink)", color: "var(--bg)", textDecoration: "none" }}>
            <div style={{ ...mono, fontSize: 10, letterSpacing: "0.16em", color: "var(--accent-2)", marginBottom: 10 }}>CALL — 24/7</div>
            <div style={{ ...anton, fontSize: 36, letterSpacing: "0.02em" }}>048-952-2288</div>
            <div style={{ ...mono, fontSize: 11, color: "rgba(255,255,255,0.6)", marginTop: 8, letterSpacing: "0.06em" }}>担当: サト / 採用</div>
          </a>
          <a href="mailto:rsato@ku-transport.jp" style={{ display: "block", padding: "26px 28px", background: "var(--accent)", color: "var(--accent-ink)", textDecoration: "none" }}>
            <div style={{ ...mono, fontSize: 10, letterSpacing: "0.16em", marginBottom: 10 }}>EMAIL</div>
            <div style={{ ...anton, fontSize: 30, letterSpacing: "0.01em", wordBreak: "break-all" }}>rsato@ku-transport.jp</div>
            <div style={{ ...mono, fontSize: 11, marginTop: 8, letterSpacing: "0.06em" }}>履歴書不要 / 24時間受付</div>
          </a>
        </div>
      </div>
    </div>
  );
};

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
      body: <RecruitBody />,
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

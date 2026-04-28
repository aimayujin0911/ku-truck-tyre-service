// Services section — infographic-centric
const Services = () => {
  return (
    <section id="services" className="svc">
      <div className="sec-head">
        <div className="sec-id">§02 / SERVICES</div>
        <h2 className="sec-title reveal">事業紹介 <span className="cy">— WORK.</span></h2>
        <div className="sec-sub">運送事業に加え、トラックのプロだからできる 4 つの専門サービス。</div>
      </div>

      {/* Service overview grid */}
      <div className="svc-grid">
        <a className="svc-tile reveal" href="#svc-transport">
          <div className="svc-num">01</div>
          <div className="svc-en">TRANSPORT</div>
          <div className="svc-jp">運送・倉庫業</div>
          <div className="svc-tag">TV・舞台・コンサート機材輸送</div>
        </a>
        <a className="svc-tile reveal" href="#svc-dpf">
          <div className="svc-num">02</div>
          <div className="svc-en">DPF<br/>CLEANING</div>
          <div className="svc-jp">DPF洗浄出張訪問</div>
          <div className="svc-tag">分解不要 / 約2時間 / 出張対応</div>
        </a>
        <a className="svc-tile reveal" href="#svc-injector">
          <div className="svc-num">03</div>
          <div className="svc-en">INJECTOR<br/>CLEAN</div>
          <div className="svc-jp">インジェクター洗浄</div>
          <div className="svc-tag">燃料ライン整備 / コスト削減</div>
        </a>
        <a className="svc-tile reveal" href="#svc-adblue">
          <div className="svc-num">04</div>
          <div className="svc-en">ADBLUE®</div>
          <div className="svc-jp">高品位尿素水販売</div>
          <div className="svc-tag">メーカー直契約 / 中間マージンカット</div>
        </a>
        <a className="svc-tile reveal" href="#svc-tyre">
          <div className="svc-num">05</div>
          <div className="svc-en">TYRE</div>
          <div className="svc-jp">輸入タイヤ販売</div>
          <div className="svc-tag">WINDPOWER / CHAOYANG 正規</div>
        </a>
      </div>

      {/* ============ TRANSPORT ============ */}
      <div id="svc-transport" className="svc-block svc-theme-transport" data-svc="01">
        <div className="svc-banner">
          <div className="svc-banner-photo">
            <img src="./assets/svc-transport.jpeg" alt="KU 10t ウィング車" />
          </div>
          <div className="svc-banner-meta">
            <div className="svc-banner-tape">SERVICE 01 / 05</div>
            <div className="svc-banner-en">TRANSPORT</div>
            <div className="svc-banner-jp">運送・倉庫事業</div>
            <div className="svc-banner-tag">TV · 舞台 · コンサート機材輸送</div>
          </div>
        </div>

        <div className="svc-block-head">
          <div className="svc-block-num">01 / TRANSPORT</div>
          <h3 className="svc-block-title">
            <span className="cy">運送</span>・<span className="cy">倉庫</span><br/>事業。
          </h3>
          <p className="svc-block-lead">
            テレビ・舞台・コンサート機材輸送を主軸に、一般貨物から倉庫・保管までワンストップ。<br/>
            深夜搬入、ギリギリのスケジュール、現場都合の急な変更 — 「間に合わせる」を、40年以上。
          </p>
        </div>

        {/* Hero — fleet photo + stats overlay */}
        <div className="info-trhero">
          <div className="trhero-photo">
            <img src="./assets/fleet-line.jpg" alt="KU 車両群 整列" />
            <div className="trhero-tape">FLEET / SAITAMA DEPOT — 2025</div>
          </div>
          <div className="trhero-stats">
            <div className="trhero-row">
              <b className="trhero-n">30+</b>
              <span className="trhero-l">FLEET<br/>VEHICLES</span>
            </div>
            <div className="trhero-row">
              <b className="trhero-n">44</b>
              <span className="trhero-l">YEARS<br/>ON THE ROAD</span>
            </div>
            <div className="trhero-row">
              <b className="trhero-n">24/7</b>
              <span className="trhero-l">ON-CALL<br/>OPERATION</span>
            </div>
            <div className="trhero-row">
              <b className="trhero-n">全国</b>
              <span className="trhero-l">COVERAGE<br/>AREA</span>
            </div>
          </div>
        </div>

        {/* 3 core services */}
        <div className="info-trcore">
          <div className="info-label">3つの事業領域 — CORE SERVICES</div>
          <div className="trcore-row">
            <div className="trcore">
              <div className="trcore-n">01</div>
              <div className="trcore-en">STAGE<br/>TRANSPORT</div>
              <div className="trcore-jp">イベント・舞台機材輸送</div>
              <p>テレビ収録、ライブ、コンサートツアー、展示会。デリケートな機材を、時間通りに、キズひとつなく。</p>
              <ul>
                <li>TV局 / 制作会社 対応</li>
                <li>ツアー帯同・長距離</li>
                <li>夜間搬入・早朝搬出</li>
              </ul>
            </div>
            <div className="trcore">
              <div className="trcore-n">02</div>
              <div className="trcore-en">GENERAL<br/>HAULING</div>
              <div className="trcore-jp">一般貨物自動車運送</div>
              <p>関東近郊〜全国まで、柔軟に対応。長年の現場経験が、定型外の依頼にこそ活きる。</p>
              <ul>
                <li>スポット・定期便</li>
                <li>チャーター便</li>
                <li>緊急配送</li>
              </ul>
            </div>
            <div className="trcore">
              <div className="trcore-n">03</div>
              <div className="trcore-en">WARE-<br/>HOUSE</div>
              <div className="trcore-jp">倉庫業・保管</div>
              <p>現場と現場のあいだ、機材を預かる。搬出入の効率化までワンストップで。</p>
              <ul>
                <li>機材・資材保管</li>
                <li>搬出入オペレーション</li>
                <li>短期・長期 柔軟対応</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Fleet mix diagram */}
        <div className="info-trfleet">
          <div className="info-label">車両構成 — FLEET COMPOSITION</div>
          <div className="trfleet-row">
            {[
              { code: "VH-01", t: "10T WING", s: "大型ステージリグ", w: 30 },
              { code: "VH-02", t: "4T BOX", s: "TV / スタジオ機材", w: 35 },
              { code: "VH-03", t: "4T ALUMI", s: "精密機材 / 美術", w: 20 },
              { code: "VH-04", t: "2T / 小型", s: "ピンポイント配送", w: 15 },
            ].map((v, i) => (
              <div key={i} className="trfleet">
                <div className="trfleet-code">{v.code}</div>
                <div className="trfleet-t">{v.t}</div>
                <div className="trfleet-s">{v.s}</div>
                <div className="trfleet-bar"><div style={{ width: `${v.w * 2.2}%` }} /></div>
                <div className="trfleet-w">{v.w}%</div>
              </div>
            ))}
          </div>
          <div className="trfleet-note">※ 構成比は稼働ベースの目安。現場需要に応じて随時最適化。</div>
        </div>

        {/* Flow */}
        <div className="info-tyre-flow">
          <div className="info-label">依頼フロー — FROM CALL TO DELIVERY</div>
          <div className="flow-row">
            {["お問い合わせ", "現場ヒアリング", "車両・人員手配", "搬出入・輸送", "納品・アフター"].map((s, i, arr) => (
              <React.Fragment key={i}>
                <div className="flow-step">
                  <div className="flow-n">0{i + 1}</div>
                  <div className="flow-t">{s}</div>
                </div>
                {i < arr.length - 1 && <div className="flow-arr">→</div>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* ============ DPF CLEANING ============ */}
      <div id="svc-dpf" className="svc-block svc-theme-dpf" data-svc="02">
        <div className="svc-banner">
          <div className="svc-banner-photo">
            <img src="./assets/svc-dpf.jpeg?v=2" alt="DPF 洗浄装置" />
          </div>
          <div className="svc-banner-meta">
            <div className="svc-banner-tape">SERVICE 02 / 05</div>
            <div className="svc-banner-en">DPF CLEAN</div>
            <div className="svc-banner-jp">DPF洗浄 出張訪問</div>
            <div className="svc-banner-tag">分解不要 · 約2時間 · 出張対応</div>
          </div>
        </div>

        <div className="svc-block-head">
          <div className="svc-block-num">02 / DPF CLEANING</div>
          <h3 className="svc-block-title">
            <span className="cy">DPF</span>洗浄<br/>出張訪問。
          </h3>
          <p className="svc-block-lead">
            分解不要・車載のままDPFを強力洗浄。<br/>
            作業時間 約2時間、定期メンテでDPFの寿命を延長。インジェクター洗浄との同時作業も可能。
          </p>
        </div>

        {/* Symptoms infographic */}
        <div className="info-symptoms">
          <div className="info-label">こんな症状はありませんか？ — DPF SOS</div>
          <div className="sym-row">
            {[
              { t: "燃費悪化", d: "mileage drop" },
              { t: "パワー不足", d: "low power" },
              { t: "強制燃焼が多い", d: "regen loop" },
              { t: "黒煙・白煙", d: "smoke" },
              { t: "エンジン不調", d: "misfire" },
            ].map((s, i) => (
              <div key={i} className="sym">
                <div className="sym-n">{String(i + 1).padStart(2, "0")}</div>
                <div className="sym-t">{s.t}</div>
                <div className="sym-d">{s.d}</div>
              </div>
            ))}
          </div>
          <div className="sym-arrow">
            <span>FROM SYMPTOMS</span>
            <span className="bar" />
            <span className="cy">→ KU DPF CLEAN</span>
          </div>
        </div>

        {/* Process */}
        <div className="info-process">
          <div className="info-label">プロセス — 約120分</div>
          <div className="proc-row">
            {[
              { t: "点検・診断", d: "マフラー温度低下確認", m: "15 min" },
              { t: "車載洗浄", d: "分解せず強力洗浄", m: "60 min" },
              { t: "すすぎ・乾燥", d: "残留物排出", m: "30 min" },
              { t: "再始動テスト", d: "効果チェック", m: "15 min" },
            ].map((p, i) => (
              <div key={i} className="proc">
                <div className="proc-n">STEP {String(i + 1).padStart(2, "0")}</div>
                <div className="proc-t">{p.t}</div>
                <div className="proc-d">{p.d}</div>
                <div className="proc-m">{p.m}</div>
                {i < 3 && <div className="proc-arr">→</div>}
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="info-price">
          <div className="info-label">料金表 — 出張料込み / 税抜</div>
          <table className="price-tbl">
            <thead>
              <tr>
                <th>CLASS</th>
                <th>車両区分</th>
                <th>通常コース</th>
                <th>パワフルコース<small>マフラー詰まりが酷い時</small></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="mono">S</td>
                <td>2t・3t・ハイエース</td>
                <td className="price">¥35,000</td>
                <td className="price cy">¥40,000</td>
              </tr>
              <tr>
                <td className="mono">M</td>
                <td>4t 〜 8t</td>
                <td className="price">¥45,000</td>
                <td className="price cy">¥50,000</td>
              </tr>
              <tr>
                <td className="mono">L</td>
                <td>大型</td>
                <td className="price">¥55,000</td>
                <td className="price cy">¥60,000</td>
              </tr>
            </tbody>
          </table>
          <div className="price-note">
            <span className="cy">CAMPAIGN</span> インジェクター洗浄 同時作業で <b>出張料無料 + 10% OFF</b>
          </div>
        </div>
      </div>

      {/* ============ INJECTOR ============ */}
      <div id="svc-injector" className="svc-block svc-theme-injector" data-svc="03">
        <div className="svc-banner">
          <div className="svc-banner-photo">
            <img src="./assets/svc-injector.jpeg" alt="KU トラック 2台" />
          </div>
          <div className="svc-banner-meta">
            <div className="svc-banner-tape">SERVICE 03 / 05</div>
            <div className="svc-banner-en">INJECTOR</div>
            <div className="svc-banner-jp">インジェクター洗浄</div>
            <div className="svc-banner-tag">燃料ライン整備 · コスト削減</div>
          </div>
        </div>

        <div className="svc-block-head">
          <div className="svc-block-num">03 / INJECTOR CLEAN</div>
          <h3 className="svc-block-title">
            <span className="cy">インジェクター</span><br/>洗浄サービス。
          </h3>
          <p className="svc-block-lead">
            燃料ラインを外して徹底洗浄。ケミカル剤・インテーク吸引式とはレベルが違います。<br/>
            整備コストを大幅に削減し、エンジン本来の性能を取り戻す。
          </p>
        </div>

        {/* Before / After infographic */}
        <div className="info-ba">
          <div className="info-label">BEFORE / AFTER — 噴射量と燃焼効率</div>
          <div className="ba-grid">
            <div className="ba-col ba-before">
              <div className="ba-head">BEFORE</div>
              <div className="ba-bars">
                <div className="ba-bar"><span>気筒 #1</span><div className="bar"><div style={{ width: "32%" }} /></div><b>-3.25</b></div>
                <div className="ba-bar"><span>気筒 #2</span><div className="bar"><div style={{ width: "28%" }} /></div><b>-3.09</b></div>
                <div className="ba-bar"><span>気筒 #3</span><div className="bar"><div style={{ width: "25%" }} /></div><b>-2.00</b></div>
                <div className="ba-bar"><span>気筒 #4</span><div className="bar"><div style={{ width: "88%", background: "var(--accent-2)" }} /></div><b>+8.79</b></div>
              </div>
              <div className="ba-note">気筒間のバラつきが大きく、燃焼効率が低下。</div>
            </div>
            <div className="ba-col ba-after">
              <div className="ba-head cy">AFTER</div>
              <div className="ba-bars">
                <div className="ba-bar"><span>気筒 #1</span><div className="bar"><div style={{ width: "24%", background: "var(--accent)" }} /></div><b>-2.47</b></div>
                <div className="ba-bar"><span>気筒 #2</span><div className="bar"><div style={{ width: "4%", background: "var(--accent)" }} /></div><b>+0.43</b></div>
                <div className="ba-bar"><span>気筒 #3</span><div className="bar"><div style={{ width: "3%", background: "var(--accent)" }} /></div><b>+0.27</b></div>
                <div className="ba-bar"><span>気筒 #4</span><div className="bar"><div style={{ width: "16%", background: "var(--accent)" }} /></div><b>-1.84</b></div>
              </div>
              <div className="ba-note">噴射量が均一化、燃焼効率が回復。</div>
            </div>
          </div>
        </div>

        {/* 4-way clean */}
        <div className="info-fourway">
          <div className="info-label">4つの洗浄ポイント</div>
          <div className="fw-row">
            {[
              { t: "サブオイディング・コモンレール洗浄", d: "COMMON RAIL" },
              { t: "インジェクター洗浄", d: "INJECTOR" },
              { t: "燃焼室洗浄", d: "COMBUSTION" },
              { t: "ピストンバルブ洗浄", d: "PISTON VALVE" },
            ].map((f, i) => (
              <div key={i} className="fw">
                <div className="fw-n">0{i + 1}</div>
                <div className="fw-d">{f.d}</div>
                <div className="fw-t">{f.t}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing simple */}
        <div className="info-price">
          <div className="info-label">料金 — 2台以上同時依頼で出張料無料</div>
          <div className="price-row3">
            <div className="pcard"><div className="cls">2t</div><div className="amt">¥27,500</div><div className="nt">税込</div></div>
            <div className="pcard"><div className="cls">4t</div><div className="amt">¥33,000</div><div className="nt">税込</div></div>
            <div className="pcard"><div className="cls">大型</div><div className="amt">¥38,500</div><div className="nt">出張料 3,500円 別途</div></div>
          </div>
        </div>
      </div>

      {/* ============ ADBLUE ============ */}
      <div id="svc-adblue" className="svc-block svc-theme-adblue" data-svc="04">
        <div className="svc-banner">
          <div className="svc-banner-photo">
            <img src="./assets/svc-adblue.jpeg" alt="KU ロゴ トレーラー" />
          </div>
          <div className="svc-banner-meta">
            <div className="svc-banner-tape">SERVICE 04 / 05</div>
            <div className="svc-banner-en">ADBLUE®</div>
            <div className="svc-banner-jp">高品位尿素水 販売</div>
            <div className="svc-banner-tag">メーカー直契約 · 中間マージンカット</div>
          </div>
        </div>

        <div className="svc-block-head">
          <div className="svc-block-num">04 / ADBLUE®</div>
          <h3 className="svc-block-title">
            <span className="cy">AdBlue®</span><br/>直契約 販売。
          </h3>
          <p className="svc-block-lead">
            排出ガス浄化技術として排ガス脱硝剤尿素水AdBlue® を、メーカー直契約で中間マージンカット。<br/>
            独自ルートで、高品位尿素水をメリットある価格で。
          </p>
        </div>

        {/* Distribution diagram */}
        <div className="info-dist">
          <div className="info-label">流通ルート比較 — 中間マージンをカット</div>

          <div className="dist-row dist-before">
            <div className="dist-lbl">従来ルート</div>
            <div className="dist-pipe">
              {["製造メーカー", "大手商社", "ガソリンスタンド", "配送会社", "エンドユーザー"].map((n, i, arr) => (
                <React.Fragment key={i}>
                  <div className="node">{n}</div>
                  {i < arr.length - 1 && <div className="link">▶</div>}
                </React.Fragment>
              ))}
            </div>
            <div className="dist-note">複数業者で中間マージン発生</div>
          </div>

          <div className="dist-row dist-after">
            <div className="dist-lbl cy">KU直ルート</div>
            <div className="dist-pipe">
              <div className="node">製造メーカー</div>
              <div className="link big">▶▶▶</div>
              <div className="node node-ku">KU</div>
              <div className="link big">▶▶▶</div>
              <div className="node">エンドユーザー</div>
            </div>
            <div className="dist-note cy">中間マージン 大幅カット</div>
          </div>
        </div>

        {/* Packages + lending */}
        <div className="info-pkg">
          <div className="info-label">無償貸出品 — 導入サポート</div>
          <div className="pkg-grid">
            {[
              { t: "IBCタンク", s: "1,000L" },
              { t: "遮光カバー", s: "対候性" },
              { t: "自重落下式ホース", s: "コック付" },
              { t: "天鉄キャップ", s: "密閉保管" },
            ].map((p, i) => (
              <div key={i} className="pkg">
                <div className="pkg-n">0{i + 1}</div>
                <div className="pkg-t">{p.t}</div>
                <div className="pkg-s">{p.s}</div>
              </div>
            ))}
          </div>
          <div className="pkg-note">保管推奨温度 10〜35°C / 保管期間は温度により 04〜36ヶ月</div>
        </div>
      </div>

      {/* ============ TYRE ============ */}
      <div id="svc-tyre" className="svc-block svc-theme-tyre" data-svc="05">
        <div className="svc-banner">
          <div className="svc-banner-photo">
            <img src="./assets/svc-tyre.jpeg" alt="KU 大型トラック 正面" />
          </div>
          <div className="svc-banner-meta">
            <div className="svc-banner-tape">SERVICE 05 / 05</div>
            <div className="svc-banner-en">TYRE</div>
            <div className="svc-banner-jp">輸入タイヤ 正規販売</div>
            <div className="svc-banner-tag">WINDPOWER® · CHAOYANG® 正規取扱</div>
          </div>
        </div>

        <div className="svc-block-head">
          <div className="svc-block-num">05 / TYRE</div>
          <h3 className="svc-block-title">
            輸入<span className="cy">タイヤ</span><br/>正規販売。
          </h3>
          <p className="svc-block-lead">
            WINDPOWER® / CHAOYANG® 正規取扱店。<br/>
            トラックを知り尽くしたKUだから、用途に最適な一本を。出張交換サービスも対応。
          </p>
        </div>

        <div className="info-brands">
          <div className="brand brand-wp">
            <div className="brand-tape">KU × WP — OFFICIAL PARTNER / SINCE 2015</div>
            <div className="brand-hero">
              <div className="brand-mark brand-mark-wp">
                <svg viewBox="0 0 120 120" width="100%" height="100%" aria-hidden="true">
                  <rect x="0" y="0" width="120" height="120" fill="#C8102E"/>
                  <path d="M12 36 L28 88 L44 48 L60 88 L76 36" stroke="#fff" strokeWidth="6" fill="none" strokeLinecap="square" strokeLinejoin="miter"/>
                  <path d="M80 36 L80 88 M80 36 L100 36 Q110 36 110 48 Q110 60 100 60 L80 60" stroke="#fff" strokeWidth="6" fill="none" strokeLinecap="square" strokeLinejoin="miter"/>
                </svg>
                <span className="brand-mark-label">WINDPOWER</span>
              </div>
              <div className="brand-id">
                <div className="brand-kicker">PREMIUM LINE</div>
                <div className="brand-name">WINDPOWER<sup>®</sup></div>
                <div className="brand-jp">ウィンドパワー</div>
              </div>
              <div className="brand-badge">
                <span>500+</span>
                <small>SKUs</small>
              </div>
            </div>
            <p className="brand-pitch">
              <b>Tough &apos;n Durable, Ever.</b><br/>
              商用車・トラック用途に強い。長距離輸送 / ハードユースに最適なラインナップ。
            </p>
            <div className="brand-kv brand-kv-wp">
              <div>
                <span className="kv-n">#1</span>
                <span className="kv-l">WINTER<br/>GRIP</span>
              </div>
              <div>
                <span className="kv-n">150</span>
                <span className="kv-l">COUNTRIES<br/>&amp; REGIONS</span>
              </div>
              <div>
                <span className="kv-n">5M</span>
                <span className="kv-l">UNITS<br/>ANNUAL</span>
              </div>
            </div>
            <div className="brand-specs">
              <div><b>ORIGIN</b><span>CHINA</span></div>
              <div><b>USE</b><span>TRUCK / BUS</span></div>
              <div><b>BEST</b><span>LONG-HAUL</span></div>
            </div>
            <a href="./windpower.html" className="brand-cta">VIEW LP →</a>
          </div>

          <div className="brand brand-cy">
            <div className="brand-tape">KU × CY — COST-DOWN PARTNER / SINCE 2018</div>
            <div className="brand-hero">
              <div className="brand-mark brand-mark-cy">
                <svg viewBox="0 0 120 120" width="100%" height="100%" aria-hidden="true">
                  <rect x="0" y="0" width="120" height="120" fill="#0A0F14"/>
                  <circle cx="60" cy="56" r="22" fill="#FF6A00"/>
                  <path d="M20 82 Q40 72 60 82 T100 82" stroke="#FF6A00" strokeWidth="4" fill="none" strokeLinecap="round"/>
                  <path d="M20 92 Q40 82 60 92 T100 92" stroke="#FF6A00" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6"/>
                </svg>
                <span className="brand-mark-label">CHAOYANG</span>
              </div>
              <div className="brand-id">
                <div className="brand-kicker">VALUE LINE</div>
                <div className="brand-name">CHAOYANG<sup>®</sup></div>
                <div className="brand-jp">チャオヤン</div>
              </div>
              <div className="brand-badge">
                <span>14</span>
                <small>MODELS</small>
              </div>
            </div>
            <p className="brand-pitch">
              <b>Cost Down, Value Up.</b><br/>
              豊富なサイズ展開。トラック・バス・建機まで用途別に最適化。中国タイヤ売上 <em>#1</em>。
            </p>
            <div className="brand-kv brand-kv-cy">
              <div>
                <span className="kv-n">#1</span>
                <span className="kv-l">CHINA<br/>BRAND</span>
              </div>
              <div>
                <span className="kv-n">TOP10</span>
                <span className="kv-l">GLOBAL<br/>2020</span>
              </div>
              <div>
                <span className="kv-n">160+</span>
                <span className="kv-l">COUNTRIES<br/>&amp; REGIONS</span>
              </div>
            </div>
            <div className="brand-specs">
              <div><b>ORIGIN</b><span>CHINA</span></div>
              <div><b>USE</b><span>TRUCK / HEAVY</span></div>
              <div><b>BEST</b><span>COST-PERF</span></div>
            </div>
            <a href="./chaoyang.html" className="brand-cta">VIEW LP →</a>
          </div>
        </div>

        <div className="info-tyre-flow">
          <div className="info-label">サービスフロー</div>
          <div className="flow-row">
            {["お問い合わせ", "用途ヒアリング", "サイズ・銘柄提案", "出張交換 / 納品", "アフターフォロー"].map((s, i, arr) => (
              <React.Fragment key={i}>
                <div className="flow-step">
                  <div className="flow-n">0{i + 1}</div>
                  <div className="flow-t">{s}</div>
                </div>
                {i < arr.length - 1 && <div className="flow-arr">→</div>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

window.Services = Services;

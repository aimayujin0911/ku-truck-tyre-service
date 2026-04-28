const About = () => (
  <section id="about">
    <div className="sec-head">
      <div className="sec-id">§01 / ABOUT</div>
      <h2 className="sec-title reveal">会社案内 <span className="cy">— KU.</span></h2>
      <div className="sec-sub">1981年、埼玉・三郷の小さな車庫から。44年間、現場を動かす物流を磨いてきました。</div>
    </div>

    <div className="about">
      <div>
        <h3 className="about-title reveal">
          現場の熱量を、<br/>
          <span className="hl">止めない物流</span>を。<br/>
          スピードと柔軟性が、KUのDNA。
        </h3>
        <p className="about-body reveal">
          株式会社KU・TRUCK&TYRE・SERVICEは、1981年創業の運送会社。<br/>
          テレビ関連やイベント・舞台などの資材運搬を主軸に、一般貨物輸送・倉庫業まで手がけています。<br/><br/>
          深夜の搬入、ギリギリのスケジュール、天候の変化 — 現場に「間に合う」ために、ドライバー、車両、オペレーションが一体となって動く。それがKUのやり方です。
        </p>
        <div className="about-stats reveal">
          <div className="s"><div className="n">1981</div><div className="l">FOUNDED<br/>SAITAMA JP</div></div>
          <div className="s"><div className="n">44</div><div className="l">YEARS<br/>ON THE ROAD</div></div>
          <div className="s"><div className="n">30+</div><div className="l">FLEET<br/>VEHICLES</div></div>
        </div>
      </div>

      <div className="about-photo reveal">
        <img src="./assets/truck-logo.jpeg" alt="KU Truck & Tyre Service logo on truck body" />
        <div className="caption">KU LIVERY // SAITAMA / 2025</div>
      </div>
    </div>
  </section>
);

const Business = () => (
  <section id="business">
    <div className="sec-head">
      <div className="sec-id">§02 / BUSINESS</div>
      <h2 className="sec-title reveal">事業紹介 <span className="cy">— WORK.</span></h2>
      <div className="sec-sub">イベント機材輸送を中心に、現場主義の3つのサービス。</div>
    </div>

    <div className="biz">
      <div className="biz-card reveal">
        <span className="tag" />
        <div className="n">01 / EVENT LOGISTICS</div>
        <div className="t">STAGE<br/>TRANSPORT</div>
        <div className="jp-t">イベント・舞台機材輸送</div>
        <div className="desc">
          テレビ収録、ライブ、コンサートツアー、展示会。<br/>
          デリケートな機材を、時間通りに、キズひとつなく。
        </div>
        <div className="arr">→</div>
      </div>

      <div className="biz-card reveal">
        <span className="tag" />
        <div className="n">02 / GENERAL CARGO</div>
        <div className="t">GENERAL<br/>HAULING</div>
        <div className="jp-t">一般貨物自動車運送</div>
        <div className="desc">
          関東近郊〜全国まで、柔軟に対応。<br/>
          長年の現場経験が、定型外の依頼にこそ活きる。
        </div>
        <div className="arr">→</div>
      </div>

      <div className="biz-card reveal">
        <span className="tag" />
        <div className="n">03 / WAREHOUSING</div>
        <div className="t">WARE-<br/>HOUSE</div>
        <div className="jp-t">倉庫業・保管</div>
        <div className="desc">
          現場と現場のあいだ、機材を預かる。<br/>
          搬出入の効率化までワンストップで。
        </div>
        <div className="arr">→</div>
      </div>
    </div>
  </section>
);

const Vehicle = () => (
  <section id="vehicle">
    <div className="sec-head">
      <div className="sec-id">§03 / VEHICLE</div>
      <h2 className="sec-title reveal">車両紹介 <span className="cy">— FLEET.</span></h2>
      <div className="sec-sub">用途別に最適化された30台超の車両群。現場に合わせて、ぴったり出す。</div>
    </div>

    <div className="vh">
      <div className="vh-track">
        {[
          { code: "VH-01", name: "10T WING", sub: "Large stage rig", img: "./assets/truck-01-wing.jpeg" },
          { code: "VH-02", name: "4T BOX", sub: "TV / studio", img: "./assets/truck-02-box.jpeg" },
          { code: "VH-03", name: "4T ALUMI", sub: "Precision cargo", img: "./assets/truck-03-alumi.jpeg" },
          { code: "VH-04", name: "FLEET", sub: "Tour-ready", img: "./assets/truck-04-pair.jpeg" },
        ].map((v, i) => (
          <a key={i} href="./vehicle.html" className="vh-card reveal" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
            <div className="photo" style={{ backgroundImage: `url(${v.img})` }} />
            <div className="meta">
              <span>{v.code}</span>
              <span>JP / SAITAMA</span>
            </div>
            <div className="name">
              <div className="t">{v.name}</div>
              <div className="s">{v.sub}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const Recruit = () => (
  <section id="recruit">
    <div className="sec-head">
      <div className="sec-id">§04 / RECRUIT</div>
      <h2 className="sec-title reveal">求人案内 <span className="cy">— JOIN.</span></h2>
      <div className="sec-sub">現場が好きな人、運転が好きな人、音楽とモノ作りに関わりたい人 — 探しています。</div>
    </div>

    <div className="rct">
      <div className="rct-left">
        <div className="eye">NOW HIRING — DRIVERS</div>
        <h3>DRIVE<br/>THE <span>SCENE.</span></h3>
        <div className="jp-h">ドライバー募集中。</div>
        <p>
          ツアー現場の熱も、テレビ局の緊張感も、KUのドライバーはぜんぶ見てきた。<br/>
          未経験からでも、丁寧に教えます。まず話を聞きに来てください。
        </p>
        <a className="cta" href="./recruit.html" style={{ textDecoration: "none" }}>ENTRY →</a>
      </div>

      <div className="rct-photo reveal">
        <img src="./assets/driver-smile.jpg" alt="KUドライバー 笑顔でトラックから" />
        <div className="tag">DRIVER / KU CREW — ON DUTY</div>
      </div>

      <div className="rct-right">
        <h4>OPEN ROLES</h4>
        <div className="rct-row"><b>ROLE</b><span>イベント機材輸送ドライバー (中型・大型)</span></div>
        <div className="rct-row"><b>TYPE</b><span>正社員 / アルバイト</span></div>
        <div className="rct-row"><b>LOCATION</b><span>埼玉県三郷市 彦江 1-213-3</span></div>
        <div className="rct-row"><b>HOURS</b><span>8:00 – 17:00 ベース / 現場により変動</span></div>
        <div className="rct-row"><b>OFF</b><span>日曜定休 / 隔週土曜</span></div>
        <div className="rct-row"><b>SALARY</b><span>経験・資格により優遇</span></div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="contact">
    <h2 className="big reveal">MOVE<br/><em>FORWARD.</em></h2>
    <div className="contact-grid">
      <div>
        <h5>HEAD OFFICE</h5>
        <p>〒341-0058<br/>埼玉県三郷市彦江1-213-3</p>
      </div>
      <div>
        <h5>CALL</h5>
        <p><a href="tel:048-952-2288">048-952-2288</a><br/>8:00 – 17:00 / 日曜定休</p>
      </div>
      <div>
        <h5>INQUIRY</h5>
        <p><a href="#">お問い合わせフォーム →</a><br/>24時間受付</p>
      </div>
      <div>
        <h5>FOLLOW</h5>
        <p><a href="#">Facebook</a><br/><a href="#">Instagram</a></p>
      </div>
    </div>
    <div className="contact-bottom">
      <span>© 2026 株式会社 KU・TRUCK&TYRE・SERVICE</span>
      <span>EST.1981 / SAITAMA JP</span>
    </div>
  </section>
);

Object.assign(window, { About, Business, Vehicle, Recruit, Contact });

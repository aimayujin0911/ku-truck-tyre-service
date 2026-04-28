const Hero = () => {
  return (
    <section className="hero" id="top">
      <div className="hero-stage">
        <img
          className="hero-photo"
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2000&q=80"
          alt="Truck on night road"
        />
        <div className="hero-plate" />
        <div className="hero-light" />
      </div>

      <div className="hero-headline">
        <div className="hero-eyebrow">
          <span className="dot" />
          <span>KU — TRUCK &amp; TYRE SERVICE / EST. 1981</span>
        </div>
        <h1 className="hero-title">
          DELIVER<br/>
          <span className="thin">THE STAGE</span><br/>
          <span className="cyan">ON TIME.</span>
        </h1>
        <div className="hero-sub-row">
          <div className="copy">
            テレビ・舞台・コンサート — 現場を動かす機材を、<br/>
            スピードと柔軟性で運び続けて 44 年。<br/>
            笑顔を、そのまま。
          </div>
          <div className="stat">
            <div className="n">44</div>
            <div className="l">YEARS<br/>IN MOTION</div>
          </div>
          <div className="stat">
            <div className="n">24/7</div>
            <div className="l">ON-SITE<br/>READY</div>
          </div>
          <div className="stat">
            <div className="n">100+</div>
            <div className="l">ANNUAL<br/>SHOWS</div>
          </div>
        </div>
      </div>

      <div className="hero-ticker">
        <div className="hero-ticker-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <React.Fragment key={i}>
              <span>TV BROADCAST</span>
              <span className="sep">◆</span>
              <span className="cy">LIVE STAGE</span>
              <span className="sep">◆</span>
              <span>CONCERT TOUR</span>
              <span className="sep">◆</span>
              <span>EXHIBITION</span>
              <span className="sep">◆</span>
              <span className="cy">EVENT LOGISTICS</span>
              <span className="sep">◆</span>
              <span>SINCE 1981</span>
              <span className="sep">◆</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

window.Hero = Hero;

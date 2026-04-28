const Nav = ({ onOpen }) => {
  const items = [
    { k: "about", l: "ABOUT" },
    { k: "services", l: "SERVICES" },
    { k: "vehicle", l: "VEHICLE" },
    { k: "recruit", l: "RECRUIT" },
    { k: "contact", l: "CONTACT" },
  ];
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <nav className="nav">
      <div
        className="nav-logo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{ cursor: "pointer" }}
      >
        KU<sup>®</sup>
      </div>
      <div className="nav-links">
        {items.map((it) => (
          <a key={it.k} onClick={() => {
            if (it.k === "about" || it.k === "recruit" || it.k === "vehicle") onOpen(it.k);
            else scrollTo(it.k);
          }}>{it.l}</a>
        ))}
      </div>
      <div className="nav-right">
        <span className="nav-dot" />
        <span>SAITAMA / JP — EST.1981</span>
      </div>
    </nav>
  );
};

window.Nav = Nav;

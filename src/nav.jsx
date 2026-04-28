const Nav = () => {
  const items = [
    { l: "ABOUT", href: "./about.html" },
    { l: "SERVICES", href: "./#services" },
    { l: "VEHICLE", href: "./vehicle.html" },
    { l: "RECRUIT", href: "./recruit.html" },
    { l: "CONTACT", href: "./#contact" },
  ];
  return (
    <nav className="nav">
      <a href="./" className="nav-logo" style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}>
        KU<sup>®</sup>
      </a>
      <div className="nav-links">
        {items.map((it) => (
          <a key={it.l} href={it.href}>{it.l}</a>
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

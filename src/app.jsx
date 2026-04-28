const { useState, useEffect } = React;

const App = () => {
  const [tweaks, setTweaks] = useState(window.__TWEAKS__ || { mode: "light", layout: "editorial" });
  const [tweaksVisible, setTweaksVisible] = useState(false);
  const subpage = window.__SUBPAGE__ || null;

  useEffect(() => {
    document.documentElement.setAttribute("data-mode", tweaks.mode);
    document.documentElement.setAttribute("data-layout", tweaks.layout);
  }, [tweaks]);

  useEffect(() => {
    const handler = (e) => {
      if (e.data?.type === "__activate_edit_mode") setTweaksVisible(true);
      if (e.data?.type === "__deactivate_edit_mode") setTweaksVisible(false);
    };
    window.addEventListener("message", handler);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", handler);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Nav />
      {subpage ? (
        <Subpage page={subpage} />
      ) : (
        <>
          <Hero />
          <About />
          <Services />
          <Vehicle />
          <Recruit />
          <Contact />
        </>
      )}
      <TweaksPanel visible={tweaksVisible} tweaks={tweaks} setTweaks={setTweaks} />
    </>
  );
};

ReactDOM.createRoot(document.getElementById("app")).render(<App />);

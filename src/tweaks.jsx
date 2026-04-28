const TweaksPanel = ({ visible, tweaks, setTweaks }) => {
  if (!visible) return null;
  const update = (k, v) => {
    const next = { ...tweaks, [k]: v };
    setTweaks(next);
    window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { [k]: v } }, "*");
  };
  return (
    <div className="tweaks-panel">
      <h6>TWEAKS</h6>
      <div className="tweaks-label">MODE</div>
      <div className="tweaks-row">
        <button className={tweaks.mode === "light" ? "active" : ""} onClick={() => update("mode", "light")}>Light</button>
        <button className={tweaks.mode === "dark" ? "active" : ""} onClick={() => update("mode", "dark")}>Dark</button>
      </div>
      <div className="tweaks-label">LAYOUT</div>
      <div className="tweaks-row">
        <button className={tweaks.layout === "editorial" ? "active" : ""} onClick={() => update("layout", "editorial")}>Editorial</button>
        <button className={tweaks.layout === "film" ? "active" : ""} onClick={() => update("layout", "film")}>Cinema</button>
      </div>
    </div>
  );
};

window.TweaksPanel = TweaksPanel;

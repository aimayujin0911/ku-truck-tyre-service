// Placeholder helpers
const PhotoPlaceholder = ({ label, ratio = "16/9", tone = "light" }) => (
  <div
    style={{
      position: "relative",
      aspectRatio: ratio,
      background: tone === "dark" ? "#0A0F14" : "var(--bg-2)",
      border: "1px solid var(--line)",
      overflow: "hidden",
      color: tone === "dark" ? "#7FD3E8" : "var(--muted)",
    }}
  >
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage:
          tone === "dark"
            ? "repeating-linear-gradient(45deg, rgba(127,211,232,0.1) 0 1px, transparent 1px 16px)"
            : "repeating-linear-gradient(45deg, rgba(10,15,20,0.06) 0 1px, transparent 1px 14px)",
      }}
    />
    <div
      style={{
        position: "absolute",
        inset: "16%",
        border: `1px dashed ${tone === "dark" ? "rgba(127,211,232,0.35)" : "var(--line)"}`,
      }}
    />
    <div
      style={{
        position: "absolute",
        left: 12,
        top: 12,
        fontFamily: "JetBrains Mono, monospace",
        fontSize: 10,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
      }}
    >
      IMG // placeholder
    </div>
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        top: "50%",
        transform: "translateY(-50%)",
        textAlign: "center",
        fontFamily: "JetBrains Mono, monospace",
        fontSize: 12,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
      }}
    >
      {label}
    </div>
  </div>
);

window.PhotoPlaceholder = PhotoPlaceholder;

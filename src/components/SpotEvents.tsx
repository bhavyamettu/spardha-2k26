import { useState } from "react";

export const SPOT = [
  { name: "Treasure Trail" },
  { name: "Tech Pictionary" },
  { name: "Rapid Fire Quiz" },
  { name: "Debug Relay" },
  { name: "Meme Archaeology" },
  { name: "Blind Typing" },
];

export function SpotEvents() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" aria-expanded={open} aria-controls="spot-grid" onClick={() => setOpen((o) => !o)} className="sp-toggle mt-6 border border-primary/70 bg-background/60 px-6 py-2 font-display text-xs font-semibold tracking-[0.3em] text-primary">
        {open ? "HIDE SPOT EVENTS" : "VIEW ALL SPOT EVENTS"}
        <svg viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden><path d="M1 1l5 5 5-5" /></svg>
      </button>
      <div id="spot-grid" className={`sp-wrap ${open ? "open" : ""}`}>
        <div className="sp-clip">
          <div className="sp-grid">
            {SPOT.map((s, i) => (
              <article key={s.name} className="sp-card" style={{ "--i": i } as React.CSSProperties}>
                <span className="sp-num">{String(i + 1).padStart(2, "0")}</span>
                <div className="sp-poster"><span>POSTER</span></div>
                <h4 className="sp-name">{s.name}</h4>
                <p className="sp-tag">SPOT EVENT</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

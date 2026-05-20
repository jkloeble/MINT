/* global React, ReactDOM, PROFILE, TRAITS, INTERESTS, STRENGTHS, CATEGORIES, DAYS */
const { useState, useEffect, useMemo, useRef, useCallback } = React;

// ───────────── helpers ─────────────
const toMins = (hhmm) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};
const fmtDateLong = (ddmmyyyy) => {
  const [d, m, y] = ddmmyyyy.split(".");
  const names = ["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];
  return `${parseInt(d,10)}. ${names[parseInt(m,10)-1]} ${y}`;
};

const DAY_START = toMins("08:00");
const DAY_END = toMins("22:00");
const PX_PER_MIN = 0.95;
const dayHeight = (DAY_END - DAY_START) * PX_PER_MIN;

// scroll-in animation hook
function useScrollReveal(selector = "[data-reveal]") {
  useEffect(() => {
    const els = document.querySelectorAll(selector);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("revealed"); io.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// animated trait bar hook
function useTraitBars() {
  useEffect(() => {
    const bars = document.querySelectorAll(".trait .bar > span[data-fill]");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.style.width = e.target.dataset.fill;
          io.unobserve(e.target);
        }
      }),
      { threshold: 0.5 }
    );
    bars.forEach((b) => io.observe(b));
    return () => io.disconnect();
  }, []);
}

// ───────────── Topbar ─────────────
function Topbar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="brand">
          <span className="brand-dot"></span>
          <span>MINT<span className="b-strong">.WOCHE</span> / 2026</span>
        </div>
        <nav>
          <a href="#profile">Profil</a>
          <a href="#interests">Schwerpunkte</a>
          <a href="#strengths">Stärken</a>
          <a href="#schedule">Wochenplan</a>
        </nav>
        <div className="id-pill">{PROFILE.programId}</div>
      </div>
    </div>
  );
}

// ───────────── Hero ─────────────
function Hero() {
  return (
    <header className="hero">
      <div className="hero-grid-bg"></div>
      <div className="hero-orb hero-orb--2"></div>
      <div className="container hero-inner">
        <div>
          <div className="hero-tagline">
            <span className="tagline-bar"></span>
            <span>DASU · MINT-Woche Dossier · 2026</span>
          </div>
          <h1>
            Hi, ich bin vom<br/>
            <span className="accent">{PROFILE.name}</span>
            <span className="period">.</span>
          </h1>
          <div className="hero-sub">
            <span>{PROFILE.role}</span>
            <span className="dot"></span>
            <span>{PROFILE.org}</span>
            <span className="dot"></span>
            <span>{PROFILE.weekLabel}</span>
          </div>
        </div>
        <aside className="hero-meta-card">
          <div className="meta-row"><span className="k">Organisation</span><span className="v">{PROFILE.name}</span></div>
          <div className="meta-row"><span className="k">Gegründet</span><span className="v">{PROFILE.age}</span></div>
          <div className="meta-row"><span className="k">Programm</span><span className="v">IHK MINT.Woche</span></div>
          <div className="meta-row"><span className="k">Zeitraum</span><span className="v">17 – 21 Aug 2026</span></div>
          <div className="meta-row"><span className="k">Standort</span><span className="v">{PROFILE.location}</span></div>
          <div className="meta-row"><span className="k">Status</span><span className="v" style={{color:"var(--mint-deep)"}}>● bestätigt</span></div>
        </aside>
      </div>
    </header>
  );
}

// ───────────── Profile / Traits ─────────────
function ProfileSection() {
  useTraitBars();
  return (
    <section id="profile">
      <div className="container">
        <div className="section-head" data-reveal>
          <div>
            <div className="num">/01 — Über uns</div>
            <h2>Kurz gesagt<br/><em>(über uns)</em></h2>
          </div>
          <div className="head-right">Organisations-Snapshot<br/>· DASU Ulm</div>
        </div>
        <div className="profile-grid">
          <div className="profile-bio" data-reveal>
            <p>{PROFILE.oneLiner}</p>
            <div className="signoff">— So würden wir uns beschreiben, ehrlich gesagt.</div>
          </div>
          <div className="traits" data-reveal>
            {TRAITS.map((t, i) => (
              <div className="trait" key={t.label}>
                <span className="idx">0{i+1}</span>
                <div className="label-block">
                  <div className="name">{t.label}</div>
                  <div className="note">{t.note}</div>
                </div>
                <div className="bar"><span data-fill={`${t.weight*100}%`} style={{width: 0}}></span></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ───────────── Interests ─────────────
function InterestsSection() {
  return (
    <section id="interests">
      <div className="container">
        <div className="section-head" data-reveal>
          <div>
            <div className="num">/02 — Schwerpunkte</div>
            <h2>Was uns antreibt<br/><em>(Interessen)</em></h2>
          </div>
          <div className="head-right">6 Kernbereiche — von Data<br/>bis KI-Transfer</div>
        </div>
        <div className="interests-grid">
          {INTERESTS.map((it, i) => (
            <article className="interest" key={it.id} data-reveal style={{"--delay": `${i * 60}ms`}}>
              <div>
                <span className="tag">{it.tag}</span>
                <span className="num">{String(i+1).padStart(2,"0")} / {String(INTERESTS.length).padStart(2,"0")}</span>
                <div className="title">{it.label}</div>
                <div className="desc">{it.desc}</div>
              </div>
              <div className="vibe">{it.vibe}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ───────────── Strengths ─────────────
function StrengthsSection() {
  return (
    <section id="strengths">
      <div className="container">
        <div className="section-head" data-reveal>
          <div>
            <div className="num">/03 — Stärken</div>
            <h2>Was wir leisten<br/><em>(Stärken)</em></h2>
          </div>
          <div className="head-right">Kennzahlen &<br/>Kompetenzen</div>
        </div>
        <div className="strengths-band" data-reveal>
          {STRENGTHS.map((s) => (
            <div className="str" key={s.metric}>
              <div className="metric">{s.metric}</div>
              <div className="value">{s.value}</div>
              <div className="note">{s.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ───────────── Week / Schedule ─────────────

// Berechnet Spalten (bei Überlappung) und exakte Höhen ohne Kollision
function computeLayout(events) {
  const sorted = [...events].sort((a, b) => toMins(a.start) - toMins(b.start));

  // Spalten-Zuweisung: überlappende Events nebeneinander
  const cols = []; // cols[i] = letztes Event in Spalte i
  const evCol = new Map();

  for (const ev of sorted) {
    let placed = false;
    for (let ci = 0; ci < cols.length; ci++) {
      if (toMins(cols[ci].end) <= toMins(ev.start)) {
        cols[ci] = ev;
        evCol.set(ev.id, ci);
        placed = true;
        break;
      }
    }
    if (!placed) {
      evCol.set(ev.id, cols.length);
      cols.push(ev);
    }
  }

  const numCols = Math.max(1, cols.length);

  return sorted.map((ev, i) => {
    const colIdx = evCol.get(ev.id);
    // Nächstes Event in derselben Spalte → begrenzt die Höhe
    const nextInCol = sorted.slice(i + 1).find(e => evCol.get(e.id) === colIdx);
    const nextStart = nextInCol ? toMins(nextInCol.start) : DAY_END;
    const naturalH = (toMins(ev.end) - toMins(ev.start)) * PX_PER_MIN - 4;
    const availH   = (nextStart - toMins(ev.start)) * PX_PER_MIN - 4;
    return { ...ev, colIdx, numCols, height: Math.max(28, Math.min(naturalH, availH)) };
  });
}

function HourGrid() {
  const hours = [];
  for (let h = DAY_START/60; h <= DAY_END/60; h++) hours.push(h);
  return (
    <>
      {hours.map((h) => (
        <div key={h} className="hour" style={{ top: ((h*60) - DAY_START) * PX_PER_MIN }}></div>
      ))}
    </>
  );
}

function TimeColumn() {
  const hours = [];
  for (let h = DAY_START/60; h <= DAY_END/60; h++) hours.push(h);
  return (
    <div className="timecol">
      <div className="time-corner" style={{ height: 70 }}></div>
      <div style={{ position: "relative", height: dayHeight }}>
        {hours.map((h) => (
          <div key={h} className="t" style={{ top: ((h*60) - DAY_START) * PX_PER_MIN }}>{String(h).padStart(2,"0")}:00</div>
        ))}
      </div>
    </div>
  );
}

function EventBlock({ ev, onClick, active }) {
  const { colIdx, numCols, height } = ev;
  const top = (toMins(ev.start) - DAY_START) * PX_PER_MIN;
  const cat = CATEGORIES[ev.cat] || {};
  const dense = height < 56;

  // Bei mehreren Spalten: Events nebeneinander positionieren
  const gap = 3;
  const posStyle = numCols > 1
    ? {
        left:  `calc(6px + ${colIdx} * ((100% - 12px - ${(numCols - 1) * gap}px) / ${numCols} + ${gap}px))`,
        width: `calc((100% - 12px - ${(numCols - 1) * gap}px) / ${numCols})`,
        right: "auto",
      }
    : {};

  return (
    <div
      className={`event cat-${ev.cat} ${active ? "is-active" : ""}`}
      style={{ top, height, ...posStyle }}
      onClick={() => onClick(ev)}
    >
      <div className="e-time">{ev.start} – {ev.end} · {cat.label}</div>
      <div className="e-title">{ev.title}</div>
      {!dense && <div className="e-loc">{ev.loc}</div>}
    </div>
  );
}

function DayColumn({ day, onPick, activeId }) {
  const layouts = useMemo(() => computeLayout(day.events), [day.events]);

  const [, dd, mm] = (() => {
    const p = day.date.split(".");
    return [p[2], p[0], p[1]];
  })();
  return (
    <div className="daycol">
      <div className="day-head">
        <div className="day-head-stack">
          <span className="d-short">{day.short} · {dd}.{mm}</span>
          <span className="d-num">{day.long}</span>
        </div>
        <span className="d-theme">{day.theme}</span>
      </div>
      <div className="body" style={{ height: dayHeight }}>
        <HourGrid />
        {layouts.map((ev) => (
          <EventBlock key={ev.id} ev={ev} onClick={onPick} active={activeId === ev.id} />
        ))}
      </div>
    </div>
  );
}

function NotesRow() {
  const [notes, setNotes] = useState(() => {
    try {
      const raw = localStorage.getItem("mint-notes-dasu-2026");
      return raw ? JSON.parse(raw) : {};
    } catch { return {}; }
  });
  useEffect(() => {
    localStorage.setItem("mint-notes-dasu-2026", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="notes-row">
      <div className="notes-corner">NOTIZEN</div>
      {DAYS.map((d) => {
        const v = notes[d.id] || "";
        const count = v.length;
        return (
          <div className="notes-cell" key={d.id}>
            <div className="nl">
              <span>Notiz · {d.short}</span>
              <span>{count}/500</span>
            </div>
            <textarea
              placeholder={`Mein Take vom ${d.long}…`}
              maxLength={500}
              value={v}
              onChange={(e) => setNotes({ ...notes, [d.id]: e.target.value })}
            />
          </div>
        );
      })}
    </div>
  );
}

function Legend() {
  const order = ["keynote", "workshop", "visit", "hands", "social", "break"];
  return (
    <div className="legend">
      {order.map((k) => (
        <div className="lg" key={k}>
          <span className="sw" style={{ background: `var(--legend-${k}, ${swatchFor(k)})` }}></span>
          <span>{CATEGORIES[k].label}</span>
        </div>
      ))}
    </div>
  );
}
function swatchFor(k) {
  switch (k) {
    case "keynote": return "#0B0F14";
    case "workshop": return "oklch(0.82 0.16 165)";
    case "visit": return "oklch(0.78 0.14 65)";
    case "hands": return "#7C5CFF";
    case "social": return "#E94E77";
    case "break": return "#D5D7D2";
    default: return "#000";
  }
}

function ScheduleSection({ onPick, activeId }) {
  return (
    <section id="schedule">
      <div className="container">
        <div className="section-head" data-reveal>
          <div>
            <div className="num">/04 — Wochenplan</div>
            <h2>Mo 17 → Fr 21 August<br/><em>(Agenda)</em></h2>
          </div>
          <div className="head-right">Klick auf einen Termin<br/>für Details — Notizen unten</div>
        </div>
        <div className="week-controls">
          <span>5 Tage · 25 Programmpunkte · DASU Ulm</span>
          <Legend />
        </div>
        <div className="week">
          <TimeColumn />
          {DAYS.map((d) => (
            <DayColumn key={d.id} day={d} onPick={onPick} activeId={activeId} />
          ))}
        </div>
        <NotesRow />
      </div>
    </section>
  );
}

// ───────────── Detail Panel ─────────────
function DetailPanel({ event, dayMap, onClose }) {
  useEffect(() => {
    const f = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", f);
    return () => window.removeEventListener("keydown", f);
  }, [onClose]);

  const isOpen = !!event;
  const cat = event ? CATEGORIES[event.cat] : null;
  const day = event ? dayMap[event.dayId] : null;
  const swatch = event ? swatchFor(event.cat) : "#000";
  const isDark = event && (event.cat === "keynote" || event.cat === "hands" || event.cat === "social");

  return (
    <div className={`detail-overlay ${isOpen ? "is-open" : ""}`} onClick={onClose}>
      <aside className="detail-panel" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose} aria-label="Schließen">×</button>
        {event && (
          <>
            <span
              className="pill"
              style={{ background: swatch, color: isDark ? "#fff" : "var(--ink)" }}
            >{cat.label}</span>
            <h3>{event.title}</h3>
            <div className="when">{day && `${day.long}, ${fmtDateLong(day.date)}`} · {event.start} – {event.end}</div>

            <div className="fields">
              <div className="field">
                <div className="k">Was</div>
                <div className="v">{event.what}</div>
              </div>
              <div className="field">
                <div className="k">Ort</div>
                <div className="v mono">{event.loc}</div>
              </div>
              <div className="field">
                <div className="k">Mit</div>
                <div className="v">{event.who}</div>
              </div>
              <div className="field">
                <div className="k">Dauer</div>
                <div className="v mono">{durationLabel(event.start, event.end)}</div>
              </div>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}

function durationLabel(s, e) {
  const d = toMins(e) - toMins(s);
  const h = Math.floor(d / 60), m = d % 60;
  if (h && m) return `${h} h ${m} min`;
  if (h) return `${h} h`;
  return `${m} min`;
}

// ───────────── Feedback ─────────────
function StarRating({ value, onChange }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          className={`star ${star <= (hovered || value) ? "filled" : ""}`}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          onClick={() => onChange(star)}
          aria-label={`${star} Sterne`}
        >★</button>
      ))}
    </div>
  );
}

function FeedbackModal({ onClose }) {
  const [name, setName]       = useState("");
  const [rating, setRating]   = useState(0);
  const [message, setMessage] = useState("");
  const [status, setStatus]   = useState("idle"); // idle | sending | success | error

  useEffect(() => {
    const f = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", f);
    return () => window.removeEventListener("keydown", f);
  }, [onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) { setStatus("error"); return; }
    setStatus("sending");
    try {
      const res = await fetch(window.FEEDBACK_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name:    name.trim() || "Anonym",
          rating:  rating ? `${rating} / 5 Sterne` : "Keine Angabe",
          message,
          _subject: "MINT.Woche · Neues Feedback",
        }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="fb-overlay" onClick={onClose}>
      <div className="fb-panel" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose} aria-label="Schließen">×</button>

        {status === "success" ? (
          <div className="fb-success">
            <div className="fb-check">✓</div>
            <p className="fb-success-title">Feedback erhalten</p>
            <p className="fb-success-sub">Vielen Dank — dein Feedback ist angekommen.</p>
            <button className="fb-submit" onClick={onClose}>Schließen</button>
          </div>
        ) : (
          <>
            <div className="fb-head">
              <div className="num">/FB — Feedback</div>
              <h3>Was denkst du?</h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="fb-field">
                <label>Name <span className="fb-opt">(optional)</span></label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Dein Name" />
              </div>
              <div className="fb-field">
                <label>Bewertung <span className="fb-opt">(optional)</span></label>
                <StarRating value={rating} onChange={setRating} />
              </div>
              <div className="fb-field">
                <label>Nachricht <span className="fb-req">*</span></label>
                <textarea
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Dein Feedback, Fragen oder Anregungen…"
                />
              </div>
              {status === "error" && (
                <div className="fb-error-msg">Fehler beim Senden — bitte noch einmal versuchen.</div>
              )}
              <button type="submit" className="fb-submit" disabled={status === "sending"}>
                {status === "sending" ? "Wird gesendet…" : "Feedback absenden →"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function FeedbackButton({ onClick }) {
  return (
    <button className="fb-fab" onClick={onClick} aria-label="Feedback geben">
      <span className="fb-fab-icon">✦</span>
      <span>Feedback</span>
    </button>
  );
}

// ───────────── App ─────────────
function App() {
  const [selected, setSelected]         = useState(null);
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  useScrollReveal("[data-reveal]");

  const dayByEventId = useMemo(() => {
    const m = {};
    DAYS.forEach((d) => d.events.forEach((e) => (m[e.id] = d)));
    return m;
  }, []);

  const pick = useCallback((ev) => {
    const day = DAYS.find((d) => d.events.some((e) => e.id === ev.id));
    setSelected({ ...ev, dayId: day.id });
  }, []);

  return (
    <div className="app">
      <Topbar />
      <Hero />
      <ProfileSection />
      <InterestsSection />
      <StrengthsSection />
      <ScheduleSection onPick={pick} activeId={selected?.id} />
      <footer className="footer container">
        <span className="f-left"><span className="f-dot"></span>© {PROFILE.name} · MINT.Woche 2026</span>
        <span>Transferzentrum Ulm · dasu.digital</span>
      </footer>
      <DetailPanel
        event={selected}
        dayMap={{ [selected?.dayId]: dayByEventId[selected?.id] }}
        onClose={() => setSelected(null)}
      />
      <FeedbackButton onClick={() => setFeedbackOpen(true)} />
      {feedbackOpen && <FeedbackModal onClose={() => setFeedbackOpen(false)} />}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

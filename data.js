// Profil + Agenda Daten — DASU · Transferzentrum für Digitalisierung, Analytics & Data Science Ulm

// Formspree: Account erstellen auf formspree.io → neues Formular anlegen → ID hier eintragen
window.FEEDBACK_ENDPOINT = "https://formspree.io/f/mlgvjrla";

window.PROFILE = {
  name: "DASU",
  role: "Transferzentrum Digitalisierung & Data Science",
  org: "Ulm",
  age: "2021",
  programId: "MINT-W26-DASU",
  weekLabel: "Woche 34 · 17 – 21 Aug 2026",
  location: "Ulm · Olgastraße 94",
  oneLiner: "Wir machen aus Daten Wissen — und aus Wissen messbaren Wettbewerbsvorsprung für den Mittelstand in der Region Ulm.",
};

window.TRAITS = [
  { label: "Innovativ", note: "Neueste KI- und Data-Science-Methoden im praktischen Einsatz", weight: 0.95 },
  { label: "Vernetzt", note: "IHK, Uni Ulm, Hochschule Ulm & Stadt Ulm unter einem Dach", weight: 0.98 },
  { label: "Praxisnah", note: "Echte Unternehmensherausforderungen — keine Lehrbuchbeispiele", weight: 0.92 },
  { label: "Transferorientiert", note: "Forschungsergebnisse direkt in Betriebe bringen", weight: 0.96 },
];

window.INTERESTS = [
  { id: "data-science", label: "Data Science & Analytics", tag: "DATA", desc: "Von Rohdaten zu handlungsleitenden Insights — wir analysieren, was wirklich zählt.", vibe: "data → insight" },
  { id: "ki", label: "Künstliche Intelligenz", tag: "AI", desc: "Machine Learning, LLMs & NLP — pragmatisch eingesetzt für reale Geschäftsprobleme.", vibe: "model.predict(success)" },
  { id: "rpa", label: "Prozessautomatisierung", tag: "RPA", desc: "Robotic Process Automation: Routinen automatisieren, damit Menschen Wichtigeres tun können.", vibe: "if boring → automate" },
  { id: "digilab", label: "DigiLab Ulm", tag: "LAB", desc: "Unser interaktives Labor, in dem KI-Lösungen live erlebbar werden — Besuch jederzeit möglich.", vibe: "demo.run()" },
  { id: "transfer", label: "Forschungstransfer", tag: "R&D", desc: "Wissenschaft trifft Wirtschaft — Uni-Ergebnisse landen direkt im Unternehmen.", vibe: "research → value" },
  { id: "beratung", label: "Beratung & Förderung", tag: "EDU", desc: "Fördermittel sichern und Digitalisierungsvorhaben von A bis Z begleiten.", vibe: "consult → fund → scale" },
];

window.STRENGTHS = [
  { metric: "Fördervolumen", value: "€ 4,9 Mio.", note: "EFRE (€3,9 Mio.) + Wirtschaftsministerium BW (€980.000) — Laufzeit bis 2027." },
  { metric: "Gründungspartner", value: "4", note: "IHK Ulm, Universität Ulm, Hochschule Ulm und Stadt Ulm — ein starkes Fundament." },
  { metric: "Standort", value: "Ulm", note: "Olgastraße 94 · 89073 Ulm — 500 m vom Hauptbahnhof, barrierefrei erreichbar." },
  { metric: "Zielgruppe", value: "KMU", note: "Kleine und mittlere Unternehmen — wir senken die Einstiegshürde in die Digitalisierung." },
];

// Kategorien für die Agenda
window.CATEGORIES = {
  keynote:  { label: "Keynote",  color: "#0B0F14", textOnDark: true },
  workshop: { label: "Workshop", color: "var(--mint)" },
  visit:    { label: "Besuch",   color: "var(--amber)" },
  hands:    { label: "Hands-On", color: "#7C5CFF" },
  social:   { label: "Social",   color: "#E94E77" },
  break:    { label: "Pause",    color: "#D5D7D2" },
};

// Tage 17.–21.08.2026 (Mo–Fr) — MINT.Woche @ DASU Ulm
window.DAYS = [
  {
    id: "mo",
    date: "17.08.2026",
    short: "Mo",
    long: "Montag",
    theme: "Kick-Off & Digitalisierung",
    events: [
      { id: "m1", start: "09:00", end: "10:00", title: "Welcome & Check-In", cat: "social", loc: "IHK Ulm · Saal Innovation", who: "Sandra Zimmermann (DASU-Geschäftsführerin)", what: "Akkreditierung, Programmüberblick und erstes Kennenlernen. Das DASU stellt sich als Gastgeber vor." },
      { id: "m2", start: "10:15", end: "12:00", title: "Keynote: Digitalisierung 2026 — Was KMU wirklich brauchen", cat: "keynote", loc: "IHK Ulm · Saal Innovation", who: "Sandra Zimmermann · DASU", what: "Warum Digitalisierung kein IT-Thema ist — sondern ein Strategiethema. Impulse und Fallstudien aus der Transferpraxis." },
      { id: "m3", start: "12:00", end: "13:00", title: "Mittagspause", cat: "break", loc: "DASU Atrium", who: "—", what: "Catering im Innenhof. Vegetarisch & vegan verfügbar. Networking optional." },
      { id: "m4", start: "13:00", end: "16:30", title: "Workshop: Python & Datenanalyse in 3 Stunden", cat: "workshop", loc: "DASU DigiLab · Raum A", who: "DASU Data-Science-Team", what: "Von der CSV-Datei zur aussagekräftigen Visualisierung. Pandas, Matplotlib, Jupyter — Laptop mitbringen." },
      { id: "m5", start: "17:00", end: "18:00", title: "Tages-Reflektion & Austausch", cat: "social", loc: "DASU Lounge", who: "DASU Mentor:innen-Team", what: "Was war überraschend, was bleibt offen — offene Fragerunde mit dem DASU-Team." },
    ],
  },
  {
    id: "di",
    date: "18.08.2026",
    short: "Di",
    long: "Dienstag",
    theme: "KI in der Praxis",
    events: [
      { id: "t1", start: "09:00", end: "12:00", title: "DASU DigiLab — KI live erleben", cat: "visit", loc: "DASU DigiLab · Olgastraße 94", who: "DASU Innovation Team", what: "KI-Demos, interaktive Stationen zu Machine Learning, Computer Vision und Sprachmodellen. Anfassen ausdrücklich erwünscht." },
      { id: "t2", start: "12:00", end: "13:00", title: "Lunch", cat: "break", loc: "DASU Atrium", who: "—", what: "Pausenbrot + Kaffee. Wer mag, tauscht sich mit dem DASU-Team aus." },
      { id: "t3", start: "13:00", end: "14:30", title: "Talk: Large Language Models im Mittelstand", cat: "keynote", loc: "DASU Konferenzraum", who: "Prof. Dr. Steffen Zimmermann · DASU-Beirat", what: "Wie KMU heute schon LLMs sinnvoll einsetzen — ohne eigene KI-Abteilung." },
      { id: "t4", start: "14:30", end: "16:30", title: "Hands-On: Prompt Engineering & AI-Tools", cat: "hands", loc: "DASU DigiLab · Raum B", who: "DASU KI-Team", what: "Eigene Prompts entwickeln, KI-Tools testen, Use Cases aus dem eigenen Umfeld erarbeiten." },
      { id: "t5", start: "17:00", end: "18:00", title: "Wrap-up & offene Fragen", cat: "social", loc: "DASU Lounge", who: "Mentor:innen", what: "Fragen sammeln, Tag einordnen, Ausblick auf Mittwoch." },
    ],
  },
  {
    id: "mi",
    date: "19.08.2026",
    short: "Mi",
    long: "Mittwoch",
    theme: "Automatisierung & Praxis",
    events: [
      { id: "w1", start: "09:00", end: "10:30", title: "Talk: RPA — Routinen automatisieren, Menschen entlasten", cat: "keynote", loc: "DASU Konferenzraum", who: "DASU RPA-Spezialist:innen", what: "Wie Robotic Process Automation aus manuellen SAP-Buchungen und E-Mail-Workflows vollautomatische Prozesse macht." },
      { id: "w2", start: "10:45", end: "12:30", title: "Unternehmensbesuch: Smart Factory", cat: "visit", loc: "Industriepartner Region Ulm", who: "Gastgeber vor Ort", what: "Industrie 4.0 in der Praxis: Sensorik, Predictive Maintenance, digitale Fertigungssteuerung — live besichtigen." },
      { id: "w3", start: "12:30", end: "13:30", title: "Mittag", cat: "break", loc: "Betriebskantine", who: "—", what: "Mittagessen beim Gastgeber. Currywurst-Index: hoch. Vegetarisch verfügbar." },
      { id: "w4", start: "13:30", end: "16:30", title: "Workshop: RPA-Grundlagen mit UiPath", cat: "workshop", loc: "DASU DigiLab · Raum A", who: "DASU RPA-Team", what: "Eigenen ersten Bot bauen — einen typischen Büroprozess automatisieren. Kein Code-Hintergrund nötig." },
      { id: "w5", start: "18:00", end: "21:00", title: "Networking Abend", cat: "social", loc: "Ulm · Stadthaus am Münsterplatz", who: "DASU, IHK Ulm & Gäste", what: "Optional, aber empfohlen: Austausch mit Unternehmensvertreter:innen und DASU-Alumni. Eintritt frei." },
    ],
  },
  {
    id: "do",
    date: "20.08.2026",
    short: "Do",
    long: "Donnerstag",
    theme: "Data-Challenge Build Day",
    events: [
      { id: "h1", start: "09:00", end: "10:00", title: "Startup-Pitches aus der Region", cat: "keynote", loc: "DASU · Saal Innovation", who: "3 Gründer:innen · je 8 min", what: "Drei junge Ulmer Teams präsentieren ihre datengetriebenen Produkte. Fragen und Feedback ausdrücklich willkommen." },
      { id: "h2", start: "10:15", end: "12:30", title: "Team-Setup & Challenge-Briefing", cat: "workshop", loc: "DASU DigiLab · Alle Räume", who: "DASU Coaches", what: "Teams bilden, Datensatz erkunden, Fragestellung schärfen. Der Scope zählt — nicht die Perfektion." },
      { id: "h3", start: "12:30", end: "13:30", title: "Quick Lunch", cat: "break", loc: "DASU Kitchen", who: "—", what: "Pizza-Slices und Club-Mate — weil Build-Day-Vibes." },
      { id: "h4", start: "14:00", end: "18:00", title: "DASU Data-Challenge Hackathon", cat: "hands", loc: "DASU DigiLab · Floor 1+2", who: "Team + DASU-Coaches on call", what: "5 Stunden, ein echter Datensatz, ein Ergebnis. KI-Co-Piloten erlaubt — und ausdrücklich erwünscht." },
      { id: "h5", start: "19:00", end: "22:00", title: "MINT-Abend (optional)", cat: "social", loc: "Ulm · Westernstraße", who: "Alle Teilnehmer:innen", what: "Entspannter Ausklang nach dem Build Day — gute Gespräche, kühle Getränke. Eintritt frei." },
    ],
  },
  {
    id: "fr",
    date: "21.08.2026",
    short: "Fr",
    long: "Freitag",
    theme: "Show & Tell",
    events: [
      { id: "f1", start: "09:00", end: "10:30", title: "Letzter Feinschliff", cat: "workshop", loc: "DASU DigiLab", who: "Teams + Coaches", what: "Demo polieren, Slides finalisieren, Generalprobe. Maximal 5 Folien — keine Folie über 30 Worte." },
      { id: "f2", start: "11:00", end: "12:30", title: "Projekt-Präsentationen", cat: "keynote", loc: "IHK Ulm · Saal Innovation", who: "Alle Teams · je 5 min", what: "Ergebnisse vor Jury aus DASU, IHK Ulm und Unternehmensvertreter:innen. Bewertung: Relevanz, Kreativität, Umsetzbarkeit." },
      { id: "f3", start: "12:30", end: "13:30", title: "Lunch & Ausklang", cat: "break", loc: "DASU Atrium", who: "—", what: "Catering vom Lieblings-Bäcker aus der Nachbarschaft. Zeit für letzte Gespräche." },
      { id: "f4", start: "13:30", end: "14:45", title: "Abschluss-Keynote: Was kommt als Nächstes?", cat: "keynote", loc: "IHK Ulm · Saal Innovation", who: "Sandra Zimmermann · DASU & IHK Ulm", what: "Wie es weitergeht: Praktika, DASU-Förderangebote, Anschlussveranstaltungen und das DASU-Netzwerk." },
      { id: "f5", start: "15:00", end: "16:00", title: "Zertifikate & Verabschiedung", cat: "social", loc: "DASU Atrium", who: "DASU & IHK Team", what: "Zertifikat, Foto, Hände schütteln — und bitte: im Netzwerk bleiben. dasu.digital" },
    ],
  },
];

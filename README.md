# MINT.Woche · DASU

Interaktive One-Page-Web-App für die IHK MINT.Woche 2026 — erstellt vom **DASU** (Transferzentrum für Digitalisierung, Analytics & Data Science Ulm).

## Features

- **Organisationsprofil** — Stärken, Schwerpunkte und Kennzahlen des DASU
- **Interaktiver Wochenkalender** — 5-Tage-Agenda (Mo–Fr) mit Klick-Details und Notizfeldern pro Tag
- **Scroll-Animationen** — Sektionen blenden sich beim Scrollen ein
- **Feedback-Formular** — Besucher können direkt Feedback hinterlassen (via Formspree)
- **Vollständig statisch** — kein Backend, läuft direkt im Browser

## Technologie

| Was | Womit |
|---|---|
| UI-Framework | React 18 (via CDN) |
| JSX-Transpiler | Babel Standalone (via CDN) |
| Styling | Vanilla CSS mit CSS Custom Properties |
| Fonts | Bricolage Grotesque + Geist Mono (Google Fonts) |
| Feedback | Formspree |

## Projektstruktur

```
MINT Woche/
├── MINT Woche DASU.html   # Einstiegspunkt
├── app.jsx                # Alle React-Komponenten
├── data.js                # Inhalte: Profil, Agenda, Texte
└── styles.css             # Gesamtes Styling
```

## Inhalte anpassen

Alle Texte, Daten und Agenda-Einträge sind zentral in **`data.js`** gepflegt — kein JSX-Wissen nötig.

```js
// Organisationsprofil
window.PROFILE = { name, role, org, ... };

// Stärken-Balken
window.TRAITS = [ { label, note, weight } ];

// Schwerpunkte-Kacheln
window.INTERESTS = [ { label, tag, desc, vibe } ];

// Kennzahlen
window.STRENGTHS = [ { metric, value, note } ];

// Wochenplan
window.DAYS = [ { date, events: [ { start, end, title, cat, loc, who, what } ] } ];
```

### Event-Kategorien

| Key | Farbe | Verwendung |
|---|---|---|
| `keynote` | Dunkel/Schwarz | Keynotes & Talks |
| `workshop` | Mint | Workshops |
| `visit` | Amber | Besuche & Exkursionen |
| `hands` | Violet | Hands-On / Hackathon |
| `social` | Pink | Networking & Social |
| `break` | Grau | Pausen |

## Feedback-Formular einrichten

Das Formular sendet Einsendungen an **Formspree**. Einmalige Einrichtung:

1. Account erstellen auf [formspree.io](https://formspree.io)
2. Neues Formular anlegen → E-Mail-Adresse hinterlegen
3. Form-ID kopieren und in `data.js` eintragen:

```js
window.FEEDBACK_ENDPOINT = "https://formspree.io/f/DEINE_FORM_ID";
```

Einsendungen erscheinen im Formspree-Dashboard und werden per E-Mail zugestellt. CSV-Export jederzeit möglich.

## Auf GitHub Pages hosten

```bash
# Repository erstellen und Dateien pushen
git init
git add .
git commit -m "MINT Woche DASU"
git remote add origin https://github.com/DEIN_USER/DEIN_REPO.git
git push -u origin main
```

Dann in den Repository-Einstellungen unter **Settings → Pages → Source** den Branch `main` auswählen. Die Seite ist anschließend unter `https://DEIN_USER.github.io/DEIN_REPO/MINT%20Woche%20DASU.html` erreichbar.

> **Hinweis:** Da die HTML-Datei Leerzeichen im Namen enthält, empfiehlt es sich, sie vor dem Push in `index.html` umzubenennen — dann ist sie direkt unter der Root-URL erreichbar.

## Lokale Vorschau

Da die App React via CDN lädt, reicht ein einfacher lokaler Webserver:

```bash
# Python
python -m http.server 8080

# Node.js (npx)
npx serve .
```

Dann im Browser `http://localhost:8080/MINT Woche DASU.html` öffnen.

---

**DASU** · Transferzentrum für Digitalisierung, Analytics & Data Science Ulm  
Olgastraße 94 · 89073 Ulm · [dasu.digital](https://www.dasu.digital)

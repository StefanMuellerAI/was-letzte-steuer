# Steuerrechner Einzelunternehmen 2025/2026

Ein moderner Steuerrechner für Einzelunternehmen, der Einkommensteuer und Gewerbesteuer nach §32a & §35 EStG für die Jahre 2025 und 2026 berechnet. Entwickelt mit Next.js und optimiert für Vercel Deployment.

## Features

- ✅ **Einkommensteuerberechnung** nach §32a EStG (Grundtabelle 2025/2026)
- ✅ **Automatische Jahreserkennung** basierend auf Stichtag
- ✅ **Zukunftssichere Steuerparameter** für 2025 und 2026
- ✅ **Gewerbesteuerberechnung** mit Freibetrag und Anrechnung nach §35 EStG
- ✅ **Ehegattensplitting** (Splittingtabelle)
- ✅ **Freiberufler-Modus** (ohne Gewerbesteuer)
- ✅ **Auszahlbares Einkommen** mit Rücklage-Planung
- ✅ **Responsive Design** für alle Geräte
- ✅ **Echtzeitberechnung** bei Eingabeänderungen
- ✅ **TypeScript** für Typsicherheit

## Berechnung

### Einkommensteuer (Jahr-abhängig)
- **2025**: Grundfreibetrag 12.096 €, Standard-Eckwerte
- **2026**: Grundfreibetrag 12.348 € (+252€), Eckwerte +2% verschoben
- Automatische Jahreserkennung basierend auf Stichtag
- Grundtabelle nach §32a EStG
- Optional: Splittingtabelle bei Ehegattensplitting

### Gewerbesteuer
- Freibetrag: 24.500 € (§11 GewStG)
- Steuermesszahl: 3,5%
- Anrechnung nach §35 EStG (max. 4-facher Steuermessbetrag)

### Vereinfachungen
- Keine Sonderausgabenpauschalen
- Keine Kinder-/Kirchensteuer
- Keine Verlustvorträge
- Keine gewerbesteuerlichen Hinzurechnungen/Kürzungen

## Installation & Entwicklung

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev

# Production Build erstellen
npm run build

# Production Build lokal starten
npm start
```

## Vercel Deployment

### Automatisches Deployment

1. Repository zu GitHub pushen
2. Mit Vercel Account verbinden
3. Projekt importieren - Vercel erkennt automatisch Next.js
4. Deployment wird automatisch gestartet

### Manuelles Deployment

```bash
# Vercel CLI installieren
npm i -g vercel

# Deployment starten
vercel

# Production Deployment
vercel --prod
```

## Projekt-Struktur

```
steuerrechner-vercel/
├── app/
│   ├── globals.css          # Globale Styles
│   ├── layout.tsx           # Root Layout
│   └── page.tsx             # Hauptkomponente
├── package.json             # Dependencies
├── next.config.js           # Next.js Konfiguration
├── tsconfig.json            # TypeScript Konfiguration
├── vercel.json              # Vercel Deployment Config
└── README.md                # Dokumentation
```

## Technologie-Stack

- **Framework:** Next.js 14
- **Sprache:** TypeScript
- **Styling:** CSS (Global Styles)
- **Deployment:** Vercel
- **Build:** Static Export für optimale Performance

## Verwendung

1. **Stichtag** eingeben (Standard: heutiges Datum)
2. **Steuerklasse** auswählen
3. **Einnahmen und Ausgaben** bis Stichtag eingeben
4. **KV+PV Beiträge** pro Monat angeben
5. **Gewerbesteuer-Hebesatz** der Kommune eingeben
6. Optional: **Freiberufler-Modus** oder **Ehegattensplitting** aktivieren
7. Ergebnisse werden automatisch berechnet und angezeigt

## Rechtlicher Hinweis

⚠️ **Wichtiger Hinweis:** Der ermittelte Wert ist nur näherungsweise und dient zur groben Orientierung. Für eine exakte Steuerberechnung wenden Sie sich bitte an einen Steuerberater oder das Finanzamt.

## Lizenz

MIT License

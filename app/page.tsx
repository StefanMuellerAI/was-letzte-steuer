'use client'

import { useState, useEffect } from 'react'

interface TaxResults {
  gewinn: number
  kvpvGesamt: number
  zvEinkommen: number
  gewerbesteuer: number
  einkommensteuer: number
  gesamtSteuer: number
}

export default function Steuerrechner() {
  const [stichtag, setStichtag] = useState('')
  const [steuerklasse, setSteuerklasse] = useState(1)
  const [einnahmen, setEinnahmen] = useState(0)
  const [ausgaben, setAusgaben] = useState(0)
  const [kvpv, setKvpv] = useState(0)
  const [hebesatz, setHebesatz] = useState(0)
  const [freibetrag, setFreibetrag] = useState(24500)
  const [weitereAufwendungen, setWeitereAufwendungen] = useState(0)
  const [freiberuflich, setFreiberuflich] = useState(false)
  const [ehegattensplitting, setEhegattensplitting] = useState(false)
  
  const [results, setResults] = useState<TaxResults>({
    gewinn: 0,
    kvpvGesamt: 0,
    zvEinkommen: 0,
    gewerbesteuer: 0,
    einkommensteuer: 0,
    gesamtSteuer: 0
  })

  // Aktuelles Datum als Standard setzen
  useEffect(() => {
    const today = new Date()
    setStichtag(today.toISOString().split('T')[0])
  }, [])

  const calculateEinkommensteuer = (x: number): number => {
    // Grundfreibetrag und Eckwerte für 2025
    const gfb = 12096
    const t2e = 17443
    const t3e = 68480
    const t4e = 277825

    if (x <= gfb) return 0
    
    if (x <= t2e) {
      const y = (x - gfb) / 10000
      return (932.3 * y + 1400) * y
    }
    
    if (x <= t3e) {
      const z = (x - 17443) / 10000
      return (176.64 * z + 2397) * z + 1015.13
    }
    
    if (x <= t4e) {
      return 0.42 * x - 10911.92
    }
    
    return 0.45 * x - 19246.67
  }

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2
    }).format(amount)
  }

  const calculateTax = () => {
    if (!stichtag) return

    // Monate bis Stichtag berechnen
    const stichtagDate = new Date(stichtag)
    const startOfYear = new Date(stichtagDate.getFullYear(), 0, 1)
    const monthsUntilStichtag = Math.min(12, Math.max(0, 
      (stichtagDate.getMonth() - startOfYear.getMonth()) + 
      (stichtagDate.getFullYear() - startOfYear.getFullYear()) * 12 + 1
    ))

    // Berechnungen
    const gewinn = einnahmen - ausgaben
    const kvpvGesamt = kvpv * monthsUntilStichtag
    const zvEinkommen = Math.max(0, gewinn - kvpvGesamt - weitereAufwendungen)

    // Einkommensteuer berechnen (§32a EStG 2025)
    let einkommensteuer = 0
    if (ehegattensplitting || steuerklasse === 3) {
      // Splittingtabelle: 2 × ESt(zvE/2)
      einkommensteuer = 2 * calculateEinkommensteuer(Math.round(zvEinkommen / 2))
    } else {
      // Grundtabelle
      einkommensteuer = calculateEinkommensteuer(Math.round(zvEinkommen))
    }

    // Gewerbesteuer berechnen
    let gewerbesteuer = 0
    let anrechnungBetrag = 0
    
    if (!freiberuflich) {
      const gewerbeertrag = Math.floor(gewinn / 100) * 100 // Auf volle 100 € abrunden
      const bemessungsgrundlage = Math.max(0, gewerbeertrag - freibetrag)
      const steuermessbetrag = bemessungsgrundlage * 0.035
      gewerbesteuer = steuermessbetrag * (hebesatz / 100)
      
      // §35 EStG Anrechnung
      anrechnungBetrag = Math.min(einkommensteuer, 4 * steuermessbetrag)
    }

    // Einkommensteuer nach Anrechnung
    const einkommensteuerNachAnrechnung = Math.max(0, einkommensteuer - anrechnungBetrag)
    const gesamtSteuer = gewerbesteuer + einkommensteuerNachAnrechnung

    setResults({
      gewinn,
      kvpvGesamt,
      zvEinkommen,
      gewerbesteuer,
      einkommensteuer: einkommensteuerNachAnrechnung,
      gesamtSteuer
    })
  }

  // Automatische Berechnung bei Eingabeänderungen
  useEffect(() => {
    calculateTax()
  }, [stichtag, steuerklasse, einnahmen, ausgaben, kvpv, hebesatz, freibetrag, weitereAufwendungen, freiberuflich, ehegattensplitting])

  return (
    <div className="container">
      <div className="header">
        <h1>Steuerrechner 2025</h1>
        <p>Einzelunternehmen (ESt + GewSt, §32a & §35 EStG)</p>
      </div>
      
      <div className="disclaimer">
        <strong>Hinweis:</strong> Der ermittelte Wert ist nur näherungsweise und dient zur groben Orientierung. 
        Für eine exakte Steuerberechnung wenden Sie sich bitte an einen Steuerberater oder das Finanzamt.
      </div>

      <div className="content">
        <div className="section">
          <h2>Eingaben</h2>
          <form>
            <div className="form-group">
              <label htmlFor="stichtag">Stichtag (Datum)</label>
              <input 
                type="date" 
                id="stichtag" 
                value={stichtag}
                onChange={(e) => setStichtag(e.target.value)}
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="steuerklasse">Steuerklasse</label>
              <select 
                id="steuerklasse"
                value={steuerklasse}
                onChange={(e) => setSteuerklasse(parseInt(e.target.value))}
              >
                <option value="1">Steuerklasse I (Grundtabelle)</option>
                <option value="2">Steuerklasse II (Grundtabelle + Entlastung)</option>
                <option value="3">Steuerklasse III (Splittingtabelle)</option>
                <option value="4">Steuerklasse IV (Grundtabelle)</option>
                <option value="5">Steuerklasse V (Grundtabelle)</option>
                <option value="6">Steuerklasse VI (Grundtabelle)</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="einnahmen">Einnahmen bis Stichtag (€)</label>
              <input 
                type="number" 
                id="einnahmen" 
                step="0.01" 
                min="0" 
                placeholder="z.B. 165681,00"
                value={einnahmen || ''}
                onChange={(e) => setEinnahmen(parseFloat(e.target.value) || 0)}
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="ausgaben">Ausgaben bis Stichtag (€)</label>
              <input 
                type="number" 
                id="ausgaben" 
                step="0.01" 
                min="0" 
                placeholder="z.B. 44077,06"
                value={ausgaben || ''}
                onChange={(e) => setAusgaben(parseFloat(e.target.value) || 0)}
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="kvpv">Monatliche KV+PV (€/Monat)</label>
              <input 
                type="number" 
                id="kvpv" 
                step="0.01" 
                min="0" 
                placeholder="z.B. 680,00"
                value={kvpv || ''}
                onChange={(e) => setKvpv(parseFloat(e.target.value) || 0)}
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="hebesatz">Gewerbesteuer-Hebesatz (%)</label>
              <input 
                type="number" 
                id="hebesatz" 
                step="0.01" 
                min="0" 
                placeholder="z.B. 475"
                value={hebesatz || ''}
                onChange={(e) => setHebesatz(parseFloat(e.target.value) || 0)}
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="freibetrag">GewSt-Freibetrag (§11 GewStG) (€)</label>
              <input 
                type="number" 
                id="freibetrag" 
                step="0.01" 
                min="0" 
                value={freibetrag}
                onChange={(e) => setFreibetrag(parseFloat(e.target.value) || 24500)}
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="weitereAufwendungen">Weitere abzugsfähige Aufwendungen (€)</label>
              <input 
                type="number" 
                id="weitereAufwendungen" 
                step="0.01" 
                min="0" 
                value={weitereAufwendungen || ''}
                onChange={(e) => setWeitereAufwendungen(parseFloat(e.target.value) || 0)}
              />
            </div>

            <div className="checkbox-group">
              <input 
                type="checkbox" 
                id="freiberuflich"
                checked={freiberuflich}
                onChange={(e) => setFreiberuflich(e.target.checked)}
              />
              <label htmlFor="freiberuflich">Freiberuflich tätig (keine Gewerbesteuer)</label>
            </div>

            <div className="checkbox-group">
              <input 
                type="checkbox" 
                id="ehegattensplitting"
                checked={ehegattensplitting}
                onChange={(e) => setEhegattensplitting(e.target.checked)}
              />
              <label htmlFor="ehegattensplitting">Ehegattensplitting anwenden</label>
            </div>

            <button type="button" className="calculate-btn" onClick={calculateTax}>
              Steuern berechnen
            </button>
          </form>
        </div>

        <div className="section results">
          <h2>Ergebnisse</h2>
          <div id="results">
            <div className="result-item">
              <h3>Gewinn (Einnahmen - Ausgaben)</h3>
              <div className="value">{formatCurrency(results.gewinn)}</div>
            </div>

            <div className="result-item">
              <h3>KV+PV Beiträge gesamt</h3>
              <div className="value">{formatCurrency(results.kvpvGesamt)}</div>
            </div>

            <div className="result-item">
              <h3>Zu versteuerndes Einkommen</h3>
              <div className="value">{formatCurrency(results.zvEinkommen)}</div>
            </div>

            <div className="result-item">
              <h3>Gewerbesteuer</h3>
              <div className="value">{formatCurrency(results.gewerbesteuer)}</div>
            </div>

            <div className="result-item">
              <h3>Einkommensteuer (nach §35)</h3>
              <div className="value">{formatCurrency(results.einkommensteuer)}</div>
            </div>

            <div className="result-item total-result">
              <h3>Gesamte Steuerlast</h3>
              <div className="value">{formatCurrency(results.gesamtSteuer)}</div>
            </div>
          </div>
        </div>

        <div className="section info-section">
          <h2>Informationen zur Berechnung</h2>
          <ul className="info-list">
            <li>Die Einkommensteuerformel bildet die Grundtabelle 2025 ab (§32a EStG). Bei Ehegattensplitting wird die Splittingtabelle via 2×ESt(zvE/2) verwendet.</li>
            <li>Die Gewerbesteuer nutzt den Freibetrag von 24.500 € und eine Messzahl von 3,5 % (§11 GewStG). Der Hebesatz ist je Kommune wählbar (Köln: 475 %).</li>
            <li>Vereinfachungen: Keine Sonderausgabenpauschalen, keine Kinder-/Kirchensteuer, keine Verlustvorträge, keine gewerbesteuerlichen Hinzurechnungen/Kürzungen.</li>
            <li>Die Anzahl der Monate für KV/PV-Beiträge wird automatisch basierend auf dem Stichtag ermittelt.</li>
            <li>Bei freiberuflicher Tätigkeit wird keine Gewerbesteuer berechnet.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

'use client'

import { useState, useEffect } from 'react'

interface TaxResults {
  gewinn: number
  kvpvGesamt: number
  zvEinkommen: number
  gewerbesteuer: number
  einkommensteuer: number
  gesamtSteuer: number
  auszahlbaresEinkommen: number
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
  const [ruecklage, setRuecklage] = useState(0)
  const [freiberuflich, setFreiberuflich] = useState(false)
  const [ehegattensplitting, setEhegattensplitting] = useState(false)
  
  const [results, setResults] = useState<TaxResults>({
    gewinn: 0,
    kvpvGesamt: 0,
    zvEinkommen: 0,
    gewerbesteuer: 0,
    einkommensteuer: 0,
    gesamtSteuer: 0,
    auszahlbaresEinkommen: 0
  })

  // Aktuelles Datum als Standard setzen
  useEffect(() => {
    const today = new Date()
    setStichtag(today.toISOString().split('T')[0])
  }, [])

  // Euro-Zeichen Animation
  useEffect(() => {
    const sizes = ['small', 'medium', 'large']
    const symbols: HTMLElement[] = []

    const createCurrencySymbol = () => {
      const symbol = document.createElement('div')
      symbol.className = 'currency-symbol'
      symbol.textContent = '€'
      
      // Zufällige Größe
      const size = sizes[Math.floor(Math.random() * sizes.length)]
      symbol.classList.add(size)
      
      // Immer Euro-Farbe (Gold)
      symbol.classList.add('euro')
      
      // Zufällige Startposition
      const startX = Math.random() * window.innerWidth
      const drift = (Math.random() - 0.5) * 200 // Seitliche Bewegung
      
      symbol.style.left = `${startX}px`
      symbol.style.setProperty('--drift', `${drift}px`)
      
      // Zufällige Animationsverzögerung
      symbol.style.animationDelay = `${Math.random() * 5}s`
      
      return symbol
    }

    const addCurrencySymbol = () => {
      const container = document.querySelector('.currency-rain') as HTMLElement
      if (!container) return
      
      const symbol = createCurrencySymbol()
      container.appendChild(symbol)
      symbols.push(symbol)
      
      // Symbol nach Animation entfernen
      const duration = symbol.classList.contains('large') ? 8000 : symbol.classList.contains('medium') ? 12000 : 15000
      setTimeout(() => {
        if (container.contains(symbol)) {
          container.removeChild(symbol)
          const index = symbols.indexOf(symbol)
          if (index > -1) symbols.splice(index, 1)
        }
      }, duration + 5000)
    }

    // Container erstellen
    const rainContainer = document.createElement('div')
    rainContainer.className = 'currency-rain'
    document.body.appendChild(rainContainer)

    // Kollisionserkennung
    const checkCollisions = () => {
      for (let i = 0; i < symbols.length; i++) {
        for (let j = i + 1; j < symbols.length; j++) {
          const symbol1 = symbols[i]
          const symbol2 = symbols[j]
          
          if (!symbol1 || !symbol2) continue
          
          const rect1 = symbol1.getBoundingClientRect()
          const rect2 = symbol2.getBoundingClientRect()
          
          const distance = Math.sqrt(
            Math.pow(rect1.left - rect2.left, 2) + 
            Math.pow(rect1.top - rect2.top, 2)
          )
          
          if (distance < 50) { // Kollision erkannt
            symbol1.style.animation += ', collision-bounce 0.5s ease-in-out'
            symbol2.style.animation += ', collision-bounce 0.5s ease-in-out'
            
            // Animation nach 500ms zurücksetzen
            setTimeout(() => {
              if (symbol1) symbol1.style.animation = symbol1.style.animation.replace(', collision-bounce 0.5s ease-in-out', '')
              if (symbol2) symbol2.style.animation = symbol2.style.animation.replace(', collision-bounce 0.5s ease-in-out', '')
            }, 500)
          }
        }
      }
    }

    // Regelmäßig neue Symbole hinzufügen
    const symbolInterval = setInterval(addCurrencySymbol, 800)
    
    // Kollisionen prüfen
    const collisionInterval = setInterval(checkCollisions, 100)

    // Cleanup
    return () => {
      clearInterval(symbolInterval)
      clearInterval(collisionInterval)
      if (document.body.contains(rainContainer)) {
        document.body.removeChild(rainContainer)
      }
    }
  }, [])

  const getTaxParameters = (year: number) => {
    if (year >= 2026) {
      // Steuerparameter für 2026 (Grundfreibetrag +252€, Eckwerte +2%)
      return {
        gfb: 12348, // +252€ von 2025
        t2e: Math.round(17443 * 1.02), // +2% Verschiebung
        t3e: Math.round(68480 * 1.02), // +2% Verschiebung  
        t4e: Math.round(277825 * 1.02), // +2% Verschiebung
        // Faktoren bleiben gleich, nur Eckwerte verschieben sich
        factor1: 932.3,
        factor2: 1400,
        factor3: 176.64,
        factor4: 2397,
        constant1: 1015.13,
        rate1: 0.42,
        constant2: 10911.92,
        rate2: 0.45,
        constant3: 19246.67
      }
    } else {
      // Steuerparameter für 2025
      return {
        gfb: 12096,
        t2e: 17443,
        t3e: 68480,
        t4e: 277825,
        factor1: 932.3,
        factor2: 1400,
        factor3: 176.64,
        factor4: 2397,
        constant1: 1015.13,
        rate1: 0.42,
        constant2: 10911.92,
        rate2: 0.45,
        constant3: 19246.67
      }
    }
  }

  const calculateEinkommensteuer = (x: number, year: number): number => {
    const params = getTaxParameters(year)

    if (x <= params.gfb) return 0
    
    if (x <= params.t2e) {
      const y = (x - params.gfb) / 10000
      return (params.factor1 * y + params.factor2) * y
    }
    
    if (x <= params.t3e) {
      const z = (x - params.t2e) / 10000
      return (params.factor3 * z + params.factor4) * z + params.constant1
    }
    
    if (x <= params.t4e) {
      return params.rate1 * x - params.constant2
    }
    
    return params.rate2 * x - params.constant3
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

    // Jahr aus Stichtag ermitteln für korrekte Steuerparameter
    const stichtagDate = new Date(stichtag)
    const taxYear = stichtagDate.getFullYear()
    
    // Monate bis Stichtag berechnen
    const startOfYear = new Date(taxYear, 0, 1)
    const monthsUntilStichtag = Math.min(12, Math.max(0, 
      (stichtagDate.getMonth() - startOfYear.getMonth()) + 
      (stichtagDate.getFullYear() - startOfYear.getFullYear()) * 12 + 1
    ))

    // Berechnungen
    const gewinn = einnahmen - ausgaben
    const kvpvGesamt = kvpv * monthsUntilStichtag
    const zvEinkommen = Math.max(0, gewinn - kvpvGesamt - weitereAufwendungen)

    // Einkommensteuer berechnen (§32a EStG) - Jahr-abhängig
    let einkommensteuer = 0
    if (ehegattensplitting || steuerklasse === 3) {
      // Splittingtabelle: 2 × ESt(zvE/2)
      einkommensteuer = 2 * calculateEinkommensteuer(Math.round(zvEinkommen / 2), taxYear)
    } else {
      // Grundtabelle
      einkommensteuer = calculateEinkommensteuer(Math.round(zvEinkommen), taxYear)
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

    // Auszahlbares Einkommen berechnen
    const verfuegbarerBetrag = gewinn - gesamtSteuer - ruecklage
    const auszahlbaresEinkommen = monthsUntilStichtag > 0 ? verfuegbarerBetrag / monthsUntilStichtag : 0

    setResults({
      gewinn,
      kvpvGesamt,
      zvEinkommen,
      gewerbesteuer,
      einkommensteuer: einkommensteuerNachAnrechnung,
      gesamtSteuer,
      auszahlbaresEinkommen
    })
  }

  // Automatische Berechnung bei Eingabeänderungen
  useEffect(() => {
    calculateTax()
  }, [stichtag, steuerklasse, einnahmen, ausgaben, kvpv, hebesatz, freibetrag, weitereAufwendungen, ruecklage, freiberuflich, ehegattensplitting])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Was letzte Steuer? - Steuerrechner Einzelunternehmen",
            "description": "Kostenloser Steuerrechner für Einzelunternehmer 2025/2026. Berechne Einkommensteuer, Gewerbesteuer und auszahlbares Einkommen mit automatischer Jahreserkennung.",
            "url": "https://wasletztesteuer.vercel.app",
            "applicationCategory": "FinanceApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "EUR"
            },
            "author": {
              "@type": "Organization",
              "name": "Was letzte Steuer?"
            },
            "keywords": "Steuerrechner, Einzelunternehmen, Einkommensteuer, Gewerbesteuer, 2025, 2026, Steuern berechnen, Freiberufler, Selbstständige",
            "inLanguage": "de-DE",
            "isAccessibleForFree": true,
            "featureList": [
              "Einkommensteuerberechnung nach §32a EStG",
              "Gewerbesteuerberechnung mit Anrechnung nach §35 EStG", 
              "Automatische Jahreserkennung 2025/2026",
              "Ehegattensplitting",
              "Freiberufler-Modus",
              "Auszahlbares Einkommen mit Rücklage-Planung",
              "Responsive Design",
              "Echtzeitberechnung"
            ]
          })
        }}
      />
      <div className="container">
      <div className="header">
        <h1 className="main-title">Was letzte Steuer?</h1>
        <h2 className="sub-title">Steuerrechner Einzelunternehmen 2025/2026</h2>
        <p>ESt + GewSt nach §32a & §35 EStG</p>
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
                required
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
              <label htmlFor="weitereAufwendungen">Weitere abzugsfähige Aufwendungen (€) <small>(optional)</small></label>
              <input 
                type="number" 
                id="weitereAufwendungen" 
                step="0.01" 
                min="0" 
                value={weitereAufwendungen || ''}
                onChange={(e) => setWeitereAufwendungen(parseFloat(e.target.value) || 0)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="ruecklage">Gewünschte Rücklage (€) <small>(optional)</small></label>
              <input 
                type="number" 
                id="ruecklage" 
                step="0.01" 
                min="0" 
                placeholder="z.B. 10000,00"
                value={ruecklage || ''}
                onChange={(e) => setRuecklage(parseFloat(e.target.value) || 0)}
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

            <div className="result-footnote">
              <h4>Auszahlbares monatliches Einkommen*</h4>
              <div className="footnote-value">
                {formatCurrency(results.auszahlbaresEinkommen)}
                {ruecklage > 0 && results.auszahlbaresEinkommen > 0 && (
                  <span style={{fontSize: '1rem', opacity: 0.8, marginLeft: '10px'}}>
                    (Rücklage hält {Math.round(ruecklage / results.auszahlbaresEinkommen)} Monate)
                  </span>
                )}
              </div>
              <small>* Gewinn minus Steuerlast minus Rücklage, geteilt durch bisherige Monate (bis einschl. Stichtag)</small>
            </div>
          </div>
        </div>

        <div className="section info-section">
          <h2>Informationen zur Berechnung</h2>
          <ul className="info-list">
            <li>Die Einkommensteuerformel bildet die aktuellen Steuertabellen ab (§32a EStG). Für 2025: GFB 12.096€, für 2026: GFB 12.348€ mit 2% Eckwerte-Verschiebung. Bei Ehegattensplitting wird die Splittingtabelle via 2×ESt(zvE/2) verwendet.</li>
            <li>Die Gewerbesteuer nutzt den Freibetrag von 24.500 € und eine Messzahl von 3,5 % (§11 GewStG). Der Hebesatz ist je Kommune wählbar (Köln: 475 %).</li>
            <li>Die Gewerbesteuer wird nach §35 EStG auf die Einkommensteuer angerechnet (maximal das 4-fache des Steuermessbetrags). Dies reduziert die tatsächliche Steuerbelastung erheblich.</li>
            <li>Automatische Jahreserkennung: Das Steuerjahr wird aus dem Stichtag ermittelt und die entsprechenden Steuerparameter verwendet.</li>
            <li>Vereinfachungen: Keine Sonderausgabenpauschalen, keine Kinder-/Kirchensteuer, keine Verlustvorträge, keine gewerbesteuerlichen Hinzurechnungen/Kürzungen.</li>
            <li>Die Anzahl der Monate für KV/PV-Beiträge wird automatisch basierend auf dem Stichtag ermittelt.</li>
            <li>Bei freiberuflicher Tätigkeit wird keine Gewerbesteuer berechnet.</li>
            <li>Das auszahlbare monatliche Einkommen wird berechnet als: (Gewinn - Steuerlast - Rücklage) ÷ bisherige Monate im Jahr bis einschließlich Stichtag.</li>
          </ul>
        </div>
              </div>
      </div>
      
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <a href="/impressum">Impressum</a>
            <span className="separator">|</span>
            <a href="/datenschutz">Datenschutzerklärung</a>
          </div>
          <div className="footer-copyright">
            <p>&copy; 2025 Was letzte Steuer? - Alle Rechte vorbehalten</p>
          </div>
        </div>
      </footer>
    </>
  )
}

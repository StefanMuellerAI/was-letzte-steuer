import Link from 'next/link'

export default function Impressum() {
  return (
    <div className="container">
      <div className="header">
        <h1 className="main-title">Impressum</h1>
        <p>Was letzte Steuer? - Rechtliche Angaben</p>
      </div>

      <div className="content">
        <div className="section" style={{gridColumn: '1 / -1'}}>
          <h2>Angaben gemäß § 5 TMG</h2>
          
          <div style={{marginBottom: '30px'}}>
            <h3 style={{color: 'rgba(255, 215, 0, 0.9)', marginBottom: '15px'}}>Verantwortlich für den Inhalt:</h3>
            <p style={{color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.6', marginBottom: '20px'}}>
              Stefan Müller<br/>
              StefanAI - Research & Development<br/>
              Graeffstr. 22<br/>
              50823 Köln<br/>
              Deutschland
            </p>
          </div>

          <div style={{marginBottom: '30px'}}>
            <h3 style={{color: 'rgba(255, 215, 0, 0.9)', marginBottom: '15px'}}>Kontakt:</h3>
            <p style={{color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.6', marginBottom: '20px'}}>
              Telefon: 0221/5702984<br/>
              E-Mail: info@stefanai.de
            </p>
          </div>

          <div style={{marginBottom: '30px'}}>
            <h3 style={{color: 'rgba(255, 215, 0, 0.9)', marginBottom: '15px'}}>Umsatzsteuer-ID:</h3>
            <p style={{color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.6', marginBottom: '20px'}}>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br/>
              DE347707954
            </p>
          </div>

          <div style={{marginBottom: '30px'}}>
            <h3 style={{color: 'rgba(255, 215, 0, 0.9)', marginBottom: '15px'}}>Redaktionell verantwortlich:</h3>
            <p style={{color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.6', marginBottom: '20px'}}>
              Stefan Müller<br/>
              Graeffstr. 22<br/>
              50823 Köln
            </p>
          </div>

          <div style={{marginBottom: '30px'}}>
            <h3 style={{color: 'rgba(255, 215, 0, 0.9)', marginBottom: '15px'}}>EU-Streitschlichtung:</h3>
            <p style={{color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', marginBottom: '15px'}}>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" style={{color: 'rgba(255, 215, 0, 0.9)', textDecoration: 'underline'}} target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>.<br/>
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </div>

          <div style={{marginBottom: '30px'}}>
            <h3 style={{color: 'rgba(255, 215, 0, 0.9)', marginBottom: '15px'}}>Verbraucherstreitbeilegung/Universalschlichtungsstelle:</h3>
            <p style={{color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', marginBottom: '15px'}}>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <div style={{marginBottom: '30px'}}>
            <h3 style={{color: 'rgba(255, 215, 0, 0.9)', marginBottom: '15px'}}>Haftungsausschluss:</h3>
            
            <h4 style={{color: 'rgba(255, 215, 0, 0.9)', marginTop: '20px', marginBottom: '10px'}}>Haftung für Inhalte</h4>
            <p style={{color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', marginBottom: '15px'}}>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
            </p>

            <h4 style={{color: 'rgba(255, 215, 0, 0.9)', marginTop: '20px', marginBottom: '10px'}}>Steuerberatung</h4>
            <p style={{color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', marginBottom: '15px'}}>
              <strong>Wichtiger Hinweis:</strong> Dieser Steuerrechner dient ausschließlich der groben Orientierung und stellt keine Steuerberatung dar. Die berechneten Werte sind näherungsweise und ersetzen nicht die Beratung durch einen qualifizierten Steuerberater oder die Berechnung durch das Finanzamt. Für verbindliche Steuerberechnungen wenden Sie sich bitte an einen Steuerberater oder das zuständige Finanzamt.
            </p>

            <h4 style={{color: 'rgba(255, 215, 0, 0.9)', marginTop: '20px', marginBottom: '10px'}}>Haftung für Links</h4>
            <p style={{color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', marginBottom: '15px'}}>
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>

            <h4 style={{color: 'rgba(255, 215, 0, 0.9)', marginTop: '20px', marginBottom: '10px'}}>Urheberrecht</h4>
            <p style={{color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', marginBottom: '15px'}}>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>

          <div style={{marginTop: '40px', textAlign: 'center'}}>
            <Link 
              href="/" 
              style={{
                color: 'rgba(255, 215, 0, 0.9)',
                textDecoration: 'none',
                padding: '10px 20px',
                border: '2px solid rgba(255, 215, 0, 0.3)',
                borderRadius: '10px',
                transition: 'all 0.3s ease'
              }}
            >
              ← Zurück zum Steuerrechner
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

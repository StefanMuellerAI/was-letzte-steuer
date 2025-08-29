import Link from 'next/link'

export default function Datenschutz() {
  return (
    <div className="container">
      <div className="header">
        <h1 className="main-title">Datenschutzerklärung</h1>
        <p>Was letzte Steuer? - Datenschutz und Privatsphäre</p>
      </div>

      <div className="content">
        <div className="section" style={{gridColumn: '1 / -1'}}>
          <h2>Datenschutzerklärung</h2>
          
          <div style={{marginBottom: '30px'}}>
            <h3 style={{color: 'rgba(255, 215, 0, 0.9)', marginBottom: '15px'}}>1. Datenschutz auf einen Blick</h3>
            
            <h4 style={{color: 'rgba(255, 215, 0, 0.9)', marginTop: '20px', marginBottom: '10px'}}>Allgemeine Hinweise</h4>
            <p style={{color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', marginBottom: '15px'}}>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>

            <h4 style={{color: 'rgba(255, 215, 0, 0.9)', marginTop: '20px', marginBottom: '10px'}}>Datenerfassung auf dieser Website</h4>
            <p style={{color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', marginBottom: '15px'}}>
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br/>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>

            <p style={{color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', marginBottom: '15px'}}>
              <strong>Wie erfassen wir Ihre Daten?</strong><br/>
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in den Steuerrechner eingeben. Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
            </p>
          </div>

          <div style={{marginBottom: '30px'}}>
            <h3 style={{color: 'rgba(255, 215, 0, 0.9)', marginBottom: '15px'}}>2. Hosting und Content Delivery Networks (CDN)</h3>
            
            <h4 style={{color: 'rgba(255, 215, 0, 0.9)', marginTop: '20px', marginBottom: '10px'}}>Vercel</h4>
            <p style={{color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', marginBottom: '15px'}}>
              Diese Website wird auf Servern von Vercel Inc. gehostet. Anbieter ist Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.
            </p>
            <p style={{color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', marginBottom: '15px'}}>
              Vercel erfasst in sog. Logfiles folgende Daten: IP-Adresse, Datum und Uhrzeit der Anfrage, Zeitzonendifferenz zur Greenwich Mean Time (GMT), Inhalt der Anforderung, HTTP-Statuscode, übertragene Datenmenge, Website, von der die Anforderung kommt und Informationen zu Browser und Betriebssystem.
            </p>
            <p style={{color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', marginBottom: '15px'}}>
              Die Verwendung von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website.
            </p>
          </div>

          <div style={{marginBottom: '30px'}}>
            <h3 style={{color: 'rgba(255, 215, 0, 0.9)', marginBottom: '15px'}}>3. Allgemeine Hinweise und Pflichtinformationen</h3>
            
            <h4 style={{color: 'rgba(255, 215, 0, 0.9)', marginTop: '20px', marginBottom: '10px'}}>Datenschutz</h4>
            <p style={{color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', marginBottom: '15px'}}>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzbestimmungen sowie dieser Datenschutzerklärung.
            </p>

            <h4 style={{color: 'rgba(255, 215, 0, 0.9)', marginTop: '20px', marginBottom: '10px'}}>Lokale Datenverarbeitung</h4>
            <p style={{color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', marginBottom: '15px'}}>
              <strong>Wichtiger Hinweis:</strong> Alle Berechnungen des Steuerrechners erfolgen lokal in Ihrem Browser. Die von Ihnen eingegebenen Steuerdaten (Einnahmen, Ausgaben, etc.) werden nicht an unsere Server übertragen oder gespeichert. Ihre Eingaben bleiben vollständig auf Ihrem Gerät.
            </p>

            <h4 style={{color: 'rgba(255, 215, 0, 0.9)', marginTop: '20px', marginBottom: '10px'}}>Ihre Rechte</h4>
            <p style={{color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', marginBottom: '15px'}}>
              Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen.
            </p>
          </div>

          <div style={{marginBottom: '30px'}}>
            <h3 style={{color: 'rgba(255, 215, 0, 0.9)', marginBottom: '15px'}}>4. Datenerfassung auf dieser Website</h3>
            
            <h4 style={{color: 'rgba(255, 215, 0, 0.9)', marginTop: '20px', marginBottom: '10px'}}>Server-Log-Dateien</h4>
            <p style={{color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', marginBottom: '15px'}}>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul style={{color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', marginLeft: '20px', marginBottom: '15px'}}>
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p style={{color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', marginBottom: '15px'}}>
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
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

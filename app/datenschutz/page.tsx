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
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
            </p>

            <h4 style={{color: 'rgba(255, 215, 0, 0.9)', marginTop: '20px', marginBottom: '10px'}}>Datenerfassung auf dieser Website</h4>
            <p style={{color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', marginBottom: '15px'}}>
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br/>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
            </p>

            <p style={{color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', marginBottom: '15px'}}>
              <strong>Wie erfassen wir Ihre Daten?</strong><br/>
              Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
            </p>

            <p style={{color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', marginBottom: '15px'}}>
              <strong>Wofür nutzen wir Ihre Daten?</strong><br/>
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten.
            </p>

            <p style={{color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', marginBottom: '15px'}}>
              <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br/>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
            </p>
          </div>

          <div style={{marginBottom: '30px'}}>
            <h3 style={{color: 'rgba(255, 215, 0, 0.9)', marginBottom: '15px'}}>2. Hosting</h3>
            <p style={{color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', marginBottom: '15px'}}>
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
            </p>
            
            <h4 style={{color: 'rgba(255, 215, 0, 0.9)', marginTop: '20px', marginBottom: '10px'}}>Vercel</h4>
            <p style={{color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', marginBottom: '15px'}}>
              Anbieter ist Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. Wenn Sie unsere Website besuchen, erfasst Vercel verschiedene Logfiles inklusive Ihrer IP-Adressen.
            </p>
            <p style={{color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', marginBottom: '15px'}}>
              Die Verwendung von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website.
            </p>
            
            <h4 style={{color: 'rgba(255, 215, 0, 0.9)', marginTop: '20px', marginBottom: '10px'}}>Auftragsverarbeitung</h4>
            <p style={{color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', marginBottom: '15px'}}>
              Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.
            </p>
          </div>

          <div style={{marginBottom: '30px'}}>
            <h3 style={{color: 'rgba(255, 215, 0, 0.9)', marginBottom: '15px'}}>3. Allgemeine Hinweise und Pflichtinformationen</h3>
            
            <h4 style={{color: 'rgba(255, 215, 0, 0.9)', marginTop: '20px', marginBottom: '10px'}}>Datenschutz</h4>
            <p style={{color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', marginBottom: '15px'}}>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p style={{color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', marginBottom: '15px'}}>
              Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen.
            </p>
            <p style={{color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', marginBottom: '15px'}}>
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
            </p>

            <h4 style={{color: 'rgba(255, 215, 0, 0.9)', marginTop: '20px', marginBottom: '10px'}}>Hinweis zur verantwortlichen Stelle</h4>
            <p style={{color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', marginBottom: '15px'}}>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p style={{color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.6', marginBottom: '15px'}}>
              Stefan Müller<br/>
              Graeffstr. 22<br/>
              50823 Köln<br/><br/>
              Telefon: 0221/5702984<br/>
              E-Mail: info@stefanai.de
            </p>
            <p style={{color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', marginBottom: '15px'}}>
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
            </p>

            <h4 style={{color: 'rgba(255, 215, 0, 0.9)', marginTop: '20px', marginBottom: '10px'}}>Lokale Datenverarbeitung</h4>
            <p style={{color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', marginBottom: '15px'}}>
              <strong>Wichtiger Hinweis:</strong> Alle Berechnungen des Steuerrechners erfolgen lokal in Ihrem Browser. Die von Ihnen eingegebenen Steuerdaten (Einnahmen, Ausgaben, etc.) werden nicht an unsere Server übertragen oder gespeichert. Ihre Eingaben bleiben vollständig auf Ihrem Gerät.
            </p>

            <h4 style={{color: 'rgba(255, 215, 0, 0.9)', marginTop: '20px', marginBottom: '10px'}}>SSL- bzw. TLS-Verschlüsselung</h4>
            <p style={{color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', marginBottom: '15px'}}>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
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
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
            </p>
            <p style={{color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', marginBottom: '15px'}}>
              Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.
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

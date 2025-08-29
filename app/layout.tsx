import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Was letzte Steuer? - Steuerrechner Einzelunternehmen 2025/2026',
  description: 'Kostenloser Steuerrechner für Einzelunternehmer 2025/2026. Berechne Einkommensteuer, Gewerbesteuer und auszahlbares Einkommen. Mit automatischer Jahreserkennung und aktuellen Steuersätzen.',
  keywords: 'Steuerrechner, Einzelunternehmen, Einkommensteuer, Gewerbesteuer, 2025, 2026, Steuern berechnen, Freiberufler, Selbstständige',
  authors: [{ name: 'Was letzte Steuer?' }],
  creator: 'Was letzte Steuer?',
  publisher: 'Was letzte Steuer?',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://wasletztesteuer.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Was letzte Steuer? - Steuerrechner Einzelunternehmen 2025/2026',
    description: 'Kostenloser Steuerrechner für Einzelunternehmer 2025/2026. Berechne Einkommensteuer, Gewerbesteuer und auszahlbares Einkommen.',
    url: 'https://wasletztesteuer.vercel.app',
    siteName: 'Was letzte Steuer?',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Was letzte Steuer? - Steuerrechner für Einzelunternehmen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Was letzte Steuer? - Steuerrechner Einzelunternehmen 2025/2026',
    description: 'Kostenloser Steuerrechner für Einzelunternehmer 2025/2026. Berechne Einkommensteuer, Gewerbesteuer und auszahlbares Einkommen.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}

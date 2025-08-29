import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Steuerrechner 2025 - Einzelunternehmen',
  description: 'Steuerrechner für Einzelunternehmen mit Einkommensteuer und Gewerbesteuer nach §32a & §35 EStG',
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

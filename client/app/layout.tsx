import '../assets/styles/globals.css'

import { League_Spartan } from '@next/font/google'

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  variable: '--font-leagueSpartan',
  weight: ['500', '700'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={`${leagueSpartan.variable} font-sans`}>
      <head />
      <body>{children}</body>
    </html>
  )
}

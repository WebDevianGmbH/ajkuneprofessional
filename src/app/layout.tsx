import { Inter } from "next/font/google"
import "./globals.css"
import { MobileNav } from "@/components/ui/mobile-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: 'Ajkune Professional GmbH',
  description: 'Ihr Unvergleichliches Haarerlebnis',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        {children}
        <MobileNav />
      </body>
    </html>
  )
}

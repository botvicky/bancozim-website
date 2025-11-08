import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BancoZim - Quality Homeware Solutions",
  description:
    "To increase our customer's quality of life through the delivery of superior, modern homeware and allied products. Market leader in on-credit homeware solutions in Zimbabwe.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased bg-white text-foreground`}>
        <Navigation />
        {children}
        <Footer />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}

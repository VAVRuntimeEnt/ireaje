import type React from "react"
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface"
import { Space_Grotesk, Manrope } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BackgroundPaths from "@/components/background-paths"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
})

export const metadata: Metadata = {
  title: "IREAJE.NET | Arquitetura para sistemas que respeitam",
  description: "Não consertamos o existente. Fazemos nascer algo novo.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${manrope.variable} ${spaceGrotesk.variable} font-sans bg-white`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {/* Novo fundo animado */}
          <BackgroundPaths />

          <div className="flex min-h-screen flex-col relative z-10">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

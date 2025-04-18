import type React from "react"
import "@/app/globals.css"
import { Lato } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
})

export const metadata = {
  title: "What More - A Premium Career Community for Finance Leaders",
  description:
    "Join our exclusive community for finance professionals navigating leadership, transitions, growth, and personal branding.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${lato.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

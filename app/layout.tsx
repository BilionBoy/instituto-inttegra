import type React from "react"
import { Navbar } from "@/components/Navbar"
import { SiteFooter } from "@/components/site-footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Montserrat } from "next/font/google"
import "@/app/globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata = {
  title: "Instituto Inttegra | Saúde Integrada",
  description: "Transformando saúde em liberdade através de uma abordagem personalizada e baseada em ciência.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <body className="font-sans bg-[#0a0a0a]">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          <main>{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
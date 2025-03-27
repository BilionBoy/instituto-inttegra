import type React from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/site-footer";
import { EcosystemProvider } from "@/components/ecosystem/ecosystem-provider";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Instituto Inttegra | Saúde Integrada",
  description:
    "Transformando saúde em liberdade através de uma abordagem personalizada e baseada em ciência.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${montserrat.variable} font-sans bg-[#0a0a0a] text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <EcosystemProvider>
            <Navbar />
            <main>{children}</main>
            <SiteFooter />
          </EcosystemProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

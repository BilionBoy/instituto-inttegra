"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0a0a0a]/80 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-light tracking-wider text-white">
            INSTITUTO <span className="font-medium text-[#d4af37]">INTTEGRA</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-10">
          <Link href="/sobre" className="text-sm text-white/80 hover:text-[#d4af37] transition-colors">
            Sobre
          </Link>
          <Link href="/servicos" className="text-sm text-white/80 hover:text-[#d4af37] transition-colors">
            Serviços
          </Link>
          <Link href="/eventos" className="text-sm text-white/80 hover:text-[#d4af37] transition-colors">
            Eventos
          </Link>
          <Link href="/blog" className="text-sm text-white/80 hover:text-[#d4af37] transition-colors">
            Blog
          </Link>
          <Link href="/contato" className="text-sm text-white/80 hover:text-[#d4af37] transition-colors">
            Contato
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button className="bg-[#d4af37] hover:bg-[#f5e7a0] hover:text-[#0a0a0a] text-[#0a0a0a] font-medium rounded-none">
            <span className="text-sm">Agendar Consulta</span>
          </Button>

          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="text-white">
              <span className="sr-only">Selecionar idioma</span>
              <span className="flex items-center">
                <span className="mr-1">🇧🇷</span>
                <ChevronDown size={14} className="text-[#d4af37]" />
              </span>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6 text-white" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-[#0a0a0a] text-white border-[#d4af37]/20">
              <div className="flex flex-col space-y-4 mt-8">
                <Link href="/sobre" className="text-lg font-medium py-2 hover:text-[#d4af37]">
                  Sobre
                </Link>
                <Link href="/servicos" className="text-lg font-medium py-2 hover:text-[#d4af37]">
                  Serviços
                </Link>
                <Link href="/eventos" className="text-lg font-medium py-2 hover:text-[#d4af37]">
                  Eventos
                </Link>
                <Link href="/blog" className="text-lg font-medium py-2 hover:text-[#d4af37]">
                  Blog
                </Link>
                <Link href="/contato" className="text-lg font-medium py-2 hover:text-[#d4af37]">
                  Contato
                </Link>
                <Button className="bg-[#d4af37] hover:bg-[#f5e7a0] hover:text-[#0a0a0a] text-[#0a0a0a] font-medium w-full mt-4 rounded-none">
                  Agendar Consulta
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}


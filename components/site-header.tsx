"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState, useEffect } from "react"

export function SiteHeader() {
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
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-[#0d1117]/80 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5",
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo-white.png"
            alt="Instituto Inttegra"
            width={150}
            height={60}
            className="transition-opacity duration-300"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <Link href="/sobre" legacyBehavior passHref>
                  <NavigationMenuLink className="px-4 py-2 rounded-full transition-all duration-300 font-medium text-white hover:bg-gradient-to-r hover:from-[#b8860b]/20 hover:via-[#ffd700]/20 hover:to-[#b8860b]/20 backdrop-blur-sm shadow-[0_0_10px_rgba(255,255,255,0.2)] hover:shadow-[0_0_15px_rgba(255,215,0,0.3)]">
                    Sobre
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/servicos" legacyBehavior passHref>
                  <NavigationMenuLink className="px-4 py-2 rounded-full transition-all duration-300 font-medium text-white hover:bg-gradient-to-r hover:from-[#b8860b]/20 hover:via-[#ffd700]/20 hover:to-[#b8860b]/20 backdrop-blur-sm shadow-[0_0_10px_rgba(255,255,255,0.2)] hover:shadow-[0_0_15px_rgba(255,215,0,0.3)]">
                    Serviços
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/eventos" legacyBehavior passHref>
                  <NavigationMenuLink className="px-4 py-2 rounded-full transition-all duration-300 font-medium text-white hover:bg-gradient-to-r hover:from-[#b8860b]/20 hover:via-[#ffd700]/20 hover:to-[#b8860b]/20 backdrop-blur-sm shadow-[0_0_10px_rgba(255,255,255,0.2)] hover:shadow-[0_0_15px_rgba(255,215,0,0.3)]">
                    Eventos
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink className="px-4 py-2 rounded-full transition-all duration-300 font-medium text-white hover:bg-gradient-to-r hover:from-[#b8860b]/20 hover:via-[#ffd700]/20 hover:to-[#b8860b]/20 backdrop-blur-sm shadow-[0_0_10px_rgba(255,255,255,0.2)] hover:shadow-[0_0_15px_rgba(255,215,0,0.3)]">
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contato" legacyBehavior passHref>
                  <NavigationMenuLink className="px-4 py-2 rounded-full transition-all duration-300 font-medium text-white hover:bg-gradient-to-r hover:from-[#b8860b]/20 hover:via-[#ffd700]/20 hover:to-[#b8860b]/20 backdrop-blur-sm shadow-[0_0_10px_rgba(255,255,255,0.2)] hover:shadow-[0_0_15px_rgba(255,215,0,0.3)]">
                    Contato
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button className="bg-gradient-to-r from-[#b8860b] via-[#ffd700] to-[#b8860b] hover:bg-gradient-to-r hover:from-[#d4af37] hover:via-[#ffd700] hover:to-[#d4af37] text-[#0d1117] font-bold ml-4 rounded-full border border-[#ffd700]/30 shadow-[0_0_15px_rgba(255,215,0,0.4)]">
            Agendar Consulta
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6 text-white" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
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
              <Button className="bg-gradient-to-r from-[#b8860b] via-[#ffd700] to-[#b8860b] hover:bg-gradient-to-r hover:from-[#d4af37] hover:via-[#ffd700] hover:to-[#d4af37] text-[#0d1117] font-bold w-full mt-4 rounded-full border border-[#ffd700]/30">
                Agendar Consulta
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}


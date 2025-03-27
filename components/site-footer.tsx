import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-[#d4af37]/20">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-light tracking-wider">
              INSTITUTO <span className="font-medium text-[#d4af37]">INTTEGRA</span>
            </h3>
            <p className="text-white/70">
              Transformando saúde em liberdade através de uma abordagem personalizada e baseada em ciência.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link
                href="https://instagram.com/draalinezago"
                className="text-white/70 hover:text-[#d4af37] transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://facebook.com" className="text-white/70 hover:text-[#d4af37] transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://youtube.com" className="text-white/70 hover:text-[#d4af37] transition-colors">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6 text-white">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/sobre" className="text-white/70 hover:text-[#d4af37] transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-white/70 hover:text-[#d4af37] transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/eventos" className="text-white/70 hover:text-[#d4af37] transition-colors">
                  Eventos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/70 hover:text-[#d4af37] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-white/70 hover:text-[#d4af37] transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6 text-white">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-0.5 text-[#d4af37]" />
                <span className="text-white/70">
                  Av. Principal, 123
                  <br />
                  Centro, Cidade - Estado
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-[#d4af37]" />
                <span className="text-white/70">(00) 00000-0000</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-[#d4af37]" />
                <span className="text-white/70">contato@institutointtegra.com.br</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6 text-white">Newsletter</h3>
            <p className="text-white/70 mb-4">Receba dicas de saúde e bem-estar diretamente no seu e-mail.</p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Seu e-mail"
                className="bg-[#0a0a0a] border-[#d4af37]/20 text-white placeholder:text-white/40 focus:border-[#d4af37]"
              />
              <Button className="w-full bg-[#d4af37] hover:bg-[#f5e7a0] hover:text-[#0a0a0a] text-[#0a0a0a] font-medium rounded-none">
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-[#d4af37]/10 mt-16 pt-8 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} Instituto Inttegra. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}


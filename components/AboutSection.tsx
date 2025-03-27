"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutSection() {
  const specializations = [
    "Obesidade e Emagrecimento",
    "Terapia de Reposição Hormonal",
    "Performance Esportiva",
    "Longevidade",
    "Lipedema",
  ]

  return (
    <section className="py-24 bg-[#0a0a0a] relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/doctor-1.jpg" alt="Instituto Inttegra" fill className="object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-[600px] overflow-hidden shadow-[0_0_30px_rgba(212,175,55,0.2)]">
              <Image
                src="/images/doctor-1.jpg"
                alt="Dra. Aline Zago"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#d4af37]/10 transform-gpu transition-all duration-700 hover:translate-x-2 hover:translate-y-2"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-[#d4af37]/10 transform-gpu transition-all duration-700 hover:translate-x-[-2px] hover:translate-y-[-2px]"></div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#d4af37]/20 px-4 py-1.5 rounded-none mb-6 backdrop-blur-sm">
              <span className="text-[#d4af37] text-sm font-medium uppercase tracking-wider">
                Nossa Diretora Clínica
              </span>
            </div>
            <h2 className="text-4xl font-light mb-6 text-white transform-gpu transition-all duration-500 hover:translate-x-1">
              DRA. ALINE ZAGO
              <span className="block text-lg font-light text-[#d4af37] mt-1">MÉDICA | CRM-RO 4.370</span>
            </h2>
            <p className="text-white/80 mb-6 text-lg leading-relaxed transform-gpu transition-all duration-500 hover:translate-y-[-2px] font-light">
              Especialista em emagrecimento, longevidade e lipedema, a Dra. Aline Zago lidera o Instituto Inttegra com
              uma visão inovadora sobre saúde integrada e medicina personalizada.
            </p>
            <p className="text-white/80 mb-8 text-lg leading-relaxed transform-gpu transition-all duration-500 hover:translate-y-[-2px] font-light">
              Com formação internacional e constante atualização científica, ela desenvolve protocolos que unem o melhor
              da medicina tradicional com abordagens complementares, sempre baseados em evidências e personalizados para
              cada paciente.
            </p>
            <h3 className="text-xl font-light mb-4 text-white">Áreas de especialização:</h3>
            <ul className="space-y-3 mb-10">
              {specializations.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-3 transform-gpu transition-all duration-300 hover:translate-x-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <span className="h-px w-6 bg-[#d4af37]"></span>
                  <span className="text-lg font-light text-white/90">{item}</span>
                </motion.li>
              ))}
            </ul>
            <Button className="bg-[#d4af37] hover:bg-[#f5e7a0] hover:text-[#0a0a0a] text-[#0a0a0a] rounded-none">
              Conheça nossa equipe
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


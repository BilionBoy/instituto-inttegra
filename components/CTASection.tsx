"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function CTASection() {
  return (
    <section className="py-24 bg-[#0a0a0a] text-white relative border-t border-[#d4af37]/10">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/clinic-1.jpg" alt="Instituto Inttegra" fill className="object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]"></div>

        {/* Decorative elements - gold capsules/pills */}
        <motion.div
          className="absolute top-[15%] right-[10%] w-[300px] h-[80px] rounded-full bg-gradient-to-r from-[#d4af37] to-[#f5e7a0] blur-[2px] opacity-20"
          animate={{
            x: [0, 20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-[20%] left-[15%] w-[400px] h-[90px] rounded-full bg-gradient-to-r from-[#f5e7a0] to-[#d4af37] blur-[2px] opacity-15"
          animate={{
            x: [0, -30, 0],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-[#d4af37]/20 px-4 py-1.5 rounded-none mb-6 backdrop-blur-sm">
            <span className="text-[#d4af37] text-sm font-medium uppercase tracking-wider">Comece sua jornada</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 transform-gpu transition-all duration-500 hover:translate-y-[-3px]">
            Transforme sua saúde com o <span className="text-[#d4af37] font-medium">Instituto Inttegra</span>
          </h2>
          <p className="text-white/80 mb-10 text-xl transform-gpu transition-all duration-500 hover:translate-y-[-3px] font-light">
            Agende sua consulta e dê o primeiro passo em direção a uma vida com mais saúde, energia e bem-estar. Nossa
            equipe está pronta para guiar você nessa jornada.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-[#d4af37] hover:bg-[#f5e7a0] hover:text-[#0a0a0a] text-[#0a0a0a] font-medium px-10 py-6 text-lg rounded-none transition-all duration-300 transform-gpu hover:translate-y-[-5px]">
              Agendar Consulta
            </Button>
            <Button
              variant="outline"
              className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37]/5 px-10 py-6 text-lg rounded-none transform-gpu transition-all duration-300 hover:translate-y-[-5px]"
            >
              Fale Conosco
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


"use client"

import { Calendar, MapPin, Users } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface Event {
  title: string
  date: string
  location?: string
  image?: string
}

interface UpcomingEventsProps {
  events?: Event[]
}

export default function UpcomingEvents({ events }: UpcomingEventsProps) {
  const defaultEvents: Event[] = [
    {
      title: "Congresso de Nutrição Funcional",
      date: "15-17 Junho, 2025",
      location: "Centro de Convenções, São Paulo",
      image: "/images/conference-1.jpg",
    },
    {
      title: "Workshop de Lipedema",
      date: "20 Maio, 2025",
      location: "Online",
      image: "/images/workshop-1.jpg",
    },
    {
      title: "Palestra sobre Hormônios",
      date: "8 Abril, 2025",
      location: "Hotel Grand Mercure, Rio de Janeiro",
      image: "/images/event-1.jpg",
    },
    {
      title: "Simpósio de Longevidade",
      date: "10-12 Agosto, 2025",
      location: "Centro de Eventos, Brasília",
      image: "/images/conference-1.jpg",
    },
  ]

  const displayEvents = events || defaultEvents

  return (
    <section className="py-24 bg-[#0a0a0a] relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/event-collage.png" alt="Instituto Inttegra" fill className="object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 bg-[#d4af37]/20 px-4 py-1.5 rounded-none mb-6 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#d4af37] text-sm font-medium uppercase tracking-wider">Eventos e Conteúdos</span>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-light text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Conhecimento que <span className="text-[#d4af37] font-medium">transforma</span>
          </motion.h2>
          <motion.div
            className="w-20 h-px bg-[#d4af37] mx-auto mt-6 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
          <motion.p
            className="text-white/80 mt-4 max-w-2xl mx-auto text-lg md:text-xl font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Os principais eventos, cursos, certificações e mentorias para profissionais e pacientes.
          </motion.p>
        </div>

        {/* Featured Event */}
        <motion.div
          className="relative px-4 md:px-8 lg:px-12 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative overflow-hidden shadow-[0_0_30px_rgba(212,175,55,0.2)]">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-[300px] lg:h-auto">
                <Image
                  src="/images/conference-1.jpg"
                  alt="Congresso de Nutrição Funcional"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/70 to-transparent lg:hidden"></div>
              </div>
              <div className="bg-[#0a0a0a] text-white p-8 lg:p-12 relative border-t lg:border-t-0 lg:border-l border-[#d4af37]/20">
                <div className="absolute top-0 right-0 mt-6 mr-6">
                  <span className="bg-[#d4af37] text-[#0a0a0a] px-3 py-1 rounded-none text-xs uppercase tracking-wider font-light">
                    Destaque
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Calendar size={18} className="text-[#d4af37]" />
                  <span className="text-white/80 font-light">15-17 Junho, 2025</span>
                </div>
                <h3 className="text-3xl font-light mb-4">Congresso de Nutrição Funcional</h3>
                <p className="text-white/80 mb-6 text-lg font-light">
                  O maior evento de nutrição funcional do Brasil, com palestrantes internacionais e workshops práticos.
                  Três dias de imersão com os maiores especialistas da área.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-[#d4af37]/10 flex items-center justify-center mr-3 mt-1">
                      <Users size={18} className="text-[#d4af37]" />
                    </div>
                    <div>
                      <h4 className="font-medium">Participantes</h4>
                      <p className="text-white/70 font-light">Mais de 500 profissionais</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-[#d4af37]/10 flex items-center justify-center mr-3 mt-1">
                      <MapPin size={18} className="text-[#d4af37]" />
                    </div>
                    <div>
                      <h4 className="font-medium">Local</h4>
                      <p className="text-white/70 font-light">Centro de Convenções, São Paulo</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-[#d4af37] hover:bg-[#f5e7a0] hover:text-[#0a0a0a] text-[#0a0a0a] rounded-none">
                    Inscreva-se agora
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37]/5 rounded-none"
                  >
                    Mais informações
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Image Collage with Minimal Effects */}
        <div className="relative px-4 md:px-8 lg:px-12 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {displayEvents.map((event, index) => (
              <motion.div
                key={index}
                className={`${index === 0 ? "col-span-2 row-span-2" : "col-span-2 md:col-span-1"} group relative overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 opacity-70"></div>
                <Image
                  src={event.image || "/placeholder.svg?height=400&width=600"}
                  alt={event.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform-gpu transition-all duration-500 group-hover:translate-y-[-5px]">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar size={16} className="text-[#d4af37]" />
                    <span className="text-white/80 text-sm font-light">{event.date}</span>
                  </div>
                  <h3 className={`${index === 0 ? "text-2xl" : "text-lg"} font-light text-white mb-2`}>
                    {event.title}
                  </h3>
                  {index === 0 && (
                    <p className="text-white/80 mb-4 line-clamp-2 font-light">
                      O maior evento de nutrição funcional do Brasil, com palestrantes internacionais e workshops
                      práticos.
                    </p>
                  )}
                  {index === 0 && (
                    <Button className="bg-[#d4af37] hover:bg-[#f5e7a0] hover:text-[#0a0a0a] text-[#0a0a0a] rounded-none text-sm">
                      Inscreva-se
                    </Button>
                  )}
                  {event.location && index !== 0 && (
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-[#d4af37]" />
                      <span className="text-white/80 text-xs font-light">{event.location}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button className="bg-[#d4af37] hover:bg-[#f5e7a0] hover:text-[#0a0a0a] text-[#0a0a0a] font-medium rounded-none px-8">
            Ver todos os eventos
          </Button>
        </div>
      </div>
    </section>
  )
}


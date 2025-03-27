"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Users, Award, Clock, ArrowRight, Sparkles, Shield, Heart } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      title: "Consultas Médicas Especializadas",
      description:
        "Atendimento individualizado com foco nas suas necessidades específicas, criando um plano de tratamento sob medida.",
      icon: <Users size={20} className="text-[#d4af37]" />,
      image: "/images/doctor-1.jpg",
      link: "/servicos/consultas",
    },
    {
      title: "Consultoria Especializada",
      description:
        "Orientação profissional para casos complexos, com acompanhamento contínuo e ajustes personalizados.",
      icon: <Award size={20} className="text-[#d4af37]" />,
      image: "/images/clinic-1.jpg",
      link: "/servicos/consultoria",
    },
    {
      title: "Programas de Longevidade",
      description:
        "Estratégias baseadas em ciência para melhorar sua qualidade de vida e promover o envelhecimento saudável.",
      icon: <Clock size={20} className="text-[#d4af37]" />,
      image: "/images/wellness-1.jpg",
      link: "/servicos/longevidade",
    },
    {
      title: "Tratamento de Lipedema",
      description:
        "Diagnóstico preciso e tratamento especializado para lipedema, com abordagem multidisciplinar e personalizada.",
      icon: <Heart size={20} className="text-[#d4af37]" />,
      image: "/images/nutrition-1.jpg",
      link: "/servicos/lipedema",
    },
    {
      title: "Terapia Hormonal",
      description:
        "Reequilíbrio hormonal personalizado para homens e mulheres, melhorando energia, humor e qualidade de vida.",
      icon: <Sparkles size={20} className="text-[#d4af37]" />,
      image: "/images/hormone-1.jpg",
      link: "/servicos/hormonios",
    },
    {
      title: "Nutrição Funcional",
      description:
        "Abordagem nutricional personalizada que considera sua bioquímica individual e objetivos específicos de saúde.",
      icon: <Shield size={20} className="text-[#d4af37]" />,
      image: "/images/nutrition-1.jpg",
      link: "/servicos/nutricao",
    },
  ]

  return (
    <section className="py-24 bg-[#0a0a0a] relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/clinic-1.jpg" alt="Instituto Inttegra" fill className="object-cover opacity-15" />
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
            <span className="text-[#d4af37] text-sm font-medium uppercase tracking-wider">Nossos Serviços</span>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-light text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Soluções <span className="text-[#d4af37] font-medium">personalizadas</span> para sua saúde
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
            Conheça os serviços especializados do Instituto Inttegra para ajudar você a alcançar seus objetivos de saúde
            e bem-estar.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 z-0">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]/50"></div>
              </div>
              <div className="relative z-10 p-6 h-full flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  {service.icon}
                  <h3 className="text-xl font-light text-white">{service.title}</h3>
                </div>
                <p className="text-white/80 mb-4 font-light">{service.description}</p>
                <Link
                  href={service.link}
                  className="mt-auto text-[#d4af37] font-medium flex items-center text-lg group-hover:underline"
                >
                  Saiba mais{" "}
                  <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


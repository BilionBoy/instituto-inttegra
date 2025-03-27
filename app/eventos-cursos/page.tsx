"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModuleHeader } from "@/components/ecosystem/module-header";
import { ModuleTransition } from "@/components/ecosystem/module-transition";
import { useEcosystem } from "@/components/ecosystem/ecosystem-provider";

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  featured?: boolean;
  type: "presencial" | "online" | "hibrido";
}

export default function EventsAndCourses() {
  const { currentModule } = useEcosystem();
  const moduleColor = currentModule?.color || "#37d4af";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const events: Event[] = [
    {
      id: "event-1",
      title: "Congresso de Nutrição Funcional",
      date: "15-17 Junho, 2025",
      location: "Centro de Convenções, São Paulo",
      description:
        "O maior evento de nutrição funcional do Brasil, com palestrantes internacionais e workshops práticos.",
      image: "/images/conference-1.jpg",
      featured: true,
      type: "presencial",
    },
    {
      id: "event-2",
      title: "Workshop de Lipedema",
      date: "20 Maio, 2025",
      location: "Online",
      description:
        "Aprenda sobre diagnóstico e tratamento do lipedema com especialistas renomados.",
      image: "/images/workshop-1.jpg",
      type: "online",
    },
    {
      id: "event-3",
      title: "Curso de Terapia Hormonal",
      date: "8-10 Abril, 2025",
      location: "Hotel Grand Mercure, Rio de Janeiro",
      description:
        "Curso intensivo sobre terapia hormonal para médicos e profissionais de saúde.",
      image: "/images/event-1.jpg",
      type: "hibrido",
    },
    {
      id: "event-4",
      title: "Simpósio de Longevidade",
      date: "10-12 Agosto, 2025",
      location: "Centro de Eventos, Brasília",
      description:
        "Discussões sobre os avanços científicos em longevidade e medicina preventiva.",
      image: "/images/nutrition-1.jpg",
      type: "presencial",
    },
  ];

  return (
    <ModuleTransition>
      <ModuleHeader />

      {/* Hero Section */}
      <section className="relative py-24 bg-[#0a0a0a]">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/conference-1.jpg"
            alt="Eventos e Cursos"
            fill
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none mb-6 backdrop-blur-sm"
              style={{ backgroundColor: `${moduleColor}20` }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span
                className="text-sm font-medium uppercase tracking-wider"
                style={{ color: moduleColor }}
              >
                Eventos e Cursos
              </span>
            </motion.div>
            <motion.h2
              className="text-4xl md:text-5xl font-light text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Conhecimento que{" "}
              <span className="font-medium" style={{ color: moduleColor }}>
                transforma
              </span>
            </motion.h2>
            <motion.div
              className="w-20 h-px mx-auto mt-6 mb-6"
              style={{ backgroundColor: moduleColor }}
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
              Participe dos principais eventos, cursos e certificações para
              profissionais e pacientes
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
            <div
              className="relative overflow-hidden shadow-lg"
              style={{ boxShadow: `0 0 30px ${moduleColor}30` }}
            >
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
                <div className="bg-[#0a0a0a] text-white p-8 lg:p-12 relative border-t lg:border-t-0 lg:border-l border-gray-800">
                  <div className="absolute top-0 right-0 mt-6 mr-6">
                    <span
                      className="px-3 py-1 rounded-none text-xs uppercase tracking-wider font-light"
                      style={{ backgroundColor: moduleColor, color: "#0a0a0a" }}
                    >
                      Destaque
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar size={18} style={{ color: moduleColor }} />
                    <span className="text-white/80 font-light">
                      15-17 Junho, 2025
                    </span>
                  </div>
                  <h3 className="text-3xl font-light mb-4">
                    Congresso de Nutrição Funcional
                  </h3>
                  <p className="text-white/80 mb-6 text-lg font-light">
                    O maior evento de nutrição funcional do Brasil, com
                    palestrantes internacionais e workshops práticos. Três dias
                    de imersão com os maiores especialistas da área.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-start">
                      <div
                        className="w-10 h-10 flex items-center justify-center mr-3 mt-1"
                        style={{ backgroundColor: `${moduleColor}10` }}
                      >
                        <Users size={18} style={{ color: moduleColor }} />
                      </div>
                      <div>
                        <h4 className="font-medium">Participantes</h4>
                        <p className="text-white/70 font-light">
                          Mais de 500 profissionais
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div
                        className="w-10 h-10 flex items-center justify-center mr-3 mt-1"
                        style={{ backgroundColor: `${moduleColor}10` }}
                      >
                        <MapPin size={18} style={{ color: moduleColor }} />
                      </div>
                      <div>
                        <h4 className="font-medium">Local</h4>
                        <p className="text-white/70 font-light">
                          Centro de Convenções, São Paulo
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      className="text-[#0a0a0a] rounded-none"
                      style={{ backgroundColor: moduleColor }}
                    >
                      Inscreva-se agora
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-none"
                      style={{ borderColor: moduleColor, color: moduleColor }}
                    >
                      Mais informações
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {events.slice(1).map((event, index) => (
              <motion.div
                key={event.id}
                className="group relative overflow-hidden bg-[#0a0a0a] border border-gray-800 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-[200px] overflow-hidden">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-0 right-0 m-4">
                    <span
                      className="px-2 py-1 text-xs uppercase tracking-wider font-light"
                      style={{
                        backgroundColor: moduleColor,
                        color: "#0a0a0a",
                      }}
                    >
                      {event.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar size={16} style={{ color: moduleColor }} />
                    <span className="text-white/80 text-sm font-light">
                      {event.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-light text-white mb-2">
                    {event.title}
                  </h3>
                  <p className="text-white/70 mb-4 font-light line-clamp-2">
                    {event.description}
                  </p>
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin size={14} style={{ color: moduleColor }} />
                    <span className="text-white/60 text-sm font-light">
                      {event.location}
                    </span>
                  </div>
                  <Button
                    variant="link"
                    className="p-0 flex items-center gap-2 font-light"
                    style={{ color: moduleColor }}
                  >
                    <span>Saiba mais</span>
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </ModuleTransition>
  );
}

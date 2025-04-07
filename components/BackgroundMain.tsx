"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export default function BackgroundMain() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverImage, setHoverImage] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Imagens para o background
  const backgroundImages = [
    {
      src: "/images/Aline-Marketing.jpg",
      title: "Clínica Especializada",
      description: "Ambiente exclusivo para seu atendimento personalizado",
    },
    {
      src: "/images/Aline-Symbol.jpg",
      title: "Equipe Médica",
      description: "Profissionais altamente qualificados e atualizados",
    },
    {
      src: "/images/conference-1.jpg",
      title: "Eventos Exclusivos",
      description: "Congressos e workshops com especialistas internacionais",
    },
    {
      src: "/images/workshop-1.jpg",
      title: "Workshops Práticos",
      description: "Aprenda com a experiência dos melhores profissionais",
    },
    {
      src: "/images/nutrition-1.jpg",
      title: "Nutrição Funcional",
      description: "Abordagem personalizada para sua saúde",
    },
  ];

  // Alternar entre as imagens a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // Rastrear posição do mouse para efeitos interativos
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.3 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a]"
    >
      {/* Decorative elements - gold capsules/pills */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <motion.div
          className="absolute top-[15%] right-[10%] w-[300px] h-[80px] rounded-full bg-gradient-to-r from-[#d4af37] to-[#f5e7a0] blur-[2px] opacity-40"
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
          className="absolute bottom-[20%] left-[15%] w-[400px] h-[90px] rounded-full bg-gradient-to-r from-[#f5e7a0] to-[#d4af37] blur-[2px] opacity-30"
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
        <motion.div
          className="absolute top-[40%] left-[5%] w-[250px] h-[70px] rounded-full bg-gradient-to-r from-[#d4af37] to-[#f5e7a0] blur-[2px] opacity-20"
          animate={{
            y: [0, 40, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-[60%] right-[20%] w-[350px] h-[80px] rounded-full bg-gradient-to-r from-[#f5e7a0] to-[#d4af37] blur-[2px] opacity-25"
          animate={{
            y: [0, -30, 0],
            rotate: [0, -8, 0],
          }}
          transition={{
            duration: 22,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Interactive background image gallery */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          {backgroundImages.map((img, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{
                opacity: activeIndex === index ? 1 : 0,
                scale: activeIndex === index ? 1 : 1.1,
              }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: { duration: 1.5 },
                scale: { duration: 8 },
              }}
            >
              <Image
                src={img.src || "/placeholder.svg"}
                alt={`Instituto Inttegra - ${img.title}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Dynamic overlay that follows mouse */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/70"
          style={{
            background: `radial-gradient(circle 800px at ${mousePosition.x}px ${mousePosition.y}px, rgba(10,10,10,0.7), rgba(10,10,10,0.9), rgba(10,10,10,0.95))`,
          }}
        ></div>

        {/* Decorative grid overlay */}
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 pointer-events-none">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="border border-[#d4af37]/5"></div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 md:px-6 pt-40 pb-20 min-h-screen flex flex-col justify-center">
        <div className="max-w-3xl">
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#d4af37]/20 px-4 py-1.5 rounded-none mb-2 backdrop-blur-sm">
              <span className="text-[#d4af37] text-sm font-medium uppercase tracking-wider">
                Instituto Inttegra
              </span>
            </div>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight text-white mb-6">
              Transformando <br />
              <span className="text-[#d4af37] font-medium">saúde</span> em
              liberdade
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="h-1 w-24 bg-gradient-to-r from-[#d4af37] via-[#f5e7a0] to-[#d4af37] mb-8"></div>
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed font-light max-w-xl">
              Uma abordagem personalizada e baseada em ciência para transformar
              sua saúde e qualidade de vida, unindo o melhor da medicina
              tradicional e complementar.
            </p>
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button className="bg-[#d4af37] hover:bg-[#f5e7a0] hover:text-[#0a0a0a] text-[#0a0a0a] font-medium px-8 py-6 text-base rounded-none transition-all duration-300 transform-gpu hover:translate-y-[-3px]">
              Agendar Consulta
            </Button>
            <Button
              variant="outline"
              className="border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37]/20 px-8 py-6 text-base rounded-none transition-all duration-300 transform-gpu hover:translate-y-[-3px]"
            >
              Conhecer Serviços
            </Button>
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <span className="font-medium">Dra. Aline Zago</span>
              <span className="h-1 w-1 rounded-full bg-[#d4af37]"></span>
              <span>CRM-RO 4.370</span>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 2, duration: 1 },
            y: {
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.5,
              ease: "easeInOut",
            },
          }}
        >
          <span className="text-white/60 text-sm mb-2">Explore</span>
          <ChevronDown className="text-[#d4af37] h-6 w-6" />
        </motion.div>
      </div>
    </div>
  );
}

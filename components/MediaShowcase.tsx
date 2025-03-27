"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { LogoMarquee } from "./Marquee"
import Image from "next/image"

export default function MediaShowcase() {
  const rotatingTextRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const text = "Saúde Integrada Saúde Integrada "
    const chars = text.split("")
    const radius = 150
    const container = rotatingTextRef.current

    if (container) {
      container.innerHTML = ""
      chars.forEach((char, i) => {
        const span = document.createElement("span")
        const angle = (i / chars.length) * 2 * Math.PI
        const x = radius * Math.cos(angle)
        const y = radius * Math.sin(angle)

        span.innerText = char
        span.style.position = "absolute"
        span.style.left = `${x + radius}px`
        span.style.top = `${y + radius}px`
        span.style.transformOrigin = `0 0`
        span.style.transform = `rotate(${angle + Math.PI / 2}rad)`
        span.style.color = "#d4af37"
        span.style.fontWeight = "300"
        span.style.fontSize = "14px"
        span.style.letterSpacing = "1px"
        span.style.opacity = "0.9"

        container.appendChild(span)
      })
    }
  }, [])

  const services = [
    {
      name: "Comunidade",
      iconComponent: (
        <div className="bg-[#0a0a0a] rounded-none p-2 shadow-sm">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16 3.13C16.81 3.13 17.5 3.83 17.5 4.63C17.5 5.44 16.81 6.13 16 6.13C15.19 6.13 14.5 5.44 14.5 4.63C14.5 3.83 15.19 3.13 16 3.13Z"
              fill="#d4af37"
            />
            <path
              d="M8 3.13C8.81 3.13 9.5 3.83 9.5 4.63C9.5 5.44 8.81 6.13 8 6.13C7.19 6.13 6.5 5.44 6.5 4.63C6.5 3.83 7.19 3.13 8 3.13Z"
              fill="#d4af37"
            />
            <path
              d="M16 8.13C14.33 8.13 12.67 8.9 12 10.13C11.33 8.9 9.67 8.13 8 8.13C5.33 8.13 3 10.47 3 13.13V18.13H11V16.13C11 15.13 11.67 14.13 12.67 13.8L16 12.8V8.13Z"
              fill="#d4af37"
            />
            <path
              d="M21 12.13V15.13L18.6 14.13C18.23 14 17.77 14 17.4 14.13L15 15.13V12.13C15 11.03 15.9 10.13 17 10.13C18.1 10.13 19 11.03 19 12.13H21Z"
              fill="#d4af37"
            />
            <path d="M21 16.13V21.13H13V16.13L15.4 15.13C15.77 15 16.23 15 16.6 15.13L21 16.13Z" fill="#d4af37" />
          </svg>
        </div>
      ),
    },
    {
      name: "Certificações internacionais",
      iconComponent: (
        <div className="bg-[#0a0a0a] rounded-none p-2 shadow-sm">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5 13.5H12.5V10.5H14.5V13.5Z" fill="#d4af37" />
            <path d="M20.5 3.5H3.5V7.5H20.5V3.5Z" fill="#d4af37" />
            <path
              d="M21 2H3C2.45 2 2 2.45 2 3V21C2 21.55 2.45 22 3 22H21C21.55 22 22 21.55 22 21V3C22 2.45 21.55 2 21 2ZM20 20H4V4H20V20Z"
              fill="#d4af37"
            />
            <path d="M14.5 16.5H9.5V17.5H14.5V16.5Z" fill="#d4af37" />
            <path d="M9.5 13.5H7.5V10.5H9.5V13.5Z" fill="#d4af37" />
            <path d="M17.5 10.5H15.5V13.5H17.5V10.5Z" fill="#d4af37" />
          </svg>
        </div>
      ),
    },
    {
      name: "Cursos digitais",
      iconComponent: (
        <div className="bg-[#0a0a0a] rounded-none p-2 shadow-sm">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" fill="#d4af37" />
            <path d="M12 3L1 9L12 15L21 10.09V17H23V9L12 3Z" fill="#d4af37" />
          </svg>
        </div>
      ),
    },
    {
      name: "Mentorias",
      iconComponent: (
        <div className="bg-[#0a0a0a] rounded-none p-2 shadow-sm">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 5V3H3V5H21Z" fill="#d4af37" />
            <path
              d="M21 7V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V7H21ZM12 12C10.9 12 10 12.9 10 14C10 15.1 10.9 16 12 16C13.1 16 14 15.1 14 14C14 12.9 13.1 12 12 12Z"
              fill="#d4af37"
            />
          </svg>
        </div>
      ),
    },
    {
      name: "Congressos e eventos",
      iconComponent: (
        <div className="bg-[#0a0a0a] rounded-none p-2 shadow-sm">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V9H19V19ZM19 7H5V5H19V7Z"
              fill="#d4af37"
            />
            <path d="M12 11H17V16H12V11Z" fill="#d4af37" />
          </svg>
        </div>
      ),
    },
    {
      name: "Hub de conteúdo",
      iconComponent: (
        <div className="bg-[#0a0a0a] rounded-none p-2 shadow-sm">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21 5C19.89 4.65 18.67 4.5 17.5 4.5C15.55 4.5 13.45 4.9 12 6C10.55 4.9 8.45 4.5 6.5 4.5C4.55 4.5 2.45 4.9 1 6V20.65C1 20.9 1.25 21.15 1.5 21.15C1.6 21.15 1.65 21.1 1.75 21.1C3.1 20.45 5.05 20 6.5 20C8.45 20 10.55 20.4 12 21.5C13.35 20.65 15.8 20 17.5 20C19.15 20 20.85 20.3 22.25 21.05C22.35 21.1 22.4 21.1 22.5 21.1C22.75 21.1 23 20.85 23 20.6V6C22.4 5.55 21.75 5.25 21 5ZM21 18.5C19.9 18.15 18.7 18 17.5 18C15.8 18 13.35 18.65 12 19.5V8C13.35 7.15 15.8 6.5 17.5 6.5C18.7 6.5 19.9 6.65 21 7V18.5Z"
              fill="#d4af37"
            />
            <path
              d="M17.5 10.5C18.38 10.5 19.23 10.59 20 10.76V9.24C19.21 9.09 18.36 9 17.5 9C15.8 9 14.26 9.29 13 9.83V11.49C14.13 10.85 15.7 10.5 17.5 10.5Z"
              fill="#d4af37"
            />
            <path
              d="M13 12.49V14.15C14.13 13.51 15.7 13.16 17.5 13.16C18.38 13.16 19.23 13.25 20 13.42V11.9C19.21 11.75 18.36 11.66 17.5 11.66C15.8 11.66 14.26 11.96 13 12.49Z"
              fill="#d4af37"
            />
            <path
              d="M17.5 14.33C15.8 14.33 14.26 14.63 13 15.16V16.82C14.13 16.18 15.7 15.83 17.5 15.83C18.38 15.83 19.23 15.92 20 16.09V14.57C19.21 14.41 18.36 14.33 17.5 14.33Z"
              fill="#d4af37"
            />
          </svg>
        </div>
      ),
    },
  ]

  return (
    <div className="w-full py-16 px-4 overflow-hidden bg-[#0a0a0a] relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/event-1.jpg" alt="Instituto Inttegra" fill className="object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.div
            className="inline-flex items-center gap-2 bg-[#d4af37]/20 px-4 py-1.5 rounded-none mb-6 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#d4af37] text-sm font-medium uppercase tracking-wider">Reconhecimento</span>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-light text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Destaque nos principais veículos de
            <br />
            <span className="text-[#d4af37] font-medium">imprensa do Brasil e do mundo</span>
          </motion.h2>
        </div>

        <LogoMarquee />

        <div className="max-w-7xl mx-auto mt-24 mb-24 relative">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/3 mb-12 lg:mb-0 relative">
              <motion.div
                className="w-[350px] h-[350px] relative"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 30,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <div ref={rotatingTextRef} className="w-full h-full" />
              </motion.div>
            </div>

            <div className="lg:w-2/3 lg:pl-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    className="bg-[#0a0a0a] border border-[#d4af37]/20 rounded-none p-4 flex items-center gap-3 hover:shadow-md transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(212, 175, 55, 0.2)" }}
                  >
                    {service.iconComponent}
                    <span className="font-light text-white">{service.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


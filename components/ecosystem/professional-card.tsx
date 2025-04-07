"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ProfessionalCardProps {
  id: string
  name: string
  title: string
  specialty: string
  image: string
  slug: string
  crm?: string
  index?: number
  moduleColor?: string
}

export function ProfessionalCard({
  id,
  name,
  title,
  specialty,
  image,
  slug,
  crm,
  index = 0,
  moduleColor = "#d4af37",
}: ProfessionalCardProps) {
  return (
    <motion.div
      className="group relative overflow-hidden bg-[#0a0a0a] border border-gray-800 rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-[300px] overflow-hidden">
        <Image
          src={image || "/placeholder.svg?height=400&width=300"}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
          style={{ backgroundColor: moduleColor }}
        ></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-light text-white mb-1">{name}</h3>
        <div className="flex items-center gap-2 mb-3">
          <span className="h-px w-6" style={{ backgroundColor: moduleColor }}></span>
          <span className="text-white/70 text-sm font-light">
            {title} {crm && `| ${crm}`}
          </span>
        </div>
        <p className="text-white/80 mb-4 font-light">{specialty}</p>
        <Link
          href={`/profissionais/${slug}`}
          className="flex items-center text-white/70 hover:text-white transition-colors"
        >
          <span className="mr-2">Ver perfil</span>
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  )
}


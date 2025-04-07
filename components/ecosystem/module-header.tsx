"use client"

import { motion } from "framer-motion"
import { useEcosystem } from "./ecosystem-provider"

export function ModuleHeader() {
  const { currentModule, isTransitioning } = useEcosystem()

  if (!currentModule) return null

  return (
    <motion.div
      className="w-full py-6 px-4 md:px-8 flex justify-center items-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isTransitioning ? 0 : 1, y: isTransitioning ? -20 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="px-6 py-3 rounded-full shadow-md flex items-center gap-2"
        style={{ backgroundColor: `${currentModule.color}20` }}
      >
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: currentModule.color }}></div>
        <span className="font-medium" style={{ color: currentModule.color }}>
          {currentModule.name}
        </span>
      </div>
    </motion.div>
  )
}


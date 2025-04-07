"use client"

import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import { useEcosystem } from "./ecosystem-provider"

export function ModuleTransition({ children }: { children: React.ReactNode }) {
  const { currentModule, isTransitioning } = useEcosystem()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentModule?.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}


"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { ReactNode } from "react";
import { useEcosystem } from "./ecosystem-provider";

interface ModuleSectionProps {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage?: string;
  children: ReactNode;
  color?: string; // Optional override
}

export function ModuleSection({
  title,
  subtitle,
  description,
  backgroundImage = "/images/clinic-1.jpg",
  children,
  color,
}: ModuleSectionProps) {
  const { getModuleColor } = useEcosystem();
  const moduleColor = color || getModuleColor();

  return (
    <section className="relative py-24 bg-[#0a0a0a]">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage || "/placeholder.svg"}
          alt={title}
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
              {subtitle}
            </span>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-light text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {title.split(" ").map((word, i, arr) =>
              i === arr.length - 1 ? (
                <span key={i}>
                  <span className="font-medium" style={{ color: moduleColor }}>
                    {word}
                  </span>
                </span>
              ) : (
                <span key={i}>{word} </span>
              )
            )}
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
            {description}
          </motion.p>
        </div>

        {children}
      </div>
    </section>
  );
}

// components/ecosystem/module-navigator.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useEcosystem } from "./ecosystem-provider";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";

export function ModuleNavigator() {
  const { modules, currentModule, setCurrentModule } = useEcosystem();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  // Renderização condicional para evitar erros de hidratação
  if (!currentModule) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Button
          onClick={toggleOpen}
          className={`rounded-full px-6 py-6 shadow-lg flex items-center gap-2 transition-all duration-300 ${
            isOpen ? "bg-white text-black" : ""
          }`}
          style={{
            backgroundColor: isOpen
              ? "white"
              : currentModule?.color || "#d4af37",
          }}
        >
          <span className="font-medium">Módulos</span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown />
          </motion.div>
        </Button>

        <motion.div
          className="absolute bottom-full right-0 mb-2 bg-white rounded-lg shadow-xl overflow-hidden"
          initial={{ opacity: 0, height: 0, width: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? "auto" : 0,
            width: isOpen ? 300 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-2">
            {modules.map((module) => (
              <motion.div
                key={module.id}
                className={`p-3 rounded-lg mb-1 cursor-pointer flex items-center justify-between transition-all duration-300 ${
                  currentModule?.id === module.id
                    ? "bg-gray-100 font-medium"
                    : "hover:bg-gray-50"
                }`}
                whileHover={{ x: 5 }}
                onClick={() => {
                  setCurrentModule(module);
                  setIsOpen(false);
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: module.color }}
                  ></div>
                  <span>{module.name}</span>
                </div>
                <ChevronRight size={16} className="text-gray-400" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

"use client";

import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

type Module = {
  id: string;
  name: string;
  slug: string;
  color: string;
  description: string;
};

type EcosystemContextType = {
  currentModule: Module | null;
  modules: Module[];
  getModuleColor: () => string;
};

const defaultModules: Module[] = [
  {
    id: "clinic",
    name: "Instituto Inttegra",
    slug: "/",
    color: "#d4af37",
    description:
      "Clínica especializada em saúde integrada e medicina personalizada",
  },
  {
    id: "professionals",
    name: "Profissionais",
    slug: "/profissionais",
    color: "#af37d4",
    description: "Rede de especialistas em saúde integrada",
  },
  {
    id: "events",
    name: "Eventos & Cursos",
    slug: "/eventos-cursos",
    color: "#37d4af",
    description:
      "Congressos, workshops e cursos para profissionais e pacientes",
  },
  {
    id: "content",
    name: "Conteúdo",
    slug: "/conteudo",
    color: "#d43737",
    description: "Artigos, vídeos e materiais educativos sobre saúde",
  },
];

const EcosystemContext = createContext<EcosystemContextType | undefined>(
  undefined
);

export function EcosystemProvider({ children }: { children: React.ReactNode }) {
  const [currentModule, setCurrentModule] = useState<Module | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Determine current module based on URL path
    const path = pathname === "/" ? "/" : `/${pathname.split("/")[1]}`;
    const module =
      defaultModules.find((m) => m.slug === path) || defaultModules[0];
    setCurrentModule(module);
  }, [pathname]);

  const getModuleColor = () => {
    return currentModule?.color || "#d4af37";
  };

  return (
    <EcosystemContext.Provider
      value={{
        currentModule,
        modules: defaultModules,
        getModuleColor,
      }}
    >
      {children}
    </EcosystemContext.Provider>
  );
}

export function useEcosystem() {
  const context = useContext(EcosystemContext);
  if (context === undefined) {
    throw new Error("useEcosystem must be used within an EcosystemProvider");
  }
  return context;
}

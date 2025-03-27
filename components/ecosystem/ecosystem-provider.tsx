"use client";

import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

type Module = {
  id: string;
  name: string;
  slug: string;
  color: string;
  description: string;
  icon?: React.ReactNode;
};

type Professional = {
  id: string;
  name: string;
  title: string;
  specialty: string;
  moduleId: string;
  slug: string;
  image: string;
  crm?: string;
};

type EcosystemContextType = {
  currentModule: Module | null;
  setCurrentModule: (module: Module | null) => void;
  modules: Module[];
  professionals: Professional[];
  getProfessionalsByModule: (moduleId: string) => Professional[];
  isTransitioning: boolean;
};

const defaultModules: Module[] = [
  {
    id: "clinic",
    name: "Instituto Inttegra",
    slug: "instituto-inttegra",
    color: "#d4af37",
    description:
      "Clínica especializada em saúde integrada e medicina personalizada",
  },
  {
    id: "events",
    name: "Eventos & Cursos",
    slug: "eventos-cursos",
    color: "#37d4af",
    description:
      "Congressos, workshops e cursos para profissionais e pacientes",
  },
  {
    id: "professionals",
    name: "Profissionais",
    slug: "profissionais",
    color: "#af37d4",
    description: "Rede de especialistas em saúde integrada",
  },
  {
    id: "content",
    name: "Conteúdo",
    slug: "conteudo",
    color: "#d43737",
    description: "Artigos, vídeos e materiais educativos sobre saúde",
  },
];

const defaultProfessionals: Professional[] = [
  {
    id: "aline-zago",
    name: "Dra. Aline Zago",
    title: "Médica",
    specialty: "Emagrecimento, Longevidade e Lipedema",
    moduleId: "clinic",
    slug: "dra-aline-zago",
    image: "/images/DRA.jpg",
    crm: "CRM-RO 4.370",
  },
  {
    id: "professional-2",
    name: "Dr. Carlos Silva",
    title: "Nutricionista",
    specialty: "Nutrição Esportiva",
    moduleId: "professionals",
    slug: "dr-carlos-silva",
    image: "/placeholder.svg?height=400&width=300",
    crm: "CRN 1234",
  },
  {
    id: "professional-3",
    name: "Dra. Mariana Costa",
    title: "Fisioterapeuta",
    specialty: "Reabilitação Funcional",
    moduleId: "professionals",
    slug: "dra-mariana-costa",
    image: "/placeholder.svg?height=400&width=300",
    crm: "CREFITO 5678",
  },
];

const EcosystemContext = createContext<EcosystemContextType | undefined>(
  undefined
);

export function EcosystemProvider({ children }: { children: React.ReactNode }) {
  const [currentModule, setCurrentModule] = useState<Module | null>(null);
  const [modules] = useState<Module[]>(defaultModules);
  const [professionals] = useState<Professional[]>(defaultProfessionals);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Determine current module based on URL path
    const path = pathname.split("/")[1] || "";
    const module = modules.find((m) => m.slug === path) || modules[0];
    setCurrentModule(module);
  }, [pathname, modules]);

  const getProfessionalsByModule = (moduleId: string) => {
    return professionals.filter((p) => p.moduleId === moduleId);
  };

  const handleModuleChange = (module: Module | null) => {
    if (module && module.id !== currentModule?.id) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentModule(module);
        router.push(`/${module.slug}`);
        setIsTransitioning(false);
      }, 300);
    }
  };

  return (
    <EcosystemContext.Provider
      value={{
        currentModule,
        setCurrentModule: handleModuleChange,
        modules,
        professionals,
        getProfessionalsByModule,
        isTransitioning,
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

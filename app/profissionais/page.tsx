"use client";

import { useEffect } from "react";
import { useEcosystem } from "@/components/ecosystem/ecosystem-provider";
import { ModuleSection } from "@/components/ecosystem/module-section";
import { ProfessionalCard } from "@/components/ecosystem/professional-card";

// Dados de exemplo dos profissionais
const professionals = [
  {
    id: "aline-zago",
    name: "Dra. Aline Zago",
    title: "Médica",
    specialty: "Emagrecimento, Longevidade e Lipedema",
    slug: "dra-aline-zago",
    image: "/images/DRA.jpg",
    crm: "CRM-RO 4.370",
  },
  {
    id: "professional-2",
    name: "Dr. Carlos Silva",
    title: "Nutricionista",
    specialty: "Nutrição Esportiva",
    slug: "dr-carlos-silva",
    image: "/placeholder.svg?height=400&width=300",
    crm: "CRN 1234",
  },
  {
    id: "professional-3",
    name: "Dra. Mariana Costa",
    title: "Fisioterapeuta",
    specialty: "Reabilitação Funcional",
    slug: "dra-mariana-costa",
    image: "/placeholder.svg?height=400&width=300",
    crm: "CREFITO 5678",
  },
];

export default function Professionals() {
  const { getModuleColor } = useEcosystem();
  const moduleColor = getModuleColor();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ModuleSection
      title="Conheça nossa equipe"
      subtitle="Nossos Especialistas"
      description="Profissionais altamente qualificados e especializados em diversas áreas da saúde"
      backgroundImage="/images/clinic-1.jpg"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {professionals.map((professional, index) => (
          <ProfessionalCard
            key={professional.id}
            id={professional.id}
            name={professional.name}
            title={professional.title}
            specialty={professional.specialty}
            image={professional.image}
            slug={professional.slug}
            crm={professional.crm}
            index={index}
            moduleColor={moduleColor}
          />
        ))}
      </div>
    </ModuleSection>
  );
}

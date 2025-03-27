"use client";

import { useEffect } from "react";
import {
  Clock,
  ArrowRight,
  BookOpen,
  Video,
  FileText,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModuleSection } from "@/components/ecosystem/module-section";
import Image from "next/image";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ContentItem {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  type: "article" | "video" | "ebook" | "podcast";
  featured?: boolean;
}

export default function Content() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contentItems: ContentItem[] = [
    {
      id: "content-1",
      title: "Guia Completo sobre Lipedema",
      description:
        "Um guia abrangente sobre diagnóstico, tratamento e convivência com o lipedema.",
      image: "/images/nutrition-1.jpg",
      date: "10 Março, 2025",
      type: "ebook",
      featured: true,
    },
    {
      id: "content-2",
      title: "Nutrição Funcional para Atletas",
      description:
        "Como a nutrição funcional pode melhorar o desempenho esportivo e a recuperação.",
      image: "/images/workshop-1.jpg",
      date: "25 Fevereiro, 2025",
      type: "article",
    },
    {
      id: "content-3",
      title: "Entendendo os Hormônios Femininos",
      description:
        "Uma explicação detalhada sobre o funcionamento dos hormônios femininos e seu impacto na saúde.",
      image: "/images/event-1.jpg",
      date: "15 Janeiro, 2025",
      type: "video",
    },
    {
      id: "content-4",
      title: "Mitos e Verdades sobre Emagrecimento",
      description:
        "Desmistificando as informações sobre perda de peso e metabolismo.",
      image: "/images/conference-1.jpg",
      date: "5 Janeiro, 2025",
      type: "podcast",
    },
    {
      id: "content-5",
      title: "Guia de Suplementação para Longevidade",
      description:
        "Os suplementos mais eficazes para promover a longevidade e o envelhecimento saudável.",
      image: "/images/nutrition-1.jpg",
      date: "20 Dezembro, 2024",
      type: "ebook",
    },
    {
      id: "content-6",
      title: "Como Interpretar Exames Hormonais",
      description:
        "Um guia prático para entender os resultados dos seus exames hormonais.",
      image: "/images/clinic-1.jpg",
      date: "10 Dezembro, 2024",
      type: "article",
    },
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "article":
        return <FileText size={16} />;
      case "video":
        return <Video size={16} />;
      case "ebook":
        return <BookOpen size={16} />;
      case "podcast":
        return <FileText size={16} />;
      default:
        return <FileText size={16} />;
    }
  };

  return (
    <ModuleSection
      title="Conhecimento acessível"
      subtitle="Hub de Conteúdo"
      description="Artigos, vídeos, e-books e podcasts sobre saúde, bem-estar e medicina personalizada"
      backgroundImage="/images/nutrition-1.jpg"
    >
      {/* Featured Content */}
      <motion.div
        className="relative px-4 md:px-8 lg:px-12 mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-[300px] lg:h-auto">
              <Image
                src="/images/nutrition-1.jpg"
                alt="Guia Completo sobre Lipedema"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/70 to-transparent lg:hidden"></div>
            </div>
            <div className="bg-[#0a0a0a] text-white p-8 lg:p-12 relative border-t lg:border-t-0 lg:border-l border-gray-800">
              <div className="absolute top-0 right-0 mt-6 mr-6">
                <span className="px-3 py-1 rounded-none text-xs uppercase tracking-wider font-light bg-[#d43737] text-[#0a0a0a]">
                  E-book
                </span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <Clock size={18} className="text-[#d43737]" />
                <span className="text-white/80 font-light">10 Março, 2025</span>
              </div>
              <h3 className="text-3xl font-light mb-4">
                Guia Completo sobre Lipedema
              </h3>
              <p className="text-white/80 mb-6 text-lg font-light">
                Um guia abrangente sobre diagnóstico, tratamento e convivência
                com o lipedema. Escrito pela Dra. Aline Zago, este e-book traz
                informações valiosas para pacientes e profissionais.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#d43737] text-[#0a0a0a] rounded-none">
                  <Download size={18} className="mr-2" /> Baixar E-book
                </Button>
                <Button
                  variant="outline"
                  className="border-[#d43737] text-[#d43737] hover:bg-[#d43737]/5 rounded-none"
                >
                  Mais informações
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Content Tabs */}
      <div className="mt-16">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-4 mb-8">
            <TabsTrigger value="all" className="data-[state=active]:text-white">
              Todos
            </TabsTrigger>
            <TabsTrigger
              value="articles"
              className="data-[state=active]:text-white"
            >
              Artigos
            </TabsTrigger>
            <TabsTrigger
              value="videos"
              className="data-[state=active]:text-white"
            >
              Vídeos
            </TabsTrigger>
            <TabsTrigger
              value="ebooks"
              className="data-[state=active]:text-white"
            >
              E-books
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contentItems
                .filter((item) => item.id !== "content-1")
                .map((item, index) => (
                  <ContentCard
                    key={item.id}
                    item={item}
                    index={index}
                    moduleColor="#d43737"
                  />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="articles" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contentItems
                .filter((item) => item.type === "article")
                .map((item, index) => (
                  <ContentCard
                    key={item.id}
                    item={item}
                    index={index}
                    moduleColor="#d43737"
                  />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="videos" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contentItems
                .filter((item) => item.type === "video")
                .map((item, index) => (
                  <ContentCard
                    key={item.id}
                    item={item}
                    index={index}
                    moduleColor="#d43737"
                  />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="ebooks" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contentItems
                .filter((item) => item.type === "ebook")
                .map((item, index) => (
                  <ContentCard
                    key={item.id}
                    item={item}
                    index={index}
                    moduleColor="#d43737"
                  />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </ModuleSection>
  );
}

interface ContentCardProps {
  item: ContentItem;
  index: number;
  moduleColor: string;
}

function ContentCard({ item, index, moduleColor }: ContentCardProps) {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "article":
        return <FileText size={16} />;
      case "video":
        return <Video size={16} />;
      case "ebook":
        return <BookOpen size={16} />;
      case "podcast":
        return <FileText size={16} />;
      default:
        return <FileText size={16} />;
    }
  };

  return (
    <motion.div
      className="group relative overflow-hidden bg-[#0a0a0a] border border-gray-800 rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-[200px] overflow-hidden">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-0 right-0 m-4">
          <span
            className="px-2 py-1 text-xs uppercase tracking-wider font-light flex items-center gap-1"
            style={{
              backgroundColor: moduleColor,
              color: "#0a0a0a",
            }}
          >
            {getTypeIcon(item.type)}
            <span>{item.type}</span>
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Clock size={16} style={{ color: moduleColor }} />
          <span className="text-white/80 text-sm font-light">{item.date}</span>
        </div>
        <h3 className="text-xl font-light text-white mb-2">{item.title}</h3>
        <p className="text-white/70 mb-4 font-light line-clamp-2">
          {item.description}
        </p>
        <Button
          variant="link"
          className="p-0 flex items-center gap-2 font-light"
          style={{ color: moduleColor }}
        >
          <span>Ler mais</span>
          <ArrowRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Button>
      </div>
    </motion.div>
  );
}

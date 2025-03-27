"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Play, Clock, Share2, BookmarkPlus, PlayCircle, ChevronRight, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [activeVideo, setActiveVideo] = useState(0)
  const videoId = "x05JKJrARt4"
  const sectionRef = useRef<HTMLDivElement | null>(null)

  const featuredVideos = [
    {
      id: "x05JKJrARt4",
      title: "Os segredos da longevidade saudável",
      description:
        "Dra. Aline Zago explica os principais fatores que influenciam o envelhecimento saudável e como implementar mudanças efetivas no seu dia a dia.",
      duration: "45:32",
      thumbnail: "/images/conference-1.jpg",
      featured: true,
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Tratamento avançado para Lipedema",
      description: "Conheça as mais recentes abordagens para diagnóstico e tratamento do lipedema.",
      duration: "32:15",
      thumbnail: "/images/workshop-1.jpg",
      featured: false,
    },
    {
      id: "jNQXAC9IVRw",
      title: "Nutrição funcional na prática clínica",
      description: "Aplicações práticas da nutrição funcional para diversos quadros clínicos.",
      duration: "28:47",
      thumbnail: "/images/nutrition-1.jpg",
      featured: false,
    },
  ]

  const handlePrevVideo = () => {
    setActiveVideo((prev) => (prev === 0 ? featuredVideos.length - 1 : prev - 1))
    setIsPlaying(false)
  }

  const handleNextVideo = () => {
    setActiveVideo((prev) => (prev === featuredVideos.length - 1 ? 0 : prev + 1))
    setIsPlaying(false)
  }

  return (
    <div ref={sectionRef} className="py-24 bg-[#0a0a0a] relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/workshop-1.jpg" alt="Instituto Inttegra" fill className="object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 bg-[#d4af37]/20 px-4 py-1.5 rounded-none mb-6 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#d4af37] text-sm font-medium uppercase tracking-wider">Vídeos em Destaque</span>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-light text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Conteúdo <span className="text-[#d4af37] font-medium">exclusivo</span> para você
          </motion.h2>
          <motion.div
            className="w-20 h-px bg-[#d4af37] mx-auto mt-6 mb-6"
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
            Assista aos nossos vídeos sobre saúde, bem-estar e tratamentos inovadores
          </motion.p>
        </div>

        <div className="relative">
          <motion.div
            className="w-full max-w-4xl mx-auto overflow-hidden rounded-none shadow-[0_0_30px_rgba(212,175,55,0.2)]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div className="relative">
              {!isPlaying ? (
                <div className="relative">
                  <div
                    className="aspect-video bg-[#0a0a0a] relative overflow-hidden cursor-pointer"
                    onClick={() => setIsPlaying(true)}
                  >
                    <Image
                      src={featuredVideos[activeVideo].thumbnail || "/placeholder.svg"}
                      alt={featuredVideos[activeVideo].title}
                      fill
                      className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-70"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-none bg-[#d4af37] flex items-center justify-center transform-gpu transition-all duration-300 hover:scale-110 cursor-pointer">
                        <Play size={30} className="text-[#0a0a0a] ml-1" />
                      </div>
                    </div>

                    {/* Video info */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                      <div className="flex items-center gap-3 mb-3">
                        {featuredVideos[activeVideo].featured && (
                          <span className="bg-[#d4af37] text-[#0a0a0a] font-light px-3 py-1 rounded-none text-xs uppercase tracking-wider">
                            Destaque
                          </span>
                        )}
                        <span className="flex items-center text-white/80 text-sm">
                          <Clock size={14} className="mr-1" /> {featuredVideos[activeVideo].duration}
                        </span>
                      </div>
                      <h3 className="text-3xl font-light text-white mb-3">{featuredVideos[activeVideo].title}</h3>
                      <p className="text-white/80 text-lg mb-4 max-w-3xl font-light">
                        {featuredVideos[activeVideo].description}
                      </p>
                      <div className="flex items-center gap-4">
                        <Button className="bg-[#d4af37] hover:bg-[#f5e7a0] hover:text-[#0a0a0a] text-[#0a0a0a] rounded-none">
                          <PlayCircle size={18} className="mr-2" /> Assistir agora
                        </Button>
                        <Button variant="ghost" className="text-white/80 hover:text-white">
                          <Share2 size={18} className="mr-2" /> Compartilhar
                        </Button>
                        <Button variant="ghost" className="text-white/80 hover:text-white">
                          <BookmarkPlus size={18} className="mr-2" /> Salvar
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="aspect-video w-full">
                  <iframe
                    src={`https://www.youtube.com/embed/${featuredVideos[activeVideo].id}?autoplay=1&rel=0`}
                    title={featuredVideos[activeVideo].title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              )}
            </motion.div>
          </motion.div>

          {/* Video navigation controls */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white hover:text-[#d4af37] hover:bg-[#0a0a0a]/50 z-20 hidden md:flex"
            onClick={handlePrevVideo}
          >
            <ChevronLeft size={40} />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white hover:text-[#d4af37] hover:bg-[#0a0a0a]/50 z-20 hidden md:flex"
            onClick={handleNextVideo}
          >
            <ChevronRight size={40} />
          </Button>
        </div>

        {/* Video thumbnails */}
        <div className="mt-8 flex justify-center gap-4">
          {featuredVideos.map((video, index) => (
            <motion.div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${activeVideo === index ? "bg-[#d4af37]" : "bg-white/30"}`}
              whileHover={{ scale: 1.2 }}
              onClick={() => {
                setActiveVideo(index)
                setIsPlaying(false)
              }}
            />
          ))}
        </div>

        {/* More videos section */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {featuredVideos.map((video, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden cursor-pointer ${activeVideo === index ? "ring-2 ring-[#d4af37]" : ""}`}
              onClick={() => {
                setActiveVideo(index)
                setIsPlaying(false)
              }}
            >
              <div className="relative h-[180px]">
                <Image
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-70"></div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-none bg-[#d4af37] flex items-center justify-center">
                    <Play size={20} className="text-[#0a0a0a] ml-1" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock size={14} className="text-[#d4af37]" />
                    <span className="text-white/80 text-xs">{video.duration}</span>
                  </div>
                  <h4 className="text-white text-sm font-medium line-clamp-2">{video.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button className="bg-[#d4af37] hover:bg-[#f5e7a0] hover:text-[#0a0a0a] text-[#0a0a0a] font-medium rounded-none">
            Ver todos os vídeos
          </Button>
        </div>
      </div>
    </div>
  )
}


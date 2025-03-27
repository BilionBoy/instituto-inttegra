import { Marquee } from "@/components/magicui/marquee"

const logos = [
  {
    name: "Metrópoles",
    img: "/terra.avif?height=40&width=120",
    alt: "",
  },
  {
    name: "Terra",
    img: "/terra.avif?height=40&width=100",
    alt: "",
  },
  {
    name: "Valor",
    img: "/terra.avif?height=40&width=100",
    alt: "",
  },
  {
    name: "Forbes",
    img: "/terra.avif?height=40&width=100",
    alt: "",
  },
  {
    name: "Forbes",
    img: "/terra.avif?height=40&width=100",
    alt: "",
  },
  {
    name: "GPS",
    img: "/terra.avif?height=40&width=80",
    alt: "",
  },
  {
    name: "Empresas & Negócios",
    img: "/terra.avif?height=40&width=120",
    alt: "",
  },
  {
    name: "Correio Braziliense",
    img: "/terra.avif?height=40&width=120",
    alt: "",
  },
]

const allLogos = [...logos, ...logos]

const LogoItem = ({ img, alt }: { img: string; alt: string }) => {
  return (
    <div className="mx-8 flex items-center justify-center">
      <img
        src={img || "/placeholder.svg"}
        alt={alt}
        className="h-8 w-auto object-contain grayscale opacity-70 transition-opacity hover:opacity-100"
      />
    </div>
  )
}

export function LogoMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-10">
      <Marquee pauseOnHover className="[--duration:30s]">
        {allLogos.map((logo, index) => (
          <LogoItem key={`${logo.name}-${index}`} img={logo.img} alt={logo.alt} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  )
}


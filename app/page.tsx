"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useEcosystem } from "@/components/ecosystem/ecosystem-provider";
import VideoPlayer from "@/components/VideoPlayer";
import BackgroundMain from "@/components/BackgroundMain";
import MediaShowcase from "@/components/MediaShowcase";
import UpcomingEvents from "@/components/Events";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import { ModuleHeader } from "@/components/ecosystem/module-header";
import { ModuleTransition } from "@/components/ecosystem/module-transition";

export default function Home() {
  const { currentModule } = useEcosystem();
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Redirect to the first module if we're on the root path
    if (currentModule && window.location.pathname === "/") {
      router.push(`/${currentModule.slug}`);
    }
  }, [currentModule, router]);

  return (
    <ModuleTransition>
      <ModuleHeader />
      <BackgroundMain />
      <VideoPlayer />
      <AboutSection />
      <MediaShowcase />
      <UpcomingEvents />
      <ServicesSection />
      <CTASection />
    </ModuleTransition>
  );
}

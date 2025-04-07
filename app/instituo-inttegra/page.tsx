"use client";

import { useEffect } from "react";
import VideoPlayer from "@/components/VideoPlayer";
import BackgroundMain from "@/components/BackgroundMain";
import MediaShowcase from "@/components/MediaShowcase";
import UpcomingEvents from "@/components/Events";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import { ModuleHeader } from "@/components/ecosystem/module-header";
import { ModuleTransition } from "@/components/ecosystem/module-transition";

export default function InstitutoInttegra() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

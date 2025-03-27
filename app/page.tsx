"use client";

import { useEffect }             from "react";
import VideoPlayer               from "@/components/VideoPlayer";
import BackgroundMain            from "@/components/BackgroundMain";
import MediaShowcase             from "@/components/MediaShowcase";
import UpcomingEvents            from "@/components/Events";
import ServicesSection           from "@/components/ServicesSection";
import AboutSection              from "@/components/AboutSection";
import CTASection                from "@/components/CTASection";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <BackgroundMain />
      <VideoPlayer />
      <MediaShowcase />
      <UpcomingEvents />
      <ServicesSection />
      <AboutSection />
      <CTASection />
    </main>
  );
}

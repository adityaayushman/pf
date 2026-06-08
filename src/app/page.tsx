"use client";

import { useRef } from "react";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import TagScroll from "@/components/TagScroll";
import AboutMeSplit from "@/components/AboutMeSplit";
import TechStack from "@/components/TechStack";
import FeaturedProjects from "@/components/FeaturedProjects";
import ServicesGrid from "@/components/ServicesGrid";
import JourneyTimeline from "@/components/JourneyTimeline";
import ResearchSection from "@/components/ResearchSection";
import Achievements from "@/components/Achievements";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <main>
      <div
        ref={heroRef}
        style={{
          position: "relative",
          height: "500vh",
        }}
      >
        <ScrollyCanvas heroRef={heroRef} />
        <Overlay heroRef={heroRef} />
      </div>

      <TagScroll />
      <AboutMeSplit />
      <TechStack />
      <FeaturedProjects />
      <ServicesGrid />
      <JourneyTimeline />
      <ResearchSection />
      <Achievements />
      <ContactCTA />
      <Footer />
    </main>
  );
}

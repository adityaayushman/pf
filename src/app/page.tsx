"use client";

import { useRef } from "react";
import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import AskMeAI from "@/components/AskMeAI";
import AutoScroll from "@/components/AutoScroll";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import TagScroll from "@/components/TagScroll";
import AtAGlance from "@/components/AtAGlance";
import AboutMeSplit from "@/components/AboutMeSplit";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import FeaturedProjects from "@/components/FeaturedProjects";
import JourneyTimeline from "@/components/JourneyTimeline";
import ResearchSection from "@/components/ResearchSection";
import Achievements from "@/components/Achievements";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <main id="main">
      <a
        href="#glance"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-[#ff6b35] focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
      >
        Skip to content
      </a>
      <AutoScroll />
      <ScrollProgress />
      <Nav />
      <div
        id="top"
        ref={heroRef}
        style={{
          position: "relative",
          height: "500vh",
        }}
      >
        <ScrollyCanvas heroRef={heroRef} />
        <Overlay heroRef={heroRef} />
        <div className="pointer-events-none absolute inset-0 z-40">
          <div className="sticky top-[calc(100vh-4.5rem)] flex justify-center">
            <a
              href="#glance"
              className="pointer-events-auto rounded-full border border-white/20 bg-black/40 px-5 py-2 text-sm font-semibold text-white backdrop-blur-md hover:bg-black/60 transition-colors"
            >
              Skip intro ↓
            </a>
          </div>
        </div>
      </div>

      <AtAGlance />
      <AboutMeSplit />
      <Experience />
      <FeaturedProjects />
      <TechStack />
      <TagScroll />
      <ResearchSection />
      <Achievements />
      <JourneyTimeline />
      <ContactCTA />
      <Footer />
      <AskMeAI />
    </main>
  );
}

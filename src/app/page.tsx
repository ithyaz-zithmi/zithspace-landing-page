"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Header from "@/components/layout/Header/Header";
import Hero from "@/components/sections/Hero/Hero";
import DemoModal from "@/components/common/DemoModal/DemoModal";
import { Toaster } from "react-hot-toast";

// Dynamic imports with ssr:false — these are all client components, no need for SSR
const Features = dynamic(
  () => import("@/components/sections/Features/Features"),
  { ssr: false },
);
const Benefits = dynamic(
  () => import("@/components/sections/Benefits/Benefits"),
  { ssr: false },
);
const LandingPage = dynamic(
  () => import("@/components/sections/LandingPage/LandingPage"),
  { ssr: false },
);
const Industry = dynamic(
  () => import("@/components/sections/Industry/Industry"),
  { ssr: false },
);
const Comparison = dynamic(
  () => import("@/components/sections/Comparison/Comparison"),
  { ssr: false },
);
const FAQ = dynamic(() => import("@/components/sections/FAQ/FAQ"), {
  ssr: false,
});
const Pricing = dynamic(() => import("@/components/sections/Pricing/Pricing"), {
  ssr: false,
});
const Footer = dynamic(() => import("@/components/layout/Footer/Footer"), {
  ssr: false,
});
const BottomNavigation = dynamic(
  () => import("@/components/layout/BottomNavigation/BottomNavigation"),
  { ssr: false },
);

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleDemoClick = () => {
    setIsDemoModalOpen(true);
  };

  return (
    <div className="App">
      <Toaster position="top-right" />
      <div className="grid-background"></div>
      <div className="content">
        <Header onDemoClick={handleDemoClick} />
        <main>
          <Hero onDemoClick={handleDemoClick} />
          <Features />
          <Benefits />
          <LandingPage />
          <Industry />
          <Comparison />
          <FAQ />
          <Pricing />
        </main>
        <Footer />
        {isMobile && <BottomNavigation />}
        <DemoModal
          isOpen={isDemoModalOpen}
          onClose={() => setIsDemoModalOpen(false)}
        />
      </div>
    </div>
  );
}

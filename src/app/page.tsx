import HeroSection from "@/components/sections/HeroSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import AboutSection from "@/components/sections/AboutSection";
import PillarsSection from "@/components/sections/PillarsSection";
import TimelineSection from "@/components/sections/TimelineSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CoursesSection from "@/components/sections/CoursesSection";
import FooterCTA from "@/components/sections/FooterCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface">
      <HeroSection />
      <SocialProofSection />
      <AboutSection />
      <PillarsSection />
      <TimelineSection />
      <TestimonialsSection />
      <CoursesSection />
      <FooterCTA />
    </main>
  );
}

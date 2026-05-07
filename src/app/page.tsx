import HeroSection from "@/components/sections/HeroSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import MethodSection from "@/components/sections/MethodSection";
import ServicesSection from "@/components/sections/ServicesSection";
import StepsSection from "@/components/sections/StepsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CourseSection from "@/components/sections/CourseSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-on-background selection:bg-primary selection:text-on-primary">
      <HeroSection />
      <TestimonialsSection />
      {/* <SocialProofSection /> */}
      <MethodSection />
      <ServicesSection />
      <StepsSection />
      <TestimonialsSection />
      <CourseSection />
      <ContactSection />
    </main>
  );
}

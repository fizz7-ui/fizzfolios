import { Navigation } from "@/components/portfolio/Navigation";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { LeetCodeStats } from "@/components/portfolio/LeetCodeStats";
import { AchievementsSection } from "@/components/portfolio/AchievementsSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { TestimonialsSection } from "@/components/portfolio/TestimonialsSection";
import { ContactSection } from "@/components/portfolio/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      
      <main>
        <section id="home">
          <HeroSection />
        </section>
        
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <LeetCodeStats />
        <AchievementsSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;

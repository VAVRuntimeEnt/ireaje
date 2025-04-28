import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import TechSolutionsSectionNew from "@/components/sections/tech-solutions-section-new"

export default function Home() {
  return (
    <div className="relative mobile-reduced-content">
      <HeroSection />
      <div className="section-divider"></div>
      <AboutSection />
      <div className="section-divider"></div>
      <TechSolutionsSectionNew />
      <div className="section-divider section-divider-enhanced"></div>
    </div>
  )
}

"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Layers, Rocket, Zap } from "lucide-react"
import SectionHeader from "@/components/ui/section-header"
import FeatureGrid from "@/components/ui/feature-grid"
import FeatureCard from "@/components/ui/feature-card"

const solutions = [
  {
    id: "vintra",
    title: "VINTRA",
    description: "Interface entre sistemas legados e novas arquiteturas",
    icon: Layers,
    color: "from-brand-light to-brand",
  },
  {
    id: "gopilot",
    title: "GoPilot",
    description: "Plataforma de implementação acelerada para setores regulados",
    icon: Rocket,
    color: "from-brand to-brand-dark",
  },
  {
    id: "concept2code",
    title: "CONCEPT2CODE",
    description: "Transformação rápida de conceitos em implementações funcionais",
    icon: Zap,
    color: "from-brand-medium to-brand-deeper",
  },
]

export default function SolutionsSectionNew() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-24 bg-gray-50 fluid-bg">
      <div className="blob blob-1" style={{ left: "70%", top: "20%" }}></div>
      <div className="blob blob-2" style={{ left: "10%", top: "60%" }}></div>

      {/* Glass Decorative Elements */}
      <div className="absolute left-20 top-1/3 w-40 h-40 glass-panel rounded-2xl opacity-20 transform -rotate-12 animate-float-slow"></div>
      <div className="absolute right-20 bottom-1/3 w-36 h-36 glass-panel rounded-full opacity-30 animate-float"></div>

      <div className="container relative z-10">
        <SectionHeader
          title="Soluções Integradas"
          description="Nossas soluções são projetadas para transformar a maneira como os sistemas críticos são implementados, garantindo respeito e eficiência."
          inView={isInView}
        />

        <FeatureGrid inView={isInView} columns={3}>
          {solutions.map((solution) => (
            <FeatureCard
              key={solution.id}
              id={solution.id}
              title={solution.title}
              description={solution.description}
              icon={solution.icon}
              color={solution.color}
              linkHref={`/solucoes#${solution.id}`}
              linkText="Saiba mais"
              linkIcon="arrow"
            />
          ))}
        </FeatureGrid>
      </div>
    </section>
  )
}

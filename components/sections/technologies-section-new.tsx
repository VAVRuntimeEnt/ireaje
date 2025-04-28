"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Code, Database, Shield } from "lucide-react"
import SectionHeader from "@/components/ui/section-header"
import FeatureGrid from "@/components/ui/feature-grid"
import FeatureCard from "@/components/ui/feature-card"

const technologies = [
  {
    id: "runtime",
    title: "Runtime Euleriano",
    description:
      "Nossa principal diferenciação: um runtime que redefine os paradigmas convencionais, permitindo desempenho excepcional com integridade de dados incomparável.",
    icon: Database,
    color: "from-brand-light to-brand",
  },
  {
    id: "languages",
    title: "Ecossistema de Linguagens",
    description:
      "Sistema integrado de linguagens especializadas (.AJE, .IRE, .E) desenvolvidas para diferentes contextos e necessidades.",
    icon: Code,
    color: "from-brand to-brand-medium",
  },
  {
    id: "privacy",
    title: "Privacidade por Design",
    description: "Proteção de dados integrada à concepção do sistema, não como camada adicional.",
    icon: Shield,
    color: "from-brand-medium to-brand-dark",
  },
]

export default function TechnologiesSectionNew() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-24 fluid-bg technologies-section">
      {/* Glass Decorative Elements */}
      <div className="absolute left-10 top-1/4 w-32 h-32 glass-panel rounded-full opacity-10 animate-float-slow"></div>
      <div className="absolute right-10 bottom-1/4 w-48 h-48 glass-panel rounded-2xl opacity-08 transform rotate-12 animate-float"></div>

      <div className="container">
        <SectionHeader
          title="Nossas Tecnologias"
          description="Desenvolvemos tecnologias inovadoras que redefinem os paradigmas convencionais, permitindo a criação de sistemas que respeitam seus usuários."
          inView={isInView}
        />

        <FeatureGrid inView={isInView} columns={3} className="technologies-grid">
          {technologies.map((tech) => (
            <FeatureCard
              key={tech.id}
              id={tech.id}
              title={tech.title}
              description={tech.description}
              icon={tech.icon}
              color={tech.color}
              linkHref={`/tecnologias#${tech.id}`}
              linkText="Saiba mais"
              className="bg-white/5" // Extremamente transparente
            />
          ))}
        </FeatureGrid>
      </div>
    </section>
  )
}

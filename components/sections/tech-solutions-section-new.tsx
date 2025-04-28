"use client"

import { useRef, useState } from "react"
import { useInView } from "framer-motion"
import { Code, Database, Shield, Layers, Rocket, Zap } from "lucide-react"
import SectionHeader from "@/components/ui/section-header"
import TabNavigation from "@/components/ui/tab-navigation"
import FeatureGrid from "@/components/ui/feature-grid"
import FeatureCard from "@/components/ui/feature-card"
import MicrosoftBadge from "@/components/microsoft-badge"
import { AnimatePresence, motion } from "framer-motion"

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

export default function TechSolutionsSectionNew() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeTab, setActiveTab] = useState("tech")

  const tabOptions = [
    { id: "tech", label: "Tecnologias" },
    { id: "solutions", label: "Soluções" },
  ]

  return (
    <section ref={ref} className="section-spacing py-28 relative overflow-hidden tech-solutions-section">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white -z-10"></div>
      <div className="blob blob-1" style={{ left: "70%", top: "20%", background: "rgba(0, 120, 215, 0.15)" }}></div>
      <div className="blob blob-2" style={{ left: "10%", top: "60%", background: "rgba(0, 70, 155, 0.1)" }}></div>
      <div className="blob blob-3" style={{ left: "40%", top: "80%", background: "rgba(0, 40, 100, 0.08)" }}></div>

      <div className="container relative z-10">
        {/* Microsoft Partnership Highlight */}

        <SectionHeader
          title="Tecnologia & Soluções"
          description="Como startup de tecnologia, desenvolvemos soluções inovadoras que redefinem os paradigmas convencionais, permitindo a criação de sistemas que respeitam seus usuários."
          inView={isInView}
        />

        {/* Tab Navigation */}
        <TabNavigation options={tabOptions} activeTab={activeTab} onChange={setActiveTab} />

        {/* Content Area */}
        <AnimatePresence mode="wait">
          {activeTab === "tech" ? (
            <motion.div
              key="tech"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-6xl mx-auto"
            >
              <FeatureGrid inView={isInView} columns={3}>
                {technologies.map((tech) => (
                  <FeatureCard
                    key={tech.id}
                    id={tech.id}
                    title={tech.title}
                    description={tech.description}
                    icon={tech.icon}
                    color={tech.color}
                    linkHref={`/tecnologias#${tech.id}`}
                  />
                ))}
              </FeatureGrid>

              {/* Tech Diagram - Hidden on Mobile */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-10 md:mt-16 glass-panel-strong p-6 md:p-8 rounded-xl md:block hidden"
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="md:w-1/2">
                    <h3 className="text-xl md:text-2xl font-bold mb-4 gradient-text">Arquitetura Integrada</h3>
                    <p className="text-gray-600 mb-6 text-sm md:text-base">
                      Nossa stack tecnológica proprietária trabalha em conjunto para criar sistemas que respeitam seus
                      usuários finais, com performance e segurança incomparáveis.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="glass-pill text-brand">Runtime Euleriano</span>
                      <span className="glass-pill text-brand-medium">.AJE</span>
                      <span className="glass-pill text-brand-dark">.IRE</span>
                      <span className="glass-pill text-brand-deeper">.E</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 bg-white/30 rounded-xl p-6 relative">
                    {/* Simplified Architecture Diagram */}
                    <div className="h-48 relative">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 glass-panel-strong p-3 rounded-lg text-center w-40">
                        <p className="text-sm font-bold">Aplicações</p>
                      </div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass-panel-strong p-3 rounded-lg text-center w-48 bg-gradient-to-r from-brand/30 to-brand-medium/30">
                        <p className="text-sm font-bold">Runtime Euleriano</p>
                      </div>
                      <div className="absolute bottom-0 left-1/4 -translate-x-1/2 glass-panel-strong p-2 rounded-lg text-center w-24">
                        <p className="text-xs font-bold">.AJE</p>
                      </div>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 glass-panel-strong p-2 rounded-lg text-center w-24">
                        <p className="text-xs font-bold">.IRE</p>
                      </div>
                      <div className="absolute bottom-0 left-3/4 -translate-x-1/2 glass-panel-strong p-2 rounded-lg text-center w-24">
                        <p className="text-xs font-bold">.E</p>
                      </div>
                      {/* Connection Lines */}
                      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <line x1="50%" y1="24" x2="50%" y2="72" stroke="#0078D7" strokeWidth="2" strokeDasharray="4" />
                        <line x1="50%" y1="96" x2="25%" y2="144" stroke="#0078D7" strokeWidth="2" strokeDasharray="4" />
                        <line x1="50%" y1="96" x2="50%" y2="144" stroke="#0078D7" strokeWidth="2" strokeDasharray="4" />
                        <line x1="50%" y1="96" x2="75%" y2="144" stroke="#0078D7" strokeWidth="2" strokeDasharray="4" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Microsoft Founders Hub Badge */}
              <div className="mt-16 mb-8">
                <MicrosoftBadge />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="solutions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-6xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {solutions.map((solution, index) => (
                  <div key={solution.id} className={index === 0 ? "md:col-span-8" : "md:col-span-6"}>
                    <FeatureCard
                      id={solution.id}
                      title={solution.title}
                      description={solution.description}
                      icon={solution.icon}
                      color={solution.color}
                      linkHref={`/solucoes#${solution.id}`}
                      linkText="Saiba mais"
                      linkIcon="arrow"
                      fullWidth
                    />
                  </div>
                ))}
              </div>

              {/* Case Study Highlight - Hidden on Mobile */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-10 md:mt-16 glass-panel-strong p-6 md:p-8 rounded-xl bg-gradient-to-br from-white/80 via-white/60 to-white/80 md:block hidden"
              >
                {/* Case Study Content - Mantido do componente original */}
                {/* ... */}
              </motion.div>

              {/* Microsoft Founders Hub Badge */}
              <div className="mt-16 mb-8">
                <MicrosoftBadge />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

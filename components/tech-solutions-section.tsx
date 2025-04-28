"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ArrowRight, Code, Database, Shield, Layers, Rocket, Zap, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import MicrosoftBadge from "./microsoft-badge"

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

export default function TechSolutionsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeTab, setActiveTab] = useState("tech")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section ref={ref} className="section-spacing py-28 relative overflow-hidden tech-solutions-section">
      {" "}
      {/* Adicionando classe tech-solutions-section para menor opacidade */}
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white -z-10"></div>
      <div className="blob blob-1" style={{ left: "70%", top: "20%", background: "rgba(0, 120, 215, 0.15)" }}></div>
      <div className="blob blob-2" style={{ left: "10%", top: "60%", background: "rgba(0, 70, 155, 0.1)" }}></div>
      <div className="blob blob-3" style={{ left: "40%", top: "80%", background: "rgba(0, 40, 100, 0.08)" }}></div>
      {/* Geometric Patterns */}
      <div className="geometric-pattern"></div>
      <div className="geometric-dots"></div>
      {/* Glass Accents */}
      <div className="glass-accent glass-accent-1 top-40 right-20 md:block hidden"></div>
      <div className="glass-accent glass-accent-2 bottom-40 left-20 md:block hidden"></div>
      <div className="glass-accent glass-accent-3 top-1/3 left-1/4 md:block hidden"></div>
      {/* Geometric Shapes */}
      <div
        className="geometric-shape geometric-triangle absolute top-[15%] right-[10%] animate-float-geometric"
        style={{ opacity: 0.3 }}
      ></div>
      <div
        className="geometric-shape geometric-square absolute bottom-[25%] left-[15%] animate-float-geometric"
        style={{ opacity: 0.3, animationDelay: "-2s" }}
      ></div>
      <div
        className="geometric-shape geometric-hexagon absolute top-[70%] right-[20%] animate-float-geometric"
        style={{ opacity: 0.3, animationDelay: "-3s" }}
      ></div>
      <div className="container relative z-10">
        {/* Microsoft Partnership Highlight - Centralizado e com destaque */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card-strong p-4 md:p-6 rounded-xl shadow-xl max-w-md mx-auto mb-8 md:mb-10 bg-gradient-to-r from-white/80 to-white/70 border-2 border-brand/20"
        >
          <div className="flex items-center justify-center gap-4">
            <div className="bg-white/60 p-2 md:p-3 rounded-lg shadow-md">
              <Image src="/microsoft-logo.png" alt="Microsoft" width={40} height={40} className="h-8 md:h-10 w-auto" />
            </div>
            <div className="text-center md:text-left">
              <p className="text-sm md:text-base text-gray-700 font-medium">Startup membro do</p>
              <p className="text-base md:text-lg font-bold gradient-text">Microsoft for Startups Founders Hub</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className="glass-panel-strong p-6 md:p-8 rounded-2xl inline-block mb-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text">Tecnologia & Soluções</h2>
          </div>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            Como startup de tecnologia, desenvolvemos soluções inovadoras que redefinem os paradigmas convencionais,
            permitindo a criação de sistemas que respeitam seus usuários.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-8 md:mb-12"
        >
          <div className="glass-panel-strong rounded-full p-1 inline-flex">
            <button
              onClick={() => setActiveTab("tech")}
              className={cn(
                "px-4 md:px-6 py-2 rounded-full transition-all duration-300",
                activeTab === "tech"
                  ? "bg-gradient-to-r from-brand-light to-brand text-white shadow-md"
                  : "hover:bg-white/30",
              )}
            >
              <span className="text-sm md:text-base">Tecnologias</span>
            </button>
            <button
              onClick={() => setActiveTab("solutions")}
              className={cn(
                "px-4 md:px-6 py-2 rounded-full transition-all duration-300",
                activeTab === "solutions"
                  ? "bg-gradient-to-r from-brand to-brand-dark text-white shadow-md"
                  : "hover:bg-white/30",
              )}
            >
              <span className="text-sm md:text-base">Soluções</span>
            </button>
          </div>
        </motion.div>

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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {technologies.map((tech) => (
                  <motion.div
                    key={tech.id}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    className="glass-card-strong p-4 md:p-6 rounded-xl relative overflow-hidden"
                  >
                    {/* Background Gradient */}
                    <div className={cn("absolute inset-0 bg-gradient-to-br opacity-20 -z-10", tech.color)}></div>

                    <div className="flex items-start gap-4">
                      <div className={`bg-gradient-to-br ${tech.color} p-2 md:p-3 rounded-xl text-white shadow-lg`}>
                        <tech.icon className="h-5 w-5 md:h-6 md:w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold mb-2">{tech.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-xs md:text-sm">{tech.description}</p>
                      </div>
                    </div>

                    {/* Static Button */}
                    <div className="mt-4 pt-4 border-t border-white/20 flex justify-end">
                      <Button variant="ghost" size="sm" className="text-brand">
                        <span className="text-xs md:text-sm">Saiba mais</span>
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>

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

              {/* Microsoft Founders Hub Badge - Added between sections */}
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
                  <motion.div
                    key={solution.id}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    className={cn(
                      "glass-card-strong p-4 md:p-6 rounded-xl relative overflow-hidden",
                      index === 0 ? "md:col-span-8" : "md:col-span-6",
                    )}
                  >
                    {/* Background Gradient */}
                    <div className={cn("absolute inset-0 bg-gradient-to-br opacity-20 -z-10", solution.color)}></div>

                    <div className="flex items-start gap-4">
                      <div className={`bg-gradient-to-br ${solution.color} p-2 md:p-3 rounded-xl text-white shadow-lg`}>
                        <solution.icon className="h-5 w-5 md:h-6 md:w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold mb-2">{solution.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-xs md:text-sm">{solution.description}</p>
                      </div>
                    </div>

                    {/* Static Button */}
                    <div className="mt-4 pt-4 border-t border-white/20 flex justify-end">
                      <Link href={`/solucoes#${solution.id}`}>
                        <Button variant="ghost" size="sm" className="text-brand">
                          <span className="text-xs md:text-sm">Saiba mais</span>
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Case Study Highlight - Hidden on Mobile */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-10 md:mt-16 glass-panel-strong p-6 md:p-8 rounded-xl bg-gradient-to-br from-white/80 via-white/60 to-white/80 md:block hidden"
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/3">
                    <div className="bg-gradient-to-br from-brand-light to-brand-dark p-1 rounded-xl shadow-lg">
                      <div className="bg-white rounded-lg p-6">
                        <h3 className="text-xl font-bold text-brand mb-2">Case de Sucesso</h3>
                        <p className="text-gray-600 text-sm">
                          Implementação de sistema médico com redução de 87% nos erros críticos e aumento de 65% na
                          satisfação dos usuários.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl md:text-2xl font-bold mb-4 gradient-text">Transformação Digital Completa</h3>
                    <p className="text-gray-600 mb-6 text-sm md:text-base">
                      Nossas soluções trabalham em conjunto para criar uma experiência digital completa, desde a
                      concepção até a implementação e manutenção.
                    </p>
                    <div className="flex items-center gap-4">
                      <Link href="/casos">
                        <Button className="btn-microsoft-blue px-4 md:px-6 py-2 h-auto border-2 border-white/30 rounded-lg">
                          <span className="relative z-10 text-sm md:text-base font-semibold">Ver todos os casos</span>
                          <ArrowRight className="ml-2 h-4 w-4 relative z-10" />
                        </Button>
                      </Link>
                      <span className="text-xs md:text-sm text-gray-500">+15 projetos implementados</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Microsoft Founders Hub Badge - Added between sections */}
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

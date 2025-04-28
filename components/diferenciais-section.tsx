"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Check, ChevronRight, BarChart2, Shield, Zap, Clock, Users, Award } from "lucide-react"
import { cn } from "@/lib/utils"

const diferenciais = [
  {
    id: "sistemas-medicos",
    title: "Sistemas Médicos Repensados",
    description: "Uma nova abordagem que coloca o paciente como entidade central da arquitetura.",
    icon: Users,
    color: "from-brand-light to-brand",
    stats: [
      { value: "87%", label: "Redução de erros críticos" },
      { value: "65%", label: "Aumento na satisfação" },
      { value: "3.2x", label: "Mais eficiente" },
    ],
    points: [
      "Colocando o paciente como entidade central da arquitetura",
      "Eliminação de redundâncias sistêmicas",
      "Redução de erros críticos através de um novo paradigma de estruturação",
    ],
  },
  {
    id: "velocidade",
    title: "Velocidade com Integridade",
    description: "Runtime com capacidade de processamento superior aos padrões de mercado.",
    icon: Zap,
    color: "from-brand to-brand-dark",
    stats: [
      { value: "10x", label: "Mais rápido" },
      { value: "99.9%", label: "Uptime garantido" },
      { value: "50%", label: "Menos recursos" },
    ],
    points: [
      "Runtime com capacidade de processamento superior aos padrões de mercado",
      "Garantia de consistência de dados mesmo sob alta demanda",
      "Arquitetura que cresce lateralmente sem comprometer a experiência",
    ],
  },
  {
    id: "seguranca",
    title: "Segurança por Design",
    description: "Proteção integrada à arquitetura, não como uma camada adicional.",
    icon: Shield,
    color: "from-brand-medium to-brand-deeper",
    stats: [
      { value: "0", label: "Vulnerabilidades críticas" },
      { value: "100%", label: "Compliance LGPD" },
      { value: "24/7", label: "Monitoramento" },
    ],
    points: [
      "Segurança integrada desde a concepção do sistema",
      "Proteção de dados sensíveis com criptografia avançada",
      "Conformidade com regulamentações internacionais de privacidade",
    ],
  },
]

export default function DiferenciaisSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeTab, setActiveTab] = useState("sistemas-medicos")

  return (
    <section ref={ref} className="section-spacing relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 -z-10"></div>
      <div className="blob blob-3" style={{ left: "60%", top: "30%" }}></div>
      <div className="blob blob-1" style={{ left: "10%", top: "70%" }}></div>

      {/* Geometric Patterns */}
      <div className="geometric-pattern"></div>
      <div className="geometric-dots"></div>
      <div className="geometric-lines"></div>

      {/* Glass Accents */}
      <div className="glass-accent glass-accent-1 top-20 right-10 md:block hidden"></div>
      <div className="glass-accent glass-accent-2 bottom-20 left-10 md:block hidden"></div>
      <div className="glass-accent glass-accent-3 top-1/2 left-1/4 md:block hidden"></div>

      {/* Glass Decorative Elements */}
      <div className="absolute left-10 bottom-1/4 w-32 h-32 glass-panel rounded-lg opacity-20 transform rotate-12 animate-float md:block hidden"></div>
      <div className="absolute right-10 top-1/4 w-48 h-48 glass-panel rounded-2xl opacity-30 transform -rotate-6 animate-float-slow md:block hidden"></div>

      <div className="container relative z-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className="glass-panel-strong p-6 md:p-8 rounded-2xl inline-block mb-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text">Nossos Diferenciais</h2>
          </div>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            Transformamos desafios complexos em soluções elegantes e eficientes através de nossa abordagem inovadora e
            tecnologias proprietárias.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Interactive Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12"
          >
            {diferenciais.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={cn(
                  "glass-panel-strong rounded-xl p-3 md:p-4 transition-all duration-300 flex items-center gap-2 md:gap-3",
                  activeTab === item.id ? "shadow-lg scale-105 bg-white/50" : "hover:bg-white/30 hover:scale-[1.02]",
                )}
              >
                <div
                  className={cn(
                    "p-1.5 md:p-2 rounded-lg text-white",
                    activeTab === item.id ? `bg-gradient-to-r ${item.color}` : "bg-gray-300",
                  )}
                >
                  <item.icon className="h-4 w-4 md:h-5 md:w-5" />
                </div>
                <span
                  className={cn(
                    "font-medium text-xs md:text-sm",
                    activeTab === item.id ? "text-gray-900" : "text-gray-600",
                  )}
                >
                  {item.title}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
            {/* Left Side - Details */}
            <AnimatePresence mode="wait">
              {diferenciais.map(
                (item) =>
                  activeTab === item.id && (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.5 }}
                      className="lg:col-span-7 glass-card-strong p-6 md:p-8 rounded-xl"
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`p-2 md:p-3 rounded-xl text-white bg-gradient-to-r ${item.color} shadow-lg`}>
                          <item.icon className="h-5 w-5 md:h-6 md:w-6" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold gradient-text">{item.title}</h3>
                      </div>

                      <p className="text-gray-600 text-sm md:text-lg mb-6 md:mb-8">{item.description}</p>

                      <h4 className="text-base md:text-lg font-semibold mb-4">Principais benefícios:</h4>
                      <ul className="space-y-4 md:space-y-6 mb-6 md:mb-8">
                        {item.points.map((point, pointIndex) => (
                          <motion.li
                            key={pointIndex}
                            className="flex items-start"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 + pointIndex * 0.1 }}
                          >
                            <div
                              className={`p-1 rounded-full text-white bg-gradient-to-r ${item.color} shadow mr-3 mt-1.5`}
                            >
                              <Check className="h-3 w-3 md:h-4 md:w-4" />
                            </div>
                            <span className="text-gray-600 leading-relaxed text-xs md:text-sm">{point}</span>
                          </motion.li>
                        ))}
                      </ul>

                      {/* Glass Divider */}
                      <div className="glass-divider mb-6"></div>

                      <div className="flex items-center justify-between">
                        <div className="glass-pill text-brand text-xs md:text-sm">Tecnologia Proprietária</div>
                        <button className="flex items-center text-brand transition-colors group">
                          <span className="text-xs md:text-sm font-medium">Saiba mais</span>
                          <ChevronRight className="ml-1 h-3 w-3 md:h-4 md:w-4" />
                        </button>
                      </div>
                    </motion.div>
                  ),
              )}
            </AnimatePresence>

            {/* Right Side - Stats */}
            <AnimatePresence mode="wait">
              {diferenciais.map(
                (item) =>
                  activeTab === item.id && (
                    <motion.div
                      key={`stats-${item.id}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5 }}
                      className="lg:col-span-5 flex flex-col gap-4 md:gap-6"
                    >
                      {/* Stats Cards */}
                      <div className="glass-card-strong p-4 md:p-6 rounded-xl">
                        <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-6 flex items-center">
                          <BarChart2 className="mr-2 h-4 w-4 md:h-5 md:w-5 text-brand" />
                          Resultados Comprovados
                        </h4>
                        <div className="grid grid-cols-3 gap-3 md:gap-4">
                          {item.stats.map((stat, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                              className="text-center"
                            >
                              <div
                                className={`text-xl md:text-2xl font-bold mb-1 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                              >
                                {stat.value}
                              </div>
                              <div className="text-xs text-gray-500">{stat.label}</div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Case Study Preview - Hidden on Mobile */}
                      <div className="glass-card-strong p-4 md:p-6 rounded-xl relative overflow-hidden md:block hidden">
                        <div
                          className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-10 rounded-bl-[100px] -z-10`}
                        ></div>

                        <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 flex items-center">
                          <Award className="mr-2 h-4 w-4 md:h-5 md:w-5 text-brand" />
                          Case de Sucesso
                        </h4>

                        <div className="bg-white/50 rounded-lg p-3 md:p-4 mb-4">
                          <p className="text-gray-600 text-xs md:text-sm italic">
                            "A implementação do sistema da IREAJE.NET transformou completamente nossa operação,
                            reduzindo erros e aumentando a satisfação dos usuários."
                          </p>
                          <div className="mt-3 flex items-center">
                            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-brand-light to-brand flex items-center justify-center text-white font-bold text-xs">
                              JD
                            </div>
                            <div className="ml-2">
                              <p className="text-xs font-semibold">João Dantas</p>
                              <p className="text-xs text-gray-500">CTO, Hospital São Lucas</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-end">
                          <button className="text-xs md:text-sm text-brand transition-colors flex items-center group">
                            Ver todos os cases
                            <ChevronRight className="ml-1 h-3 w-3 md:h-4 md:w-4" />
                          </button>
                        </div>
                      </div>

                      {/* Timeline - Hidden on Mobile */}
                      <div className="glass-card-strong p-4 md:p-6 rounded-xl md:block hidden">
                        <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 flex items-center">
                          <Clock className="mr-2 h-4 w-4 md:h-5 md:w-5 text-brand" />
                          Implementação Rápida
                        </h4>

                        <div className="space-y-3">
                          <div className="flex items-center">
                            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-brand-light to-brand flex items-center justify-center text-white text-xs">
                              1
                            </div>
                            <div className="h-6 md:h-8 w-px bg-gradient-to-b from-brand to-transparent mx-2 md:mx-3"></div>
                            <div className="text-xs md:text-sm">
                              <p className="font-medium">Diagnóstico</p>
                              <p className="text-xs text-gray-500">1-2 semanas</p>
                            </div>
                          </div>

                          <div className="flex items-center">
                            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-brand to-brand-medium flex items-center justify-center text-white text-xs">
                              2
                            </div>
                            <div className="h-6 md:h-8 w-px bg-gradient-to-b from-brand-medium to-transparent mx-2 md:mx-3"></div>
                            <div className="text-xs md:text-sm">
                              <p className="font-medium">Implementação</p>
                              <p className="text-xs text-gray-500">4-8 semanas</p>
                            </div>
                          </div>

                          <div className="flex items-center">
                            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-brand-medium to-brand-dark flex items-center justify-center text-white text-xs">
                              3
                            </div>
                            <div className="text-xs md:text-sm ml-2 md:ml-4">
                              <p className="font-medium">Resultados</p>
                              <p className="text-xs text-gray-500">Imediatos</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

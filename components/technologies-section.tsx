"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Database, Shield } from "lucide-react"

const technologies = [
  {
    title: "Runtime Euleriano",
    description:
      "Nossa principal diferenciação: um runtime que redefine os paradigmas convencionais, permitindo desempenho excepcional com integridade de dados incomparável.",
    icon: Database,
  },
  {
    title: "Ecossistema de Linguagens",
    description:
      "Sistema integrado de linguagens especializadas (.AJE, .IRE, .E) desenvolvidas para diferentes contextos e necessidades.",
    icon: Code,
  },
  {
    title: "Privacidade por Design",
    description: "Proteção de dados integrada à concepção do sistema, não como camada adicional.",
    icon: Shield,
  },
]

export default function TechnologiesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section ref={ref} className="py-24 fluid-bg">
      {/* Glass Decorative Elements */}
      <div className="absolute left-10 top-1/4 w-32 h-32 glass-panel rounded-full opacity-30 animate-float-slow"></div>
      <div className="absolute right-10 bottom-1/4 w-48 h-48 glass-panel rounded-2xl opacity-20 transform rotate-12 animate-float"></div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="glass-panel-strong p-8 rounded-2xl inline-block mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">Nossas Tecnologias</h2>
          </div>
          <p className="text-gray-600 leading-relaxed text-lg">
            Desenvolvemos tecnologias inovadoras que redefinem os paradigmas convencionais, permitindo a criação de
            sistemas que respeitam seus usuários.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-10 md:grid-cols-3"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card-strong p-8 rounded-xl text-center transform transition-all hover:shadow-2xl"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-teal/10 rounded-full blur-xl transform scale-90 animate-pulse-slow"></div>
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/40 backdrop-blur-md text-teal mb-6 relative z-10 border border-white/40 shadow-lg">
                  <tech.icon className="h-10 w-10" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">{tech.title}</h3>
              <p className="text-gray-600 leading-relaxed">{tech.description}</p>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-20 h-20 rounded-tr-xl rounded-bl-[100px] bg-teal/5 -z-10"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 rounded-bl-xl rounded-tr-[100px] bg-teal/5 -z-10"></div>

              {/* Glass Divider */}
              <div className="glass-divider mt-6 mb-4"></div>

              <div className="glass-pill text-teal">Tecnologia Proprietária</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

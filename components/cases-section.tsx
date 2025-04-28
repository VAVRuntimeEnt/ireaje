"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const cases = [
  {
    title: "Sistemas Médicos Repensados",
    points: [
      "Colocando o paciente como entidade central da arquitetura",
      "Eliminação de redundâncias sistêmicas",
      "Redução de erros críticos através de um novo paradigma de estruturação",
    ],
  },
  {
    title: "Velocidade com Integridade",
    points: [
      "Runtime com capacidade de processamento superior aos padrões de mercado",
      "Garantia de consistência de dados mesmo sob alta demanda",
      "Arquitetura que cresce lateralmente sem comprometer a experiência",
    ],
  },
]

export default function CasesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-24 fluid-bg">
      <div className="blob blob-3" style={{ left: "60%", top: "30%" }}></div>

      {/* Glass Decorative Elements */}
      <div className="absolute left-10 bottom-1/4 w-32 h-32 glass-panel rounded-lg opacity-20 transform rotate-12 animate-float"></div>
      <div className="absolute right-10 top-1/4 w-48 h-48 glass-panel rounded-2xl opacity-30 transform -rotate-6 animate-float-slow"></div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="glass-panel-strong p-8 rounded-2xl inline-block mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">Diferenciais</h2>
          </div>
          <p className="text-gray-600 leading-relaxed text-lg">
            Nossos casos demonstram como a abordagem da IREAJE.NET transforma desafios complexos em soluções elegantes e
            eficientes.
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2">
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card-strong p-8 rounded-xl relative overflow-hidden"
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-teal/5 rounded-bl-[100px] -z-10"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-teal/5 rounded-full -z-10"></div>

              <div className="glass-panel-strong inline-block p-4 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-teal">Caso: {caseItem.title}</h3>
              </div>

              <ul className="space-y-6">
                {caseItem.points.map((point, pointIndex) => (
                  <motion.li
                    key={pointIndex}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.4, delay: 0.3 + pointIndex * 0.1 }}
                  >
                    <span className="inline-block w-3 h-3 rounded-full bg-teal/50 backdrop-blur-sm mt-1.5 mr-3 animate-pulse-slow"></span>
                    <span className="text-gray-600 leading-relaxed">{point}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Glass Divider */}
              <div className="glass-divider mt-8"></div>

              <div className="glass-pill text-teal mt-4">Caso de Sucesso</div>

              {/* Animated Border */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal/30 to-transparent"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

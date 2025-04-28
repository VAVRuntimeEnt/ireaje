"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Layers, Rocket, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const solutions = [
  {
    id: "vintra",
    title: "VINTRA",
    description: "Interface entre sistemas legados e novas arquiteturas",
    icon: Layers,
  },
  {
    id: "gopilot",
    title: "GoPilot",
    description: "Plataforma de implementação acelerada para setores regulados",
    icon: Rocket,
  },
  {
    id: "concept2code",
    title: "CONCEPT2CODE",
    description: "Transformação rápida de conceitos em implementações funcionais",
    icon: Zap,
  },
]

export default function SolutionsSection() {
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
    <section ref={ref} className="py-24 bg-gray-50 fluid-bg">
      <div className="blob blob-1" style={{ left: "70%", top: "20%" }}></div>
      <div className="blob blob-2" style={{ left: "10%", top: "60%" }}></div>

      {/* Glass Decorative Elements */}
      <div className="absolute left-20 top-1/3 w-40 h-40 glass-panel rounded-2xl opacity-20 transform -rotate-12 animate-float-slow"></div>
      <div className="absolute right-20 bottom-1/3 w-36 h-36 glass-panel rounded-full opacity-30 animate-float"></div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="glass-panel-strong p-8 rounded-2xl inline-block mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">Soluções Integradas</h2>
          </div>
          <p className="text-gray-600 leading-relaxed text-lg">
            Nossas soluções são projetadas para transformar a maneira como os sistemas críticos são implementados,
            garantindo respeito e eficiência.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-10 md:grid-cols-3"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card-strong p-8 rounded-xl relative overflow-hidden"
            >
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal/5 rounded-bl-[100px] -z-10"></div>

              <div className="relative">
                <div className="absolute inset-0 bg-teal/10 rounded-full blur-xl transform scale-90 animate-pulse-slow"></div>
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/40 backdrop-blur-md text-teal mb-6 relative z-10 border border-white/40 shadow-lg">
                  <solution.icon className="h-10 w-10" />
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4">{solution.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{solution.description}</p>

              {/* Glass Divider */}
              <div className="glass-divider mb-6"></div>

              <Link href={`/solucoes#${solution.id}`}>
                <Button variant="link" className="p-0 h-auto text-teal hover:text-teal-dark group">
                  Saiba mais
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>

              {/* Animated Border */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal/30 to-transparent"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

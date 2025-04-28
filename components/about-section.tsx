"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { BookOpen, Compass, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import MicrosoftBadgeSimple from "@/components/ui/microsoft-badge-simple"

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section ref={ref} className="section-spacing relative overflow-hidden">
      {/* Removendo os elementos de fundo que podem interferir com o novo background */}
      {/* <div className="blob blob-1" style={{ left: "70%", top: "20%", background: "rgba(0, 120, 215, 0.15)" }}></div>
      <div className="blob blob-2" style={{ left: "10%", top: "60%", background: "rgba(0, 70, 155, 0.1)" }}></div>
      <div className="geometric-pattern"></div>
      <div className="geometric-lines"></div>
      <div className="glass-accent glass-accent-1 top-20 left-10 md:block hidden"></div>
      <div className="glass-accent glass-accent-2 bottom-20 right-10 md:block hidden"></div>
      <div className="glass-accent glass-accent-3 top-1/2 right-1/4 md:block hidden"></div> */}

      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-8"
          >
            <div className="glass-panel-strong p-6 md:p-8 rounded-2xl inline-block mb-4 bg-white/60">
              {" "}
              {/* Aumentando transparência */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text">Nossa História</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg max-w-3xl mx-auto">
              Conheça nossa trajetória e os princípios que guiam nossa missão de criar sistemas que respeitam seus
              usuários.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
            {/* Left Column - Origin Story */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7"
            >
              <div className="glass-card-strong p-6 md:p-8 rounded-xl relative overflow-hidden bg-white/60">
                {" "}
                {/* Aumentando transparência */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand/5 rounded-bl-[100px] -z-10"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-brand/5 rounded-full -z-10"></div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-r from-brand-light to-brand p-3 rounded-xl text-white shadow-lg">
                    <BookOpen className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold gradient-text">Nossa Origem</h3>
                </div>
                <div className="space-y-4 md:space-y-6 text-gray-600">
                  <p className="leading-relaxed text-sm md:text-base">
                    A IREAJE.NET nasceu da experiência direta com as limitações dos sistemas de registro médico. Da
                    frustração com o desrespeito ao paciente nas estruturas atuais, surgiu não uma tentativa de
                    conserto, mas a determinação de criar algo fundamentalmente novo.
                  </p>

                  <div className="glass-panel p-4 md:p-6 rounded-xl bg-white/40">
                    {" "}
                    {/* Aumentando transparência */}
                    <h4 className="text-lg md:text-xl font-bold text-brand mb-2 md:mb-3">Nossa Visão</h4>
                    <p className="leading-relaxed text-sm md:text-base">
                      Desenvolver tecnologias que restabelecem o respeito como valor central, reimaginando a arquitetura
                      de sistemas críticos para setores onde a dignidade humana não pode ser comprometida.
                    </p>
                  </div>

                  <div className="flex justify-end">
                    <Link href="/sobre">
                      <Button variant="ghost" className="text-brand group">
                        <span className="md:inline hidden">Conheça nossa história completa</span>
                        <span className="md:hidden inline">Saiba mais</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Principles */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 flex flex-col gap-6"
            >
              <div className="glass-card-strong p-4 md:p-6 rounded-xl relative overflow-hidden bg-white/60">
                {" "}
                {/* Aumentando transparência */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-bl-[100px] -z-10"></div>
                <div className="flex items-center gap-4 mb-4 md:mb-6">
                  <div className="bg-gradient-to-r from-brand to-brand-dark p-3 rounded-xl text-white shadow-lg">
                    <Compass className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold gradient-text">Nossos Princípios</h3>
                </div>
                <div className="space-y-4 md:space-y-6">
                  {[
                    {
                      title: "Nascimento, não refundação",
                      description:
                        "Criamos sistemas a partir de uma folha em branco, livres das limitações das estruturas convencionais.",
                    },
                    {
                      title: "Respeito como arquitetura",
                      description:
                        "O respeito pelo usuário final não é uma característica, mas o alicerce estrutural de nossas soluções.",
                    },
                    {
                      title: "Privacidade por design",
                      description: "Proteção de dados integrada à concepção do sistema, não como camada adicional.",
                    },
                  ].map((principle, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="glass-panel p-4 rounded-lg bg-white/40" /* Aumentando transparência */
                    >
                      <h4 className="text-base md:text-lg font-bold text-brand mb-2">{principle.title}</h4>
                      <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{principle.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Microsoft Partnership Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 md:mt-16 max-w-3xl mx-auto text-center"
          >
            <p className="text-gray-600 mb-4 text-sm md:text-base">
              Nossa trajetória é fortalecida por parcerias estratégicas que impulsionam nossa inovação:
            </p>
            <MicrosoftBadgeSimple
              className="transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl border-2 border-brand/30"
              inView={isInView}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

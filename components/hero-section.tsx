"use client"

import { useRef } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden" // Aumentando o padding
    >
      {/* Removendo os elementos de fundo que podem interferir com o novo background */}
      {/* <div className="blob blob-1" style={{ background: "rgba(0, 120, 215, 0.25)" }}></div>
      <div className="blob blob-2" style={{ background: "rgba(0, 70, 155, 0.2)" }}></div>
      <div className="geometric-pattern"></div>
      <div className="glass-accent glass-accent-1 top-40 left-10 md:block hidden"></div>
      <div className="glass-accent glass-accent-2 bottom-40 right-10 md:block hidden"></div> */}

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel-strong p-5 md:p-10 rounded-2xl mb-6 md:mb-12 animated-border bg-white/60" // Reduced padding on mobile
          >
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight mb-3 md:mb-6 gradient-text">
              Arquitetura, Linguagem, Afeto
            </h1>
            <p className="text-base md:text-xl lg:text-2xl text-gray-800 max-w-2xl mx-auto font-medium">
              Para um novo paradigma Humanidade-IA.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="pt-3 md:pt-8 relative z-20"
          >
            <Link href="/sobre">
              <Button className="btn-microsoft-blue rounded-full px-5 md:px-8 py-3 md:py-6 h-auto text-base md:text-lg shadow-xl border-2 border-white/30 bg-opacity-80">
                <span className="relative z-10 font-semibold">Conheça nossa visão</span>
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 relative z-10" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Removendo os painéis de vidro animados que podem interferir com o novo background */}
      {/* <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-1/4 -left-20 w-48 md:w-64 h-48 md:h-64 glass-panel rounded-2xl transform rotate-12 animate-float"
        style={{ animationDelay: "0s", zIndex: 5 }}
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-1/3 -right-20 w-60 md:w-80 h-60 md:h-80 glass-panel rounded-2xl transform -rotate-12 animate-float-slow"
        style={{ animationDelay: "-3s", zIndex: 5 }}
      ></motion.div>

      <div
        className="geometric-shape geometric-triangle absolute top-[10%] right-[15%] animate-float-geometric"
        style={{ opacity: 0.4 }}
      ></div>
      <div
        className="geometric-shape geometric-square absolute bottom-[20%] right-[25%] animate-float-geometric"
        style={{ opacity: 0.3, animationDelay: "-2s" }}
      ></div> */}
    </section>
  )
}

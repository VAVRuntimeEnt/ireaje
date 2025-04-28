"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function GlassDecorations() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    // Atrasa a renderização dos elementos decorativos para priorizar o conteúdo principal
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Painéis de vidro estrategicamente posicionados - Reduzido para maior nitidez */}
      <motion.div
        className={`glass-decoration glass-decoration-circle w-16 h-16 top-[15%] left-[8%] lazy-load ${isLoaded ? "loaded" : ""}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className={`glass-decoration glass-decoration-circle w-24 h-24 top-[25%] right-[12%] lazy-load ${isLoaded ? "loaded" : ""}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      />
      <motion.div
        className={`glass-decoration glass-decoration-square w-20 h-20 top-[10%] right-[25%] lazy-load ${isLoaded ? "loaded" : ""}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ transform: "rotate(15deg)" }}
      />
      <motion.div
        className={`glass-decoration glass-decoration-square w-16 h-16 top-[35%] left-[22%] lazy-load ${isLoaded ? "loaded" : ""}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{ transform: "rotate(-10deg)" }}
      />
      <motion.div
        className={`glass-decoration glass-decoration-pill w-32 h-12 top-[20%] left-[30%] lazy-load ${isLoaded ? "loaded" : ""}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      />

      {/* Elementos flutuantes de vidro - Mais sólidos para maior nitidez */}
      <div className={`glass-float glass-float-1 top-[18%] left-[18%] lazy-load ${isLoaded ? "loaded" : ""}`}></div>
      <div className={`glass-float glass-float-2 top-[32%] right-[15%] lazy-load ${isLoaded ? "loaded" : ""}`}></div>
      <div className={`glass-float glass-float-3 top-[50%] left-[25%] lazy-load ${isLoaded ? "loaded" : ""}`}></div>
    </div>
  )
}

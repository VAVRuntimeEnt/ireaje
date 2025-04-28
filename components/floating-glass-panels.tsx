"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function FloatingGlassPanels() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Painéis com maior opacidade para nitidez */}
      <motion.div
        className={`floating-panel absolute top-[20%] left-[10%] w-32 h-32 glass-panel-strong rounded-2xl lazy-load ${isLoaded ? "loaded" : ""}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.9, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <motion.div
        className={`floating-panel absolute top-[60%] right-[15%] w-40 h-40 glass-panel-strong rounded-full lazy-load ${isLoaded ? "loaded" : ""}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.8, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      />

      <motion.div
        className={`floating-panel absolute top-[30%] right-[25%] w-24 h-24 glass-panel-strong rounded-lg lazy-load ${isLoaded ? "loaded" : ""}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.7, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />

      <motion.div
        className={`floating-panel absolute top-[70%] left-[20%] w-36 h-36 glass-panel-strong rounded-2xl lazy-load ${isLoaded ? "loaded" : ""}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />

      {/* Painéis de vidro adicionais - Mais sólidos para maior nitidez */}
      <motion.div
        className={`floating-panel absolute top-[40%] left-[30%] w-28 h-28 glass-panel-strong rounded-lg transform rotate-45 lazy-load ${isLoaded ? "loaded" : ""}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.7, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      />

      <motion.div
        className={`floating-panel absolute top-[25%] right-[40%] w-20 h-20 glass-panel-strong rounded-full lazy-load ${isLoaded ? "loaded" : ""}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.8, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      />

      <motion.div
        className={`floating-panel absolute top-[80%] right-[30%] w-32 h-32 glass-panel-strong rounded-2xl transform -rotate-15 lazy-load ${isLoaded ? "loaded" : ""}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.9, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      />

      {/* Mais painéis de vidro - Mais sólidos para maior nitidez */}
      <motion.div
        className={`floating-panel absolute top-[15%] left-[45%] w-24 h-24 glass-panel-strong rounded-lg transform rotate-30 lazy-load ${isLoaded ? "loaded" : ""}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.8, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      />

      <motion.div
        className={`floating-panel absolute top-[55%] right-[5%] w-36 h-36 glass-panel-strong rounded-full lazy-load ${isLoaded ? "loaded" : ""}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.7, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      />

      <motion.div
        className={`floating-panel absolute top-[85%] left-[10%] w-40 h-40 glass-panel-strong rounded-2xl transform rotate-12 lazy-load ${isLoaded ? "loaded" : ""}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      />
    </div>
  )
}

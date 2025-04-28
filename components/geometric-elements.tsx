"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

export default function GeometricElements() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Reduzindo a quantidade de elementos para melhorar o desempenho */}
      <motion.div
        className="geometric-element geometric-shape geometric-triangle absolute top-[15%] left-[10%]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <motion.div
        className="geometric-element geometric-shape geometric-square absolute top-[30%] right-[20%]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <motion.div
        className="geometric-element geometric-shape geometric-circle absolute top-[20%] right-[30%]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 0.8 }}
        transition={{ duration: 0.5 }}
      />

      <motion.div
        className="geometric-element geometric-shape geometric-hexagon absolute top-[40%] left-[5%]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 0.9 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  )
}

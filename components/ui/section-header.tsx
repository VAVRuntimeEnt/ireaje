"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  description?: string
  className?: string
  titleClassName?: string
  descriptionClassName?: string
  inView?: boolean
}

export default function SectionHeader({
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
  inView = true,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn("text-center max-w-3xl mx-auto mb-6 md:mb-10 section-header", className)} // Reduced margin on mobile
    >
      <div className="glass-panel-strong p-4 md:p-8 rounded-2xl inline-block mb-4 md:mb-6">
        {" "}
        {/* Reduced padding and margin on mobile */}
        <h2 className={cn("text-2xl md:text-3xl lg:text-4xl font-bold gradient-text", titleClassName)}>{title}</h2>
      </div>
      {description && (
        <p className={cn("text-gray-600 leading-relaxed text-sm md:text-lg px-2 md:px-0", descriptionClassName)}>
          {description}
        </p> // Added horizontal padding on mobile
      )}
    </motion.div>
  )
}

"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface FeatureGridProps {
  children: ReactNode
  className?: string
  columns?: 1 | 2 | 3 | 4
  inView?: boolean
}

export default function FeatureGrid({ children, className, columns = 3, inView = true }: FeatureGridProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const columnsClass = {
    1: "grid-cols-1",
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={cn(`grid grid-cols-1 ${columnsClass[columns]} gap-6`, className)}
    >
      {children}
    </motion.div>
  )
}

"use client"

import { cn } from "@/lib/utils"

import { motion } from "framer-motion"
import Image from "next/image"

interface MicrosoftBadgeSimpleProps {
  className?: string
  inView?: boolean
}

export default function MicrosoftBadgeSimple({ className, inView = true }: MicrosoftBadgeSimpleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "glass-card-strong p-4 md:p-6 rounded-xl shadow-lg max-w-md mx-auto bg-gradient-to-r from-white/70 to-white/60 border border-brand/15 transition-all duration-300",
        className,
      )}
    >
      <div className="flex items-center justify-center gap-4">
        <div className="bg-white/60 p-2 md:p-3 rounded-lg shadow-md">
          <Image src="/microsoft-logo.png" alt="Microsoft" width={40} height={40} className="h-8 md:h-10 w-auto" />
        </div>
        <div className="text-center md:text-left">
          <p className="text-sm md:text-base text-gray-700 font-medium">Startup membro do</p>
          <p className="text-base md:text-lg font-bold gradient-text">Microsoft for Startups Founders Hub</p>
        </div>
      </div>
    </motion.div>
  )
}

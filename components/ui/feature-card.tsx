"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ChevronRight, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface FeatureCardProps {
  id: string
  title: string
  description: string
  icon: LucideIcon
  color: string
  linkHref?: string
  linkText?: string
  linkIcon?: "chevron" | "arrow"
  className?: string
  fullWidth?: boolean
  bgClassName?: string
}

export default function FeatureCard({
  id,
  title,
  description,
  icon: Icon,
  color,
  linkHref,
  linkText = "Saiba mais",
  linkIcon = "chevron",
  className,
  fullWidth = false,
  bgClassName,
}: FeatureCardProps) {
  const LinkIcon = linkIcon === "chevron" ? ChevronRight : ArrowRight

  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "glass-card-strong p-3 md:p-6 rounded-xl relative overflow-hidden", // Reduced padding on mobile
        fullWidth && "w-full",
        className,
      )}
    >
      {/* Background Gradient */}
      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-20 -z-10", color, bgClassName)}></div>

      <div className="flex items-start gap-3 md:gap-4">
        {" "}
        {/* Reduced gap on mobile */}
        <div className={`bg-gradient-to-br ${color} p-2 md:p-3 rounded-xl text-white shadow-lg`}>
          <Icon className="h-4 w-4 md:h-6 md:w-6" /> {/* Smaller icon on mobile */}
        </div>
        <div>
          <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2">{title}</h3>{" "}
          {/* Smaller text and margin on mobile */}
          <p className="text-gray-600 leading-relaxed text-xs md:text-sm">{description}</p>
        </div>
      </div>

      {linkHref && (
        <div className="mt-3 pt-3 md:mt-4 md:pt-4 border-t border-white/20 flex justify-end">
          {" "}
          {/* Reduced margin on mobile */}
          <Link href={linkHref}>
            <Button variant="ghost" size="sm" className="text-brand p-1 md:p-2">
              {" "}
              {/* Reduced padding on mobile */}
              <span className="text-xs md:text-sm">{linkText}</span>
              <LinkIcon className="ml-1 h-3 w-3 md:h-4 md:w-4" /> {/* Smaller icon on mobile */}
            </Button>
          </Link>
        </div>
      )}
    </motion.div>
  )
}
